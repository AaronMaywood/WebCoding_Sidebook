# [分析] レベルデザイン

論理的な区切りを設計し、概要をわかりやすくする目的で教科書を読む順番をカスタマイズしてみたが、borderなどの話題がすでに出ているかそうでないかの**整合性**が担保できない。
そのため基本的にはテキスト順のカリキュラムに準拠する。
また読者が混乱しなくてすむ。

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
	フムスレシピ(MDN)
	https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html by CC0 Public Domain License
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

---------------------------------------- (論理的区切り、昇段試験を追加したい) ----
	大規模構造をマークアップする
---------------------------------------- (論理的区切り、昇段試験を追加したい) ----

## STAGE8 CSSとは

- HTML
	- 参考：CSS の使用例 77
	- CSS の書式・基本用語 76
		- CSS
			- CSS の書式・基本用語 2 と同じ
	
## STAGE9 CSSを書くには チラ見

- CSS
	- 実習：HTML と CSS の応用実例サンプルを検証する 10-11
	- 実習：HTML 書類を新規の CSS 書類で設定する手順 12-16

## STAGE10 セレクタ―

- CSS
	- セレクタの種類 3-6
	- インライン CSS・内部 CSS・外部 CSS について 7-9
	- CSS の「セレクタ」・「プロパティ」・「値」の記述における注意 17

	↓おまけと明記
	- タグに関連する CSS セレクタを表示する 18		# option
	- VSCのカラーピッカーの表示 18					# option
	- ブラウザ Chrome のフォント設定を初期化する 19-21	# option

## STAGE10-2 プロパティ

- CSS
	- CSS の単位について	22-25
	- CSSのコメントについて 26
	- CSS の色の指定方法 27-29(一段落目まで)
	- CSS のプロパティ  文字（書式）関連 30
	- CSS のプロパティ  行高さ（行間） line-height の単位について 31

---------------------------------------- LEVEL2 昇段試験 ----
	細かな装飾
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

    - 参考、後に紹介するボーダーやボックスに関連する話題があるよと説明
	  - overflow 55
      - 角丸 86
      - ボックスシャドウ 88

---------------------------------------- (論理的区切り、昇段試験を追加したい) ----
	全てがボックス
---------------------------------------- (論理的区切り、昇段試験を追加したい) ----
# LEVEL4(LEVEL4.md) CSS - 背景、float、実例:ナビメニュー

## STAGE12 背景画像

- CSS
	- 背景画像 39-41
		- 「header」・「article」・「section」等のボックスに「高さ」を設定するには 42
		- 「header」内にボックスよりも小さな「背景画像」を設定すると…。 42-44

## STAGE13 float

- CSS
	- floatとclear 45-53

## STAGE13-2

- CSS
	-  <ul> <ol> または <li> 要素に設定するプロパティ 54
	- overflow 55

## STAGE14 ナビメニュー

- CSS
	- ナビメニュー - 段組み 56-58

---------------------------------------- LEVEL4 昇段試験 ----
	背景、float、ナビメニュー
---------------------------------------- LEVEL4 昇段試験 ----

# LEVEL5(LEVEL5.md) CSS - Flexbox
## STAGE15 Flexbox

- CSS
	- Flexbox（フレキシブルボックス） 61-65
	- Flex を応用したニ段組みボックスレイアウト　─　第 1 段階 75-82

## STAGE15-2 Grid

[TODO] テキストがない

---------------------------------------- LEVEL5 昇段試験 ----
	flex
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

- CSS
	- 付録：CSS3  簡易解説 トランジションなど 85-89
      - 透明度 85
      - 角丸 86
      - 線形グラデーション 87
      - テキストシャドウ 88
      - ボックスシャドウ 88
      - トランジション 89

---------------------------------------- LEVEL6 昇段試験 ----
	position, 細かな装飾(2)
---------------------------------------- LEVEL6 昇段試験 ----

# LEVEL7(LEVEL7.md) お茶サイト実装

- {{TODO}} デザイナーから素材を受け取る
	- デザインカンプ
	- 画像素材
	- デザインシステム
	  - 使用するフォント一覧
	  - 色

## STAGE17 Webサーバー

- CSS
	- 「WinSCP」で WWW サーバーへアップする 83-84

- {{TODO}} 無料のウェブサーバーを借りる

```{figure} https://i.gyazo.com/942959f998656e4003efbb31c14c02c3.png
Xfree.ne.jp
```

https://i.gyazo.com/0eac63bc83d2f9d471ab8f453e9b5fcb.png
https://i.gyazo.com/530c1bfa08e51106a2c1ee410cba7eac.png
https://i.gyazo.com/200ace7c3357ec5c45ad75bbfb9f7403.png
https://i.gyazo.com/36d0a5e1564b39f8d1d0bf10e2ee1cbd.png


https://i.gyazo.com/6d35c77973a9cdca30db64bc8ba2a541.png
https://i.gyazo.com/5ce5803deb9fd294e7b310a59bde0550.png
https://i.gyazo.com/04d7ad00dcebc19ef4c6b86327c7d7b9.png
https://i.gyazo.com/7a115bc6aa6b1ad7f9fa58849605bfca.png
https://i.gyazo.com/8bd8bbb68e545612e1514593974e3871.png
https://i.gyazo.com/5e9effae8c318f0bc2a7f1e54f8ce519.png

https://i.gyazo.com/2f3522ba5f25f8ed3eaf6d37c2e4e8d9.png
https://i.gyazo.com/b5de34f397a7b96299b7e1716329b5f1.png
https://i.gyazo.com/e33c972040749f53ffc3803a169205f7.png
https://i.gyazo.com/0febcc0c0a501f3fe38be98dbb7f8a9f.png
https://i.gyazo.com/5b3c04f8d338f2083931f1bee80922ed.png
https://i.gyazo.com/5052825a0c285560b4e13be511574d55.png
https://i.gyazo.com/b3fcf6ce645aa4908edc7a889b549861.png

FTP
https://i.gyazo.com/8427a793a534c8c8347939a7e6bccfd3.png
https://i.gyazo.com/fa70c9592777b65f6272717e7a7e8295.png
https://i.gyazo.com/c109ace45acaca3c924af925585d6ff0.png
https://i.gyazo.com/60ad32728c18b93427f7517f9896338e.png
https://i.gyazo.com/abe67b8f0b5fce27eaaf3a57e973265f.png

FileZilla
https://ja.wikipedia.org/wiki/FileZilla
https://filezilla-project.org/

https://i.gyazo.com/af9e9705a2084ee1970528eb4bb5c44e.png
https://i.gyazo.com/b3e51d964cc711d7b441c9a53691f268.png
https://i.gyazo.com/c44b6b06a2e1f9d884d04c2bd3745f3e.png
https://i.gyazo.com/338ffba753bdc3b5f7537d740d809240.png
<ここでOSからのダイアログが出る>スクショ今から
https://i.gyazo.com/4522c3c3fe267c0ba94e262bbd3002c7.png
https://i.gyazo.com/96e8c5060af2ddb6193ff7939fe90ce8.png
https://i.gyazo.com/d8a8bf8ba3a55eb3b11539eedb1a4f05.png
https://i.gyazo.com/2fc567ffe3d2caf75f43672c2a533a18.png

https://i.gyazo.com/b27c3d502348cd25c0004e01b47d2b18.png
https://i.gyazo.com/f3b6152ef6363109837bd0190180c6f7.png

https://i.gyazo.com/de818072c35bc60dffae9fe6e47dd8c2.png
https://i.gyazo.com/06149bcffabf6be13361eccb3d10e68b.png
https://i.gyazo.com/f395b927208931e6bad08e0da3bd53f7.png

https://i.gyazo.com/4063dd8c5d2f7263a6853a020a015dae.png
https://i.gyazo.com/d7fd41ba6c41806dda4da12f57c09f28.png
https://i.gyazo.com/2c64be1e17fc89e0c63d5747e4f560e3.png
	- 平文
    - サイト名を「XFree 無料Webサーバー」などわかりやすいものにしておく
	- 接続



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


