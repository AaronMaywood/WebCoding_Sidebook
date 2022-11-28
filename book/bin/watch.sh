#!/usr/bin/bash
# srcフォルダ直下のファイル書き込みを監視してbuild&ブラウザーの再読込
#
# 使用方法
# 1) 本全体をビルド
#     watch
# 2) LEVEL1用の本をビルド
#     watch level=level1
#
# MEMO bash で引数あり/なしを判定する方法
# http://itdoc.hitachi.co.jp/manuals/3020/30203S3530/JPAS0134.HTM
# 	 echo $1
# 	 if [[ -n $1 ]]; then
# 	   echo 引数あり
# 	 else
# 	   echo 引数なし
# 	 fi

while true
do
  if [[ -n $1 ]]; then
    arg="build-$1"
    echo $arg
  else
    arg="build"
    echo $arg
  fi
  
  RESULT=$(inotifywait -e modify -q ./ 2>&1)
  echo $RESULT
  make $arg
  bin/reload.sh
done
