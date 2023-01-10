# WebCoding_Sidebook

以下のテキストの副読本
- HTML_CSS_Sass_SCSS.pdf

このリポジトリーは、https://github.com/AaronMaywood/WebCodingTextbookの中断を受けて開始しました。
JupyterBookで出版する仕組みをそのまま流用しているので、設定ファイルなどは共通点があります。

## 関連資料
- https://www.figma.com/file/GVVSLV0yBe9qVhKVdZZ6yI/%E3%82%B3%E3%83%BC%E3%83%80%E3%83%BC%E3%81%AE%E5%9C%B0%E5%9B%B3%EF%BC%88%E6%A6%82%E5%BF%B5%E9%9A%8E%E5%B1%A4%EF%BC%89-%E9%AB%98%E6%A9%8B%E5%85%88%E7%94%9F%E3%81%AE%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E7%B7%A8?node-id=0%3A1
- 昇段試験合格案内集
	https://docs.google.com/document/d/1q8QJhsaq7xCMHLkFfy8-gpw1EYzr6qKif7AX53opJzQ/edit#
- 査読フィードバック
	https://docs.google.com/spreadsheets/d/1G7E-Co0QIncXFfHJQSDzc6wdNHIhodR-4uo_FsTPArg/edit#gid=0 

## 本の構成

レベルをクリアーしないと次のテキストが閲覧できないようにするため、レベル１の本、レベル２の本などと分冊しています。
そのため、各レベル毎の本のビルド＆アップロードを分けてできるようにしています。

### ガイドブックのレベル別URL

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

```
cd ~/WebCoding_Sidebook/book
make watch level=level1
```
この状態で ~/WebCoding_Sidebook/book/LEVEL1.md などのテキストを編集すると自動的にビルドされる。
ビルドされたウェブサイトは、 ~/WebCoding_Sidebook/mapc-build-levels/level1/_build/html/index.html から確認できる。
adjustacademy.comに公開するには、
```
sync-guidebook level1
```
コマンドを実行する。
コマンドを実行すると、実行結果としてURLが手に入る。
```
See: https://adjustacademy.com/webcoder/guidebook/c341b271f5dba18dd4099435670a2c74/
```

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

## 使用する画像
- Wikipedia 
 - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Windows_key_logo_2012_%28dark-grey%29.svg/800px-Windows_key_logo_2012_%28dark-grey%29.svg.png
- Unsplash.com
 - https://unsplash.com/ja/%E5%86%99%E7%9C%9F/f4rYLkBy0gU

