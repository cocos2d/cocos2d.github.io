オブジェクトプール
=====

## cc.poolを使用する場面

インスタンスを頻繁に生成,削除するクラスがある場合に有効です。`cc.pool`にインスタンスを格納し,新たにインスタンスが必要になった時は`cc.pool`内のインスタンスを再利用します。オブジェクトプールを使用することにより,メモリ使用量の削減とパフォーマンス向上を行うことができます。

## cc.poolの使用例

1. **`cc.pool`を使用できる環境を整える**

	まずはクラス内に`unuse`関数と`reuse`関数を作成します。プールにオブジェクトを格納する時は`unuse`関数が呼び出されます。プールからオブジェクトを取得する場合は`reuse`関数が呼び出され,指定した引数で再初期化を行います。

	ここでは`MySprite`クラスを例に上げ,機能の説明を行います。

    ```
	var MySprite = cc.Sprite.extend( {
		_hp: 0,
		_sp: 0,
		_mp: 0,
		ctor: function ( f1, f2, f3 ) {
    		this._super( f1, f2, f3 );
    		this.initData( f1, f2, f3 );
		},
		initData: function ( f1, f2, f3 ) {
    		this._hp = f1;
    		this._mp = f2;
    		this._sp = f3;
		},
		unuse: function () {
    		this._hp = 0;
    		this._mp = 0;
    		this._sp = 0;
    		this.retain(); // JSBの場合。
    		this.setVisible( false );
    		this.removeFromParent( true );
		},
		reuse: function ( f1, f2, f3 ) {
    		this.initData( f1, f2, f3 );
    		this.setVisible( true );
		}
	} );	
    MySprite.create = function ( f1, f2, f3 ) {
        return new MySprite( f1, f2, f3 )
    }
    MySprite.reCreate = function ( f1, f2, f3 ) {
        var pool = cc.pool;
        if ( pool.hasObject( MySprite ) ) return pool.getFromPool( MySprite, f1, f2, f3 );
        return  MySprite.create( f1, f2, f3 );
    }
    ```

2. **`cc.pool`にオブジェクトを格納する**

    ```
    cc.pool.putInPool( object );
    ```

	`putInPool`関数は`object.unuse()`を呼び出し`cc.pool`に格納します。

3. **`cc.pool`からオブジェクトを取得する**

    ```
    var object = cc.pool.getFromPool( "MySprite", args );
    ```

	プールからオブジェクトを取り出すには,`getFromPool`関数にクラスと引数を渡して使用します。プールは渡された引数を利用して`reuse`関数を呼び出し,オブジェクトを再初期化して返却します。使用可能なオブジェクトをが存在しない場合はnullが返却されます。

4. **使用可能なオブジェクトが存在するか確認する**

    ```
    var exist = cc.pool.hasObject( "MySprite" );
    ```

5. **`cc.pool`からオブジェクトを削除する**

    ```
    cc.pool.removeObject( object );
    ```

6. **プール内のオブジェクトを全て削除する**

    ```
    cc.pool.drainAllPools();
    ```
    
    ゲーム内のシーンを変更するとき,現在のシーンで使用していたオブジェクトは不要になることが多いと思います。`drainAllPools`関数でプール内のオブジェクトを全て削除することができます。