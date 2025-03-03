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
	make build target=devnote &
	make build target=level1 &
	make build target=level2 &
	make build target=level3 &
	make build target=level4 &
	make build target=level5 &
	make build target=level6 &
	make build target=level7 &
	make build target=level8 &
	make build target=level9 &
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
gyazo-to-local-images:
	rg -l gyazo.com -g '**/*.md' | xargs sed -i -e 's|https://i.gyazo.com|images/gyazo|'
	@echo gyazoのURLをローカルのimages/gyazoに書き換えました. book フォルダにて、git diff で確認して下さい。

build-pdf:
	cd ../mapc-build-levels/level10 ; jb build . --builder pdfhtml  
	@echo "../mapc-build-levels/level10/_build/pdf を生成しました"
	@echo "なお、このPDFの印刷品質は不完全で、コンテンツがページの途中で切れてしまいます。別途 `make build-singlehtml`で作成した単一ページの`index.html`を元に、Google Chrome でPDF化してください。"

build-singlehtml:
	cd ../mapc-build-levels/level10;  jb build . --builder singlehtml
	@echo "../mapc-build-levels/level10/_build/singlehtml フォルダを生成しました"
	@echo "ビルドした singlehtml フォルダをGoogle Drive に移動するには  sudo mv ../mapc-build-levels/level10/_build/singlehtml /mnt/google/  を実行して下さい。"
	@echo "singlehtml/index.html をGoogle Chrome で開いてPDF化して下さい。"
	@echo "Google Chrome で開いたあとに、全てのドロップダウンを展開する以下のスクリプトをコンソールから実行して下さい。"
	@echo "// ドロップダウンをすべて展開する"
	@echo "let s = document.querySelectorAll('summary');"
	@echo "s.forEach(summary => summary.click());"
	@echo "PDF化する時の設定は、https://i.gyazo.com/ac6b28364e7c932123c30802d51cfd35.png を参照して下さい。"
	@echo "なお、https://i.gyazo.com/0ee1068505b6777175d71c579b009c07.png にコンテンツが切れる箇所があります。まだ印刷設定は不完全なので見直して下さい。"
	@echo "関連: 2023\10\2023-10-20-090031.txt|39| = [jupyterbook][pdf] よりよいPDF書き出し方法"


