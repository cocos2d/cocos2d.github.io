#.getAccessToken()

如果用户登录成功，会返回[访问令牌](http://developers.facebook.com/docs/facebook-login/access-tokens/)，否则为null。

##范例

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
