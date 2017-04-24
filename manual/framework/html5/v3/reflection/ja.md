#Cocos2d-JSでJavaのメソッドを呼び出す方法

Cocos2d-JS v3.0 βでは,JavaScript側から直接Javaの静的メソッドを呼び出すことができます。使い方は非常に簡単です。

```
var o = jsb.reflection.callStaticMethod( className, methodName, methodSignature, parameters... );
```

`callStaticMethod`メソッドではJavaのクラス名のパス,メソッド名,メソッドシグネチャ,引数が必要になります。また,Javaのメソッドから戻り値の値を取得することができます。JNIの経験がない場合,クラス名やシグネチャなどを渡すことが少し奇妙に思うかもしれませんが,Javaの仕様です。

##クラス名

クラス名のパスはJavaのパッケージも含める必要があります。次のサンプルでは`org.cocos2dx.javascript`というパッケージに,`Test`というクラスがあります。

```
package org.cocos2dx.javascript;

public class Test {
	
	public static void hello( String msg ) {
        System.out.println( msg );
	}
	
	public static int sum( int a, int b ) {
		return a + b;
	}
	
	public static int sum( int a ) {
		return a + 2;
	}
}
```

この場合,`Test`クラスのクラス名は`org/cocos2dx/javascript/Test`となります。`.`は全て`/`に置き換える必要があるので注意してください。

##メソッド名

メソッド名は非常に簡単です。このサンプルの場合は2つのメソッドどちらも`sum`になります。

##メソッドシグネチャ

メソッドシグネチャは少し複雑です。もっとも簡単なシグネチャは`()V`で,引数,戻り値なしのメソッドを表します。

例 :

- `(I)V`  int型の引数があり,戻り値がないメソッド。
- `(I)I`  int型の引数があり,戻り値がint型のメソッド。
- `(IF)Z` int型の引数とfloat型の引数があり,戻り値がbool型のメソッド。

括弧内の記号は引数の種類を表し,その後の記号は戻り値を表します。Javaではメソッドのオーバーライドが可能なので,同じメソッド名で異なる戻り値,引数を持つメソッドを定義することができます。メソッドシグネチャはそれらのメソッドを特定するために使用されています。

Cocos2d-JSではJavaの4つの型をサポートしています。

| Javaの型 | シグネチャ             |
| ---------- |-----               |             
| int        | I                  |
| float      | F                  |
| boolean    | Z                  |
| String     | Ljava/lang/String; |

##引数

引数は複数指定することも,指定しないことも可能です。`callStaticMethod`メソッドを呼び出して引数を指定する場合,JavaScriptのint型,bool型,string型の値を直接使用することができます。

##使用方法

`Test`クラスの静的メソッドを呼び出してみます。

```
// helloメソッドを呼び出します。
jsb.reflection.callStaticMethod( "org/cocos2dx/javascript/Test", "hello", "(Ljava/lang/String;)V", "this is a message from js" );

// 1つ目のsumメソッドを呼び出します。
var result = jsb.reflection.callStaticMethod( "org/cocos2dx/javascript/Test", "sum", "(II)I", 3, 7 );
cc.log( result );	// 10と出力されます。

// 2つ目のsumメソッドを呼び出します。
var result = jsb.reflection.callStaticMethod( "org/cocos2dx/javascript/Test", "sum", "(I)I", 3 );
cc.log( result );	// 5と出力されます。
```

コンソールを見ると結果が出力されていると思います。

##注意

スレッド関連に注意する必要があります。Cocos2dのAndroidアプリでは,エンジンとJavaScript VMは`GL`スレッドで更新され,Androidは`UI`スレッドでUIの更新を行っています。アプリのUIを更新するJavaのメソッドを呼び出すのであれば,`UI`スレッドで呼び出す必要があります。

次のサンプルは,AndroidのAlertDialogを表示するJavaのメソッドを呼び出します。

```
// AppActivityクラスに少し変更を加えます。
public class AppActivity extends Cocos2dxActivity {
	
	private static AppActivity app = null;
	@Override
	public void onCreate( Bundle savedInstanceState ) {
		super.onCreate( savedInstanceState );
		app = this;
	}
	
	public static void showAlertDialog( final String title, final String message ) {
		
		// runOnUiThreadメソッドを使用します。
		app.runOnUiThread( new Runnable() {
			@Override
			public void run() {
				AlertDialog alertDialog = new AlertDialog.Builder( app ).create();
				alertDialog.setTitle( title );
				alertDialog.setMessage( message );
				alertDialog.setIcon( R.drawable.icon );
				alertDialog.show();
			}
		} );
	}
}

```

JavaScript側で`showAlertDialog`メソッドを呼び出します。

```
jsb.reflection.callStaticMethod( "org/cocos2dx/javascript/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha" );
```

AndroidのAlertDialogが表示されているはずです。

##Java側からJavaScriptのメソッドを呼ぶ

JavaScript側からJavaのメソッドを呼び出すことが出来ましたが,反対にJava側からJavaScriptのメソッドを呼び出すことも可能です。

プロジェクトに`Cocos2dxJavascriptJavaBridge`クラスを追加します。このクラスの`evalString`メソッドでJavaScriptのメソッドを呼び出すことができます。このクラスは`frameworks\js-bindings\bindings\manual\platform\android\java\src\org\cocos2dx\lib`フォルダにあります。

AlertDialogのOKボタンを追加し,`OnClickListener`内で`evalString`メソッドを使用します。JavaScriptのコードを使用するので,必ず`GL`スレッドで実行するようにしてください。

```
alertDialog.setButton( "OK", new DialogInterface.OnClickListener() {
	public void onClick( DialogInterface dialog, int which ) {

		// runOnGLThreadを使用します。
		app.runOnGLThread( new Runnable() {
			@Override
			public void run() {
				Cocos2dxJavascriptJavaBridge.evalString( "cc.log(\"JavaScript Java bridge!\")" );
			}
		} );
	}
} );
```

OKボタンをクリックすると文字列が出力されます。`evalString`メソッドはJavaScriptのコードを実行でき,変数にアクセスする事もできます。