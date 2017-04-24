#.logEvent(eventName, valueToSum, parameters)

报告一个app event，用来整合Facebook广告。更多详情 [App Events](http://developers.facebook.com/docs/platforminsights/appevents).

##参数

```javascript
plugin.FacebookAgent.prototype.logEvent = function(eventName, valueToSum, parameters){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|eventName|Enum in `plugin.FacebookAgent.AppEvent`|Yes|事件的名字。|
|valueToSum|float|No|表示会被累加的一个数值。|
|parameters|Dictionary|No|描述事件的参数。|

`plugin.FacebookAgent.AppEvent`预定义的一些事件名:

|Name|When to log|
|----|-----------|
|ACHIEVED_LEVEL|用户达到了某个等级。|
|ACTIVATED_APP|激活应用。|
|ADDED_PAYMENT_INFO|用户添加了支付信息。|
|ADDED_TO_CART|用户添加了一个商品到购物车。valueToSum应该是商品的数量。|
|ADDED_TO_WISHLIST|用户添加了一个商品到心愿单，valueToSum应该是商品的价格.|
|COMPLETED_REGISTRATION|用户完成了注册。|
|COMPLETED_TUTORIAL|用户完成了教学。|
|INITIATED_CHECKOUT|用户开始支付，valueToSum应该是购物车中的总价。|
|PURCHASED|用户完成了支付。|
|RATED|用户给一个商品打分，valueToSum应该是打分的数字。|
|SEARCHED|用户进行了一次搜索。|
|SPENT_CREDITS|The user has spent app credits. The valueToSum passed to logEvent should be the number of credits spent.|
|UNLOCKED_ACHIEVEMENT|用户解锁了一个成就。|
|VIEWED_CONTENT|A user has viewed a form of content in the app.|

`plugin.FacebookAgent.AppEventParam`中预定义的一些参数:

|Name|User to specify...|
|----|------------------|
|CONTENT_ID|记录的内容的一个ID，可以是EAN，文章标识符等等。|
|CONTENT_TYPE|内容的类型，例如 "music", "photo", "video"，根据应用的不同可以有很多选择。|
|CURRENCY|[ISO-4217 3-letter code](http://en.wikipedia.org/wiki/ISO_4217)货币编码(e.g. "USD", "EUR", "GBP").|
|DESCRIPTION|记录事件的一个描述。例如在`plugin.FacebookAgent.AppEvent.UNLOCKED_ACHIEVEMENT`事件中解锁的成就。|
|LEVEL|在`plugin.FacebookAgent.AppEvent.ACHIEVED_LEVEL`事件中到达的等级。|
|MAX_RATING_VALUE|`plugin.FacebookAgent.AppEvent.RATED`事件中最大可能的评分。例如, "5" or "10".|
|NUM_ITEMS|在`plugin.FacebookAgent.AppEvent.INITIATED_CHECKOUT`或`plugin.FacebookAgent.AppEvent.PURCHASED` 事件中购买商品的数量。|
|PAYMENT_INFO_AVAILABLE| `plugin.FacebookAgent.AppEvent.INITIATED_CHECKOUT`事件中购买信息是否可用。 |
|REGISTRATION_METHOD|用户注册app使用的方法，例如 "Facebook", "email", "Twitter"等。|
|SEARCH_STRING|用户提供的用于搜索的字符串。|
|SUCCESS|记录的活动是否成功。|

##示例

```javascript
var facebook = plugin.FacebookAgent.getInstance();
var floatVal = 888.888;
var parameters = {};
parameters[plugin.FacebookAgent.AppEventParam.SUCCESS] = 1;
facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL, floatVal, parameters);
```
