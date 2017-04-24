#Facebook integration instruction for Cocos2d-JS on Web

This doc walks you through the integration of Facebook support for Cocos2d-JS on Web.

Although Facebook has [Facebook SDK for JavaScript](http://developers.facebook.com/docs/javascript), if your game has both mobile version and web version, we highly recommend you to use Cocos2d-JS's Facebook support for the web version because you can use the same code for both mobile and web without writing them separately for each platform.

**Step1**: Create your Facebook App on Canvas as described in [Getting Started with Canvas](http://developers.facebook.com/docs/games/canvas/). Add the URL to the web host for your sample under the "Canvas URL" and "Secure Canvas URL" section.

**Step2**: Import Facebook support

There are two ways for doing this:

- Option 1: You can find the files under `frameworks/cocos2d-html5/extenrnal` folder. Then you can load all dependencies manually as below：
    
    ```
    cc.loader.loadJs("", [
        "external/pluginx/platform/facebook_sdk.js",
        "external/pluginx/platform/facebook.js"
    ], function(){
        //do something
    });
    ```
    
- Option 2: You can directly include Facebook support module in `project.json`, the name for this module is `plugin-facebook`. In this way, the engine loads the dependencies in engine's loading process, so it may cause the loading time to be longer.

**Step3**: Config Facebook parameters in `project.json` as below

You need to add all Facebook App related information in `project.json`， the property of appid need add Your application id provided by Facebook:

```
{
    "module" : ["cocos2d", "pluginx", "plugin-facebook"],
    "plugin" : {
        "facebook": {
            "appId" : "", 
            "xfbml" : true,
            "version" : "v2.0"
        }
    }
}
```

You can visit [Quickstart: Facebook SDK for JavaScript](http://developers.facebook.com/docs/javascript/quickstart/) to learn more details. 

**Step4**: How to Use Facebook API

Please visit [Facebook API Reference for Cocos2d-JS](../api-reference/en.md).