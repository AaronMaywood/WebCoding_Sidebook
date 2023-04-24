# WebCoding_Sidebook

以下のテキストの副読本
- HTML_CSS_Sass_SCSS.pdf

このリポジトリーは、https://github.com/AaronMaywood/WebCodingTextbookの中断を受けて開始しました。
JupyterBookで出版する仕組みをそのまま流用しているので、設定ファイルなどは共通点があります。

## ビルド環境(JupyterBook)のセットアップ

https://github.com/AaronMaywood/Frontend-Guidebook#%E3%83%93%E3%83%AB%E3%83%89%E7%92%B0%E5%A2%83jupyterbook%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97 を参照のこと.

## 関連資料
- https://www.figma.com/file/GVVSLV0yBe9qVhKVdZZ6yI/%E3%82%B3%E3%83%BC%E3%83%80%E3%83%BC%E3%81%AE%E5%9C%B0%E5%9B%B3%EF%BC%88%E6%A6%82%E5%BF%B5%E9%9A%8E%E5%B1%A4%EF%BC%89-%E9%AB%98%E6%A9%8B%E5%85%88%E7%94%9F%E3%81%AE%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E7%B7%A8?node-id=0%3A1
- 昇段試験合格案内集
	https://docs.google.com/document/d/1q8QJhsaq7xCMHLkFfy8-gpw1EYzr6qKif7AX53opJzQ/edit#
- 査読フィードバック
	https://docs.google.com/spreadsheets/d/1G7E-Co0QIncXFfHJQSDzc6wdNHIhodR-4uo_FsTPArg/edit#gid=0 
- 教材
  - スクラッチボード https://github.com/AaronMaywood/coding_sample
  - 各昇段試験
    - https://github.com/AaronMaywood/quick-hummus
    - https://github.com/AaronMaywood/exam_page
    - https://github.com/AaronMaywood/exam_position
    - https://github.com/AaronMaywood/exam_flexbox
    - https://github.com/AaronMaywood/exam_float
    - https://github.com/AaronMaywood/text-style
    - https://github.com/AaronMaywood/wikipedia
    - https://github.com/AaronMaywood/Website3
    - https://github.com/AaronMaywood/Website2
    - https://github.com/AaronMaywood/Website1
    - https://github.com/AaronMaywood/responsive-by-JoyShaheb 
    - https://github.com/AaronMaywood/boxmodel
- クリエィティブ試し読み依頼
	- https://docs.google.com/document/d/1IPSoQN2xTI5yhdi1tLg-CgRiHHZYWpUpsekxR9-eg5o/edit#heading=h.2g8u224ivt9a

## 本の構成

レベルをクリアーしないと次のテキストが閲覧できないようにするため、レベル１の本、レベル２の本などと分冊しています。
そのため、各レベル毎の本のビルド＆アップロードを分けてできるようにしています。

### ガイドブックのレベル別URL

これは、
```
$ sync-guidebook level1
```
にて更新可能です。

各レベルのガイドブックは`リンクを知っている人のみ公開`のため、
URLの一部をハッシュ化しています。

開発者ノート
https://adjustacademy.com/webcoder/guidebook/648f5e3e0c55d39eb4a86e7bd27beb42/ux.html
LEVEL1
https://adjustacademy.com/webcoder/guidebook/c341b271f5dba18dd4099435670a2c74/intro.html
LEVEL2
https://adjustacademy.com/webcoder/guidebook/3105bcfda5ac6fb239ab134c6724673d/LEVEL2.html
LEVEL3
https://adjustacademy.com/webcoder/guidebook/4ef776be94016c7f142dbf944ff7a346/LEVEL3.html
LEVEL4
https://adjustacademy.com/webcoder/guidebook/c9dfacd4ab90728131cba2fa604329da/LEVEL4.html
LEVEL5
https://adjustacademy.com/webcoder/guidebook/f0e1b9d28a0727854d55285611a4ee4e/LEVEL5.html
LEVEL6
https://adjustacademy.com/webcoder/guidebook/564e62a14b2375021a130647d3f8250f/LEVEL6.html
LEVEL7
https://adjustacademy.com/webcoder/guidebook/061d06844f75ab4a77087f83f09f1bec/LEVEL7.html
LEVEL8
https://adjustacademy.com/webcoder/guidebook/f9438d369d723c8e8b6cdc3f1cd78b64/LEVEL8.html
LEVEL9
https://adjustacademy.com/webcoder/guidebook/eaff21cfa63a828f34f02f4bc739a5de/LEVEL9.html
LEVEL10
https://adjustacademy.com/webcoder/guidebook/f3a643dd575af9baeb1ba1d032959358/LEVEL10.html


### LEVEL1の本を書く時に使用するコマンド

ビルドされたウェブサイトをプレビューするため、以下のコマンドを実行しておく
```
$ cd ~/WebCoding_Sidebook/book
$ pwd
/home/yasumura/WebCoding_Sidebook/book	# makeツールを使うときには book フォルダにいること
$ make preview target=level1
```
次に、ファイル更新を監視してビルドを繰り返すバッチを起動しておく
```
$ make watch target=level1
```

この状態で ~/WebCoding_Sidebook/book/LEVEL1.md などのテキストを編集すると自動的にビルドされる。（ブラウザーを開いていたら、ブラウザーがリロードされる）

adjustacademy.comに公開するには、
```
sync-guidebook level1
```
コマンドを実行する。
コマンドを実行すると、実行結果としてURLが手に入る。
```
See: https://adjustacademy.com/webcoder/guidebook/c341b271f5dba18dd4099435670a2c74/
```

### 警告 ビルド時のエラー

IndexError: list index out of range エラーでビルドに失敗することがある。

```
Exception occurred:
  File "/home/yasumura/.local/lib/python3.8/site-packages/markdown_it/rules_block/state_block.py", line 137, in isEmpty
    return (self.bMarks[line] + self.tShift[line]) >= self.eMarks[line]
  ...略
IndexError: list index out of range
```

ux.md 編集時にみられた。ux.md の中身を空にするとビルド成功し、中身を戻すとエラーとなった。
このことから、ux.md の中の特定の文字が悪さをすると思い、二分探索で調査したが、エラーが発生する箇所が行末にあることはわかったものの、その行末だけを抽出した場合にはエラーと
ならないため、特定の書式や文字がおかしいわけではない。

したがって、このエラーが誘発される原因はわからず、単に「ビルドに失敗することがあり、そのさいはテキストを調整して出ないようにする」としか言えない。

## 昇段試験教材の提供方法

LEVEL1の昇段試験を例にとって説明する。

LEVEL1の昇段試験のソースコードは
https://github.com/AaronMaywood/quick-hummus
で管理しており、
試験に使用する教材を main ブランチにて、模範解答を answer ブランチにて管理している。

ユーザーに直でgithubから素材をダウンロードさせるようにすると、すぐにanswerブランチに答えがあることに気づくため、githubから直には素材をダウンロードさせず、フォルダ名をハッシュ化した上でadjustacademy.comで配付する。

そのためのツールが`download-zip-to-rename-by-hash`で、それにGitHub のzipダウンロード用URLを渡して使用する。
```
$ download-zip-to-rename-by-hash https://github.com/AaronMaywood/quick-hummus/archive/refs/heads/answer.zip^
指定されたリポジトリーがPUBLICである必要があります。（でないと壊れたZIPがadjustacademy.comにアップロードされます) よろしいですか？[Y/n]:
read>                   ↑確認のうえ、[Enter] を押す
実行します。
...略...
https://adjustacademy.com/webcoder/f0bc3a313cc5162e2e83b2d6eb51656d.zip    ←これがアップロード後のURL
```

## fish シェルスクリプト

使用する`fish`シェルスクリプトについてです。

```~.config/fish/config.fish
# [2022-11-14] 2022\11\2022-11-14-120952.txt|43| = 試験の素材と解答の提供方法
# GitHub のZIPダウンロードURLを指定し、そのURLのハッシュ値を用いたzipファイルを用意する
function download-zip-to-rename-by-hash
	echo "指定されたリポジトリーがPUBLICである必要があります。（でないと壊れたZIPがadjustacademy.comにアップロードされます) よろしいですか？[Y/n]: "
	read ANS
	switch $ANS
		case "" Y y
			echo "実行します。"
			wget $argv[1] -O /tmp/temp.zip
			set -l hash (echo $argv[1] | md5sum | sed -e 's/^\([0-9a-f]\+\)  -/\1/')
			mv /tmp/temp.zip /tmp/{$hash}.zip
			scp -i ~/.ssh/adjust /tmp/{$hash}.zip adjust@adjustacademy.com:webcoder
			echo https://adjustacademy.com/webcoder/{$hash}.zip
		case '*'
			echo "中断します。"
	end
end

function sync-404
	# 存在しないページに対し、レベルアップを要求するエラーページをアップロード
	scp -i ~/.ssh/adjust -r ~/WebCoding_Sidebook/book/deploy/* adjust@adjustacademy.com:webcoder/guidebook/
	scp -i ~/.ssh/adjust -r ~/WebCoding_Sidebook/book/deploy/.htaccess adjust@adjustacademy.com:webcoder/guidebook/
	scp -i ~/.ssh/adjust -r ~/WebCoding_Sidebook/book/deploy/.htpasswd adjust@adjustacademy.com:webcoder/guidebook/
end

# LEVELn の本をアップロードする
# 使用方法
# $ sync-guidebook level1
function sync-guidebook
	set -l hash (echo $argv[1] | md5sum | sed -e 's/^\([0-9a-f]\+\)  -/\1/')
	rsync -e "ssh -i ~/.ssh/adjust" -avz --delete ~/WebCoding_Sidebook/mapc-build-levels/{$argv[1]}/_build/html/ adjust@adjustacademy.com:webcoder/guidebook/{$hash}/
	echo "See: https://adjustacademy.com/webcoder/guidebook/$hash/"
end
```

## スクリーンショットのワークフロー

スクリーンショットはGyazoを使用してインターネットにアップロードし、外部URLの埋め込みとして使用している。

スクリーンショットに説明を入れたい場合には、撮ったスクリーンショットをFigmaに貼り付け、Figmaで説明を入れた上でその画像をGyazoで撮影し、使用している。


### スクリーンショットのGyazo依存を止めて全画像をローカルにダウンロードする方法

gyazoのURLを埋め込んだら次のコマンドを実行してローカル化して下さい。

# gyazoのURLから画像を book/images/gyazoにダウンロードする

```
$ cd gyazo-to-local
$ make extract-gyazo-url
$ make download
```

## 使用する画像のライセンス
- Wikipedia 
 - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Windows_key_logo_2012_%28dark-grey%29.svg/800px-Windows_key_logo_2012_%28dark-grey%29.svg.png
- Unsplash.com
 - https://unsplash.com/ja/%E5%86%99%E7%9C%9F/f4rYLkBy0gU

