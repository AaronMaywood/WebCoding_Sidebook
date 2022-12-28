# LEVEL10 卒業制作とポートフォリオ制作

`LEVEL10`は卒業のための試験として、卒業制作に取り組んでいただきます。

卒業試験のテーマは、自身のポートフォリオに掲載するためのページ制作です。

% 卒業試験の期間は3週間とします。
% 
% - これも参考になるはず
% 	- 付録：コーディングガイドライン例 91-95
% 	- コーディング後チェック 95
% 
% - デベロッパーツールに慣れるため、卒業制作をソースコードを開示した状態で行う？→どうしても開示されたソースコードに左右されてしまうので避ける
% 	しかし、Figmaを使用してのハンドオフはきつい→指示書を自作して提供することにした
% 
% - flexやgridレッスンでもある→ドリルを提供して事前練習してもらうというのはいいアイディアだ
% 	- これはflexか？gridか？
% 	- flexやgridの入れ子とみなせるか？
% 	- flexやgridはレスポンシブである

## ポートフォリオ制作について

```{admonition} おさらい
:class: tip
ポートフォリオ作りは本ガイドブック冒頭の「[](on-portfolio)」に、読者自身の課題として提示していました。ある程度準備ができていることを望んでいます。もしくは、これから卒業制作にかけてその準備をしましょう！
```

卒業制作に先立って、ポートフォリオをどのように制作するかを説明しておきます。

```{hint}
ポートフォリオは企業の応募時に自分をアピールする道具ですので、ここで紹介する一般的な方法に留まらず、読者自身が**良い**と思ったことは何でも取り組んでもらうことを期待しています。
```

本書では、自身のポートフォリオを「ポートフォリオサイト」としてインターネット上に作成する方法を説明します。

% 資料についてのライセンス確認
% - PFサイトテンプレート（フォルダ）
% 	ねこぽんさん
% 	https://webdesigner-go.com/template/portfolio-03/
% 	無料で許可もとっている
% - ポートフォリオ制作のポイント_配布用.pdf
% 	関口 恵
% 	ポートフォリオ制作のポイント_配布用.pdfは私が作りました
% - 0241「Webサイト・ポートフォリオの作成手順」42～44ページ参照.pdf
% 	関口 恵
% 	0241「Webサイト・ポートフォリオの作成手順」42～44ページ参照.pdf　も本村さんの指示の元、私が作成したものです
% - @PF帳作成手順.pdf
% 	関口 恵
% 	高橋先生に許可とっていません。
% 	→これは内容的に使わないな

ポートフォリオサイトには、無料で配布されているポートフォリオ用のテンプレートファイルをカスタマイズして作成しましょう。
- https://webdesigner-go.com/template/portfolio-03/
- https://webdesigner-go.com/news/portfolio-template-splitscreen/

% ```{hint}
% ポートフォリオサイト自体を自作する手もありますが、手間を掛けるのはここではなく作例を増やしたり自己アピールの方法に費やす方がよいかと思います。
% ```

このテンプレートをダウンロードして、作品をどのように掲載したいかの検討を付けておいて下さい。（どのような画像を用意し、どのような文言をどこに入れたいか）

```{hint}
自身がコーディングした作品を画像にする（ページのスクリーンショットを撮影する）にはGoogle Chromeの拡張機能`FireShot`を使用して下さい。

- Google Chrome 拡張機能 FireShot
  - https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=jaX
```

みなさんはデザイナーではなくコーダーなので、ポートフォリオもコーディングに関することが中心的な話題であるようにしましょう。
- `HTML`のマークアップに関する、{tem}`セマンティクス`で気を付けたこと
- クラス名の命名で気をつけたこと
- `CSS`を書くにあたって気をつけたこと
- （品質を確認するため）検証で気をつけたこと、こだわり
% 	- (Safari以外で検証しています)
% 	- 画面崩れ
% 		- 各種ブラウザ(ターゲットブラウザー)
% 		- レスポンシブ
% 	- リンク切れ
% 	- 不要なコメントの消し込みなど、コードのクリーンナップについて
- その他細かなこだわり
- レスポンシブ対応で特に気をつけたこと、苦労したこと

また、皆さんはおそらくは知識ゼロからここまで到達しましたので、この間に経験したこと、学習したこと、自分がどれだけ伸びたかという情報も記しましょう。企業側は現時点での知識だけでなく（時にはそれ以上に）どのくらい伸びしろがあるかを知りたいものです。

- 最初はどんな状態で、現在はどうなったか（ビフォーアフター）
- 学習時の態度はどうだったか、モチベーション維持で気をつけたこと、個人的な目標設定
- これから伸ばしたい知識、問題意識
- 自ら考え行動したこと
- 自分で調べて学んだこと
- 完成させる、ということも能力の一つです
- {{TODO}}重要 `VS Code`やブラウザーの`デベロッパーツール`の使いこなしについて

そして、学習に際してぶち当たった困難について記しましょう。その状況に対して読者がどのように考え行動したか、問題解決能力をアピールしましょう。

- 問題解決の具体例

自身がこの業界に関心のあることをアピールしましょう。
- 好きなウェブサイト（結構聞かれます）とその理由
- `HTML`や`CSS`コーディングについて、読んでいる記事
- 聞いたことのあるキーワードのうち、勉強したいこと（コーディング規約やスタイルガイド、BEMやOOCMSなどのCSS設計、Sass、HTML LintやStyle Lint、アクセシビリティ、ハンバーガーメニュー等のjQueryプラグイン、などなど）
% - スタイルガイド
%   - https://fueru.info/design/html-css/google-styleguide/
%   - https://coding-factory.com/file/guideline
% - HTML Lint / Style Lint
%   https://www.google.com/search?q=htmllint+vscode&oq=htmllint&aqs=chrome.1.69i57j0i512l2j0i30l4j0i30i625j0i30l2.4762j0j7&sourceid=chrome&ie=UTF-8
% - {{TODO}} コーディングファクトリー会社案内 2016より、コーディング技術を売る要素を学ぶ
- 将来的にどのようなことがやりたいか、目指しているものがあれば

最後に、ポートフォリオ制作についての一般的なアドバイスをまとめた`PDF`資料（ウェブデザイナー向きに作られた資料ですが、参考になる点も多いと思います）を紹介します。

- [ポートフォリオ制作のポイント_配布用.pdf](https://adjustacademy.com/webcoder/guidebook/f3a643dd575af9baeb1ba1d032959358/_static/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E5%88%B6%E4%BD%9C%E3%81%AE%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88_%E9%85%8D%E5%B8%83%E7%94%A8.pdf)

% - ポートフォリオは紙のものもあると便利です。
%  - ポートフォリオサイトを印刷するか、インターネット環境の無いノートPCの画面で見せられるようにする
%  - 紙版を印刷して持参する
%  - ポートフォリオサイトはまとまりのある反面、きちんと収まりすぎていて直接的に訴える力が弱いように思います。自身のプレゼン資料になるような紙の資料も用意しましょう。
% 
% - ポートフォリオサイトをグーグルの検索エンジンに露出しないようにする方法
% 	- ロボットのメタタグを設置する
% 	- {{TODO}} ベーシック認証を掛けることを検討する
% 
% {{TODO}} ポートフォリオを提出して、キャリア・コンサルタントのアドバイスを受けましょう

以上、ポートフォリオについての説明でした。卒業制作に打ち込みつつ、ポートフォリオをどう作成するかについても考えを進めておいて下さい。

## 卒業制作「レスポンシブ対応のページの作成」

% Figmaから教材を選ぶ基準
% - CC BY 4.0 などの商用利用可能なライセンスであること
% - buy this が付いていない
% - 全部Figmaでいじれるもの。UIがサムネイル画像になってロックされていない。
% - 顔や人物がわかる写真を使っていない
% 
% 選んだもの
% - Responsive Startup Website
% 	- https://www.figma.com/community/file/1150370769219258177
% 	→https://github.com/AaronMaywood/coding_sample/tree/main/website1
% - Responsive Design Art News Landing Page
% 	- https://www.figma.com/community/file/1095377079540950532
% 	→https://github.com/AaronMaywood/coding_sample/tree/main/website2
% - Responsive Web Page
% 	- https://www.figma.com/community/file/992410574427069906
% こいつは全部サムネイル画像になっていて使えない
% - Tastebite - Food Recipe Website Templates & Design Systems (Community)
% 	- https://www.figma.com/file/uztxlAjVLnKHYJ6kN3mrNJ/Tastebite---Food-Recipe-Website-Templates-%26-Design-Systems-(Community)?node-id=1%3A3

以下にしめす３つのレスポンシブ対応のウェブデザインのうち、一つを選び、デザイン指示に従ってHTML/CSSコーディングを行って下さい。

- A. Responsive Startup Website
	```{figure} https://i.gyazo.com/c1443bce6da04492575fe8d25f225c8e.png
	% https://www.figma.com/community/file/1095377079540950532
	% ttps://github.com/AaronMaywood/coding_sample/tree/main/website2
	```
- B. Responsive Design Art News Landing Page
	```{figure} https://i.gyazo.com/36815a9337f1e03ad65b28082e03a7e5.png
	% https://www.figma.com/community/file/1150370769219258177
	% ttps://github.com/AaronMaywood/coding_sample/tree/main/website1
	```
- C. Responsive Web Page
	```{figure} https://i.gyazo.com/013d997dbbd13b677c82c3a9596140de.png
	% - https://www.figma.com/community/file/992410574427069906
	```
次にA. B. C. それぞれの細かな指示を説明します。

### A. Responsive Startup Website

素材の`ZIP`ファイルを以下の`URL`からダウンロードして下さい。

% download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website1/archive/refs/heads/master.zip
- https://adjustacademy.com/webcoder/8dad759b580d31d4024ef84ba896bba5.zip

`ZIP`を展開したら、その中に`README.md`というファイル名のテキストファイルがあります。これを`VS Code`で開いて下さい。
`README.md`のなかに細かな指示が書かれていますので、それに従って実装して下さい。

- {bdg-dark}`指示` 作業フォルダ名を`website1`として下さい。
- ファイル名の指示
	- HTMLは`index.html`としてください。
	- CSSは`css/style.css`として下さい。
- デザインカンプはAdobe社のFigmaで作成・共有しており、以下のURLで確認できます。
  - https://www.figma.com/proto/7AubNTW0tPsiGlDlAlV3Mg/Responsive-Startup-Website-(Community)?page-id=0%3A1&node-id=723%3A677&viewport=430%2C437%2C0.12&scaling=min-zoom
	````{dropdown} Figmaの画面でデザインカンプの指示を読む方法を確認する
	```{include} cards/figma.md
	```
	````
- コーディングができたら動作確認を行って下さい。
  - レスポンシブ対応ができているかどうかの確認もお願いします。ブレークポイント前後の幅（例えばブレークポイントが`345px`の場合には、`345px`と`346px`が前後の幅です）での確認も行って下さい。
	ブレークポイントの画面幅を確認するには、デバイスモードを使用して下さい。
	````{dropdown} デバイスモードを使用してビューポートの幅を切り替える方法を確認する
	```{include} cards/devtools/device-mode.md
	```
	````

% 答え
% download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website1/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/f97b728469b2e2d539d04a78909c8777.zip

### B. Responsive Design Art News Landing Page

素材の`ZIP`ファイルを以下の`URL`からダウンロードして下さい。

% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website2/archive/refs/heads/master.zip
- https://adjustacademy.com/webcoder/eaa4b6e1370c62fece3ba9a65138df0a.zip

`ZIP`を展開したら、その中に`README.md`というファイル名のテキストファイルがあります。これを`VS Code`で開いて下さい。
`README.md`のなかに細かな指示が書かれていますので、それに従って実装して下さい。

- {bdg-dark}`指示` 作業フォルダ名を`website2`として下さい。
- ファイル名の指示
	- HTMLは`index.html`としてください。
	- CSSは`css/style.css`として下さい。
- デザインカンプはAdobe社のFigmaで作成・共有しており、以下のURLで確認できます。
  - https://www.figma.com/file/BcWrFX2j7lslCymV8fLUQR/Responsive-Design-Art-News-Landing-Page-(Community)?node-id=1%3A5&t=382485YnHDoo0qeg-1
	````{dropdown} Figmaの画面でデザインカンプの指示を読む方法を確認する
	```{include} cards/figma.md
	```
	````
- コーディングができたら動作確認を行って下さい。
  - レスポンシブ対応ができているかどうかの確認もお願いします。ブレークポイント前後の幅（例えばブレークポイントが`345px`の場合には、`345px`と`346px`が前後の幅です）での確認も行って下さい。
	ブレークポイントの画面幅を確認するには、デバイスモードを使用して下さい。
	````{dropdown} デバイスモードを使用してビューポートの幅を切り替える方法を確認する
	```{include} cards/devtools/device-mode.md
	```
	````

% 答え
% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website2/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/69dd79519f07998d954cdbd38f690acf.zip

### C. Responsive Web Page

本課題はA.やB.と異なった出題形式をとっており、完成版の`HTML/CSS`が提供され、それを元に自分で再構築することを求める内容に成っています。

```{tip}
このような課題の形になったのはいくつかの理由があります。

- この教材はコーディングの難易度が高い（カリキュラム外の追加知識も必要）ので、ゼロからは難しいと思われたため。
- コーダーは既存のページを保守する業務も多く、`HTML/CSS`を読み解くスキル（書くスキルだけでなく）が必要であるため。
- 既存のページを読み解くにはデベロッパーツールを使いこなす必要があり、この課題を通じてぜひとも使い慣れておいてほしいため。
```

以下のファイルを手に入れて下さい。

% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website3/archive/refs/heads/master.zip
% https://adjustacademy.com/webcoder/92cc691cfb55035e5b69ca08812380ce.zip
% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website3/archive/refs/heads/answer-minify.zip
% https://adjustacademy.com/webcoder/7d8b5ed936e7752f1011f15390242d27.zip
% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website3/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/d63749d940c22e2955ca01e55955f27c.zip

1. 素材
	- https://adjustacademy.com/webcoder/92cc691cfb55035e5b69ca08812380ce.zip
2. 完成見本(ただし`CSS`を難読化済み)
	- https://adjustacademy.com/webcoder/7d8b5ed936e7752f1011f15390242d27.zip

次のように作業を進めて下さい。

`2. 完成見本`の`index.html`をブラウザーで開いて表示し、完成したページの見た目を確認したり、画面幅を変えてレスポンシブの様子を観察してください。次に`1. 素材`の素材（`index.html`や`css/style.css`）に手を加えて`2. 完成見本` の形になるまでコーディングして下さい。

`2. 完成見本`や`1. 素材`を交互に見比べながら作業を進める感じです。

なお`2. 完成見本`の`css/style.css`は読みにくいように難読化しています。これは`CSS`をコピペして理解したつもりになることを防ぐためで、あくまでも自身の知識や考えに基づいて独自のコーディングを行っていただくためのものです。

そしてこの作業の鍵を握るのが`Chrome`の`デベロッパーツール`です。
`デベロッパーツール`を用いれば、完成見本をつぶさに観察することができるからです。

デベロッパーツールでは、特定の要素にあたっている`CSS`を見ることができますし、ボックスモデルを確認してどこにマージンやパディングがあたっているかも見ることができます。また「この`CSS`はどうして入っているのだろう？どうしてこの値になっているのだろう？」という疑問に対しても、デベロッパーツール上から該当プロパティをオフにしたり、値を書き換えてどうなるかを見ることができます。
レイアウトを担う`flexbox`や`grid`の構造についても、デベロッパーツールからその組成を知ることができます。

そのような実験的操作を通して`CSS`そのものの理解を深めることが可能です。

デベロッパーツールを使って元の`HTML/CSS`のコーディングを観察し、`CSS`の仕組みを十分に理解した上で（あるいは、十分に理解できていないことは学んだり調べたりして）`1. 素材`へのコーディング作業を進めてほしいと思います。

以下、その他の細かな指示です。

- {bdg-dark}`指示` 作業フォルダ名を`website3`として下さい。
- `1. 素材`の`ZIP`を展開したら、その中に`README.md`というファイル名のテキストファイルがあります。これを`VS Code`で開いて下さい。`README.md`のなかに細かな指示が書かれていますので、従って下さい。
- ファイル名の指示
	- HTMLは`index.html`としてください。
	- CSSは`css/style.css`として下さい。
- コーディングができたら動作確認を行って下さい。
  - レスポンシブ対応ができているかどうかの確認もお願いします。ブレークポイント前後の幅（例えばブレークポイントが`345px`の場合には、`345px`と`346px`が前後の幅です）での確認も行って下さい。
	ブレークポイントの画面幅を確認するには、デバイスモードを使用して下さい。
	````{dropdown} デバイスモードを使用してビューポートの幅を切り替える方法を確認する
	```{include} cards/devtools/device-mode.md
	```
	````

% 答え
% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website3/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/d63749d940c22e2955ca01e55955f27c.zip

## 採点基準
1. ブラウザーの表示をみて、指示通りの表示になっているかを確認します。
2. レスポンシブ対応されているかどうかをブレークポイント前後の幅を用いて確認します。
3. 適切なhtmlマークアップや、CSSコーディングが施されているかどうかを確認します。

## 提出方法（検証〜提出）

- {bdg-dark}`指示`
  - 問題A. の場合 ... `website1`フォルダを自身のWebサーバーにアップロードし、ページを確認できるURLを{{OFFICE}}に提出して下さい。
  - 問題B. の場合 ... `website2`フォルダを自身のWebサーバーにアップロードし、ページを確認できるURLを{{OFFICE}}に提出して下さい。
  - 問題C. の場合 ... `website3`フォルダを自身のWebサーバーにアップロードし、ページを確認できるURLを{{OFFICE}}に提出して下さい。
- 具体的には次のようにして下さい。
	```{include} cards/school/filling.md
	```

% おめでとうございます。卒業試験に合格しました。
%
% `website1`の実装は合格です。
% 続けて`website2`や`website3`の実装にもチャレンジしてみませんか？
% その意思があればお知らせ下さい。
%
% また、ポートフォリオ制作に着手して下さい。
% {{TODO}} ポートフォリオ制作をキャリコンがサポートする

