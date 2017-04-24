#Cocos2d コンソールツール

##バックグラウンド

Cocos2dのコンソールツールは,Cocos2d-JSでの環境設定や,プロジェクト作成を簡単にする為に制作されたツールです。

Cocos2d-JS v3.0 αがリリースされた現在,Cocos2d-JSBではCocos2d-html5の全ての新機能をサポートしています。詳細情報は[リリースノート](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0a/release-note/en)をご覧ください。Cocos2d-JS v3.0 αではJavaScriptユーザが馴染めるように古いAPIがリファクタリングされています。また,Cocos2d-JSBのAPIも単一のソースコードで動作するようにリファクタリングされています。

[Cocos2d-JS](https://github.com/cocos2d/cocos2d-js)は,Cocos2d-html5とCocos2d-JSBを単一のリポジトリにマージしたもので,Webゲーム,ネイティブゲームなどプラットフォーム問わずJavaScriptで書くことができます。

##コンソールツール

Cocos2d-JSでは,簡単にWebゲーム,ネイティブゲームを制作できるようにコンソールツールを提供しています。コンソールツールはプロジェクトを作成することができ,Android, iOS, Mac OS, Webに吐き出すことができます。

##セットアップ

ツールを使用する前にセットアップをする必要があります。まず,Cocos2d-JSのリポジトリをクローンし,サブモジュールを更新します。Cocos2d-JSのフォルダをコンソールで開き,コンソール上で`./setup.py`を実行します。セットアップ中にAndroid SDK, NDK, ANTのパスを聞かれるので入力してください。また,このツールはPythonで開発されているので,Python( 32bit )2.75以降をインストールする必要があります。( Python3には対応していないので注意してください。 )

セットアップに必要なツールのリンク :

* [Python 2.7.6](https://www.python.org/download/releases/2.7.6/)
* [Android SDK](https://developer.android.com/sdk/index.html?hl=sk)
* [NDK](https://developer.android.com/tools/sdk/ndk/index.html)
* [Ant binary release](http://ant.apache.org/)
    - Antをダウンロードします。
    - 適当なディレクトリにダウンロードしたファイルを解凍します。
    - 環境変数を設定します。JAVA\_HOMEにはJavaのパスを,ANT\_HOMEには解凍済みのAntのパスを設定します。Unixの場合は${ANT\_HOME}/bin,Windowsの場合は%ANT\_HOME%/binを使用します。( 環境変数の設定はターミナルまたはコマンドラインで使用可能なコマンドに,実行可能ファイルのパスをエクスポートすることを意味します。 )
    
    ```
    // 環境変数を追加する方法として,Macの場合は.bash_profileファイルに直接追加する事もできます。
    export ANT_ROOT=/usr/local/ant/bin
    export JAVA_HOME=/usr/local/jdk1.7.0_51
    ```

##利用方法

セットアップが正常に完了したら,`cocos`コマンドを使用できるようになります。

###新しいプロジェクトを作成する

* Cocos2d-JSのプロジェクトを作成する :

	```
	cocos new projectName -l js
	```

* Webエンジンのみのプロジェクトを作成する :

	```
	cocos new projectName -l js --no-native
	```

* 指定されたディレクトリにプロジェクトを作成する :

	```
	cocos new projectName -l js -d ./Projects
	```

###プロジェクトを実行する

* Webサーバを利用してCocos2d-JSのプロジェクトを実行する :

	```
	cd directory/to/project
	cocos run -p web
	```

* Closure Compilerのアドバンスドモードを使用してプロジェクトをコンパイルする :

    ```
    cd directory/to/project
    cocos compile -p web -m release --advanced
    ```

* プロジェクトをコンパイルし,ネイティブプラットフォーム上で実行する :

	```
	cd directory/to/project
	cocos compile -p ios | mac | android | web
	cocos run -p ios | mac | android
	```

* オプション機能について

	```
	-p platform  : ios | mac | android | webからプラットフォームを選択することができます。
	-s source    : プロジェクトのディレクトリを指定することができます。ディレクトリを指定しない場合は現在のディレクトリが使用されます。
	-q           : ログメッセージを削除し,終了します。
	-m mode      : デバッグモード,リリースモードを選択することができます。デフォルトではデバッグモードになっています。
	--source-map : ソースマップファイル。( Webプラットフォームのみ )
    --advanced   : Closure Compilerのアドバンスドモードを使用し,JavaScriptのコードを圧縮します。( Webプラットフォームのみ )
	```

###ヘルプ

使用方法がわからない場合,`-h`コマンドを使用することでヘルプメッセージを見ることができます。コマンドの使用方法を一部紹介します。

* `new` プロジェクトを作成する。
* `compile` プロジェクトをコンパイルする。
* `run` プロジェクトを実行する。