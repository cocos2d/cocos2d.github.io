#.getUserId()

The user's Facebook user ID, when a user is logged in and has authorized your app, or an empty string if not.

##Example

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
