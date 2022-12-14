#!/usr/bin/bash
# Firefoxのリロード (https://gordiustears.net/how-to-reload-firefox-from-command-line/より)

set -o errexit
set -o nounset

#keystroke="CTRL+F5"
keystroke="F5"

# set to whatever's given as argument, defaults to firefox
BROWSER="${1:-firefox}"

# find all visible browser windows
browser_windows="$(xdotool search --sync --all --onlyvisible --name ${BROWSER})"

# Send keystroke
for bw in $browser_windows; do
xdotool key --window "$bw" "$keystroke"
done
