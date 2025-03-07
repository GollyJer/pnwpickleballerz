import sys
from pathlib import Path
from lib import (
    ensure_npm_package,
    my_run,
    pause_watchman,
    start_watchman,
    kill_java_processes,
    toggle_comment,
    colors,
)


def eas_build(profile, *args):
    div = "=" * 35
    print(colors.ORANGE + f"\nEAS Build - START 🟢\n{div}" + colors.ENDC)

    if not ensure_npm_package("dotenv-cli"):
        return False

    root_folder = Path().absolute()

    pause_watchman(root_folder)
    toggle_comment(".gitignore", "SECRETS/*", should_comment=True)
    print(colors.BLUE + f"\n*  EAS BUILD " + colors.ENDC + f"{profile}")
    my_run(["dotenv", "--", "eas", "build", f"--profile={profile}", "--local", *args])
    toggle_comment(".gitignore", "SECRETS/*", should_comment=False)
    kill_java_processes()
    start_watchman(root_folder)

    print(colors.ORANGE + f"\nEAS Build - COMPLETE ✔\n{div}" + colors.ENDC)


def eas_update(profile, *args):
    div = "=" * 35
    print(colors.ORANGE + f"\nEAS Update - START 🟢\n{div}" + colors.ENDC)

    if not ensure_npm_package("dotenv-cli"):
        return False

    root_folder = Path().absolute()

    pause_watchman(root_folder)
    toggle_comment(".env", "SECRETS_ENV='DEV'", should_comment=True)
    toggle_comment(".env", f"SECRETS_ENV='{profile.upper()}'", should_comment=False)
    my_run(["dotenv", "--", "eas", "update", "--clear-cache", *args])
    toggle_comment(".env", "SECRETS_ENV='DEV'", should_comment=False)
    toggle_comment(".env", f"SECRETS_ENV='{profile.upper()}'", should_comment=True)
    kill_java_processes()
    start_watchman(root_folder)

    print(colors.ORANGE + f"\nEAS Update - COMPLETE ✔\n{div}" + colors.ENDC)


def dev():
    eas_build("dev")


def staging():
    eas_build("staging")


def prod():
    eas_build("prod")


def simulator():
    eas_build("dev-ios-simulator", "--platform=ios")


def eas_update_prod():
    eas_update("prod")


def eas_update_staging():
    eas_update("staging")


if __name__ == "__main__":
    profile_dict = {
        "dev": dev,
        "staging": staging,
        "prod": prod,
        "simulator": simulator,
        "update-prod": eas_update_prod,
        "update-staging": eas_update_staging,
    }
    profiles = ", ".join(profile_dict.keys())

    if len(sys.argv) > 1:
        requested_profile = sys.argv[1]
        if requested_profile in profile_dict:
            profile_dict[requested_profile]()
        else:
            print(f"Unknown profile: {requested_profile}")
            print(f"Valid options are: {profiles}")
            sys.exit(1)
    else:
        print(f"Provide a profile argument: {profiles}")
        sys.exit(1)
