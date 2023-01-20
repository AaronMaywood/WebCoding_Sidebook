`````{div} taskcard
````{card} 自動補完機能を使う
自動補完とはコーディングを大幅に楽にするVS Codeの入力支援機能です。
補完のヒントとなる文字を入力すると入力候補の一覧が表示されます。そこから選ぶだけでコーディングを進めることができます。
^^^
**自動補完の使い方**
![](../../images/gyazo/652ca1261858267f148c29dc91d9ab34.gif)
1. {bdg-dark}`!`を入力した段階で２つの選択肢が示されます。
2. 選択肢を選択するのが{bdg-dark}`Enter`キー(もしくは{bdg-dark}`Tab`キー)です。{bdg-dark}`↑`{bdg-dark}`↓`(上下の矢印キー)で選択肢を選ぶことができます。ここでは最初の選択を選びます。
3. 補完機能を使わない時はキャンセルできます。キャンセルする方法は次のとおりです。
  1. 無視して文を入力し続ける
  2. `ESC`キーを押して自動補完をキャンセルする

**キーワード**
自動補完はファイルの種類ごとに決められたキーワードに沿って提案が行われます。
何かを入力したらそれに応じた自然な補完候補が出るためこれらキーワードを知っておく必要はありません。
一方、上級者向けに特別なキーワードの記法**Emmet(エメット)***があります。この記法は予め習得しておく必要がありますが、生産性を高めることができます。
- Emmetについてはこれ以上触れません。Google検索で様々な記事が出てきますので、興味の有る方は調べてみて下さい。

**自動補完が発動するキーワードの例**
|キーワード|展開形|
|`!`|(HTMLの基本形)|
|`h1`|<h1></h1>|
|.classname|<div class="classname"></div>|
|link:css|<link rel="stylesheet" href="style.css">|

+++
参考記事
- https://qiita.com/mikd/items/183023f99db8954a0443
- https://zenn.dev/wtkn25/articles/vscode-emmet-setting
- https://saishono.blog/setting-close-tag/
- Emmetのキーワード一覧 https://docs.emmet.io/cheat-sheet/
- https://zenn.dev/miz_dev/articles/6cac5f2e32398d
````
`````

