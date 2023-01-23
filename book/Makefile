# Makefile で引数を使う方法
# https://qiita.com/algas/items/499d0d69d51a1cc7639f

# 著者用のフルセットの本（管理用の記事を含む）をブラウザーで開き、ファイル更新をウォッチする
default:
	make preview target=devnote
	make watch target=devnote

# ファイル更新を監視し、リビルドします. watch.sh から make build を起動します
watch:
	bin/watch.sh $(target)

# ビルドされた本をfirefoxで開きます
# （ビルドされたそれぞれの本の場所は mapc-build-levels/$(target)/_build です）
# preview target=all や preview target=level1 として利用して下さい
preview:
	firefox ../mapc-build-levels/$(target)/_build/html/index.html &

# 各レベル毎の本をビルドします (build target=devnote は開発者向けの「執筆ノート」情報を追加した本をビルドします）
build-all:
	make build target=devnote
	make build target=level1
	make build target=level2
	make build target=level3
	make build target=level4
	make build target=level5
	make build target=level6
	make build target=level7
	make build target=level8
	make build target=level9
	make build target=level10

build:
	cd ../mapc-build-levels/$(target) ; jb build ./

# fish-shllのfunctionであるためか、以下のコマンドはないとして以下を実行できない. 手動で実施すること。
sync-all:
	sync-guidebook devnote
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

# ../gyazo-to-local/ にて、gyazoの画像を images/gyazo に落とし込んだあとに以下のコマンドを実行して下さい。
# gyazoのURLをローカルの images/gyazo/ を指すようにリファクタリングします
all-gyazo-to-local-images:
	make gyazo-to-local-images target=LEVEL1.md
	make gyazo-to-local-images target=LEVEL2.md
	make gyazo-to-local-images target=LEVEL3.md
	make gyazo-to-local-images target=LEVEL4.md
	make gyazo-to-local-images target=LEVEL5.md
	make gyazo-to-local-images target=LEVEL6.md
	make gyazo-to-local-images target=LEVEL7.md
	make gyazo-to-local-images target=LEVEL8.md
	make gyazo-to-local-images target=LEVEL9.md
	make gyazo-to-local-images target=LEVEL10.md
	make gyazo-to-local-images target=cards/devtools/screen-width.md
	make gyazo-to-local-images target=cards/devtools/device-mode.md
	make gyazo-to-local-images target=cards/devtools/box-model.md
	make gyazo-to-local-images target=cards/vscode/go-live.md
	make gyazo-to-local-images target=cards/vscode/save.md
	make gyazo-to-local-images target=cards/vscode/auto-complete.md
	make gyazo-to-local-images target=cards/devtools/japanese.md
	make gyazo-to-local-images target=cards/new-file.md
	make gyazo-to-local-images target=cards/url-chars.md
	make gyazo-to-local-images target=cards/favicon.md
	make gyazo-to-local-images target=cards/google-fonts.md
	make gyazo-to-local-images target=cards/view-source.md
	make gyazo-to-local-images target=cards/extension-settings.md
	make gyazo-to-local-images target=cards/figma.md
	make gyazo-to-local-images target=cards/open-folder.md
	make gyazo-to-local-images target=equip.md
	make gyazo-to-local-images target=intro.md
	make gyazo-to-local-images target=ux.md

gyazo-to-local-images:
	sed -r 's/https:\/\/(i.)?gyazo.com/images\/gyazo/' $(target) > /tmp/tmp.md
	mv /tmp/tmp.md $(target)
	@echo 置換箇所一覧:
	grep gyazo $(target)

