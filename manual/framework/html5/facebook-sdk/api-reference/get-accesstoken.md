#.getAccessToken()

Returns the [access token](http://developers.facebook.com/docs/facebook-login/access-tokens/) granted to your app when the user most recently authorized it; otherwise, an empty string.

##Example

```javascript
var facebook = plugin.FacebookAgent.getInstance();
var token = facebook.getAccessToken();
    if (token){
        cc.log("AccessToken: " + token);
    } else {
        cc.log("No valid access token from the current user");
    }
});
```
