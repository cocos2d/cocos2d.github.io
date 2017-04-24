#안드로이드에서 Cocos2d-JS의 페이스북 SDK 사용하기

이 문서는 Cocos2d-JS의 페이스북 SDK 베타를 사용하는 앱 생성, APK 패킹을 위한 SDK 설정 등 통합에 대해 안내합니다. 

**공지**: Cocos2d-JS의 페이스북 SDK 알파는 Cocos2d-JS v3.0 RC2와 그 이후 버전에서만 제대로 동작합니다. 

##페이스북에서 어플리케이션 생성하기

[페이스북 개발자 페이지](https://developers.facebook.com/)에서 Apps->Create a New app을 클릭합니다, 앱 이름을 입력하고 앱을 생성합니다.

![](./1_en.png)

이제 우리는 대시보드 페이지에서 앱 ID를 확인할 수 있습니다.

![](./2.PNG)

앱 설정 페이지에서 "add platform"를 클릭하여 "Android"를 선택한 후 앱의 패키지 이름과 MainActivity의 클래스 이름, 키 해쉬를 입력합니다. 

![](./3.PNG)

JDK에서 제공하는 keytool를 통해 키 해쉬를 생성합니다.

Mac OS X:
```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```

윈도우즈：
```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```

키를 통해 생성하고 암호를 입력할 필요가 있습니다.

페이스북 앱 생성을 완료했습니다.

##Cocos2d-JS 프로젝트에 페이스북 SDK 알파를 추가

페이스북 SDK 알파에서 자바스크립트 코드를 사용하기에 앞서 안드로이드 프로젝트를 약간 수정해야 합니다.

**step1**: `frameworks/runtime-src/proj.android/res/values/strings.xml`에 앱 ID와 앱 이름 추가:

```
<string name="app_name">cocos sample</string>
<string name="app_id">1450063488603945</string>
```

**step2**: `frameworks/runtime-src/proj.android/AndroidManifest.xml`에 다음과 같은 정보들 추가:

```
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/app_id" />
<meta-data android:name="PluginUser" android:value="UserFacebook" />
<meta-data android:name="PluginShare" android:value="ShareFacebook" />

<activity android:name="com.facebook.LoginActivity" />
<provider android:authorities="com.facebook.app.NativeAppCallContentProvider1450063488603945"
          android:name="com.facebook.NativeAppCallContentProvider"
          android:exported="true"/>
<receiver android:name="org.cocos2dx.plugin.ShareFacebookBroadcastReceiver">
    <intent-filter>
        <action android:name="com.facebook.platform.AppCallResultBroadcast" />
    </intent-filter>
</receiver>
```

**step3**: `frameworks/runtime-src/proj.android/jni/Android.mk`에 Plugin-x 링크 라이브러리 추가:

```
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_pluginx_static
$(call import-module,cocos2d-x/plugin/jsbindings)
```

**step4**: `frameworks/runtime-src/proj.android/jni/hellojavascript/main.cpp`에 추가:

```
#include "PluginJniHelper.h"
void cocos_android_app_init (JNIEnv* env, jobject thiz) {
    LOGD("cocos_android_app_init");
    AppDelegate *pAppDelegate = new AppDelegate();
    JavaVM* vm;
    env->GetJavaVM(&vm);
    PluginJniHelper::setJavaVM(vm);
}
```

**step5**: `frameworks/runtime-src/proj.android/classes/AppDelegate.cpp`에 추가:

```
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include "jsb_cocos2dx_pluginx_auto.hpp"
#include "jsb_pluginx_extension_registration.h"
#endif

bool AppDelegate::applicationDidFinishLaunching()
{
	//...
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    sc->addRegisterCallback(register_all_pluginx_protocols);
    sc->addRegisterCallback(register_pluginx_js_extensions);
#endif
	//...
}
```

**step6**: `frameworks/runtime-src/proj.android/build-cg.json`의 `copy_resources` 부분에 추가:

```
{
    "from": "../../js-bindings/cocos2d-x/plugin/jsbindings/script", 
    "to": ""
},
{
    "from": "../../js-bindings/cocos2d-x/plugin/protocols/proj.android/src", 
    "to": "../src"
},
{
    "from": "../../js-bindings/cocos2d-x/plugin/plugins/facebook/proj.android/src", 
    "to": "../src"
}, 
{
    "from": "../../js-bindings/cocos2d-x/plugin/plugins/facebook/proj.android/sdk", 
    "to": "../libs"
}
```

**step7**: `frameworks/runtime-src/proj.android/project.properties`에 다음 코드 추가:

```
android.library.reference.2=../../js-bindings/cocos2d-x/plugin/plugins/facebook/proj.android/DependProject
```

**step8**: `frameworks/runtime-src/proj.android/src/org/cocos2dx/javascript/AppActivity.java`에 다음 코드 추가:

```
import org.cocos2dx.plugin.PluginWrapper;
import com.facebook.Session;
import android.content.Intent;
import android.os.Bundle;

public class AppActivity extends Cocos2dxActivity {

	//...

	@Override
	public Cocos2dxGLSurfaceView onCreateView() {
        Cocos2dxGLSurfaceView glSurfaceView = new Cocos2dxGLSurfaceView(this);
        glSurfaceView.setEGLConfigChooser(5, 6, 5, 0, 16, 8);
        PluginWrapper.init(this);
        PluginWrapper.setGLSurfaceView(glSurfaceView);

        return glSurfaceView;
    }
	
	@Override
	public void onActivityResult(int requestCode, int resultCode, Intent data) {
	    super.onActivityResult(requestCode, resultCode, data);
	    Session.getActiveSession().onActivityResult(this, requestCode, resultCode, data);
	}
	
	@Override
	public void onSaveInstanceState(Bundle outState) {
	    super.onSaveInstanceState(outState);
	    Session session = Session.getActiveSession();
	    Session.saveSession(session, outState);
	}

	//...
}
```

이제 프로젝트 설정과 페이스북 SDK 알파를 사용하여 페이스북 지원 앱을 작성할 준비가 끝났습니다.

## 페이스북 SDK 알파 사용법

페이스북 API 사용법은 [페이스북 SDK API 레퍼런스](../api-reference/ko.md)를 참조하세요.

## 프로젝트를 APK로 패키지

Cocos2d-JS에 내장된 툴을 사용할 수 있습니다: 프로젝트 폴더에서 터미널이나 커맨드 라인에서 다음 명령을 통해 코코스 콘솔을 통해 프로젝트를 APK 파일로 패키지할 수 있습니다:

```
cocos compile -p android
```

세부적인 사항은 [코코스 콘솔 문서](http://www.cocos2d-x.org/docs/manual/framework/html5/v2/cocos-console/ko)를 참조해주세요.
