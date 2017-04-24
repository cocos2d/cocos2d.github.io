#.getUserId()

当用户已登入和授权应用时，返回该用户ID，否则返回null。

##范例

```javascript
var facebook = plugin.FacebookAgent.getInstance();
var userid = facebook.getUserId();
    if (userid){
        cc.log("User ID: " + userid);
    } else {
        cc.log("No valid User ID for the current user");
    }
});
```
