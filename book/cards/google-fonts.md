`````{div} taskcard
````{card} Google Fonts の使用方法
Google FontsとはWeb上で提供するフォント（WebFont）のサービスで、無料で様々なフォントを提供しています。
従来、ページにフォントを組み込むには、画像ファイル等と同様にフォントファイルを自前で用意する必要がありましたが、Google FontsのようなWebFontのサービスを使えばフォントをダウンロードする必要がありません。

（同様のサービスとして[Adobe Fonts](https://fonts.adobe.com/)があります。こちらは有料ですが、有償のフォントを含むより大きなフォントのコレクションとなっています。）

使用方法を説明します。
ここでは"Work Sans"フォントのウェイト３種(Regular 400, Medium 500, BOLD 700)と"Crimson Text"フォントのウェイト１種(BOLD 700)を使用できるまでの説明をします。

- https://fonts.google.com/ にアクセスします。
	```{figure} images/gyazo/0952df454f7f7e63164be1f9c1f6dd42.png
	Google Fontsのトップページに来ました。
	```
- 最初のフォント"Work Sans"を探して追加します。
	```{figure} images/gyazo/288d685442cbdc885d71a7ec0db51ee3.png
	"work sans"を検索し、ページ下に検索結果が出てきたらそれをクリックします。
	```
	```{figure} images/gyazo/e20fa6912b54556d24a056794fb860e3.png
	Work Sansのトップページに来ました。
	```
	スクロールして、見出し「Styles」を探します。
	```{figure} images/gyazo/b9e30470dac8f5f9a73a947ff6399bb0.png
	この場所がStylesです。
	```
	ここから Regular(400) を探します。
	```{figure} images/gyazo/3975762eaaa1f40dca317961a28dbf10.png
	Regular 400が見つかったので、右の＋アイコンをクリックして追加します。
	```
	```{figure} images/gyazo/c1364fc9fabeb0af40c999d270e4e0d2.png
	右上に青の吹き出し「選択したフォントファミリーを他の人と共有できるようになりました」が出ますが、その必要はありません。「Dismiss（解散）」をクリックして閉じます。
	```
	```{figure} images/gyazo/1e5bd7465c6869a11d7c7a6e1b90a8de.png
	右側に追加したフォント（Work Sans Regular 400）が表示されています。
	```

	残りのウェイト（Medium 500、BOLD 700）を探して追加します。
	```{figure} images/gyazo/26d255547b9e4ad3e6b03498d1ee791c.png
	Work Sans のウェイトは全て選び終わり、画面右側に選んだ状況が示されています。
	```
- 次のフォント"Crimson Text"を検索し、指定のウェイトを追加します。
	一度「Google Fonts」のロゴをクリックして、検索画面に戻って下さい。
	```{figure} images/gyazo/9b995d201f4871b027028fc07cf73c47.png
	Google Fontsのトップページから改めて「Crimson Text」を検索します。検索結果の`Crimson Text`のフォントをクリックして選択します。
	```
	```{figure} images/gyazo/b26e13fda2b23467bb9b5855b5ac9df1.png
	BOLD(700)を追加すると、右側の選択済みフォントファミリーに追加されました。
	```

必要なフォントを全て選択し終えました。

- 次にこれらフォントを利用するためのコードスニペット（コピペで利用できるコード片）を入手します。
	```{figure} images/gyazo/a662f0f6e734002b45f5b2c7124ed9f6.png
	ページの右下に表示されているものがコードスニペットです。
	```
	```{figure} images/gyazo/56f4e9420b244480f6b9de2096fab16e.png
	コードスニペットの部分を拡大しました。
	①をHTMLに貼ればこのフォントが利用可能になります。
	また、このフォントを利用する際にはCSSに②に示されたプロパティを記述します。
	```

Google Fontsの利用方法は以上です。

参考までに上記の手順で入手したGoogle Fontsを使用したページのサンプルを用意しました。

- https://aaronmaywood.github.io/coding_sample/google-font/ （画面表示とソースの両方を覗いてみてください。ソースはHTMLとCSSの両方を覗いて下さい。）
````
`````
