# Cocos2d-JS v3.4 Beta0发布说明

<img src="http://files.cocos2d-x.org/images/orgsite/logo.png" height=180> 

Cocos2d-JS是Cocos2d-x的JavaScript版本，融合了Cocos2d-html5和Cocos2d-x JavaScript Bindings。它支持Cocos2d-x的所有核心特性并提供更简单易用的JavaScript风格API，并且天然支持原生,浏览器跨平台应用。

在3.x版中，Cocos2d-JS完成了不同平台工作流的彻底整合，为不同平台提供了统一的开发体验。无论开发web应用还是原生应用，都可以便捷地采用Cocos2d-JS实现“一次开发，全平台运行”。采用Cocos2d-JS开发的同一套JavaScript游戏代码，可以同时运行在Mac OS X, Windows, iOS, Android等原生平台,以及所有现代浏览器上，这将使得我们的开发者轻松覆盖几乎所有发行渠道，带来前所未有的机遇。另一方面，若开发者只想开发一款Web轻度休闲游戏，Cocos2d-JS也专门为此类游戏定制了Lite Version，直接将Cocos2d-JS Lite Version集成到页面中即可使用。

作为工作流整合后的版本，Cocos2d-JS v3.x兼具了简单和强大：新的JavaScript风格API使得编码，测试和发布环节都变得异常轻松简单；同时v3.x还提供了诸多强大的新特性，比如Facebook全平台支持，Spine动画支持，支持热更新的资源管理器，对象缓冲池，JS到Objective-C/JAVA反射等等。

## 核心特性

* 3D时代到来！绑定Cocos2d-x中的3D模块：摄影机，光照，3D精灵，3D动画，BillBoard等。
* Windows Phone 8平台支持！感谢微软的贡献，Cocos2d-JS现在已经可以发布游戏到Windows Phone 8平台。
* 升级JS引擎SpiderMonkey到v33，极大改善了JavaScript对象的内存管理和JS执行性能。
* 持续提升Web引擎的性能和稳定性。

## 注意事项

关于编译和打包，还有一些限制条件需要满足：

- [Android编译] NDK版本建议使用r10c，如果不需要兼容Android 5.0可以使用r9d，不兼容NDK其他版本
- [iOS编译] Xcode版本必须在5.1.1以上
- [Web代码混淆] JRE或JDK版本必须使用1.6+

## 下载

- [Cocos2d-JS v3.4 Beta0](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.4-beta0.zip)
- [Cocos2d-JS Lite Version](http://cocos2d-x.org/filecenter/jsbuilder/)
- [Cocos Dev Tool](http://h5.cocoachina.com/static/cocos-devtools/)
- [在线API索引](http://www.cocos2d-x.org/wiki/reference/)
- [下载版API索引](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.3-API.zip)
- [在线测试例](http://cocos2d-x.org/js-tests/)

## 详细更改

更详细的改动列表和升级文档可以参见:

- [Cocos2d-JS v3.4 Beta0改动说明](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.4b/changelog/en)
- [Cocos2d-JS v3.4 Beta0升级指南](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.5/upgrade-guide/zh)

## 从旧版本升级你的项目

如果你想升级你使用旧版本（从v3.0 Alpha开始）创建的项目到v3.4 Beta0，你需要执行以下步骤：

1. 下载Cocos2d-JS v3.4 Beta0引擎包。
2. 执行引擎包中的`setup.py`更新你的cocos命令。
3. 使用`cocos new`命令创建一个新的基于v3.4 Beta0的项目。
4. 从你的旧项目中拷贝"src"，"res"，"index.html"，"project.json"，"main.js"到第三步创建的新项目并覆盖。
5. 最后你可能需要按照升级指南来升级你的项目以避免API不兼容的问题。

## 关于Cocos2d家族

- Cocos2d-JS v3.4 Beta0使用Cocos2d-x v3.4作为JSB的底层实现。
- Cocos2d-JS v3.4 Beta0使用SpiderMonkey v33作为内置JS引擎。
- Cocos2d-JS v3.4 Beta0兼容Cocos Code IDE v1.1.0，不过你需要重新使用源码编译一次runtime。
- Cocos2d-JS v3.4 Beta0兼容Cocos Studio v1.2 - v1.6以及Cocos Studio 2.1+，Cocos Studio 2.x的支持依赖于其JSON格式导出文件，Cocos2d-JS不计划支持Flatbuffer二进制格式解析。

如果遇到任何问题，你都可以向Cocos2d-JS开发者社区寻求帮助： 

- [官方论坛](http://www.cocoachina.com/bbs/thread.php?fid-59.html)
- [文档目录](http://cocos2d-x.org/docs/manual/framework/html5/zh)
- [开发指南](http://cn.cocos2d-x.org/article/index?type=cocos2d-x&url=/doc/cocos-docs-master/manual/framework/cocos2d-js/1-about-cocos2d-js/1-1-a-brief-history/zh.md)
- [Github仓库地址](https://github.com/cocos2d/cocos2d-js)
- [Bug提交与跟踪](https://github.com/cocos2d/cocos2d-js/issues)
