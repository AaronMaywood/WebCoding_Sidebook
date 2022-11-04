````{tip}
**リセットCSS**

リセットCSSとは、製作者がコーディングしやすいスタイルの規定の状態を作り出すCSS設定のことです。

リセットCSSには２つの目的があります。

1. ブラウザー毎の差異をなくす
   ブラウザーには予め規定のスタイルが埋め込まれており、CSSを書かなくとも`h1`の文字サイズが大きく表示されたりします。
   しかしこの規定のスタイルはブラウザー毎に細かな差異があり、あるブラウザーで見た時と別のブラウザーで見た時の違いを生みます。
   リセットCSSはこのブラウザー毎の差をなくす目的があります。

2. ブラウザー規定のスタイルを打ち消す
   また、ブラウザー規定のスタイルが使いにくく、かえって邪魔なことがあります。
   そのCSSを使いやすい状態にするためにもリセットCSSが使われます。
   ```{code} css
   /* ブラウザー規定のマージンとパディングが邪魔なため、0に戻す */
   * {
     margin: 0;
     padding: 0;
   }
   ```

このようにリセットCSSとは、製作者の都合に併せてCSSの規定の状態をリセット（好ましい規定の情報を再び設定）するために書かれるCSSのことです。

**リセットCSSと一口に言っても、どこまでどんな風にリセットするかには製作者毎の意見があり、様々な種類・手法があります。**
したがってリセットCSSは特定のCSSコードを指すのではなく、リセットするために書いたCSSという概念であることを了承下さい。

テキストでもその状況に応じていくつかのリセットCSSを使い分けています。

**「CSS3基礎」**ではリセットCSSでも最もシンプルなmarginとpaddingを0にする構成を使用します。
```{code} css
   * {
     margin: 0;
     padding: 0;
   }
```
一方、**「お茶サイト」P.22**では１ページぶんにもなる大きなリセットCSSを使用します。
```{code} css
@charset "utf-8";

body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,figure,input,textarea,p,blockquote,th,td {
	margin:0;
	padding:0;
}

table {
	border-collapse:collapse;
	border-spacing:0;
}

address,caption,cite,code,dfn,em,strong,th,var {
	font-style:normal;
	font-weight:normal;
}

ol,ul {
	list-style:none;
}

caption,th {
	text-align:left;
}

img {
	vertical-align: bottom;
}

/*clearfix-------------------------------*/

.clearfix:after {
	content:"";
	display:block;
	clear:both;
}
```

業務ではその会社で慣用的に使用しているリセットCSSを使用したり、Googleで「リセットCSS」を検索してトレンドにあるリセットCSSを探して比較したりします。
そして一度使用して慣れたリセットCSSを次以降の業務でもそのまま使用する傾向にあります。
````
