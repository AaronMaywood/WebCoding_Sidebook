# Makefile で引数を使う方法
# https://qiita.com/algas/items/499d0d69d51a1cc7639f

# 著者用のフルセットの本（管理用の記事を含む）をブラウザーで開き、ファイル更新をウォッチする
default: preview watch

build:
	jb build ./

watch:
	bin/watch.sh $(level)

preview:
	firefox _build/html/index.html &

# 配付用のLEVEL1の本をブラウザーで開く
preview-level1:
	firefox ../mapc-build-levels/level1/_build/html/index.html &

build-and-sync-all: build build-level1 build-level2 build-level3 build-level4 build-level5 build-level6 build-level7 build-level8 build-level9 build-level10 sync-all

build-level1:
	cd ../mapc-build-levels/level1 ; jb build ./
build-level2:
	cd ../mapc-build-levels/level2 ; jb build ./
build-level3:
	cd ../mapc-build-levels/level3 ; jb build ./
build-level4:
	cd ../mapc-build-levels/level4 ; jb build ./
build-level5:
	cd ../mapc-build-levels/level5 ; jb build ./
build-level6:
	cd ../mapc-build-levels/level6 ; jb build ./
build-level7:
	cd ../mapc-build-levels/level7 ; jb build ./
build-level8:
	cd ../mapc-build-levels/level8 ; jb build ./
build-level9:
	cd ../mapc-build-levels/level9 ; jb build ./
build-level10:
	cd ../mapc-build-levels/level10 ; jb build ./

# fish-shllのfunctionであるためか、以下のコマンドはないとして以下を実行できない. 手動で実施すること。
sync-all:
	sync-guidebook level1
	sync-guidebook level2
	sync-guidebook level3
	sync-guidebook level4
	sync-guidebook level5
	sync-guidebook level6
	sync-guidebook level7
	sync-guidebook level8
	sync-guidebook level9
	sync-guidebook level10
