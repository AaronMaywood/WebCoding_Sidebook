# LEVEL5 CSS - 背景、float、実例:ナビメニュー

## 背景画像

`CSS`では背景に色や画像を敷くことができます。画像の場合には繰り返したり、拡大したり、表示位置を調整する機能があります。

- （おさらい）背景に色を敷くことのできる`background-color` はカラーの説明を行う「[](color) （{bdg-dark-line}`テキスト：P.104`）」で扱いました。
- 以下{bdg-dark-line}`テキスト：P.117〜122` では、背景に画像を敷く場合について説明しています。

### 背景画像のくりかえし
{bdg-dark-line}`テキスト：P.117〜122` 
{bdg-primary-line}`教材：13_背景画像の繰り返し`

### 背景画像の配置
{bdg-dark-line}`テキスト：P.118` 
{bdg-primary-line}`教材：14_背景画像の配置`
### 背景画像サイズ
{bdg-dark-line}`テキスト：P.119` 
{bdg-primary-line}`教材：15_背景画像の配置`

- 「header」・「article」・「section」等のボックスに「高さ」を設定するには
{bdg-dark-line}`テキスト：P.120` 
- 「header」内にボックスよりも小さな「背景画像」を設定すると…。
{bdg-dark-line}`テキスト：P.120` 
- 「background-size」に「cover」を設定すると…。
{bdg-dark-line}`テキスト：P.121` 
- 「background-size」に「contain」を設定すると…。
{bdg-dark-line}`テキスト：P.121` 
- 「background-size」に「auto」を設定すると…。
{bdg-dark-line}`テキスト：P.121` 
- 「background-size:cover」と「background-position」を組み合わせる
{bdg-dark-line}`テキスト：P.122` 

## float

### 「float」と「clear」について
### 「float」と「clear」を検証する
{bdg-dark-line}`テキスト：P.123〜126` 
{bdg-primary-line}`教材：16_フロート基本`
### フロートによる文字の回り込み
{bdg-dark-line}`テキスト：P.127〜128` 
{bdg-primary-line}`教材：17_画像・文字回り込み`

### フロートした子要素と親要素の関係
{bdg-dark-line}`テキスト：P.129` 
#### 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓐ 
{bdg-dark-line}`テキスト：P.130` 
#### 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓑ 
{bdg-dark-line}`テキスト：P.131` 

## `<ul>`、`<ol>` または`<li>`要素に設定するプロパティ
{bdg-dark-line}`テキスト：P.132` 
{bdg-primary-line}`教材：19_リストマーカー`
## `overflow` プロパティ
{bdg-dark-line}`テキスト：P.133` 
{bdg-primary-line}`教材：20_overflow`

overflow(オーバーフロー)とは内容が規定の枠から溢れてはみ出ることです。
中身が詰まっている箱(ここの例では文章の詰まった`div要素`)を用意し、箱に対してwidth(ウィッズ、幅)、height(ハイト、高さ) を指定して箱の大きさを縮めてみます。
すると`div`の箱に収まりきらない文章が出て、それらは箱の枠線からはみ出ます。
これがoverflow(溢れ)です。

overflowが起こった際に溢れた部分をどうあしらうかを制御するのがCSSの`overflowプロパティ`です。

## ナビメニュー

### 縦組み
{bdg-dark-line}`テキスト：P.136` 
{bdg-primary-line}`教材：21_メニュー縦組・横組`
### 横組み
{bdg-dark-line}`テキスト：P.137` 

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
