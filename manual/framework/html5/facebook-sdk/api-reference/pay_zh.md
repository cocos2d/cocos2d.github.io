#.canvas.pay(info, callback)

使用[Facebook支付](http://developers.facebook.com/docs/payments/)进行一次支付。这个方法封装Facebook JS SDK中的`FB.ui({method: "pay", action: "purchaseitem", ...)`，你可以在这里找到更多详细内容[Pay Dialog](http://developers.facebook.com/docs/payments/reference/paydialog)。

##参数

```javascript
plugin.FacebookAgent.prototype.canvas.pay = function(info, callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|info|object|Yes|包含支付内容的对象。|
|callback|Function|No|参数是一个结果码和一个JSON对象的回调函数。|

###`info`对象的属性:
|Name|Type|Required|Description|
|----|----|--------|-----------|
|product|URL|Yes|og:product对象的url，用户将要购买的商品。具体内容阅读这篇文档如果创建一个购买商品[How-to: Local Currency Payments - Defining Products](http://developers.facebook.com/docs/howtos/payments/definingproducts/)， 商品的参考手册[Product Object](http://developers.facebook.com/docs/payments/product/)。|
|quantity|int|No|用户想要购买商品的数量，通常在实现虚拟货币购买的时候使用。|
|quantity_min|int|No|用户可以购买的商品的最小数量。这个参数对于提高交易效率很重要。 [price jumping](http://developers.facebook.com/docs/howtos/payments/paymentflow/#pricejumping)。|
|quantity_max|int|No|用户可以购买的商品的最大数量。这个参数对于提高交易效率很重要。 [price jumping](http://developers.facebook.com/docs/howtos/payments/paymentflow/#pricejumping)。|
|request_id|String|No|开发者定义的交易的唯一标识符，会附带在支付的Graph API。 [Learn more](http://developers.facebook.com/docs/howtos/payments/fulfillment/#requestid)。|
|pricepoint_id|String|No|方便使用手机的购买者直接使用手机支付。 [Optimizing for Mobile Payments](http://developers.facebook.com/docs/howtos/payments/mobilepricing/)。|
|test_currency|String|No|这个参数可以在调试和测试时使用，用来强制使用一种指定的货币，而不是用户通常使用的。这可以使你快速搭建支付的原型，无需重复的改变你个人的偏好设置。为了减少安全风险，这个参数只有应用的管理员，开发者和测试者可以使用。使用你希望的货币的3字符编码，支持的货币编码在[这里](http://developers.facebook.com/docs/concepts/payments/pricefloors/)|

###回调函数

```javascript
var callback = function (code, response) {}
```

如果支付成功，`code`等于`plugin.FacebookAgent.CODE_SUCCEED`，`response`是一个包含支付信息的JSON对象。
```javascript
{
  "payment_id": 848929916459082,
  "quantity": "2",
  "status": "completed", 
  "signed_request": "7QYHzKqKByA7fjiqJUh2bxFvEdqdvn0n_y1zYiyN6tg.eyJhbGCJxdWFudGl0eSI6IjEiLCJzdGF0dXMiOiJjb21wbGV0ZWQifQ"
}
```

如果支付失败，`code`是一个错误码，`response`是一个包含错误信息的JSON对象。

```javascript
{
    "error_message": "Unkown error"
}
```

##示例

```javascript
var info = {
    product: 'https://www.cocos2d-x.org/demo/facebooktest/pay/item1.html'
};

var facebook = plugin.FacebookAgent.getInstance();
facebook.canvas.pay(info, function(code, response){
    if (code == plugin.FacebookAgent.CODE_SUCCEED){
        if (response['status'] === 'completed')
            cc.log("Payment succeeded: " + response['amount'] + response['currency']);
        else 
            cc.log("Payment failed: " + response['status'])
    } else {
        cc.log("Request send failed, error #" + code + ": " + response);
    }
});
```
