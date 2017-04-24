Cocos2d-JSでObjective-Cのメソッドを呼び出す方法( iOS, Macのみ )
=======

Cocos2d-JS v3.0 RC2では,Javaのメソッド呼び出し同様にObjective-Cの静的メソッドを呼び出すことができます。

```
var obj = jsb.reflection.callStaticMethod( className, methodNmae, arg1, arg2, ..... );
```

`jsb.reflection.callStaticMethod`メソッドで,Objective-Cのメソッドを呼び出すことができます。引数にクラス名,メソッド名,引数が必要になります。

##Objective-C クラス名

- 次のサンプルのようにObjective-Cのクラスを用意し,メソッドを定義します。このサンプルのクラス名は`NativeOcClass`になります。

```
import <Foundation/Foundation.h>
@interface NativeOcClass : NSObject
+(BOOL)callNativeUIWithTitle:(NSString *)title andContent:(NSString *)content;
@end
```

##Objective-C メソッド名

- JavaScript側から呼び出せるのはObjective-Cの静的メソッドのみになります。

- 上記の例ではクラス名を`NativeOcClass`としましたが,メソッド名も同じようにObjective-Cのクラス内のメソッド名になります。

```
+(BOOL)callNativeUIWithTitle:(NSString *)title andContent:(NSString *)content;
```

このサンプルのメソッド名は`callNativeUIWithTitle:addContent:`になります。  
**:**を忘れないようにしてください。ここでは詳細を記述しませんが,詳細を知りたい場合,Objective-Cのプログラミングガイドをご覧ください。

- 次のサンプルのメソッド名は`callNativeWithReturnString`になります。

```
+(NSString *)callNativeWithReturnString;
```

##使用例

- `jsb.reflection.callStaticMethod`メソッドを使用して,JavaScript側から`NativeOcClass`の`callNativeUIWithTitle:andContent:`メソッドを呼び出します。

```
var ret = jsb.reflection.callStaticMethod( "NativeOcClass", 
										   "callNativeUIWithTitle:andContent:",
										   "cocos2d-js",
										   "Yes! you call a Native UI from Reflection" );
```

- このメソッドはアラートダイアログを表示し,booleanの値を返却するものです。JavaScript側から引数として,`タイトル`と`内容`の文字列を受け取ります。

```
+(BOOL)callNativeUIWithTitle:(NSString *) title andContent:(NSString *) content {
	UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:title message:content delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"OK", nil];
	[alertView show];
	return true;
}
```

##注意

- メソッドの引数で**float, int, double**を使用する場合は,`NSNumber`に置き換える必要があります。

- 上記と同じく,引数で**bool**を使用する場合は,`BOOL`に置き換える必要があります。

- このサンプルでは**float, int, double**の代わりに`NSNumber`を使用しています。

```
+(float) addTwoNumber:(NSNumber *)num1 and:(NSNumber *)num2 {
	float result = [num1 floatValue] + [num2 floatValue];
	return result;
}
```

- 現バージョンでサポートしている戻り値の型は**int, float, bool, string**のみになります。