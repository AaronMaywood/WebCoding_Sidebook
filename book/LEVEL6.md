# LEVEL6(LEVEL6.md) CSS - Position

% https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Positioning

## STAGE16 position レイアウト **「CSS3基礎」P.66-74**

### positionレイアウト **「CSS3基礎」P.66-68**

### 参考：「position」を使わず、「ﬂoat」レイアウトで配置するには **「CSS3基礎」P.69**

### ボックスの重なり順を変更する「z-index」 **「CSS3基礎」P.70-71**

### 注意：縦並びに配置するボックスに「position:absolute」は設定しません！ **「CSS3基礎」P.72**

### 「lesson_1.html」内にある「div.ﬁx_box」に ﬁxed の設定をする **「CSS3基礎」P.73**

### 「lesson_2.html」内にある「nav」に sticky の設定をする **「CSS3基礎」P.74**

## STAGE16.5 付録 P.85-89

### 透明度 85 **「CSS3基礎」P.85**

### 角丸 86 **「CSS3基礎」P.86**

### 線形グラデーション 87 **「CSS3基礎」P.84**

% CSSグラデーションの使用
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients
% →反復グラデーションの応用例がやばい
% 円形グラデーションもあるよ
% https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient
% 扇形もあるよ
% https://developer.mozilla.org/ja/docs/Web/CSS/gradient/conic-gradient

### テキストシャドウ 88 **「CSS3基礎」P.88**

### ボックスシャドウ 88 **「CSS3基礎」P.88**

### トランジション 89 **「CSS3基礎」P.89**
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

