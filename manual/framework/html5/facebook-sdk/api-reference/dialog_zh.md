#.dialog(info, callback)

dialog方法可以调用Facebook的对话框，包括:

- Share对话框，可以在Facebook上进行１对多的分享。
- Message对话框，可以向好友发送消息。
- Feed对话框，这是一个用来分享的对话框，基于web页面，可以在所有设备上工作，即使用户没有安装FAcebook app。

##参数

```javascript
plugin.FacebookAgent.prototype.dialog = function(info, callback){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|info|object|Yes|用来分享的内容。|
|callback|function|No|回调函数，参数包含一个结果码和一个JSON的response对象。|

###`info` 对象的属性:

|Name|Type|Required|Description|
|----|----|--------|-----------|
|dialog|string|Yes|这个属性决定了share对话框的类型。|
|other properties|various|Yes|根据对话框类型不同的附加属性。|


##Share对话框

允许用户在你的应用中分享一个链接，一个结构化的[Open Graph](https://developers.facebook.com/products/open-graph) 故事或者一张照片。

在iOS或者Android上，如果用户安装了Facebook应用，这个方法将会调用Facebook应用中的原生界面来进行分享，分享完成后返回你的应用。使用share对话框，你的应用无需要求用户登陆。如果用户的设备上没有安装Facebook应用，这个方法会调用Feed对话框，这是一个基于web页面的对话框。更多细节内容可以浏览[Sharing in iOS](http://developers.facebook.com/docs/ios/share) 和 [Sharing in Android](http://developers.facebook.com/docs/android/share)。

在浏览器上，这个方法通过Javascript调用一个Share对话框，又有链接和Open Graph story可以分享。更多细节内容可以浏览[Share Dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog)。


###Share对话框类型:

|Value|Dialog type|
|-----|-----------|
|shareLink|分享一个链接|
|sharePhoto|分享一张图片|
|shareOpenGraph|分享一个Open Graph story|

###各种Share对话框的`info`对象的额外属性:

1.`shareLink`

|Name|Type|Description|Default|
|----|----|--------|-------|
|to|string|指定Facebook用户id或者用户名，将会分享到他的时间轴上。|当前用户|
|link|string|分享的链接。|在开发者页面设置的url。|
|name|string|分享的故事名字，会在顶部显示，有一个指向link的超链接。|应用名，在开发者页面配置。|
|caption|string|显示在名字下面的短描述。|The app base URL|
|description|string|更长的描述，分享故事的主体。|None|
|picture|string|图片的url，PNG或者JPEG格式。|None|
|media_source|string|音频或者视频的url。|None|
|action_name|string|action_link的文字。|None|
|action_link|string|在分享底部显示的链接，可以和主体故事链接不同。|None|
|reference|string|A name for the category of feed post, used in Facebook Insights to help you measure the performance of different types of post|None|
|properties|object|Links which will be rendered at the bottom of the Feed story. Keys must be strings. Values can be either strings (in which case the story will have the key as text and the value as the link URL), or length-2 string arrays where the 0th value is the text and the 1st value the URL to link to.|None|

2.`sharePhoto`

请注意在iOS和Android上一次只能分享一张图片。

|Name|Type|Description|
|----|----|-----------|
|photo|string|图片的路径。|


3.`shareOpenGraph`

请注意在iOS和Android上一次只能分享一个Open Graph story。

|Name|Type|Description|
|----|----|-----------|
|object_type|string| | 
|title|string| |
|image|string| |
|url|string| |
|description|string| |
|preview_property_name|string| |
|action_type|string| |


###回调函数

```javascript
var callback = function (code, response) {}
```

如果分享成功，`code` 等于 `plugin.FacebookAgent.CODE_SUCCEED`， `response` 是一个含有`post_id`的JSON对象。

```javascript
{
    // The id of the post which has been shared
    "post_id" : "1697818070_220407711431887"
}
```

如果分享失败，`code`是一个错误码，`response`是一个包含错误信息的JSON对象。

```javascript
{
    "error" : "FBErrorDialogInvalidShareParameters"
}
```

###示例

1. 分享一个链接

    ```javascript
    var info = {
        "dialog": "shareLink",
        "link": "http://www.cocos2d-x.org",
        "name": "Cocos2d-x",
        "description": "Cocos2d-x is a great game engine",
        "picture": "http://files.cocos2d-x.org/images/orgsite/logo.png"
    };
    
    var facebook = plugin.FacebookAgent.getInstance();
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // Succeed
        } else {
            cc.log("Sharing failed, error #" + code + ": " + response);
        }
    });
    ```
    
2. 分享一个图片

    ```javascript
    var info = {
        "dialog": "sharePhoto",
        "photo": "/User/XXX/Documents/a.png"
    };
    
    var facebook = plugin.FacebookAgent.getInstance();
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // Succeed
        } else {
            cc.log("Sharing failed, error #" + code + ": " + response);
        }
    });
    ```
    
3. 分享一个Open Graph story

    ```javascript
    var info = {
        "dialog": "shareOpenGraph",
        "object_type": "cocostestmyfc:cocos_document", 
        "title": "Cocos2d-JS Game Engine",
        "image": "http://files.cocos2d-x.org/images/orgsite/logo.png",
        "url": "http://cocos2d-x.org/docs/manual/framework/html5/en",
        "description": "cocos document"
        "preview_property_name": "cocos_document",
        "action_type": "cocostestmyfc:share",
    };
    
    var facebook = plugin.FacebookAgent.getInstance();
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // Succeed
        } else {
            cc.log("Sharing failed, error #" + code + ": " + response);
        }
    });
    ```

##Message对话框

允许用户发送一个链接，一个结构化的[Open Graph](https://developers.facebook.com/products/open-graph) story 或一张图片给他们的好友。

在iOS或Android上，他调用Facebook Messenger应用的对话框发送消息，需要用户在他们的设备上安装了Messenger才可以使用。详情请看[Sharing in iOS](https://developers.facebook.com/docs/ios/share#message-dialog) 和 [Sharing in Android](https://developers.facebook.com/docs/android/share#message-dialog) 。使用Message对话框不需要用户登陆Facebook。

在Web上，只可以发送链接给好友，详情请看[Send Dialog](https://developers.facebook.com/docs/sharing/reference/send-dialog)。

###Message对话框类型:

|Value|Dialog type|
|-----|-----------|
|messageLink|发送一个链接|
|messagePhoto|发送一张图片|
|messageOpenGraph|发送一个Open Graph story|

###Message对话框的`info`对象额外属性:

1.`messageLink`

|Name|Type|Description|
|----|----|--------|
|link|string|分享的链接|
|name|string|标题|
|caption|string|子标题|
|description|string|链接内容的一段描述。|
|picture|string|缩略图的url|

2.`messagePhoto`

请注意在iOS和Android上一次只能发送一个图片。

|Name|Type|Description|
|----|----|-----------|
|photo|string|图片的路径|

3.`messageOpenGraph`

请注意在iOS和Android上一次只能发送一个Open Graph story。

|Name|Type|Description|
|----|----|-----------|
|object_type|string| | 
|title|string| |
|image|string| |
|url|string| |
|description|string| |
|preview_property_name|string| |
|action_type|string| |

###回调函数

```javascript
var callback = function (code, response) {}
```

如果发送成功, `code` 等于 `plugin.FacebookAgent.CODE_SUCCEED`。如果失败， `code` 是一个错误码，`response`是一个包含错误信息的JSON对象。

```javascript
{
    "error_message": "Action canceled by user"
}
```

###示例

1. 发送一个链接

    ```javascript
    var info = {
        "dialog": "messageLink",
        "link": "http://www.cocos2d-x.org",
        "title": "Cocos2d-x",
        "description": "Cocos2d-x is a great game engine",
        "picture": "http://files.cocos2d-x.org/images/orgsite/logo.png"
    };
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // Succeed
        } else {
            cc.log("Failed to send the message, error #" + code + ": " + response);
        }
    });
    ```
    
2. 发送一个图片

    ```javascript
    var info = {
        "dialog": "messagePhoto",
        "photo": "/User/XXX/Documents/a.png"
    };
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // Succeed
        } else {
            cc.log("Failed to send the message, error #" + code + ": " + response);
        }
    });
    ```
    
3. 发送一个Open Graph story

    ```javascript
    var info = {
        "dialog": "messageOpenGraph",
        "object_type": "cocostestmyfc:cocos_document", 
        "title": "Cocos2d-JS Game Engine",
        "image": "http://files.cocos2d-x.org/images/orgsite/logo.png",
        "url": "http://cocos2d-x.org/docs/manual/framework/html5/en",
        "description": "cocos document"
        "preview_property_name": "cocos_document",
        "action_type": "cocostestmyfc:share",
    };
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // Succeed
        } else {
            cc.log("Failed to send the message, error #" + code + ": " + response);
        }
    });
    ```
    
##Feed对话框

Feed对话框用来在Facebook newsfeed上分享内容，他基于web页面，无需用户安装facebook应用即可使用，相比Share对话框是一个退而求其次的选择。
The Feed dialog publishes posts to the Facebook newsfeed. The Feed dialog is a web-based dialog that works on all devices, even if people don't have the Facebook for iOS app or Facebook for Android app installed, at the expense of an optimum experience for people using your apps (compared to the Share Dialog).

On iOS or Android, since the Feed dialog opens a web page for sharing, it must start by asking people for their Facebook credentials in order to verify their identity, which disrupts the sharing flow. People are also asked to re-enter their credentials over time as their password changes. The Feed dialog does not support Open Graph and supports only the basic attachment model which includes a link, title/description text and an image. So we recommend that you use the Share Dialog and you implement the Feed Dialog as fallback for the cases where the Facebook for iOS app or the Facebook for Android app is not present or the Share Dialog is not supported (for example, due to an old version of the Facebook for iOS app or the Facebook for Android app being installed). As mentioned, the Feed dialog does not support publishing Open Graph stories, so if you're using the Feed Dialog as fallback for the Share Dialog when publishing an Open Graph story you will need to adapt the contents to post a link (optionally with an image and text) instead.

On Web, you should always use the Share Dialog and the Feed Dialog for web has already been deprecated since Facebook API Version 2.0.

###`info`对象的属性:

|Name|Type|Description|Default|
|----|----|--------|-----------|
|dialog|string|你应该使用`feedDialog`|None|
|to|string|希望分享到的时间轴的用户ID或用户名|当前用户|
|link|string|分享的链接|开发者页面设置的URL|
|name|string|分享的故事名，是一个指向link的超链接|在开发者页面设置的应用名|
|caption|string|短描述，链接的名字|应用URL|
|description|string|长的描述，分享的主体|None|
|picture|string|图片的URL，支持PNG和JPEG格式|None|

###回调函数

```javascript
var callback = function (code, response) {}
```

如果分享成功，`code`等于`plugin.FacebookAgent.CODE_SUCCEED`，`response`是一个JSON对象包含`???`
```javascript
{
    // The id of the post which has been shared
    "post_id" : "1697818070_220407711431887"
}
```

如果分享失败，`code`是一个错误码，`response`是一个包含错误信息的JSON对象。

```javascript
{
    "error_message": "Action canceled by user"
}
```

###示例

```javascript
var info = {
    "dialog": "feedDialog",
    "link": "http://www.cocos2d-x.org",
    "name": "Cocos2d-x",
    "description": "Cocos2d-x is a great game engine",
    "picture": "http://files.cocos2d-x.org/images/orgsite/logo.png"
};
facebook.dialog(info, function (code, response) {
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        // Succeed
    } else {
        cc.log("Failed to send the message, error #" + code + ": " + response);
    }
});
```    
