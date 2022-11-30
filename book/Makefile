# Makefile で引数を使う方法
# https://qiita.com/algas/items/499d0d69d51a1cc7639f

default: preview watch

watch:
	bin/watch.sh $(level)

preview:
	firefox _build/html/index.html &

build:
	jb build ./
	
build-level1:
	cd ../mapc-build-levels/level1 ; jb build ./
build-level2:
	cd ../mapc-build-levels/level2 ; jb build ./

sync:
	sync-guidebook level1
	sync-guidebook level2
