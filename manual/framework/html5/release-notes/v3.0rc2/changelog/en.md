Cocos2d-JS-v3.0 RC2 @ Aug.11, 2014

* Refactored Cocos UI for more stable and friendly user experience.
* Upgraded Cocostudio reader to support version 1.2 - 1.5.x.
* Upgraded Cocostudio Armature animation from Cocos2d-x v3.2.
* Added back 2.x createWithXXX functions and deprecate all create/createWithXXX functions.
* Merged cc.NodeRGBA and cc.LayerRGBA to cc.Node.
* Fixed ctor functions bugs to support new construction.
* Refactored cc.Sprite's setColor to improve its performance.
* Renamed CCAffineTransform.js's functions to lowercase started functions.
* Upgraded cc.Scale9Sprite from Cocos2d-x 3.2.
* Improved cc.LabelTTF's line break algorithms to support multi-languages.
* Made cc.RenderTexture's beginWithClear accept color value from 0-255.
* Improved implementation of all Actions lower case alias creation functions.
* Added lower case creation functions for 3d actions and progress actions.
* Added cc.sys.platform API for detecting platform.
* Upgraded HelloWorld project with v3.0 APIs.
* [JSB] Included Facebook SDK for Cocos2d-JS alpha release.
* [JSB] Supported Javascript to Objective-C reflection.
* [JSB] Supported remote image loading with cc.loader and cc.textureCache.
* [JSB] Supported inheritance of gui extension and spine extension.
* [JSB] Bound console.log function.

* Bugs fix:
    1. Fixed a transform error in ccs.TransformHelp.
    2. Fixed a bug of cc.MenuItemToggle that callback is not correctly initialized when using new construction.  
    3. Fixed a bug in cc.layer's bake function that its position is incorrect when cc.view is scaled.
    4. Fixed a bug of cc.LayerMultiplex.
    5. Fixed a bug of cc.TMXLayer that it can't display all map image when its type is hexagonal.
    6. Fixed a bug of cc.ControlSwitch.
    7. Fixed image format constant inconsistence.  
    8. Fixed a bug of ccui.Widget that it is invisible after popScene.
    9. Correct behavior of cc.TransitionSlideInB and cc.TransitionSlideInT.
    10. Fixed a bug of requestAnimFrame that it doesn't work after re-focus WeChat browser on Samsung mobile.
    11. Fixed bugs of ccui.Widget and ccui.Text's clone functions.
    12. Fixed a bug of ccui.Layout that its clipping area is incorrect.
    13. Fixed a bug of CCBoot.js that bind function is undefined in Safari for iOS 5.1.
    14. Fixed a bug of cc.WebAudio that sourceNode's playbackState is invalid on some browsers.
    15. [JSB] Fixed cocos studio scene test crash issues.
    16. [JSB] Bound BaseData/AnimationData/MovementData's properties.
    17. [JSB] Bound cc.ReverseTime.
    18. [JSB] Fixed template crash issue on iOS < 6.0.
    19. [JSB] Fixed bindings generator's issue for generating lambda function.
    20. [JSB] Review _ctor functions and fix bugs.
    21. [JSB] Review classes inheritance ability in Javascript.
    22. [JSB] Improved code style in auto bindings
    23. [JSB] Fixed a bug of type conversion that empty string is converted to NULL.
    24. [JSB] Fixed bugs of UILayout relative and RenderTexture test cases.
    25. [JSB] Fixed a bug that cc.visibleRect isn't updated after modification of resolution policy.
    26. [JSB] Fixed a bug that cc.loader.load function's callback can't retrieve the result.
    27. [JSB] Fixed value inconsistence for image format constants.
    28. [JSB] Renamed cc.TextFieldTTF's textFieldWithPlaceHolder to create.
    29. [JSB] Fixed API inconsistence of cc.TMXTiledMap.
    30. [JSB] Fixed stencil buffer disabled issue on some Android devices.
    31. [JSB] Added defaultPixelFormat property definition.
    32. [JSB] Fixed typo of cc.radiansToDegrees.
    
* Known issues:
    1. [JSB] cc.ActionInterval's setSpeed and getSpeed function doesn't exist in JSB.
    2. [JSB] `cc.easeBezierAction` function is not supported in JSB.
    3. [JSB] jsb.AssetsManager have issues on Windows platform and iOS simulator.