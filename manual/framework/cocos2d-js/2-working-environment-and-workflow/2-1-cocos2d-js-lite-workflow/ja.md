# 2.1 Cocos2d-JS軽量版のWebゲームワークフロー( Web開発者環境 )

Cocos2d-JSチームは,Web開発者の為の具体的なワークフローを設計しました。 他のWebフレームワークのように,直接HTMLページにファイルエンジンが組み込まれているので,開発者にとっては非常に良いことです。 ですが,Cocos2d-JS完全版はWeb開発者にとっては大きく,複雑なものであり,Web開発者に「Cocos2d-JSは,Webゲームを開発するために重すぎる」という誤解を与えてしまいました。

実際には,Cocos2d-JSのWebエンジンはモジュール化を実装し,機能は充実しつつ軽量に仕上がっています。 これらの理由から,軽量版とWeb開発のためのワークフローを促進してきました。

この章では,Cocos2d-JS軽量版のワークフローを紹介します。

## Cocos2d-JS軽量版をダウンロード

最新の軽量版エンジンを[ダウンロード](http://cocos2d-x.org/filecenter/jsbuilder/)して下さい。 また,完全版エンジンをダウンロードしたり,独自のバージョンを作成することができます。

ダウンロードに関して,圧縮版と非圧縮版を選択することができます。 圧縮版はJavaScriptのファイルサイズを小さくすることができますが,エンジン内のソースコードが読めなくなります。 開発段階で非圧縮版を選択した場合,ゲームをリリースする際に圧縮版に置き換える必要があるので注意してください。

## ダウンロードしたコンテンツ

軽量版の内容は以下のようになっています。 エンジンだけではなく,HelloWolrdプロジェクトも含まれています。

|ファイルの名前|説明|
|---------|-----------|
|build.xml|[Google Closure Compiler](https://developers.google.com/closure/compiler/)という圧縮ツールのAntビルド設定ファイルです。 圧縮ツールをダウンロードし,このファイルを編集することで,JavaScriptファイルを圧縮することができます。|
|cocos2d-js-v3.0.js|エンジンのJavaScriptファイルです。 このファイルを組み込むことにより,Cocos2d-JS APIを使用することができるようになります。|
|HelloWorld.html|ソースコードが書かれているHelloWorldプロジェクトのメインページです。|
|HelloWorld.png|HelloWorldプロジェクトで使用するテクスチャです。|
|README.md|Cocos2d-JS 軽量版の利用ガイドです。|

## 使用ガイド

以下の3つのバージョンの中のどれかをダウンロードしたと思います。 各バージョンについて解説します。

- **Cocos2d-JS完全版** : 完全版はCocos2d-JSの全ての機能と拡張機能が含まれています。 [公式ドキュメント](http://www.cocos2d-x.org/docs/manual/framework/html5/en)で機能について確認をすることができます。

- **Cocos2d-JS軽量版** : 軽量版はCocos2d-JSのいくつかのコアな機能が含まれており,非常に使いやすく,軽量なバージョンです。 機能は以下のようになっています。
    + キャンバスレンダリング( WebGLのサポートはしていません。 )
    + シーンとレイヤー
    + イベントマネージャ
    + スケジューラ
    + スプライトとテクスチャ
    + LabelTTF
    + オーディオエンジン
    + アクション
    + メニューとメニュー項目
    
- **カスタマイズ版** : ユーザが選択した機能が含まれています。

### 使い方

冒頭でも軽く説明しましたが,Cocos2d-JSは他のWebライブラリと同様に,HTMLページにJavaScriptファイルを組み込むことができます。 ダウンロードしたプロジェクト内のHelloWorld.htmlを確認してみてください。

例として,HelloWorldを使用します。 JavaScriptファイルを読み込むタイミングには注意してください。

```
window.onload = function() {
    cc.game.onStart = function() {
        //...
    };
    cc.game.run( "gameCanvas" );
};
```

`cc.game.onStart`と`cc.game.run`はウィンドウのonloadコールバック関数内にラップされており,JavaScriptファイルが読み込まれ,Cocos2d-JS APIを組み込むことが可能になります。 次の章では,エンジンコントロールがファイルの読み込み処理内で行われるため,ウィンドウのonloadコールバック関数を使用しないワークフロー紹介します。

また,HelloWorldプロジェクト内の全てのファイルが正常に動作するように,ファイルはローカルもしくはオンラインのウェブサーバ上に置いてください。

### 便利なリンク

- [オンラインAPIリファレンス](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [ダウンロード可能なAPIリファレンス](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [公式ドキュメント](http://cocos2d-x.org/docs/manual/framework/html5/en)
- [GitHubのリポジトリ](https://github.com/cocos2d/cocos2d-js)
- [オンラインフォーラム](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [オンラインテストプログラム](http://cocos2d-x.org/js-tests/)

## Closure Compilerについて
[Google Closure Compiler](https://developers.google.com/closure/compiler/)は全てのJavaScriptファイルを,より小さく圧縮することができます。 圧縮版をダウンロードした場合でも使用可能です。 使用手順は以下のようになっています。

1. Closure CompilerのJARアプリをダウンロードします。
2. ユーザ自身の構成でbuild.xmlを設定します。
3. ターミナルで`ant`を実行します。
4. HelloWorld.htmlに組み込まれたJavaScriptファイルを出力ファイルの`game.min.js`と入れ替えます。

注意 : 圧縮後はHTMLファイル内にJavaScriptコードの書き込みができなくなります。 また,全てのJavaScriptコードを同時に圧縮する必要があり,ファイルに不備があるとエラーが発生するので注意してください。

## お知らせ

HelloWorld.htmlを開くときに,"Failed to load resource: the server responded with a status of 404 (Not Found)"というエラーが表示されます。 プロジェクト自体に問題は発生しないので,無視して頂いて構いません。 空の`project.json`ファイルを作成することで,エラーを取り除くことも可能です。

## 次のステップ
この章ではWeb開発のワークフローを説明しました。 次の章のチュートリアルでは,クロスプラットフォームのゲームを開発する為のCocos2d-JSのワークフローご紹介します。