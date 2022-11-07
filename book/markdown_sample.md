# 執筆ノート

- キーボードショートカット
	{bdg-dark}`!`
- カードのインポート
	```{include} cards/mk-working-dir.md
	```
- カードのテンプレート
	`````{div} taskcard
	````{card} カード名
	前件
	^^^
	本文
	+++
	後件
	````
	`````

## わかりやすさとは？

- なるべく説明をしない。マークアップで改行する習慣は先にお手本を示してそういうものだと分からせる。説明は読みたい人のみ読めるようにする。
- MDNのように安心のコトバを書く
- 分かりやすい具体例
	- 適切な例を用意する
		例の中に学習体験を織り込む
		例を作りながらでしか練れない
	- 複雑にするときは差分を見せる

最初のHTMLカリキュラムはちょうどこれがいい！
https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics

## カリキュラム設計(PERT)
% ユーザー体験を設計する(UX)
%	課題: 作りながら出ないと決定できないことがある？→作りながらだと場当たり的になり、設計が粉微塵になり、ますます混乱をきたす→コア体験は設計通りとし、場当たり的な発見は別途活かすというふうにできるといい
%
% MECE分析できること
%
% MermaidでPERTを描くにはflowchartを使用する
%
% リファレンス（わかりやすい）
% http://mermaid-js.github.io/mermaid/#/flowchart
% 
% - ノードには自由な文字が使える
% - これを
%    コーヒー --> 紅茶
%    コーヒー --> 緑茶
%   こう書けるのはすばらしい
%     F(コーヒー) --> 紅茶
%     F --> 緑茶

% ```{mermaid}
% flowchart TD
% 	A -- コーヒーを淹れる\n10分 --> E((2))
% 	A -- パンを焼く\n4分 -->E
% 	A -- 卵を焼く\n2分 --> B((4))
% 	B -- ハムを焼く\n2分 --> C((3))
% 	E -- ミルクを入れる\n1分 --> D((5))
%     F(コーヒー) --> 紅茶
%     F --> G(緑茶)
% 	G --> LV1{レベル1}
%     1 --> 2(hello)
%     subgraph ONE
%     a1-->a2
%     end
% 	1 --> a1
%     a2 --> 1
%     a2 --> a1
% ```


参考:
https://developer.mozilla.org/ja/docs/Learn の構成
> MDN のこのエリアの目的は、あなたを「初心者」から「エキスパート」にすることではなく、「初心者」から「中級者」にすることです。そこから、 MDN のその他の部分 や、多くの予備知識を前提とする他の中級から上級のリソースから学びながら、自分の道を歩み始めることができるようになるはずです。
> 
> 全くの初心者であれば、ウェブ開発は難しいものです - 私たちはあなたの手を握り、あなたが快適に感じ、適切にトピックを学ぶために十分な詳細を提供します。あなたがウェブ開発を学習している学生（個人またはクラスの一部として）、クラスの教材を探している先生、趣味の人、ウェブ技術の仕組みをもっと理解したい人など、どのような人であっても、安心してください。
> 
> 今すぐ Facebook のようなサイトを作ることはできませんが、簡単なウェブサイトなら作るのはそれほど難しくありません。私たちはここから始めることにしましょう。
> 
> さあ、旅を始めましょう。
- ウェブ入門
  - 最初のウェブサイトの物語
    - 基本的なソフトウェアのインストール
    - ウェブサイトをどんな外見にするか計画する
		→本書ではデザイナーがデザインする前提のため、省略します. デザイナーからの指示をもらうを学習しましょう。
    - ファイルの扱い
    - HTMLの基本
    - CSSの基本
    - サンプルコードの公開
    - ウェブの仕組み
- HTML - ウェブの構造化
  - HTML入門(HTML概論)
    - HTMLを始めよう HTML の絶対的な基本を網羅
    - head とは? HTML のメタデータ
	- HTMLテキストの基礎
    - ハイパーリンクの作成
    - 高度なテキスト整形
    - 文書とウェブサイトの構造
    - HTMLのデバッグ
    - 評価課題
      - 手紙のマークアップ
      - コンテンツのページの構造化
  - マルチメディアと埋め込み
  - HTML表
  - HTMLフォーム
  - 一般的な問題解決に HTML を使う(HowTo)
	https://developer.mozilla.org/ja/docs/Learn/HTML/Howto
- CSS - ウェブのスタイルづけ
  - CSSの第一歩
    - CSSとは何か？
    - CSS入門(実例を使った訓練)
    - CSSの全体像
    - CSSはどう動くか？
    - 新しい知識を使う
  - CSSの構成要素
	カスケードと継承・セレクター・単位・サイズ設定・背景と枠線についてやデバッグの方法など
  - テキストの装飾
  - CSSレイアウト
  - CSSを使ってよくある問題を解決する(HowTo)
	https://developer.mozilla.org/ja/docs/Learn/CSS/Howto
  - "CSS は奇妙です"
- ウェブフォーム - ユーザーデータを扱う
- アクセシビリティ - ウェブを誰でも利用できるようにする
- ウェブの性能 - ウェブサイトを高速かつレスポンシブにする
- ツールとテスト
- コード例の入手
	git clone https://github.com/mdn/learning-area


```{mermaid}
%% リファレンス https://mermaid-js.github.io/mermaid/#/flowchart
flowchart TD
  subgraph WEBSERVER [無料のWebサーバーを借りる]
    %% https://www.xfree.ne.jp/
  end
  subgraph SOFTWARE [基本的なソフトウェアのインストール]
    subgraph VSCode [Visual Studio Code]
	  VSCode-install
	  VSCode-settings
    end
    subgraph Chrome [Chrome]
      Chrome-install
      Chrome-settings
    end
    subgraph FileZilla
      %% https://filezilla-project.org/
      FileZilla-install
      FileZilla-settings
    end
  end
  subgraph HTML
    HyperText
    HyperLink
    Markup
    HTML-Syntax
  end
```
	
```{mermaid}
%% リファレンス https://mermaid-js.github.io/mermaid/#/gantt
gantt
	title ガントチャート
	コーヒーを淹れる :t1, 2022/06/01, 10m
	パンを焼く :t2, 2022/06/01, 4m
	卵を焼く :t3, 2022/06/01, 2m
	ミルクを淹れる :t4, after t1, 1m
	ハムを焼く :t5, after t3, 2m
```
```{mermaid}
%% リファレンス https://mermaid-js.github.io/mermaid/#/stateDiagram
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```

## LEVEL設計

LEVEL1はうまく開始することが目的、はじまりのはじまり
LEVEL1では厳密さを犠牲にして、短時間で一通りの体験をする=手順書
- 例)VS CodeはVS Codeとして扱い、それがテキストエディターであることや、テキストとは何かを説明する必要はない
- なぜフォルダを作るかを軽く説明する必要はある→手順の意味を伝えないと、手順を丸暗記しかなくなる
- LEVEL1をリファレンスに使えば、いつでもそこまでできるようにする
- 手順はレシピで説明できそう
	https://www.nhk.or.jp/shutoken/recipe/gohan/20220928.html
		- しあがりイメージ画像
		- 時間目安、エネルギー・塩分 ... メタ情報
		- 手元に準備するもの
			- チェックリストになっている
		- 手順書
			- POINTで意味を補足



- LEVEL1
	- 無料
	- ダウンロードとインストール方法
	- 設定
	- 使い方
- LEVEL2
	- テキストエディターとは

## HTMLとCSS
- インターネットにあるページは全てHTML(エイチティーエムエル)とCSS(シーエスエス)という二種類のコトバで書かれています。
 - 具体例(html,css)
 - 文字で書く
   - マウス操作で作るのではない
   - 文字を打ち込む仕事をコーディングと言い、コーディング作業に従事する人をコーダーと言う
- 画像などの素材を組み合わせる
  - HTMLは素材をくっつける糊
- ページの作成方法を学ぶとは具体的にはHTMLとCSSの書き方を学ぶということです。




	- HTMLとCSSという２種類のコトバ使いを習得することです。
「テキストエディター」と言います。


https://azure.microsoft.com/ja-jp/products/visual-studio-code/
## 説明の仕方

結論を先にします。
  スペースとは空間のことで、一文字幅の余白を表現する文字です。
	↓
  一文字幅の余白を表現する文字です。スペースとは何もない空間を指します。


## 図と番号付き参照

```{figure} https://i.gyazo.com/7f2f98f5c5a3bbf84acccf8b81742a52.png
---
name: html-syntax1
---
文法その１："内容をタグで囲う"
```

すでに{numref}`html-syntax1`は学びました。

## スニペット

> {sub-ref}`today` | {sub-ref}`wordcount-words` words | {sub-ref}`wordcount-minutes` min read

### おさらい
	```{admonition} おさらい
	:class: tip					←Tipの淡黄色のスタイルを指定
	hello world
	```
### Web引用
> 「マークアップ」という用語は、英語圏で伝統的な出版の作業過程である原稿の「マーキング・アップ」という作業から派生した。「marking up」とは、原稿用紙の余白に印刷に関する指示の記号を書き加えることである。
> ―――https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E8%A8%80%E8%AA%9E#%E8%AA%9E%E6%BA%90

## 参考図書
- https://adjustacademy.com/frontend/cource1/book/
- 高橋先生のテキスト
	C:\Users\yasumura\Desktop\20220822HTMLCSSお茶サイト(髙橋)
- 竹内先生の講義ビデオ
	Z:\AnytimeLearning\軽くしたデータ　HTMLCSS
- MDN
- HTML5虎の巻

## Jupyter Bookとは？
- ドキュメント生成フレームワークSphinxのディストリビューションの一種
 - Sphinxが提供するreStructuredText(マークダウンとは似て非なる書式)を表現力を保ったままマークダウンに寄せたMySTをサポート

- 資料
 - https://myst-parser.readthedocs.io/en/latest/develop/background.html

## 設定で利用できるオプション
- https://myst-parser.readthedocs.io/en/latest/configuration.html

## Jupyter Book で利用できるマークアップ書式

各種トークン
: - https://myst-parser.readthedocs.io/en/latest/syntax/reference.html

MyST syntax
:
- https://jupyterbook.org/en/stable/reference/cheatsheet.html#figures-and-images
- https://myst-parser.readthedocs.io/en/latest/syntax/reference.html

CommonMark
:
- https://myst-parser.readthedocs.io/en/latest/syntax/syntax.html#syntax-core
- https://spec.commonmark.org/0.30/#leaf-blocks

インラインロールとブロックレベルディレクティブ
:
- 文法
 - https://myst-parser.readthedocs.io/en/latest/syntax/roles-and-directives.html#syntax-directives
- ディレクティブ一覧
 - https://docutils.sourceforge.io/docs/ref/rst/directives.html
   ```{admonition} カスタマイズ
   foo
   ```
   ```{attention}
   foo
   ```
   ```{danger}
   foo
   ```
   ```{error}
   foo
   ```
   ```{caution}
   foo
   ```
   ```{hint}
   foo
   ```
   ```{important}
   foo
   ```
   ```{note}
   foo
   ```
   ```{tip}
   foo
   ```
   ```{warning}
   foo
   ```
 - https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html
- ロール一覧
 - https://docutils.sourceforge.io/docs/ref/rst/roles.html
 - https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html

インクルード
: - https://myst-parser.readthedocs.io/en/latest/faq/index.html#include-a-file-from-outside-the-docs-folder-like-readme-md

拡張構文
: - https://myst-parser.readthedocs.io/en/latest/syntax/optional.html
	- 特別な文字
	- 取り消し線
	- 数学のショートカット
	- URLの自動リンク
	- 置換(定数定義)
	- コードフェンスにコロンを使う
	- Note: 忠告指令
	- 自動生成されたヘッダー アンカー
      - `#` で作成するヘッダーにはidが振られ、パーマリンクが生成される.
	- 定義リスト
	- タスク リスト
	  - [ ] An item that needs doing
	  - [x] An item that is complete
	- フィールドリスト
	- 画像
	- マークダウンの数字
	- HTML 警告

バッジ、アイコン
:
- https://sphinx-design.readthedocs.io/en/latest/badges_buttons.html
- 使用するアイコン→_config.yml に定義した

参照とクロスリファレンス
:
- https://jupyterbook.org/en/stable/tutorials/references.html
  - ラベルとターゲットからなる
  - クロスリファレンスは、リンク元一覧を表示する機能([WHO-CALLS](http://www.lispworks.com/documentation/lw60/LW/html/lw-810.htm),[関数呼び出しの一覧](https://g000001.cddddr.org/3819151959))かと思ったが、全然違った
   - https://japan.zdnet.com/glossary/exp/%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/?s=4#:~:text=%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%AF%E3%80%81%E3%83%AF%E3%83%BC%E3%83%97%E3%83%AD,%E7%B5%90%E6%9E%9C%E3%81%8C%E5%8F%8D%E6%98%A0%E3%81%95%E3%82%8C%E3%82%8B%E3%80%82
     > 参照元のページ番号を表示するようにクロスリファレンスを設定した場合、参照元のページ位置を変更すると、参照先にもその結果が反映される。 そのため、文書の修正への対応が容易である。 
   - ECMAScript仕様書では、見出しに"References"機能があり、リンク元一覧を得ることができる。これが読みこなす時には便利だんだよなあ。こういうのがあると嬉しい。
     - https://tc39.es/ecma262/multipage/abstract-operations.html#sec-operations-on-objects
- https://jupyterbook.org/en/stable/content/references.html

レイアウト
: - https://jupyterbook.org/en/stable/content/layout.html

引用
: - https://jupyterbook.org/en/stable/content/citations.html

## コード引用
構文ハイライト
```html
<!DOCTYPE html>

<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>8. Content with notebooks &#8212; HTML/CSSを習得する本</title>
    
  <!-- Loaded before other Sphinx assets -->
  <link href="_static/styles/theme.css?digest=1999514e3f237ded88cf" rel="stylesheet">
<link href="_static/styles/pydata-sphinx-theme.css?digest=1999514e3f237ded88cf" rel="stylesheet">
```
- 行番号→できないっぽい
  - 行番号ごとの参照→できないっぽい

## キーボードショートカットを表現する

- バッジを使って表現する
 - {bdg-dark}`Alt+Shift+G`
 - {bdg-dark}`Alt`+{bdg-dark}`Shift`+{bdg-dark}`G` ←こっちが見やすい
- Windows特有のキー
	⊞ Win (MEMO この記号は単にWinに似た文字を使用している。 https://ja.wikipedia.org/wiki/Windows%E3%82%AD%E3%83%BC の用例より。なおWindowsキーのUnicode割り当てはない)
- Mac特有のキー
	Command キー	{bdg-dark}`⌘`
	Shift キー		{bdg-dark}`⇧`
	Option キー / Alt キー		{bdg-dark}`⌥`
	Control キー				{bdg-dark}`⌃`
	その他のキー
		Return キー	↩
		Enter キー	⌤
		Delete キー	⌫
		Esc (Escape) キー	⎋
		Tab ⇥
		Space ␣
	https://www.sejuku.net/blog/wp-content/uploads/2020/09/image103.png
	由来
	https://beadored.com/mac-decorative-key-symbol/
	Macキーボードの記号一覧(Complete)
	https://gist.github.com/jlyonsmith/6992156f18c423fd1c5af068aa311fb5

## 画像をクリッカブルにできるか？

画面遷移にはなるが、クリックする図を作ることができる。
```{image} ./images/logo.png
:alt: fishy
:class: bg-primary mb-1
:width: 200px
:align: center
```

## カスタムCSS
https://jupyterbook.org/en/stable/advanced/html.html

## 生のHTMLを埋め込む
https://jupyterbook.org/en/stable/advanced/html.html#use-raw-html-in-markdown

## [UI] 読書のガイドを提供するArticle-info
https://sphinx-design.readthedocs.io/en/sbt-theme/additional.html#article-info

```{article-info}
:avatar: images/logo.png
:avatar-link: https://executablebooks.org/
:avatar-outline: muted
:author: Executable Books
:date: Jul 24, 2021
:read-time: 5 min read
:class-container: sd-p-2 sd-outline-muted sd-rounded-1
```

## 定義済みCSS変数
デザインシステムに則った色が定義されている。
DevToolsで:root 要素見ればそこに一覧がある。

## 定義済みクラス名
https://sphinx-design.readthedocs.io/en/sbt-theme/css_classes.html
- Text
- Display
- Sizing
- Spacing
- Colors
- Borders
- Shadows
- Avatars
- Load Animations

## meta情報
+++ {"meta": "computer"}
→これは何に使うの？

## reSTにあるブロック
https://docutils.sourceforge.io/docs/ref/rst/directives.html
{{TODO}}どう書けばいいかがわからない
```{epigraph}
hello
: hello
```
```{highlights}
hello
```
```{pull-quote}
hello
```
