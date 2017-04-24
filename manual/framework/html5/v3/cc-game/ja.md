# cc.game

## 概要

ゲームを実行するためのコードを簡略化するために`cc.Application`と`cc.AppControl`は削除され,`cc.game`に変更されています。

## 使用方法

`index.html`に`xxx/frameworks/cocos2d-html5/CCBoot.js`とゲームを実行するためのコードを書く`main.js`を記述します。

`project.json`ではプロジェクトの構成設定を行います。

```
cc.game.onStart = function() {
    // リソースを読み込みます。
    cc.LoaderScene.preload( resource_list, function () {
        cc.director.runScene( new MyScene() );
    }, this );
};
cc.game.run();
```

`cc.game.run`が呼び出されている間はエンジンが`project.json`を読み込みます。

## 実行を遅延する

全てのスクリプトを用意した後にメインループの実行を遅延させる事ができます。

```
cc.game.onStart = function() {
    // リソースを読み込みます。
    cc.LoaderScene.preload( resource_list, function () {
        cc.director.runScene( new MyScene() );
    }, this );
};
cc.game.prepare();

document.getElementById( "myBtn" ).addEventListener( "click", function() {
    cc.game.run();
} );
```

## デバッグモード定数

`project.json`に`debugMode`が定義されています。

```
DEBUG_MODE_NONE : 0                     // なし
DEBUG_MODE_INFO : 1                     // 情報レベルが出力されます
DEBUG_MODE_WARN : 2                     // 警告レベルが出力されます
DEBUG_MODE_ERROR : 3                    // エラーレベルが出力されます
DEBUG_MODE_INFO_FOR_WEB_PAGE : 4        // 情報レベルがhtmlページに出力されます
DEBUG_MODE_WARN_FOR_WEB_PAGE : 5        // 警告レベルがhtmlページに出力されます
DEBUG_MODE_ERROR_FOR_WEB_PAGE : 6       // エラーレベルがhtmlページに出力されます
```

## CONFIG_KEY定数

`project.json`にキーが定義されています。

```
engineDir : "engineDir",
dependencies : "dependencies",
debugMode : "debugMode",
showFPS : "showFPS",
frameRate : "frameRate",
id : "id",
renderMode : "renderMode",
jsList : "jsList",
classReleaseMode : "classReleaseMode"
```

`cc.game.config[cc.game.CONFIG_KEY.***]`を使用して,ゲームに使用される設定値を取得することができます。

## EVENT\_HIDE & EVENT\_SHOWについて

Cocos2d-JS v3.0ではブラウザのタブ切り替え時,バックグラウンド移動時,フォアグラウンド移動時,スマートフォンのホームボタンが押下時などのイベントを受け取るイベントリスナを追加することができます。

	cc.eventManager.addCustomListener( cc.game.EVENT_HIDE, function() {
	
		// バックグラウンド移動時のハンドル
    } );
    cc.eventManager.addCustomListener( cc.game.EVENT_SHOW, function() {
    
        // フォアグラウンド移動時のハンドル
    } );