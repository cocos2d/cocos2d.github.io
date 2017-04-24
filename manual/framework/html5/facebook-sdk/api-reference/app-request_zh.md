#.appRequest(info, callback)

这个方法调用一个Request对话框，可以在iOS，Android和Canvas上的游戏内使用。请求包含一个面向用户的消息作为参数传递，也可以包含游戏内特定道具的信息。这是邀请其他好友来进行游戏的机制。请求可以发送给多个指定的好友，通常带有一个想要让接受者完成的动作。接受者可以选择接受或者忽视掉请求。

更多详细内容： [Requests](http://developers.facebook.com/docs/reference/dialogs/requests/).
注意: Request 对话框现在不支持[Frictionless Requests](http://developers.facebook.com/docs/games/requests/#frictionless-requests)。 

##参数

```javascript
plugin.FacebookAgent.prototype.appRequest = function(info, callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|info|Object|Yes|包含请求的内容|
|callback|Function|No|回调函数，参数是一个结果码和一个JSON对象。|

###`info`内容:

支持的所有参数请看：[Dialog Parameters Section](http://developers.facebook.com/docs/games/requests/#params)。

###回调函数

如果发送请求成功，`code` 是 `plugin.FacebookAgent.CODE_SUCCEED` ， `response` 是一个JSON对象包含2个属性，_request_ (Request ID 的字符串) 和 _to_ (一个字符串数组，数组元素是选择的好友的ID). 如果没有发送成功，`response` 会是_null_. 一个`response` 的例子:

```javascript
{
    "request": "420211088059698",
    "to": [
        "100002669403922",
        "100000048490273"
    ]
}
```

如果出现错误，`code`返回一个状态码，`response` 是一个包含错误信息的JSON对象。

```javascript
{
    "error_message": "Action canceled by user"
}
```

##示例

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

