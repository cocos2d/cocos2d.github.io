#.logout(callback)

从Facebook上注销，同时在注销之前会使访问令牌失效。

##参数

```javascript
plugin.FacebookAgent.prototype.logout = function(callback){}
```

|名称|类型|是否必须|描述|
|----|----|--------|-----------|
|callback|函数|否|其参数为结果码和返回结果对象。|

如果成功注销，`code`错误码为`plugin.FacebookAgent.CODE_SUCCEED`；否则, `code`就是错误码，同时`response`是一条包含错误信息的JSON。

##范例

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
