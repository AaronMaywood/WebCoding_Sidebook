extrac-gyazo-url:
	rg gyazo.com ../book/*.md ../book/cards > gyazo.list
	@ echo gyazo.list を生成しました. $ make download でgyazo.list に含まれるURLのリソースを gyazo フォルダにダウンロードします。

download:
	@ echo gyazo.list に含まれるURLリソース（画像）を gyazoフォルダにダウンロードします。	
	node index.js
	@ echo gyazo.list に含まれるURLリソース（画像）を gyazoフォルダにダウンロードしおわりました。なおgyazoフォルダは ../book/images/gyazo としてシンボリックリンクを張っているため、そちらの中身も更新ずみです
	cd ../book; make gyazo-to-local-images
