#안드로이드에서 JS를 사용해서 자바 메소드를 호출하는 법

Cocos2d-JS v3.x에서 자바스크립트에서 직접 자바 정적 메소드를 호출하는 새로운 기능을 가지고 있습니다. 사용법은 아주 단순합니다:

```
var o = jsb.reflection.callStaticMethod(className, methodName, methodSignature, parameters...)
```

`callStaticMethod` 메소드에서 자바 클래스 이름, 메소드 이름, 메소드 서명과 파라메터를 넘겨주고 그리고 자바로부터 리턴값을 받을 수 있습니다. JNI 경험이 없다면 자바 클래스 이름과 메소드 서명은 약간 이상할 수 있습니다. 그러나 이 것은 자바 사양입니다. 

##클래스 이름

클래스 이름은 자바 패키지 경로를 포함해야 합니다. 예를 들자면 `org.cocos2dx.javascript` 패키지 내에 `Test` 클래스가 있습니다.

```
package org.cocos2dx.javascript;

public class Test {
	
	public static void hello(String msg){
        System.out.println(msg);
	}
	
	public static int sum(int a, int b){
		return a + b;
	}
	
	public static int sum(int a){
		return a + 2;
	}

}
```

`Test`의 올바른 클래스 이름은 `org/cocos2dx/javascript/Test`입니다. `/`를 사용하고, `.`이 **아니다**라는 점에 주의하세요.

##메소드 이름

메소드 이름은 아주 간단합니다. 예를 들자면 두 수의 합을 구하는 메소드의 메소드 이름은 `sum`입니다.

##메소드 서명

메소드 서명은 약간 복잡합니다. 대부분의 간단한 서명은 `()V`입니다. 이는 파라메터가 없고 리턴값이 없는 메소드를 보여줍니다. 다른 예제는 다음과 같습니다:

- `(I)V`는 int 파라메터와 리턴값이 없는 메소드를 나타냅니다.
- `(I)I`는 int 파라메터와 int 리턴값이 있는 메소드를 나타냅니다.
- `(IF)Z`는 int 파라메터와 float 파라메터 그리고 boolean 리턴값을 가지는 메소드를 나타냅니다.

이제 메소드 서명을 이해하셨을 것입니다. 브라켓의 심볼이 파라메터의 종류와 심볼을 나타낸 후 브라켓은 리턴값의 종류를 보여줍니다. 왜냐하면 같은 메소드 이름을 가지지만 다른 파라메터와 리턴값을 가지는, 다중 메소드가 될 수 있는 자바의 오버로드 메소드를 허용하기 때문입니다. 메소드 서명은 이런 메소드의 아이덴티티를 사용하는 것을 도와줍니다.

Cocos2d-JS는 4가지 자바 타입을 지원합니다:

| 자바 타입 | 서명 |
| ---------- |-----|             
| int | I |
| float | F |
| boolean | Z |
| String | Ljava/lang/String; |

##파라메터

파라메터의 수는 0 또는 그보다 높을 수 있습니다. 그리고 `callStaticMethod`를 사용할 때 자바스크립트의 숫자, boolean, 문자열를 직접 사용할 수 있습니다.

##사용법

`Test` 클래스의 정적 메소드를 호출할 수 있습니다:

```
// hello 메소드 호출
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "hello", "(Ljava/lang/String;)V", "this is a message from js");

//첫번째 sum 메소드 호출
var result = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "sum", "(II)I", 3, 7);
cc.log(result); //10

//두번째 sum 메소드 호출
var result = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "sum", "(I)I", 3);
cc.log(result); //5
```

콘솔에서 볼 수 있듯이 정확한 결과값이 나옵니다.

##주의사항

아주 중요한 주의사항은 쓰레드입니다! 코코스 안드로이드 앱에서 엔진과 자바스크립트 VM은 `gl` 쓰레드에서 동작합니다. 그리고 안드로이드의 UI 업데이트는 `ui` 쓰레드가 담당합니다. 그래서 앱 UI를 업데이트하기 위해 자바 메소드를 호출한다면 `ui` 쓰레드에서 동작합니다.

예를 들자면 안드로이드 AlertDialog를 보여주는 자바 메소드를 호출할 것입니다.

```
//AppActivity 클래스에 약간의 수정을 가합니다.
public class AppActivity extends Cocos2dxActivity {
	
	private static AppActivity app = null;
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		app = this;
	}
	
	public static void showAlertDialog(final String title,final String message) {
		
		//runOnUiThread를 여기서 사용합니다
		app.runOnUiThread(new Runnable() {
			@Override
			public void run() {
				AlertDialog alertDialog = new AlertDialog.Builder(app).create();
				alertDialog.setTitle(title);
				alertDialog.setMessage(message);
				alertDialog.setIcon(R.drawable.icon);
				alertDialog.show();
			}
		});
	}
}

```

그리고 자바스크립트에서 `showAlertDialog`를 호출합니다:

```
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
```

안드로이드 네이티브 AlertDialog가 동작하는 것을 볼 수 있습니다.

##기타

이제 자바스크립트에서 자바 메소드를 성공적으로 호출했습니다. 자바에서 자바스크립트를 호출할 수 있냐구요? 당연히 됩니다!

당신의 프로젝트 `evalString` 메소드를 가지는 `Cocos2dxJavascriptJavaBridge` 클래스를 추가합니다. `frameworks\js-bindings\bindings\manual\platform\android\java\src\org\cocos2dx\lib` 폴더에 위치합니다.

AlertDialog를 위해 OK 버튼을 추가하고 `OnClickListener`에 `evalString`를 사용합니다. 이번에는 `gl` 쓰레드에서 자바스크립트 코드가 실행되는 점에 주의하세요. 

```
alertDialog.setButton("OK", new DialogInterface.OnClickListener() {
	public void onClick(DialogInterface dialog, int which) {

		//runOnGLThread를 여기서 사용해야 합니다.
		app.runOnGLThread(new Runnable() {
			@Override
			public void run() {
				Cocos2dxJavascriptJavaBridge.evalString("cc.log(\"Javascript Java bridge!\")");
			}
		});
	}
});
```

OK 버튼을 클릭한 후에 결과를 볼 수 있습니다. `evalString`는 어떠한 자바스크립트 코드를 실행하고 자바스크립트 변수에 접근할 수 있습니다.
