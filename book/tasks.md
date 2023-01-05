# 制作管理表

|LEVEL|ガイドブック制作（荒いバージョン）|テキストのページとの対応、教材の確認|昇段テスト|検証|
|:---|:---|:---|:---|:---|
|カリキュラム説明(intro.md)|{{TODO}}| - | - |{{TODO}}|
|準備(equip.md)|{{TODO}}| - | - |{{TODO}}|
|webserver.md WebサーバーとFTP|{{DONE}}|-|-|{{TODO}}|
|LEVEL1.md HTML(1)|{{DONE}}|{{DONE}}|{{DONE}}|{{TODO}}|
|LEVEL2.md HTML(2)|{{DONE}}|{{DONE}}|{{DONE}}|{{TODO}}|
|LEVEL3.md CSS基礎|{{DONE}}|{{DONE}}|{{DONE}}|{{TODO}}|
|LEVEL4.md ボックスモデル|{{DONE}}|{{DONE}}|{{DONE}}|{{TODO}}|
|LEVEL5.md float|{{DONE}}|{{DONE}}|{{DONE}}|{{TODO}}|
|LEVEL6.md Flexbox|{{DONE}}|{{DONE}}|{{DONE}}|{{TODO}}|
|LEVEL7.md Position|{{DONE}}|{{DONE}}|{{DONE}}|{{TODO}}|
|LEVEL8.md お茶サイト|{{DONE}}|{{DONE}}|{{DONE}}|{{TODO}}|
|LEVEL9.md スマートフォン|{{DONE}}|{{DONE}}|{{TODO}}|{{TODO}}|
|昇段テストの受験方法|{{DONE}}|-|-|{{TODO}}|
|cards/vscode/go-live.md Go Liveの方法 |{{DONE}}|-|-|{{TODO}}|
|animation （扱わない予定）|（扱わない）|-|-|-|
|Sass （扱わない予定）|（扱わない）|-|-|-|

## 2023/01月
|LEVEL|ガイドブック制作|教材の確認|昇段テスト|検証|
|:---|:---|:---|:---|:---|
|LEVEL10.md 卒業制作|{{DONE}}|-|-|{{TODO}}|
|LEVEL10.md ポートフォリオ制作|{{HALF}}|-|-|{{TODO}}|
|フィードバック反映|{{TODO}}|{{TODO}}|{{TODO}}|{{TODO}}|
|アジャバイト制作物採点|{{TODO}}|{{TODO}}|{{TODO}}|{{TODO}}|
|画像取り込み(Gyazo→ダウンロード）|{{TODO}}|{{TODO}}|{{TODO}}|{{TODO}}|

## 優先度低い
|LEVEL|ガイドブック制作|教材の確認|昇段テスト|検証|
|:---|:---|:---|:---|:---|
|LEVEL9.md Green Camp|{{TODO}}|{{TODO}}|{{TODO}}|{{TODO}}|
|cards/devtools/ デベロッパーツール|{{TODO}}|{{TODO}}|{{TODO}}|{{TODO}}|
|Gridレイアウト|{{TODO}}|{{TODO}}|{{TODO}}|{{TODO}}|

# サンプルが命

適切なサンプルさえあれば、速度を稼げる。
その逆もしかり。
そして適切なサンプルの用意にはかなりの時間がかかる。
また、サンプルが固まっていないのに解説を書くととても大きな代償を払うことになる。

# 課題やTODOタスクメモ

- {{TODO}} デザイナーから素材を受け取る
	https://github.com/AaronMaywood/WebCodingTextbook/blob/main/book/LEVEL2.md#todo-%E3%83%87%E3%82%B6%E3%82%A4%E3%83%8A%E3%83%BC%E3%81%8B%E3%82%89%E7%B4%A0%E6%9D%90%E3%82%92%E5%8F%97%E3%81%91%E5%8F%96%E3%82%8B
- {{TODO}} 空白文字の扱い
	https://github.com/AaronMaywood/WebCodingTextbook/blob/main/book/LEVEL2.md#todo-octiconchecklist-html%E6%96%87%E6%B3%95%E7%A9%BA%E7%99%BD%E6%96%87%E5%AD%97%E3%81%AE%E6%89%B1%E3%81%84
- {{TODO}} 外部リンクに _blankを付ける方法はあるか？
- {{TODO}} 用語STAGEをどうするか
- {{TODO}} テストプレイが必要、そうしないと何が足りないかがわからない
- {{TODO}} 各テキストに必要な素材を配付すること

- 動画は情報量が多くて分かりやすい！
		具体的な物を示し、かつどこの話題かを示すカーソルや範囲がある
		その話題を軽く流すべきかを判断する時間の使い方がわかる
		間違えてみせることもできる

- セレクタ―←伸ばし棒を置換する必要あり
	ノート←この伸ばし棒に置換すること

- リソース
	- 教科書
		- HTML5
		- CSS3
		- お茶サイト
		- 初心者からOK「スマートフォンサイトテキスト」 ver.1.0 F　22.06.15　
		- (jQuery講義ノート)
		- (Sass)
	- 試験
		- HTML/CSS筆記試験

- レベルごとに配付する範囲を変えるにはどうしたらいいか？
	- アカデミーのテキストをページをバラバラにして再構成するのが理想的だが、そうするとテキスト改訂毎に見直しが必要になる。ページがバラバラだと利用者の使い勝手が悪い
	- 安村が作成するレベル毎のカリキュラムの部分だけを分冊にするので行きたいが、可能だろうか？
- 教科書をMoodleに載せ替えることはできるか？
	- Jupyter Book で作成したウィジェットを掲示できる？（運用コストをあまり上げるたくはないので、その点も要考慮）
- 別の視点から説明するとわかりやすさUP
- アカデミーのテキストにないもの
	- Grid
	- デベロッパーツール
		HTMLが見れます
		CSSが見れます
		指定内容が確認できます
	- favicon
	- OGP,Twitter:card
		https://and-ha.com/coding/meta/
		https://www.tohoho-web.com/html/meta.htm
	- ブラウザキャッシュ
		- スーパーリロード
	- リセットCSS
	- フォントファミリー、 WEBフォント
		- 標準設定
	- 中央揃えのテクニック
	- リンク擬似クラス  アンカータグの色の変更
		a:link  {
		　color: blue;
		}
		a:visited  {
		　color: purple;
		}
		a:hover  {
		　color: pueple;
		}
		a:active  {
		　color: red;
		}
    - vw・・・ビューポート幅の 1%（100vwは画面横幅いっぱい）
		vh・・・ビューポート高さの 1%（100vhは画面縦幅いっぱい）
	- <meta name="robots" content="noindex,nofollow">
		テストでサーバーへアップする時の注意
		Google 等の検索エンジンに 索引させない。
		検索結果に載せないようにするための一行。
		検索させたいときは、　　 all
	- TOPへ戻るボタン
	- ページ内リンク
	- 検証方法→CSS 95Pに以下があった
		> ■コーディング後チェック
		> ・ 文法チェック
		> 	（文法チェックツール）を用いて検証テストを行う。
		> ・ ブラウザ目視チェック
		> 	表示のズレ、リンク先のチェック等、目視でのチェックが必要な項目をブラウザごとに検証する。
		> 	検証ブラウザは案件ごとに異なる。
- 用語や基礎知識は眠くなる
- いつ教材を開くかわからない（特定の教材以外は、テキストから指示がない）
- アカデミーの求職者支援訓練用の表現がある↓CSS3 P.19
	受講席の PC のブラウザを独自のフォント・サイズに設定することは可能ですが、それを
	行うと、席ごとに異なった書体・サイズのプレビューで表示される可能性があるので、設定しないでください。
- 巽氏が作った資料は圧倒的に読みやすい
	説明ではなく、具体例だけで説明している



# 課題

- meta name="author" はSEOに必要か？→不要
	標準メタデータ名には、keywordsとともにサポートされている
	https://developer.mozilla.org/ja/docs/Web/HTML/Element/meta/name
	https://sd-webworks.com/column/meta-author/
		現状、SEO上では影響しないものと考えられています。

- 評価依頼や、ヘルプ依頼をどうするか。同様に、課題提出をどうするか。
   https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter#%E8%A9%95%E4%BE%A1%E3%81%BE%E3%81%9F%E3%81%AF%E3%81%95%E3%82%89%E3%81%AA%E3%82%8B%E3%83%98%E3%83%AB%E3%83%97
- 卒業制作をどのようにするか
- 全体の学習スケジュールを３ヶ月未満にできるか
	- 前提: ３ヶ月間、毎日8h勉強するくらいの時間を取るものとする。仕事をしながら片手間に３ヶ月ではない。（可能ならばそうしたいのではあるが、さすがに時間が足りないのでは？)
- テストプレイを依頼する

# 作業一覧

- テキストの入手
	- [TODO] 試験の入手
- レベル分けし、レベルデザインする
	- ひとまずLEVEL10までとした→卒業したらLEVEL11となる
- 検証（テストプレイ、試験運用）ができるようになるまでスケジュール感目安
    - その後はテストプレイしてもらいながら都度修正（これはスケジュール外）
