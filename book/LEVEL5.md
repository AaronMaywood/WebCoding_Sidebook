# LEVEL5 CSS - 背景、float、実例:ナビメニュー

## STAGE12 背景画像

- (おさらい)background-color はカラーの説明P.104にあらわれていました
- 背景画像のくりかえし P.117 {bdg-primary-line}`教材：13_背景画像の繰り返し`
- 背景画像の配置 P.118 {bdg-primary-line}`教材：14_背景画像の配置`
- 背景画像サイズ P.119 {bdg-primary-line}`教材：15_背景画像の配置`
  - 「header」・「article」・「section」等のボックスに「高さ」を設定するには P.120
  - 「header」内にボックスよりも小さな「背景画像」を設定すると…。 P.120
  - 「background-size」に「cover」を設定すると…。 P.121
  - 「background-size」に「contain」を設定すると…。 P.121
  - 「background-size」に「auto」を設定すると…。 P.121
  - 「background-size:cover」と「background-position」を組み合わせる P.122

## STAGE13 float

- 「float」と「clear」について
- 「float」と「clear」を検証する P.123-126 P.123 {bdg-primary-line}`教材：16_フロート基本`
- フロートによる文字の回り込み P.127-128 {bdg-primary-line}`教材：17_画像・文字回り込み`

- フロートした子要素と親要素の関係 P.129
  - 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓐ  P.130
  - 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓑ  P.131

## STAGE13-2

- `<ul>`、`<ol>` または`<li>`要素に設定するプロパティ P.132 {bdg-primary-line}`教材：19_リストマーカー`
- overflow プロパティ P.133 {bdg-primary-line}`教材：20_overflow`
### overflow 「CSS3基礎」 P.55

overflow(オーバーフロー)とは内容が規定の枠から溢れてはみ出ることです。
中身が詰まっている箱(ここの例では文章の詰まった`div要素`)を用意し、箱に対してwidth(ウィッズ、幅)、height(ハイト、高さ) を指定して箱の大きさを縮めてみます。
すると`div`の箱に収まりきらない文章が出て、それらは箱の枠線からはみ出ます。
これがoverflow(溢れ)です。

overflowが起こった際に溢れた部分をどうあしらうかを制御するのがCSSの`overflowプロパティ`です。


## STAGE14 ナビメニュー

- ナビメニュー - 縦組み P.136 {bdg-primary-line}`教材：21_メニュー縦組・横組`
- ナビメニュー - 横組み P.137

## 昇段試験 - 背景、float編を受験する

% {{TODO}} float編という名前だと、float以外が試験にあらわれないと思われてしまう。LEVEL5などとしたい

```{include} cards/school/running-in-to-exam.md
```

## 昇段試験 - 背景、float編

% 背景、float
% 背景はcover
% 文章と挿し絵
% 「ア、秋」にファーストビューの背景と挿し絵を挿入する
% https://www.aozora.gr.jp/cards/000035/files/236_19996.html 
% https://github.com/AaronMaywood/coding_sample/tree/main/a-aki	←試作品
% 	→子孫セレクターを使用しているので説明が必要
% 		教科書ではP.56で扱っている
% 
% オーバーフロー、
% リスト、ナビメニュー
% - 横展開はflexを使ったBtypeがいい。flexと合わせて教えるのがいいかな
% 	typeCはレガシーコード


### 素材、採点基準

- 解答に必要な素材を提供します。以下から素材のZIPファイルをダウンロードし、展開して利用して下さい。
	% ハッシュ化してadjustacademy.omにアップロードする方法
	% 2022\11\2022-11-14-120952.txt|1| = 試験の素材と解答の提供方法
	% > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_float/archive/refs/heads/main.zip
	% https://adjustacademy.com/webcoder/950058dd6702e10e6ff3fed5f462bbfb.zip
	- https://adjustacademy.com/webcoder/950058dd6702e10e6ff3fed5f462bbfb.zip
    - この中にHTMLとCSSが含まれます。

- 採点基準は以下のとおりです。
	1. ブラウザーの表示をみて、指示通りの表示になっているかを確認します。
	2. CSSを見て、`float`を使用した解答になっているかを確認します。
	この両方の水準を満たしていれば合格です。
	% 水準を満たしているような、満たしていないような場合のグレーゾーンでは、生徒に質問してみて理解できているようであれば（また、やる気のある回答であれば）（必要に応じて指摘箇所を再提させて、これは再提出としてはカウントしない）合格とするなどの配慮を行う。

### 昇段試験のルール

% 昇段試験の案内
```{include} cards/school/rule-of-exam.md
```

---
### 問１ - 「ア、秋」

- {bdg-dark}`指示` 作業フォルダ名を`float/a-aki`として下さい。
- 配付素材は`a-aki`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/cdf19cb0983323856c9f5b86f2f541c2.png
この見た目になるようにCSSを調整して下さい。
```
1. 表題に柿の背景を敷いて下さい。図のように柿の上半分が見えるようにして下さい。
2. 文中の挿し絵２枚をそれぞれ右、左に配置し、画像に文字を回り込ませて下さい。

## 解答の提出

```{include} cards/school/filling.md
```

% {{TODO}} 回答のダウンロード指示は、合格通知の中で行う
% > $ download-zip-to-rename-by-hash 

% ```{code}
% おめでとうございます。昇段試験に合格しました。
% 
% - 模範解答を以下のURLからダウンロードできます。自身の答えと照らし合わせて研究して下さい。
TODO
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


### 昇段試験のルール

% 昇段試験の案内
```{include} cards/school/rule-of-exam.md
```

---
### 問１ -  {{TODO}}

- {{TODO}} {bdg-dark}`指示` 作業フォルダ名を`float/a-aki`として下さい。
- {{TODO}} 配付素材は`a-aki`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/cdf19cb0983323856c9f5b86f2f541c2.png
この見た目になるようにCSSを調整して下さい。
```
1. 表題に柿の背景を敷いて下さい。図のように柿の上半分が見えるようにして下さい。
2. 文中の挿し絵２枚をそれぞれ右、左に配置し、画像に文字を回り込ませて下さい。

## 解答の提出

```{include} cards/school/filling.md
```

