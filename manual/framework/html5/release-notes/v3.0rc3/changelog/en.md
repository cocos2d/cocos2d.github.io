Cocos2d-JS-v3.0 RC3 @ Aug.29, 2014

* Facebook SDK Beta: Unified the callback parameters for different platform.
* Facebook SDK Beta: Added payment API on Web platform.
* Facebook SDK Beta: Added `publishInstall` and `logEvent` APIS on iOS and Android.
* Facebook SDK Beta: Supported app request and share open graph API on Web platform.
* Facebook SDK Beta: Remove plugin configuration for Facebook SDK to simplify the usage.
* Facebook SDK Beta: Added test case for new features and improve all test cases.
* Cocos Console: Improved web compile with `--advanced` tag.
* Improved Cocos2d-JS inline docs to provide a better API reference document.
* Refactored cc.game for maintainability. 
* Refactored cc.async to simplify and improve the usage.
* Added `cc.formatStr` for string formatting, for example: `cc.formatStr("a: %d, b: %b", a, b)`.
* Refactored cc.log to support formatted string.
* Refactored cc.pool's `hasObj` to `hasObject` and `removeObj` to `removeObject`.
* Added some state check to cc.audioEngine.
* Refactored sprite's blend function to support more features on Canvas.  
* Refactored `cc.textureCache.textureForKey` to `cc.textureCache.getTextureForKey`, `cc.TMXTilemap#propertiesForGID` to `cc.TMXTilemap#getPropertiesForGID` to follow the standard API naming style.
* Detected mouse event on touch screen tablets.
* Support new construction for cc.PhysicsDebugNode and deprecated `cc.PhysicsDebugNode.create`
* Made cc.Texture2D's setTexParameters supports two types of parameters. 
* Added test case for remote image loading.
* [JSB] Combine SpiderMonkey's arm64&32 lib to support Xcode 6.0 
* [JSB] Added abort function for XMLHttpRequest.
* [JSB] Used clang as the default compiler for Android compilation.
* [JSB] Made cc.place, cc.moveTo, cc.moveBy, cc.jumpTo, cc.jumpBy support x, y seperated position parameters.
* [JSB] Added setSpeed/getSpeed functions for cc.ActionInterval.
* [JSB] Made cc.easeBezierAction accept multiple parameters.
* [JSB] Refactored ccui.TextField's `setText` to `setString`, `getStringValue` to `getString`.
* [JSB] Refactored cc.Node and cc.Texture2D's `getGLProgram` to `getShaderProgram`, `setGLProgram` to `setShaderProgram` for compatibility with web engine.
* [JSB] Added missed shader program constants.
* [JSB] Added missed array util functions.
* [JSB] Bound constructor for cc.EventTouch and cc.Touch

* Bugs fix:
    1. Fixed an issue of tilemap that it can't runAction in canvas render mode.
	2. Fixed an issue of cc.eventManager that its removeListeners' codes are unreachable.
	3. Fixed an issue of cc.EditBox that its position is incorrect.
    4. Fixed an issue of cc.WebAudio that its stopped state is incorrect. 
    5. Fixed an issue of cc.audioEngine that it doesn't work on firefox after it compiled with advanced mode.
    6. Fixed an issue of ccs.Bone that it doesn't update color and opacity correctly.  
    7. Fixed an issue of ccs.Armature that its setShaderProgram doesn't work.
    8. Fixed cc.Sprite and cc.Scale9Sprite's issue so that their texture loads incorrectly.
    9. Fixed an issue of ccui.LoadingBar that its setPercent is invalid.
    10. Fixed an issue of Armature reader that it can't parse isTween property.
    11. Fixed an issue of ccui.PageView that its getTouchBeganPosition returns incorrect value. 
    12. Fixed an issue of ccui.ImageView that its setColor doesn't work. 
    13. Fixed an issue of cc.RenderTexture that it doesn't support parameter depthStencilFormat.
    14. Fixed an issue of ccs.ArmatureAnimation.setSpeedScale. 
    15. Fixed an issue of cc.Scale9Sprite that it has a line on iOS device.  
    16. Fixed CCProgressTimer draw on canvas with colorized sprite
    17. Fixed an issue of cc.game that its frameRate setter is invalid.
    18. Fixed an issue of cc.loader that its callback state is incorrect. 
    19. [JSB] Fixed memory leark issue of XMLHttpRequest.
    20. [JSB] Fixed bugs of Android Facebook SDK's dialog callback.
    21. [JSB] Fixed bugs of android-build.py.
    22. [JSB] Fixed bugs of cc.Texture2D's width and height property was not working.
    23. [JSB] Fixed a crash issue that `cc.textureCache.addImage` create duplicated jsb proxy for the same url.
    24. [JSB] Fixed incompatible issue in cc.async and cc.loader
    25. [JSB] Fixed cc.skewBy's inversed behavior.
    26. [JSB] Fixed an issue of Javascript to Objective-C reflection.
    27. [JSB] Fixed `anchorX` and `anchorY` property setter issue.
    28. [JSB] Fixed an issue about cc.BezierBy's construction.
    29. [JSB] Fixed an issue that cc.LabelBMFont doesn't initialize when passing empty string as its content.
    30. [JSB] Fixed an issue that ccui.Layout doesn't sort children nodes with their local z order.
    31. [JSB] Fixed an Android platform crash issue when handleOnPause get invoked before onSurfaceCreated
    32. [JSB] Fixed an issue that cc.Menu.create doesn't accept array as parameter.
    33. [JSB] Fixed an "Invalid Native Object" issue in RenderTextureTest.
    34. [JSB] Fixed a crash issue in assets manager test.

* Known issues:
    1. [JSB] jsb.AssetsManager have issues on Windows platform and iOS simulator.