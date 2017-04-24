#Android平台上如何配置Facebook平台集成

这篇文档展示如何在Android平台快速地开始使用Cocos2d-JS的Facebook平台支持，从创建app，配置SDK到最后的打包成apk。

##在Facebook上创建应用

在[Facebook开发者页面](https://developers.facebook.com/)点击Apps->Add a New app, 选择android平台， 输入应用名，创建自己的新应用。

![](./1.PNG)
![](./1_2.PNG)

然后在新创建的app的dashboard页面你就可以看到它的App ID了。

![](./2.PNG)

在app的Settings页面点击add platform,选择Android，然后输入应用的包名，MainActivity的类名以及key hash。

![](./3.PNG)

key hash需要使用JDK提供的keytool生成。

在Mac OS X运行：
```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```

在Windows运行：
```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```

需要输入创建key时的密码。

这样就完成了Facebook App的创建，更详细的信息请参考Facebook官方文档：[Step 5. Create a Facebook App - Getting Started with the Facebook SDK for Android](http://developers.facebook.com/docs/android/getting-started/#create-app)

##添加Facebook平台支持到你的Cocos2d-JS工程

使用cocos命名行工具创建js工程。然后需要对Android工程做一些修改才可以在js代码中使用Facebook API。

**Step1**：在frameworks/runtime-src/proj.android/res/values/strings.xml添加app name和app id：

```
<string name="app_name">cocos sample</string>
<string name="app_id">1450063488603945</string>
```

**Step2**:在frameworks/runtime-src/proj.android/AndroidManifest.xml添加以下代码片段：

```
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/app_id" />

<activity android:name="com.facebook.LoginActivity" />
<provider android:authorities="com.facebook.app.NativeAppCallContentProvider1450063488603945"
          android:name="com.facebook.NativeAppCallContentProvider"
          android:exported="true"/>
```

**Step3**:在frameworks/runtime-src/proj.android/jni/Android.mk中添加Plugin-x链接库：

```
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_pluginx_static
$(call import-module,cocos2d-x/plugin/jsbindings)
```

**Step4**:在frameworks/runtime-src/proj.android/jni/hellojavascript/main.cpp文件中添加以下代码片段:

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

**Step5**:在frameworks/runtime-src/Classes/AppDelegate.cpp中添加如下代码片段。**注意**：请留意插入代码的位置：

```
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include "jsb_cocos2dx_pluginx_auto.hpp"
#include "jsb_pluginx_extension_registration.h"
#endif

bool AppDelegate::applicationDidFinishLaunching()
{
    ScriptingCore* sc = ScriptingCore::getInstance();

    ...

    // Add these lines before sc->start()
	#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
		sc->addRegisterCallback(register_all_pluginx_protocols);
		sc->addRegisterCallback(register_pluginx_js_extensions);
	#endif

	sc->start();    
    
    ...

    return true;
}
```

**Step6**:在frameworks/runtime-src/proj.android/build-cg.json文件的`copy_resources`添加如下代码片段：

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

**Step7**:在frameworks/runtime-src/proj.android/project.properties中添加如下代码片段：

```
android.library.reference.2=../../js-bindings/cocos2d-x/plugin/plugins/facebook/proj.android/DependProject
```

**Step8**:在frameworks/runtime-src/proj.android/src/org/cocos2dx/javascript/AppActivity.java中添加如下代码片段：

```
import org.cocos2dx.plugin.PluginWrapper;
import org.cocos2dx.plugin.FacebookWrapper;
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
        FacebookWrapper.onCreate(this);
        return glSurfaceView;
    }
	
	@Override
	public void onActivityResult(int requestCode, int resultCode, Intent data) {
	    super.onActivityResult(requestCode, resultCode, data);
	    FacebookWrapper.onAcitivityResult(requestCode, resultCode, data);
	}
	
	@Override
	public void onSaveInstanceState(Bundle outState) {
	    super.onSaveInstanceState(outState);
	    FacebookWrapper.onSaveInstanceState(outState);
	}

	//...
}
```

这样就完成了工程的配置，可以开始使用Facebook API了。

## 如何使用Facebook API

请参考[Facebook API Reference for Cocos2d-JS](../api-reference/en.md)

## 将项目打包成APK

可以使用Cocos2d-JS自带的console工具在命令行中直接打包项目为Android apk，在项目目录下打开终端或命令行，输入：

```
cocos compile -p android
```

更详细的信息请参考[Cocos Console文档](http://www.cocos2d-x.org/docs/manual/framework/html5/v2/cocos-console/zh)