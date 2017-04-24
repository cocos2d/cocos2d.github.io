#Facebook integration instruction for Cocos2d-JS on Android

This doc walks you through the usage of Facebook support for Cocos2d-JS on Android, including creating app, configuring SDK settings and apk packaging.

##Create a Facebook App

Please refer to [Step 5. Create a Facebook App - Getting Started with the Facebook SDK for Android](http://developers.facebook.com/docs/android/getting-started/#create-app) to create a Facebook App with Android platform.

##Add Facebook support to A Cocos2d-JS Project

Use Cocos command line tool to generate a js project, and you need to make a few modifications to the Android project before you can use Facebook APIs in js code.

**Step1**: Add app name and app id in `frameworks/runtime-src/proj.android/res/values/strings.xml`:

```
<string name="app_name">cocos sample</string>
<string name="app_id">1450063488603945</string>
```

**Step2**: Add the following code snippet in `frameworks/runtime-src/proj.android/AndroidManifest.xml`:

```
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/app_id" />

<activity android:name="com.facebook.LoginActivity" />
<provider android:authorities="com.facebook.app.NativeAppCallContentProvider1450063488603945"
          android:name="com.facebook.NativeAppCallContentProvider"
          android:exported="true"/>
```

**Step3**: Add Plugin-x link lib in `frameworks/runtime-src/proj.android/jni/Android.mk`:

```
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_pluginx_static
$(call import-module,cocos2d-x/plugin/jsbindings)
```

**Step4**: Add the following code snippet in `frameworks/runtime-src/proj.android/jni/hellojavascript/main.cpp`:

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

**Step5**: Add the following code snippet in `frameworks/runtime-src/Classes/AppDelegate.cpp`. **Notice**: Please pay attention to the location of the code.

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

**Step6**: Add the following code snippet in `copy_resources` section of `frameworks/runtime-src/proj.android/build-cg.json`:

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

**Step7**: Add the following code snippet in `frameworks/runtime-src/proj.android/project.properties`:

```
android.library.reference.2=../../js-bindings/cocos2d-x/plugin/plugins/facebook/proj.android/DependProject
```

**Step8**: Add the following code snippet in `frameworks/runtime-src/proj.android/src/org/cocos2dx/javascript/AppActivity.java`:

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

Now we are done with the setup and are ready to use the Facebook API.

## How to use Facebook API

Please visit [Facebook API Reference for Cocos2d-JS](../api-reference/zh.md)

## Package your project into apk

You can use Cocos2d-JS built-in tool - _Cocos Console_ to package your project into an apk file, Run the following command in terminal or command line under your project folder:

```
cocos compile -p android
```

More details in [Cocos Console Document](http://www.cocos2d-x.org/docs/manual/framework/html5/v2/cocos-console/en)