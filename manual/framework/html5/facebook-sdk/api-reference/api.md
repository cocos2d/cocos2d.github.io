#.api(path, method, params, callback)

Makes a call to the [Facebook Graph API](http://developers.facebook.com/docs/reference/api/) to get data, or take action on a user's behalf. This will almost always be used once a user is logged in, and an access token has been granted; the [permissions](https://developers.facebook.com/docs/facebook-login/permissions/) encoded by the access token determine which Graph API calls will be available.

##Parameters

```javascript
plugin.FacebookAgent.prototype.request = function(path, method, params, callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|endpoint|String|Yes|The Graph API endpoint to call|
|method|`plugin.FacebookAgent.HttpMethod`|Yes|The|HTTP method to use in the call, one of `plugin.FacebookAgent.HttpMethod.GET`, `plugin.FacebookAgent.HttpMethod.POST`, `plugin.FacebookAgent.HttpMethod.DELETE`.|
|params|Object|No|The key/value pairs to be passed to the endpoint as arguments. For details of arguments for each endpoint, please refer to [Graph API Reference](https://developers.facebook.com/docs/graph-api/reference/)|
|callback|Function|No|Callback function containing a result code and a JSON response.|

##Callback function

```javascript
var callback = function (code, response) {}
```

If the API call is successful, `code` is `plugin.FacebookAgent.CODE_SUCCEED`, otherwise, `code` is error code and `response` is a JSON containing error message as the example below,

```javascript
// The response object 
{
    "error_message": "Unknown error message"
}
```

##Example

```javascript
var facebook = plugin.FacebookAgent.getInstance();

// Retrieve user id
facebook.api("/me", plugin.FacebookAgent.HttpMethod.GET, function (type, response) {
    if (type == plugin.FacebookAgent.CODE_SUCCEED) {
        cc.log(response["id"]);
    } else {
        cc.log("Graph API request failed, error #" + code + ": " + response);
    }
});

// Send a photo to user's photo album
facebook.api("/me/photos", plugin.FacebookAgent.HttpMethod.POST, {"url": "http://files.cocos2d-x.org/images/orgsite/logo.png"}, function (type, response) {
    if (type == plugin.FacebookAgent.CODE_SUCCEED) {
        cc.log("post_id: " + response["post_id"]);
    } else {
        cc.log("Graph API request failed, error #" + code + ": " + response);
    }
});

```
