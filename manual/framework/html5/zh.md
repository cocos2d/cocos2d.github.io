# Cocos2d-JS

<img src="http://cocos2d-x.org/s/images/img-cocos2djs.jpg" height=180> 

Cocos2d-JS是Cocos2d-x的JavaScript版本，融合了Cocos2d-html5和Cocos2d-x JavaScript Bindings。它支持Cocos2d-x的所有核心特性并提供更简单易用的JavaScript风格API，并且天然支持原生,浏览器跨平台应用。

在3.0版中，Cocos2d-JS完成了不同平台工作流的彻底整合，为不同平台提供了统一的开发体验。无论开发web应用还是原生应用，都可以便捷地采用Cocos2d-JS实现“一次开发，全平台运行”。采用Cocos2d-JS开发的同一套JavaScript游戏代码，可以同时运行在Mac OS X, Windows, iOS, Android等原生平台,以及所有现代浏览器上，这将使得我们的开发者轻松覆盖几乎所有发行渠道，带来前所未有的机遇。另一方面，若开发者只想开发一款Web轻度休闲游戏，Cocos2d-JS也专门为此类游戏定制了Lite Version，直接将Cocos2d-JS Lite Version集成到页面中即可使用。

作为工作流整合后的第一个版本，Cocos2d-JS v3.0兼具了简单和强大：新的JavaScript风格API使得编码，测试和发布环节都变得异常轻松简单；同时v3.0还提供了诸多强大的新特性，比如Spine动画支持，支持热更新的资源管理器，对象缓冲池，JS到Objective-C/JAVA反射等等。

## 工作流

- 跨平台游戏开发者可以使用Cocos Console来创建项目，用Web引擎加速游戏开发，最终用Cocos Console将游戏发布到所有原生平台和Web平台。

- Web端轻度休闲游戏开发者可以直接下载单文件的Cocos2d-JS Lite Version，嵌入Web页面中，像使用jQuery那样进行开发。

## 下载与API索引

- [Cocos2d-JS github仓库](http://github.com/cocos2d/cocos2d-js/)
- [Cocos2d-JS Full Version下载链接](http://cn.cocos2d-x.org/download)
- [Cocos2d-JS Lite Version下载链接](http://www.cocos2d-x.org/filecenter/jsbuilder)
- [在线API索引](http://www.cocos2d-x.org/wiki/Reference)
- [下载API索引](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.6-API.zip)
- [在线测试例](http://cocos2d-x.org/js-tests/)

## 主要特性

* 主持所有现代浏览器和原生平台（Android, iOS, Mac OSX, Windows）
* 场景管理
* 场景切换特效
* 精灵与精灵帧动画
* 特效：Lens, Ripple, Waves, Liquid, 等等.
* 动作：
    * 普通动作：Move, Rotate, Scale, Fade, Tint, etc.
    * 组合动作：Sequence, Spawn, Repeat, Reverse
    * 变速动作：Exp, Sin, Cubic, Elastic, etc.
    * 其他动作：CallFunc, OrbitCamera, Follow, Tween
* 资源管理器（热更新）
* 菜单与按钮
* 集成物理引擎：Chipmunk或Box2d
* 粒子系统
* 骨骼动画：支持Spine和Armature
* 字体：
    * 固定或可变宽度字体快速渲染
    * 支持.ttf字体
* 瓦片地图支持：正交，等距和六边形
* 视差滚动
* 运动轨迹特效
* 绘制到纹理
* 移动设备上的触摸和加速度计支持
* 桌面设备上的触摸，鼠标和键盘支持
* 声音引擎支持，基于OpenAL或WebAudio
* 集成慢动作，快进效果
* 高效压缩纹理支持：PVR压缩或未压缩纹理，ETC1压缩纹理
* 独立于分辨率的适配
* 可定制的模块化引擎
* 友好开源项目：适用于任何开源或闭源项目
* 基于OpenGL ES 2.0（移动设备）／ OpenGL 2.1（桌面设备）
* 完整WebGL支持和在不支持WebGL设备上自动使用Canvas
   
## 文档

- [Cocos2d-JS v3.6.1发布说明](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.6.1/release-note/zh)
- [Cocos2d-JS v3.6.1改动列表](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.6.1/changelog/en)
- [Cocos2d-JS v3.6.1升级指南](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.6/upgrade-guide/zh)

- 综述
    - [Lite Version工作流](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/lite-version/zh)
	- [历史版本发布说明和升级文档](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/zh)
	
- 初步了解Cocos2d-JS
    - [如何搭建Cocos2d-JS开发调试环境](http://www.cocos2d-x.org/docs/manual/framework/html5/v2/setup-devenv/zh)
    - [如何自定义Cocos2d-JS加载界面](http://www.cocos2d-x.org/docs/manual/framework/html5/v2/customize-loading-screen/zh)
    - [Cocos2d-JS的屏幕适配方案](http://www.cocos2d-x.org/docs/manual/framework/html5/v2/resolution-policy-design/zh)
    - [月亮战士——Cocos2d-html5游戏展示](http://www.cocos2d-x.org/docs/manual/framework/html5/v2/moonwarriors-cocos2d-html5-showcase/zh)
    
- Cocos2d-JS v3.x的新功能
    - [使用Cocos Console管理工程](http://www.cocos2d-x.org/docs/manual/framework/html5/v2/cocos-console/zh)
    - [资源管理器](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/assets-manager/zh)
    - [事件管理器](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/eventManager/zh)
    - [属性风格API](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/getter-setter-api/zh)
    - [简化的游戏启动流程](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-game/zh)
    - [对象构造与类继承](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/inheritance/zh)
    - [简化action的使用](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-actions/zh)
    - [对象缓冲池](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-pool/zh)
    - [Bake Layer](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/bake-layer/zh)
    - [Javascript到JAVA反射](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection/zh)
    - [Javascript到Objective-C反射](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection-oc/zh)
    - [Cocos2d-html5模块化](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/moduleconfig-json/zh)
    - [项目配置文件](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/project-json/zh)
    - [基础数据类型重构](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/basic-data/zh)
    - [单例对象重构](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/singleton-objs/zh)
    - [统一create函数](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/create-api/zh)
    - [使用cc.loader加载资源](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-loader/zh)
    - [资源路径工具cc.path](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-path/zh)
    - [系统信息](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-sys/zh)
    - [异步函数工具cc.async](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-async/zh)
    - [cc.saxParser的改造](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-saxparser/zh)
    - [cc.spriteFrameCache的改造](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-spriteframecache/zh)
    - [cc.FileUtils的移除](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-fileutils/zh)
    - [cc.log的改造](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-log/zh)
    - [其他3.0版的API改动](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/more-change-from-v2-to-v3/zh)
    
- 进阶主题
    - [如何使用Eclipse中编译Cocos2d-JS项目](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/compilation-in-eclipse/zh)
    - [如何在JSB项目中使用extension](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/jsb-extension/zh)
    - [在Android平台使用Plugin-x](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/how-to-use-plugin-x-on-android/zh)
    - [在iOS平台使用Plugin-x](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/how-to-use-plugin-x-on-iOS/zh)
    - [Plugin-x的框架](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/plugin-x-architecture/zh)
    - [如何为Android开发自己的Plugin](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/how-to-write-your-own-plugin-for-android/zh)
    - [使用iOS支付插件](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/ios-iap/zh)
    - [如何使用Firefox远程调试工具](http://cocos2d-x.org/docs/manual/framework/native/v3/js-remote-debugger/en)
    - Facebook Integration for Cocos2d-JS
        - [Cocos2d-x的Facebook集成](http://www.cocos2d-x.org/docs/manual/framework/html5/facebook-sdk/zh)
        - [Facebook API Reference for Cocos2d-JS](http://www.cocos2d-x.org/docs/manual/framework/html5/facebook-sdk/api-reference/zh)
        - [Android平台上如何集成Facebook平台支持](http://www.cocos2d-x.org/docs/manual/framework/html5/facebook-sdk/facebook-sdk-on-android/zh)
        - [iOS平台上如何集成Facebook平台支持](http://www.cocos2d-x.org/docs/manual/framework/html5/facebook-sdk/facebook-sdk-on-ios/zh)
        - [Web平台上如何集成Facebook平台支持](http://www.cocos2d-x.org/docs/manual/framework/html5/facebook-sdk/facebook-sdk-on-web/zh)
        - [集成Facebook平台 - 测试工程](http://www.cocos2d-x.org/docs/manual/framework/html5/facebook-sdk/facebook-test-case/zh)

- 教程
    - [教程目录](http://cocos2d-x.org/docs/tutorial/framework/html5/zh)

