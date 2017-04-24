#.isLoggedIn()

检查用户的授权状态。用户未登录Facebook或未授权你的应用则为 _false_ ;反之为 _true_ 。isLoggedIn()常常用来在获取访问令牌，用户ID或使用其他功能之前判断用户是否登录。

##范例

```javascript
var facebook = plugin.FacebookAgent.getInstance();
if (facebook.isLoggedIn()) {
    // Get data from Facebook to personalize the player's experience
} else {
    // Prompt the user to log in, or offer a "guest" experience
}
```
