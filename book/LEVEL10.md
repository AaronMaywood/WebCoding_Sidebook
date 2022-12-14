# LEVEL10 卒業制作とポートフォリオ制作

`LEVEL10`では卒業制作に取り組んでいただきます。

卒業試験の課題に合格することで本カリキュラムを卒業したとみなされ、**就職支援を受けることができるようになります。**

ここでは卒業制作と並行して就職活動のためのポートフォリオの作成も行いましょう。

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

(making-portfolio)=
## ポートフォリオ制作について

ポートフォリオには、**これまでに取り組んだ課題**やここで制作する**卒業制作**を掲載し、また自己アピールの情報を記しましょう。

```{admonition} おさらい
ポートフォリオ作りは本ガイドブック冒頭の「[](on-portfolio)」に、読者自身の課題として提示していました。ある程度準備ができていることを望んでいます。もしそうでなければ...これから卒業制作にかけてその準備をしましょう！
```

卒業制作に先立ってポートフォリオをどのように制作するかを説明しておきます。

```{important}
**ポートフォリオ制作については読者に一任します。以下の参考情報を元に、どのようにポートフォリオを作るかは読者に任せますので、自身の判断で進めて下さい。（なお卒業後の就職支援の一貫としてポートフォリオ制作のアドバイスを受けることができます）**
```

ポートフォリオは紙で作成する方法と、ウェブサイトとして作成する方法があります。

紙で制作したポートフォリオは面接時などに持参したり相手に見てもらうのが簡単だというメリットがあります。
一方で、`HTML/CSS`のコーディングをじっくり見てもらうには、ブラウザーで直接閲覧できるウェブサイト形式が適しています。

ここではウェブサイト版のポートフォリオを作る方法を紹介します。

```{hint}
ポートフォリオは企業の応募時に自分をアピールする道具ですので、ここで紹介する一般的な方法に留まらず、読者自身が**良い**と思ったことは何でも取り組んでもらうことを期待しています。
```

### ウェブ版のポートフォリオ（ポートフォリオサイト）を作る

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

ポートフォリオを「ウェブサイト（ポートフォリオサイト）」として作成するには、インターネット上配布されているテンプレートファイルを探してカスタマイズする方法があります。以下に無料のテンプレートを紹介します。
- https://webdesigner-go.com/template/portfolio-03/
- https://webdesigner-go.com/news/portfolio-template-splitscreen/

% ```{hint}
% ポートフォリオサイト自体を自作する手もありますが、手間を掛けるのはここではなく作例を増やしたり自己アピールの方法に費やす方がよいかと思います。
% ```

使用するテンプレートに応じどこにどのような**画像や文言**が必要になるかの見当をつけて、それらの**素材を準備**しておく必要があります。

```{hint}
**必要な素材は何か**。実際に作り始めないと、本当に何が必要かを判断できないものです。
したがって卒業制作と並行してポートフォリオを作り始めることをオススメします。
```

```{hint}
**画像素材を用意する**

自身がコーディングした作品を画像にする（ページのスクリーンショットを撮影する）には`Google Chrome`の拡張機能である`FireShot`が使用できます。

- Google Chrome 拡張機能 FireShot
  - https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=jaX
```

### ポートフォリオに盛り込みたい自己アピール要素

コーディングした作例に併せて以下の要素をアピールしましょう。

#### コーディングに関する自身の考えやこだわった点

コーディング作業の中では以下のような点であれこれ悩んだり試したりするものです。その経験を通して会得したことや自身の取り組みを示しましょう。

- `HTML`のマークアップに関する、{term}`セマンティクス`で気を付けたこと
- クラス名の命名で気をつけたこと
- `CSS`を書くにあたって気をつけたこと
- （品質を確認するため）検証で気をつけたこと、こだわり
% 	- (Safari以外で検証しています)
% 	- 画面崩れ
% 		- 各種ブラウザ(ターゲットブラウザー)
% 		- レスポンシブ
% 	- リンク切れ
% 	- 不要なコメントの消し込みなど、コードのクリーンナップについて
- レスポンシブ対応で特に気をつけたこと、苦労したこと
- その他、コーディング上のこだわりなど

#### 学習態度や伸びしろについて

本カリキュラムを受講する間に経験したこと、学習したこと、どれだけ自分が伸びたかという情報も記しましょう。企業側は現時点での知識だけでなく、時にはそれ以上に**どのくらい伸びしろがあるかを知りたい**ものです。

- 最初はどんな状態で、現在はどうなったか（ビフォーアフター）
- 学習時の態度はどうだったか、モチベーション維持で気をつけたこと、個人的な目標設定
- これから伸ばしたい話題、興味のあること
- 自分で調べて学ぶなど、自ら考え行動し、結果を出したこと
- あきらめず完成させる、ということも能力の一つです
  - いつあきらめそうになったか、その時にどう挽回したか
- `VS Code`やブラウザーの`デベロッパーツール`などの「ツール」の使いこなしについて

#### 問題解決能力について

そして、学習に際してぶち当たった困難について記しましょう。その状況に対して読者がどのように考え行動したか、問題解決能力をアピールしましょう。

- 問題解決の具体例
- 仕事や学習に対してのポジティブな態度に関すること
- 継続力
- モチベーション維持の取り組み

#### 業界理解について

自身がこの業界に関心のあることをアピールしましょう。
- 好きなウェブサイト（結構聞かれます）とその理由
- `HTML`や`CSS`コーディングについて、読んでいる記事
- 次に習得したいこと（自身が学習の過程で目にしたコーディングに関わるキーワードを記しましょう。コーディング規約やスタイルガイド、BEMやOOCMSなどのCSS設計、Sass、HTML LintやStyle Lint、アクセシビリティ、ハンバーガーメニュー等のjQueryプラグイン、などなど）
% - スタイルガイド
%   - https://fueru.info/design/html-css/google-styleguide/
%   - https://coding-factory.com/file/guideline
% - HTML Lint / Style Lint
%   https://www.google.com/search?q=htmllint+vscode&oq=htmllint&aqs=chrome.1.69i57j0i512l2j0i30l4j0i30i625j0i30l2.4762j0j7&sourceid=chrome&ie=UTF-8
% - {{TODO}} コーディングファクトリー会社案内 2016より、コーディング技術を売る要素を学ぶ
- 将来的にどのようなことがやりたいか、目指しているものがあれば
  - コーダーとして職人の道を極めて行きたいのか、それともデザイナーやプログラマー、ディレクターなど他の業務もできるようになりたいのか

#### その他

最後にポートフォリオでの一般的なアドバイスをまとめた`PDF`資料を共有します。内容はウェブデザイナー向きですが、大いに参考にして下さい。

- [ポートフォリオ制作のポイント_配布用.pdf](https://adjustacademy.com/webcoder/guidebook/f3a643dd575af9baeb1ba1d032959358/_static/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E5%88%B6%E4%BD%9C%E3%81%AE%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88_%E9%85%8D%E5%B8%83%E7%94%A8.pdf)

以上、ポートフォリオについての説明でした。卒業制作と並行してポートフォリオ作りを進めて置いて下さい。

```{hint}
卒業制作の中でおそらく読者はまた一回り大きく成長するでしょう。

その経験の中でポートフォリオに掲載する話題がないか常に観察と記録を怠らないようにしてくださいね！
```

(devtools-elements)=
## デベロッパーツールについて

卒業制作に際し、もう一歩踏み入ったデベロッパーツールの使い方も習得しましょう。

% ```{hint}
% デベロッパーツールは、自身の作成した`HTML/CSS`についてのブラウザー上での対話の場です。
% ```

デベロッパーツールが使いこなせると、不具合を修正することや新しいプロパティを試したりすることが容易になります。　

````{tip}
不具合のことをバグ（`bug`、虫。人を苛立たせるものというニュアンス）と言い、不具合を修正することをデバッグ（`debug`、虫とり）と言います。
% https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%B0
% の記事によるとコンピューター登場以前から機械の不具合のことを虫と呼んでいたことが記されています。
% またコンピューターにおいてはコンピューターの黎明期に虫が入り込んで機械が故障したことに由来しています。
````

**デベロッパーツールの使いこなし、デバッグの能力は現場でも特に求められるスキルの一つです。デベロッパーツールは機能が多いので、コーディング作業を通じて少しづつ習得するようにしましょう。**

````{dropdown} デベロッパーツールの使い方を学ぶ
```{include} cards/devtools/elements.md
```
`````

## 卒業制作「レスポンシブ対応のページの作成」

次の「昇段試験のルール」を確認の上、卒業試験に望んでください。
````{dropdown} クリックして卒業試験のルールを確認する（退校となる場合の説明があります）
```{include} cards/school/rule-of-graduation-exam.md
```
````

% Figmaから教材を選ぶ基準
% - CC BY 4.0 などの商用利用可能なライセンスであること
% - buy this が付いていない
% - 全部Figmaでいじれるもの。UIがサムネイル画像になってロックされていない。
% - 顔や人物がわかる写真を使っていない
% 
% 選んだもの
% - Responsive Design Art News Landing Page
% 	- https://www.figma.com/community/file/1095377079540950532
% 	→https://github.com/AaronMaywood/coding_sample/tree/main/website2
% - Responsive Startup Website
% 	- https://www.figma.com/community/file/1150370769219258177
% 	→https://github.com/AaronMaywood/coding_sample/tree/main/website1
% - Responsive Web Page
% 	- https://www.figma.com/community/file/992410574427069906
% こいつは全部サムネイル画像になっていて使えない
% - Tastebite - Food Recipe Website Templates & Design Systems (Community)
% 	- https://www.figma.com/file/uztxlAjVLnKHYJ6kN3mrNJ/Tastebite---Food-Recipe-Website-Templates-%26-Design-Systems-(Community)?node-id=1%3A3

以下にしめす`A.`、`B.`、`C.`の３つのレスポンシブ対応のウェブデザインのうち、**一つを選び、デザイン指示に従って`HTML/CSS`コーディングを行って下さい**。（複数の課題提出も歓迎します）

- **A.** Responsive Design Art News Landing Page
	```{figure} https://i.gyazo.com/36815a9337f1e03ad65b28082e03a7e5.png
	% https://www.figma.com/community/file/1150370769219258177
	% ttps://github.com/AaronMaywood/coding_sample/tree/main/website1
	```
- **B.** Responsive Startup Website
	```{figure} https://i.gyazo.com/c1443bce6da04492575fe8d25f225c8e.png
	% https://www.figma.com/community/file/1095377079540950532
	% ttps://github.com/AaronMaywood/coding_sample/tree/main/website2
	```
- **C.** Responsive Web Page （**原作はトルコ語版、課題に際してはこれを日本語化した素材を提供します**）
	```{figure} https://i.gyazo.com/013d997dbbd13b677c82c3a9596140de.png
	% - https://www.figma.com/community/file/992410574427069906

`````{hint}
**課題の難易度**は`A. B. C.`の順になっています。`A.`が一番簡単で、`B.`が中くらい、`C.`が高難易度です。
````{tip}
**コーディング難易度の見分け方**

コーディングの難易度を測るには、まずボリュームや繰り返しの多さ（単純さ）を見ます。
- 今回の`A.`、`B.`、`C.`は順にボリュームが増えるため、`C.`が手間がかかると判断できます。扱う要素が増えれば複雑さも増し、難易度が上がります。
- `A.`をよく見ると似たようなパーツの繰り返しが多いので比較的単純そうです。

しかし、**それ以上のことを判断するには経験が必要です。**
シンプルそうに見えてもコーディングが難しかったり、その逆のこともあるからです。

```{figure} https://i.gyazo.com/6cf1d0a653f306f39e579aec96485cbc.png
例えば、`C.`のこの部分はさりげないデザインですがコーディングは難しかったです。最初は`flexbox`で組んでみて、その後`grid`でも実装を試みるなど試行錯誤もありました。
```

経験を積むにつれ「この表示には`flex`を２つ組み合わせればすぐできそうだ」「このレイアウトはこれまでの経験にないもので、要注意だ」などの判断ができるようになります。
たくさんコーディングするなかで除々にカンを養って行きましょう。
````
`````

次にA. B. C. それぞれの細かな指示を説明します。

### A. Responsive Design Art News Landing Page の課題について

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
- 採点基準については「[](level10-scoring-criteria)」を、提出方法については「[](level10-filling-method)」を確認して下さい。

% 答え
% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website2/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/69dd79519f07998d954cdbd38f690acf.zip

### B. Responsive Startup Website の課題について

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
- 採点基準については「[](level10-scoring-criteria)」を、提出方法については「[](level10-filling-method)」を確認して下さい。

% 答え
% download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website1/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/f97b728469b2e2d539d04a78909c8777.zip

### C. Responsive Web Page の課題について

本課題は完成版の`HTML/CSS`が提供されそれを元に自分で再構築することを求めるという、`A.`や`B.`と異なった出題形式をとっています。

```{tip}
このような課題の形になったのはいくつかの理由があります。

- コーディングの一部に本カリキュラム外の知識も必要となり難易度が高いため。
- コーダーのスキルとして、自身で書くだけでなく他人の書いたソースを読みこなす力も必要であるため。（業務では既存のページを保守する仕事も多く、`HTML/CSS`を読み解くスキルが求められます）
- ページを読み解くのに役立つデベロッパーツールの使いこなしの機会を提供するため。

いずれの点においても、この教材から読者が学ぶものが多いように配慮しました😊
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
2. 完成見本
	- https://adjustacademy.com/webcoder/7d8b5ed936e7752f1011f15390242d27.zip
		```{tip}
		**2. 完成見本**の`css/style.css`は読みにくいように**難読化**しています。（難読化はソースの上だけで、デベロッパーツール上からは普通に見えます。）

		これは`CSS`をコピペして、できたつもり・理解したつもりになることを防ぐためです。
		あくまでもこの作例からデベロッパーツールを通じて学びとったことをベースに、自身の知識や考えに基づいてコーディングを行っていただくための配慮です。
		% ↓勉強したことをそのまま再現する可能性を潰すかもしれないので、この文章はボツ
		% **その結果として完成見本とは異なるコーディングになるはずです。（`CSS`は表現力が高いためにこのようなことが起こり得ます）**
		```

次のように作業を進めて下さい。

- **「2. 完成見本」** の`index.html`をブラウザーで開き、完成したページの見た目を確認してください。マージンや`CSS`の仕組みなど細かな点はデベロッパーツールで確認して下さい。また画面幅を変えてレスポンシブの様子（ブレークポイントの地点や表示のされ具合など）を観察してください。
  - この課題の作業の鍵を握るのが`Chrome`の **`デベロッパーツール`の使いこなし**です。`デベロッパーツール`を用いれば、完成見本をつぶさに観察することができます。
	  ```{tip}
	  デベロッパーツールの具体的な使用方法については「[](devtools-elements)」の記事をお読み下さい。
	  ```
  - 使用されている`CSS`に不明点があれば、復習したり調べたりして下さい。
- 次に **「1. 素材」** の素材（`index.html`や`css/style.css`）に手を加えて **「2. 完成見本」** の形になるまでコーディングして下さい。
  - 実際には **「2. 完成見本」** と **「1. 素材」** とを交互に見比べながら **少しづつ** 作業を進めて下さい。
    - いきなり全部を仕上げようとするのは無茶です。不具合が混入したときに疑う箇所が多くなりすぎるからです。`CSS`でレイアウトされる要素を一つ一つバラバラにし、一つの要素をコーディングしたら直ちにブラウザーで確認する、という操作を積み重ねれば間違えた時にそれとすぐ知ることができます。**これは複雑さを減らす方法で、プロの用いる方法です**。

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
- 採点基準については「[](level10-scoring-criteria)」を、提出方法については「[](level10-filling-method)」を確認して下さい。

% 答え
% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website3/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/d63749d940c22e2955ca01e55955f27c.zip

(level10-scoring-criteria)=
### 採点基準
1. ブラウザーの表示をみて、指示通りの表示になっているかを確認します。
2. レスポンシブ対応されているかどうかをブレークポイント前後の幅を用いて確認します。
3. 適切な`HTML`マークアップや、`CSS`コーディングが施されているかどうかを確認します。

(level10-filling-method)=
### 提出方法（検証〜提出）

- {bdg-dark}`指示`
  - 問題A. の場合 ... `website1`フォルダを自身のWebサーバーにアップロードし、ページを確認できるURLを{{OFFICE}}に提出して下さい。
  - 問題B. の場合 ... `website2`フォルダを自身のWebサーバーにアップロードし、ページを確認できるURLを{{OFFICE}}に提出して下さい。
  - 問題C. の場合 ... `website3`フォルダを自身のWebサーバーにアップロードし、ページを確認できるURLを{{OFFICE}}に提出して下さい。
- 具体的には次のようにして下さい。
	```{include} cards/school/filling.md
	```
- 以下の文言テンプレートを利用し事務局{{OFFICE}}に提出して下さい。
	```{code}
	件名：LEVEL10の卒業制作のファイルを提出します

	○○です。

	（※以下のうち、取り組んだもののURLを記載して下さい。）
	http://xxx.html.xdomain.jp/website1/index.html
	http://xxx.html.xdomain.jp/website2/index.html
	http://xxx.html.xdomain.jp/website3/index.html
	```

% おめでとうございます。卒業試験に合格しました。
%
% `website1`の実装は合格です。
% 続けて`website2`や`website3`の実装にもチャレンジしてみませんか？
% その意思があればお知らせ下さい。
%
% また、ポートフォリオ制作に着手して下さい。
% {{TODO}} ポートフォリオ制作をキャリコンがサポートする

# ポートフォリオを作る

卒業制作の課題提出が終わったら、「[](making-portfolio)」に沿ってポートフォリオ作りを進めて下さい。

その後のことは卒業制作の課題提出からの合格通知にしたがって下さい。

% {{TODO}} ポートフォリオを提出して、キャリア・コンサルタントのアドバイスを受けましょう
% - ポートフォリオは紙のものもあると便利です。
%  - ポートフォリオサイトを印刷するか、インターネット環境の無いノートPCの画面で見せられるようにする
%  - 紙版を印刷して持参する
%  - ポートフォリオサイトはまとまりのある反面、きちんと収まりすぎていて直接的に訴える力が弱いように思います。自身のプレゼン資料になるような紙の資料も用意しましょう。
% 
% - ポートフォリオサイトをグーグルの検索エンジンに露出しないようにする方法
% 	- ロボットのメタタグを設置する
% 	- {{TODO}} ベーシック認証を掛けることを検討する
%   この設定をすると提出先の人に見てもらえない可能性が出てくる

```{admonition} おしまい
本ガイドブックの役目はこれでおしまいです。
ここまで付き合っていただき、ありがとうございました😊
```
