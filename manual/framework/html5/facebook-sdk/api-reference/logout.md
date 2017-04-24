#.logout(callback)

Log the user out of both your site and Facebook. Will also invalidate any access token that you have for the user that was issued before the logout.

##Parameters

```javascript
plugin.FacebookAgent.prototype.logout = function(callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|callback|Function|No|Callback function containing a result code and a JSON response.|

If logout succeeds, `code` is `plugin.FacebookAgent.CODE_SUCCEED`; otherwise, `code` is the error code and `response` is a JSON containing error message.

##Example

```javascript
var facebook = plugin.FacebookAgent.getInstance();
facebook.logout(function(code, response){
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        cc.log("Logout succeeded");
    } else {
        cc.log("Logout failed, error #" + code + ": " + response);
    }
});
```
