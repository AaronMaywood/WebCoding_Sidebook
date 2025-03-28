# お茶サイト

```{contents}
```

これまでに`HTML`と`CSS`を一通り学びました。

この章では具体的なウェブサイト（お茶サイト）制作を通して、学んだことを確認し、活きた用例を見て理解を深めましょう。

````{warning}
ここからは実践編です。はっきりと難易度が高くなりますので、これまでの学習のやり方とは戦術を変える必要が出てきます。
```{figure} https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
（<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/hvPB-UCAmmU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ko/@lux17?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lucas Clara</a>が撮影した写真）
```
- わかっていないことはそのままにせず、理解できるようになるまで試行錯誤する慎重さが求められます。
- テキストの指示に応じてコピペで作業を行うと、この章全体の学習にはそこまで時間はかかりません。 **しかし大切なのはそこからです。コピペした{term}`コード`の意味を研究し、今度は自分で書けるようになるまで繰り返し訓練しましょう。** 時間をかけ、粘り強く学習を継続する力が求められます。
````

`````{admonition} 学習の秘訣
% 同じくらい重要なことは`HTML`と`CSS`を繰り返し書くことで、それらが分かるだけでなく実際に使えるようになることを目指しましょう。`HTML`と`CSS`は道具であり、道具は使えるようになってはじめて意味を持つからです。
% 
% このように頭と身体の両方を使って習得を目指して下さい。
% 
この章を通して **「お茶サイト」を自作できるようになる** と言うのが学習の仕上がりのポイントです。

```{include} cards/learn/Lets-just-avoid-copying-and-pasting.md
```

````{caution}
はっきり言いましょう。

この第八章で扱う教材「お茶サイト」を**自作できるように**して下さい。

そうしないと**次の章以降で間違いなくおいてけぼりになります**。

そのために必要なことは何でしょうか？考えて実行してください。

```{hint}
以下のようなことを意識したり計画したりしてみましょう。

- 目標をたててスケジュールを組む
- 不明点はこれまでに学んだことを振り返ったり、ググったりしてきちんと調査する、それでも分からなけれれば質問する
- 正念場であると認識し、ストレスとうまく付き合いながら最後までやりきる
- 学習のスピードよりも、理解していることにこだわる。焦りや恐怖からスピードをあげようとして、わかったつもりのままむやみに進めてはならない
- 理解の確認のために、最終的にはテキストのコピペ用の{term}`コード`を一切見ずにイチから書くことにチャレンジする
```
````
`````

```{include} cards/learn/search.md
```

## お茶サイト紹介 ―デザイナーからの指示を受け取る

業務では、デザイナーが完成したデザインを元に{term}`コーディング`作業を行うことになります。
その際にデザイナーから{term}`マークアップエンジニア`へのバトンタッチとして、いくつかの情報源が指示されます。

指示される内容は主に以下の通りです。

```{hint}
デザイナーの意図を{term}`マークアップエンジニア`に伝えることができればよいため、示される情報は案件の性格によって異なります。これより多いことも少ないこともあります。デザイナーの細かな意図を汲んでほしいこともあれば、デザイナーが大雑把に示して細かなことは{term}`マークアップエンジニア`に任せるということもあります。
```

1. デザインカンプ

	デザインカンプとは完成見本を指す印刷業界由来の用語です。
	{bdg-dark-line}`テキスト：P.176〜180` に相当します。
	この見た目になるように作成します。
2. サイト構成、フォルダ構成

	{bdg-dark-line}`テキスト：P.180` の下で点線に囲まれた領域に示されています。
	ウェブサイト全体のページ構成や、それをどのようにフォルダに格納するかを示したものです。
3. ワイヤーフレーム

	ワイヤーフレームとは骨組みのことで、レイアウトの設計のためにデザインカンプに先立って作成されます。
	大きなパーツをレイアウトしたもので、余白の`px数`などの情報が提供されることもあります。
	{bdg-dark-line}`テキスト：P.186` の図に相当します。（余白の`px`数の指定はより細かな{bdg-dark-line}`テキスト：P.199` などのパーツごとの図に示されています。）
	%
	% MEMO デザインカンプとワイヤーフレームの違い
	% https://uxmilk.jp/57767
	%

4. デザインシステム（スタイルガイド）

	デザインシステム（スタイルガイド）とは、デザイナーがウェブサイトを設計する際に考慮したデザイン原則に関する情報で、テーマカラーや使用するフォントなどサイト内で一貫して使用される要素を指します。クラス名などの名前や、フォルダ構造やファイル名などが取り決められていることもあります。
	お茶サイトでは、{bdg-dark-line}`テキスト：P.198` にある「各ページ共通 CSS」が相当します。
	また、{bdg-dark-line}`テキスト：P.186` では`div.content`や`div.tea-images`等のクラス名が示されています。
	%
	% MEMO LEVEL9.MDで次の言及がある.
	% > デザインシステムとはデザイナーの意図を言語化したもので、デザイナーと{term}`マークアップエンジニア`の共通認識を表したものです。具体的には、色や使用するフォントの指示、ブレークポイントなどの指示が含まれます。
	%
5. 素材

	ウェブサイトで使用するテキストや画像などの素材一式です。
	デザイナーが`Photoshop`などのグラフィックツールで作成し、名前を付けて保存したもの一式を渡されます。
	{bdg-primary-line}`お茶サイト制作教材/お茶サイト配付データ` フォルダに含まれます。

## 基本ページの作成 ー index.html

最初に{bdg-dark-line}`テキスト：P.181〜212` の範囲にかけて`index.html`を作成するまでを扱います。

{bdg-primary-line}`お茶サイト制作教材/お茶サイト配付データ` フォルダを`VS Code`で開いてテキストに沿って読み進めて行きましょう。

### STEP-1 「base.html」を開く

`index.html`の作成を楽にするために、HTMLのテンプレートとして`base.html`が用意されています。
`base.html`を基にして`index.html`を作成しましょう。

### STEP-2 `<head>` 内に追記

```{admonition} 訂正
{bdg-dark-line}`テキスト：P.182` の指示に『「素材文字」フォルダ内→「html素材_その１（head内１).txt」を開き』とありますが、実際には {bdg-primary-line}`HTML・CSS応用編お茶サイト制作教材/お茶サイト配付データ/text/1-index.txt` の中にあります。以下のテキスト中に現れる「**素材文字**」についても同様に読み替えてください。
```

ここでは新しく**ファビコン**という用語が出てきます。以下補足します。
```{include} cards/favicon.md
```

### STEP-3 「Google日本語フォント」の設定
{bdg-dark-line}`テキスト：P.183〜185`

「お茶サイト」ではフォントとして「[Notoフォント](https://ja.wikipedia.org/wiki/Noto)」を使用します。

````{glossary}
`Web Fonts`
ウェブフォント
	画像を表示するのに画像ファイルが必要なように、コンピューターがあるフォントを提供するときにはフォント情報を格納したフォントファイルが必要です。
	
	ブラウザーや利用できるフォントファイルは従来は利用者のパソコンの中に有るものしか利用できませんでしたが、現在は特定のフォントファイルを読み込んで利用できる**ウェブフォント**という仕組みが整備されています。
	% そこにないフォントを使用するには画像として用意する必要がありました。見出しの語句を画像としていました。
	% Web Fonts https://developer.mozilla.org/ja/docs/Learn/CSS/Styling_text/Web_fonts
	さらに、インターネット上にフォントファイルを公開し、ウェブフォントとして使用できるようにするサービスも現れており、無料フォントを提供する`Google Fonts`や、有料フォントも提供する`Adobe Fonts`などがあります。
````

{bdg-dark-line}`テキスト：P.183〜185` では、「お茶サイト」に必要な無料の`Noto`フォントを使用できるように、`Google Fonts`の使用方法を説明しています。

```{tip}
**高度な話題 ― ウェブフォントを使用するとSEOの結果が悪化する？**

{bdg-dark-line}`テキスト：P.185` の下部の赤枠に{term}`ウェブフォントの使用が検索結果に悪影響を与えるという`SEO`上の懸念を報告しています。

この理由は次のとおりです。
- Google のSEOの指標である[`Web Vitals`](https://web.dev/i18n/ja/vitals/)では、ページが最初に表示されるまでの速度等が重要とされています。
- 一方、漢字を含んだ日本語フォントのファイルは（数メガバイト〜という）非常に大きなもので、読み込み時間がかかります。これが`SEO`の効果が低下する理由です。

対策には次のようなものがあります。
- 使用する{term}`ウェブフォント`のフォント数を最小限にする。`BOLD`などのウェイトも一つのフォントファイルを必要とするため、ウェイト数を抑えることも重要です。
- より高度な話題として、[coliss のWebフォントの表示を最適化するテクニックの記事](https://coliss.com/articles/build-websites/operation/work/optimizing-the-display-of-web-fonts.html)もお読み下さい。
```

### ワイヤーフレーム（サイト設計図）

{bdg-dark-line}`テキスト：P.186` はページの大規模構造を示すワイヤーフレームです。
色分けで示されているレイアウト構成要素と、その要素をマークアップする際に使用する`header`などの`HTML`の要素や、クラス名が示されています。

### 基本ページの作成 ー スタイルシート設定前のindexページの構成図

{bdg-dark-line}`テキスト：P.187` にはワイヤーフレームから書き起こした`HTML`の大規模構造のマークアップの分析が示されています。この分析は説明のために書き起こされたもので、通常は{term}`マークアップエンジニア`が直接マークアップをしながら起こしていくものです。

{bdg-dark-line}`テキスト：P.187` には新たな`HTML`の要素である`figure`要素と`figcaption`要素が示されています。次に説明します。

(figure)=
#### キャプションが付けられる図版を意味する`figure`と`figcaption`要素

ページに挿入される画像には様々な用途があり、スタイル上のアクセントや、挿し絵などがあります。
`figure`要素を用いれば、キャプションと呼ばれるテキストの見出しを伴う**図版**を挿入することができます。

この`figure`要素が通常の画像とどう違うのかをよく理解することが重要です。

`figure`の特徴はキャプションを伴うことです。キャプションとは「図１」や「表３」のように書かれるもので、本文中から「図１をご覧ください」のように参照されるためのものです。

````{admonition} figureの例
```{figure} https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
:name: figure-sample
本ガイドブックには`figure`がたくさんあります。
% https://unsplash.com/ja/%E5%86%99%E7%9C%9F/ATgfRqpFfFI
```
↑は`figure`の例として写真を扱っています。
> ここは本文です。{numref}`figure-sample`は <a href="https://unsplash.com/ja/s/%E5%86%99%E7%9C%9F/%E3%81%AF%E3%81%AA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" class="reference external">Unsplash</a>の<a class="reference external" href="https://unsplash.com/@roonz_nl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">RoonZ nl</a>が撮影した写真です。

上の本文の例では「{numref}`figure-sample`」のように図を文中から示しています（これを**参照**と言います）。

図版を本文から参照したいな（そのためにキャプションもほしいな）、と思うことがあればそれは`figure`にふさわしいということになります。
````

`figure`は自身のキャプションである`figcaption`を伴って次のようにマークアップします。

```html
<figure>
  <img src="...略..." alt="ピンク色のかわいらしいお花">
  <figcaption>
    <b>図8.2</b> 本ガイドブックには
    <span class="keyword">figure</span>がたくさんあります。
  </figcaption>
</figure>
```

以下、`figure`使用上の細かな注意点です。

- `figure` の中に入れられるものは画像に限りません。本文中から参照される表やソースコードなどを入れることもできます。
- 本文とキャプションの関係は、次のように**潜在的**なものを含んでいます。
  1. 参照のために本文中にキャプションを明示するのは必須ではありません。図版にキャプションを付けることで参照を**匂わせる**だけの用途も可能です。
  2. 本文から「上の図をご覧ください」と参照しつつ、図版のほうにはキャプションを付けないが無い場合も潜在的なキャプションがあるもの、`figure`を使用するのにふさわしいものとなります。

% [mdn のfigureのページ](https://developer.mozilla.org/ja/docs/Web/HTML/Element/figure)には以下のように説明されています。
% > ふつう <figure> は画像、イラスト、グラフ、{term}`コード`の断片など、文書の本文の流れから参照されるものの、本文の流れに影響を与えることなく、文書のほかの部分や付録に移動することが可能なものに用います。

````{tip}
[`figure`](https://ejje.weblio.jp/content/figure) は輪郭のはっきりしている形という意味の英単語です。額縁（という輪郭）に入れられて外部の世界観とは隔てられ、キャプションというタイトルが付けられた芸術作品をイメージして下さい。
```{figure} images/gyazo/f5ff9df0f7a996dae39a5d1f17ef9d5c.png
`figure`のイメージ。
<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/gzb4RKX-pdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" class="reference external">Unsplash</a>の<a class="reference external" href="https://unsplash.com/@villxsmil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luis Villasmil</a>が撮影した写真
% https://unsplash.com/ja/%E5%86%99%E7%9C%9F/gzb4RKX-pdc
```
````

### index.html コードタグ付け

#### `<body>〜</body>`内のHTMLを設定
{bdg-dark-line}`テキスト：P.188` にはワイヤーフレームから書き起こした`HTML`の大規模構造のマークアップが示されています。

{bdg-dark-line}`テキスト：P.186` のワイヤーフレームと対応付けて理解してください。また、理解できたらこの`HTML`を自身で書いてみましょう。

#### (A)設定〜(G)設定
続く{bdg-dark-line}`テキスト：P.189〜195` に渡って、ページの細かなパーツごとのマークアップを説明しています。

`HTML`を作成する時には、このようにパーツに小分けして実装を進めていきます。

```{admonition} 習得の秘訣
`(A)〜(G)`にかけて、それら部品のマークアップには特に新しいことはなく、読んで理解できるはずです。理解できたら実際に書いてブラウザーで確認しながら一つずつ実装を進めて下さい。
```

## リセットCSS
{bdg-dark-line}`テキスト：P.196〜197`

{bdg-dark-line}`テキスト：P.196` には、これまで使用してきた小さなリセット`CSS`に変わるより本格的なリセット`CSS`が示されています。
リセット`CSS`のソースコードの解説が示されていますが、「これ全体でリセットしているんだな」程度の理解で十分です。（リセット`CSS`では高度なプロパティが使われることもあるため、全容の理解は難しいです。）
特徴的なことだけを拾うと、`margin`や`padding`は`0`にされ、`list-style`は`none(なし)`、`clearfix`が利用できる、という点が挙げられます。一方で、「[](box-sizing)」で学んだ代替ボックスモデルを提供する`box-sizing:border-box` は含まれていないようで、必要な箇所には自分で指定する必要があります。（幸い、お茶サイトでは {bdg-dark-line}`テキスト：P.229` に一箇所のみ必要なだけでした。）

リセット`CSS`のファイルは {bdg-primary-line}`お茶サイト制作教材/お茶サイト配付データ/css/reset.css` で、リセット`CSS`を適用した場合のプレビューが{bdg-dark-line}`テキスト：P.197` に示されています。

## スタイルシートの設定(style.css)

`HTML`ができ、リセット`CSS`を用意したのでここからスタイルシートを書いていきます。

### 各ページ共通CSS
{bdg-dark-line}`テキスト：P.198`

共通スタイルの`CSS`の素材は {bdg-primary-line}`お茶サイト制作教材/お茶サイト配付データ/補足データ/CSSテキスト/1-body_wrapper.txt` の上半分にあります。また、以下に続く`CSS`の素材もこの`CSSテキスト`フォルダのなかにあります。

```{admonition} 習得の秘訣
ただし、`CSS`のプロパティはそれぞれがスタイルを変更する意味があり、学習者である読者にはその**意味を吟味するために「１つのプロパティを書いて確認」しながら作業を進めることを強く推奨します。時間をかけるべきです**。時間をかけて一つづつのプロパティの効果を納得するように進めて下さい。
基礎に時間をかけることで全体の学習時間をコンパクトにできます。
```

### index.html header 部分
{bdg-dark-line}`テキスト：P.199〜201`

{bdg-dark-line}`テキスト：P.201` では`:nth-child()`が出てきます。次に説明します。

(nth-child)=
#### 任意の番号の子を選択する`:nth-child()`

以前に触れた「[](last-child)」の仲間に、`:nth-child()` があります。
`nth`とは「`n`番目」という意味で、`:last-child`が末っ子を選択したのに対して、`:nth-child()`では好きな番号を指定することができるようになっています。

- `:nth-child(1)`と書けば最初の子
- `:nth-child(2)`と書けば２番目の子

というように表現します。

以下の例では２番目の子要素を選択しています。

```html
<ul>
  <li>項目１</li>
  <li>項目２</li>
  <li>項目３</li>
  <li>項目４</li>
</ul>
```
```css
li:nth-child(2) {
  background: lightgreen;
}
```

<div>
	<ul>
	  <li>項目１</li>
	  <li style="background: lightgreen;">項目２</li>
	  <li>項目３</li>
	  <li>項目４</li>
	</ul>
</div>

```{hint}
**高度な話題**

`:nth-child()`には、特定の番号を指定するだけでなく「３つおきに指定する」「偶数番目を指定する」などの興味深い指定方法がサポートされています。
詳しくは [mdn :nth-child() の記事](https://developer.mozilla.org/ja/docs/Web/CSS/:nth-child)をご覧ください。
```

### visual_img

{bdg-dark-line}`テキスト：P.202` では`.visual_img`の幅に`%`の単位が使用されています（`width:100%`）。次に説明をします。

(unit-percentage)=
#### CSSの単位`%`の意味（`width:100%`は何`px`？）

`CSS`において、`%`の基本的な意味は、親要素に対しての`%`という意味になります。つまり、`width:100%`は親と同じ幅であるという意味です。では、`.visual_img`の親はどの要素で、`.visual_img`の幅は何`px`になるでしょうか？
```{dropdown} 答え合わせをする
`.visual_img`の親は`div.wrapper`です。
`div.wrapper`に対しては、{bdg-dark-line}`テキスト：P.200` の中で`width: 1100px`が与えられていますので、`.visual_img`の幅も`1100px`です。
```

### お茶のはじまり
{bdg-dark-line}`テキスト：P.203〜204`

（補足事項はありません。）

### 世界のお茶の生産量
{bdg-dark-line}`テキスト：P.205〜206`

### インフォメーション
{bdg-dark-line}`テキスト：P.207〜208`

{bdg-dark-line}`テキスト：P.208` ではスタイルシートの中で`width: calc(100% - 9em);`の部分に`calc()`を使用しています。次に説明します。

#### 電卓機能の`calc()`

`calc()`は`CSS`の中にある電卓機能で、電卓を意味する英単語の`calculator`（カリキュレーター）に由来します。

`calc()`がない時代には、{term}`マークアップエンジニア`は傍らにおいた電卓を取り出してぽちぽちと計算したものでした。もうその必要はありません。コンピューターに計算してもらいましょう。

[mdn のcalc()のページ](https://developer.mozilla.org/ja/docs/Web/CSS/calc)から計算の例を以下に示します。

```css
width: calc(10px + 100px); /* = 110px */
width: calc(100% - 30px);  /* 100%が1100pxだったときには1070px */
width: calc(2em * 5);      /* 1em が16pxの時には16*2*5=160px */
```
`calc()`の興味深い点は、**異なる単位をまぜて計算ができる**ところです。（計算結果の単位は全て`px`となります。）`100% - 30px`のような計算ができるのは非常に便利です。

掛け算には`*`を、割り算には`/`の記号はを使用して下さい。
```css
width: calc(2em * 5);      /* 掛け算 */
width: calc(100% / 5);     /* 割り算 */
```

`calc()`を使用する際の直感的でない注意点として、**足し算`+`と引き算`-`の記号の前後には必ず空白を入れる**ということがあります。以下、`+`の例です。（`-`の場合も同様です。この特例は掛け算`*`や割り算`/`には必要ありません。）

```css
width: calc(10px + 100px); /* OK */
width: calc(10px+ 100px);  /* NG */
width: calc(10px +100px);  /* NG */
width: calc(10px+100px);   /* NG */
```

% ↓この説明はわかりづらいのでボツ. なぜ可能にするのかを説明しないとわからない。
% ````{tip}
% **高度な話題**
% 
% このルールは、「マイナス値」を表現するために用意されています。
% ```css
% /* このような表現を可能にします */
% width: calc(100px - -10px); /* OK */
% ```
% ````


### aside
{bdg-dark-line}`テキスト：P.209`

（補足事項はありません。）

### footer
{bdg-dark-line}`テキスト：P.210〜212`

{bdg-dark-line}`テキスト：P.212` 出てくる`display:inline-block`は「[](display-inline-block)」で説明しましたので参照して下さい。

ここまでで最初のページ、`index.html`が完成しました。
デザインカンプ {bdg-dark-line}`テキスト：P.176` の通りにできているでしょうか？

## 下層ページの実装

ここから`index.html`以外の下層ページを作成していきます。

### temp.html（テンプレート）の作成

{bdg-dark-line}`テキスト：P.213` で作成する`temp.html`は以後の作業を楽にするためのテンプレートの作成になります。

### tool.html
{bdg-dark-line}`テキスト：P.213〜216`

（補足事項はありません。）

### catalog.html
{bdg-dark-line}`テキスト：P.219〜220`

（補足事項はありません。）

### common.html
{bdg-dark-line}`テキスト：P.221〜224`

（補足事項はありません。）

### contact.html
{bdg-dark-line}`テキスト：P.225〜229`

% {{TODO}} ここのtableレイアウトはgridにできるな

入力フォームの項目名と入力欄をレイアウトするために表（`table`）が用いられています。ここでは表は本来の表を示すためではなく、レイアウトの道具として使用されています。

表は「[](table)」で学びましたが、{bdg-dark-line}`テキスト：P.225` には表の内部構造に新しい`th`要素が用いられています。

`th`要素はセルを示す`td`（`table-data-cell`）の特別版で、「**項目の見出し（項目名）**」を意味する`table-header-cell`を縮めたものです。
`th`（項目名）と`td`（項目の内容）を使用することにより、項目名付きの表を定義することができます。

```{hint}
`th`（項目名）は、直感的には表の色付きの行または列として理解できます。

- 例）一行目が項目名の表
	<div>
	<table border="1">
	<tr style="background:lightgreen"><th>名前</th><th>色</th></tr>
	<tr><td>赤りんご</td><td>赤</td></tr>
	<tr><td>青りんご</td><td>緑</td></tr>
	<tr><td>バナナ</td><td>黃</td></tr>
	</table>
	</div>
- 例）一行目と一列目が項目名の表
	<div>
	<table border="1">
	<tr style="background:lightgreen"><th>&nbsp;</th><th>プランA</th><th>プランB</th></tr>
	<tr><th style="background:lightgreen">1月</th><td>３位</td><td>５位</td></tr>
	<tr><th style="background:lightgreen">2月</th><td>４位</td><td>３位</td></tr>
	</table>
	</div>
```

## 昇段試験の前に

お茶サイトに示したようなページを自作できるスキルが必要です。
自身のスキルの基準に引き上げるために、お茶サイトの各ページの自作にチャレンジしましょう。

- 必要な指示を読み取ったり、以前学んだことをおさらいする目的以外にはなるべくテキストを見ずに{term}`コーディング`してみましょう。テキストで使用している{term}`コーディング`とぴったり一致する必要はありません。表示が等しければHTML/CSS{term}`コーディング`の方法は自由です。
- 自分でHTMLをマークアップし、CSSを{term}`コーディング`してページを仕上げる過程を経験して下さい。

## 昇段試験

ここまでのことを学習したら、次の「昇段試験のルール」を確認の上、昇段試験に望んでください。
````{dropdown} クリックして昇段試験のルールを確認する
```{include} cards/school/rule-of-exam.md
```
````

% {{DONE}} どうしよう？→SCSSの教材「SAMPLE PAGE」をそのまま使用した
% 	{{TODO}} １ページ実装してもらう課題を用意する→LEVEL9.MDのスマートフォンサイト作成と同様の指示出しや提出方法、採点方法を用意する
% 	- デザインカンプ、素材(テキスト＆画像)の提供
% 	- HTMLのマークアップとCSS
% 	- {{TODO}} テキストに従ったリハーサル後に加害を作成するのがいいか？（テキストに沿った内容になるので)
% 		adjustacademy.comはかわいくていいなあ
% 			https://adjustacademy.com/

### 素材の配付

解答に必要な素材を提供します。以下から素材のZIPファイルをダウンロードし、展開して利用して下さい。
% ハッシュ化してadjustacademy.omにアップロードする方法
% 2022\11\2022-11-14-120952.txt|1| = 試験の素材と解答の提供方法
- https://adjustacademy.com/webcoder/df3139b465e1ef998870c844c1064831.zip
  - この中に`HTML`と`CSS`、また`img`フォルダに必要な画像素材が含まれます。

### 問題 - 「SAMPLE SITE」ページを仕上げて下さい

- {bdg-dark}`指示` 作業フォルダ名を`samplepage`として下さい。

はじめに完成図を示します。

% https://www.figma.com/proto/A996Ho9Ea1d9MCti8iB87m/HTML%2FCSS%E5%85%A5%E9%96%80%E7%94%A8%E7%B4%A0%E6%9D%90?page-id=656%3A1016&node-id=660%3A1284&viewport=774%2C160%2C0.29&scaling=min-zoom
```{figure} images/gyazo/cff74ae61121166ed74fd3aefa35bf3b.png
この見た目になるように仕上げてください。
```

次に細かな作成指示を行います。

- 細かな作業指示（デザインカンプ）は`Figma`で作成・共有しており、以下の{term}`URL`で確認できます。
	- https://www.figma.com/file/A996Ho9Ea1d9MCti8iB87m/HTML%2FCSS%E5%85%A5%E9%96%80%E7%94%A8%E7%B4%A0%E6%9D%90?node-id=656%3A1016&t=6YC53Kiv15FS4aCQ-1
		````{dropdown} Figmaの読み方を確認する
		```{include} cards/figma.md
		```
		````

この指示どおりに`CSS`を実装して下さい。

HTMLに対し、必要に応じて以下の加工を行って下さい。
- divの追加
- クラス名の追加

リセットCSSは任意とします。使用しても、しなくともかまいません。
% 62.5%のテクニックを使用は自由です。模範解答は`px`を使用しています。
```{include} cards/css/not-use-62.5.md
```

以下のGoogle Fonts を読み込んであり、利用可能です。
- Noto Sans JP ... ウェイトは400(normal)と700(bold)の２種類があります。
	```css
	font-family: 'Noto Sans JP', sans-serif; /* 使用するにはこのように書いて下さい */
	```
- Kosugi Maru ... ウェイトは400(normal)のみです。
	```css
	font-family: 'Kosugi Maru', sans-serif; /* 使用するにはこのように書いて下さい */
	```

### 採点基準

採点基準は以下のとおりです。

1. ブラウザーで開き、指示通りの表示になっているかを確認します。
2. `HTML/CSS`の{term}`コード`を見て間違いや不適切な箇所がないかを確認します。

この両方の水準を満たしていれば合格です。

### 解答の提出

- {bdg-dark}`指示` 提出に先立って最終確認をお願いします。意図通りに制作されていますか？
- {bdg-dark}`指示` 作成した`simplepage`ファイル一式を{{OFFICE}}に提出して下さい。
    - 提出は次のようにして下さい。
        1. レンタルサーバーを借りている場合
            - 「[](upload-to-webserver)」に従い、{bdg-dark}`指示`されたフォルダを{term}`ウェブサーバー`にアップロードして下さい。
            - 以下の文言テンプレートを利用し{{OFFICE}}にメールにて提出して下さい。
                ```{code}
                件名：第八章の昇段試験のファイルを提出します

                ○ ○ です。
				https://xxxxxx/simplepage/index.html
                ```
        2. レンタルサーバーを借りていない場合

            - ファイルを`ZIP`化し、以下の文言テンプレートを利用し{{OFFICE}}にメールにて提出して下さい。
                ```{code}
                件名：第八章の昇段試験のファイルを提出します

                ○ ○ です。
                ZIPファイルを添付します。
                ```

% ```{code}
% おめでとうございます。昇段試験に合格しました。
% 
% - 模範解答を以下のURLからダウンロードできます。自身の答えと照らし合わせて研究して下さい。
%   https://adjustacademy.com/webcoder/05dbbfeb62d641f4ee43fdf083e8f3c6.zip
% 
% 新しいガイドブックを案内します。次のレベル（レベル９）に進んで下さい。
% - 新しいガイドブックのレベル９のページ
%   https://adjustacademy.com/webcoder/guidebook/eaff21cfa63a828f34f02f4bc739a5de/LEVEL9.html
%   	ID: adjust
%   	パスワード: academy
% 
% 事務局 担当：安村(yasumura@adjust.ne.jp)
% ```

