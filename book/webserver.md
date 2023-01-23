# Webサーバーを用意する

ウェブページの制作は読者自身の`PC`上で行っていただきますが、完成したウェブページを公開するには公開する場所を提供する`Webサーバー`が必要です。

```{important}
`Webサーバー`は、本ガイドブックで提供する**昇段試験**のファイル提出場所として使用します。以下の手順に従って、`Webサーバー`を準備し、使えるようにしておいて下さい。
```

`Webサーバー`とは、インターネット上に存在するコンピューターで、ウェブページを公開する場所を提供します。

```{tip}
サーバー（**serv**er）とはサービス（**serv**ice）担当のコンピューターという意味です。
```

この`Webサーバー`は、サーバー業者から借りる必要があります。
`Webサーバー`には格安のレンタル（レンタルサーバー）から、業務用の高価で高性能なものまで様々な形式があります。

ここでは無料で借りることのできる`Xfree`というサービスを紹介します。
`Webサーバー`としては最低限のものですが、学習用には十分です。

`Xfree`の`Webサーバー`を借り、借りた`Webサーバー`にコンテンツを`Filezilla`というソフトを使ってアップロードする手順までを説明します。

## 無料のWebサーバーを借りる

ウェブページを公開するためのWebサーバーはどの業者が提供するものでもかまいません。

```{tip}
すでにWebサーバーを借りている人はそちらを利用してもかまいません。
ただし本書では`Xfree`の場合についてのみ説明します。
```

学習用に筆者がオススメするのは`Xfree`です。

```{tip}
**なぜXfreeですか？**

- 国内
- 無料
- 広告が挿入されない（`HTML/CSS`が改変されないために特に重要な要件です）

上記の３つの条件を満たすからです。
```

`Xfree`を導入する方法を説明します。

https://www.xfree.ne.jp/ から`Xfree`のトップページにアクセスして下さい。

```{figure} images/gyazo/942959f998656e4003efbb31c14c02c3.png
`Xfree.ne.jp` のトップページです。
```

```{figure} images/gyazo/0eac63bc83d2f9d471ab8f453e9b5fcb.png
オレンジ色のボタン「無料のレンタルサーバーご利用お申し込み」をクリックします。
```

```{warning}
Xfreeを契約するのは読者自身の責任において行う必要があります。
その点に合意の上、以下の手順に進んで下さい。
```

```{figure} images/gyazo/530c1bfa08e51106a2c1ee410cba7eac.png
借り主である読者自身のメールアドレスを入力して「確認メールを送信」ボタンを押して下さい。
```

```{figure} images/gyazo/200ace7c3357ec5c45ad75bbfb9f7403.png
確認メールが送信されました。メールの受信ボックスを開いて下さい。
```

```{figure} images/gyazo/36d0a5e1564b39f8d1d0bf10e2ee1cbd.png
メールの受信ボックスにメールが届いていました。お申し込みURLをクリックして下さい。
```

```{figure} images/gyazo/6d35c77973a9cdca30db64bc8ba2a541.png
お申し込みURLをクリックしたら、会員情報登録フォームが開きます。必要事項を全て記入して下さい。
```
```{figure} images/gyazo/5ce5803deb9fd294e7b310a59bde0550.png
```
```{figure} images/gyazo/04d7ad00dcebc19ef4c6b86327c7d7b9.png
```
```{figure} images/gyazo/7a115bc6aa6b1ad7f9fa58849605bfca.png
利用規約は読者の責任においてお読み下さい。
全て記入したら「確認画面へ進む」をクリックして下さい。
```

```{figure} images/gyazo/8bd8bbb68e545612e1514593974e3871.png
内容を確認のうえ、よろしければ「会員情報を確定する」をクリックして下さい。
```

```{figure} images/gyazo/5e9effae8c318f0bc2a7f1e54f8ce519.png
「ログイン」をクリックして下さい。
```

ここまでで利用の申し込みは完了しています。ここからは利用にあたっての各種設定を行っていきます。

### サーバーIDを登録する

```{figure} images/gyazo/2f3522ba5f25f8ed3eaf6d37c2e4e8d9.png
`サーバーID`はページを公開する際の`URL`の一部として利用されるので、自身がわかりやすく、かつ、公開されても差し支えない名前を登録して下さい。
図ではサーバーIDに`am7274183`を指定しており、`URL`はこの`サーバーID`を使用して`http://am7274183.html.xdomain.jp/index.html`になります。
```

```{figure} images/gyazo/b5de34f397a7b96299b7e1716329b5f1.png
「サーバーIDの登録（確定）」をクリックします。
```

```{figure} images/gyazo/d094f986dd3e5aa590f8878e8101724d.png
「初期設定中です」の画面からこの画面になるまでしばらく待って下さい。（**この画面になるまで何も操作しないで下さい。**）
この画面になれば、サーバーIDの登録が完了です。
次に左側のメニューより無料レンタルサーバー」をクリックします。
```

```{figure} images/gyazo/073d3ec4de6de6b13def9a151f34a748.png
表の一番上の行である、オレンジ色の「HTML」の「利用を開始する」をクリックして下さい。（その他の「PHP・MySQL」や「WordPress」は有料版の登録が必要です。HTML/CSSだけでウェブページを制作する本テキストでは「HTML」プランで十分です。）
```

```{figure} images/gyazo/983e1275165563e146164c69f3716d72.png
登録が完了しました。左側のメニューより「無料レンタルサーバー」をクリックします。
```

(using-svg)=
### XfreeでSVG画像を扱えるようにする

`Xfree`では、SVG画像を表示するための設定が必要です。以下の通り行って下さい。

```{figure} images/gyazo/7574652c8758729d884c6c46d6485677.png
「HTML」の欄に「管理パネルログイン」ボタンがあります。クリックして下さい。
```

```{figure} images/gyazo/b82740bab708221a71016473694a1fcd.png
「MIME設定」をクリックします。
```

```{figure} images/gyazo/d922b71fb352404d359e4cae9d606228.png
「MIME設定追加」をクリックします。
```

```{figure} images/gyazo/79d5b246679833ad86367e8d9319a63d.png
「MIMEタイプ」に「image/svg+xml」を、「拡張子」に「.svg」を入力し、「確定する」をクリックします。
```

````{figure} images/gyazo/d8589cebfde0bec516ee582fc55fc50e.png
しばらく待って、この画面になれば設定完了です。
念の為、**入力した文字に間違いがないか**を照らし合わせて置いて下さい。
````

### FTPを利用するための設定を行う

`FTP`とは、Webサーバーにファイルをアップロードする手段のことです。後ほど紹介する`FileZilla`というアプリケーションがその`FTP`を担当します。

% 一つ前の.svg の設定直後はこの画面ではない
% ```{figure} images/gyazo/5052825a0c285560b4e13be511574d55.png
% 「HTML」の欄に「管理パネルログイン」ボタンがあります。クリックして下さい。
% ```

```{figure} images/gyazo/521773254e10b4e9a9fd4cdb0b61189a.png
右にある「FTPアカウント設定」をクリックします。
```

```{figure} images/gyazo/3aeabaef0c333c118c78bbf3884636ec.png
「編集」ボタンをクリックして下さい。
```
```{figure} images/gyazo/c109ace45acaca3c924af925585d6ff0.png
パスワードを新規に作成して登録します。ページ下部にある「※推測されやすいパスワードは登録できません。」にある案内に従って、推測されにくいパスワードを作成し、登録して下さい。
```

```{important}
なお、パスワードの原則として、他のサービスのパスワードとは異なるパスワードを指定して下さい。（異なるサービス間で同じパスワードを使用していると、どこかのサービスでパスワードが漏洩した場合に、芋づる式にアカウントが攻略されてしまうのを防ぐためです。）
```

```{danger}
上述の話題の他に、**この無料版`Xfree`のFTP接続用パスワードは暗号化を利用することができないという事情もあります**。万一、FTP接続時に途中の経路で盗聴されたときには、パスワードが盗聴者に漏れてしまいます。**したがって、漏れたとしても被害を最小限に抑えるため、他のサービスでは利用していないパスワードを入力することが非常に重要です**。
```

```{figure} images/gyazo/60ad32728c18b93427f7517f9896338e.png
内容確認のうえ、「確定する」をクリックして下さい。
```
```{figure} images/gyazo/abe67b8f0b5fce27eaaf3a57e973265f.png
パスワードの入力が終わり、**FTP接続情報**が完成しました。
ここに記載されている**FTP接続情報**を後で使用します。
```

```{figure} https://images.unsplash.com/photo-1623593721974-f39b78528626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
この章はこれでおしまい。記事は長いので、次の章に行く前に休憩を挟んではいかが？😎  
（<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/_NPyWow9CZk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a>が撮影した写真）
```

## FileZillaのインストール

Webサーバーのレンタルが終わったら、今度はそのレンタルサーバーにファイルをアップロードする必要があります。
サーバーにファイルをアップロードするには`FTP`(`ファイル転送プロトコル`といって、サーバーとファイルをやりとりする仕組みのことです)を利用します。
`FTP`を利用するには、`FTP`用のアプリケーションが必要です。

ここでは`Windows`/`Mac`両方で使用できる`FileZilla`（ファイルジラ）というアプリを紹介します。（ただし説明は`Windows`の場合のみで行います）

```{tip}
テキストでは{bdg-dark-line}`テキスト：P.161〜162` にかけて`WinSCP`というアプリケーションで同じことを説明しています。`WinSCP`は`Windows`専用で、`FileZilla`は`Windows`でも`Mac`でも利用可能です。やれることは同じで、どちらのアプリを使用してもかまいません。
```

### FileZillaのダウンロード

https://filezilla-project.org/ をクリックして、`FileZilla`の公式トップページを開きます。

```{figure} images/gyazo/af9e9705a2084ee1970528eb4bb5c44e.png
公式サイトに来ました。
左側のボタン「Download FileZilla Client」をクリックします。
```
```{figure} images/gyazo/b3e51d964cc711d7b441c9a53691f268.png
「Download FileZilla Client」をクリックします。
```
```{figure} images/gyazo/c44b6b06a2e1f9d884d04c2bd3745f3e.png
どの`FileZilla`をダウンロードするかを聞いてきます。一番左の「Download」ボタンをクリックして、通常版（英語版マニュアルなし）を選択します。
```
```{figure} images/gyazo/338ffba753bdc3b5f7537d740d809240.png
ダウンロードが開始されました。
```

### FileZillaのインストール

しばらくしてダウンロードが終わったら、ダウンロードしたファイル（ダウンロードフォルダに`FileZilla_3.62.0_win64_sponsored2-setup.exe`のようなファイル名で有るはずです）をダブルクリックしてインストールを開始して下さい。

```{hint}
ファイル名`FileZilla_3.62.0_win64_sponsored2-setup.exe`に含まれる **「`_3.62.0_`」という表記は`FileZilla`のバージョン番号です**。ダウンロード時期によりこの番号は変化しますのでご了承下さい。
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
ここで必要なのは`FileZilla`のみです。不要なので「Decline」（断ります）を選択のうえ、「Next」をクリックします。
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
「start FileZilla now」にチェックが入っているので、「Finish」をクリックすると同時に`FileZilla`が起動します。
```

````{attention}
```{figure} images/gyazo/643724f48639dec4a65ad0e006c42ecf.png
「Finish」クリック後にこのエラーが出ることがありますが、そのまま「OK」を押して下さい。`FileZilla`は問題なく起動します。
```
````

### FileZillaへアップロード先のサーバーを設定する

インストールが終わり、`FileZilla`が起動しました。

```{figure} images/gyazo/06149bcffabf6be13361eccb3d10e68b.png
ポップアップで表示される「FileZillaにようこそ」は「OK」をクリックして閉じます。
```

```{figure} images/gyazo/f395b927208931e6bad08e0da3bd53f7.png
`FileZilla`にアップロード先のWebサーバー情報を登録します。「ファイル」メニューから「サイトマネージャー(S)」を選択します。
```

```{figure} images/gyazo/4063dd8c5d2f7263a6853a020a015dae.png
左側の「新しいサイト(N)」を選択します。
```
```{figure} images/gyazo/d7fd41ba6c41806dda4da12f57c09f28.png
右側に入力欄が表示されました。
```
````{hint}
ここで`Xfree`の**FTP接続情報**が必要になります。

```{figure} images/gyazo/abe67b8f0b5fce27eaaf3a57e973265f.png
この画面が必要です。表示するには、https://www.xfree.ne.jp/ にアクセスし、「ログイン」からログインし、「管理パネルログイン」「FTPアカウント設定」と進みます。
```
````

入力欄を`Xfree`の**FTP接続情報**を参照して、項目を埋めます。
- ホスト ... `Xfree`側の画面にあるFTPホストの内容を記入して下さい。
- 暗号化 ... 無料版の`Xfree`ではパスワードの暗号化は選択できません。「平文のFTPのみを使用する（安全でない）⚠」を選択します。
	````{dropdown} （ちなみに）パスワードが平文（安全でない）とは
	**個人の勉強用途においては平文のままでもあまり心配する必要はありませんが**、どのような背景があるかについて知りたい方は以下をお読み下さい。

	```{tip}
	**パスワードが平文（安全でない）とは**

	`FileZilla`などの`FTP`を行うソフトは、サーバーに接続する時にパスワードを送信します。
	パスワードが平文とはパスワードが暗号化されないことを示し、万一インターネット回線の経路上に盗聴者が居た場合にそのタイミングでパスワードがその盗聴者に知られてしまうことを意味しています。

	盗聴者にパスワードが漏れた場合は、読者に成り代わって勝手にサーバーにファイルを上げ下げするという**なりすまし**行為が可能となります。
	なりすましの最悪の結果として、読者が気づかぬうちに自分のファイルがウィルス入りのファイルに書き換えられてしまう可能性があります。

	その場合の被害者はブラウザーでそのファイル（ページ）を閲覧した人になります。

	ただし、閲覧者が`Windows`や`Mac`といった`OS`の最新の更新を行っており（セキュリティアップデートを適用しており）、かつ最新のブラウザーを使用している場合には基本的にウィルスに感染することはありません。

	なりすましを完全に防ぐには有料版の`Xfree`に契約し、暗号化されたパスワード送信を利用できるようにする必要がありますが、筆者の経験では`FTP`パスワードの横取りによるなりすまし事例はそれほど頻繁ではないので、特に個人用途ではそこまでする必要はないと思っています。

	万一ファイルが書き換えられ、ファイルサイズやファイルの更新日時からそれと気づいた時には自分が持っているマスターファイルをアップロードしなおし、`Xfree`の管理画面からパスワードを変更することで守ることもできます。また、そのタイミングで有料版移行を検討すればよいと思います。

	**ただし、業務で`FTP`を使用する場合にはそのウェブサイトの持ち主や閲覧しにくる人たちを守るために暗号化は必須です。**
	```
	````
- ユーザー ... `Xfree`側の画面にあるアカウント名を入力して下さい。
- パスワード ... FTP接続用に作成したパスワードを指定して下さい。（パスワードには、`Xfree`にログインするためのものと、`FTP`接続用の２種類がありますが、ここでは後者を入力して下さい。）


```{figure} images/gyazo/2c64be1e17fc89e0c63d5747e4f560e3.png
すべての入力項目を埋めました。
「接続」をクリックします。
```

```{figure} images/gyazo/6a102b87d0435477907f9106d5825584.png
先程入力したパスワードを保存し、次回以降パスワード入力しなくてもよいようにするかを聞いてきます。
毎回パスワードを入れるのは面倒なので、「パスワードを保存する」が選ばれた状態で「OK」をクリックして下さい。
```

```{figure} images/gyazo/145858ee89cdaefdd10cb1d00e3535dd.png
「このサーバーでは常に安全でない平文でのFTP接続を許可する」をチェックした上で「OK」をクリックして下さい。
```

入力したFTP接続情報を元にレンタルしたWebサーバーへの接続を試みます。

```{figure} images/gyazo/9b53c4b38eb754f993f90848837c9b06.png
右側の「リモート（サーバー）側」のところに`.htaccess`、`default_page.png`、`index.html`のファイル名が表示されれば接続成功です。
```
% {{TODO}} ↑失敗した場合にどうするかを説明する

```{figure} images/gyazo/f69c05353ec1017954df18c1b018d73d.png
接続確認ができたら **右上の「閉じる」** をクリックし、`FileZilla`を一度閉じます。
```

```{figure} images/gyazo/8f5964f303dc29797ed1950bc8f44eb0.png
再度`FileZilla`を起動します。
```

```{figure} images/gyazo/f395b927208931e6bad08e0da3bd53f7.png
「ファイル」メニューから「サイトマネージャー(S)」を選択します。
```

```{figure} images/gyazo/4dced80e48d573a952a999857650b420.png
この操作は任意ですが、登録済みのサイト名を「名前の変更」から「Xfree無料Webサーバー」等に自分の分かる名前に変更しましょう。
```

これで`FileZilla`の設定は完了です。次に、サンプルのページをWebサーバーにアップロードして閲覧できるかどうかの確認を行います。

(upload-to-webserver)=
## サンプルページをWebサーバーにアップロードして確認する（FileZillaの使い方）

Webサーバーにファイルをアップロードして、ページが公開できるかを確かめましょう。

#### アップロードするファイルを用意する

アップロードするファイルは何でもいいですが、取り急ぎ「こんにちは！」と表示するだけの単純なHTMLを用意しました。

次のURLからzipファイルを用意して、展開して下さい。
https://github.com/AaronMaywood/simplepage/archive/refs/heads/master.zip

```{figure} images/gyazo/3506e6ac27bdee843ca3c159a58f0d81.png
展開すると、`simplepage-master`というフォルダが手に入ります。
```

```{figure} images/gyazo/2ee694b3a24ea4e47be2f0aad973b35d.png
`simplepage-master`フォルダの中には`README.md`（説明文、使用しません）と`index.html`（ウェブページ）の２ファイルがあることを確認して下さい。
```

#### `FileZilla`を使ってサーバーにファイルをアップロードする

`FileZilla`を起動します。

```{figure} images/gyazo/f395b927208931e6bad08e0da3bd53f7.png
`FileZilla`が起動したら、「ファイル」メニューから「サイトマネージャー(S)」を選択します。
```

```{figure} images/gyazo/2c64be1e17fc89e0c63d5747e4f560e3.png
登録済みの「Xfree無料Webサーバー」を選択して右下の「接続」をクリックします。
```

```{figure} images/gyazo/9b53c4b38eb754f993f90848837c9b06.png
接続が完了し、サーバー側に`index.html`などが見えています。これらファイルはレンタル時に最初から入っているものです。
```

用意した`simplepage-master`をサーバーにアップロードします。
```{figure} images/gyazo/62d58b6c8f503f915bfc9daf321a3d61.png
アップロードは、右側のサーバー側の領域にドラッグ＆ドロップするだけです。
```

```{figure} images/gyazo/34937dfc8907206986043e4794a2654d.png
サーバーにアップロードされました。`simplepage-master`が見えています。
```

```{figure} images/gyazo/f69c05353ec1017954df18c1b018d73d.png
アップロードが終われば、`FileZilla`は閉じてかまいません。
```

### ブラウザーでアップロード済みページを閲覧する

次に、ブラウザーを利用してアップロードしたページを閲覧できるか確認します。

まず、アップロードしたページの`URL`を組み立てましょう。

そのために、Xfreeから**FTPアカウント設定**の画面を開きます。

https://www.xfree.ne.jp/ からXfreeのトップページにアクセスして下さい。

```{figure} images/gyazo/942959f998656e4003efbb31c14c02c3.png
Xfree.ne.jp のトップページです。右上の**ログイン**をクリックして下さい。
```

```{figure} images/gyazo/389a2f800df04e0f291f9ff9c5a6ac74.png
ログインに必要な情報を入力して「ログイン」をクリックして下さい。
```

```{figure} images/gyazo/aef0bd6a355f949c4bd00d867bb367f8.png
オレンジの行にある「管理パネルログイン」をクリックして下さい。
```

```{figure} images/gyazo/b82fd67989e3540d07c45d29bb062dd8.png
右端の「FTPアカウント設定」をクリックして下さい。
```

```{figure} images/gyazo/734dc3623596e1e8c31b7688559717ce.png
真ん中の「アカウント名」が、あなたのサーバーの名前です。（図では`am7274183.html.xdomain.jp`の部分です。）
```

以下に示す`URL`の形式に材料を割り当てて`URL`を組み立てます。

```{code}
http://[サーバー名]/[フォルダ名]/[ファイル名]

- サーバー名はXfreeで確認したアカウント名（筆者の場合は`am7274183.html.xdomain.jp`）です。
- フォルダ名は、`simplepage-master`です。
- ファイル名は`index.html`です。
```

したがって、URLは以下の通りです。
```{code}
http://am7274183.html.xdomain.jp/simplepage-master/index.html
※サーバー名は契約ごとに異なります。読者のアカウント名に差し替えるのを忘れないでください。
```

ブラウザーにこの`URL`を指定して、閲覧してみましょう。

```{figure} images/gyazo/18248da1fd4c634c01d097a7515df9c0.png
`index.html`（中身は「こんにちは！」だけ）が表示されました。
```

この`URL`をブラウザーに指定すればどこからでも閲覧できます。たとえばスマートフォンからも閲覧できますし、`URL`を送れば友人にも見てもらえます。これが**公開された**状態です。

レンタルサーバーを借り、ファイルを`FTP`でアップロードしてブラウザーで確認する手順を説明しました。

(installing-chrome)=
# Google Chrome のインストール

現在、世の中で使われているブラウザーにはいくつかの種類があります。`Google Chrome`、`Safari`、`Edge`、`Firefox`などです。

以下の記事に従って`Google Chrome`を**インストール**し、**規定のブラウザーに設定**して下さい。

1. インストール
	https://support.google.com/chrome/answer/95346
2. 規定のブラウザーに設定
	https://support.google.com/chrome/answer/95417
	``{tip}
	**規定のブラウザー**に設定すれば、`index.html`などの`HTML`ファイルをダブルクリックするだけで`Google Chrome`起動するようになります。
	```

% 本書で使用するブラウザーをChromeとします。(これはLEVEL1にも同じ情報を記している)
```{include} cards/default-browser.md
```

# ファイルの拡張子を表示するようにする

`index.html`というファイル名があったとき（ウェブでは典型的なファイル名です）、末尾の`.html`の部分を「拡張子」と言います。
「拡張子」はファイルの種類を知るためのもので、 **開発者にとって重要な情報**です。

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
% 
% **Mac**
% 
% 初期設定のMacでは、**Finder**上にファイル名`index.html`の拡張子`.html`が表示されません。
% ````{tip}
% Macでファイルを操作する標準アプリの名前を**Finder**と言います。
% おなじみのこのウインドウの事です。
% % ```{figure} 画像を用意する
% % {{TODO}}
% % このウインドウは**Finder**というアプリの画面です。
% % ````
% 
% 拡張子が表示されるように設定を変更しましょう。
% - Finderに拡張子を表示するようにする
% 	https://support.apple.com/ja-jp/guide/mac-help/mchlp2304/mac

