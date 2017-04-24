# Cocos2d-JS v3.0 RC2发布说明

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 


Cocos2d-JS是Cocos2d-x的Javascript版本，融合了Cocos2d-html5和Cocos2d-x JavaScript Bindings。它支持Cocos2d-x的所有特性并提供更简单易用的Javascript风格API。

Cocos2d-JS为不同平台提供了统一的开发体验，无论你为web还是原生应用做开发。“一次开发，全平台运行”因为Cocos2d-JS变得前所未有得简单和自然。同一套Javascript游戏代码，可以同时运行在所有现代浏览器和包括Mac OSX, Windows, iOS, Android的原生平台上，这将为我们的开发者在几乎所有发行渠道中带来难得的机遇。

除此之外，新的Javascript风格API使得编码，测试和发布环节都变得更加轻松简单。Cocos2d-JS还自带了Cocos Console，一个用于简化项目创建和不同目标平台编译发布流程的终端工具。

更多信息请参见[Cocos2d-JS代码仓库](https://github.com/cocos2d/cocos2d-js)

## 下载

- [cocos2d-js-v3.0-rc2.zip](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.0-rc2.zip)
- [Web游戏专用单引擎文件下载](http://cocos2d-x.org/filecenter/jsbuilder/)
- [在线API索引](http://www.cocos2d-x.org/reference/html5-js/V3.0rc2/index.html)
- [可下载版本API索引包](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3rc2-API.zip)
- [在线测试例](http://cocos2d-x.org/js-tests/)

## 核心特性

* 极大改进了`ccui`控件布局库的性能和稳定性，`ccui`在RC0中被大幅度重构，引发了一些兼容性和稳定性的问题，在RC2中我们已经将所有收到的bug反馈全部修复了。
* 升级Armature骨骼动画的解析，升级编辑器解析以支持Cocos Studio v1.2到v1.5.0.1。
* 跟随v3.0 RC2我们发布了Facebook SDK for Cocos2d-JS的Alpha版本，这是一个全功能的Facebook SDK，API和使用方式非常接近Facebook Javascript SDK，它的Javascript层API同时支持iOS，Android，Web三大平台。
* 支持Javascript到Objective-C的反射，允许开发者用JS直接调用Objective-C的类静态函数。
* JSB中支持远程图片载入功能，开发者可以通过`cc.loader`或`cc.textureCache`来加载远程图片为本地贴图。

## 详细更改

更详细的API改动可以参见:

- [Cocos2d-JS v3.0 RC2改动说明](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc2/changelog/en)
- [Cocos2d-JS v3.0 RC2升级指南](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/zh)

## 新发布文档

- [对象缓冲池使用文档](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-pool/en)
- [Javascript到Objective-C反射使用文档](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection-oc/en)
- [iOS应用内支付插件文档](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/ios-iap/en)

## 关于Cocos2d家族

- Cocos2d-JS v3.0 RC2使用Cocos2d-x 3.2正式版作为JSB的底层实现
- Cocos2d-JS v3.0 RC2兼容联合发布的Cocos Code IDE v1.0.0 RC1
- Cocos2d-JS v3.0 RC2兼容Cocos Studio v1.2 - v1.5.0.1

## 其他信息

如果遇到任何问题，你都可以向Cocos2d-JS开发者社区寻求帮助： 

- [官方论坛](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [文档目录](http://cocos2d-x.org/docs/manual/framework/html5/zh)

关于JSB编译环境，还有一些限制条件需要满足：

- [Android编译] NDK版本必须使用r9b - r9d
- [iOS编译] Xcode版本必须在5.1到5.1.1