# [分析] レベルデザイン

# カリキュラムの説明(intro.md)

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

# LEVEL1(LEVEL1.md) HTMLの基本
## STAGE1 HTMLを書く

- HTML
	- HTML・CSSとは 4
	- タグについて 6
	- タグ（要素）の表記例・タグの書き方のルール 7
	- タグ記述の○と✗例 8
- index.htmlを書いてChromeで確認する		 [TODO] 教材が必要
	h1とp、section

## STAGE2

- HTML
	- 新規の「HTML5 の最小基本構文」を作成する 31-33 (手順)、34-35（説明）

## STAGE3

- HTML
	- 見出し <h1>～<h6> 36
	- <p>				36
	- <br>				37
	- <ul>,<ol>			37
	- <dl>				38
	- <hr>				38
	- <small>			39
	- <div>, <small>	39			# これはCSSセレクタ―と同時がいいかな？いきなりは難しすぎる
		- ブロックレベル要素、インライン要素
			 「旧ブロックレベル要素」・「旧インライン要素」について 58
		- セマンティック
	- コメント			39
	- <em>, <strong>	40	# <b>で統一

## STAGE4

- HTML
	- ファイルパスとimg,a 40-50
	-  HTML 書類で配置できる 4 つの画像形式 43-44

---------------------------------------- LEVEL1 昇段試験 ----

# LEVEL2(LEVEL2.md) HTMLの残りの話題、CSSの基本
## STAGE5(option)

- HTML
	- table 51-56

## STAGE6

- HTML
	- 大項目的なボックスとしてまとめるタグについて 59-63
	- HTML のネスト（入れ子）構造について 64
	- <nav> の用例 65

## STAGE7(option)

- HTML
	- <form> 66-71

## STAGE7-2 補足

- HTML
	- Chromeのデベロッパーツールについて 72-73
	- ブラウザのキャッシュ削除 74-75

## STAGE8 CSSとは

- HTML
	- 参考：CSS の使用例 77
	- CSS の書式・基本用語 76
		- CSS
			- CSS の書式・基本用語 2 と同じ
	
## STAGE9 CSSを書くには

- CSS
	- 実習：HTML と CSS の応用実例サンプルを検証する 10-11
	- 実習：HTML 書類を新規の CSS 書類で設定する手順 12-16

## STAGE10 セレクタ―

- CSS
	- セレクタの種類 3-6
	- インライン CSS・内部 CSS・外部 CSS について 7-9
	- タグに関連する CSS セレクタを表示する 18		# option
	- VSCのカラーピッカーの表示 18					# option
	- ブラウザ Chrome のフォント設定を初期化する 19-21	# option

## STAGE10 プロパティ

- CSS
	- CSS の単位について	22-25
	- CSSのコメントについて 26
	- CSS のプロパティ　─　文字（書式）関連 29
	- CSS のプロパティ　─　行高さ（行間） line-height の単位について 30
	- CSS の「セレクタ」・「プロパティ」・「値」の記述における注意 17
	-  <ul> <ol> または <li> 要素に設定するプロパティ 54
	- overflow 55
	- 付録：CSS3  簡易解説 トランジションなど 85-89

## STAGE11 色

- CSS
	- CSS の色の指定方法 27-29(一段落目まで)

---------------------------------------- LEVEL2 昇段試験 ----

# LEVEL3(LEVEL3.md) CSS - ボックスモデル
## STAGE11 ボックスモデル

- CSS
	- ボックスモデル 33
		- 見出し 1 のボックス化・リセット CSS 34
		- 「幅」と「高さ」を「border」と「padding」を含めた値にする ─ box-sizing: border-box 36
		- margin や padding プロパティの一括設定（ショートハンド設定） 37
		- ボーダーの作例 38
		- ボックスの外部余白（margin）の相殺（そうさい）について 59-60

---------------------------------------- LEVEL3 昇段試験 ----

# LEVEL4(LEVEL4.md) CSS - 背景、float、実例:ナビメニュー
## STAGE12 背景画像

- CSS
	- 背景画像 39-41
		- 「header」・「article」・「section」等のボックスに「高さ」を設定するには 42
		- 「header」内にボックスよりも小さな「背景画像」を設定すると…。 42-44

## STAGE13 float

- CSS
	- floatとclear 45-53

## STAGE14 ナビメニュー

- CSS
	- ナビメニュー - 段組み 56-58

---------------------------------------- LEVEL4 昇段試験 ----

# LEVEL5(LEVEL5.md) CSS - Flexbox
## STAGE15 Flexbox

- CSS
	- Flexbox（フレキシブルボックス） 61-65
	- Flex を応用したニ段組みボックスレイアウト　─　第 1 段階 75-82

## STAGE15-2 Grid

[TODO] テキストがない

---------------------------------------- LEVEL5 昇段試験 ----

# LEVEL6(LEVEL6.md) CSS - Position
## STAGE16 position

- CSS
	- positionレイアウト 66-68
		-  参考：「position」を使わず、「ﬂoat」レイアウトで配置するには 69
		- ボックスの重なり順を変更する「z-index」 70-71
		- 注意：縦並びに配置するボックスに「position:absolute」は設定しません！ 72
		- 「lesson_1.html」内にある「div.ﬁx_box」に ﬁxed の設定をする 73
		- 「lesson_2.html」内にある「nav」に sticky の設定をする 74

---------------------------------------- LEVEL6 昇段試験 ----

# LEVEL7(LEVEL7.md) お茶サイト実装
## STAGE17 Webサーバー

- CSS
	- 「WinSCP」で WWW サーバーへアップする 83-84

## STAGE18 付録

- CSS
	- 付録：文字サイズ単位換算表 90
	- 付録：コーディングガイドライン例 91-95
	- コーディング後チェック 95

## STAGE19 お茶サイト紹介

- お茶
	- ページ構成 2-6
	- ワイヤーフレーム（サイト設計図） 12

## STAGE20 基本ページの作成

- お茶
	- 基本ページの作成	13
		←クラス名
	- STEP-1 「base.html」を開く	7
	- STEP-2 <head> 内に追記		8
		※：「ファビコンの設定」	8
	- index.html コードタグ付け	14
		←main, header, div, aside, footer

## STAGE21 リセットCSS

- お茶
	- リセット CSS を設定します 22-23
	- 各ページ共通 CSS 24	←ここではWebフォントを使っていなかった
		- STEP-3 「Google 日本語フォント」の設定 9-11

## STAGE22 header

- お茶
	- index.html_header 部分
		- (A) 15
		- 25-27

## STAGE23 visual_img

- お茶
	- visual_img
		- (B) 15
		- 28

## STAGE24 お茶のはじまり

- お茶
	- お茶のはじまり
		- (C) 16
		- 29-30

## STAGE25 世界のお茶の生産量

- お茶
	- 世界のお茶の生産量
		- (D) 17
		- 31-32

## STAGE26 インフォメーション

- お茶
	- インフォメーション
		- (E) 18
		- 33-34

## STAGE27 aside

- お茶
	- aside
		- (F) 19
		- 35

## STAGE28 footer

- お茶
	- footer
		- (G) 20 
		- 36-38

---------------------------------------- LEVEL7 昇段試験 LEVEL29-LEVEL32 ----

## STAGE29 temp.html

- お茶
	- temp.html（テンプレート）の作成 39	# 授業の便宜のためで、必須ではない

## STAGE30 

- お茶
	- tool.htmlの作成 39-42					# 演習になる

## STAGE31 

- お茶
	- catalog.htmlの作成 43-46				# 演習になる

## STAGE32 

- お茶
	- common.htmlの作成47-50				# 演習になる

# LEVEL8(LEVEL8.md) マルチデバイス(1)
## STAGE33(option)

- お茶
	- contact.htmlの作成51-55			←フォーム

## STAGE34 スマートフォンサイト制作実習 ver.1.0 F 22.06.15

- スマートフォン
	- 「マルチデバイスサイト」  とは？ 2-3

## STAGE35 World_literature(世界の文学)

- スマートフォン
	- World_literature(世界の文学) 4-6

---------------------------------------- LEVEL8 昇段試験 LEVEL36 ----

# LEVEL9(LEVEL9.md) マルチデバイス(2)
## STAGE36 Japanese_literature(日本の文学)

- スマートフォン
	- Japanese_literature(日本の文学) 7-13

## STAGE36-2 ドロワー

- スマートフォン
	- 補足　追記 / ハンバーガーナビ 14-16

## STAGE37 マルチデバイスサイト Green Camp

- スマートフォンサイトテキスト
	- マルチデバイスサイト Green Camp 2-3
	- タグ付け 4-5
		- HTML 8-10

## STAGE38 PCサイト

- スマートフォンサイトテキスト
	- Green Camp （PC サイト用） 6-7,11-13	←jQuery(SlickNav)

## STAGE39 タブレットサイズ

- スマートフォンサイトテキスト
	- 14-15

## STAGE40 スマートフォンサイズ

- スマートフォンサイトテキスト
	- 16-18

---------------------------------------- LEVEL9 昇段試験 卒業制作 ----

# LEVEL10(LEVEL10.md) 卒業制作
## STAGE41 卒業制作

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

(STAGE18再掲)
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

## STAGE42 ポートフォリオ制作

- 初心者から OK 「Webサイト・ポートフォリオの作成手順」 P.35-


