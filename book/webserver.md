# 受講準備をする

この章はカリキュラムを開始する準備段階です。以下の指示に従い、各種設定等を行ってください。

- [](web-server)
- [](filezilla)
  - [](upload-to-webserver)
- [](installing-chrome)
- [](file-ext)
- [](zoom)
  - [](zoom-sharing)
  - [](zoom-remote)


(web-server)=
## ウェブサーバーを用意する

ウェブページの制作は読者自身の`PC`上で行っていただきますが、完成したウェブページを昇段試験を提出したり、ポートフォリオに掲載するなど**他人と共有するには**{term}`ウェブサーバー`が必要です。

```{important}
{term}`ウェブサーバー`は、本ガイドブックで提供する**昇段試験**のファイル提出場所として使用します。以下の手順に従って、{term}`ウェブサーバー`を準備し、使えるようにしておいて下さい。
```

{term}`ウェブサーバー`はインターネット上に存在するコンピューターで、{term}`ウェブページ`を公開する（共有する）場所を提供します。

``````{admonition} 用語
`````{glossary}
サーバー
    サーバー（**serv**er）とは「サービス（**serv**ice）担当のコンピューター」という意味です。
    サーバーは何らかのサービスの提供者という意味です。
    
    ````{tip}
    生活におけるサーバーの例として、飲み頃のビールをサービスするビールサーバー、暖かなコーヒーを提供するコーヒーサーバーがあります。これらのように、「サーバー」は「何らかを供給するもの」というニュアンスを持つ用語です。
    ```{figure} https://images.unsplash.com/photo-1516458464372-eea4ab222b31?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    ビールサーバー。
    <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E3%82%B0%E3%83%A9%E3%82%B9%E3%82%92%E6%8C%81%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E4%BA%BA-JCIJnIXv7SE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>の<a href="https://unsplash.com/ja/@gonzaloremy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gonzalo Remy</a>が撮影した写真
    ```
    ```{figure} https://images.unsplash.com/photo-1605787225918-9d1e6dd8561c?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    コーヒーサーバー。
    <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E8%8C%B6%E8%89%B2%E3%81%AE%E6%B6%B2%E4%BD%93%E3%81%8C%E5%85%A5%E3%81%A3%E3%81%9F%E9%80%8F%E6%98%8E%E3%81%AA%E3%82%AC%E3%83%A9%E3%82%B9%E3%81%AE%E3%83%94%E3%83%83%E3%83%81%E3%83%A3%E3%83%BC-QZq3DBHZmQk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>の<a href="https://unsplash.com/ja/@goran_ivos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Goran Ivos</a>が撮影した写真
    ```
    ````

ウェブサーバー
    サーバーの中でも、特に「{term}`ウェブ`」の情報（{term}`ウェブページ`）を提供するサーバーを「ウェブサーバー」と言います。

ウェブページ
    {term}`HTML`で書かれた{term}`ウェブ`上に存在する文書のことです。

`Web`
ウェブ
    ブラウザーを用いて閲覧することのできる、インターネット上の文書システムのことです。
    ウェブ上にある文書の特徴は、{term}`ハイパーリンク`（単にリンクとも）を通じて異なる文書へジャンプすることのできる点にあります。
    ````{tip}
    ウェブ（`Web`）は「`World Wide Web`（世界規模の蜘蛛の巣）」の略語で、ウェブ上の文書がハイパーリンクを通じて網目のように接続されている様子から取られた用語です。
    ```{figure} https://upload.wikimedia.org/wikipedia/commons/b/b9/WorldWideWebAroundWikipedia.png
    ウィキペディアのトップページを中心に据えてそれに紐づくページを可視化した図で、複雑にからみあった様子から蜘蛛の巣に例えられています。
    （https://ja.wikipedia.org/wiki/World_Wide_Web より）
    ```
    ````
`````
``````

{term}`ウェブサーバー`は、一般的にはサーバー業者から借りる形になります。
{term}`ウェブサーバー`には格安のレンタル（レンタルサーバー）から、業務用の高価で高性能なものまで様々な形式があります。

ここでは無料で借りることのできる`シン・クラウド for Free`というサービスを紹介します。

`シン・クラウド for Free`の{term}`ウェブサーバー`を借り、借りた{term}`ウェブサーバー`に制作したコンテンツを`Filezilla`というソフトを使ってアップロードする手順までを説明します。

### 無料のウェブサーバー（`シン・クラウド for Free`）を借りる

ウェブページを公開するために{term}`ウェブサーバー`を借りましょう。

```{tip}
**すでに{term}`ウェブサーバー`を借りている人はそちらを利用してもかまいません**。

ウェブページを公開するために必要な{term}`ウェブサーバー`はどれでも（どの業者が提供するものでも）かまいません。

本書では`シン・クラウド for Free`の場合について説明します。
```

学習用に筆者がオススメするのは`シン・クラウド for Free`です。

```{tip}
**なぜ`シン・クラウド for Free`ですか？**

- 国内のサービス
- 無料
- 広告が挿入されない（`HTML/CSS`が改変されないために特に重要な要件です）

上記の３つの条件を満たすからです。
```

```{attention}
**`シン・クラウド for Free`は３ヶ月ごとに期限延長の更新手続きが必要です**

`シン・クラウド for Free`を利用する上での重要な注意点は、３ヶ月ごとに利用期限の延長手続きを行う必要があることです。登録したメールアドレス宛に案内が来ますので、**メールを見落とさないように**しましょう。

> シン・クラウド for Freeではご利用にあたり、3ヶ月間の利用期限を定めています。
> 継続して利用する場合、3ヶ月ごとに契約を更新する必要があり、契約更新により利用期限が3ヶ月延長されます。 契約更新は利用期限の2ヶ月前から可能です。
>
> https://www.xfree.ne.jp/manual/man_order_expiration_update.php より
```

`シン・クラウド for Free`を導入する方法を説明します。

#### レンタルサーバーを申し込む

`シン・クラウド for Free`の公式ドキュメント「[無料レンタルサーバーのお申し込み](https://www.xfree.ne.jp/manual/man_order_user.php)」に従って会員情報を入力し、設定完了メールを受信してください。

(check-email-content)=
#### メールの内容を確認する

お申し込み手続きを通じてメールは２通届きます。

1. `【シン・クラウド for Free】■重要■シン・アカウント登録完了のお知らせ`
1. `【シン・アカウント】■重要■サーバーアカウント設定完了のお知らせ`

この２通のメールのうち、**重要なのは後者 2. の「サーバーアカウント設定完了のお知らせ」です**。

````{tip}
**2. の「サーバーアカウト設定完了のお知らせ」** には様々な情報が記載されていますが、この後の設定で必要な情報は以下の３つです。

- ユーザーアカウント情報
- サーバーアカウント情報
- {term}`FTP`情報

具体的には以下のように記載されています。確認しておいて下さい。

```
...（略）...

▼ユーザーアカウント情報

　シン・アカウントID　　　　 ： wpxw****
　メールアドレス　　　　　　　： yasumura@adjust.ne.jp
　シン・アカウントパスワード ： ******
　ログインURL　　　　　　　　 ： https://secure.wpx.ne.jp/wpxapanel/login/cloudfree/

...（略）...

▼サーバーアカウント情報

　サーバーID　　　　　： cf161188
　サーバーパスワード　： ?????

　サーバー番号　　　　： sv48.cloudfree.ne.jp サーバー
　初期ドメイン　　　　： cf161188.cloudfree.jp

　サーバーパネル　　　： https://secure.wpx.ne.jp/wpxapanel/login/cloudfree/server/

...（略）...

　■FTP情報
　--------------------------------------------------------
　FTPホスト名（FTPサーバー名）　　： sv48.cloudfree.ne.jp
　FTPユーザー名（FTPアカウント名）： cf161188
　FTPパスワード　　　　　　　　　 ： ???????
　--------------------------------------------------------
```
````

#### レンタルサーバーの`SSL`の設定を行う

以下のドキュメントを参照して、「無料独自{term}`SSL`設定」を設定して下さい。

- https://www.xfree.ne.jp/manual/man_server_ssl.php

```{hint}
目次のうち以下の手順までを実行してください。

- 無料独自`SSL`の設定方法

    1. 「`SSL`設定」をクリック
    2. 変更ボタンを「ON」にする
    3. 設定完了

この後の「他社サーバーですでに運用中のサイトに対して無料独自`SSL`を事前に設定する」以降は**無視してください**。
```

`````{admonition} 用語
````{glossary}
`SSL`
    `SSL`はブラウザーとウェブサーバーの間の通信を暗号化するなどのセキュリティを提供する機能です。

    ```{tip}
    `SSL`には「[シン・クラウド or Free | HTTP/2の利用方法](https://www.xfree.ne.jp/manual/man_server_http2.php)」で説明されているように表示速度を向上させる副次的効果もあります。
    ```

    `SSL`を有効にしたウェブサイトでは`URL`の先頭が`http://`から`https://`へと変化し、`SSL`をサポートしていることを表します。
    
    ```
    http://example.com/       （SSLに非対応であることを表すURLです）
    
    ↓SSLを有効化すると次のURLに変化します
    
    https://example.com/      （SSLに対応していることを表すURLです）
    ```
    
    `SSL`の設定は検索エンジン最大手の`Google`が推奨していることもあって、今ではほとんどのウェブサイトが`SSL`を設定しています。この慣習に則って、`SSL`化を行っておきましょう。

    % https://www.nic.ad.jp/ja/newsletter/No68/0800.html
    % 一つめのALPNとは、RFC7301 Transport Layer Security（TLS） Application-Layer Protocol Negotiation Extensionで定義されているTLS拡張です。 ALPNでは、図4のようにTLSハンドシェイク中に使用するアプリケーションレイヤプロトコル、 ここではHTTP/2を使用するかどうかのネゴシエーションを行います。 TLSの通信が前提ですので、httpsの場合に使用できます。
````
`````

#### ３時間ほど待つ

ここまでの手順を行った後、設定が反映されるまでに１〜３時間ほどの時間がかかります。

````{hint}
待たずに次の手順を実行した場合、正しい画面が表示されなかったり、手続きに失敗したりします。

```{figure} https://i.gyazo.com/d90d9fd982253ca5d60a5eb4457bf4d5.png
こんなエラー画面になったりします...
```
````

以降の手順を進めて構いませんが、**`シン・クラウド for Free`にアクセスするように指示されたら３時間待ってから行って下さい**。

(filezilla)=
## FileZilla（FTP）

{term}`ウェブサーバー`のレンタルが終わったら、今度はそのレンタルサーバーにファイルをアップロードする手段を用意しましょう。

サーバーにファイルをアップロードするには{term}`FTP`を利用します。

`````{admonition} 用語
````{glossary}
`FTP`
    `FTP`はサーバーにファイルをアップロードするための仕組みです。

    `FTP`（`File Transfer Protocol`、ファイル転送規約といった意味）は、自身のコンピューターからインターネット上のコンピューター（{term}`サーバー`のこと）にファイルを送ったり、受け取ったりするための一般的なやり方です。

    これには、「アップロード」と「ダウンロード」という基本的な作業があります。アップロードはあなたがファイルを送ることで、ダウンロードは相手からファイルを受け取ることです。

`FileZilla`
    インターネットを閲覧するのに「`Google Chrome`」が必要なように`FTP`を実施するには`FTP`を実施するソフトウェアが必要です。
    `FileZilla`（ファイルジラ）は`FTP`の機能を備えたソフトウェアの一例です。
    ```{figure} https://upload.wikimedia.org/wikipedia/commons/0/01/FileZilla_logo.svg
    `FileZilla`のロゴ。（https://ja.wikipedia.org/wiki/FileZilla より）
    ```
````
`````

{term}`FTP`を利用するには、{term}`FTP`用のアプリケーションが必要です。

{term}`FTP`を行うアプリケーションとして、`Windows`/`Mac`両方で使用できる{term}`FileZilla`（ファイルジラ）という無料で利用できるアプリを紹介します。（ただし説明は`Windows`の場合のみで行います）

### FileZillaのダウンロード

https://filezilla-project.org/ をクリックして、{term}`FileZilla`の公式トップページを開きます。

```{figure} images/gyazo/af9e9705a2084ee1970528eb4bb5c44e.png
公式サイトに来ました。
左側のボタン「Download FileZilla Client」をクリックします。
```

```{figure} images/gyazo/b3e51d964cc711d7b441c9a53691f268.png
「Download FileZilla Client」をクリックします。
```

```{figure} images/gyazo/c44b6b06a2e1f9d884d04c2bd3745f3e.png
どの{term}`FileZilla`をダウンロードするかを聞いてきます。**一番左**の「`Download`」ボタンをクリックして、通常版（英語版マニュアルなし）を選択します。
```

```{figure} images/gyazo/338ffba753bdc3b5f7537d740d809240.png
ダウンロードが開始されました。
```

### FileZillaのインストール

しばらくしてダウンロードが終わったら、ダウンロードしたファイル（ダウンロードフォルダに`FileZilla_3.62.0_win64_sponsored2-setup.exe`のようなファイル名で有るはずです）をダブルクリックしてインストールを開始して下さい。

```{hint}
ファイル名`FileZilla_3.62.0_win64_sponsored2-setup.exe`に含まれる **「`_3.62.0_`」という表記は{term}`FileZilla`のバージョン番号です**。ダウンロード時期によりこの番号は変化しますのでご了承下さい。
```

**最初の画面では、現在使用している`Windows`のユーザーの権限によって異なる画面となります。どちらの画面かを確認して進めて下さい。**

- ユーザーが管理者(`Administrator`)権限の場合
	```{figure} images/gyazo/d82f8a79b22b00bae2fc4e2892dedd92.png
	「はい」を選択して下さい。
	```
- ユーザーが一般の場合
	```{figure} images/gyazo/bebea921b95e19dcc543be6988c460ed.png
	管理者のパスワードを入れ、「はい」を選択して下さい。
	**「いいえ」をクリックしないで下さい。**（「いいえ」をクリックしてインストールを進めると途中でエラーになり、最初からやり直しになります。）
	```

（この後の画面は管理者と一般ユーザーで同一の画面です。）

```{figure} images/gyazo/04c2d4be2cea180bf7fef18219aa2d2a.png
ライセンス（利用許諾書）が表示されます。利用は無料ですが、使用する上で起こったトラブル（たとえばサーバーにアップした自分のファイルを誤って消してしまうなど）については作者は保証できません等という案内が行われています。**読者の責任において利用するようにお願いします。** よろしければ「I Agree」（同意します）をクリックして下さい。
```
```{figure} images/gyazo/bf93a1caf0d3c7b91b1e906d1325e028.png
スポンサーの宣伝です。
（`Brave`というブラウザー（あるいは**他のソフトのこともあります**）を一緒にインストールするかを尋ねています。）
{term}`FileZilla`以外は必要ありません。不要なので **「Decline」（断ります）を選択** のうえ、「Next」をクリックします。
```

```{figure} images/gyazo/5e8bb86477bdd455438e4dada7699280.png
`Windows`の全ユーザー（「Anyone who uses this computer(all users)」）が使えるようにするか、自分だけ（「Only for me」）かを選択できます。
それほど重要な選択ではありません。そのまま「Next」をクリックします。
```

```{figure} images/gyazo/815efa2874c6028c3d5703198578db7b.png
（インストールするものを選択できます。）そのまま、「Next」をクリックします。
```

```{figure} images/gyazo/a132ab5f77b307163670ccbc70bd1323.png
（インストール先を聞いてきます。）そのまま「Next」をクリックします。
```

```{figure} images/gyazo/b5ea57b3c8d6ab7dc26fa962ac7ba5a5.png
（インストール時に登録するスタートメニュー上のフォルダ名を聞いてきます。）
そのまま「Install」をクリックします。
```

```{figure} images/gyazo/b5434f0854c6eea7235f2d6ba6236a24.png
（インストール中です）
```

```{figure} images/gyazo/c7a8cadfa3afaa4688edc40e468debc1.png
インストールが完了しました。「Finish」をクリックします。
「start FileZilla now」にチェックが入っているので、「Finish」をクリックすると同時に{term}`FileZilla`が起動します。
```

````{attention}
```{figure} images/gyazo/643724f48639dec4a65ad0e006c42ecf.png
「Finish」クリック後にこのエラーが出ることがありますが、そのまま「OK」を押して下さい。{term}`FileZilla`は問題なく起動します。
```
````

インストールが終わり、{term}`FileZilla`が起動しました。

```{figure} images/gyazo/06149bcffabf6be13361eccb3d10e68b.png
ポップアップで表示される「FileZillaにようこそ」は「OK」をクリックして閉じます。
```

### `FileZilla`へアップロード先のサーバーを設定する

以下のドキュメントを参照して「{term}`FileZilla`の設定」を行って下さい。

- https://www.xfree.ne.jp/manual/man_ftp_filezilla_setting.php

```{hint}
目次のうち、以下の手順を実施して下さい。

- FileZillaの設定
    1. ダウンロード、インストール
    2. 「サイトマネージャ」をクリック
    3. 「新しいサイト」をクリック
    4. サイト名を設定
    5. FTP情報を入力
    6. 証明書に関する確認画面が表示される場合

この後に続く以下の手順は無視して下さい。

- 追加したFTPアカウントでの設定方法
```

```{figure} https://i.gyazo.com/a3a244f23765d9fc3ac5a7f1bf9cc3f1.png
この操作は任意ですが、登録済みのサイト名を「名前の変更」から「`シン・クラウド無料サーバー`」等と自分の分かる名前に変更しましょう。
```

設定が終わったら、一度{term}`FileZilla`を終了しておいてください。

(upload-to-webserver)=
### サンプルページをウェブサーバーにアップロードして確認する（FileZillaの使い方）

{term}`ウェブサーバー`にファイルをアップロードして、ページが公開できるかを確かめましょう。

#### アップロードするファイルを用意する

アップロードするファイルは何でもいいですが、取り急ぎ「こんにちは！」と表示するだけの単純なHTMLを用意しました。

次の{term}`URL`から{term}`ZIP`ファイルをダウンロードして下さい。
- https://github.com/AaronMaywood/simplepage/archive/refs/heads/master.zip

`````{admonition} 用語
````{glossary}
`ZIP`
    `ZIP`（ジップ）ファイルは、ファイルやフォルダーを圧縮してまとめた圧縮ファイルの形式です。
    
    `ZIP`形式は、複数のファイルを一つのファイルにまとめ、ファイルサイズを縮小して保存することができるため、他人とのデータのやり取りやバックアップなどに広く使用されています。

    `ZIP`ファイルは`.zip`という拡張子を持ちます。
    **他人から`.zip`ファイルを提供されたら、圧縮されたファイルを元に戻す「展開」という操作を行ってオリジナルデータを復元するようにして下さい。**

    % 名前の由来
    % https://ja.wikipedia.org/wiki/ZIP_(%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88)
    % 「zip」 （「速さ」を意味する） という名前はフィル・カッツの友人であるロバート・マホーニーの提案によるものであり、従来から有るARCやその他の圧縮フォーマットの圧縮時間よりも、自分たちのプロダクトの方が速いということをほのめかすという意図を持っていた。~
````
`````

`ZIP`ファイルがダウンロードできたら、展開してオリジナルデータを入手して下さい。

```{tip}
**`Windows`での`ZIP`ファイルの展開方法**

- `ZIP`ファイルがあるフォルダに移動します。
- `ZIP`ファイルを右クリックします。
    - コンテキストメニューから「すべて展開...」を選択します。
    - 展開先のフォルダを確認し、「展開」ボタンをクリックします。

これにより、`ZIP`ファイルが指定したフォルダに展開されます。

**`Mac`での`ZIP`ファイルの展開方法**

- `ZIP`ファイルがある場所に移動します。
- `ZIP`ファイルをダブルクリックします。

これだけで、`ZIP`ファイルが展開され、元のファイルやフォルダーが同じ場所に生成されます。
```



```{figure} images/gyazo/3506e6ac27bdee843ca3c159a58f0d81.png
展開すると、`simplepage-master`というフォルダが手に入ります。
```

```{figure} images/gyazo/2ee694b3a24ea4e47be2f0aad973b35d.png
`simplepage-master`フォルダの中には`README.md`（説明文、使用しません）と`index.html`（ウェブページ）の２ファイルがあることを確認して下さい。
```

#### `FileZilla`を使ってサーバーにファイルをアップロードする

```{figure} https://www.xfree.ne.jp/assets/images/manual/man_ftp_filezilla_setting_1.png
{term}`FileZilla`を起動し、「ファイル」→「サイトマネージャ」をクリックしてください。
```

```{figure} https://i.gyazo.com/a3a244f23765d9fc3ac5a7f1bf9cc3f1.png
サイトマネージャーに登録済みのサイト名を選び、右下の「接続」ボタンをクリックして下さい。
```

```{figure} https://i.gyazo.com/d9fd64092f9cbb6aa4a838870b4aa207.png
接続が完了したら、**右側に**「`cf161188.cloudfree.jp`」（借りたサーバーのサーバー`ID`名）フォルダと、「`ssl`」というフォルダが見えていることを確認して下さい。
```

```{figure} https://i.gyazo.com/b48ffe6f7bc48302f9b3a93abde2b041.png
なお、{term}`FileZilla`の画面は左右に別れて構成されており、このうちリモート側と書かれた右側のエリアがレンタルサーバー内のフォルダを表します。以後 **{term}`FTP`の作業ではこの右側のエリアを操作することになります**。
```

```{figure} https://i.gyazo.com/513e9854d47cb57c9c8abf31275b8d1b.png
右側のエリアを操作して、「`cf161188.cloudfree.jp`」（←実際には借りたサーバーのサーバー`ID`名です）のフォルダの中に入り、さらに「`public_html`」というフォルダに入って下さい。
**図は`public_html`フォルダの中まで入った時の様子です**。
`.htaccess`、`default_page.png`、`index.html`のファイル名が表示されればここまでの操作は`OK`です。
```

```{hint}
**公開フォルダ「`public_html`」**

`シン・クラウド for Free`では、`public_html`フォルダの中に置かれたファイルのみをインターネット上に公開します。

作成したファイルはこのフォルダの中に格納することが必須です。

なお、サーバーの中にある他の様々なフォルダはいじらないようにしてください。
ファイルをいじっていいのは、`public_html`フォルダの中だけです。
```

用意した`simplepage-master`をサーバーにアップロードします。
```{figure} images/gyazo/62d58b6c8f503f915bfc9daf321a3d61.png
アップロードは、右側のサーバー側の領域にドラッグ＆ドロップするだけです。
```

```{figure} images/gyazo/34937dfc8907206986043e4794a2654d.png
サーバーにアップロードされました。`simplepage-master`が見えています。
```

```{figure} images/gyazo/f69c05353ec1017954df18c1b018d73d.png
アップロードが終われば、{term}`FileZilla`は閉じてかまいません。
```

### ブラウザーでアップロード済みページを閲覧する

次に、ブラウザーを利用してアップロードしたページを閲覧してみましょう。

サーバーにアップロードしたページを閲覧するには、アップロードしたファイルに対応する **`URL`を組み立てる必要があります**。

`````{admonition} 用語
````{glossary}
`URL`
    `URL`（`Uniform Resource Locator`）は、{term}`ウェブ`上の{term}`リソース`（文書、画像、動画など）の場所を示すための住所（アドレス）です。

    ```{hint}
    以下は典型的な`URL`の例です：

    - https://www.example.com/path/to/resource.html
    ```

    `URL`は次の要素から構成されます：
    
    ```
    [プロトコル]://[サーバー名]/[パス（フォルダ名/ファイル名）]
    ```

    - プロトコル（`Protocol`）: {term}`リソース`にアクセスするための通信方法のことで、代表的には`http`と`https`があります。近年、{term}`SSL`を有効にして`https`を利用することが一般的になりました。
    - ホスト（`Host`）: {term}`リソース`が存在するサーバーの名前（ドメイン名）のことです。
    - パス（`Path`）: {term}`リソース`のファイル名や、サーバー上のどのディレクトリにあるかを指定します。

    ```{hint}
    - https://www.example.com/path/to/resource.html
    
    この`URL`は、プロトコルとして`https`を使用しており、`www.example.com`という名前のサーバー上に`/path/to/`というフォルダがあり、その中に`resource.html`というファイル名のページがあることを示しています。
    ```

リソース
    リソース（`Resource`）とは資源という意味で、{term}`ウェブ`におけるリソースは、文書、画像といった**各種ファイル**のことを指します。
````
`````

次の「ご参考：アップロードしたファイルをブラウザで確認する際のURL」のドキュメントを参照して、ご自身の借りたサーバーの{term}`URL`を組み立てましょう。

- https://www.xfree.ne.jp/manual/man_ftp_setting.php#link-b1

実際の組み立て方を説明します。

今回組み立てる{term}`URL`のテンプレートは以下のとおりです。

```
https://[サーバー名]/[フォルダ名]/[ファイル名]
```

- サーバー名（`ホスト名`あるいは`ドメイン名`とも）は契約した「サーバー`ID`」を指定してください。（筆者の場合は`cf161188.cloudfree.jp`です。）
- フォルダ名は、今回`public_html`フォルダの中にアップロードしたフォルダ名である`simplepage-master`です。
- ファイル名は`index.html`です。

したがって、組み立てた{term}`URL`は次のようになります。

- https://cf161188.cloudfree.jp/simplepage-master/index.html （注意：これは筆者の場合です。サーバー`ID`をご自身のものに変更して下さい。）

ブラウザーにこの{term}`URL`を指定して、閲覧してみましょう。

```{figure} https://i.gyazo.com/ebb4dabd28dfe0ee30e6645973ccd0bf.png
`index.html`（中身は「こんにちは！」）が表示されました。
```

この{term}`URL`をブラウザーに指定すればどこからでも閲覧できます。たとえばスマートフォンからも閲覧できますし、{term}`URL`を送れば友人にも見てもらえます。これが**公開された**状態です。

レンタルサーバーを借り、ファイルを{term}`FTP`でアップロードしてブラウザーで確認する手順を説明しました。

(installing-chrome)=
## Google Chrome のインストール

現在、世の中で使われているブラウザーにはいくつかの種類があります。`Google Chrome`、`Safari`、`Edge`、`Firefox`などです。

以下の記事に従って`Google Chrome`を**インストール**し、**規定のブラウザーに設定**して下さい。

1. インストール
	https://support.google.com/chrome/answer/95346
2. 規定のブラウザーに設定
	https://support.google.com/chrome/answer/95417
    ```{tip}
    **規定のブラウザー**に設定すれば、`index.html`などの`HTML`ファイルをダブルクリックするだけで`Google Chrome`で開かれるようになります。
    ```

% 本書で使用するブラウザーをChromeとします。(これはLEVEL1にも同じ情報を記している)
```{include} cards/default-browser.md
```


(file-ext)=
## ファイルの拡張子を表示するようにする

`index.html`というファイル名があったとき（ウェブでは典型的なファイル名です）、末尾の`.html`の部分を「拡張子」と言います。
「拡張子」はファイルの種類を知るためのもので、 **開発者にとって重要な情報**です。

### `Windows`の場合

初期設定の`Windows`では「拡張子」が表示されませんので、表示されるように設定を変更する必要があります。

何らかのフォルダを開いて下さい。
```{figure} images/gyazo/ec0cdc36bd6d40ecbdc709674ea6408a.png
どのフォルダを開いてもかまいません。例では`index.html`というファイルがあるフォルダを開いています。
（ちなみに、`index.html`と拡張子まで見えています。設定変更するまでは`index`しか見えていません。）
```

エクスプローラーを利用して拡張子が表示されるように設定変更します。
- Windows10の場合 ... エクスプローラーから[表示]-[ファイル名拡張子]を選択する
	```{figure} images/gyazo/780ed50ab66223ccf660b609f53e936b.gif
	:class: full-width
	最初は拡張子（`.html`）が表示されていませんが、この設定によって表示されるようになりました。
	```
- windows11の場合
	https://pc-karuma.net/show-file-extensions-on-windows-11/ を参考に設定して下さい。

### `macOS`の場合

標準ではファイル名拡張子は表示されません。

- https://support.apple.com/ja-jp/guide/mac-help/mchlp2304/mac を参考に設定して下さい。

(zoom)=
## オンラインミーティングの準備（`Zoom`）

オンラインでの質疑応答では`Zoom`というオンライン会議アプリを使用して行われます。

`Zoom`アプリのインストール方法と使用方法を説明します。

```{hint}
`Zoom`アプリは無料で利用できます。
```

### `Zoom`アプリのインストール
[Zoom のダウンロードページ](https://zoom.us/ja/download) にアクセスしてください。

```{figure} https://i.gyazo.com/b75a41aa76a6abff994d77ed947b0e67.png
青色のダウンロードボタンをクリックして、インストーラーをダウンロードしてください。
```

インストーラーがダウンロードできたらそれを開いて指示に従ってインストールを行ってください。

### `Zoom`でオンライン会議（質疑応答）に参加する

質疑応答に案内される際に、質疑応答に参加するための`URL`が配布されます。

```{figure} https://i.gyazo.com/5574eb4b10a410fcc8be6b797551f809.png
```

所定の時間になったら、その`URL`をクリックしてください。

```{figure} https://i.gyazo.com/8af4d274b5b73fc67c8f9c4dfe18a6b6.png
`URL`をクリックするとブラウザーにこの画面が表示されます。そのまま待つか、青色のボタンをクリックしてください。
```
```{figure} https://i.gyazo.com/79262a7f235cf42a8883610b9d6c0027.png
しばらく待つと`Zoom`アプリが開きます。「コンピューターオーディオに参加する」をクリックしてください。
```

```{figure} https://i.gyazo.com/9104a150730f5849d4e7d7a75a090352.png
ミーティングを開始します。
```

```{hint}
**音声とビデオ**

- 音声は雑音を防ぐために通常はミュートにしていただき、発言する場合にONにしてください。
- ビデオ（ウェブカメラ）は使用しません。停止した状態で`OK`です。
```

(zoom-sharing)=
### 画面共有をする

ミーティングの途中で講師から画面共有をしてほしい（画面を見せてほしい）と言われることがあります。
その際には以下の手順に従ってください。

```{attention}
**`macOS`の場合**

`macOS`のセキュリティ機能により、`Zoom`の画面共有が利用できないことがあります。
その際には以下の手順に従って設定を行ってください。

[MacでZoomの画面共有ができない場合](https://www.e-tamaya.co.jp/html/tamachan-tsushin/zoom_mac-screen-sharing.php)
```
```{figure} https://i.gyazo.com/9104a150730f5849d4e7d7a75a090352.png
画面下にある緑色の「画面共有」をクリックしてください。
```

```{figure} https://i.gyazo.com/e22af8be63ffe6aba140a3acd84248f1.png
何を共有するかを聞いてきます。テキストエディタやブラウザーなど複数のウインドウをまたぐことが多いため、**通常は画面全体を共有する「画面」を選択してください。**
```

```{warning}
**ご自身のプライバシーへの配慮をお願いします**

画面共有するとミーティングに参加している全員に画面が見えるようになります。
その際に思いがけずプライバシーに関わる内容が映り込んでしまうことを防ぐために、画面共有する際には**不要なウインドウを閉じる**などの配慮をお願いします。

どうしても配慮することが不可能な場合には、**画面共有を断ることもできます。単に「共有できないです」とだけお伝えください。**

なお、利用時に万一プライバシーに関する情報が映り込んでしまった際にはそれを避けることは不可避であるためご容赦いただくとともに、**そのようなリスクがあることを事前に了解の上で利用するようにしてください。**
```

```{figure} https://i.gyazo.com/73c5a8ea90d242b250357524e44c6f39.png
画面共有中はそれを示す表示が画面上部か下部に表示されます。邪魔な場合は動かすこともできます。
```

(zoom-remote)=
### 講師のリモートコントロールを受け付ける

ミーティング中に、講師が直接読者の`PC`を操作して説明することが合理的な場合があります。

講師からリモートコントロールをしたいと言われた場合には以下ようにしてください。

まず画面共有をしてください。（通常は画面共有している時にリモートコントロールをしたいと言われることがほとんどで、この手順を省くことができます。）

講師がリモートコントロールの要求をすると、画面に「リモートコントロールをしてよいか」を尋ねるウインドウが出てきますので、許可をしてください。

```{warning}
**ご自身のプライバシーへの配慮をお願いします**

画面共有と同様に、講師が`PC`を操作する上で思いがけずプライバシーに関わる内容が映り込んでしまうことがあります。
それを防ぐために、不要なウインドウなどを閉じていただくように配慮をおねがいします。

どうしても配慮が不可能な場合には、**リモートコントロールを断ることもできます。単に「共有できないです」とだけお伝えください。**

なお、利用時に万一プライバシーに関する情報が映り込んでしまった際にはそれを避けることは不可避であるためご容赦いただくとともに、**そのようなリスクがあることを事前に了解の上で利用するようにしてください。**
```
