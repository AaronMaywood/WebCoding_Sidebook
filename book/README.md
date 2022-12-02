# ガイドブックのレベル別URL

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

# 開発時の対話環境 - 確認用のブラウザを立ち上げ、ファイル更新時にビルド＆リロードする

```
make
```

このコマンドは、以下のコマンドの組み合わせです。

- ビルドのみ
	```
	make build
	```
- プレビューのみ
	```
	make preview
	```
- ファイルの更新を監視してビルド＆Firefox更新のみ
	```
	make watch
	```

## LEVEL1の本を書く時に使用するコマンド

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

## fish シェルスクリプト

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


