# pylint: disable=C0114: missing-class-docstring
# pylint: disable=C0116:missing-function-docstring

import json
from subprocess import run
from sys import platform

from lib import Spinner


def find_unused_dependencies():
    div = "=" * 35
    use_shell = platform == "win32"

    deps_to_ignore_set = set(
        [
            # Expo packages that don't have imports
            "@expo/config-plugins",
            "@expo/webpack-config",
            "expo-build-properties",
            "expo-dev-client",
            "expo-insights",
            "expo-status-bar",
            "expo-updates",
            #
            # for Notifications
            "expo-task-manager",
            #
            # for expo-router
            "expo-web-browser",
            #
            # for nanoid
            "react-native-get-random-values",
            #
            # for firebase
            "@react-native-firebase/app-check",
            "@react-native-firebase/database",
            "@react-native-firebase/analytics",
            #
            # for react-navigation
            "@react-navigation/core",
            "@react-navigation/stack",
            #
            # for graphql
            "graphql",
            #
            # for react-native-collapsible-view
            "react-native-collapsible",
            #
            # small useful packages we use a lot
            "fast-equals",
            "fast-sort",
            "klona",
            "is-what",
            "map-anything",
            "postinstall-postinstall",
            "react-native-dotenv",
        ]
    )

    print(f"\nFinding unused dependencies\n{div}")

    with Spinner():
        cmd = ["npx", "depcheck", "--json"]
        depcheck_result = run(
            cmd, shell=use_shell, capture_output=True, text=True, check=False
        )
        depcheck_result_set = set(json.loads(depcheck_result.stdout)["dependencies"])
        unused_deps = depcheck_result_set - deps_to_ignore_set

    if len(unused_deps) > 0:
        print(f"\nFound these unused dependencies\n{div}")
        print(", \n".join(f"'{dep}'" for dep in sorted(unused_deps)))

        affirmative_responses = {"y", "yes", "Y", "YES", ""}
        response = (
            input(f"{div}\n\nRemove all? [yes] ").lower() in affirmative_responses
        )

        if response:
            cmd = ["yarn", "remove", *unused_deps]
            run(cmd, shell=use_shell, check=True)

        print(f"\nDone!\n{div}\n")

    else:
        print(f"\nDone! - No unused dependencies found.\n{div}\n")


if __name__ == "__main__":
    find_unused_dependencies()
