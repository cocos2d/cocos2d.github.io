#.getPermissionList(callback)

Get the permission list granted by the current user.

##Parameters

```javascript
plugin.FacebookAgent.prototype.getPermissionList = function(callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|callback|Function|No|This callback will be invoked with a result code and a response object or an error message.|

##Callback function and response object

The callback function definition is showing below, if the request succeed, the result `code` will be `plugin.FacebookAgent.CODE_SUCCEED`, otherwise, it will indicate the error code with an error message as the `response` parameter.

```javascript
var callback = function (code, response) {}
```

Meanwhile, the response object is only available when the request succeed, here is an example:

```javascript
// The response object 
{
    // The permissions granted by the current user
    "permissions" : [
        "publish_actions",
        "photos"
    ]
}
```

##Example

```javascript
// Assuming that facebook is the instance of FacebookAgent
facebook.getPermissionList(function(code, response){
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        var permissions = response["permissions"];
        var str = "Permissions: ";
        for (var i = 0; i < permissions.length; ++i) {
            str += permissions[i] + " ";
        }
        cc.log("Permissions: " + str);
    } else {
        cc.log("Failed to retrieve the permission list, error #" + code + ": " + response);
    }
});
```