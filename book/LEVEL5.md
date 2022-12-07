# LEVEL5 CSS - 背景、float、実例:ナビメニュー

## 背景画像

背景には**色**や**画像**を敷くことができます。

### 背景に色を敷く

背景に色を敷くことのできる`background-color` はカラーの説明を行う「[](color) （{bdg-dark-line}`テキスト：P.104`）」で扱いました。

````{hint}
背景に色を設定するのは、`background-color`ですが、背景関係のプロパティの短略形である`background`でも指定できます。

以下は同じです。
```css
background-color: red;
background: red;       /* 短略形 */
```
````

```{tip}
`CSS`の色にはグラデーションもあります。背景にグラデーションを敷く方法は{bdg-dark-line}`テキスト：P.165` に掲載されています。
```

### 背景に画像を敷く
{bdg-dark-line}`テキスト：P.117〜122` 

背景に画像を敷く場合には色を敷く場合と異なり、繰り返したり、拡大したり、表示位置を調整すると言った概念があります。

#### 背景画像のくりかえし

{bdg-primary-line}`CSS教材：13_背景画像の繰り返し` フォルダを`VS Code`で開き、`lesson_1.html` に対し {bdg-dark-line}`テキスト：P.117` のように`CSS`を書いてみて下さい。

#### 背景画像の配置
{bdg-dark-line}`テキスト：P.118` 
{bdg-primary-line}`CSS教材：14_背景画像の配置`

{bdg-primary-line}`CSS教材：14_背景画像の配置` フォルダを`VS Code`で開き、`lesson_1.html`、`lesson_2.html`、`lesson_4.html` に対し {bdg-dark-line}`テキスト：P.118` のように`CSS`を書いてみて下さい。

#### 背景画像サイズ
{bdg-dark-line}`テキスト：P.119` 
{bdg-primary-line}`CSS教材：15_背景画像の配置`

{bdg-primary-line}`CSS教材：15_背景画像の配置` フォルダを`VS Code`で開き、{bdg-dark-line}`テキスト：P.119〜122` に従って作業しながら読み進めて下さい。

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
    <img src="https://i.gyazo.com/06a32191e2ab716be3be9fe30ed89b6b.png" alt="Float me" style="border:none;">
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
		<img src="https://i.gyazo.com/06a32191e2ab716be3be9fe30ed89b6b.png" alt="Float me" style="border:none;">
		had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
		forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
	  </p>
	</div>
- 画像に`float: left`を指定しました。画像は左に配置され、文章はその画像の周りを取り囲むようになりました。（これを「回り込み」と言います。）
	<div style="border: 1px solid gray; padding: 2rem; width: 300px;">
	  <!-- 段落pのなかに画像imgが入っています -->
	  <p>As much mud in the streets as if the waters
		<img src="https://i.gyazo.com/06a32191e2ab716be3be9fe30ed89b6b.png" alt="Float me" style="border:none; float:left;">
		had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
		forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
	  </p>
	</div>
- 画像に`float: right`を指定しました。今度は画像は右に配置されました。
	<div style="border: 1px solid gray; padding: 2rem; width: 300px;">
	  <!-- 段落pのなかに画像imgが入っています -->
	  <p>As much mud in the streets as if the waters
		<img src="https://i.gyazo.com/06a32191e2ab716be3be9fe30ed89b6b.png" alt="Float me" style="border:none; float:right;">
		had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
		forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
	  </p>
	</div>

これが`float`が挿し絵をどう処理するかの説明です。（実際には複数の挿し絵を連続して横に並べるなどのより複雑なあしらいも可能です。ただし、ここでは`float`は挿し絵を配置する道具だと説明しました。）テキストでは {bdg-dark-line}`テキスト：P.127〜128` で説明しています。

しかし、`float`には本来に挿し絵用途以外のもう一つの側面があります。
それが（「[](box-layout)」でも紹介した）（挿し絵以外の）ウェブデザインにおける様々なレイアウトを実現する用途です。

`float`には {bdg-dark-line}`テキスト：P.123〜126` で見るようにブロックレベル要素を複雑に配置することができます。

````{dropdown} ブロックレベル要素、インライン要素をおさらいする
（この２つは「[](block-and-inline)=」で学びました）
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
<div class="end"></end>
```
これで「手法Ⓐ」の「`SEO`的に不適切」の欠点を取り除く事ができました。
````

#### 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓑ 
{bdg-dark-line}`テキスト：P.131` 

```{tip}
**高度な話題 - ::afterとは **

セレクターに新しい表現である`::after`が登場しました。
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

### 縦組み

{bdg-primary-line}`CSS教材：21_メニュー縦組・横組` フォルダを`VS Code`で開き、`lesson_1.html`のクラス`Atype`に対し{bdg-dark-line}`テキスト：P.134` のように`CSS`を書いてみて下さい。 （完成形は`kansei.html`です。）

ここでは「`display: block;`」、「継承」、「`:hover`」の３つの話題が登場しています。それぞれ解説します。

(display-property)=
#### `display`でブロックを切り替える

`CSS`の基本レイアウトのルールである「通常のフロー」では、「[](box-layout)」で説明したようにブロックレベル要素とインライン要素の２つを扱います。

表示形式を決める`display`プロパティを用いれば、ブロックレベル要素とインライン要素を切り替えることができます。

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

```{tip}
**高度な話題 - `inline-block`**

`display`プロパティに指定できる値は、`block`や`inline`の他にもいろいろなものが用意されています。（一覧を見たければ[mdn の`display`プロパティのページ](https://developer.mozilla.org/ja/docs/Web/CSS/display)にあります。ただし、多すぎて混乱するだけになると思います。）

その中で`block`、`inline`に次いで使用頻度の高い値に`inline-block`があり、{bdg-dark-line}`テキスト：P.136` でも使用されています。

この`inline-block`とは何でしょうか。

`inline-block`は、外見は`inline`、中身は`block`という意味で、それ自身は`inline`として横に並べられつつ、自身の内側にあるものははブロックレベル要素と扱われます。

{{TODO}} code_sample/display/index.html
```

#### 継承

`CSS`にはスタイル記述を楽にする「継承」という概念があります。
継承とは親のスタイルを受け継ぐという意味で、親に書いたスタイルと同じものを子にも書かなくても良くする仕組みです。

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
<a href="">リンク。この上にマウスカーソルの乗せたり外したりしてみてください。</a>
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
	<a href="" id="link-hover-demo">リンク。この上にマウスカーソルの乗せたり外したりしてみてください。</a>
</div>

### 横組み

{bdg-primary-line}`CSS教材：21_メニュー縦組・横組` フォルダを`VS Code`で開き、`lesson_1.html`のクラス`Btype`に対し{bdg-dark-line}`テキスト：P.135` のように`CSS`を書いてみて下さい。

なお、ここでは新たに `display:flex;`および`justify-content:space-between;` というプロパティが出てきていますが、これは後に学習する`flexbox`に関連するものです。ここでは`display:flex`で横に並べ、`justify-content:space-between;`で配置を均等割にするものだと考えて下さい。

### 横組み（シンプルタイプ）

{bdg-dark-line}`テキスト：P.136` ではテキストを横に並べるだけの素朴なナビゲーションの実装の紹介しています。

ここでは新たに `display: inline-block;` と `transition-duration:0.5s;` の表現が出てきます。順に解説します。

`display: inline-block;` は「[](display-property)」で説明しました。

#### `transition`プロパティ

## 昇段試験 - float編

ここまでのことを学習したら、次の「昇段試験のルール」を確認の上、昇段試験に望んでください。
````{dropdown} クリックして昇段試験のルールを確認する（退校となる場合の説明があります）
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
% 	→子孫セレクターを使用しているので説明が必要
% 		→LEVEL3.md の子孫セレクター](descendands-selector) で説明しているのでOK
% 
% オーバーフロー、
% リスト、ナビメニュー
% - 横展開はflexを使ったBtypeがいい。flexと合わせて教えるのがいいかな
% 	typeCはレガシーコード

- {bdg-dark}`指示` 作業フォルダ名を`a-aki`として下さい。

- 必要な素材を提供します。以下からZIPファイルをダウンロードし、展開して利用して下さい。
  % > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_float/archive/refs/heads/main.zip
  - https://adjustacademy.com/webcoder/950058dd6702e10e6ff3fed5f462bbfb.zip
  - 配付素材は`a-aki`フォルダです。この中に元になる`index.html`と`css/style.css`があります。

以下の見た目になるように`CSS`を調整して下さい。
  1. 表題（冒頭部）に柿の背景を敷いて下さい。図のように柿の上半分が見えるよう、画像の位置調整を行ってさい。
  2. 文中の挿し絵２枚について
		- それぞれ右、左に配置し、画像に文字を回り込ませて下さい。
		- スタイルを与えるにあたって、`index.html`にある`img`要素を適切な位置に設置して下さい。
		```html
		<!-- この画像２つを適切な位置に設置して下さい。 -->
		<img class="right" height="500" src="images/autumn-mott-rodeheaver-SPd9CSoWCkY-unsplash.jpg" alt="">
		<img class="left" height="500" src="images/j-lee-hTKzzm3sN-0-unsplash.jpg" alt="">
		```
```{figure} https://i.gyazo.com/cdf19cb0983323856c9f5b86f2f541c2.png
```

### 採点基準

- 採点基準は以下のとおりです。
	1. ブラウザーの表示をみて、指示通りの表示になっているかを確認します。
	2. CSSを見て、適切な背景指示や、`float`を使用した解答になっているかを確認します。

この両方の水準を満たしていれば合格です。

% 水準を満たしているような、満たしていないような場合のグレーゾーンでは、生徒に質問してみて理解できているようであれば（また、やる気のある回答であれば）（必要に応じて指摘箇所を再提させて、これは再提出としてはカウントしない）合格とするなどの配慮を行う。

### 解答の提出

- {bdg-dark}`指示` `boxmodel`フォルダを自身のWebサーバーにアップロードし、ページを確認できるURLを{{OFFICE}}に提出して下さい。
- 具体的には次のようにして下さい。
	```{include} cards/school/filling.md
	```

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
