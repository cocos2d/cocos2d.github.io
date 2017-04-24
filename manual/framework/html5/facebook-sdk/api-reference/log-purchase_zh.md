#.logPurchase(amount, currency, parameters)

记录应用内的支付行为，是最长用的日志记录之一。详情请看[App Events](http://developers.facebook.com/docs/platforminsights/appevents).

##参数

```javascript
plugin.FacebookAgent.prototype.logPurchase = function(amount, currency, parameters){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|amount|float|Yes|用户的花费。|
|currency|string|No|货币的种类[ISO-4217 3字符编码](http://en.wikipedia.org/wiki/ISO_4217)(e.g. "USD", "EUR", "GBP")|
|parameters|Dictionary|No|用来描述事件的参数。|


##示例

```javascript
var facebook = plugin.FacebookAgent.getInstance();
var floatVal = 9.99;
var parameters = {};
parameters[plugin.FacebookAgent.AppEventParam.SUCCESS] = 1;
facebook.logPurchase(floatVal, "USD", parameters);
```
