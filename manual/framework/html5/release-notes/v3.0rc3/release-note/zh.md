# Cocos2d-JS v3.0 RC3发布说明

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 


Cocos2d-JS是Cocos2d-x的Javascript版本，融合了Cocos2d-html5和Cocos2d-x JavaScript Bindings。它支持Cocos2d-x的所有特性并提供更简单易用的Javascript风格API。

Cocos2d-JS为不同平台提供了统一的开发体验，无论你为web还是原生应用做开发。“一次开发，全平台运行”因为Cocos2d-JS变得前所未有得简单和自然。同一套Javascript游戏代码，可以同时运行在所有现代浏览器和包括Mac OS X, Windows, iOS, Android的原生平台上，这将为我们的开发者在几乎所有发行渠道中带来难得的机遇。

除此之外，新的Javascript风格API使得编码，测试和发布环节都变得更加轻松简单。Cocos2d-JS还自带了Cocos Console，一个用于简化项目创建和不同目标平台编译发布流程的终端工具。

更多信息请参见[Cocos2d-JS代码仓库](https://github.com/cocos2d/cocos2d-js)

## 下载

- [cocos2d-js-v3.0-rc3.zip](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.0-rc3.zip)
- [Web游戏专用单引擎文件下载](http://cocos2d-x.org/filecenter/jsbuilder/)
- [在线API索引](http://www.cocos2d-x.org/reference/html5-js/V3.0rc3/index.html)
- [在线测试例](http://cocos2d-x.org/js-tests/)

## 核心特性

* 发布Facebook SDK Beta版，统一了Facbeook SDK在不同平台上的回调函数参数，添加了支付，App是事件等接口，详细文档请参见文后链接。
* 极大提升API文档的可读性和完整性，降低开发者学习成本。
* 修复遗留的重要bug。
* 统一所有已知的JSB与Html5引擎不兼容的API。
* 统一SpiderMonkey的iOS平台32位库和64位库以支持Xcode 6。

Cocos2d-JS v3.0 RC3是为了v3.0 Final版的发布所做的备选版本，全部功能和代码已经合拢。

## 注意事项

关于JSB编译环境，还有一些限制条件需要满足：

- [Android编译] NDK版本必须使用r9d
- [iOS编译] Xcode版本必须在5.1.1以上

## 详细更改

更详细的API改动可以参见:

- [Cocos2d-JS v3.0 RC3改动说明](../../v3.0rc3/changelog/en.md)
- [Cocos2d-JS v3.0 RC3升级指南](../../v3.0rc0/upgrade-guide/zh.md)

## 新发布文档

- [Facebook SDK Beta API Reference](../../../facebook-sdk/api-reference/zh.md)
- [Android平台上如何集成Facebook SDK Beta for Cocos2d-JS](../../../facebook-sdk/facebook-sdk-on-android/zh.md)
- [iOS平台上如何集成Facebook SDK Beta for Cocos2d-JS](../../../facebook-sdk/facebook-sdk-on-ios/zh.md)
- [Web平台上如何集成Facebook SDK Beta for Cocos2d-JS](../../../facebook-sdk/facebook-sdk-on-web/zh.md)

## 关于Cocos2d家族

- Cocos2d-JS v3.0 RC3使用Cocos2d-x 3.2正式版作为JSB的底层实现
- Cocos2d-JS v3.0 RC3兼容Cocos Code IDE v1.0.0 RC1
- Cocos2d-JS v3.0 RC3兼容Cocos Studio v1.2 - v1.5.0.1

如果遇到任何问题，你都可以向Cocos2d-JS开发者社区寻求帮助： 

- [官方论坛](http://www.cocoachina.com/bbs/thread.php?fid=59)
- [文档目录](../../../zh.md)
