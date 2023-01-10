# [分析] レベルデザイン

論理的な区切りを設計し、概要をわかりやすくする目的で教科書を読む順番をカスタマイズしてみたが、borderなどの話題がすでに出ているかそうでないかの**整合性**が担保できない。
そのため基本的にはテキスト順のカリキュラムに準拠する。
また読者が混乱しなくてすむ。

# カリキュラムの説明(intro.md)

{{TODO}} 異なる著者による別の視点の提供

- 学ぶ内容
	- HTML/CSSコーディング
	- デザイン→[コーディング]→(プログラム実装)→検証→納品
- 作例
	- お茶サイト、Green Camp
- 卒業制作
	- 以下のうちから選んでマークアップ

# 準備(equip.md)
- HTML
	- ブラウザの種類・シェアについて 5
	- ファイル名について 10
	- 拡張子について/拡張子と隠しファイルを表示させるには 11
	- ホームページに必要な３つの書類/HTML・CSS書類のアイコンデザインを変更するには？ 12-13
- VS Code
	- HTML
		- Install 14-15
		- Extentions
			- Japanese Language Pack 16-17
			- auto rename,CSS Formatter,CSS Peek, HTMLHint, IntelliSence for CSS class names in HTML 18-19
			- Live Server 19の⑪
			- zenkaku 20
			- 再起動、確認 20の⑬〜⑯
		- 作業フォルダ 21
		- 色テーマ 22
		- フォントサイズ・タブサイズ 23
		- マウスホバーのポップアップ機能をOFFにする 24-25
		- Visual Studio Codeのその他の注意・機能 26-27
		- Live Server(Go Live)機能について 28-30

## Webサーバー

- CSS
	- {{TODO}} 無料のウェブサーバーを借りる
	- 「WinSCP」で WWW サーバーへアップする 161-162

% ## 付録 ←これは扱わない。扱うとしたら必要な箇所で
% 
% - CSS
% 	- 付録：文字サイズ単位換算表 90
% 	- 付録：コーディングガイドライン例 91-95	→卒業制作で
% 	- コーディング後チェック 95 				→卒業制作で
---------------------------------------- LEVEL6.5 昇段試験 ----
特になし
---------------------------------------- LEVEL6.5 昇段試験 ----

# LEVEL1(LEVEL1.md) HTMLの基本
## Webとは

### Webのしくみ
{bdg-dark-line}`テキスト：P.3`

### HTML・CSSとは
{bdg-dark-line}`テキスト：P.4`

### W3Cとは
{bdg-dark-line}`テキスト：P.4`

### ブラウザの種類・シェアについて
{bdg-dark-line}`テキスト：P.5`

## HTMLを書く
### タグについて
{bdg-dark-line}`テキスト：P.6`
{bdg-primary-line}`教材：HTML教材/01_タグについて`

### タグ（要素）の表記例・タグの書き方のルール
{bdg-dark-line}`テキスト：P.7`

#### タグ記述の○と✗例
{bdg-dark-line}`テキスト：P.8`

#### HTML書類に、タグを使って構造分け（マークアップ）する理由とは？
{bdg-dark-line}`テキスト：P.9`
##### GoogleのSEO対策でYahoo!JAPANも兼ねられる
##### ホームページの情報を収集し、ランク付けをするGooglebot
##### SEO対策にはHTMLが重要・CSSはあくまで人間への見た目（デザイン）用

### ファイル名についての注意
{bdg-dark-line}`テキスト：P.10`
#### 「拡張子」について
{bdg-dark-line}`テキスト：P.11`
##### 「拡張子」と「隠しファイル」を表示させるには？

### ホームページに必要な３つの書類
{bdg-dark-line}`テキスト：P.12`

#### HTML・CSS書類のアイコンデザインを変更するには？
{bdg-dark-line}`テキスト：P.12〜13`

### 「Visual Studio Code」について
{bdg-dark-line}`テキスト：P.14〜`

#### 参考：設定その１「Visual Studio Code」を入手・インストールする
{bdg-dark-line}`テキスト：P.14〜15`
#### 設定その２「Visual Studio Code」の「拡張機能」をインストールする
{bdg-dark-line}`テキスト：P.16〜20`
#### 設定その３「Visual Studio Code」の「作業フォルダ」を指定する
{bdg-dark-line}`テキスト：P.21`
#### 設定その４「Visual Studio Code」の「配色テーマ」を調整する
{bdg-dark-line}`テキスト：P.22`
#### 設定その５「Visual Studio Code」の「フォントサイズ」・「タブサイズ」を調整する
{bdg-dark-line}`テキスト：P.23`
#### 設定その６「マウスホーバー」の「ポップアップ」機能をOFFにする
{bdg-dark-line}`テキスト：P.24〜P.25`
#### 設定その７「Visual Studio Code」のその他の注意・機能
{bdg-dark-line}`テキスト：P.26〜P.27`
#### 設定その８「Live Server」（Go Live）機能について
{bdg-dark-line}`テキスト：P.28〜P.30`


- index.htmlを書いてChromeで確認する		 [TODO] 教材が必要
	h1とp、section

## HTMLの基本構造

### 新規の「HTML5の最小基本構文」を作成する
{bdg-dark-line}`テキスト：P.31〜P.34`

#### `<meta name="description" content="□□□□">`と「スニペット」との関係は？
{bdg-dark-line}`テキスト：P.35`

#### HTML5の基本構文の構成イメージ
{bdg-dark-line}`テキスト：P.35`

## 様々な要素（タグ）
{bdg-primary-line}`教材：HTML教材/02_body内タグ`

### 見出し `<h1>～<h6>`
{bdg-dark-line}`テキスト：P.36`
### 段落 `<p>`
{bdg-dark-line}`テキスト：P.36`
### 改行 `<br>`
{bdg-dark-line}`テキスト：P.37`
#### `body`内に`<br>`を連続使用しない
{bdg-dark-line}`テキスト：P.37`
### リスト `<ul>`,`<ol>`
{bdg-dark-line}`テキスト：P.37`
### 定義リスト `<dl>`
{bdg-dark-line}`テキスト：P.38`
### 水平線 `<hr>`
{bdg-dark-line}`テキスト：P.38`
### 注釈・著作権 `<small>`
{bdg-dark-line}`テキスト：P.39`
### `<div>`,`<small>`
{bdg-dark-line}`テキスト：P.39`
% これはCSSセレクタ―と同時がいいかな？いきなりは難しすぎる
%	- ブロックレベル要素、インライン要素
%		 「旧ブロックレベル要素」・「旧インライン要素」について 58
%	- セマンティック
### コメント
{bdg-dark-line}`テキスト：P.39`
### 強調`<em>`/重要性・緊急性`<strong>`
{bdg-dark-line}`テキスト：P.40`
% `<b>`で統一

## 画像、ファイルパス

### 画像`<img>`
{bdg-dark-line}`テキスト：P.40`
{bdg-primary-line}`教材：HTML教材/03_imgタグ`
#### `alt`の属性値を設定する理由
{bdg-dark-line}`テキスト：P.41`
#### `<img>`要素で配置する画像のサイズを調べるには？
{bdg-dark-line}`テキスト：P.42`
### 画像のパスの記述について
{bdg-dark-line}`テキスト：P.42`
#### 画像のパス表記例
{bdg-dark-line}`テキスト：P.45`
{bdg-primary-line}`教材：HTML教材/04_画像のパス表記例`
### HTML書類で配置できる４つの画像形式
{bdg-dark-line}`テキスト：P.43〜44`
#### JPEG（ジェイペグ）形式
#### GIF（ジフ）形式
#### PNG（ピング）形式
#### SVG（エスブイジー）形式

### リンク `<a>`
{bdg-dark-line}`テキスト：P.46〜`
#### 絶対パス・ターゲット属性について
{bdg-dark-line}`テキスト：P.47`
{bdg-primary-line}`教材：HTML教材/06_絶対パス`
#### 複数画像を横並びに配置・画像をクリックさせるとハイパーリンクさせるには
{bdg-dark-line}`テキスト：P.47`
{bdg-primary-line}`教材：HTML教材/05_リンク設置のaタグ`
{bdg-primary-line}`教材：HTML教材/07_画像配置横並び等`
#### ページ内リンク・外部ページ内リンクについて
{bdg-dark-line}`テキスト：P.48`
#### ページ内リンク・外部ページへのリンク作例
{bdg-dark-line}`テキスト：P.49〜50`
{bdg-primary-line}`教材：HTML教材/08_ページ内リンク`
### 「検索」・「置換（ちかん）」機能について
{bdg-dark-line}`テキスト：P.50`

---------------------------------------- LEVEL1 昇段試験 ----
	フムスレシピ(MDN)
	https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html by CC0 Public Domain License
---------------------------------------- LEVEL1 昇段試験 ----

# LEVEL2 HTMLの残りの話題、CSSの基本
## table要素
{bdg-dark-line}`テキスト：P.51`
### 表`<table>`の記述例
{bdg-dark-line}`テキスト：P.52`
{bdg-primary-line}`教材：HTML教材/09_テーブル`
### 表`<table>`―セルの横方向連結(colspan)
{bdg-dark-line}`テキスト：P.53`
{bdg-primary-line}`教材：HTML教材/09_テーブル`
### 表`<table>`―セルの縦方向連結(rowspan)
{bdg-dark-line}`テキスト：P.54`
{bdg-primary-line}`教材：HTML教材/09_テーブル`
### 表`<table>`―セルの縦方向連結(rowspan)とセルの縦方向連結(rowspan)の組み合わせ
{bdg-dark-line}`テキスト：P.55〜P.56`
{bdg-primary-line}`教材：HTML教材/09_テーブル`

### 参考：「コンテンツモデル」について
{bdg-dark-line}`テキスト：P.57`
### 「旧ブロックレベル要素」・「旧インライン要素」について
{bdg-dark-line}`テキスト：P.58`

## ページの大規模構造を作る
### 大項目的なボックスとしてまとめるタグについて
{bdg-dark-line}`テキスト：P.59`
#### `<header>`や`<section>`や`<footer>`でまとめるには
{bdg-dark-line}`テキスト：P.60`
{bdg-primary-line}`教材：HTML教材/10_headerやsectionやfooter`
#### `<article>`でまとめるには
{bdg-dark-line}`テキスト：P.61`
{bdg-primary-line}`教材：HTML教材/11_articleでまとめる`
#### `<div class="wrapper">`や`<section>`でまとめるには
{bdg-dark-line}`テキスト：P.62〜63`
{bdg-primary-line}`教材：HTML教材/12_wrapperでまとめる`

### `<header>`や`<section>`や`<footer>`でまとめるには
{bdg-dark-line}`テキスト：P.60`
### `<article>`でまとめるには
{bdg-dark-line}`テキスト：P.61`
### `<div class="wrapper">`や`<section>`でまとめるには
{bdg-dark-line}`テキスト：P.62〜63`

### HTML のネスト（入れ子）構造について
{bdg-dark-line}`テキスト：P.64`
(basic-structure)= で紹介済み
### `<nav>` の用例
{bdg-dark-line}`テキスト：P.65`
{bdg-primary-line}`教材：HTML教材/13_nav`

## フォーム関連 P.66-71
{bdg-primary-line}`教材：HTML教材/14_form`
### フォーム`<form>`について
{bdg-dark-line}`テキスト：P.66`
### フォーム(form)の概念図
{bdg-dark-line}`テキスト：P.67`
### フォーム内のパーツのタグについて
{bdg-dark-line}`テキスト：P.68〜69`
### フォームのアクセシビリティー
{bdg-dark-line}`テキスト：P.69`
### フォーム表記例
{bdg-dark-line}`テキスト：P.70〜71`

## 付録
### 付録：Chromeのデベロッパーツールについて
{bdg-dark-line}`テキスト：P.72〜73`
### 付録：ブラウザのキャッシュ削除 P.74-75
#### 付録：Firefox(ver.99.0)の「ブラウザキャッシュ」を削除するには
{bdg-dark-line}`テキスト：P.74`
#### 付録：Edge(ver.100.0.1185.36)の「ブラウザキャッシュ」を削除するには
{bdg-dark-line}`テキスト：P.74`
#### 付録：Chrome(ver.100.0.4896.75)の「ブラウザキャッシュ」を削除するには
{bdg-dark-line}`テキスト：P.75`
#### 参考：ネスト（入れ子）にできるタグ一覧
{bdg-dark-line}`テキスト：P.78`

---------------------------------------- (論理的区切り、昇段試験を追加したい) ----
	大規模構造をマークアップする
1. Wikipedia
https://www.figma.com/file/A996Ho9Ea1d9MCti8iB87m/HTML%2FCSS%E5%85%A5%E9%96%80%E7%94%A8%E7%B4%A0%E6%9D%90?node-id=440%3A848
https://github.com/AaronMaywood/coding_sample/tree/main/main-structure
	[DONE] これにCSSを追加して本当にこの並びにできる？→できる.Gridを使用した

2. MDNもあればなおよし
--------------------------------------------

# LEVEL3 CSS基礎
## CSSとは
### CSSの書式・基本用語
{bdg-dark-line}`テキスト：P.76`
（内容は{bdg-dark-line}`テキスト：P.80`と同じです）
{bdg-primary-line}`教材：HTML教材/15_参考CSSの書式・概要`
### 参考：CSSの使用例
{bdg-dark-line}`テキスト：P.77`
{bdg-primary-line}`教材：HTML教材/15_参考CSSの書式・概要`

## セレクタ―
### セレクタの種類
{bdg-dark-line}`テキスト：P.81〜84`
### インライン CSS・内部 CSS・外部 CSS について
{bdg-dark-line}`テキスト：P.85〜87`

## 実習
### 実習：HTML と CSS の応用実例サンプルを検証する
{bdg-dark-line}`テキスト：P.88〜89`
### 実習：HTML 書類を新規の CSS 書類で設定する手順
{bdg-dark-line}`テキスト：P.90〜94`

## CSS の「セレクタ」・「プロパティ」・「値」の記述における注意
{bdg-dark-line}`テキスト：P.95`

## タグに関連する CSS セレクタを表示する
{bdg-dark-line}`テキスト：P.96`
### VSCのカラーピッカーの表示
{bdg-dark-line}`テキスト：P.96`
### ブラウザ Chrome のフォント設定を初期化する 「CSS3基礎」P.19-21
{bdg-dark-line}`テキスト：P.97〜99`

## CSS の単位について
{bdg-dark-line}`テキスト：P.100`
### 実習：絶対値「`px`」と、相対値「`rem`」「`em`」の違いとは？
{bdg-dark-line}`テキスト：P.100〜103`

## CSSのコメントについて
{bdg-dark-line}`テキスト：P.104`

## 色
### CSS の色の指定方法
{bdg-dark-line}`テキスト：P.105`
#### 色を指定する
{bdg-dark-line}`テキスト：P.106〜108`

## CSS のプロパティ ─ 文字（書式）関連
{bdg-dark-line}`テキスト：P.108`
## CSS のプロパティ ─ 行高さ（行間） line-height の単位について
{bdg-dark-line}`テキスト：P.109〜110`

---------------------------------------- LEVEL3 昇段試験 ----
	細かな装飾
- https://docs.google.com/document/d/1WI5_-_zzrHpZVJsxFvpkwz1t10ft5lc86TGsdTtPH2E/edit#heading=h.ei8r1exdw47m をもとにindex.html を書いて下さい。
---------------------------------------- LEVEL3 昇段試験 ----

# LEVEL4 CSS - ボックスモデル

## ボックスモデル

- ボックスモデル {bdg-dark-line}`テキスト：P.111`
  % {bdg-primary-line}`教材：10_ボックスモデル` ←この教材フォルダはあるが、使って配付するテキスト素材にマークアップを施して、次の図で示す`index.html`を完成させて下さい。

いないかもしれない
- 見出し 1 のボックス化・リセット CSS {bdg-dark-line}`テキスト：P.112〜114` {bdg-primary-line}`教材：11_見出し1のボックス化・リセットCSS`
	- 「幅」と「高さ」を「border」と「padding」を含めた値にする ─ box-sizing: border-box {bdg-dark-line}`テキスト：P.114`
- margin や padding プロパティの一括設定（ショートハンド設定） {bdg-dark-line}`テキスト：P.115`
- ボーダーの作例 {bdg-dark-line}`テキスト：P.116` {bdg-primary-line}`教材：12_ボーダー`
- ボックスの外部余白（margin）の相殺（そうさい）について {bdg-dark-line}`テキスト：P.137〜138` {bdg-primary-line}`教材：23_相殺について`

% - 参考、後に紹介するボーダーやボックスに関連する話題があるよと説明
%   - overflow 55
%   - 角丸 86
%   - ボックスシャドウ 88

---------------------------------------- (論理的区切り、昇段試験を追加したい) ----
	全てがボックス
ボックスモデルのプロパティを作って「メモ」を表現する
https://github.com/AaronMaywood/coding_sample/tree/main/box-model
---------------------------------------- (論理的区切り、昇段試験を追加したい) ----
# LEVEL5 CSS - 背景、float、実例:ナビメニュー

## 背景画像

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

## float

- 「float」と「clear」について
- 「float」と「clear」を検証する P.123-126 P.123 {bdg-primary-line}`教材：16_フロート基本`
- フロートによる文字の回り込み P.127-128 {bdg-primary-line}`教材：17_画像・文字回り込み`

- フロートした子要素と親要素の関係 P.129
  - 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓐ  P.130
  - 子要素がフロートしても、親要素がきちんと囲むには？ ─ 手法Ⓑ  P.131 {bdg-primary-line}`教材：18_clearfix`

## リスト、`overflow`

- `<ul>`、`<ol>` または`<li>`要素に設定するプロパティ P.132 {bdg-primary-line}`教材：19_リストマーカー`
- overflow プロパティ P.133 {bdg-primary-line}`教材：20_overflow`

## ナビメニュー

- ナビメニュー - 縦組み P.136 {bdg-primary-line}`教材：21_メニュー縦組・横組`
- ナビメニュー - 横組み P.137

---------------------------------------- LEVEL5 昇段試験 ----
	背景、float
背景はcover
文章と挿し絵
「ア、秋」にファーストビューの背景と挿し絵を挿入する
https://www.aozora.gr.jp/cards/000035/files/236_19996.html 
https://github.com/AaronMaywood/coding_sample/tree/main/a-aki	←試作品
	→子孫セレクターを使用しているので説明が必要
		教科書ではP.56で扱っている

オーバーフロー、
リスト、ナビメニュー
- 横展開はflexを使ったBtypeがいい。flexと合わせて教えるのがいいかな
	typeCはレガシーコード
---------------------------------------- LEVEL5 昇段試験 ----

# LEVEL6 CSS - Flexbox

## Flexbox（フレキシブルボックス）
{bdg-dark-line}`テキスト：P.139〜143`
{bdg-primary-line}`教材：24_flex_基本`
### ボックス全体の横方向の揃え位置を指定する
{bdg-dark-line}`テキスト：P.140`
{bdg-primary-line}`教材：24_flex_基本`
### フレックスアイテムの折返しを指定する
{bdg-dark-line}`テキスト：P.141`
### ボックス全体の縦方向の揃え位置を指定する
{bdg-dark-line}`テキスト：P.141`
### ボックス全体の横方向と縦方向の揃え位置を指定する
{bdg-dark-line}`テキスト：P.142`
### すべてのボックスの縦方向の揃え位置を指定する
{bdg-dark-line}`テキスト：P.143`

## Flex を応用したニ段組みボックスレイアウト　─　第１段階
{bdg-dark-line}`テキスト：P.153〜155`
{bdg-primary-line}`教材：27_二段組ボックスレイアウト`

## Grid

[TODO] テキストがない

---------------------------------------- LEVEL6 昇段試験 ----
	flex
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox_skills を使用する（日本語版を作る）
---------------------------------------- LEVEL6 昇段試験 ----

# LEVEL7 CSS - Position
## position
% https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Positioning
{bdg-dark-line}`テキスト：P.144〜152`
{bdg-primary-line}`CSS教材：25_position`

### 参考：「position」を使わず、「ﬂoat」レイアウトで配置するには
{bdg-dark-line}`テキスト：P.147`
### ボックスの重なり順を変更する「z-index」
{bdg-dark-line}`テキスト：P.148〜149`
### 注意：縦並びに配置するボックスに「position:absolute」は設定しません！
{bdg-dark-line}`テキスト：P.150`
### 「lesson_1.html」内にある「div.ﬁx_box」に ﬁxed の設定をする
{bdg-dark-line}`テキスト：P.151`
{bdg-primary-line}`CSS教材：26_position_fixedとsticky`
### 「lesson_2.html」内にある「nav」に sticky の設定をする
{bdg-dark-line}`テキスト：P.152`
{bdg-primary-line}`CSS教材：26_position_fixedとsticky`
## Flex を応用したニ段組みボックスレイアウト　─　第２段階
{bdg-dark-line}`テキスト：P.156〜160`
{bdg-primary-line}`CSS教材：27_二段組ボックスレイアウト`

## 付録：CSS3 簡易解説
### 透明度
{bdg-dark-line}`テキスト：P.163`
### 角丸(かどまる)
{bdg-dark-line}`テキスト：P.164`
### 線形グラデーション
{bdg-dark-line}`テキスト：P.165`
### テキストシャドウ
{bdg-dark-line}`テキスト：P.166`
### ボックスシャドウ
{bdg-dark-line}`テキスト：P.166`
### トランジション
{bdg-dark-line}`テキスト：P.167`
参考: CSS Animation
https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations

## 付録：文字サイズ単位換算表
{bdg-dark-line}`テキスト：P.168`
## 付録：コーディングガイドライン例
{bdg-dark-line}`テキスト：P.169〜173`

---------------------------------------- LEVEL7 昇段試験 ----
	position, 細かな装飾(2)
位置指定のテスト
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Position_skills

実用的な位置指定の応用例→JavaScriptが必要だから不採用
https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Practical_positioning_examples

影のジェネレーター
https://getcssscan.com/css-box-shadow-examples
	→サンプル影を示し、構造を解析してもらう
box-shadowだけじゃない！CSSでできる色々な影の表現と意外に知らない落とし穴
https://ics.media/entry/200406/
	この記事は上級編、だがわかりやすい！

トランジションの例
https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
	transition
	https://github.com/AaronMaywood/coding_sample/tree/main/transition

---------------------------------------- LEVEL7 昇段試験 ----


# LEVEL8 お茶サイト実装

{bdg-primary-line}`お茶サイト制作教材/お茶サイト配付データ`

## お茶サイト紹介
### ページ構成 
{bdg-dark-line}`テキスト：P.176〜180`
### ワイヤーフレーム（サイト設計図） P.186
{bdg-dark-line}`テキスト：P.186`

## 基本ページの作成
{bdg-dark-line}`テキスト：P.181〜`
### STEP-1 「base.html」を開く
{bdg-dark-line}`テキスト：P.181`
### STEP-2 <head> 内に追記
{bdg-dark-line}`テキスト：P.182`
### STEP-3 「Google日本語フォント」の設定
{bdg-dark-line}`テキスト：P.183〜185`
### ワイヤーフレーム（サイト設計図）
{bdg-dark-line}`テキスト：P.186`
### 基本ページの作成
{bdg-dark-line}`テキスト：P.187`
### index.html コードタグ付け	14
{bdg-dark-line}`テキスト：P.188〜195`

## リセットCSS
{bdg-dark-line}`テキスト：P.196〜197`
## スタイルシートの設定(style.css)
### 各ページ共通CSS
{bdg-dark-line}`テキスト：P.198`
### index.html header 部分
{bdg-dark-line}`テキスト：P.199〜201`
### visual_img
{bdg-dark-line}`テキスト：P.202`
### お茶のはじまり
{bdg-dark-line}`テキスト：P.203〜204`
### 世界のお茶の生産量
{bdg-dark-line}`テキスト：P.205〜206`
### インフォメーション
{bdg-dark-line}`テキスト：P.207〜206`
### aside
{bdg-dark-line}`テキスト：P.209`
### footer
{bdg-dark-line}`テキスト：P.210〜212`

## 下層ページの実装
### temp.html
{bdg-dark-line}`テキスト：P.213`
### tool.html
{bdg-dark-line}`テキスト：P.213〜216`
### catalog.html
{bdg-dark-line}`テキスト：P.219〜220`
### common.html
{bdg-dark-line}`テキスト：P.221〜224`
### contact.html
{bdg-dark-line}`テキスト：P.225〜229`

---------------------------------------- LEVEL8 昇段試験 LEVEL29-LEVEL32 ----
TODO 何をしよう？
---------------------------------------- ↑LEVEL8 昇段試験 LEVEL29-LEVEL32 ----

# LEVEL9(LEVEL9.md) マルチデバイス
## 要点解説
## 「マルチデバイスサイト」とは？
{bdg-dark-line}`テキスト：P.232`
## 01-Multi_sample(マルチデバイス基本）
{bdg-dark-line}`テキスト：P.233`
- {{TODO}} 勘違いな作業です、をどこかで補足してあるはずだがどうか？

## World_literature(世界の文学)
{bdg-dark-line}`テキスト：P.234〜236`
## Japanese_literature(日本の文学)
{bdg-dark-line}`テキスト：P.237〜243`
## 補足  追記/ハンバーガーナビ（ドロワー）
{bdg-dark-line}`テキスト：P.244〜246`

## Sass
{bdg-dark-line}`テキスト：P.248〜265`
## SCSS
{bdg-dark-line}`テキスト：P.267〜286`

## マルチデバイスサイト Green Camp ←これがなくなっているのか！

% - ドキュメントマルチビューの概念の応用
%	- 複数のスタイルを作って張り合わせて切り替える
%   - リキッド
%	- ドロワーメニュー(SlickNav)/ハンバーガー
% - https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Responsive_Design
%   - ビューポートメタタグ


- スマートフォンサイトテキスト
	- マルチデバイスサイト Green Camp 2-3
	- タグ付け 4-5
		- HTML 8-10

### PCサイト

- スマートフォンサイトテキスト
	- Green Camp （PC サイト用） 6-7,11-13	←jQuery(SlickNav)

### タブレットサイズ

- スマートフォンサイトテキスト
	- 14-15

### スマートフォンサイズ

- スマートフォンサイトテキスト
	- 16-18

% 動作確認
% - デベロッパーツールのデバイスモード
% - 実機を使用して動作確認の方法
%   - Android
%   - iPhone

---------------------------------------- LEVEL9 昇段試験 卒業制作 ----
	↓スマホサイトの昇段試験はなく、卒業制作をもって試験とする
		だが、一段階はさんでもいいかも。スマホサイトができない間から卒業制作に手を出していたら収集がつかなくなるかも
		また、レスポンシブとしてスキルを確認しておきたい。
			- 文学の世界
			- 日本の文学
			↑これくらいの例題がよい
			↓じゃあこれで
			https://www.figma.com/file/7AubNTW0tPsiGlDlAlV3Mg/Responsive-Startup-Website-(Community)?node-id=145%3A5791
			https://www.figma.com/file/7AubNTW0tPsiGlDlAlV3Mg/Responsive-Startup-Website-(Community)?node-id=24%3A12
---------------------------------------- LEVEL9 昇段試験 卒業制作 ----

# LEVEL10(LEVEL10.md) 卒業制作
## 卒業制作

目的

- コーディング、検証、完成の能力を示す。具体的には以下をアピールする。
	- コーディングで気をつけたこと
		- 名前
		- レスポンシブ
		- 素材のファイル名
		- 不要なコメントの消し込みなど、コードのクリーンナップ
	- 検証項目
		- (Safari以外で検証しています)
		- 画面崩れ
			- 各種ブラウザ(ターゲットブラウザー)
			- レスポンシブ
		- リンク切れ
	- 自分で調べて学んだこと
	- トラブルシューティングの具体例、実績

(再掲)
- CSS
	- 付録：コーディングガイドライン例 91-95
	- コーディング後チェック 95

次の２つから選んでマークアップ

- Tastebite - Food Recipe Website Templates & Design Systems (Community)
	- https://www.figma.com/file/uztxlAjVLnKHYJ6kN3mrNJ/Tastebite---Food-Recipe-Website-Templates-%26-Design-Systems-(Community)?node-id=1%3A3
- Responsive Startup Website (Community)
	- https://www.figma.com/file/7AubNTW0tPsiGlDlAlV3Mg/Responsive-Startup-Website-(Community)?node-id=0%3A1

[TODO] 素材のダウンロードの仕方
[TODO] 幅やマージンの見方

## ポートフォリオ制作

- 初心者から OK 「Webサイト・ポートフォリオの作成手順」 P.35-

