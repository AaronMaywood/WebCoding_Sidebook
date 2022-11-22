% # LEVEL6.5
% 
% ## STAGE17 Webサーバー
% 
% - CSS
%   - {{TODO}} 無料のウェブサーバーを借りる
% 	- 「WinSCP」で WWW サーバーへアップする 83-84
% 
% % ## STAGE18 付録 ←これは扱わない。扱うとしたら必要な箇所で
% % 
% % - CSS
% % 	- 付録：文字サイズ単位換算表 90
% % 	- 付録：コーディングガイドライン例 91-95	→卒業制作で
% % 	- コーディング後チェック 95 				→卒業制作で
% 
% ---------------------------------------- LEVEL6.5 昇段試験 ----
% 特になし
% ---------------------------------------- LEVEL6.5 昇段試験 ----

# Webサーバーを用意する

ウェブページの制作は自身のPC上で行いますが、完成したウェブページを公開するには公開する場所を提供する`Webサーバー`が必要です。

```{important}
`Webサーバー`は、本ガイドブックで提供する**昇段試験**のファイル提出場所として使用します。以下の手順に従って、`Webサーバー`を準備し、使えるようにしておいて下さい。
```

`Webサーバー`とは、インターネット上に存在するコンピューターで、ウェブページを公開する場所をサービスとして提供します。

```{tip}
サーバーとはサービスするコンピューターという意味です。
```

この`Webサーバー`は、業者から借りる必要があります。
`Webサーバー`を提供する形式にも種類があり、格安のレンタル（レンタルサーバー）から、業務用の高性能なものまで様々です。

ここでは無料で借りることのできる`Xfree`というサービスを紹介します。
Webサーバーとしては最低限のものですが、学習用には十分です。

`Xfree`のWebサーバーを借りたあとは、そのWebサーバーにコンテンツを`Filezilla`というソフトを使ってアップロードする手順までを説明します。

## 無料のWebサーバーを借りる

ウェブページを公開するためのWebサーバーはどの業者が提供するものでもかまいません。

```{tip}
すでにWebサーバーを借りている人はそちらを利用するのでもかまいません。
ただし本書ではXfreeの場合についてのみ説明します。
```

学習用に無料のWebサーバーが無いかと探した結果、Xfreeを見つけました。

```{tip}
**なぜXfreeですか？**

無料のWebサーバーを提供する業者は他にもありましたが、無料版では広告が挿入されるなどHTML/CSSが改変されてしまう可能性のあるものでしたので、そういった制約のないサービスを探した結果がXfreeでした。
```

Xfreeを導入する方法を説明します。

https://www.xfree.ne.jp/ からXfreeのトップページにアクセスして下さい。

```{figure} https://i.gyazo.com/942959f998656e4003efbb31c14c02c3.png
Xfree.ne.jp のトップページです。
```

```{figure} https://i.gyazo.com/0eac63bc83d2f9d471ab8f453e9b5fcb.png
オレンジ色のボタン「無料のレンタルサーバーご利用お申し込み」をクリックします。
```

```{warning}
Xfreeを契約するのは読者自身の責任において行う必要があります。
その点に合意の上、以下の手順に進んで下さい。
```

```{figure} https://i.gyazo.com/530c1bfa08e51106a2c1ee410cba7eac.png
借り主である読者自身のメールアドレスを入力して「確認メールを送信」ボタンを押して下さい。
```

```{figure} https://i.gyazo.com/200ace7c3357ec5c45ad75bbfb9f7403.png
確認メールが送信されました。メールの受信ボックスを開いて下さい。
```

```{figure} https://i.gyazo.com/36d0a5e1564b39f8d1d0bf10e2ee1cbd.png
メールの受信ボックスにメールが届いていました。お申し込みURLをクリックして下さい。
```

```{figure} https://i.gyazo.com/6d35c77973a9cdca30db64bc8ba2a541.png
お申し込みURLをクリックしたら、会員情報登録フォームが開きます。必要事項を全て記入して下さい。
```
```{figure} https://i.gyazo.com/5ce5803deb9fd294e7b310a59bde0550.png
```
```{figure} https://i.gyazo.com/04d7ad00dcebc19ef4c6b86327c7d7b9.png
```
```{figure} https://i.gyazo.com/7a115bc6aa6b1ad7f9fa58849605bfca.png
利用規約は読者の責任においてお読み下さい。
全て記入したら「確認画面へ進む」をクリックして下さい。
```

```{figure} https://i.gyazo.com/8bd8bbb68e545612e1514593974e3871.png
内容を確認のうえ、よろしければ「会員情報を確定する」をクリックして下さい。
```

```{figure} https://i.gyazo.com/5e9effae8c318f0bc2a7f1e54f8ce519.png
「ログイン」をクリックして下さい。
```

ここまでで利用の申し込みは完了しています。ここからは利用にあたっての各種設定を行っていきます。

```{figure} https://i.gyazo.com/2f3522ba5f25f8ed3eaf6d37c2e4e8d9.png
サーバーIDを登録するように促されます。URLの一部として利用されるようなので、自身がわかりやすく、かつ、公開されても差し支えない名前を登録して下さい。
```

```{figure} https://i.gyazo.com/b5de34f397a7b96299b7e1716329b5f1.png
「サーバーIDの登録（確定）」をクリックします。
```

```{figure} https://i.gyazo.com/e33c972040749f53ffc3803a169205f7.png
サーバーIDの登録が完了しました。左側のメニューより「無料レンタルサーバー」をクリックします。
```

```{figure} https://i.gyazo.com/0febcc0c0a501f3fe38be98dbb7f8a9f.png
表の一番上の行である、オレンジ色の「HTML」の「利用を開始する」をクリックして下さい。（その他の「PHP・MySQL」や「WordPress」は有料版の登録が必要です。HTML/CSSだけでウェブページを制作する本テキストでは「HTML」プランで十分です。）
```
```{figure} https://i.gyazo.com/5b3c04f8d338f2083931f1bee80922ed.png
登録が完了しました。左側のメニューより「無料レンタルサーバー」をクリックします。
```

```{figure} https://i.gyazo.com/5052825a0c285560b4e13be511574d55.png
「HTML」の欄に「管理パネルログイン」ボタンがあります。クリックして下さい。
```
```{figure} https://i.gyazo.com/b3fcf6ce645aa4908edc7a889b549861.png
右にある「FTPアカウント設定」をクリックします。
```

`FTP`とは、Webサーバーにファイルをアップロードする手段のことです。後ほど紹介する`FileZilla`というアプリケーションがその`FTP`を担当します。

```{figure} https://i.gyazo.com/8427a793a534c8c8347939a7e6bccfd3.png
「編集」ボタンをクリックして下さい。
```
```{figure} https://i.gyazo.com/c109ace45acaca3c924af925585d6ff0.png
パスワードを発行します。ページ下部にある「※推測されやすいパスワードは登録できません。」に従って、推測されにくいパスワードを登録して下さい。
```

```{important}
なお、パスワードの原則として、他のサービスのパスワードとは異なるパスワードを指定して下さい。（異なるサービス間で同じパスワードを使用していると、どこかのサービスでパスワードが漏洩した場合に、芋づる式にアカウントが攻略されてしまうのを防ぐためです。）
```

```{danger}
上述の話題の他に、**この無料版`Xfree`のFTP接続用パスワードは暗号化を利用することができないという事情もあります**。万一、FTP接続時に途中の経路で盗聴されたときには、パスワードが盗聴者に漏れてしまいます。**したがって、漏れてもよいパスワード（他のサービスでは利用していないパスワード）を入力することが非常に重要です**。
```

```{figure} https://i.gyazo.com/60ad32728c18b93427f7517f9896338e.png
内容確認のうえ、「確定する」をクリックして下さい。
```
```{figure} https://i.gyazo.com/abe67b8f0b5fce27eaaf3a57e973265f.png
パスワードの入力が終わり、**FTP接続情報**が完成しました。
ここに記載されている**FTP接続情報**を後で使用します。
```

### FileZillaのインストール

Webサーバーのレンタルが終わったら、今度はそのレンタルサーバーにファイルをアップロードする必要があります。
サーバーにファイルをアップロードするには`FTP`(`ファイル転送プロトコル`といって、サーバーとファイルをやりとりする仕組みのことです)を利用します。
`FTP`を利用するには、`FTP`用のアプリケーションが必要です。

ここでは`Windows`/`Mac`両方で使用できる`FileZilla`（ファイルジラ）というアプリを紹介します。（ただし説明は`Windows`の場合のみで行います）

```{tip}
テキストでは*P.161-162*にかけて`WinSCP`というアプリケーションで同じことを説明しています。`WinSCP`は`Windows`専用ですが、`FileZilla`より気持ち程度すっきりしていて使いやすいように思います。ただしやることは同じで、どちらのアプリを使用してもかまいません。
```

https://filezilla-project.org/ をクリックして、`FileZilla`の公式トップページを開きます。

```{figure} https://i.gyazo.com/af9e9705a2084ee1970528eb4bb5c44e.png
公式サイトに来ました。
左側のボタン「Download FileZilla Client」をクリックします。
```
```{figure} https://i.gyazo.com/b3e51d964cc711d7b441c9a53691f268.png
「Download FileZilla Client」をクリックします。
```
```{figure} https://i.gyazo.com/c44b6b06a2e1f9d884d04c2bd3745f3e.png
どの`FileZilla`をダウンロードするかを聞いてきます。一番左の「Download」ボタンをクリックして、通常版（英語版マニュアルなし）を選択します。
```
```{figure} https://i.gyazo.com/338ffba753bdc3b5f7537d740d809240.png
ダウンロードが開始されました。
```

しばらくしてダウンロードが終わったら、ダウンロードしたファイル（ダウンロードフォルダに`FileZilla_3.62.0_win64_sponsored2-setup.exe`のようなファイル名で有るはずです）をダブルクリックしてインストールを開始して下さい。

```{admonition} 操作
（この画面はスクリーンショットが撮れないため、文章で指示します）

インストールを開始すると、`Windows`が「このアプリがデバイスに変更することを許可しますか？」と尋ねてきます。アプリケーションが「FileZilla FTP Client」で、確認済みの発行者が「Tim Kosse」であることを確認の上、「はい」を選択して下さい。
```

```{figure} https://i.gyazo.com/4522c3c3fe267c0ba94e262bbd3002c7.png
ライセンス（利用許諾書）が表示されます。利用は無料だが、使用する上で起こったトラブルについては保証できません等の案内が行われています。**読者の責任において利用するようにお願いします。** よろしければ「I Agree」（同意します）をクリックして下さい。
```
```{figure} https://i.gyazo.com/738a436c152ba73b9d147b678de22366.png
スポンサーの宣伝です。
（Braveというブラウザーを一緒にインストールするかを尋ねています。）
不要なので「Decline」（断ります）を選択のうえ、「Next」をクリックします。
```

{{TODO}}ここの図を今から
```{figure} https://i.gyazo.com/f3b6152ef6363109837bd0190180c6f7.png
`Windows`を利用する複数のユーザーが登録されていうる場合、全員（「Anyone who uses this computer(all users)」）か自分だけ（「Only for me」）かを選択します。
それほど重要な選択ではありません。どちらかを選んで「Next」をクリックします。
```

インストールが進みます。

```{figure} https://i.gyazo.com/de818072c35bc60dffae9fe6e47dd8c2.png
インストールが完了しました。「Finish」をクリックします。
「start FileZilla now」にチェックが入っているので、「Finish」をクリックすると同時に`FileZilla`が起動します。
```

インストールが終わり、ここからは`FileZilla`の操作を説明します。

```{figure} https://i.gyazo.com/06149bcffabf6be13361eccb3d10e68b.png
ポップアップで表示される「FileZillaにようこそ」は「OK」をクリックして閉じます。
```

```{figure} https://i.gyazo.com/f395b927208931e6bad08e0da3bd53f7.png
`FileZilla`にアップロード先のWebサーバー情報を登録します。「ファイル」メニューから「サイトマネージャー(S)」を選択します。
```

```{figure} https://i.gyazo.com/4063dd8c5d2f7263a6853a020a015dae.png
左側の「新しいサイト(N)」を選択します。
```
```{figure} https://i.gyazo.com/d7fd41ba6c41806dda4da12f57c09f28.png
右側に入力欄が表示されました。
```
````{tip}
ここで`Xfree`の**FTP接続情報**が必要になります。

```{figure} https://i.gyazo.com/abe67b8f0b5fce27eaaf3a57e973265f.png
この画面が必要です。表示するには、https://www.xfree.ne.jp/ にアクセスし、「ログイン」からログインし、「管理パネルログイン」「FTPアカウント設定」と進みます。
```
````

入力欄を`Xfree`の**FTP接続情報**を参照して、項目を埋めます。
- ホスト ... `Xfree`側の画面にあるFTPホストの内容を記入して下さい。
- 暗号化 ... 無料版の`Xfree`ではパスワードの暗号化は選択できません。「平文のFTPのみを使用する（安全でない）⚠」を選択します。
- ユーザー ... `Xfree`側の画面にあるアカウント名を入力して下さい。
- パスワード ... FTP接続用に作成したパスワードを指定して下さい。（パスワードには、`Xfree`にログインするためのものと、`FTP`接続用の２種類がありますが、ここでは後者を入力して下さい。）

% {{TODO}} 余力ができたらパスワードが平文で流れたときに何が起こるかを説明する

```{figure} https://i.gyazo.com/2c64be1e17fc89e0c63d5747e4f560e3.png
すべての入力項目を埋めました。
「接続」をクリックします。
```

入力したFTP接続情報を元にレンタルしたWebサーバーへの接続を試みます。

```{figure} https://i.gyazo.com/9b53c4b38eb754f993f90848837c9b06.png
右側の「リモート（サーバー）側」のところに`.htaccess`、`default_page.png`、`index.html`のファイル名が表示されれば接続成功です。
```
% {{TODO}} ↑失敗した場合にどうするかを説明する

```{figure} https://i.gyazo.com/f69c05353ec1017954df18c1b018d73d.png
接続確認ができたら、`FileZilla`を一度閉じます。
```

```{figure} https://i.gyazo.com/8f5964f303dc29797ed1950bc8f44eb0.png
再度`FileZilla`を起動します。
```

```{figure} https://i.gyazo.com/f395b927208931e6bad08e0da3bd53f7.png
「ファイル」メニューから「サイトマネージャー(S)」を選択します。
```

```{figure} https://i.gyazo.com/4dced80e48d573a952a999857650b420.png
この操作は任意ですが、登録済みのサイト名を「名前の変更」から「Xfree無料Webサーバー」等に自分の分かる名前に変更しましょう。
```

これで`FileZilla`の設定は完了です。次に、サンプルのページをWebサーバーにアップロードして閲覧できるかどうかの確認を行います。

(upload-to-webserver)=
### サンプルページをWebサーバーにアップロードして確認する

Webサーバーにファイルをアップロードして、ページが公開できるかを確かめましょう。

#### アップロードするファイルを用意する

アップロードするファイルは何でもいいですが、取り急ぎ「こんにちは！」と表示するだけの単純なHTMLを用意しました。

次のURLからzipファイルを用意して、展開して下さい。
https://github.com/AaronMaywood/simplepage/archive/refs/heads/master.zip

```{figure} https://i.gyazo.com/3506e6ac27bdee843ca3c159a58f0d81.png
展開すると、`simplepage-master`というフォルダが手に入ります。
```

```{figure} https://i.gyazo.com/2ee694b3a24ea4e47be2f0aad973b35d.png
`simplepage-master`フォルダの中には`index.html`だけがあることを確認して下さい。
```

#### `FileZilla`を使ってサーバーにファイルをアップロードする

次に`FileZilla`を開きます。

```{figure} https://i.gyazo.com/f395b927208931e6bad08e0da3bd53f7.png
`FileZilla`が起動したら、「ファイル」メニューから「サイトマネージャー(S)」を選択します。
```

```{figure} https://i.gyazo.com/2c64be1e17fc89e0c63d5747e4f560e3.png
登録済みの「Xfree無料Webサーバー」を選択して右下の「接続」をクリックします。
```

```{figure} https://i.gyazo.com/9b53c4b38eb754f993f90848837c9b06.png
接続が完了し、サーバー側に`index.html`などが見えています。これらファイルはレンタル時に最初から入っているものです。
```

用意した`simplepage-master`をサーバーにアップロードします。
```{figure} https://i.gyazo.com/62d58b6c8f503f915bfc9daf321a3d61.png
アップロードは、右側のサーバー側の領域にドラッグ＆ドロップするだけです。
```

```{figure} https://i.gyazo.com/34937dfc8907206986043e4794a2654d.png
サーバーにアップロードされました。`simplepage-master`が見えています。
```

```{figure} https://i.gyazo.com/f69c05353ec1017954df18c1b018d73d.png
アップロードが終われば、`FileZilla`は閉じてかまいません。
```

### ブラウザーでアップロード済みページを閲覧する

次に、ブラウザーを利用してアップロードしたページを閲覧できるか確認します。

まず、アップロードしたページの`URL`を組み立てましょう。

そのために、Xfreeから**FTPアカウント設定**の画面を開きます。

https://www.xfree.ne.jp/ からXfreeのトップページにアクセスして下さい。

```{figure} https://i.gyazo.com/942959f998656e4003efbb31c14c02c3.png
Xfree.ne.jp のトップページです。右上の**ログイン**をクリックして下さい。
```

```{figure} https://i.gyazo.com/389a2f800df04e0f291f9ff9c5a6ac74.png
ログインに必要な情報を入力して「ログイン」をクリックして下さい。
```

```{figure} https://i.gyazo.com/aef0bd6a355f949c4bd00d867bb367f8.png
オレンジの行にある「管理パネルログイン」をクリックして下さい。
```

```{figure} https://i.gyazo.com/b82fd67989e3540d07c45d29bb062dd8.png
右端の「FTPアカウント設定」をクリックして下さい。
```

```{figure} https://i.gyazo.com/734dc3623596e1e8c31b7688559717ce.png
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
※サーバー名は契約ごとに異なります。読者のアカウント名に差し替えるのを忘れないでてください。
```

ブラウザーにこの`URL`を指定して、閲覧してみましょう。

```{figure} https://i.gyazo.com/18248da1fd4c634c01d097a7515df9c0.png
`index.html`（中身は「こんにちは！だけ」）が表示されました。
```

この`URL`をブラウザーに指定すればどこからでも閲覧できます。たとえばスマートフォンからも閲覧できますし、`URL`を送れば友人にも見てもらえます。これが**公開された**状態です。

レンタルサーバーを借り、ファイルを`FTP`でアップロードしてブラウザーで確認する手順を説明しました。

% {{TODO}} ベーシック認証、ロボットメタタグなど、非公開にする方法を説明する
