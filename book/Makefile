default: preview watch

watch:
	bin/watch.sh $(level)

preview:
	firefox _build/html/index.html &

build:
	jb build ./
	
build-level1:
	cd ../mapc-build-levels/level1 ; jb build ./
