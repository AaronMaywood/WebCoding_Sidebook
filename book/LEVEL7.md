# LEVEL7 CSS - Position

## position
% https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Positioning

`position`とは「位置」を意味する英単語ですが、`CSS`の`position`プロパティを使用すれば直接ボックスの表示位置を指定することが可能です。

```{hint}
`CSS`でのレイアウトの基本的な考え方は、通常フローを始めとして`float`や`flexbox`など、どのように表示してほしいかだけを書いて、実際の配置はブラウザー任せであるのに対し、`position`は製作者が直接位置を指定できる点で趣が異なります。
```

{bdg-primary-line}`CSS教材：25_position` フォルダを`VS Code`で開き、{bdg-dark-line}`テキスト：P.144〜152` に沿って作業しながら読み進めて下さい。

```{admonition} 高度な話題
`positon:relative;`及び`position:aboslute;`は単独で使用することもできますが、{bdg-dark-line}`テキスト`では実際に使用することの多い、この２つの組み合わせのパターンの手法を伝えています。
```

````{hint}
参考までに用語の英単語の意味を説明します。
```{glossary}
relative
  相対的という意味です。反対語は絶対的です。
  比較をする時において、基準に取り上げたものとの差を表現します。
  住所で例えると「鈴木さんの家は、私の家の２つ隣です」という表現を指します。（私の家を基準にしています。） {bdg-dark-line}`関連` 「相対パス（[](relative-path)）」
  
  レラティブ、リラティブ。

absolute
  絶対的という意味です。反対語は相対的です。
  比較をする時において、基準にするものが共通認識にある価値基準をもとにして表現します。
  住所で例えると「鈴木さんの家は、東京都新宿区歌舞伎町2-2-15です。」という表現を指します。（日本人の共通認識である日本国を基準にしています。）
  
  アブソリュート。
``` 
````

### 参考：「position」を使わず、「ﬂoat」レイアウトで配置するには
{bdg-dark-line}`テキスト：P.147`

```{admonition} 重要度が低い
{bdg-dark-line}`テキスト：P.147` で説明しているのは「`float`のパズル」を使用した方法で、`float`の概念で同じことをするにはということを念の為に（あるいは`float`の知識を確たるものにするために）説明しています。まさにこういうことをするために`positon`があるのであり、主要な方法ではないので読み飛ばしてかまいません。
```

### ボックスの重なり順を変更する「z-index」
{bdg-dark-line}`テキスト：P.148〜149`

`CSS`の通常のフローを始め、各種のレイアウト方法はボックスが重ならないようにできています。したがってボックスの重なりは特別な状態であり、`positon`の使用ではじめて発生します。（`position`の他に、`flexbox`のフレックスアイテムが重なる場合があります。）

ボックスが重なった場合にどちらを手前に表示するかを制御するのが`z-index`プロパティです。
```{hint}
`z-index`の言葉を解説します。
`z`は数学の用語に由来しており、横方向を示す`x軸`と縦方向を示す`y軸`に対し、奥行き方向を`z軸`と呼ぶことから来ています。
`index`とは並び順の番号のことを指しています。
したがって`z-index`は奥行き方向での並び順の番号という意味です。
```

- `z-index`の並び順番号が１番のボックスよりも、２番目のボックスが手前に表示されます。
- `z-index`の番号は連続している必要はなく、１番の次に999番を並べてもかまいません。（999番の人が手前に表示されます。）
- ただし、番号には整数しか使えません。たとえば1.5番というのはありません。

### 注意：縦並びに配置するボックスに「position:absolute」は設定しません！
{bdg-dark-line}`テキスト：P.150`

```{hint}
これは単に「通常のフロー」の説明です。
`position`を指定しないボックスは通常のフローに従い、ブロックレベル要素（ブロックレベルボックス）は自動的に縦に並ぶことを説明しています。
```

### 「lesson_1.html」内にある「div.ﬁx_box」に ﬁxed の設定をする

`positon`に指定できる値には、ここまでに学んだ`relative`、`absolute`の他に`fixed`と`sticky`があります。それぞれの特徴を見ていきましょう。

````{hint}
```{glossary}
fixed
  固定された、という意味の英単語です。画鋲でラベルを貼っておくイメージです。
  フィクスト。

sticky
  粘着性のある、という意味の英単語です。べたべたした付箋を貼り付けるイメージです。
  スティッキー。
``` 
````

{bdg-primary-line}`CSS教材：26_position_fixedとsticky` フォルダを`VS Code`で開き、 {bdg-dark-line}`テキスト：P.151` に沿って作業しながら読み進めて下さい。

### 「lesson_2.html」内にある「nav」に sticky の設定をする

`fixed`に続き、`sticky`を見ていきましょう。この２つは似ているようで違います。

{bdg-primary-line}`CSS教材：26_position_fixedとsticky` フォルダを`VS Code`で開き、 {bdg-dark-line}`テキスト：P.152` に沿って作業しながら読み進めて下さい。


## Flex を応用したニ段組みボックスレイアウト　─　第２段階

LEVEL6「[](flex-example-first)」の作業の続きです。

{bdg-primary-line}`CSS教材：27_二段組ボックスレイアウト` フォルダを`VS Code`で開き、 {bdg-dark-line}`テキスト：P.156〜160` に沿って作業しながら読み進めて下さい。

## 「WinSCP」でWWWサーバーへアップする

```{hint}
**{bdg-dark-line}`テキスト：P.161〜162` は読み飛ばして下さい。**

作成したファイルを`Webサーバー`へアップロードする方法を説明しています。
本ガイドブックの読者はすでに「[](webserver.md)」でお馴染みの手順です。（なお、ファイルをアップロードに使用するアプリケーションが`Filezilla`の代わりに`WinSCP`となっていますが、できることは同じです。）
```

## 付録：CSS3 簡易解説
{bdg-dark-line}`テキスト：P.163〜167`
{bdg-primary-line}`CSS教材：付録CSS3`

様々な視覚効果を生むプロパティを紹介します。

### 透明度
{bdg-dark-line}`テキスト：P.163`

````{tip}
コンピューター用語では透明を指す用語に２つの語が使われます。

一つが**不**透明度で`opacity`（オパシティ）と書きます。もう一つが透明度で、アルファ値と呼び、いずれも0(透明)から1.0(不透明)の間の値を指定します。

```{tip}
**不透明度と透明度とは実用的には同じ概念です**

不透明度はどのくらい不透明であるか？を扱い、0(透明=全く不透明でない)〜1.0(完全に不透明)の範囲で指定します。0.5では半透明になります。
同様に透明度も0(透明)〜1.0(不透明＝透明ではない)の範囲で指定します。これも0.5で半透明になります。
不透明度も透明度も指定する数値の範囲や意味が同じであるため、どちらの用語を使用しても間違いではありません。

まぎらわしいね！
```

`CSS`でもこの２つの用語が使用されています。`opacity`プロパティと、色の表現で使用される`rgba()`（末尾の`a`がアルファ値を指しています）です。
````

透明度をコントロールできるものには２種類あります。
1. 要素そのもの ... `opacityプロパティ`で指定する
2. 背景や文字など色指定ができるもの ... `rgba()`で色指定にアルファ値を含めた透明色を指定する
	```{tip}
	CSSで色を扱う`rgba()`については「[](color)」でも紹介しています。
	```

```{hint}
{bdg-dark-line}`テキスト：P.163` の下の枠で紹介されているベンダープレフィックスは、まだ標準化されていない先進的な（及び実験的な）プロパティを使用する際に使用する接頭辞です。

本書では既に普及しているプロパティを扱っているため読み飛ばしてかまいませんが、読者が将来できたてホヤホヤのプロパティを使用する場合には必要になるかもしれません。
```

### 角丸(かどまる)
% https://developer.mozilla.org/ja/docs/Web/CSS/border-radius
{bdg-dark-line}`テキスト：P.164`

ボックスに引いたボーダーの角を丸くするプロパティです。角丸を使用するには、`border-radius`だけではだめで、必ず`border`を引いて下さい。

```{hint}
`border-radius`の`radius`は円の半径という意味の英単語です。
角を丸める時に使用する円の半径という意味です。
```

`border-radius`で最初に覚えてほしい慣用表現２つを紹介します。

1. ボックスをおしゃれにする
	```{code} css
	p {
	    border-radius: 3px;  /* 四隅全てを少し丸くする */
	}
	```
	`border-radius`に小さなさりげない数値(`3px`前後)を与えるとおしゃれな雰囲気が出ることが知られています。その反対に大きな数値を与えると子供っぽいかわいらしい雰囲気となります。
2. 正方形の画像を丸く切り抜く
	正方形の画像にしか使えませんが、以下のスタイルを与えると、丸く切り抜かれたような画像にできます。
	```{code} css
	img {
	    border-radius: 50%;	/* ボックスが正方形の時、完全に丸くなる */
	}
	```
	`50%`は画像の半分を意味しており、角丸の４つの円がそれぞれ画像の半分の半径を持つため、全体としては丸く切り抜かれる効果となります。

### 線形グラデーション
{bdg-dark-line}`テキスト：P.165`

% - {{TODO}} 色だよ、テキストのカラーにも使えるよ
%   →嘘でした。色ではなく、iamgeの特殊なもの。
%     https://developer.mozilla.org/ja/docs/Web/CSS/gradient/linear-gradient

% MEMO 虹色テキストの作り方→けっこう複雑だった.
% https://csshtml.work/rainbow/
% <div>
%   <p style="
%		background: linear-gradient(to right,#e60000,#f39800,#fff100,#009944,#0068b7,#1d2088,#920783);
%		background-clip: text;
%		-webkit-text-fill-color:transparent;">
% 	CSSグラデーションの使用
% 	https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients
% 	https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient
%   </p>
% </div>

```{hint}
グラデーションにはここで説明する線形グラデーション`liner-gradient`の他に、円形`radial-gradient`や扇形`conic-gradient`、また反復を伴ったグラデーションのサポートが追加されています。
グラデーションや模様が好きなら、[mdn CSSグラデーション](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)を覗いてみて下さい。（記事の後半には、グラデーションでできているとは思えないやばい例があります）
```

### 影（シャドウ）

`CSS`では、テキストとボックスに影を付けることができます。
影に対する数値の意味は、この両者で共通しています。

% ↓filterプロパティであり、影とは異色なので紹介しなくてもいいかな。(filterそのものを説明していないし）
% ```{tip}
% 切り抜かれた画像の形に沿って影を付けるドロップシャドウもあります。
% 
% % https://developer.mozilla.org/ja/docs/Web/CSS/filter
% https://developer.mozilla.org/ja/docs/Web/CSS/filter-function/drop-shadow
% ```

#### テキストシャドウ
{bdg-dark-line}`テキスト：P.166`

````{tip}
**カンマ区切り**で複数の影を付けることもできます。（ボックスシャドウも同様です）
```html
<p>hello</p>
```
```css
p {
    font-size: 3rem;
    text-shadow:
       /* １つ目の影 */
        4px -4px 1px lightgreen, 
       /* ２つ目の影 */
       -4px  4px 3px lightblue;
}
```
<div>
   <p style="font-size: 3rem; text-shadow: 4px -4px 1px lightgreen, -4px 4px 3px lightblue;">hello</p>
</div>
````

#### ボックスシャドウ
{bdg-dark-line}`テキスト：P.166`

４つめの数値である広がり（影の拡大縮小）と、オプションとして内側に影を設定する`inset`キーワードが追加されています。

### トランジッション（トランジション）
{bdg-dark-line}`テキスト：P.167`

% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#which_css_properties_are_animatable

トランジションについては「[](transition)」で説明しました。

% ↓この説明は間違いで、color もアニメーションする
% なお、幅widthはアニメーションしますが(幅がにゅーと伸びる)、色の移り変わりはアニメーションしません。
% プロパティの種類毎にアニメーション可能かどうかが決められています。
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_animated_properties

## 昇段試験 - position

% 位置指定のテスト
% https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Position_skills
% 
% 実用的な位置指定の応用例→JavaScriptが必要だから不採用
% https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Practical_positioning_examples

- {{TODO}} 元素材のダウンロード指示
	素材を入手して下さい
		以下のURLから素材のZIPファイルをダウンロードし、展開して置いて下さい。
			https://adjustacademy.com/..../9879878a797878.zip
- {{TODO}} 回答のダウンロード指示
- {{TODO}} 採点の方式
 
### 問１ - 右上表示

素材の`1/`フォルダを`VS Code`で開いて下さい。
`css/style.css`を編集して以下の問いに答えてください。

```{figure} https://i.gyazo.com/049658e1f669ded396e2067f62864a62.png
この状態からスタートして、
```
```{figure} https://i.gyazo.com/0631e6f5499cbed55b429fbb13c0a723.png
この見た目にしてください。 （黄緑色のボックスは下にある文字を隠してかまいません。）
```

### 問２ - 欄外にはみ出る吹き出し

```{figure} https://i.gyazo.com/68646dbc76316e4d588dae039143d72a.png
オレンジ色の「最新の開講情報」の吹き出しのように、ボックスからはみ出したデザインにチャレンジします。
```

素材の`2/`フォルダを`VS Code`で開いて下さい。
`css/style.css`を編集して以下の問いに答えてください。

```{figure} https://i.gyazo.com/7e29530dcee9b5a11d2551a228b371f0.png
この状態からスタートして、
```

```{figure} https://i.gyazo.com/479fe0cb4a8bd896a8f3011896dbedd9.png
この見た目にしてください。 （黄緑色のボックスは下にある文字を隠してかまいません。）
```

### 問３ - 左側エリア

```{figure} https://i.gyazo.com/72e8b3c527654b8a53533bd23acac6fe.jpg
左側のメニュー領域を作成します。
```
```{figure} https://i.gyazo.com/fbd9f57fef854d4e2c9f5c6db9209cfd.gif
なお、記事内容をスクロールさせても左側メニューは固定されています。
```

素材の`3/`フォルダを`VS Code`で開いて下さい。
`css/style.css`を編集して以下の問いに答えてください。

```{figure} https://i.gyazo.com/45b7a1ab2a51344f8c44300562d764e5.png
この状態からスタートして、
```
```{figure} https://i.gyazo.com/c6a6f0be42fca09e3926a1cfe37bfb89.png
この見た目にしてください。 （黄緑色のボックスは下にある文字を隠してかまいません。）
```
```{figure} https://i.gyazo.com/fe2fd558d7f999979d963f3c18eaca71.gif
なお、記事内容をスクロールさせても左側メニューは固定されています。
```

% その他のネタ
%
% 影のジェネレーター
% https://getcssscan.com/css-box-shadow-examples
% 	→サンプル影を示し、構造を解析してもらう
% box-shadowだけじゃない！CSSでできる色々な影の表現と意外に知らない落とし穴
% https://ics.media/entry/200406/
% 	この記事は上級編、だがわかりやすい！
% 
% トランジションの例
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
%	transition
%	https://github.com/AaronMaywood/coding_sample/tree/main/transition
%		https://aaronmaywood.github.io/coding_sample/transition/

## 提出方法（検証〜提出）

- 動作確認ができたら提出して下さい。
	````{dropdown} 課題の提出方法を確認する
	```{include} cards/school/send-in-files.md
	```
	````
- 合格すれば模範解答を手に入れることができます。模範回答と照らし合わせ、さらに知識を固めて下さい。
	- また、次のレベル教材が示されます。次のレベルに進んでください。

% ```{code}
% おめでとうございます。昇段試験に合格しました。
% 
% - 模範解答を以下のURLからダウンロードできます。自身の答えと照らし合わせて研究して下さい。
% 	https://adjustacademy.com/webcoder/8f41205015c24ebc80ea45570bb06f6a.zip
% 
% 新しいガイドブックを案内します。次のレベル（レベル８）に進んで下さい。
% - 新しいガイドブックのレベル８のページ
https://adjustacademy.com/webcoder/guidebook/f9438d369d723c8e8b6cdc3f1cd78b64/LEVEL8.html
%   	ID: adjust
%   	パスワード: academy
% 
% 事務局 担当：安村(yasumura@adjust.ne.jp)
% ```

