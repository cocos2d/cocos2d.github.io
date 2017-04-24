#Cocos2d-JS v3.0におけるオブジェクトの生成とクラスの継承

Cocos2d-JSにおけるオブジェクトの生成方法は,Cocos2d-x同様,各クラスの`create`関数を使用していました。Cocos2d-JS v3.0からは,オブジェクトを生成する方法として`new`演算子を使用します。Cocos2d-JS v3.0 alpha1のJSBを使用する場合,エンジン内のクラスを継承することができない問題が発生しています。（Cocos2d-JS v3.0 alpha2では解決されています。）`new`演算子がサポートされたことにより,継承のコードが簡単に書けるようになりました。

このドキュメントでは使用方法だけではなく,いくつかの実装例をご紹介します。

##1. 非推奨のcreate関数について##

`new`演算子がサポートされたので,`create`関数及び`createWithXXX`関数が非推奨になりました。`create`関数の全ての引数の組み合わせをサポートしているので,`new`演算子を使用してコンストラクトする場合も,`create`関数と同じ引数で動作します。

##2. コンストラクタ##

Cocos2d-JS v3.0では`new`演算子を使用し,クラスのコンストラクタを呼び出します。スプライトを生成する使用例は以下のようになっています。Cocos2d-html5とCocos2d-x JSBの両方でもサポートされていますが,実装方法は異なります。

	var sprite = new cc.Sprite( filename, rect );
	var sprite = new cc.Sprite( texture, rect );
	var sprite = new cc.Sprite( spriteFrameName );

Cocos2d-html5では`create`関数と同じ引数をサポートする為に,エンジンクラス内の`ctor`関数をリファクタリングしています。

Cocos2d-JSBの場合,cc.Spriteの`new`演算子を使用して,C++レベルのjs\_cocos2dx\_Sprite\_constructorを実行します。この関数はスプライトにメモリを割り当て,オートリリースプールに追加します。その後,initWithXXX関数を使用してJSレベルの初期化である`_ctor`関数を実行します。

| Javascript | JSB | Cocos2d-x |
| ---------- |-----|-----------|              
| cc.Sprite.initWithSpriteFrameName | js_cocos2dx_Sprite_initWithSpriteFrameName | cocos2d::Sprite::initWithSpriteFrameName |
| cc.Sprite.initWithSpriteFrame | js_cocos2dx_Sprite_initWithSpriteFrame | cocos2d::Sprite::initWithSpriteFrame |
| cc.Sprite.initWithFile | js_cocos2dx_Sprite_initWithFile | cocos2d::Sprite::initWithFile |
| cc.Sprite.initWithTexture | js_cocos2dx_Sprite_initWithTexture | cocos2d::Sprite::initWithTexture |

処理のシーケンスダイアログは以下のようになっています。

![](res/2.PNG)


##3. 継承##

Cocos2d-html5 v2.xでは,クラスを拡張する際に`create`関数とは別に,初期化を行う関数を使用することができます。

	var MySprite = cc.Sprite.extend( {
		ctor:function() {
			this._super();
			// ユーザ独自の初期化を行うことができます。
		}
		// プロパティや関数を追加することができます。
	} );
	MySprite.create = function( filename, rect ) {
		var sprite = new MySprite();
		// テクスチャを矩形切り出しで初期化します。
		sprite.initWithTexture( fileName, rect );
		return sprite;
	};
    
    // スプライトを生成します。
    var sprite = MySprite.create( texture, cc.rect( 0, 0, 480, 320 ) );
    
Cocos2d-JSでは,正しい引数で`ctor`関数をオーバーライドし,`_super`関数を呼び出します。

	var MySprite = cc.Sprite.extend( {
		ctor:function( filename, rect ) {
			this._super( filename, rect );
			// ユーザ独自の初期化を行うことができます。
		}
		// プロパティや関数を追加することができます。
	} );
    
    // スプライトを生成します。
    var sprite = new MySprite( texture, cc.rect( 0, 0, 480, 320 ) );

Cocos2d-html5では,`new`演算子がサポートされているので理解することが容易です。

しかし,Cocos2d-JSBは少し複雑になっています。`_super`関数はC++レベルのスプライトの`ctor`関数を呼び出します。`js_cocos2dx_Sprite_ctor`関数はスプライトのインスタンスを生成するだけではなく,`cc.Sprite.prototype._ctor`関数を呼び出し,引数を渡します。`_ctor`関数はJSレベルのラッパーであり,渡された引数に応じてスプライトを初期化します。最後にユーザが拡張した`ctor`関数が呼び出されるようになっています。

処理のシーケンスダイアログは以下のようになっています。

![](res/3.PNG)
