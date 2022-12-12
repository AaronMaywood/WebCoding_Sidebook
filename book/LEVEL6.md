# LEVEL6 CSS - Flexbox

## Flexbox

% https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Flexbox

`flexbox`は、行の方向（横の方向）に対し、柔軟に（フレキシブルに）ボックスをレイアウトする手段を提供します。
% https://ejje.weblio.jp/content/flexible

```{hint}
この`flexbox`が現れる以前は、同様のことを「`float`のパズル」によって達成する必要がありましたが、この`flexbox`は実現したいことを直接記述できるようになりました。
```
{bdg-dark-line}`テキスト：P.139` にあるフレックスボックスの用語を押さえておきましょう。

```{glossary}
フレックスボックス
  横方向（や縦方向）を基準にし、柔軟にボックスを配置するレイアウト手法のことです。
  フレックスボックスのレイアウトを使用するには、`display:flex;`を使用してフレックスコンテナを作成します。

フレックスコンテナ
  フレックスコンテナはフレックスボックスレイアウトの枠を提供し、並べられるフレックスアイテムの入れ物になります。
  コンテナ(`container`)とは入れ物という意味の英単語です。
  この中に入れた子要素はフレックスアイテムになります。

フレックスアイテム
  フレックスボックスレイアウトによって並べられるボックスのことです。
```

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
フレックスアイテムが折り返すには、改行と同じくフレックスコンテナの幅が狭い必要があります。
```

### ボックス全体の縦方向の揃え位置を指定する
`lessonB.html`に対し {bdg-dark-line}`テキスト：P.141` のように`align-content`を書いてみて下さい。

````{hint}
```{glossary}
align
  アラインとは、一列に整列させることを意味します。
  % https://ejje.weblio.jp/content/align
  `CSS`では、行内で横に並ぶものに対し、それぞれの高さが異なる場合に高さのどこを基準に整列させるかという概念（**縦を整列するものとして**）で使用されます。
  フレックスボックスには、フレックスボックス内のコンテンツ全体の整列である{bdg-dark-line}`テキスト：P.141` `align-content`と、細かなアイテム同士の整列である{bdg-dark-line}`テキスト：P.143` `align-itemx` があります。
  またインライン要素（文字）に対しては`text-align`（`text-align`は「[](text-properties)」で学びました）があり、同様の概念に対し同様の`align`の語が使用されています。
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
{bdg-dark-line}`テキスト：155`の最後（『これで「第一段階」が完了しました。』）まででOKです。{bdg-dark-line}`テキスト：P.156〜` の「第２段階」は次のレベル６で`position`を学んでから再挑戦します。
```

% ## Grid
% 
% {{TODO}} テキストがない、ベータリリース以降増補する→作例がある、それを元に解説するといいかも →LEVEL2の試験で使用したwikipiaにgridを適用することで説明する
% cd ~/coding_sample
% rg grid | vim -
% responsive/css/style.css   1. 領域を分割してエリアを作る 2. エリアにボックスを配置する
% media-query/css/style.css:  grid-area: main;
% responsive-by-JoyShaheb/css/style.css:      grid-template-columns: 1fr;
% main-structure/css/style.css:   grid-template:

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
% > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_flexbox/archive/refs/heads/main.zip
- https://adjustacademy.com/webcoder/b70da6b74278c1bb2f77436fb7dca15a.zip
- この中に`HTML`と`CSS`が含まれます。

### 問１ - 横並び

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/1`として下さい。
- 使用する配付素材は`1`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/f022295e9e24477a80bbf7de096167f6.png
配付素材`1/index.html`の初期状態です。
`one`〜`four`のボックスを...
```
```{figure} https://i.gyazo.com/c1843df5e122540b1052209705af1f78.png
Flexboxを使用して図のように横に並べるよう、`style.css`に手を加えて下さい。
```

### 問２ - コンテンツの横並び

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/2`として下さい。
- 使用する配付素材は`2`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/92ac5e6e527db6d27e81133b3a0a9fff.png
配付素材`2/index.html`の初期状態です。
３つのボックスを...
```

```{figure} https://i.gyazo.com/977b6a49ab5216e2c48eee644a51e227.png
Flexboxを使用して図のように横に並べるよう、`style.css`に手を加えて下さい。３つのボックスの幅と高さは同じにしてください。
```

### 問３ - 中央寄せ

% {{DONE}} 縦方向の中央寄せは教科書にある？→教科書P.143に存在した
- {bdg-dark}`指示` 作業フォルダ名を`flexbox/3`として下さい。
- 使用する配付素材は`3`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/0ddc5909ccf8b243c51fa2f523500481.png
:class: no-border
配付素材`3/index.html`の初期状態です。
灰色のボックスを、
```

```{figure} https://i.gyazo.com/856c242fde1c4d2eec06a271f906be7d.png
:class: no-border
Flexboxを使用して枠内の中央に配置するよう、`style.css`に手を加えて下さい。
```

### 問４ - レンガ組み
% {{DONE}} 改行の方法と、flex-startの方法は教科書にあるか？→P.141とP.143にあった

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/4`として下さい。
- 使用する配付素材は`4`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/9342edcfcce1278c6404267094a35ec9.png
配付素材`4/index.html`の初期状態です。
縦に並んでいる「ドロップ」「タフィ」などのお菓子の名前を...
```

```{figure} https://i.gyazo.com/f41d0456f5205b47de6a136a6a609ab0.png
Flexboxを使用して図のように改行ありの横並びにするよう、`style.css`に手を加えて下さい。
```

### 採点基準

採点基準は以下のとおりです。

1. ブラウザーの表示をみて、指示通りの表示になっているかを確認します。
2. CSSを見て、`flexbox`を使用した解答になっているかを確認します。
この両方の水準を満たしていれば合格です。
% 水準を満たしているような、満たしていないような場合のグレーゾーンでは、生徒に質問してみて理解できているようであれば（また、やる気のある回答であれば）（必要に応じて指摘箇所を再提させて、これは再提出としてはカウントしない）合格とするなどの配慮を行う。

### 解答の提出

```{include} cards/school/filling.md
```

% {{TODO}} 回答のダウンロード指示は、合格通知の中で行う
% ハッシュ化してadjustacademy.omにアップロードする方法
% 2022\11\2022-11-14-120952.txt|1| = 試験の素材と解答の提供方法
% > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_flexbox/archive/refs/heads/main.zip

% ```{code}
% おめでとうございます。昇段試験に合格しました。
% 
% - 模範解答を以下のURLからダウンロードできます。自身の答えと照らし合わせて研究して下さい。
% 	https://adjustacademy.com/webcoder/8f41205015c24ebc80ea45570bb06f6a.zip
% 
% 新しいガイドブックを案内します。次のレベル（レベル７）に進んで下さい。
% - 新しいガイドブックのレベル７のページ
%   https://adjustacademy.com/webcoder/guidebook/061d06844f75ab4a77087f83f09f1bec/LEVEL7.html
%   	ID: adjust
%   	パスワード: academy
% 
% 事務局 担当：安村(yasumura@adjust.ne.jp)
% ```

