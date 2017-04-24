#iOS에서 Cocos2d-JS의 페이스북 SDK 사용하기

이 문서는 Cocos2d-JS의 페이스북 SDK 베타의 통합을 안내합니다.
 
**공지**: Cocos2d-JS의 페이스북 SDK 베타는 오직 Cocos2d-JS v3.0 RC2와 그 이후 버전에서만 동작합니다. 

## 당신의 페이스북 어플리케이션 생성하기

Cocos2d-JS의 페이스북 SDK 베타는 공식 페이스북 iOS SDK에 기반합니다. 첫번째로 페이스북 어플리케이션을 생성하기 위해 [Facebook iOS Startup Guide](https://developers.facebook.com/docs/ios/getting-started/)를 참조해주세요.

## 당신의 프로젝트에 페이스북 iOS SDK 통합하기

당신의 프로젝트의 Xcode 프로젝트 파일을 엽니다(프로젝트의 이름을 `myProject`라고 가정), 우리의 경우 `myProject/frameworks/runtime-src/proj.ios_mac/`에서 찾을 수 있었습니다.

1. 페이스북 iOS SDK 추가: `myProject/frameworks/js-bindings/cocos2d-x/plugin/plugins/proj.ios/sdk/`의 `FacebookSDK.framework`를 찾아서, `Link Binary With Libraries`로 추가합니다: 프로젝트 루트를 클릭하면, `target`->`myProject IOS`->`Build Phases`->`Link Binary With Libraries`. 마지막으로 `+` 버튼을 눌러서 `FacebookSDK.framework`를 리스트에 추가해줍니다.

2. 페이스북 공식 iOS 시작 가이드에 따라서, 당신의 페이스북 어플리케이션의 `FacebookAppID` `FacebookDisplayName` `URL types` 정보를 `Info.plist` 파일에 추가합니다. 이 파일은 Xcode 프로젝트의 `ios` 폴더에서 찾을 수 있습니다. 그러면 다음의 이미지와 같은 결과를 볼 수 있습니다:<br/><br/>
![](images/info.png)

3. Info.plist 파일에 두가지 아이템을 더 추가합니다: `PluginShare`->`ShareFacebook`와 `PluginUser`->`UserFacebook`.

4. `ios/AppController.mm`를 찾아서, 페이스북 iOS SDK에 필요한 코드를 추가합니다:

- 페이스북 iOS SDK의 헤더로 `FacebookSDK/FacebookSDK.h`를 추가합니다:

	```
	#import <FacebookSDK/FacebookSDK.h>
	```

- `AppController.mm`에 다음과 같은 메소드를 추가합니다: 

	```
	- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
	{
	    return [FBSession.activeSession handleOpenURL:url];
	}
	```

- `applicationDidBecomeActive:` 함수에 `[FBAppCall handleDidBecomeActive];`를 추가합니다: 

	```
	- (void)applicationDidBecomeActive:(UIApplication *)application {
	    [FBAppCall handleDidBecomeActive];
	    cocos2d::Director::getInstance()->resume();
	}
	```

## 당신의 프로젝트에 Plugin-x와 PluginFacebook 추가하기

`Cocos2d-JS의 페이스북 SDK 베타`는 Plugin-x에 기반하며, 먼저 프로젝트에 Plugin-x를 추가할 필요가 있습니다.

1. PluginProtocol의 Xcode 프로젝트(`myProject/frameworks/js-bindings/cocos2d-x/plugin/protocols/proj.ios`)를 당신의 Xcode 프로젝트의 서브 프로젝트로 추가합니다: `myProject`에서 우클릭한 후, `addFiles to "myProject"`를 선택하여 PluginProtocol 프로젝트를 직접 `myProject`의 아래로 드래그하여 추가합니다.

2. PluginFacebook's Xcode 프로젝트（`myProject/frameworks/js-bindings/cocos2d-x/plugin/plugins/facebook/proj.ios`）를 당신의 Xcode 프로젝트의 서브 프로젝트로 추가합니다: `myProject`에서 우클릭한 후, `addFiles to "myProject"`를 선택하여 PluginFacebook 프로젝트를 직접 `myProject`의 아래로 드래그하여 추가합니다.

3. 빌드 페이즈에 라이브러리 추가: `myProject`를 클릭하고, `target`->`myProject IOS`->`Build Phases`, `Link Binary With Libraries` 리스트의 `+` 버튼을 클릭하여 `libPluginProtocol.a`과 `libPluginFacebook.a`를 추가합니다.

## JSB를 위한 Plugin-x 추가하기

이전 단계를 완료한 후에 페이스북 SDK 베타의 C++ 레벨 API들의 캡슐화되지 않은 FacebookAgent 클래스를 사용할 수 있습니다. 그러나 자바스크립트 코드를 사용하기 위해서는 자바스크립트 바인딩 코드를 SpiderMonkey에 인클루드하고 등록하는 몇가지 단계가 더 있습니다. 

1. jsb_pluginx.js(`myProject/frameworks/js-bindings/cocos2d-x/plugin/jsbindings/script`)를 `myProject`에 추가합니다, `Build Phases`의 `Copy Bundle Resources`에서 확인합니다.

2. `Classes` 폴더를 찾아서, `AppDelegate.cpp`에 자바스크립트 바인딩에 관련된 두 개의 헤더 파일을 추가합니다: `jsb_cocos2dx_pluginx_auto.hpp`과 `jsb_pluginx_extension_registration.h`.

    ```
	#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
		#include "jsb_cocos2dx_pluginx_auto.hpp"
		#include "jsb_pluginx_extension_registration.h"
	#endif
    ```

3. `AppDelegate.cpp`의 `AppDelegate::applicationDidFinishLaunching` 함수에 자바스크립트 바인딩 코드를 다음과 같이 등록합니다:

    ```
	#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
		sc->addRegisterCallback(register_all_pluginx_protocols);
		sc->addRegisterCallback(register_pluginx_js_extensions);
	#endif
    ```

PluginFacebook 프로젝트는 이제 C++에서 사용할 준비가 되었습니다, Plugin-x에 관해 더 상세한 정보를 얻으시리면 [Plugin-x 구조](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/plugin-x-architecture/ko)와 [Integrate Plugin-x on iOS]()를 참조해주세요.

## 페이스북 SDK 베타 사용법

사용법에 대해서 알고 싶으시다면 [페이스북 SDK 베타 API 레퍼런스](../api-reference/ko.md)를 참조해주세요.
