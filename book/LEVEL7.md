# LEVEL7 CSS - Position

% https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Positioning

## STAGE16 position レイアウト **「CSS3基礎」P.66-74**

### positionレイアウト **「CSS3基礎」P.66-68**

### 参考：「position」を使わず、「ﬂoat」レイアウトで配置するには **「CSS3基礎」P.69**

### ボックスの重なり順を変更する「z-index」 **「CSS3基礎」P.70-71**

### 注意：縦並びに配置するボックスに「position:absolute」は設定しません！ **「CSS3基礎」P.72**

### 「lesson_1.html」内にある「div.ﬁx_box」に ﬁxed の設定をする **「CSS3基礎」P.73**

### 「lesson_2.html」内にある「nav」に sticky の設定をする **「CSS3基礎」P.74**

## STAGE16.5 付録 P.85-89

様々な視覚効果を生むプロパティを紹介します。

### 透明度 85 **「CSS3基礎」P.85**
 ( 不透明度・透明度 「CSS3基礎」P.85）

不透明度をopacity(オパシティ)、透明度をアルファ値と呼び、いずれも0(透明)から1.0(不透明)の間の値を指定します。
```{tip}
**不透明度と透明度とは同じ概念です**
不透明度はどのくらい不透明であるか？を扱い、0(透明=全く不透明でない)〜1.0(完全に不透明)の範囲で指定します。0.5では半透明になります。
同様に透明度も0(透明)〜1.0(不透明＝透明ではない)の範囲で指定します。これも0.5で半透明になります。
不透明度も透明度も指定する数値の範囲や意味が同じであるため、どちらの用語を使用しても間違いではありません。
であれば、「透明度」で統一したほうが直感的で分かりやすいと思います。
````

透明度をコントロールできるものには２種類あります。
1. 要素そのもの ... `opacityプロパティ`で指定する
2. 背景や文字など色指定ができるもの ... `rgba()`で色指定にアルファ値を含めた透明色を指定する

```{tip}
CSSで色を扱う`rgba()`などについては、[](color)で扱います。
```

**「CSS3基礎」P.85**下にあるベンダープレフィックスは、まだ標準化されていない先進的なプロパティを使用する際に必要です。しかし本書の範囲では必要ありません。読み飛ばしで大丈夫です。
### 角丸 86 **「CSS3基礎」P.86**

ボックスの角を丸くするプロパティです。

`border-radius`の名前は、境界線や枠線という意味の`border`(ボーダー)と、角を丸める時の円の半径`radius`(ラディウス)と覚えましょう。

`border-radius`で最初に押さえるといいのが次の設定です。

```{code} css
p {
	border-radius: 3px;  /* 四隅全てを少し丸くする */
}
```

`border-radius`に小さなさりげない数値(3px前後)を与えるとおしゃれな雰囲気が出ます。

もう一つテクニックを紹介します。

```{code} css
img {
	border-radius: 50%;	/* ボックスが正方形の時、完全に丸くなる */
}
```

`border-radius`に`%値`を指定すると、セレクターで指定したボックスの幅や高さに対するパーセンテージになります。
% https://developer.mozilla.org/ja/docs/Web/CSS/border-radius
したがって50%を指定するとボックス全体が角丸で囲われることになり、まんまるになります。(ボックスが正方形の時のみの話です)

**「CSS3基礎」P.86**には、四隅のそれぞれの角毎に角丸を与える方法が書かれています。必要に応じて参照して下さい。

### 線形グラデーション 87 **「CSS3基礎」P.84**

(補足事項はありません)
- {{TODO}}円形グラデーションもあると伝える→パスとかもできるようになったかな？

% CSSグラデーションの使用
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients
% →反復グラデーションの応用例がやばい
% 円形グラデーションもあるよ
% https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient
% 扇形もあるよ
% https://developer.mozilla.org/ja/docs/Web/CSS/gradient/conic-gradient

### テキストシャドウ 88 **「CSS3基礎」P.88**
(補足事項はありません)

### ボックスシャドウ 88 **「CSS3基礎」P.88**
(補足事項はありません)

### トランジション 89 **「CSS3基礎」P.89**
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#which_css_properties_are_animatable

トランジション(transition)は「遷移」と言う意味で、CSSのある状態Aから別の状態Bに変化することです。
A→Bに変化する間は途中経過がアニメーションによって表現されます。

**「CSS3基礎」P.89**には、`a要素`に対して`transition(transition-duration)`を設定しています。
`a要素`の最初の状態は`ul li a`セレクターに示されたマウスオーバー(ホバー)していない時で、マウスオーバーした際に`ul li a:hover`セレクターで示された新しい状態（widthが大きくなり、背景色色が赤)に遷移します。

% {{DONE}} ul li a の子孫セレクターを説明していない
%	→P.56に子孫セレクタについてと紹介がある
```{tip}
**子孫セレクター**
`ul li a`というように半角スペース区切りのセレクターは、`ul`の中の`li`の中の`a要素`という意味です。
半角スペースには「〜の中の」という意味が与えられており、単なる空白ではないので注意して下さい。
この半角スペースは「子孫セレクター」と言い、HTMLの入れ子の階層構造の中のものを指定する際に使用します。
非常によく使う表現であるため、しっかり覚えておいて下さい。

テキストでは**「CSS3基礎」P.56**に子孫セレクターの説明があります。
```

% {{DONE}} a:hover を説明していない
```{tip}
**:hover疑似クラス**
`a要素`のセレクター`a`には、`a:hover`のように「hover疑似クラス」と呼ばれる修飾子`:hover`を付けることができます。
`a要素`はマウスで操作できる要素であるため、操作に応じてスタイルを変化させたい（操作に応じて反応する、手応えをデザインする）というニーズがあります。
その際に`:hover`を使用します。
`a:hover`はマウスカーソルが`a要素`に乗っかっている状態を指します。
具体例として、マウスカーソルを乗せていない時、乗せた時で色を変える場合を示します。
```{code} css
a {
	color: blue;
}

a:hover {
	color: green;
}
```
マウスカーソルが乗っていない時には青、マウスカーソルを乗せた時(覆いかぶさるという意味でホバー時と言います)には緑です。
マウスカーソルを外したら再び青の状態に戻ります。

`a要素`に指定できる修飾子には他に`:active疑似クラス`(a要素をクリックし続けている時)、`:link疑似クラス`(未訪問のリンク)、`:visited疑似クラス`(訪問済みのリンク)があります。
以下を参照下さい。
- https://developer.mozilla.org/ja/docs/Web/CSS/:active
- https://developer.mozilla.org/ja/docs/Web/CSS/:visited
- https://developer.mozilla.org/ja/docs/Web/CSS/:link

% ↓この説明は間違いで、color もアニメーションする
% なお、幅widthはアニメーションしますが(幅がにゅーと伸びる)、色の移り変わりはアニメーションしません。
% プロパティの種類毎にアニメーション可能かどうかが決められています。
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_animated_properties

このトランジション（遷移）は２つの状態の間をアニメーションで繋げます。
トランジションにはアニメーション効果はありますが、アニメーションを制作する道具ではなく、どちらかというと「状態の遷移」を表現する道具です。

それに対し、アニメーションのための道具`animationプロパティ`があります。
`animation`はトランジションのように状態の変化という概念がなく、すぐ再生するか、また繰り返し再生するかなどの再生コントロール機能をもちます。
また２点間をつなぐトランジションとはことなり、キーフレームと呼ばれるアニメーションの通過点をいくつも持つことができます。

アニメーション(CSSアニメーション)に関しては本書の範囲をはずれます。
https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations 等を参考にしてください。

% 参考: CSS Animation
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations
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

