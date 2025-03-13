# 以下のエラーが出る場合は
# Error: Cannot find module 'request-promise'
# 次のコマンドを実行して下さい。
# @ npm install request-promise --save
extract-gyazo-url:
	rg gyazo.com ../book/*.md ../book/cards > gyazo.list
	@ echo gyazo.list を生成しました. $ make download でgyazo.list に含まれるURLのリソースを gyazo フォルダにダウンロードします。

# Unhandled rejection RequestError: AggregateError
# が大量に出ても気にしない（おそらく大量の画像を一気にリクエストするからだと思う）
# 待てば終わる
# そして本を書き出し、git diff の差分を見ながら検証し、画像リンクが剥がれている箇所は https://i.gyazo.com に修正する
# 再度このフォルダで make extract-gyazo-url からの手順をエラーが出なくなるまで再帰的に実行する
download:
	@ echo gyazo.list に含まれるURLリソース（画像）を gyazoフォルダにダウンロードします。	
	node index.js
	@ echo gyazo.list に含まれるURLリソース（画像）を gyazoフォルダにダウンロードしおわりました。なおgyazoフォルダは ../book/images/gyazo としてシンボリックリンクを張っているため、そちらの中身も更新ずみです
	cd ../book; make gyazo-to-local-images
