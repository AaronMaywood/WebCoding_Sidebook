# LEVEL6 CSS - Flexbox
## STAGE15 Flexbox

```{tip}
**P.143 `align-items:center;`**

縦方向の中央寄せは従来のCSSでは難易度が高いものでしたが、`Flexbox`の登場で簡単になりました。
その方法をマスターしておきましょう。
```

- Flexbox（フレキシブルボックス） 139-143
	教材: 24_flex_基本
- Flex を応用したニ段組みボックスレイアウト ─第１段階 153-155
	教材: 27_二段組ボックスレイアウト
- Flex を応用したニ段組みボックスレイアウト ─第２段階 156-160
	教材: 27_二段組ボックスレイアウト


% ## STAGE15-2 Grid
% 
% {{TODO}} テキストがない、ベータリリース以降増補する
% 

## 昇段試験 - flexbox編を受験する

```{include} cards/school/running-in-to-exam.md
```

## 昇段試験 - flexbox編

% https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox_skills を使用する（日本語版を作る）→使用しました
% https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet 役立つチートシート

### 素材、採点基準

- 解答に必要な素材を提供します。以下から素材のZIPファイルをダウンロードし、展開して利用して下さい。
	% ハッシュ化してadjustacademy.omにアップロードする方法
	% 2022\11\2022-11-14-120952.txt|1| = 試験の素材と解答の提供方法
	% > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_flexbox/archive/refs/heads/main.zip
	- https://adjustacademy.com/webcoder/b70da6b74278c1bb2f77436fb7dca15a.zip
    - この中にHTMLとCSSが含まれます。

- 採点基準は以下のとおりです。
	1. ブラウザーの表示をみて、指示通りの表示になっているかを確認します。
	2. CSSを見て、`flexbox`を使用した解答になっているかを確認します。
	この両方の水準を満たしていれば合格です。
	% 水準を満たしているような、満たしていないような場合のグレーゾーンでは、生徒に質問してみて理解できているようであれば（また、やる気のある回答であれば）（必要に応じて指摘箇所を再提させて、これは再提出としてはカウントしない）合格とするなどの配慮を行う。

### 昇段試験のルール

% 昇段試験の案内
```{include} cards/school/rule-of-exam.md
```

---
### 問１ - 横並び

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/1`として下さい。
- 配付素材は`1`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/f022295e9e24477a80bbf7de096167f6.png
配付素材`1/index.html`の初期状態です。
`one`〜`four`のボックスを、
```
```{figure} https://i.gyazo.com/c1843df5e122540b1052209705af1f78.png
Flexboxを使用して図のように横に並べるよう、`style.css`に手を加えて下さい。
```

---
### 問２ - コンテンツの横並び

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/2`として下さい。
- 配付素材は`2`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/92ac5e6e527db6d27e81133b3a0a9fff.png
配付素材`2/index.html`の初期状態です。
３つのボックスを
```

```{figure} https://i.gyazo.com/977b6a49ab5216e2c48eee644a51e227.png
Flexboxを使用して図のように横に並べるよう、`style.css`に手を加えて下さい。３つのボックスの幅は同じにしてください。
```

---
### 問３ - 中央寄せ

% {{DONE}} 縦方向の中央寄せは教科書にある？→教科書P.143に存在した
- {bdg-dark}`指示` 作業フォルダ名を`flexbox/3`として下さい。
- 配付素材は`3`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/0ddc5909ccf8b243c51fa2f523500481.png
配付素材`3/index.html`の初期状態です。
灰色のボックスを、
```

```{figure} https://i.gyazo.com/38c2eee16d233fa17bf703c22a080f25.png
Flexboxを使用して枠内の中央に配置するよう、`style.css`に手を加えて下さい。
```

---
### 問４ - レンガ組み
% {{DONE}} 改行の方法と、flex-startの方法は教科書にあるか？→P.141とP.143にあった

- {bdg-dark}`指示` 作業フォルダ名を`flexbox/4`として下さい。
- 配付素材は`4`フォルダです。この中に`index.html`と`css/style.css`があります。

```{figure} https://i.gyazo.com/9342edcfcce1278c6404267094a35ec9.png
配付素材`4/index.html`の初期状態です。
縦に並んでいる「ドロップ」「タフィ」などのお菓子の名前を、
```

```{figure} https://i.gyazo.com/f41d0456f5205b47de6a136a6a609ab0.png
Flexboxを使用して図のように改行ありの横並びにするよう、`style.css`に手を加えて下さい。
```

## 解答の提出

```{include} cards/school/filling.md
```

% {{TODO}} 回答のダウンロード指示は、合格通知の中で行う
% ハッシュ化してadjustacademy.omにアップロードする方法
% 2022\11\2022-11-14-120952.txt|1| = 試験の素材と解答の提供方法
% > $ download-zip-to-rename-by-hash https://github.com/AaronMaywood/exam_flexbox/archive/refs/heads/main.zip

% ```{code}
% おめでとうございます。昇段試験に合格しました。
% 
% - 模範解答を以下のURLからダウンロードできます。自身の答えと照らし合わせて研究して下さい。
% 	https://adjustacademy.com/webcoder/8f41205015c24ebc80ea45570bb06f6a.zip
% 
% 新しいガイドブックを案内します。次のレベル（レベル７）に進んで下さい。
% - 新しいガイドブックのレベル７のページ
https://adjustacademy.com/webcoder/guidebook/061d06844f75ab4a77087f83f09f1bec/LEVEL7.html
%   	ID: adjust
%   	パスワード: academy
% 
% 事務局 担当：安村(yasumura@adjust.ne.jp)
% ```

