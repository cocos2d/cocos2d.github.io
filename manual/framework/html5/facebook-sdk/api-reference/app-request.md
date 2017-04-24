#.appRequest(info, callback)

This method triggers Requests Dialog, which is invoked in-game via the Facebook SDK on iOS, Android and Canvas. Requests can contain a user-facing message as plain text, which is passed as a parameter when invoking the dialog, or they can contain specific information including in-game items and explicit calls to action. Requests give players a mechanism for inviting their friends to play a game. Requests are sent by a player to one or more specific friends, and always carry a call-to-action that the sender wants the recipient to complete. Recipients can choose to accept the request, or they can choose to ignore or decline it.

For more details, please refer to doc [Requests](http://developers.facebook.com/docs/reference/dialogs/requests/).
NOTE: Request Dialog in Cocos SDK does not support [Frictionless Requests](http://developers.facebook.com/docs/games/requests/#frictionless-requests) for now. 

##Parameters

```javascript
plugin.FacebookAgent.prototype.appRequest = function(info, callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|info|Object|Yes|The object to contain the details of the request.|
|callback|Function|No|Callback function containing a result code and a JSON response.|

###`info` content:

It supports all the parameters listed in [Dialog Parameters Section](http://developers.facebook.com/docs/games/requests/#params) in the doc.

###Callback function

If the sender sends any requests, `code` is `plugin.FacebookAgent.CODE_SUCCEED` and `response` is a JSON dictionary with two properties, _request_ (a _string_ containing the Request ID assigned by Facebook) and _to_ (an array of _string_, each element being the Facebook ID of one of the selected recipients). If the sender doesn't send any requests, `response` will instead be _null_. The example of `response` is as below:

```javascript
{
    "request": "420211088059698",
    "to": [
        "100002669403922",
        "100000048490273"
    ]
}
```

If there is some error, `code` is error code and `response` is a JSON containing error message as the example below,

```javascript
{
    "error_message": "Action cancelled by user"
}
```

##Example

```javascript
var info = {
    "message": "Cocos2d-JS is a great game engine",
    "title": "Cocos2d-JS"
};
var facebook = plugin.FacebookAgent.getInstance();
facebook.appRequest(info, function (code, msg) {
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        //succeed
    } else {
        cc.log("Sending request failed, error #" + code + ": " + response);
    }
});
```

