#.canPresentDialog(info)

这个方法可以检查用户的设备是否可以打开特定的 [对话框](./dialog.md)。可以检查的对话框类型有：

- Share对话框
- Message对话框

如果可以打开返回_true_, 否则返回_false_.

##参数

```javascript
plugin.FacebookAgent.prototype.canPresentDialog = function(info){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|info|Object|Yes|对话框信息，和在dialog方法中传递的参数一样|

###对话框类型:

|Value|Dialog type|
|-----|-----------|
|shareLink|分享链接的Share对话框|
|sharePhoto|分享图片的Share对话框|
|shareOpenGraph|分享Open Graph story的Share对话框|
|messageLink|发送链接的Message对话框|
|messagePhoto|发送图片的Message对话框|
|messageOpenGraph|发送Open Graph story的Message对话框|

##示例

```javascript
facebook = plugin.FacebookAgent.getInstance();

var map = {
    "dialog": "shareLink",
    "link": "http://www.cocos2d-x.org"
};

if ( facebook.canPresentDialog(map) ) {
    facebook.dialog(map, function(errorCode, msg) {
        cc.log("The 'shareLink' dialog can be presented.");
        // ...
    });
} else {
    cc.log("The 'shareLink' dialog can not be presented, fallback to feed dialog.");
    map["dialog"] = "feedDialog";
    facebook.dialog(map, function(errorCode, msg){
        // ...
    });
}
```
