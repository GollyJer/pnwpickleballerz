from subprocess import run, DEVNULL
from sys import platform, stdout
from pathlib import Path

import threading
import time
from itertools import cycle
import os
import time


class colors:
    BLUE = "\033[94m"
    RED = "\033[91m"
    ORANGE = "\033[93m"
    ENDC = "\033[0m"


# Default NPM command to silence annoying output.
NPM = ["npm", "--no-fund", "--no-audit", "--loglevel=error", "--trace-deprecation"]


def my_run(cmd, **kwargs):
    # setting shell=True when running on Windows.
    return run(cmd, shell=platform == "win32", check=False, **kwargs)


class Spinner:
    """
    A class for displaying a spinning cursor animation.

    Usage:
    with Spinner():
        # Perform some time-consuming task
        time.sleep(5)
    """

    def __init__(self, show_check=False):
        self._stop_event = threading.Event()
        self._show_check = show_check

    def __enter__(self):
        self.start()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stop()

    def start(self):
        self._stop_event.clear()
        threading.Thread(target=self._spin).start()

    def stop(self):
        if self._show_check:
            stdout.write("\b✔\n")  # Show checkmark
        else:
            stdout.write(" \b\b")  # Clear the spinner
        self._stop_event.set()

    def _spin(self):
        for cursor in cycle("|/-\\"):
            stdout.write(cursor)
            stdout.flush()
            time.sleep(0.1)
            if self._stop_event.is_set():
                break
            stdout.write("\b")


def ensure_npm_package(package_name: str, global_install: bool = True) -> bool:
    """
    Ensure an npm package is installed and up to date
    Args:
        package_name: Name of the npm package
        global_install: Whether to install globally (default: True)
    Returns:
        bool: True if package is ready to use, False if there was an error
    """
    try:
        install_flag = "-g" if global_install else ""
        print(
            colors.BLUE
            + "*   ENSURING "
            + colors.ENDC
            + f"{package_name}"
            + colors.BLUE
            + " is installed and up to date."
            + colors.ENDC
        )

        with Spinner():
            result = my_run(
                NPM + ["list", install_flag, package_name],
                capture_output=True,
                text=True,
            )
            is_installed = package_name in result.stdout

            version_result = my_run(
                NPM + ["view", package_name, "version"], capture_output=True, text=True
            )
            if version_result.returncode != 0:
                raise Exception("Not found in npm registry.")

            latest_version = version_result.stdout.strip()

        if not is_installed:
            print(colors.BLUE + "*  NOT FOUND " + colors.ENDC)
            print(
                colors.BLUE + f"* INSTALLING " + colors.ENDC + f"{latest_version}",
                end=" ",
            )
            with Spinner(show_check=True):
                my_run(
                    NPM + ["i", install_flag, package_name, "--yes"],
                    capture_output=True,
                )
        else:
            installed_version = result.stdout.split("@")[-1].strip()
            print(colors.BLUE + "*  INSTALLED " + colors.ENDC + installed_version)
            print(colors.BLUE + "*     LATEST " + colors.ENDC + latest_version, end=" ")

            if installed_version != latest_version:
                print(colors.BLUE + f"\n*   UPDATING" + colors.ENDC, end=" ")
                with Spinner(show_check=True):
                    my_run(
                        NPM + ["i", install_flag, package_name + "@latest", "--yes"],
                        capture_output=True,
                    )
            else:
                print(f"✔")

        return True
    except Exception as e:
        print(colors.RED + f"*      ERROR " + f"{e}" + colors.ENDC)
        return False


def is_watchman_installed():
    try:
        result = my_run(["watchman", "--version"], capture_output=True, text=True)
        if result.returncode == 0:
            return True
        else:
            return False
    except FileNotFoundError:
        return False


def is_folder_watched_man(root_folder):
    """Check if a folder is currently being watched by watchman"""
    try:
        if is_watchman_installed():
            result = my_run(
                ["watchman", "watch-list"],
                capture_output=True,
                text=True,
                stderr=DEVNULL,
            )
            return str(root_folder) in result.stdout
        return False
    except Exception:
        return False


def pause_watchman(root_folder):
    """Temporarily stop watchman from watching a folder"""
    try:
        if is_watchman_installed() and is_folder_watched_man(root_folder):
            my_run(
                ["watchman", "watch-del", root_folder], stdout=DEVNULL, stderr=DEVNULL
            )
            print(colors.BLUE + "* Paused Watchman monitoring" + colors.ENDC)
    except Exception as e:
        print(colors.RED + f"Failed to pause Watchman: {e}" + colors.ENDC)


def start_watchman(root_folder):
    """Start or resume watchman monitoring for a folder"""
    try:
        if is_watchman_installed() and not is_folder_watched_man(root_folder):
            my_run(
                ["watchman", "watch-project", root_folder],
                stdout=DEVNULL,
                stderr=DEVNULL,
            )
            print(colors.BLUE + "* Started Watchman monitoring" + colors.ENDC)
    except Exception as e:
        print(colors.RED + f"Failed to start Watchman: {e}" + colors.ENDC)


def kill_java_processes():
    if platform == "win32":
        return

    try:
        # Kill Java processes on macOS
        my_run(["pkill", "-f", "java"])
        print("Java processes terminated.")
    except Exception as e:
        print(f"Failed to terminate Java processes: {e}")


def toggle_comment(path, line_to_toggle, should_comment):
    try:
        with open(path, "r") as file:
            lines = file.readlines()

        for i, line in enumerate(lines):
            stripped_line = line.strip()
            if should_comment and stripped_line == line_to_toggle:
                lines[i] = f"# {line}"
                break
            elif not should_comment and stripped_line.lstrip("# ") == line_to_toggle:
                lines[i] = line.lstrip("# ")
                break

        with open(path, "w") as file:
            file.writelines(lines)

        print(
            colors.BLUE
            + f"\n* {line_to_toggle} "
            + colors.ENDC
            + f"in "
            + colors.BLUE
            + f"{path} "
            + colors.ENDC
            + f"{'commented' if should_comment else 'uncommented'} successfully"
        )

    except Exception as e:
        print(colors.RED + f"* ERROR " + f"{e}" + colors.ENDC)


def touch_file(file_path):
    current_time = time.time()
    try:
        os.utime(file_path, (current_time, current_time))
    except FileNotFoundError:
        print(colors.RED + f"Error: {file_path} does not exist." + colors.ENDC)


def delete_file(root_folder, file_path):
    try:
        Path.unlink(root_folder / file_path, missing_ok=False)
        print(f"- Deleted {file_path}.")
    except FileNotFoundError:
        pass
