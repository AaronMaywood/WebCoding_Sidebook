# [分析] スキルカード

このページではスキルカードを定義します。

[Figmaで分析した図](https://www.figma.com/file/O8dN7ndngU1ynu8HbewDXs/%E3%82%B3%E3%83%BC%E3%83%80%E3%83%BC%E3%81%AE%E5%9C%B0%E5%9B%B3%EF%BC%88%E6%A6%82%E5%BF%B5%E9%9A%8E%E5%B1%A4%EF%BC%89?node-id=0%3A1)と連動しており、より細かな話題や参考URLをまとめました。

(on_char_sheet)=
## [設計] レベル分けの指針とキャラクーシート上での表現

- Lv1は優先度が高いことをしめす.ただしLv1では詳細は語らない。Lvが上がるにつれ解像度が増し、ピントがあう
	- Lv4が必ずしも高度な話題とはかぎらない. Lv4になるまで後回しでいい話題ということでもある。Lv2〜Lv3あたりは解像度を高めるため難易度があがるが、Lv4以降は補足の扱いである

- このような設計でよいか、あるいは教える単位毎に分割すべきか
	- Lv1 ... 使い方が分かる
	- Lv2 ... より細かな使い方が分かる
	- Lv3 ... 意味を把握している(概念理解)		←実用レベル←ここを目指す
	- Lv4 ... より深い意味を把握している(納得)	←応用可能レベル
	- Lv5 ... レアか些末な点も知っている

	↓キャラクターシートではこのようにしよう
	■現在のステージ [ 1-2]		←こっちをレベルにしたほうが分かりやすいかなあ？けれど、レベルにしたら連番にしないといけないので、
		TODO レベルにするかもっと別の名前にするかはカリキュラムが完成してから再考することにしよう
	■要素スキル
		Lv1 ★				塗りつぶしやすい○→●にするか
		Lv2 ☆☆☆☆☆☆
		Lv3 ☆☆☆
		Lv4 (なし)
		Lv5 (なし)
	Lv分析は↑のとおりで、
	カリキュラム毎に分けたのを☆の数としよう。（カリキュラムを一つこなせば少なくとも☆一つもらえる）

# 開発ツール
## VS Code
## Chrome
- デフォルトブラウザーにする
- index.html をChromeで開く
	1. ダブルクリック
	2. ドラッグ
### デベロッパーツール
- Element
  HTMLのデバック
	https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML

# コンピューター/OSの基本
## OSの操作
- ダウンロード
	- ダウンロードフォルダ
- ZIP展開
- デスクトップにフォルダを作る
- 拡張子を表示する(Win/Mac)
## ファイルの扱い
- 拡張子
	- 拡張子を表示する
https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files
- コンピューター上でウェブサイトがあるべき場所(Desktop)
- ファイル名のルール
	- 大文字や空白を使わない
- ウェブサイトはどのような構成にするべきか
	https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files#%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AF%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA%E6%A7%8B%E6%88%90%E3%81%AB%E3%81%99%E3%82%8B%E3%81%B9%E3%81%8D%E3%81%8B
- ファイルパス
	→絶対パスは扱わない。相対パスというより、ファイルパスの名前の方が容易だ
	- URL とパスに関する簡単な入門
		https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#url_%E3%81%A8%E3%83%91%E3%82%B9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E7%B0%A1%E5%8D%98%E3%81%AA%E5%85%A5%E9%96%80
		リンク先を完全に理解するには、 URL とファイルパスを理解する必要があります。
	Lv1. sample.jpg
	Lv1. images/sample.jpg
	Lv1. images/sub1/sample.jpg			←とりいそぎここまででいいな
	Lv2. ひとつ親、ふたつ親
	Lv2. 試練 一つ親のimagesの中、自由な場所を指せる

## 画像
- ピクセルとベクター
- 透過
- アニメーション
- jpeg, png, gif, svg
# 用語、概念
- ブラウザ上の表示の素となる生のHTMLをソースコードと言います。

# Webフォルダ構造
Lv1
- index.htmlはトップページ
  - (indexは索引という意味)
Lv2
- 他のページ
- css/style.css
	HTML に CSS と JavaScript を追加する
	https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#html_%E3%81%AB_css_%E3%81%A8_javascript_%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B
- images/logo.png
Lv3
- images/favicon.png
	サイトに自分の好きなアイコンをつける
	https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E8%87%AA%E5%88%86%E3%81%AE%E5%A5%BD%E3%81%8D%E3%81%AA%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B
- (js/jquery.js ?)

# HTMLとは？

% HTMLの基本
% https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics

## 要素とは？ ... HTML要素とは何か Lv1
Lv1
- 要素は文書のパーツである
- https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML
	HTML は、要素で構成される言語です。
	HTML は、テキストの断片に、文書の中で様々な意味（段落なのか、箇条書きなのか、表の一部なのか）を与え、文書を論理的なセクションに構成し（ヘッダーを持つのか、コンテンツを 3 段組にするのか、ナビゲーションメニューを持つのか）、ページに画像や動画のようなコンテンツを貼り付けるために使うことができます。
Lv2
- セマンティクス
	この記事を下書きにするとよい
	https://developer.mozilla.org/ja/docs/Glossary/Semantics
		プログラミングでは、セマンティクスとは、{term}`コード`の断片の意味を指します。
		たとえば「その HTML 要素には、どのような目的や役割があるのか？」 (「どのように見えるのか？」ではなく)。
		既定では、見出しのように見えるように大きなフォントサイズが与えられます (あなたが望むものに見えるようにスタイルを設定することもできます) が、もっと重要なのはセマンティックな意義が複数の方法で使用されることです。たとえば、検索エンジンは、その内容をページの検索ランキング (SEO 参照) に影響する重要なキーワードと見なし、読み上げソフトは、視覚障碍のあるユーザーがページを移動するのを助けるための道標として使用できます。

	セマンティックとセマンティクス
	https://e-words.jp/w/%E3%82%BB%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF.html
		セマンティック
		もとは言語（学）において文法や統語論などと対比した意味論の側面を指す用語で、IT分野ではデータや{term}`コード`などの形式や構造と対比して、人間にとっての意味的な面を表す。この語自体は形容詞であるため対象を後置して「セマンティック○○」という形で用いることが多い。
		例えば、Web上のデータに属性情報（メタデータ）を与えて意味を自動処理できるようにする手法を「セマンティックWeb」、ソフトウェアのバージョン番号を修正の種類や度合いから一定の規約に基づいて決定することを「セマンティックバージョニング」などという。

		セマンティクス (semantics)
		「意味論」という意味の英単語。言語学における文法論や構文論、統語論などと対比した意味論のことを指す。
		プログラミング言語やマークアップ言語などのコンピュータ言語の分野で、あるデータや{term}`コード`により記述者が表そうとした意味や意図、内容のことをセマンティクスと呼ぶことがある。文法や表記法、構文規則などを意味する「シンタックス」（syntax）と対比される。
		
		→この説明でいくと、セマンティクスは意味論上の"意味"のこと
			セマンティックはロマンティック(ロオマン風の)のように"意味論所での"のこと
		
	b とStrong
	https://developer.mozilla.org/ja/docs/Web/HTML/Element/strong
		→↓の記事のstrongの使い方は間違いの可能性がある。ただし、"My cat"を読者に譲る場合には"very"がstrongであってほしい。そうでなければ文章の一部を強調するだけのbでよい。
		https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#%E8%A6%81%E7%B4%A0%E3%82%92%E5%85%A5%E3%82%8C%E5%AD%90%E3%81%AB%E3%81%99%E3%82%8B
		まよったら意味の弱いbでよい(方針)

## HTML文法
### Lv1
- [用語] マークアップ
	開きタグと閉じタグで印をつける
	ダグ付け
- 要素の書き方
- HTMLは要素を並べる言語
### Lv2
- 空要素がある			←imgを学んでいること
	https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics#%E7%A9%BA%E8%A6%81%E7%B4%A0<S-F12>
	img, br, hr
		https://eow.alc.co.jp/search?q=hairline
		《印刷》〔活字の〕ヘアライン◆活字の細い線の部分、または非常に細い線から構成される活字。
- 属性がある			←imgを学んでいること
	- 要素毎に持てる属性が異なる
	- 必須、任意
### Lv3
- 入れ子にできる		←ulを学んでいること
	https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics#%E8%A6%81%E7%B4%A0%E3%81%AE%E5%85%A5%E3%82%8C%E5%AD%90
		要素の中に他の要素を入れることもできます。
	組み合わせによって入れ子にできるもの、できないものがある
- HTML 内のホワイトスペース
	https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_%E5%86%85%E3%81%AE%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9
- CSS連携のために名前を付ける(id,class)←CSSセレクタ―
### Lv4
- コメント
	https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_%E3%81%AE%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88
- 実体参照: HTML に特殊文字を含める
	https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#%E5%AE%9F%E4%BD%93%E5%8F%82%E7%85%A7_html_%E3%81%AB%E7%89%B9%E6%AE%8A%E6%96%87%E5%AD%97%E3%82%92%E5%90%AB%E3%82%81%E3%82%8B
		メモ: 他の記号に実体参照を使用する必要はありません。現代のブラウザーは、 HTML の文字エンコーディングが UTF-8 に設定されていれば、実際の記号を正しく扱うことができるからです。
		→©は&copy;でなくともいい

## ブロックレベル要素とインライン要素
- インラインは行の中、横の流れ
- ブロックは段落のように文章のかたまり、ブロック同士は改行で表示される、縦の流れ
- ブロックとインラインのニュアンスをソースコードでも示すため、ブロックは縦に並べて書き、インラインは一行の中に書く
- imgをブロックにしたいとき

## HTMLの基本構造
Lv1
- 定型文である(!ショートカット)
	- ja(ja-JP)
		文書の主要な言語の設定
		https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%E6%96%87%E6%9B%B8%E3%81%AE%E4%B8%BB%E8%A6%81%E3%81%AA%E8%A8%80%E8%AA%9E%E3%81%AE%E8%A8%AD%E5%AE%9A
	- IEのタグは取る
	- titleはブラウザーのタブに表示されるページ名
	- body の中に本文を書く（ブラウザーの表示エリアに現れる)
Lv2
HTML文書の構造
https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics#html_%E6%96%87%E6%9B%B8%E3%81%AE%E6%A7%8B%E9%80%A0
	→ここにある説明を元に補足する
- DOCTYPE宣言
- html
	- head
		- utf-8
		- viewport
	- body
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_%E6%96%87%E6%9B%B8%E3%81%AE%E6%A7%8B%E6%88%90
	→ここにも同様の説明がある
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
	→ここにも同様の説明がある、最も親切.

- ページの見た目を変更するための CSS

## 要素リファレンス
### h1		⇔section
- https://developer.mozilla.org/ja/docs/Glossary/Semantics#html_%E3%81%A7%E3%81%AE%E3%82%BB%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%82%AF%E3%82%B9
	 <h1> 要素はセマンティック要素で、「ページの最上位の見出し」の役割 (または意味) をまとったテキストを提供します。
		→大見出し、というより正確だ
### p
### img		←p	←相対パス	←URL(絶対、相対)
### br		←p
改行と水平線
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#%E6%94%B9%E8%A1%8C%E3%81%A8%E6%B0%B4%E5%B9%B3%E7%B7%9A

### section	⇔h1
### リンク	←相対パス	←URL(絶対、相対)
https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics#%E3%83%AA%E3%83%B3%E3%82%AF
	リンクはとても重要です。これがウェブをウェブたらしめているものです。←説明はこのくらい軽いものでいいね。
	hrefはHypertext Reference

ハイパーリンクの作成
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
	→ここでは説明が熱くなっている。いいぞ。
	ハイパーリンクは、ウェブが提供する最も刺激的な技術革新の一つです。 ハイパーリンクは、ウェブが始まった当初からある機能であり、ウェブをウェブたらしめているものです。 ハイパーリンクによって、文書を他の文書やリソースにリンクしたり、文書の特定の部分にリンクしたり、ウェブアドレスでアプリを利用できるようにすることができます。 ほとんどすべてのウェブコンテンツはリンクに変換することができ、クリックするか他の方法でアクティブにすると、ウェブブラウザーは別のウェブアドレス (URL) に移動します。

文書フラグメントへのリンク(ページ内リンク)
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E6%96%87%E6%9B%B8%E3%83%95%E3%83%A9%E3%82%B0%E3%83%A1%E3%83%B3%E3%83%88

絶対 URL vs 相対 URL
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E7%B5%B6%E5%AF%BE_url_vs_%E7%9B%B8%E5%AF%BE_url

### リスト
- ul, ol, (dl)
### 表
### div / span
### video / audio
### meta
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_%E6%96%87%E6%9B%B8%E3%81%AE%E6%A7%8B%E6%88%90
	<meta charset="utf-8">: <meta> この要素は、 <base>, <link>, <script>, <style> または <title> など、他の HTML メタ関連の要素では表現できないメタデータを表現します。
### 典型的なWebサイトの構造をマークアップしてみる
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure
ヘッダー: <header>。
ナビゲーションバー: <nav>。
メインコンテンツ: <main>。<article>、<section>、<div> 要素で表されるさまざまなコンテンツサブセクションを含みます。
サイドバー: <aside>。<main> の中に置かれることがよくあります。
フッター: <footer>。

### 非意味的なラッパー
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#%E9%9D%9E%E6%84%8F%E5%91%B3%E7%9A%84%E3%81%AA%E3%83%A9%E3%83%83%E3%83%91%E3%83%BC

### 高度なテキスト整形
→これはあきらかにレアで、Lv5だ。またMDNの記事を読んでもらうだけでいい。
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting

## Webのしくみ
- Webページが表示されるまで
	- ブラウザーの仕事
	- ファイルを直にひらくVSローカルVSインターネット
		- インターネットの仕組み
			- Webサーバー←ブラウザーとのコミュニケーション能力を持っているサーバーのこと
			- (ドメイン名)
### URL

# CSS
- スタイルを決定する指示書
- h1には暗黙のスタイル(ブラウザー内蔵のデフォルト, 暗黙とは見えないところで自動処理されるの意味)

# SEO
- ディスクリプション（説明書き）
	(キーワードはもう無効であるはず)
	https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
		descriptionのGoogleの扱いにも触れている
			メモ: 多くの <meta> 機能はもう使われていません。例えば、 keyword の <meta> 要素 (<meta name="keywords" content="fill, in, your, keywords, here">) — 検索エンジンが色々な検索用語と関連するページを決めるためのキーワードを与えると考えられています — は、スパマーが結果にバイアスをかける多数のキーワードを埋めるだけなので、検索エンジンから無視されます。
- メタデータの他の種類
	https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E4%BB%96%E3%81%AE%E7%A8%AE%E9%A1%9E
		- Open Graph Data は Facebook が開発した、ウェブサイトにより豊富なメタデータを与えるメタデータプロトコルです。
		- Twitter Cards


# その他
## MDNの読み方
- 一時情報源として使ってほしい
## ウェブサイト設計(紹介のみ)
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#%E7%B0%A1%E5%8D%98%E3%81%AA%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92%E8%A8%88%E7%94%BB%E3%81%99%E3%82%8B
可能な限り最高のユーザーエクスペリエンスを実現するために、それらをどのように配置して互いにリンクさせるかを解決することです。これは情報アーキテクチャと呼ばれます。

