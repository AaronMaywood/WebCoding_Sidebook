# CSS - 背景、float、実例:ナビメニュー

```{contents}
```

## 背景画像

背景には**色**や**画像**を敷くことができます。

### 背景に色を敷く

背景に色を敷くことのできる`background-color` はカラーの説明を行う「[](color) （{bdg-dark-line}`テキスト：P.104`）」で扱いました。

`````{hint}
背景に色を設定するのは、`background-color`ですが、背景関係のプロパティのショートハンドである`background`でも指定できます。

以下は同じです。
```css
background-color: red;
background: red;       /* ショートハンド */
```

````{dropdown} ショートハンドを使用する際の注意点(高度な話題)
常にショートハンドを使用してよいでしょうか？

ショートハンドの使用が問題ないかどうかをご自身で判断できるようになるために、ショートハンドを使用する上での注意点を説明します。

**「`background:red;`」の意味するところ ... ショートハンドプロパティのお約束**

`background`は`CSS`の一括指定プロパティで、以下背景に関するすべてのスタイルプロパティを一括で設定します。（[MDN background](https://developer.mozilla.org/ja/docs/Web/CSS/background)より）
- background-attachment
- background-clip
- background-color
- background-image
- background-origin
- background-position
- background-repeat
- background-size

**`background:red;`とだけ書いた場合にも、上記全てが設定される点に注意が必要です。**
**具体的には以下を指定したことになります。** （欠けているプロパティの値には初期値が指定されます）
```
background-attachment: scroll;	/* 初期値 */
background-clip: border-box;	/* 初期値 */
background-color: red;
background-image: none;			/* 初期値 */
background-origin: padding-box;	/* 初期値 */
background-position: 0% 0%;		/* 初期値 */
background-repeat: repeat;		/* 初期値 */
background-size: auto auto;		/* 初期値 */
```

**ショートハンド利用上の注意点**

この約束を頭に入れておかないと、思わぬ不具合に出会うことがあります。

例えば次の例では背景色（`background-color`）は何色になると思いますか？
```
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

ショートハンドプロパティ`background`には`background-color`も含まれている事を思い出して下さい。

従って上記の{term}`コード`では`background-color:red;`を次の行に書いた`background: url(images/bg.gif) no-repeat left top;`で上書きしています。
（次の行にある`background: url(images/bg.gif) no-repeat left top;`には`background-color`の指定がありません。このときには[`background-color`の初期値である`transparent`](https://developer.mozilla.org/ja/docs/Web/CSS/background-color#%E5%85%AC%E5%BC%8F%E5%AE%9A%E7%BE%A9)が指定されることになります。）

結果として`background-color`の値は`red`ではなく`transparent`になります。

この問題を防ぐには、プロパティを書く順を上記の逆（「ショートハンド→個別プロパティ」）にして下さい。
```
p {
  background: url(images/bg.gif) no-repeat left top;
  background-color: red;
}
```
この記述順にすることで、ショートハンドに指定したものを個別プロパティで適宜上書きして使用することができます。

```{tip}
これは`background`以外の`CSS`のショートハンドプロパティ（[`margin`](https://developer.mozilla.org/ja/docs/Web/CSS/margin)や[`font`](https://developer.mozilla.org/ja/docs/Web/CSS/font)などの）全てに共通する注意点です。
```

**参考**
- [MDN 一括指定プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/Shorthand_properties)
````
`````

### 背景に画像を敷く
{bdg-dark-line}`テキスト：P.117〜122` 

背景に画像を敷く場合には色を敷く場合と異なり、繰り返したり、拡大したり、表示位置を調整すると言った概念があります。

```{tip}
背景画像を指定する `background-image` にはCSSで作成したグラデーションも指定することが可能です。{bdg-dark-line}`テキスト：P.165` を参照して下さい。
```

````{tip}
**`background`には色や画像を重ねることができる**

`background`には、 **「背景色(`background-color`)」一つと複数の「背景画像(`background-image`)」を指定することが可能** で、これらが背景のレイヤーを構成します。（奥のレイヤーは、手前のレイヤーに透明色がある場合にのみ見えます。）

```
このようなCSSを書けば...

background-color: red;
background-image:
  url("https://interactive-examples.mdn.mozilla.net/media/examples/star.png"),
  url("https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png");

背景のレイヤーは以下の通りとなります。

- 背景色(red)
  L 背景画像２(lizard.png)
    L 背景画像１(star.png)

```
実際には次のように表示されます。
<div style='
width: 500px;
height: 300px;
font-size: 32px;
background-color: red;
background-image: url("https://interactive-examples.mdn.mozilla.net/media/examples/star.png"),
                  url("https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png");
'></div>
````

#### 背景画像のくりかえし

{bdg-primary-line}`CSS教材：13_背景画像の繰り返し` フォルダを`VS Code`で開き、`lesson_1.html` に対し {bdg-dark-line}`テキスト：P.117` のように`CSS`を書いてみて下さい。

#### 背景画像の配置
{bdg-dark-line}`テキスト：P.118` 
{bdg-primary-line}`CSS教材：14_背景画像の配置`

{bdg-primary-line}`CSS教材：14_背景画像の配置` フォルダを`VS Code`で開き、`lesson_1.html`、`lesson_2.html`、`lesson_4.html` に対し {bdg-dark-line}`テキスト：P.118` のように`CSS`を書いてみて下さい。

#### 背景画像サイズ
{bdg-dark-line}`テキスト：P.119` 
{bdg-primary-line}`CSS教材：15_背景画像サイズ`

{bdg-primary-line}`CSS教材：15_背景画像サイズ` フォルダを`VS Code`で開き、{bdg-dark-line}`テキスト：P.119〜122` に従って作業しながら読み進めて下さい。

% 作業の内訳
% - 「header」・「article」・「section」等のボックスに「高さ」を設定するには {bdg-dark-line}`テキスト：P.120` 
% - 「header」内にボックスよりも小さな「背景画像」を設定すると…。 {bdg-dark-line}`テキスト：P.120` 
% - 「background-size」に「cover」を設定すると…。 {bdg-dark-line}`テキスト：P.121` 
% - 「background-size」に「contain」を設定すると…。 {bdg-dark-line}`テキスト：P.121` 
% - 「background-size」に「auto」を設定すると…。 {bdg-dark-line}`テキスト：P.121` 
% - 「background-size:cover」と「background-position」を組み合わせる {bdg-dark-line}`テキスト：P.122` 

## `float`

[`float`（フロート、浮くもの）](https://ejje.weblio.jp/content/float)は、文章の中に挿し絵を配置するプロパティです。

% {{TODO}}余力があれば説明する
% なお、LEVEL9.md [](liquid-layout) と関連性があります。
% ```{tip}
% **高度な話題**
% 
% 浮くものとは何でしょう？
%通常のフローに文章が流し込まれるさいに、傍らに避けておかれるものであることを説明しているように思います。
% 通常のフローの途中で浮かんでいるというイメージです。
% したがって浮くといってもページの上部に向かっているのではなく、小川の流れ（ページの上部から下部に掛けての通常のフローの流れ）の途中で引っかかって**淀んでいる**というイメージが分かりやすいでしょう。
% ```

`float`を使用すれば、挿し絵をページの右側か左側に配置し、文章を回り込ませることができます。

以下のソースを元に挿し絵のあしらいを説明します。（このサンプルは[MDN web docs のfloatの記事](https://developer.mozilla.org/ja/docs/Web/CSS/float#%E8%A9%A6%E3%81%97%E3%81%A6%E3%81%BF%E3%81%BE%E3%81%97%E3%82%87%E3%81%86)から拝借し書き起こしました。）
% 画像「Float me」のソースはこちら
% <span style="display: inline-block;margin: .5rem;border: 10px solid orange;padding: .5rem;height: 6rem; background: lightyellow;">Float me</span>
```html
<div style="border: 1px solid gray; padding: 2rem; width: 300px;">
  <!-- 段落pのなかに画像imgが入っています -->
  <p>As much mud in the streets as if the waters
    <img src="_static/gyazo/06a32191e2ab716be3be9fe30ed89b6b.png" alt="Float me" style="border:none;">
    had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </p>
</div>
```
```css
div {
  border: 1px solid gray;
  padding: 2rem;
  width: 300px
}
img {
  /* この状態でfloatを効かせてみる
  float: left;
  float: right;
  */
}
```

- 初期状態。文章中にオレンジ枠の画像があります。
	<div style="border: 1px solid gray; padding: 2rem; width: 300px;">
	  <!-- 段落pのなかに画像imgが入っています -->
	  <p>As much mud in the streets as if the waters
		<img src="_static/gyazo/06a32191e2ab716be3be9fe30ed89b6b.png" alt="Float me" style="border:none;">
		had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
		forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
	  </p>
	</div>
- 画像に`float: left`を指定しました。画像は左に配置され、文章はその画像の周りを取り囲むようになりました。（これを「回り込み」と言います。）
	<div style="border: 1px solid gray; padding: 2rem; width: 300px;">
	  <!-- 段落pのなかに画像imgが入っています -->
	  <p>As much mud in the streets as if the waters
		<img src="_static/gyazo/06a32191e2ab716be3be9fe30ed89b6b.png" alt="Float me" style="border:none; float:left;">
		had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
		forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
	  </p>
	</div>
- 画像に`float: right`を指定しました。今度は画像は右に配置されました。
	<div style="border: 1px solid gray; padding: 2rem; width: 300px;">
	  <!-- 段落pのなかに画像imgが入っています -->
	  <p>As much mud in the streets as if the waters
		<img src="_static/gyazo/06a32191e2ab716be3be9fe30ed89b6b.png" alt="Float me" style="border:none; float:right;">
		had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
		forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
	  </p>
	</div>

これが`float`が挿し絵をどう処理するかの説明です。（実際には複数の挿し絵を連続して横に並べるなどのより複雑なあしらいも可能です。ただし、ここでは`float`は挿し絵を配置する道具だと説明しました。）テキストでは {bdg-dark-line}`テキスト：P.127〜128` で説明しています。

しかし、`float`には本来に挿し絵用途以外のもう一つの側面があります。
それが（「[](box-layout)」でも紹介した）（挿し絵以外の）ウェブデザインにおける様々なレイアウトを実現する用途です。

`float`には {bdg-dark-line}`テキスト：P.123〜126` で見るようにブロックレベル要素を複雑に配置することができます。

````{dropdown} ブロックレベル要素、インライン要素をおさらいする
（この２つは「[](block-and-inline)」で学びました）

```{include} cards/html/blocklevel-and-inline.md
```
````

この機能を活用すれば、実用的なウェブデザインを達成することができます。
ただし、現代では同様のことをより簡単に扱える`flexbox`（ {bdg-dark-line}`テキスト：P.139〜`）が登場しており、`float`活用の座はほぼ`flexbox`に明け渡されました。

ここまでのことを念頭において、テキストを読み進めていきましょう。

### 「`float`」と「`clear`」について
{bdg-dark-line}`テキスト：P.123〜126` 

`clear`は、`float`使用後に始まる「回り込み」状態を解除するためのプロパティです。`float`の効果を打ち切りたい時に使用します。

### 「`float`」と「`clear`」を検証する
{bdg-dark-line}`テキスト：P.123〜126` 

{bdg-primary-line}`CSS教材：16_フロート基本` フォルダを`VS Code`で開き、 {bdg-dark-line}`テキスト：P.123〜126` に従って作業しながら読み進めて下さい。
ここでカラフルな`div`を扱っているのは、「画像とその説明」のようなページにレイアウトしたいアイテム（デザイン要素）の代わりです。したがって、ここではページ全体にデザイン要素を配置する方法を述べています。

% {{TODO}} ↓flexbox で同じことをやる方法を提供しないといけないね
```{hint}
この『「`float`」と「`clear`」を検証する』の節で扱う内容は、現在はより直感的な`flexbox`で扱われる事が多くなっています。
したがって優先度を下げ、後回しでもよいでしょう。
```

### フロートによる文字の回り込み
{bdg-dark-line}`テキスト：P.127〜128` 
{bdg-primary-line}`CSS教材：17_画像・文字回り込み`

（補足事項はありません。）

### フロートした子要素と親要素の関係

{bdg-dark-line}`テキスト：P.129〜131` では、挿し絵込みの文章をボーダーで囲む時の問題を扱っており、その対策として「`clearfix`」（クリアーフィックス）と呼ばれる技を紹介しています。`clearfix`は`CSS`のプロパティではなく、クリエイターが生み出した業界標準の技法につけられた名前です。

{bdg-primary-line}`CSS教材：18_clearfix` フォルダを`VS Code`で開き、{bdg-dark-line}`テキスト：P.129〜131` に従って作業しながら読み進めて下さい。


なお、 {bdg-dark-line}`テキスト：P.130` の「手法Ⓐ」は「手法Ⓑ 」で導入する`clearfix`に至る過程であるため、「手法Ⓑ 」のみを学ぶだけでもよいと思います。
また逆に`clearfix`は必須ではなく、「手法Ⓐ」の方法で問題解決をしてもかまいません。

#### 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓐ

````{hint}
{bdg-dark-line}`テキスト：P.130` の「手法Ⓐ」の説明では、ソースコードのⒶの箇所に`p`要素を使用しており、そのため`SEO`的に不適切だとしています。
`p`要素の意味（{term}`セマンティクス`）は「段落」であり、段落なのに中身が空っぽというのはおかしいというのが`SEO`的に不適切な理由です。

```{hint}
`SEO`では、`HTML`のセマンティクスに沿ったマークアップが大切になります。したがって`p`でありながら中身が空というのは意味の誤用であり、不適切です。
```

これには回避方法があります。
`p`要素の代わりに、「意味はない」というセマンティクスを持った`div`要素を使えばよいのです。

```html
<p class="end"></p>
↓書き換えます
<div class="end"></div>
```
これで「手法Ⓐ」の「`SEO`的に不適切」の欠点を取り除く事ができました。
````

#### 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓑ 
{bdg-dark-line}`テキスト：P.131` 

```{tip}
**高度な話題 - ::afterとは**

セレクタに新しい表現である`::after`が登場しました。
`clearfix`を利用する上ではこの`::after`を理解する必要はありませんが、気になった方は[mdn ::after](https://developer.mozilla.org/ja/docs/Web/CSS/::after)の記事をお読み下さい。
なお`::after`は、装飾目的の「文字」を挿入するための手段です。セマンティクスが問われる`HTML`に置きたくはないが、装飾として文字を置きたいときに使用します。
```

## `<ul>`、`<ol>` または`<li>`要素に設定するプロパティ

{bdg-primary-line}`CSS教材：19_リストマーカー` フォルダを`VS Code`で開き、`lesson_1.html`に対し {bdg-dark-line}`テキスト：P.132` のように`CSS`を書いてみて下さい。

## `overflow` プロパティ

`overflow`(オーバーフロー)とは内容が枠から溢れてはみ出ることです。
中身が詰まっている箱（ここの例では文章の詰まった`div要素`）に対し、`width`、`height`を指定して箱の大きさを縮めてみたときに内容が入り切らなくなって溢れます。
溢れた部分をどうあしらうかを制御するのがCSSの`overflow`プロパティです。

{bdg-primary-line}`CSS教材：20_overflow` フォルダを`VS Code`で開き、`lesson_1.html`に対し {bdg-dark-line}`テキスト：P.133` のように`CSS`を書いてみて下さい。

## ナビメニュー

これまで学んだことを下敷きに、実践的なページ内の部品である「ナビゲーションメニュー」の実装方法を学びます。

```{hint}
ナビゲーションとは、ウェブサイト内の各主要ページへのリンク集のことを指します。
ここでは各リストの内容は「項目１」「項目２」のようになっていますが、実際には「トップページ」「よくあるご質問」などのサイト内のリンク集になります。
```

(vertical-column)=
### 縦組み

{bdg-primary-line}`CSS教材：21_メニュー縦組・横組` フォルダを`VS Code`で開き、`lesson_1.html`のクラス`Atype`に対し{bdg-dark-line}`テキスト：P.134` のように`CSS`を書いてみて下さい。 （完成形は`kansei.html`です。）

```{hint}
`lesson_1.html`中のクラス`Btype`（`<nav class="Btype">`）は次の「[](horizontal-column)」で使用します。ここでは無視して下さい。
```

ここでは「`display: block;`」、「継承」、「`:hover`」の３つの話題が登場しています。それぞれ解説します。

(display-property)=
#### インラインとブロックレベルを`display`で切り替える

`CSS`の基本レイアウトのルールである「通常のフロー」では、「[](box-layout)」で説明したようにブロックレベル要素とインライン要素の２つを扱います。

そして、表示形式を決める`display`プロパティを用いれば、このブロックレベル要素とインライン要素を切り替えることができます。

具体例で示しましょう。

- ブロックレベル要素をインライン要素に切り替えてみます。
	```html
	<p>段落１</p>
	<p>段落２</p>
	```
	```css
	p {
	  /* `p`は本来はブロックレベルですが、
		 インラインに変更できます。 */
	  display: inline;
	}
	```

	このソースの表示結果は次のとおりです。段落１と段落２がインライン要素になり、横に並びました。
	<div style="border: 1px solid gray; padding: 1rem; margin-bottom: 2rem;">
	  <p style="display:inline;">段落１</p>
	  <p style="display:inline;">段落２</p>
	</div>

- この逆も可能です。
	```html
	<a href="">リンク１</a><a href="">リンク２</a>
	```
	```css
	a {
	  display: block;
	}
	```

	このソースの表示結果は次のとおりです。リンクがブロックレベル要素になり、縦に並びました。

	<div style="border: 1px solid gray; padding: 1rem;">
	  <a style="display:block;" href="">リンク１</a><a style="display:block;" href="">リンク２</a>
	</div>

このように、`display`プロパティを用いれば、表示上の扱いを変更することができます。

なお、`display`プロパティに使用する値として使われるものに、他に`inline-block`と`none（表示なし）`があります。

(display-inline-block)=
##### `display:inline-block`

% https://developer.mozilla.org/ja/docs/Web/CSS/display#%E6%97%A7%E6%9D%A5%E3%81%AE%E3%82%82%E3%81%AE
% 旧来のもの
% inline-block
% この要素はブロック要素ボックスを生成しますが、周囲のコンテンツに対しては単一のインラインボックスであるかのように流れるようになります (置換要素の場合と似ています)。
% 
% これは inline flow-root と等価です。 →なるほど！
% 
% flow-root
% 要素は、新たなブロック整形コンテキストを確立するブロック要素ボックスを生成し、整形ルートがある場所を定義します。 →ブロック整形コンテキストは通常のフローを開始する
% 
% https://developer.mozilla.org/ja/docs/Web/Guide/CSS/Block_formatting_context
% 
% https://developer.mozilla.org/ja/docs/Web/CSS/display/two-value_syntax_of_display
% code_sample/display/index.html
% file:///C:/Users/yasumura/Desktop/HTML5%E6%9C%89%E6%96%99%E8%AC%9B%E5%BA%A7/%E8%AC%9B%E7%BE%A9%E3%83%8E%E3%83%BC%E3%83%88/ver1.03/%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB/7-3-7(display).html
% 
%
% `display`プロパティに指定できる値は、`block`や`inline`の他にもいろいろなものが用意されています。
% ```{admonition} **高度な話題**
% 一覧を見たければ[mdn の`display`プロパティのページ](https://developer.mozilla.org/ja/docs/Web/CSS/display)にあります。ただし、多すぎるし、専門的すぎて混乱するだけになると思います...実用的には`inline`、`block`、`inline-block`、`none`の４つだと思って下さい。
% ```

`display`プロパティには、`inline-block`という値があり、{bdg-dark-line}`テキスト：P.136` でも使用されています。
 
この`inline-block`とは何でしょうか。
 
結論を述べると、`inline-block`が指定された要素は「（それ自身がいかに大きくとも）一文字」として扱われ、行内に横に並べられるようになります。

具体例で説明しましょう。

- まず、`display: inline-block`を**使用しない**例です。
	```HTML
	<div class="wrapper">
	  abc
	  <div>あい<p>うえ</p>お</div>
	  <div>あい<p>うえ</p>お</div>
	  かきく
	</div>
	```
	```CSS
	p {
	    border: 1px solid blue;
	    width: 2rem; /* ２文字ぶん幅 */
	}

	/* .wrapperの中にあるdiv */
	.wrapper div {
	    border: 1px dashed red;
	}
	```
	```{figure} images/gyazo/a201149fa9dce31199c30faead3933e4.png
	```
- 次に、内側の`div`要素に`display:inline-block;`を指定してみます。
	```CSS
	...略

	/* .wrapperの中にあるdiv */
	.wrapper div {
	    border: 1px dashed red;
	    display: inline-block; /* 追加しました  */
	}
	```
	```{figure} images/gyazo/4b1709cb7435bc3ab116c2496c825ebc.png
	```

	```{admonition} 高度な話題
	この`inline-block`を解説すると、外見は`inline`として扱われつつ、中身には`block`の世界が広がっているという意味になります。それ自身はインライン要素（つまり、一文字に相当）として行内に横に並べられつつ、自身の内側には外の世界とは異なる新たな「通常のフロー（ブロック整形コンテキスト）」を持ち、子要素はその通常のフローによって配置されるという働きをすることを説明しています。
	```

- ついでに内側の`div`要素に`display: inline;`を指定した場合を見てみましょう。
	```CSS
	...略

	/* .wrapperの中にあるdiv */
	.wrapper div {
        border: 1px dashed red;
        display: inline; /* 変更しました  */
	}
	```
	```{figure} images/gyazo/2fa97c81e8bf9be7f315c5127eef897e.png
	```

(display-none)=
##### `display:none`

`display:none;` は「表示(display)しない(none)」という意味で、その要素がまるで書かれていなかったように扱われます。
{bdg-dark-line}`テキスト：P.245` で、ある条件の時だけ非表示にするという仕組みの中で使用されています。

```{admonition} 高度な話題
`display:none;`はあくまでも見た目上の問題であり、`HTML`を書き換えてしまうわけではありません。したがって、`HTML`上はその場所に有り続け、セマンティクスは保たれています。
```

#### 継承

`CSS`にはスタイル記述を楽にする「継承」という概念があります。
継承とは親のスタイルを受け継ぐという意味で、親に書いたスタイルと同じものであれば子には書かなくても良い、子に再度書く必要はない、という仕組みです

以下の例では、全ての親`div.wrapper`に対し、文字色を`red`に指定しています。

```html
<div class="wrapper">
  <p>段落１</p>
  <p>段落２</p>
  <ul>
    <li>項目１</li>
    <li>項目２</li>
  </ul>
</div>
```
```css
.wrapper {
  color: red;
}
```

このソースの表示結果は次のとおりで、`.wrapper`の中に含まれる全ての子の文字色が`red`になっています。
**これが「継承」です**。

<div style="color:red; padding: 1rem; border: 1px solid gray;">
  <p style="color:red;">段落１</p>
  <p style="color:red;">段落２</p>
  <ul>
    <li>項目１</li>
    <li>項目２</li>
  </ul>
</div>


```{tip}
なお、スタイルによっては継承が望ましくないことがあるため、継承されるかそうでないかがプロパティごとに定められています。
 
例）
- `color`の継承は「あり」です。（参考：https://developer.mozilla.org/ja/docs/Web/CSS/color#%E5%85%AC%E5%BC%8F%E5%AE%9A%E7%BE%A9）
- `height`の継承は「なし」です。（参考：https://developer.mozilla.org/ja/docs/Web/CSS/height#%E5%85%AC%E5%BC%8F%E5%AE%9A%E7%BE%A9）
```

(hover)=
#### `:hover`

`:hover`で記述する「ホバー」は`a`要素（ハイパーリンク）特有の概念で、リンクの上にマウスカーソルが乗っかった時（`hover`は空中に停止するという意味の英単語）のことを指します。
% https://ejje.weblio.jp/content/hover

```html
<a href="">リンク。この上にマウスカーソルを乗せたり外したりしてみてください。</a>
```
```css
a {
  color: red;
}
/* :hover を書く場合には、:hoverなし↑の後に書いて下さい。 */
a:hover {
  color: green;
}
```
このソースの表示結果は次のとおりです。
<div style="border: 1px solid gray; padding: 1rem;">
	<a href="#hover" id="link-hover-demo">リンク。この上にマウスカーソルを乗せたり外したりしてみてください。</a>
</div>

```{tip}
**高度な話題**

この`:hover`以外に`a`要素に指定できる修飾子には他に`:active`（`a`要素をクリックし続けている時）、`:link`（未訪問のリンクの時）、`:visited`（訪問済みのリンク）があります。
以下を参照下さい。
- https://developer.mozilla.org/ja/docs/Web/CSS/:active
- https://developer.mozilla.org/ja/docs/Web/CSS/:visited
- https://developer.mozilla.org/ja/docs/Web/CSS/:link
```

(horizontal-column)=
### 横組み

{bdg-primary-line}`CSS教材：21_メニュー縦組・横組` フォルダを`VS Code`で開き、`lesson_1.html`のクラス`Btype`に対し{bdg-dark-line}`テキスト：P.135` のように`CSS`を書いてみて下さい。

```{hint}
`lesson_1.html`中のクラス`Atype`（`<nav class="Atype">`）は前の「[](vertical-column)」で使用します。ここでは無視して下さい。
```

```{hint}
新たに `display:flex;`および`justify-content:space-between;` というプロパティが出てきていますが、これは後に学習する`flexbox`に関連するものです。ここでは`display:flex`で横に並べ、`justify-content:space-between;`で配置を均等割にするものだと考えて下さい。
```

{bdg-dark-line}`テキスト：P.206` では`最後の子`を意味する`:last-child`のセレクタが使用されています。これを説明します。

(last-child)=
#### 末っ子を選択する`:last-child`

`CSS`では**並べたものの最後だけ特殊な処理をしたいことがある**ため、セレクタに最後の子（つまり、末っ子）を示す`:last-child`の表現が用意されています。

[mdn :last-childの記事](https://developer.mozilla.org/ja/docs/Web/CSS/:last-child)より、サンプルを示します。

`p`は`div`の子です。そして親の`div`から見ると`p`の子が二人います。そのうちの最後の子を選択しています。

```html
<div>
  <p>このテキストは選択されません。</p>
  <p>このテキストは選択されます！</p>
</div>
```
```CSS
p:last-child {
  color: red;
}
```
結果は次のようになります。
<div style="padding:1rem;border:1px solid gray;">
	<div>
	  <p>このテキストは選択されません。</p>
	  <p style="color:red;">このテキストは選択されます！</p>
	</div>
</div>


````{tip}
**高度な話題**

（同じく`mdn`の記事の中から）次の例ではどこも選択されません。セレクタで指定しているのは`p`要素かつ`:last-child`ですが、`HTML`の方にある`p`は`:last-child`ではないためです。
```html
<div>
  <p>このテキストは選択されません。</p>
  <h2>このテキストは選択されません。 `p` ではありません。</h2>
</div>
```
```CSS
p:last-child {
  color: red;
}
```
<div style="padding:1rem;border:1px solid gray;">
	<div>
	  <p>このテキストは選択されません。</p>
	  <h2>このテキストは選択されません。 `p` ではありません。</h2>
	</div>
</div>
````

### 横組み（シンプルタイプ）

{bdg-dark-line}`テキスト：P.136` ではテキストを横に並べるだけの素朴なナビゲーションの実装を紹介しています。

{bdg-primary-line}`CSS教材：22_メニューシンプルタイプ` フォルダを`VS Code`で開き、`lesson1.html`に対し{bdg-dark-line}`テキスト：P.136` のように`CSS`を書いてみて下さい。 （完成形は`kansei.html`です。） 

ここでは新たに `display: inline-block;`と `transition-duration:0.5s;` の表現が出てきます。

 `display: inline-block;`は「[](display-inline-block)」で説明しましたので、`transition-duration:0.5s;`を説明します。

(transition)=
#### `transition`プロパティ

`transition-duration:0.5s`は「状態の遷移」を表す`transition`（トランジション、遷移）プロパティの一部で、状態遷移のアニメーションに`0.5秒`かけることを指示しています。
トランジションは、マウスオーバー前、マウスオーバー後で表示スタイルを変更するような場合に、その表示スタイルの遷移をアニメーションによって表現します。

具体例で説明します。

```html
<a href="">リンク１</a>
```
```css
a {
    color: red;
    transition-duration: 2s; /* 遷移にかかる時間は2秒(2seconds) */
}
a:hover {
    color: green;
}
```
% MEMO :hover のところに transition-duration を書いても結果は同じでした
<div>
  <p>↓マウスカーソルを重ねてみて下さい。２秒かけて<span style="color:green">緑色</span>に変化します。</p>
</div>
<div style="border:1px solid gray; padding: 1rem;">
  <a id="transition-demo" href="">リンク１</a>
</div>

`transition-duration: 2s;`とは上の例で見たように、２秒かけて遷移のアニメーションを行う指定です。`duration`は間隔という意味の英単語です。

```{admonition} 高度な話題
トランジションのその他の関連プロパティや例に興味を持った方は、{bdg-dark-line}`テキスト：P.167` 及び [mdn CSSトランジションの使用](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)をご覧ください。
```

````{hint}
`CSS`にはトランジション機能の他に、アニメーション機能（一般的な用語と区別するために「**CSSアニメーション**」と呼びます）があります。

```{admonition} 高度な話題
CSSアニメーションについては本ガイドブック、テキストでは扱っていませんので[mdn CSSアニメーション](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)を参照して下さい。
```

トランジションもアニメーションの一種なので、混同しないようにその違いを説明しておきます。

トランジションは、**CSSプロパティの変化**をきっかけに、**変化の前後の２点間**（**２コマ**）をアニメーションでつなぎ、**状態が遷移したことを表現**します。
したがって、プロパティの変化が無かった場合にはアニメーションしませんし、３コマ以上の変化を表現することもできません。

それに対し、CSSアニメーションは**幅広い用途の一般的なアニメーション**を表現するための機能です。一般的なアニメーションは、複数のコマ（キーフレームと呼ばれています）をもち、長尺かつさまざまな展開をともなった表現が可能です。またどのタイミングで再生するか、また繰り返し再生するかなどを指定できます。

まとめると、次のように説明できます。
- トランジションは画面上の機能や表示物を操作した時の反応を表現するのに使用され、使い勝手を向上させることができます。
- CSSアニメーションはコンテンツとしてのアニメーションを表現するのに使用されます。
````

## 昇段試験

ここまでのことを学習したら、次の「昇段試験のルール」を確認の上、昇段試験に望んでください。
````{dropdown} クリックして昇段試験のルールを確認する
```{include} cards/school/rule-of-exam.md
```
````

### 問題「ア、秋」
% 背景、float
% 背景はcover
% 文章と挿し絵
% 「ア、秋」にファーストビューの背景と挿し絵を挿入する
% https://www.aozora.gr.jp/cards/000035/files/236_19996.html 
% https://github.com/AaronMaywood/coding_sample/tree/main/a-aki	←試作品
% 	→子孫セレクタを使用しているので説明が必要
% 		→LEVEL3.md の子孫セレクタ](descendands-selector) で説明しているのでOK
% 
% オーバーフロー、
% リスト、ナビメニュー
% - 横展開はflexを使ったBtypeがいい。flexと合わせて教えるのがいいかな
% 	typeCはレガシーコード

- {bdg-dark}`指示` 作業フォルダ名を`a-aki`として下さい。

- 必要な素材を提供します。以下からZIPファイルをダウンロードし、展開して利用して下さい。
  % > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_float/archive/refs/heads/main.zip
  - https://adjustacademy.com/webcoder/950058dd6702e10e6ff3fed5f462bbfb.zip
  - 配付素材は`a-aki`フォルダです。この中に元になる`index.html`と`css/style.css`、また`images`フォルダには画像素材があります。
	````{dropdown} 配付素材の中で単位remを使用している理由を読む
	```{include} cards/css/why-use-rem.md
	```
	````

以下の見た目になるように`CSS`を調整して下さい。

1. 表題（冒頭部）に柿の背景を敷いて下さい。{numref}`a-aki-sample` {ref}`a-aki-sample` とだいたい同じ位置に柿が見えるよう、背景画像の表示位置の調整を行って下さい。

	- 実際にはブラウザーの幅によって背景が表示される位置が異なります。読者によって使用しているディスプレイのサイズはマチマチであるため、 **それぞれ自身の環境で適切になるよう適宜調整してあればOKです**。
	- 参考までに、{numref}`a-aki-sample` はブラウザーの幅が`1536px`の時の表示になります。
		````{dropdown} ブラウザーの幅を知る方法を確認する
		```{include} cards/devtools/screen-width.md
		```
		````
2. 文中の挿し絵２枚について
	- それぞれ右、左に配置し、画像に文字を回り込ませて下さい。
	- スタイルを与えるにあたって、`index.html`にある`img`要素を適切な位置に設置して下さい。
	- この画像２つを適切な位置に設置して下さい。
		```html
		<img class="right" height="500" src="images/autumn-mott-rodeheaver-SPd9CSoWCkY-unsplash.jpg" alt="">
		<img class="left" height="500" src="images/j-lee-hTKzzm3sN-0-unsplash.jpg" alt="">
		```
		````{dropdown} 【ちなみに】 上記imgにwidthが指定されていない理由を知る
		```{hint}
		上記`img`要素には、高さ`height="500"`のみが記載されていて、幅`width`の指定がありません。
		このように書いた時、ブラウザーは`height="500"`と画像素材の縦横比から`width`を自動計算します。

		`height="500"`のみを書くことで、高さだけを制御したい（幅はそれに沿っていればよく、何ピクセルかどうかには関心がない）ことを意図しています。

		ブラウザーによる自動計算のデメリットは、画像読み込み完了前後のレイアウトのずれです。

		ブラウザーが`width`を自動計算するには画像の読み込み完了を待つ必要があり、それまでの間ページは仮の画像サイズでレイアウトするしかありません。そして画像読み込み完了後に正しい画像サイズで改めて**レイアウトしなおされます**。このように仮のレイアウトから正しいレイアウトの２段階で表示されるため、レイアウトのずれが発生します。

		> インターネットで記事を読んでいて、突然ページのレイアウトが変わってしまったことはありませんか？何の警告もなく文字が移動してしまい、自分がページ内のどこを読んでいたのか分からなくなってしまうことがあります。さらにひどい場合には、リンクやボタンをタップしようとしてから画面に指が触れるまでのほんの一瞬の間に "パッ" とリンクが移動してしまい、結局別のものをクリックしてしまう場合もあります。
		> https://web.dev/cls/ より

		このように閲覧者をイライラさせる現象を累積レイアウトシフト（`Cumulative Layout Shift`、 **`CLS`** ）と呼び、`Google`の`SEO`指標のひとつである[`Core Web Vitals`](https://web.dev/vitals/)の一部として注目を集めました。

		この累積レイアウトシフトを回避する方法が`img`要素に`width`、`height`の両方を指定するということになります。

		% Cumulative Layout Shift を最適化する ― 突然のレイアウト シフトを回避し、ユーザー エクスペリエンスを改善させる方法について説明します。
		% https://web.dev/i18n/ja/optimize-cls/

		この昇段試験においては`SEO`対策は重要ではないので、`width`をあえて指定せず、累積レイアウトシフトを許す代わりに便利な自動計算を利用しています。（もちろん、`width`を指定したほうがベターです。`width`の指定は意欲ある読者の宿題とします。画像の原寸を調べ、高さ`500px`の時の幅を算出してみて下さい。）

		% なお累積レイアウトシフトは`SEO`対策の指標の一つに過ぎず、またズレの程度にもよるので「累積レイアウトシフトが一つでもあったらNG」という性質のものでもありません。
		% そのため`SEO`対策が重要になる業務等では、`Google Chrome`のデベロッパーツールに内蔵されているページの診断ツールである`Lighthouse`を利用して、どの程度改善が必要かどうかを測定して判断するということが行われます。
		% 
		% `Lighthouse`のごく簡単な使い方は[Lighthouseの使い方](https://webitworks.jp/how-to-use-lighthouse/)や[GoogleによるWebサイトパフォーマンス測定ツール「Lighthouse」入門](https://knowledge.sakura.ad.jp/21477/)（記事では「`Audit`タブ」となっていますが、最新版では「`Lighthouse`タブ」です）を参照して下さい。
		```
		````

```{figure} images/gyazo/cdf19cb0983323856c9f5b86f2f541c2.png
---
name: a-aki-sample
---
完成図
```

### 採点基準

- 採点基準は以下のとおりです。
	1. ブラウザーの表示をみて、指示通りの表示になっているかを確認します。
	2. CSSを見て、適切な背景指示や、`float`を使用した解答になっているかを確認します。

この両方の水準を満たしていれば合格です。

% 水準を満たしているような、満たしていないような場合のグレーゾーンでは、生徒に質問してみて理解できているようであれば（また、やる気のある回答であれば）（必要に応じて指摘箇所を再提させて、これは再提出としてはカウントしない）合格とするなどの配慮を行う。

### 解答の提出

- {bdg-dark}`指示` 提出に先立って最終確認をお願いします。意図通りに制作されていますか？
- {bdg-dark}`指示` 作成した`a-aki`ファイル一式を{{OFFICE}}に提出して下さい。
    - 提出は次のようにして下さい。
        1. レンタルサーバーを借りている場合
            - 「[](upload-to-webserver)」に従い、{bdg-dark}`指示`されたフォルダを{term}`ウェブサーバー`にアップロードして下さい。
            - 以下の文言テンプレートを利用し{{OFFICE}}にメールにて提出して下さい。
                ```{code}
                件名：第五章の昇段試験のファイルを提出します

                ○ ○ です。
                https://xxxxxx/a-aki/index.html
				制作環境の画面幅は1536pxです。 （←※調べた上で記載して下さい。）
                ```
				````{dropdown} ブラウザーの幅を知る方法を確認する
				```{include} cards/devtools/screen-width.md
				```
				````
        2. レンタルサーバーを借りていない場合

            - ファイルを`ZIP`化し、以下の文言テンプレートを利用し{{OFFICE}}にメールにて提出して下さい。
                ```{code}
                件名：第五章の昇段試験のファイルを提出します

                ○ ○ です。
                ZIPファイルを添付します。
				制作環境の画面幅は1536pxです。 （←※調べた上で記載して下さい。）
                ```
				````{dropdown} ブラウザーの幅を知る方法を確認する
				```{include} cards/devtools/screen-width.md
				```
				````

% ```{code}
% おめでとうございます。昇段試験に合格しました。
% 
% - 模範解答を以下のURLからダウンロードできます。自身の答えと照らし合わせて研究して下さい。
% % > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_float/archive/refs/heads/answer.zip
% 	https://adjustacademy.com/webcoder/8f41205015c24ebc80ea45570bb06f6a.zip
% 
% 新しいガイドブックを案内します。次のレベル（レベル６）に進んで下さい。
% - 新しいガイドブックのレベル６のページ
%	https://adjustacademy.com/webcoder/guidebook/564e62a14b2375021a130647d3f8250f/LEVEL6.html
%   	ID: adjust
%   	パスワード: academy
% 
% 事務局 担当：安村(yasumura@adjust.ne.jp)
% ```
