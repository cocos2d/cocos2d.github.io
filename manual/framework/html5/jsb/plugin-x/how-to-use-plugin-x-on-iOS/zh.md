#如何在iOS上使用plugin-x

cocos2d-js 支持使用pluginX，接下来我们介绍下，如何在工程中使用pluginX

### 什么是pluginX

 - pluginX是一个集成了多个第三方平台的跨平台插件，使用统一的API，可以让用户在不修改代码的情况，支持Android和IOS第三方工具的插件，可以简化第三方平台接入的工作量。
 - 目前同时支持Android与IOS的插件有：admob facebook flurry twitter umeng weibo
 - 仅支持Android平台的插件有：alipay googleplay nd91 qh360 uc
 - 仅支持IOS平台的插件有：IAP（AppStore内支付）
 
### 在工程中导入pluginX的工程引用

 - 我们以Flurry为例子，来介绍如何将pluginX引入到工程中去。
 - 打开ios的工程（在路径/myProject/frameworks/runtime-src/proj.ios_mac/）
 - 将PluginProtocol的xcode工程(/myProject/frameworks/js-bindings/cocos2d-x/plugin/protocols/proj.ios)引入到工程中，右击myProject工程，点击`addFiles to "myProject"`。
 -  将PluginFlurry的xcode工程(/myProject/frameworks/js-bindings/cocos2d-x/plugin/plugins/flurry/proj.ios)引入到工程中，右击myProject工程，点击`addFiles to "myProject"`。
 - 将jsb_pluginx.js（/myProject/frameworks/js-bindings/cocos2d-x/plugin/jsbindings/script）加入到工程中，右击myProject工程，点击`addFiles to "myProject"`。
 - 选中，选择iOS的target，进入 `Build Setting` 选择`Other Linker Flags` 加入`-ObjC`（如果编译遇到错误，也许你需要将`CoreVideo.framework` 和 `GameController.framework`加入`Build Phases`中）
### 在工程中配置pluginX

- 在工程中添加build Phases，点击工程，target->myProject IOS->Build Phases 在`Link Binary With Libraries` 中加入`libPluginProtocol.a` 和我们需要的对应插件的.a文件（这里是 `libPluginFlurry.a`）
- 如果用到第三方的framework，我们需要将其加入到`Link Binary With Libraries` 中。
- 找到Classes文件夹，并在`AppDelegate.cpp`文件中加入与pluginX相关的.h文件，在此我们需要加入两个头文件，`jsb_cocos2dx_pluginx_auto.hpp`和`jsb_pluginx_extension_registration.h` 代码如下所示：

````
		#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
			#include "jsb_cocos2dx_pluginx_auto.hpp"
			#include "jsb_pluginx_extension_registration.h"
		#endif
````

- 同样的，在`AppDelegate.cpp`加入绑定函数的注册，如下所示

```
		#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    		sc->addRegisterCallback(register_all_pluginx_protocols);
    		sc->addRegisterCallback(register_pluginx_js_extensions);
		#endif
```
- 自此，我们的pluginX就配置完成了，接下来需要根据不同的插件做相应的配置。
### 具体插件的配置

 - 到这里，我们需要根据不同的插件，例如flurry，我们需要根据flurry的官方文档，进行相关配置，例如flurry，需要使用Security.framework SystemConfiguration.framework等，我们需要将其一并引入到`Link Binary With Libraries`中。

### 如何使用pluginX

- 在此我们以flurry为例子，我们需要在代码中获取到plugin的实例，并加载对应的plugin，然后调用已经定义对应的js函数。

```
	        var pluginManager =  plugin.PluginManager.getInstance();
        	var g_pAnalytics = pluginManager.loadPlugin("AnalyticsFlurry");
        	g_pAnalytics.setDebugMode(true);
       		g_pAnalytics.startSession(FLURRY_KEY_IOS);
        	g_pAnalytics.logEvent("click");
        	g_pAnalytics.callFuncWithParam("logTimedEventWithLabelBegin",
            new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "music");
```