iOS/맥에서 자바스크립트를 사용해서 오브젝티브-C 함수를 호출하는 법
=======

Cocos2d-JS v3.0에서 자바스크립트의 오브젝티브-C 리플렉션 기능을 소개하고자 합니다. 자바스크립트에 의해 자바의 네이티브 함수를 호출하는 것과 같이 자바스크립트에서 오브젝티브-C 정적 메소드를 호출할 수 있습니다.

	var ojb = jsb.reflection.callStaticMethod(className, methodNmae, arg1, arg2, .....);

`jsb.reflection.callStaticMethod`를 사용해서 `className` `methodName`와 `parmeters`를 보내서 네이티브 OC 메소드를 호출할 수 있습니다.

##오브젝티브-C 클래스

- 아래의 예제와 같이 OC 클래스에서 기능적으로 아래의 경우 `NativeOcClass`에 해당하는 `className` 파라메터를 제공하는 것이 필요할 것입니다.
 
```
 	import <Foundation/Foundation.h>
	@interface NativeOcClass : NSObject
	+(BOOL)callNativeUIWithTitle:(NSString *)title andContent:(NSString *)content;
	@end
```
		
##오브젝티브-C 메소드

- 자바스크립트에서 OC로의 리플렉션은 오직 OC 클래스의 정적 메소드만을 지원합니다.

- 이전 예제의 `methodName` 파라메터는 클래스의 OC 메소드 이름으로 메소드 이름에서 볼 수 있듯이 예제처럼 `NativeOcClass`가 됩니다.
```
+(BOOL)callNativeUIWithTitle:(NSString *)title andContent:(NSString *)content;
```
그래서 `methodName`은 이 메소드를 위한 정의인 `callNativeUIWithTitle:addContent:`이 되고 **:**를 잊지 마세요. 우리는 세부적인 것에 대해서 이야기하지는 않지만 관심이 있다면 오브젝티브-C 프로그래밍 가이드를 찾아보면 세부사항을 찾아보실 수 있습니다.

- 아래의 다른 예제처럼 `methodName`은 `callNativeWithReturnString`이 되어야 합니다.
 
```
 	+(NSString *)callNativeWithReturnString;
```

##사용법

- 자바스크립트 코드에서 `NativeOcClass`의 네이티브 메소드 `callNativeUIWithTitle:andContent:`를 실행하기 위해 다음과 같인 `jsb.reflection.callStaticMethod` API를 사용할 수 있습니다: 

```
	var ret = jsb.reflection.callStaticMethod("NativeOcClass", 
											   "callNativeUIWithTitle:andContent:", 
											   "cocos2d-js", 
											   "Yes! you call a Native UI from Reflection");
```

- 이 메소드는 경고 다이얼로그(alert dialog)와 boolean 상태를 반환하는 것을 보여줍니다. 여기에 있는 임플리멘테이션처럼 `title`과 `content` 파라메터는 자바스크립트에서 보낸 문자열을 받습니다:

```
	+(BOOL)callNativeUIWithTitle:(NSString *) title andContent:(NSString *)content{
    	UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:title message:content delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"OK", nil];
    	[alertView show];
    	return true;
	}
```
		
##주의사항

Cocos2d-JS 리플렉션에서 파라메터와 리턴값을 타입이 제한적으로 지원됩니다.

- 네이티브 메소드에 파라메터 타입으로서 **float, int, double**를 사용하길 원하신다면 대신에 사용할 타입에 `NSNumber`를 적으셔야 합니다.
- 파라메터 타입으로서 **bool**을 사용하길 원하신다면 대신에 `BOOL`을 사용하도록 변경해야 합니다.
- 여기에 int, float이나 double 대신에 `NSNumber`를 사용하는 예제가 있습니다.
 
```
 	+(float) addTwoNumber:(NSNumber *)num1 and:(NSNumber *)num2 {
		float result = [num1 floatValue] + [num2 floatValue];
		return result;
	}
```
	
- 리턴값은 현재 버전에서 오직 ** int , float , bool ,string **만을 지원합니다.
