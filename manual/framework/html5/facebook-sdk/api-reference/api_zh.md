#.api(path, method, params, callback)

调用[Facebook Graph API](http://developers.facebook.com/docs/reference/api/)获取数据，或者根据用户的行为执行某些动作。这个api在用户登陆，获得到access token后几乎总是会被调用；由Acess token编码的[权限](https://developers.facebook.com/docs/facebook-login/permissions/)会决定哪些Graph API是可用的。

##参数

```javascript
plugin.FacebookAgent.prototype.request = function(path, method, params, callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|endpoint|String|Yes|调用的Graph API端点。|
|method|`plugin.FacebookAgent.HttpMethod`|Yes|在请求中使用的HTTP方法，可以是 `plugin.FacebookAgent.HttpMethod.GET`, `plugin.FacebookAgent.HttpMethod.POST`, `plugin.FacebookAgent.HttpMethod.DELETE`中的一种。|
|params|Object|No|键值对形式的参数，每个端点的可用的参数不同，具体可以参看 [Graph API Reference](https://developers.facebook.com/docs/graph-api/reference/)|
|callback|Function|No|回调函数，参数包含一个结果码和一个JSON的response对象。|

##回调函数

```javascript
var callback = function (code, response) {}
```

如果API请求成功，`code` 等于 `plugin.FacebookAgent.CODE_SUCCEED`, 否则`code` 是一个错误码，`response` 是一个包含错误信息的JSON对象。

```javascript
// The response object 
{
    "error_message": "Unknown error message"
}
```

##示例

```javascript
var facebook = plugin.FacebookAgent.getInstance();

// 获取用户id
facebook.api("/me", plugin.FacebookAgent.HttpMethod.GET, function (type, response) {
    if (type == plugin.FacebookAgent.CODE_SUCCEED) {
        cc.log(response["id"]);
    } else {
        cc.log("Graph API request failed, error #" + code + ": " + response);
    }
});

// 像用户的相册发送一张图片
facebook.api("/me/photos", plugin.FacebookAgent.HttpMethod.POST, {"url": "http://files.cocos2d-x.org/images/orgsite/logo.png"}, function (type, response) {
    if (type == plugin.FacebookAgent.CODE_SUCCEED) {
        cc.log("post_id: " + response["post_id"]);
    } else {
        cc.log("Graph API request failed, error #" + code + ": " + response);
    }
});

```
