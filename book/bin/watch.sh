#!/usr/bin/bash
# srcフォルダ直下のファイル書き込みを監視してbuild&ブラウザーの再読込

while true
do
  RESULT=$(inotifywait -e modify -q ./ 2>&1)
  echo $RESULT
  make build
  bin/reload.sh
done
