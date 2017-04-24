#.logPurchase(amount, currency, parameters)

Logs real-money in-app purchases through App Events, which is the most common use of event logging. More details at [App Events](http://developers.facebook.com/docs/platforminsights/appevents).

##Parameters

```javascript
plugin.FacebookAgent.prototype.logPurchase = function(amount, currency, parameters){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|amount|float|Yes|The amount of currency the user spent|
|currency|string|No|[ISO-4217 3-letter code](http://en.wikipedia.org/wiki/ISO_4217) for currency used (e.g. "USD", "EUR", "GBP")|
|parameters|Dictionary|No|Any parameters needed to describe the event|


##Example

```javascript
var facebook = plugin.FacebookAgent.getInstance();
var floatVal = 9.99;
var parameters = {};
parameters[plugin.FacebookAgent.AppEventParam.SUCCESS] = 1;
facebook.logPurchase(floatVal, "USD", parameters);
```
