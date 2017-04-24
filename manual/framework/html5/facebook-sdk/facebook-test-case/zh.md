# 如何集成Facebook平台 - 测试工程

## 全功能测试例项目

为了让更多的游戏开发者更容易的使用Facebook平台支持，我们提供了一个完整的测试例项目。其中涉及SDK中所有的API和演示了怎么正确的使用它们。

如果目前还不熟悉Cocos2d-JS的Facebook平台支持，强烈建议你去查看[Cocos2d-x的Facebook集成](../zh.md)文档以及[Facebook API Reference for Cocos2d-JS](../api-reference/zh.md)文档。

## 如何运行测试例项目

首先，你需要Cocos2d-JS引擎包，你可以从[下载页面](http://www.cocos2d-x.org/download)下载。
- 根据[用Cocos Console工作流开发网页/原生平台游戏](http://cocos2d-x.org/docs/manual/framework/cocos2d-js/2-working-environment-and-workflow/2-2-cross-native-browser-game-with-cocos-console/zh)文档安装Cocos Console工具。
- 打开终端/命令行工具，进入`samples/js-tests/` 目录。
- 执行以下命令：
    + `cocos run -p web --port 8080`  在web上运行。（设置端口为8080很重要）
    + `cocos run -p ios`  在IOS模拟器上运行（要求Mac环境和Xcode)。
    + `cocos run -p android` 在安卓设备或安卓模拟器上运行。

## 探索Facebook测试例项目

运行测试例项目，你可以看到`Facebook SDK Test`的测试例列表。

下面2个例子演示了如何使用Facebook API

**1. 分享测试**

![](share.jpg)

此页面的测试例项目不需要用户登入，你就可以测试以下功能：

- 分享不同的链接，open graph故事，照片到你的timeline或者给你的朋友。
- 向你的朋友发送带有链接，open graph 故事，照片的消息。
- 向你的朋友发送应用请求消息。

本页面所使用到的API：

- [.getInstance()](../api-reference/get-instance_zh.md)
- [.canPresentDialog(info)](../api-reference/can-present-dialog_zh.md)
- [.dialog(info, callback)](../api-reference/dialog_zh.md)
- [.appRequest(info, callback)](../api-reference/app-request_zh.md)

**2. 用户测试**

![](user.jpg)

在第二个测试例页面中，你可以测试Facebook的API：

- 登录或注销Facebook账户。
- 获取用户id。
- 获取访问令牌。
- 调用Open Graph API。
- 通过Open Graph API获取应用权限。
- 向Facebook发送激活事件。
- 向Facebook发送应用事件日志。
- 向Facebook发送应用内付费日志。
- 在Canvas App中调用Facebook购买方法。

最后四个测试例只能在Facebook Canvas App中调用,现在你可以在[ on this test page](https://apps.facebook.com/cocostestmyfc/)测试它们。

本页面所使用的API:

- [.getInstance()](../api-reference/get-instance_zh.md)
- [.isLoggedIn()](../api-reference/isloggedin_zh.md)
- [.login(permissions, callback)](../api-reference/login_zh.md)
- [.logout(callback)](../api-reference/logout_zh.md)
- [.getUserId()](../api-reference/get-userid_zh.md)
- [.getAccessToken()](../api-reference/get-accesstoken_zh.md)
- [.api(path, method, params, callback)](../api-reference/api_zh.md)
- [.activateApp()](../api-reference/activate-app_zh.md)
- [.logEvent(eventName, valueToSum, parameters)](../api-reference/log-event_zh.md)
- [.logPurchase(amount, currency, parameters)](../api-reference/log-purchase_zh.md)
- [.canvas.pay(info, callback)](../api-reference/pay_zh.md)

## 在线测试

除了在Cocos2d-JS包里的测试，同时我们也为你提供了Facebook Canvas App来测试Facebook平台支持。

[Facebook Canvas Test Case](https://apps.facebook.com/cocostestmyfc/)

## 下一步

接下来，相信你已经迫不及待地想去创建自己的Facebook游戏，那么根据集成指南去创建支持Facebook的Cocos2d-JS项目吧。

- [Android平台上如何配置Facebook平台集成](../facebook-sdk-on-android/zh.md)
- [iOS平台上如何配置Facebook平台集成](../facebook-sdk-on-ios/zh.md)
- [Web平台上如何配置Facebook平台集成](../facebook-sdk-on-web/zh.md)
