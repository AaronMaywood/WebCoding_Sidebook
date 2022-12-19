# LEVEL10 卒業試験

LEVEL10は卒業試験として、卒業制作に取り組んでいただきます。

卒業試験のテーマは、自身のポートフォリオに掲載するためのページ制作です。

卒業試験の期間は3週間とします。

{{TODO}} これも参考になるはず
% 	- 付録：コーディングガイドライン例 91-95
% 	- コーディング後チェック 95


- デベロッパーツールに慣れるため、ソースコードを開示した状態で行う？→どうしても開示されたソースコードに左右されてしまう
	しかし、Figmaを使用してのハンドオフはきつい

- flexやgridレッスン
	- これはflexか？gridか？
	- flexやgridの入れ子とみなせるか？
	- flexやgridはレスポンシブである

## 卒業制作

目的

- コーディング、検証、完成の能力を示す。具体的には以下をアピールする。
	- コーディングで気をつけたこと
		- 名前
		- レスポンシブ対応
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

- スタイルガイド
  - https://fueru.info/design/html-css/google-styleguide/
  - https://coding-factory.com/file/guideline
  - BEM,OOCSSなどのCSS設計は学んでいません。これからの課題です。
- HTML Lint / Style Lint
  https://www.google.com/search?q=htmllint+vscode&oq=htmllint&aqs=chrome.1.69i57j0i512l2j0i30l4j0i30i625j0i30l2.4762j0j7&sourceid=chrome&ie=UTF-8

- jQuery プラグイン
- コーディングファクトリー会社案内 2016より、コーディング技術を売る要素を学ぶ


(再掲)
- CSS
	- 付録：コーディングガイドライン例 91-95
	- コーディング後チェック 95

次の２つから選んでマークアップ

Figmaから教材を選ぶ基準
- CC BY 4.0 などの商用利用可能なライセンスであること
- buy this が付いていない
- 全部Figmaでいじれるもの。UIがサムネイル画像になってロックされていない。
- 顔や人物がわかる写真を使っていない

選んだもの
- Responsive Startup Website
	- https://www.figma.com/community/file/1150370769219258177
	→https://github.com/AaronMaywood/coding_sample/tree/main/website1
- Responsive Design Art News Landing Page
	- https://www.figma.com/community/file/1095377079540950532
	→https://github.com/AaronMaywood/coding_sample/tree/main/website2
- Responsive Web Page
	- https://www.figma.com/community/file/992410574427069906


こいつは全部サムネイル画像になっていて使えない
- Tastebite - Food Recipe Website Templates & Design Systems (Community)
	- https://www.figma.com/file/uztxlAjVLnKHYJ6kN3mrNJ/Tastebite---Food-Recipe-Website-Templates-%26-Design-Systems-(Community)?node-id=1%3A3

[TODO] 素材のダウンロードの仕方
[TODO] 幅やマージンの見方

## ポートフォリオ制作

- 作品を掲載するポートフォリオサイトを制作する
- 作品を準備する
  - レスポンシブ対応したページ
  - 検証内容を記す
- ポートフォリオを印刷するか、インターネット環境の無いノートPCの画面で見せられるようにする


- 初心者から OK 「Webサイト・ポートフォリオの作成手順」 P.35-

## 問題「レスポンシブ対応のページの作成」

以下にしめす３つのデザインのうち、任意のデザイン（一ページ）を実装して下さい。

- A. Responsive Design Art News Landing Page
	- https://www.figma.com/community/file/1150370769219258177
	→https://github.com/AaronMaywood/coding_sample/tree/main/website1
- B. Responsive Startup Website
	- https://www.figma.com/community/file/1095377079540950532
	→https://github.com/AaronMaywood/coding_sample/tree/main/website2
- C. Responsive Web Page
	- https://www.figma.com/community/file/992410574427069906

それぞれの細かな指示を説明します。

### A. Responsive Startup Website

素材のZIPファイルを以下のURLからダウンロードして下さい。
ZIPを展開したら、その中にREADME.mdというファイル名のテキストファイルがあります。これをVS Codeで開いて下さい。
README.md のなかに細かな指示が書かれていますので、それに従って実装して下さい。

% 問題
% download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website1/archive/refs/heads/master.zip
https://adjustacademy.com/webcoder/8dad759b580d31d4024ef84ba896bba5.zip

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
  - レスポンシブ対応ができているかどうかの確認もお願いします。前後の幅での確認も行って下さい。
	ブレークポイントの画面幅を確認するには、デバイスモードを使用して下さい。
	```{figure} https://i.gyazo.com/2fe5c0c2484ef3d95f05671f05bf6afa.png
	デベロッパーツールから、デバイスモードの表示を選び、「レスポンシブ」を選択します。
	```
	```{figure} https://i.gyazo.com/ada924f38b275b33bff681b9ff309eaa.png
	確認したい画面幅を入力します。
	```

% 答え
% download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website1/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/f97b728469b2e2d539d04a78909c8777.zip

### B. Responsive Design Art News Landing Page

素材のZIPファイルを以下のURLからダウンロードして下さい。
ZIPを展開したら、その中にREADME.mdというファイル名のテキストファイルがあります。これをVS Codeで開いて下さい。
README.md のなかに細かな指示が書かれていますので、それに従って実装して下さい。

% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website2/archive/refs/heads/master.zip
https://adjustacademy.com/webcoder/eaa4b6e1370c62fece3ba9a65138df0a.zip

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
  - レスポンシブ対応ができているかどうかの確認もお願いします。前後の幅での確認も行って下さい。
	ブレークポイントの画面幅を確認するには、デバイスモードを使用して下さい。
	```{figure} https://i.gyazo.com/2fe5c0c2484ef3d95f05671f05bf6afa.png
	デベロッパーツールから、デバイスモードの表示を選び、「レスポンシブ」を選択します。
	```
	```{figure} https://i.gyazo.com/ada924f38b275b33bff681b9ff309eaa.png
	確認したい画面幅を入力します。
	```

% 答え
% $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/Website2/archive/refs/heads/answer.zip
% https://adjustacademy.com/webcoder/69dd79519f07998d954cdbd38f690acf.zip

### {{TODO}} C. Responsive Web Page

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

% `website1`の実装は合格です。
% 続けて`website2`や`website3`の実装にもチャレンジしてみませんか？
% その意思があればお知らせ下さい。

% おめでとうございます。卒業試験に合格しました。

