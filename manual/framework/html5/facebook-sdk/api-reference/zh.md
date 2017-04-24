#Facebook SDK for Cocos2d-JS API Reference

##Getting started

在开始使用Facebook SDK之前，你需要对Cocos2d-JS工程有一点了解，并且学会如何整合Facebook SDK到你的工程中。首先，请阅读[Cross native / browser game with Cocos Console](http://cocos2d-x.org/docs/manual/framework/cocos2d-js/2-working-environment-and-workflow/2-2-cross-native-browser-game-with-cocos-console/en) 文档。这会帮助你对Cocos2d-JS的架构和工作流有一个基本的认识。

然后你可以阅读下面的文档来整合Facebook SDＫ到你的Cocos2d-JS工程中去。

- [Integrate the Facebook SDK for Cocos2d-JS on Android](../facebook-sdk-on-android/zh.md)
- [Integrate the Facebook SDK for Cocos2d-JS on iOS](../facebook-sdk-on-ios/zh.md)
- [Integrate the Facebook SDK for Cocos2d-JS on Web](../facebook-sdk-on-web/zh.md)

接下来你可以查看我们的测试用例，里面包括了Facebook SDK的所有功能展示。请阅读这篇[文档](../facebook-test-case/zh.md)来运行测试用例。

我们也邀请你阅读更多的Cocos2d-JS文档。

- [The document root](http://cocos2d-x.org/docs/manual/framework/html5/zh)

##API list

###FacebookAgent class

`plugin.FacebookAgent` 是一个单例类，封装了Facebook SDK for Cocos2d-JS的方法。在你开始做任何事之前，应该先初始化它的实例。

###Core Methods

|Name|Description|
|----|-----------|
|[getInstance](./get-instance_zh.md)|初始化SDK，返回`plugin.FacebookAgent`的实例. 在做其他事之前应该首先被调用。|
|[destroyInstance](./destroy-instance_zh.md)|销毁`plugin.FacebookAgent`的实例。|
|[api](./api_zh.md)|调用[Facebook Graph API](http://developers.facebook.com/docs/graph-api)。|
|[dialog](./dialog_zh.md)|唤起不同形式的Facebook对话框，例如在Facebook上进行分享的对话框，或者向好友发送消息的对话框。|
|[canPresentDialog](./can-present-dialog_zh.md)|检查当前用户的设备是否可以唤起某个Facebook的对话框。|
|[appRequest](./app-request_zh.md)|在游戏中唤起[Request](http://developers.facebook.com/docs/reference/dialogs/requests/)对话框向一个或多个好友发送邀请。|

###Auth and Session Methods

|Name|Description|
|----|-----------|
|[login](./login_zh.md)|请求用户授权你的app，或者用于获得附加权限。|
|[logout](./logout_zh.md)|登出Facebook。|
|[isLoggedIn](./isloggedin_zh.md)|检查用户是否已经登陆，并且授权了你的app。|
|[getUserId](./get-userid_zh.md)|获得当前登陆用户的Facebook用户ID。|
|[getAccessToken](./get-accesstoken_zh.md)|获得当前用户在你的app的access token。|

###Auxiliary Methods

|Name|Description|
|----|-----------|
|[canvas.pay](./pay_zh.md)|让用户使用 [Facebook Payments](http://developers.facebook.com/docs/concepts/payments/)来进行支付。_只可以在桌面使用_。|
|[activateApp](./activate-app_zh.md)|报告用户启动app，用来整合Facebook广告。更多详情 [App Events](http://developers.facebook.com/docs/platforminsights/appevents)。 |
|[logEvent](./log-event_zh.md)|报告一个app event，用来整合Facebook广告。更多详情  [App Events](http://developers.facebook.com/docs/platforminsights/appevents)。 |
|[logPurchase](./log-purchase_zh.md)|报告一个purchase event，用来整合Facebook广告。更多详情  [App Events](http://developers.facebook.com/docs/platforminsights/appevents)。 |

##Facebook SDK Features

|Methods|iOS|Android|Web|
|:-:|:-:|:-----:|:-:|
|api|√|√|√|
|dialog - shareLink|√|√|√|
|dialog - shareOpenGraph|√|√|√|
|dialog - sharePhoto|√|√|×|
|dialog - messageLink|√|√|√|
|dialog - messageOpenGraph|√|√|×|
|dialog - messagePhoto|√|√|×|
|dialog - feedDialog|√|√|√|
|appRequest|√|√|√|
|login|√|√|√|
|logout|√|√|√|
|isLoggedIn|√|√|√|
|getUserId|√|√|√|
|getAccessToken|√|√|√|
|canvas.pay|×|×|√|
|activateApp|√|√|√|
|logEvent|√|√|√|
|logPurchase|√|√|√|


