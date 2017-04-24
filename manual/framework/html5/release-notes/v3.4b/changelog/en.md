Cocos2d-JS v3.4 Beta0 @ March 19 2015

* Added Windows Phone 8.0 platform support.
* Upgraded SpiderMonkey to v33, greatly improved JS object garbage collection and performance.
* Bound 3D modules including camera, light, sprite 3d, animation 3d, billboard, etc.
* Improved `cc.FontDefinition` & `ccui.RichText` in the web engine.
* Added gradient stops feature to `cc.LayerGradient` [Web exclusive].
* Upgraded `cc.Scheduler` in the web engine with Cocos2d-x v3.4 implementation.
* Added a loading screen when scripts are loading.
* Improved performance by replacing `Object.defineProperties` with `cc.defineGetterSetter`.
* Supported loading sprite frames from json object.
* Refactored math library to improve web engine performance.
* Removed some variables from `cc` namespace to improve web engine performance.
* Added the Firefox OS Web manifest to support Firefox OS apps.
* Added `cocos` attr to the script element in templates.
* Moved loading.js to res folder for Cocos Console release mode.
* [JSB] Upgraded auto and manual bindings to SpiderMonkey v33.
* [JSB] Added 3D object conversions.
* [JSB] Added 3D transform getter functions to `cc.Node`.
* [JSB] Added full featured 3D test cases including: camera, light, sprite 3d, animation 3d, billboard, effect.
* [JSB] Improved auto and manual bindings rooting code for creating objects.
* [JSB] Defined properties for TextureData.
* [JSB] Added some useful callbacks to XMLHttpRequest.

* Bug fixes:
    1. Added `getSpriteFrame` to `cc.Sprite` to fix API inconsistency.
    2. Added `getObejct` to `cc.TMXObjectGroup` to fix API inconsistency.
    3. Added `addImageAsync` to `cc.textureCache` to fix API inconsistency.
    4. Fixed a bug of `cc.text` that its default font name is incorrect. 
    5. Fixed a bug of `ccui.PageView` that its `getPage` doesn't work.
    6. Fixed a bug of `ccui.ImageView` that its `loadTexture` doesn't work while it's invoked multiple times at the same frame.
    7. Fixed a bug of `ccui` that its load event callbacks have some mistakes.
    8. Fixed a bug of `cc.Layer` that its bake function doesn't work when the layer has a parent node.
    9. Fixed typos in `cc.ClippingNode.WebGLRenderCmd` and `cc.ParticleSystem.WebGLRenderCmd` creation.
    10. Fixed a bug of `cc.Sprite` in `setTextureRect`. 
    11. Fixed a bug of `cc.Screen`.
    12. Fixed a bug of `cc.view` that it doesn't work on iOS 8.1.2.
    13. Fixed a bug of cc.DrawNode that its lineWidth is always to default value when set linewidth to zero. 
    14. Fixed a bug in hack for particles performance on canvas. 
    15. Fixed a bug of `cc.audioEngine` that it doesn't work after minified/compiled.
    16. Fixed a bug in `CCBoot.js` that WebGL is not activated in web view of iOS 8. 
    17. Fixed a bug of `cc.CheckBox` that its position is incorrect when its texture isn't preloaded.
    18. Fixed a bug of `cc.TMXLayer` that it stops to work after `setTileGID` called.
    19. Fixed a bug of Cocos parser 2.x that it doesn't set widget's LayoutComponent.
    20. Fixed a bug of `cc.isObject` that it considered function as an object.
    21. [JSB] Fixed runScript error on win32 platform.
    22. [JSB] Fixed issues of generated binding codes for spine and ccs.
    23. [JSB] Fixed char16_t redefinition issue for wp8.
    24. [JSB] Fixed an issue that string value with line break characters will cause cc.plistParser fail to parse.
    25. [JSB] Refactored `cc.textureCache.addImageAsync` to support fully asynchronoused remote image loading.
    26. [JSB] Fixed an issue of `GLProgramState::setVertexAttribPointer` function binding.
    27. [JSB] Fixed a bug in `GLProgram`'s constructor.
    28. [JSB] Fixed http response header parsing issue.
    29. [JSB] Fixed jsc file check issue on windows.
    30. [JSB] Fixed `jsval_to_long_long` conversion issue.
    31. [JSB] Fixed `strtoll` undefined error in visual studio.
    32. [JSB] Fixed an issue that `cc.MenuItem`'s `setCallback` function invoked with wrong this object.
    33. [JSB] Fixed parameter issue for constructor of `cc.MenuItemImage`.
    34. [JSB] Fixed `ccs.Armature`'s `setBlendFunc` parameter inconsistency issue.
    35. [JSB] Fixed `JSStringWrapper` issue on windows platform.
    36. [JSB] Fixed a chinese character issue on WP8.
    37. [JSB] Fixed new object failed issue on windows.
    38. [JSB] Fixed an issue that `cc.Label.createWithTTF` is undefined.
    39. [JSB] Fixed audio loader absent issue.
    40. [JSB] Fixed a test case issue of native feature usage.
    