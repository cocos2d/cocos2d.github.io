# 2.2 クロスネイティブ / Cocosコンソール( Web開発者環境 )で作るブラウザゲーム

Cocos2d-JSの一番優れているところは,完璧なマルチプラットフォームを実現しているところです。 1つのコードベースで,Cocos2d-JS v3.0内であればどこでも動作します。 全てのプラットフォームで統一されたワークフローを提供できるように,Cocos2d-JSの初めのバージョンでWebエンジン( Cocos2d-html5 )とネイティブエンジン( Cocos2d-x JavaScript Bindings )の統合を行いました。 Cocos2d-JSでは開発者がJavaScriptのコードを書くことに集中でき,Cocosコンソールはプロジェクトの作成や公開を行うことができます。

**Cocos2d-JS v3.0のアーキテクチャ** :

![](./Cocos2d-JS-Structure.jpg)

上記のアーキテクチャから見てとれますが,WebゲームはCocos2d-html5を利用し,ネイティブゲームではCocos2d-x JavaScript Bindings( JSB )を利用しています。 JSBは,Cocos2d-x APIとJavaScript APIの架け橋,JavaScriptエンジンとしてSpiderMonkeyを使用しています。 v2.xではすでにWeb,ネイティブ共に多くのゲームで使用されていましたが,2つのエンジンが統合され,簡略化されたのは今回が初めてです。 2つのエンジンが統合され簡略化されたことにより,プラットフォームやデバイスの違いが開発者にとってわかりやすくなります。 上記のことからマルチプラットフォーム開発が簡単に行えます。

**Cocos2d-JSでサポートされているプラットフォーム** :

- デスクトップブラウザ( Chrome, Safari, Firefox, Opera, IE9+ )
- モバイルブラウザ( Android, iOS ）
- iOS
- Android
- Mac OS X
- Windows

##1. Cocos2d-JSのダウンロード

[ダウンロードページ](http://www.cocos2d-x.org/download)からCocos2d-JSの最新版をダウンロードしてください。 パッケージの内容は以下のようになっています。

|ディレクトリ及びファイル|コンテンツの概要|
|----------|-------|
|build                  |テストケースとMoon WarriorsというサンプルのXcodeプロジェクトとVisual Studioプロジェクトが含まれています。|
|docs                   |JavaScriptのコーディングスタイルガイド,最新のリリースノート,アップグレードガイドが含まれています。|
|frameworks             |Webエンジンとネイティブエンジンが含まれているフォルダです。|
| - cocos2d-html5       |Webエンジン|
| - js-bindings         |Cocos2d-x JavaScript Bindings|
|samples                |サンプルが含まれているフォルダです。|
| - js-moonwarriors     |Moon Warriorsというサンプルのゲーム|
| - js-tests            |Cocos2d-JSのテストケース|
|templates              |Cocosコンソール用のテンプレート|
|tools                  |ツールが含まれているフォルダです。|
| - bindings-generator  |自動バインディング生成ツール|
| - cocos2d-console     |Cocosコンソールツール|
| - tojs                |自動JavaScriptバインディングの構成ファイルと生成スクリプト|
|AUTHORS                |GitHubのリポジトリへの貢献者リスト|
|CHANGELOG              |過去のバージョンの変更履歴|
|LICENSE                |Cocos2d-JSのライセンス|
|README.md              |Cocos2d-JSのプロジェクト紹介|
|setup.py               |Cocosコンソールのインストールスクリプト|

##2. Cocosコンソールのインストール

Cocosコンソールはプロジェクトの作成,公開を補助するツールです。 上記のパッケージをダウンロードすることができたら,setup.pyを実行しCocosコンソールをインストールすることができます。( Windowsを使っている方は,[Python 2.7](https://www.python.org/downloads/release/python-278/)を事前にインストールする必要があります。 ) このスクリプトは`cocosコマンド`と依存関係をセットアップするもので,インストールを行っている最中に,NDKのパス,Android用のAndroid SDKのパス,Web用のANTのパスを入力します。 Cocos2d-JSのアップデートを行う場合,再度setup.pyを実行し,エンジンの参照を更新する必要があるので,注意してください。

使用するツールのリンク :

* [Python 2.7.6](https://www.python.org/download/releases/2.7.6/)
* [Android SDK](https://developer.android.com/sdk/index.html?hl=sk)
* [NDK](https://developer.android.com/tools/sdk/ndk/index.html)
* ANTのインストールについて :

    - ANTを[ダウンロード](http://ant.apache.org/)します。
    - フォルダにANTを解答します。
    - JavaのパスとしてJAVA\_HOME環境変数,ANTフォルダのパスとしてANT\_HOME環境変数を設定します。 次に,システムパスに${ANT\_HOME}/bin( Unix用 ),%ANT\_HOME%/bin( Windows用 )を設定します。
    
    ```
    // ターミナルで実行するか,.bash_profile( Mac用 )に追加してください。
    export ANT_ROOT=/usr/local/ant/bin
    export JAVA_HOME=/usr/local/jdk1.7.0_51
    ```

##3. プロジェクトの作成

Cocosコンソールを使用すれば,プロジェクトを簡単に作成することができます。 ターミナルもしくはコマンドラインを開き,プロジェクトを保存したいフォルダまで移動します。 移動ができたら以下の`cocosコマンド`を実行します。

```
cocos new -l js ProjectName
```

プロジェクトの作成に成功したら,プロジェクトを保存したいフォルダに設定したプロジェクトの名前のフォルダがあります。 このプロジェクトは,サポートされているプラットフォーム全てに公開することができます。 今回作成したフォルダは,Cocos2d-JSのフォルダとは内容が異なるので,以下で紹介します。

|ディレクトリ及びファイル|コンテンツの概要|
|----------|-------|
|frameworks             |Webエンジンとネイティブエンジンが含まれています。|
| - cocos2d-html5       |Webエンジン|
| - js-bindings         |Cocos2d-x JavaScript Bindings|
| - runtime-src         |iOS / MacOSX / Android / Windowsなど,全てのプラットフォームのプロジェクトが含まれているフォルダです。|
|res                    |画像,音楽,フォント,アニメーションなどを保存するフォルダです。|
|src                    |JavaScriptファイルなどのソースコードを保存するフォルダです。|
|publish                |プロジェクトを公開する際に,リリースモードで吐き出されたファイルが含まれているフォルダです。|
|runtime                |デバッグモードで吐き出された実行ファイルが含まれているフォルダです。|
|tools                  |ツールが含まれているフォルダです。|
| - bindings-generator  |自動バインディング生成ツール|
| - tojs                |自動JavaScriptバインディングの構成ファイルと生成スクリプト|
|index.html             |プロジェクトのメインWebページです。 Webサーバ経由でアクセスすることができ,動作中のゲームを確認することができます。|
|main.js                |初期化コードを含んだ,ゲームのメインコードです。|
|project.json           |プロジェクトの設定ファイルです。 詳しい説明はmain.jsに記述されています。|

##4. 迅速な開発能力

Cocos2d-x APIとその具体的な使用方法はこの章では説明していません。 開発者がプロトタイプを作り,その開発を促進するために役立つツール,Webプラットフォームの有用性を言及することが重要だからです。

プロトタイプ制作,開発中にWebプラットフォームの使用を提案する理由は以下の通りです。

- コンパイルを待つ必要がなく,ページのリロードで簡単に変更結果を確認できます。
- ブラウザはJavaScriptのデバッグツールとして,[Google Chromeデベロッパツール](https://developer.chrome.com/devtools)を用意しています。 これを使用することにより,迅速に問題点の発見,解決をすることができます。 また,ネイティブのIDEがJavaScriptのコードをデバッグすることができないという問題も解決しています。
- このアプローチはJavaScript開発者に適しています。

##5. ネイティブプラットフォームのコンパイル

###5.1 Cocosコンソール

プロジェクトのテスト,公開をネイティブプラットフォーム上で行う場合,Webプラットフォーム上でテストした後にプロジェクトをコンパイルする事ができます。 ここでもCocosコンソールを使用し,`cocos compile`というコマンドを使用することで,簡単にコンパイルすることができます。

```
// ターミナルもしくはコマンドラインを開き,プロジェクトのフォルダまで移動します。
// -p はプラットフォームを選択します。 web | ios | mac | android | win32を選択できます。
cocos compile -p web | ios | mac | android | win32

// -m はデバッグもしくはリリースといった公開モードを選択します。
// 下の記述はWebプラットフォームの例ですが,--advancedオプションを追加することにより
// JavaScriptのコードを圧縮するClosure Compilerを使用することができます。
cocos compile -p android -m release
cocos compile -p web -m release --advanced

// コンパイルを行いつつ,実機もしくはエミュレータ上で実行ファイルを実行することができます。
cocos run -p web
cocos run -p ios
```

Cocosコンソールについての詳細は[Cocosコンソールドキュメント](http://cocos2d-x.org/wiki/Cocos2d-console)を参照してください。

###5.2 IDEを使用してプロジェクトをコンパイル

`frameworks/runtime-src/`フォルダ内に各プラットフォームに対応したプロジェクトファイルをがあります。

- proj.ios_mac : iOS, Mac用のXcodeプロジェクト
- proj.win32 : Windows用のVisual Studioプロジェクト
- proj.android : Android用のエクリプスプロジェクト

##6. プロジェクトの公開

###6.1 ネイティブプラットフォームでの公開

- Mac / Win32

	MacまたはWindows用のプロジェクトを公開するには以下のコマンドを実行します。 コンパイルに成功した場合,`publish`フォルダ内に実行ファイルが追加されます。

    ```
    cocos compile -p mac | win32 -m release
    ```

- iOS

	iOS用のプロジェクトを公開するには以下のコマンドを実行します。 `--sign-identity`というオプションが使用でき,コード署名IDを指定することができます。 コンパイルに成功した場合,`publish`フォルダ内に実行ファイルが追加されます。

    ```
    cocos compile -p ios -m release --sign-identity "iPhone Distribution:xxxxxxxx"
    ```

- Android
    
    1. `cocos compile -p android -m release --ndk-mode release`というコマンドを実行し,apkファイルを作成します。
    2. コンパイルに成功した場合,`publish`フォルダ内にapkファイルが追加されます。 jarsignerというツールを使用することにより,Androidのキーストアでapkに署名をすることができます。 詳細は[Google公式ドキュメント](http://developer.android.com/tools/publishing/app-signing.html)に記述されています。
    
###6.2 Webプラットフォームでの公開

Web用のプロジェクトを公開するには`cocos compile -p web -m release`というコマンドを使用します。 コンパイルに成功した場合,`publish`フォルダ内に保存されます。 Webサーバ上に個々のフォルダを展開することができ,Webページを閲覧する事ができます。

上記でも軽く触れていますが,`--advance`オプションを使用することにより,Closure Compilerを使用し,高い圧縮率とより良いパフォーマンスの恩恵を受けることができます。 `--advance`オプションを使用して問題が発生した場合は,[Closure Compiler Advanced Compilationドキュメント](https://developers.google.com/closure/compiler/docs/api-tutorial3)を参照してください。