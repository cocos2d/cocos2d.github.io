#.canvas.pay(info, callback)

Prompt the user to make a payment using [Facebook Payments](http://developers.facebook.com/docs/payments/). This wraps the JS SDK function FB.ui({method: "pay", action: "purchaseitem", ...), which you can find more details at [Pay Dialog](http://developers.facebook.com/docs/payments/reference/paydialog).

##Parameters

```javascript
plugin.FacebookAgent.prototype.canvas.pay = function(info, callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|info|object|Yes|The object to contain the details of the payment.|
|callback|Function|No|Callback function containing a result code and a JSON response.|

###Properties of `info` object:
|Name|Type|Required|Description|
|----|----|--------|-----------|
|product|URL|Yes|The URL of your og:product object that the user is looking to purchase. For a full description on how to construct this product object, please see the [How-to: Local Currency Payments - Defining Products](http://developers.facebook.com/docs/howtos/payments/definingproducts/) guide, and the [Product Object](http://developers.facebook.com/docs/payments/product/) reference material.|
|quantity|int|No|The amount of this item the user is looking to purchase - typically used when implementing a virtual currency purchase.|
|quantity_min|int|No|The minimum quantity of the item the user is able to purchase. This parameter is important when handling [price jumping](http://developers.facebook.com/docs/howtos/payments/paymentflow/#pricejumping) to maximize the efficiency of the transaction.|
|quantity_max|int|No|The maximum quantity of the item the user is able to purchase. This parameter is important when handling [price jumping](http://developers.facebook.com/docs/howtos/payments/paymentflow/#pricejumping) to maximize the efficiency of the transaction.|
|request_id|String|No|The developer defined unique identifier for this transaction, which becomes attached to the payment within the Graph API. [Learn more](http://developers.facebook.com/docs/howtos/payments/fulfillment/#requestid).|
|pricepoint_id|String|No|Used to shortcut a mobile payer directly to the mobile purchase flow at a given price point. Full details can be found in the [Optimizing for Mobile Payments](http://developers.facebook.com/docs/howtos/payments/mobilepricing/) doc.|
|test_currency|String|No|This parameter can be used during debugging and testing your implementation to force the dialog to use a specific currency rather than the current user's preferred currency. This allows you to rapidly prototype your payment experience for different currencies without having to repeatedly change your personal currency preference settings. This parameter is only available for admins, developers and testers associated with the app, in order to minimize the security risk of a malicious JavaScript injection. Provide the 3 letter currency code of the intended forced currency. The list of supported currency codes is [available here](http://developers.facebook.com/docs/concepts/payments/pricefloors/).|

###Callback function

```javascript
var callback = function (code, response) {}
```

On success, `code` is `plugin.FacebookAgent.CODE_SUCCEED` and `response` is a JSON containing the payment information as the example below,
```javascript
{
  "payment_id": 848929916459082,
  "quantity": "2",
  "status": "completed", 
  "signed_request": "7QYHzKqKByA7fjiqJUh2bxFvEdqdvn0n_y1zYiyN6tg.eyJhbGCJxdWFudGl0eSI6IjEiLCJzdGF0dXMiOiJjb21wbGV0ZWQifQ"
}
```

If the payment failed, `code` is error code and `response` is a JSON containing error message as the example below,

```javascript
{
    "error_message": "Unknown error"
}
```

##Example

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
