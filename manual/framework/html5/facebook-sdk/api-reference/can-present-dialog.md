#.canPresentDialog(info)

This method is to determine if the device is capable of presenting the particular dialog, as documented in [dialog doc](./dialog.md). These dialogs this method can check include:

- The Share Dialog
- The Message Dialog

If it is capable, it returns _true_, otherwise it returns _false_.

##Parameters

```javascript
plugin.FacebookAgent.prototype.canPresentDialog = function(info){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|info|Object|Yes|The dialog info as the one which will be passed in the dialog API.|

###Dialog types:

|Value|Dialog type|
|-----|-----------|
|shareLink|Share Dialog for sharing a link|
|sharePhoto|Share Dialog for sharing a photo|
|shareOpenGraph|Share Dialog for sharing a structured Open Graph story|
|messageLink|Message Dialog for messaging a link to friends|
|messagePhoto|Message Dialog for messaging a photo to friends|
|messageOpenGraph|Message Dialog for messaging an Open Graph story to friends|

##Example

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
