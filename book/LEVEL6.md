# LEVEL6 CSS - Flexbox

## Flexbox（フレキシブルボックス）

% https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Flexbox

`flexbox`は、行の方向（横の方向）に対し、柔軟に（フレキシブルに）ボックスをレイアウトする手段を提供します。
% https://ejje.weblio.jp/content/flexible

```{hint}
この`flexbox`が現れる以前は、同様のことを「`float`のパズル」によって達成する必要がありましたが、この`flexbox`によって実現したいことを直接記述できるようになりました。
```
{bdg-dark-line}`テキスト：P.139` にあるフレックスボックスの用語を押さえておきましょう。

````{glossary}
フレックスボックス
  横方向（や縦方向）を基準にし、柔軟に（フレキシブルに）ボックスを配置するレイアウト手法のことです。
  ```{tip}
  % `CSS Flexible Box Layout`の略で
  % https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout
  % `flexbox`
  % https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Flexbox
  正式名称を`CSS Flexible Box Layout`（CSSフレキシブルボックスレイアウト）と言い、一般にはフレックスボックス、また**単にフレックス**と呼びます。
  ```
  フレックスボックスのレイアウトを使用するには、`display:flex;`を使用してフレックスコンテナを作成します。

フレックスコンテナ
  フレックスコンテナはフレックスボックスレイアウトの枠を提供し、並べられるフレックスアイテムの入れ物になります。
  コンテナ(`container`)とは入れ物という意味の英単語です。
  この中に入れた子要素はフレックスアイテムになります。

フレックスアイテム
  フレックスボックスレイアウトによって並べられるボックスのことです。
````

````{hint}
フレックスボックスレイアウトは非常に便利ですが、これから学ぶように関連するプロパティが多く、把握するまでが一苦労です。

そこで、これを直感的に理解することのできるツールがありましたので紹介しておきます。

- https://flexbox.buildwithreact.com/

```{figure} https://i.gyazo.com/c21a3374a8ca451ee2f486f627cb2a14.png
左側の設定をいじると右側に反映されます。いじってみて下さい。
```
````

### ボックス全体の横方向の揃え位置を指定する
{bdg-primary-line}`CSS教材：24_flex_基本` フォルダを`VS Code`で開き、 `lessonA.html`に対し {bdg-dark-line}`テキスト：P.140` のように`CSS`を書いてみて下さい。

````{hint}
```{glossary}
justify
  印刷用語で、行の中の字間を調整して行端が揃うように整える処理のことを指します。
  ジャスティファイ。
```
````

### フレックスアイテムの折返しを指定する
`lessonA.html`に対し {bdg-dark-line}`テキスト：P.141` のように`HTML`のフレックスアイテムを増やし、`flex-wrap:wrap;`を書いてみて下さい。実施後の例は`lessonB.html`です。

```{hint}
フレックスアイテムの折り返しはテキストの改行と同じ要領で行われ、行内にこれ以上新しいフレックスアイテムを格納できないときに起こります。（行溢れ）
したがって折返しの効果を確認するには幅を狭めてやる必要があります。
```

### ボックス全体の縦方向の揃え位置を指定する
`lessonB.html`に対し {bdg-dark-line}`テキスト：P.141` のように`align-content`を書いてみて下さい。

````{hint}
```{glossary}
align
  アラインとは、一列に整列させることを意味します。
  % https://ejje.weblio.jp/content/align
  `CSS`では、行内で横に並ぶもののそれぞれの高さが異なる場合、どの高さを基準に整列させるかという概念で使用されます。 
  フレックスボックスには、フレックスボックス内のコンテンツ全体の整列である{bdg-dark-line}`テキスト：P.141` `align-content`と、細かなアイテム同士の整列である{bdg-dark-line}`テキスト：P.143` `align-items` があります。
  またインライン要素（文字）に対しては`text-align`（`text-align`は「[](text-properties)」で学びました）があり、同様の概念に対して同じ用語`align`が使用されています。
```
````

### ボックス全体の横方向と縦方向の揃え位置を指定する
`lessonC.html`に対し {bdg-dark-line}`テキスト：P.142` のように`CSS`を書いてみて動作を確認して下さい。

### すべてのボックスの縦方向の揃え位置を指定する

{bdg-dark-line}`テキスト：P.143` のように`align-items`を書いてみた例は `lessonD.html`となります。

```{tip}
**縦方向に中央に揃える**

縦方向の中央寄せは従来の`CSS`では難易度が高いものでしたが、`Flexbox`の登場で簡単になりました。
`align-content:center`や`align-items:center`の方法をマスターしておきましょう。
また、横方向の中央寄せである`justify-content:center`を組み合わせて縦にも横にも中央に表示することもできます。
```

(flex-example-first)=
## Flex を応用したニ段組みボックスレイアウト　─　第１段階

（テキストのページを飛ばし、{bdg-dark-line}`テキスト：P.153〜155` を扱います。）

実用的な例から`flexbox`を見てみましょう。

{bdg-primary-line}`教材：27_二段組ボックスレイアウト` フォルダを`VS Code`で開き、{bdg-dark-line}`テキスト：P.153〜155` に従って作業しながら読み進めて下さい。

```{hint}
{bdg-dark-line}`テキスト：155`の最後（『これで「第一段階」が完了しました。』）まででOKです。{bdg-dark-line}`テキスト：P.156〜` の「第２段階」は次のレベル７で`position`を学んでから再挑戦します。
```

% {{DONE}} align-items の `flex-end`と`end`の違いがわからない→おそらく`end`は`flex-end`の旧い値
% この説明の意味がぜんぜんわからない
% https://developer.mozilla.org/ja/docs/Web/CSS/align-items
% 	flex-end
% 	フレックスアイテムの cross-end 側マージンの端は、ラインの cross-end の端に寄せられます。
% 	end
% 	そのアイテムは、互いにその軸の配置コンテナーの末尾側の端に寄せられます。
% https://shanabrian.com/web/css3/flex-align-items.php
% 	ここには`end`は`flex-end`の旧仕様の値とあるが、ほんとうだろうか？
% 仕様書にはたしかに`end`がない！
% https://w3c.github.io/csswg-drafts/css-flexbox/#align-items-property

## グリッドレイアウト

（テキストにはない話題です。軽く補足します。なおグリッドレイアウトは昇段試験にも出ず、本カリキュラムを受講する上で必須ではありません。しかし、現在では常識的な`CSS`の一部であるためどこかのタイミングで学ぶようにして下さい。）

グリッドレイアウトはフレックスボックスに並んで登場した新しいレイアウトの道具です。

フレックスボックスが「横方向」あるいは「縦方向」の一直線上（ただし行が折返す場合はある）に要素を配置するのに対し、表のように縦横のマス目を作り、そのマス目上に要素をレイアウトするのがグリッドレイアウトです。
```{figure} https://i.gyazo.com/ff7501d07711d512560f4940793ab48e.png
フレックスボックスとグリッドレイアウトで表現できる典型的なレイアウトです。フレックスボックスが「横並び」で構成されているのに対し、グリッドは縦横の「マス目」を引いて、マス目上に要素を配置（マス目を空白にすることもできる）してレイアウトを構成します。
（図は[CSS Layout Generator](https://layout.bradwoods.io/)より）
```

グリッドレイアウトに関しては推奨する次のウェブサイトで学んでください。

推奨する情報源
- [ほんっとにはじめての HTML5 と CSS3、今回から Grid Layout を作ってみよう。](http://honttoni.blog74.fc2.com/blog-entry-380.html)
- [MDN グリッドレイアウトの基本概念](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

% 
% 
% フレックスボックスが「横方向」あるいは「縦方向」の一直線にレイアウトするのに対し、表のように縦横のマス目にレイアウトするのがグリッドレイアウトです。
% 
% ```{hint}
% **フレックスボックスはリスト、グリッドレイアウトは表**
% 
% フレックスボックスは「横方向」あるいは「縦方向」の一直線に並べることを扱いますが、行の折返しによって二行目ができ、結果的に縦横のマス目上に並んでいるように見えることがあります。
% そのため、グリッドレイアウトと混同することがあります。
% 
% フレックスボックスはあくまでも一直線に並べるだけであり、二行目移行はあくまでも行の折返しによって生成されます。したがって十分な幅があれば二行目は作られません。
% それに対し、グリッドレイアウトは最初から縦横のマス目を設計し、どのマス目に何を入れるかを考えていきます。したがって十分な幅があっても二行目を設置してあれば必ず二行目が見えます。
% 
% ブラウザーの種類: Google Chrome, Safari, Microsoft Edge, Mozilla Firefox, Opera, Brave, Vivaldi, Midori, Pale Moon, Tor Browser, w3m, Uzbl, Nyxt, 等
% 
% 
% |ブラウザーの種類|
% Google Chrome, Safari, Microsoft Edge, Mozilla Firefox, Opera, Brave, Vivaldi, Midori, Pale Moon, Tor Browser, w3m, Uzbl, Nyxt, 等
% 
% 一覧や人気店の行列のような、一列に並んでほしい（必要に応じて改行も）と考える時にはフレックスボックスを、
% 縦横のマス目を引いてどのマス目にどれを配置するかを考える時にはグリッドレイアウトを使用して下さい。
% 
% ```
% 
% 
% 
% ```{hint}
% フレックスボックスレイアウト、グリッドレイアウトは非常に便利ですが、関連するプロパティも多く、慣れるまでに時間がかかります。
% 
% そこで、これらを直感的に使用するための各種ツールがいくつかありますので使ってみて下さい。
% 
% - [最近のWeb制作に役立つ、CSSの便利ツール総まとめ](https://coliss.com/articles/build-websites/operation/work/useful-tools-for-web-developer.html) の「CSSで実装するレイアウトのツール」に紹介されています。
% 
% - [最近のWeb制作に役立つ、CSSの便利ツール総まとめ](https://coliss.com/articles/build-websites/operation/work/useful-tools-for-web-developer.html) の「CSSで実装するレイアウトのツール」に紹介されています。
% ```
% 正式名称
% CSSフレックスボックスレイアウト
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout
% CSSグリッドレイアウト
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout

 

% flexはコンテンツの幅優先、gridは枠優先
% glid のリスト例
% https://www.figma.com/file/BcWrFX2j7lslCymV8fLUQR/Responsive-Design-Art-News-Landing-Page-(Community)?node-id=1%3A5&t=382485YnHDoo0qeg-1
% →行内３列を維持している

% flexは行内にいくつアイテムが入るかは気にせず、入るだけ入れてはみ出したら改行する。改行によって２行目以降ができるが、考え方としては一次元。つまり、ここに一覧を作ろうとおもったらそれはflexだ。
% それに対し、gridは表のように縦横に配置されたマス目（セル）の集合。（蜂の巣）
% 行内には列数が固定されていて、画面幅を変えるとセルの幅が変わることで列数は保たれていて、セル内のコンテンツが押しつぶされる。したがってflexのような折返しの概念はない。
% 表のようにセルの結合はできる。
% flexが一覧を作ったのに対し、gridは表をつくる。そして表のようなレイアウト手法をもたらす。表でも一列だけの表にして一覧を作ることはできるが(flexとの境目)、表の特徴は行と列からなる構造で、その行と列を保ち続けようとするところにある。
% 表のように区切られた構造を作ろうと思ったらそれはgridだ。

% flexは各アイテムの幅に頓着しない。長さが異なるものを並べるのにも利用される。一方、gridはセルの大きさ、あるいは一行のなかに２列を均等割りで確保するということに関心がある。したがって、 https://www.figma.com/file/7AubNTW0tPsiGlDlAlV3Mg/Responsive-Startup-Website-(Community)?node-id=3%3A199&t=3JcWWchTcLtm0DM7-1 のようなカードとサムネイルが横に並ぶUIはgridで実装するのがふさわしい。これは一覧ではなく、この形を持った一個のものだ。
% 
% 一次元VS二次元レイアウト
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout#one-dimensional_vs._two-dimensional_layout
% 
% https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Grids
% https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout#%E3%82%AC%E3%82%A4%E3%83%89
% https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grid_skills 
% 
% {{TODO}} テキストがない、ベータリリース以降増補する→作例がある、それを元に解説するといいかも →LEVEL2の試験で使用したwikipiaにgridを適用することで説明する
% cd ~/coding_sample
% rg grid | vim -
% responsive/css/style.css   1. 領域を分割してエリアを作る 2. エリアにボックスを配置する
% media-query/css/style.css:  grid-area: main;
% responsive-by-JoyShaheb/css/style.css:      grid-template-columns: 1fr;
% main-structure/css/style.css:   grid-template:

% 折り返し付きのflexはgridに似ている→一次元とみなすか二次元とみなすかの違いがあり、その間にどちらともとれるものがある。flexの場合には折り返すだけと考え、行内のアイテム数にはこだわらない。gridの場合には列数を決めてそれに当てはめることを制御する。

## 昇段試験 - flexbox編

ここまでのことを学習したら、次の「昇段試験のルール」を確認の上、昇段試験に望んでください。
````{dropdown} クリックして昇段試験のルールを確認する（退校となる場合の説明があります）
```{include} cards/school/rule-of-exam.md
```
````

% https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox_skills を使用する（日本語版を作る）→使用しました
% https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet 役立つチートシート

### 素材の配付

解答に必要な素材を提供します。以下から素材のZIPファイルをダウンロードし、展開して利用して下さい。
% ハッシュ化してadjustacademy.omにアップロードする方法
% 2022\11\2022-11-14-120952.txt|1| = 試験の素材と解答の提供方法
% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_flexbox/archive/refs/heads/main.zip
- https://adjustacademy.com/webcoder/b70da6b74278c1bb2f77436fb7dca15a.zip
- この中に`HTML`と`CSS`が含まれます。
	````{dropdown} 配付素材の中で単位remを使用している理由を読む
	```{include} cards/css/why-use-rem.md
	```
	````
  - 展開した`exam_flexbox-main`というフォルダ名を`flexbox`に変更して使用して下さい。解答やサーバーアップロードにそのまま使用できます。

### 問１ - 横並び

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/1`として下さい。（`flexbox`フォルダを作り、その中に`1`フォルダを作って下さい。）
- 使用する配付素材は`1`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} images/gyazo/f022295e9e24477a80bbf7de096167f6.png
配付素材`1/index.html`の初期状態です。
```
```{figure} images/gyazo/c1843df5e122540b1052209705af1f78.png
Flexboxを使用して`one`〜`four`のボックスを横に並べるよう、`style.css`に手を加えて下さい。
```

### 問２ - コンテンツの横並び

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/2`として下さい。（`flexbox`フォルダを作り、その中に`2`フォルダを作って下さい。）
- 使用する配付素材は`2`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} images/gyazo/92ac5e6e527db6d27e81133b3a0a9fff.png
配付素材`2/index.html`の初期状態です。
```

```{figure} images/gyazo/977b6a49ab5216e2c48eee644a51e227.png
`style.css`に手を加え、`Flexbox`を使用して３つのボックスを横に並べてください。

幅は画面幅を３等分するようにし、高さは内容の多い３つ目のボックスに揃えて下さい。
```

### 問３ - 中央寄せ

% {{DONE}} 縦方向の中央寄せは教科書にある？→教科書P.143に存在した
- {bdg-dark}`指示` 作業フォルダ名を`flexbox/3`として下さい。（`flexbox`フォルダを作り、その中に`3`フォルダを作って下さい。）
- 使用する配付素材は`3`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} images/gyazo/0ddc5909ccf8b243c51fa2f523500481.png
:class: no-border
配付素材`3/index.html`の初期状態です。
```

```{figure} images/gyazo/856c242fde1c4d2eec06a271f906be7d.png
:class: no-border
Flexboxを使用して灰色のボックスを枠内の中央に配置するよう、`style.css`に手を加えて下さい。
```

### 問４ - レンガ組み
% {{DONE}} 改行の方法と、flex-startの方法は教科書にあるか？→P.141とP.143にあった

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/4`として下さい。（`flexbox`フォルダを作り、その中に`4`フォルダを作って下さい。）
- 使用する配付素材は`4`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} images/gyazo/9342edcfcce1278c6404267094a35ec9.png
配付素材`4/index.html`の初期状態です。
```

```{figure} images/gyazo/f41d0456f5205b47de6a136a6a609ab0.png
Flexboxを使用して「ドロップ」「タフィ」などのお菓子の名前を横並びにするよう、`style.css`に手を加えて下さい。
（枠内に入りきらない時には改行して下さい。）
```

### 採点基準

採点基準は以下のとおりです。

1. ブラウザーの表示をみて、指示通りの表示になっているかを確認します。
2. CSSを見て、`flexbox`を使用した解答になっているかを確認します。
	この両方の水準を満たしていれば合格です。
	% 水準を満たしているような、満たしていないような場合のグレーゾーンでは、生徒に質問してみて理解できているようであれば（また、やる気のある回答であれば）（必要に応じて指摘箇所を再提させて、これは再提出としてはカウントしない）合格とするなどの配慮を行う。

### 解答の提出

- {bdg-dark}`指示` `flexbox`フォルダを自身のWebサーバーにアップロードし、ページを確認できるURLを{{OFFICE}}に提出して下さい。
- 具体的には次のようにして下さい。
	```{include} cards/school/filling.md
	```
- 以下の文言テンプレートを利用し事務局{{OFFICE}}に提出して下さい。
	```{code}
	件名：LEVEL6の昇段試験のファイルを提出します

	○○です。
	http://xxx.html.xdomain.jp/flexbox/1/index.html
	http://xxx.html.xdomain.jp/flexbox/2/index.html
	http://xxx.html.xdomain.jp/flexbox/3/index.html
	http://xxx.html.xdomain.jp/flexbox/4/index.html
	```


% {{TODO}} 回答のダウンロード指示は、合格通知の中で行う
% ハッシュ化してadjustacademy.omにアップロードする方法
% 2022\11\2022-11-14-120952.txt|1| = 試験の素材と解答の提供方法
% > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_flexbox/archive/refs/heads/main.zip

% ```{code}
% おめでとうございます。昇段試験に合格しました。
% 
% - 模範解答を以下のURLからダウンロードできます。自身の答えと照らし合わせて研究して下さい。
%   % $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_flexbox/archive/refs/heads/answer.zip
%	https://adjustacademy.com/webcoder/4de2b09f57f8cda592c50c0e00a2a2de.zip
% 
% 新しいガイドブックを案内します。次のレベル（レベル７）に進んで下さい。
% - 新しいガイドブックのレベル７のページ
%   https://adjustacademy.com/webcoder/guidebook/061d06844f75ab4a77087f83f09f1bec/LEVEL7.html
%   	ID: adjust
%   	パスワード: academy
% 
% 事務局 担当：安村(yasumura@adjust.ne.jp)
% ```

