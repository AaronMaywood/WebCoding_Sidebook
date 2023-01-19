express-gyazo-url:
	rg gyazo.com ../book/*.md ../book/cards > gyazo.list
	@ echo gyazo.list を生成しました. $ make download でgyazo.list に含まれるURLのリソースを gyazo フォルダにダウンロードします。

download:
	@ gyazo.list に含まれるURLリソース（画像）を gyazoフォルダにダウンロードします。	
	node index.js
	@ gyazo.list に含まれるURLリソース（画像）を gyazoフォルダにダウンロードしおわりました。なおgyazoフォルダは ../book/images/gyazo としてシンボリックリンクを張っているため、そちらの中身も更新ずみです
	@ vim で原稿ファイルを :%s/https:\/\/i.gyazo.com/images\/gyazo/gc で置換して下さい。
