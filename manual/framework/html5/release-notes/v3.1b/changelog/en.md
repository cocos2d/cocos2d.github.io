Cocos2d-JS v3.1 beta @ Oct.13, 2014

* Refactoration of the web engine with new renderer on the architecture level, optimization is under going.
* Released Facebook SDK for Cocos2d-JS beta2, its API have been significantly improved and stablized.
* Upgraded MoonWarriors sample with new set of graphical assets.
* Automatically enabled WebGL on iOS 8 safari.
* Upgraded chipmunk.js to the newest version.
* Supported setting color of shadow for `cc.LabelTTF`.
* Added `getTitleRenderer` function to ccui.Button.
* Supported Coco Studio timeline animation.
* Set the default value of LabelAtlas's `cascadeOpacityEnabled` and `cascadeColorEnabled` to true.
* Added a listener of texture to `cc.Sprite#setTexture` when the texture hasn't loaded.
* Activated `cc.pool` for all kind of objects.
* Added query test for chipmunk and added necessary JavaScript bindings.
* [JSB] Added properties for `cp.Shape`, added missed methods for `cp.Vect` and `cp.v`.
* [JSB] Added missed constant for `ccui.ListView`.
* [JSB] Ignored alpha value in `cc.Node#setColor`.
* [JSB] Used Object.create for creating prototype during inheritance to avoid potential memory leak.
* [JSB] Made regular expression for URL check more reliable using third party code.

* Bugs fix:
    1. Fixed a bug of `cc.ComponentContainer` that a 'if' statement behavior is incorrect.
    2. Fixed a bug of `cc.Scale9Sprite` that the behavior of Canvas and WebGL is different.
    3. Fixed a bug of `cc.EventListener` that its pause state should set to true.
    4. Fixed a bug of `cc.ParticleSystem` that it should apply canvas scaling on canvas rendering mode.
    5. Fixed a bug of CCBoot.js that `cc.loader` should add a condition to check whether `crossOrign` property is undefined on IE9 and IE10.
    6. Fixed a bug of `ccui.Widget` that its `setPosition` function's behavior is incorrect.
    7. Fixed a bug of `ccui.LoadingBar` that its `barRenderer` should add to protected children array.
    8. Fixed a bug of `cc.Texture2D` that its `TEXTURE_MAG_FILTER` should set to LINEAR. 
    9. Fixed a bug of `cc.TMXMapInfo` that its doesn't parse `rotation` property.
    10. Fixed a bug of `cc.TMXLayer` that it should apply canvas scaling on Canvas rendering mode.
    11. [JSB] Fixed an issue of incorrect return value in `cc.textureCache.addImage`.
    12. [JSB] Fixed an issue of `cc.loader.getRes` for supporting cached resources.
    13. [JSB] Fixed an issue of `cc.loader.loadImg` for supporting local image loading.
    14. [JSB] Fixed `cocos run -p ios` command issue with Xcode 6.
    15. [JSB] Fixed `cc.EditBox` behavior issue on iOS8.
    16. [JSB] Fixed an issue of `cc.Scale9Sprite` that it may mask its child node content.
    17. [JSB] Fixed an issue that `arrivalOrder` get reset after being visited and cause children order chaos.
    18. [JSB] Fixed an issue of `_ctor` function check in construction.
    19. [JSB] Fixed a bug of `cpGroup` type definition inconsistence between iOS 8 and other platforms.
    20. [JSB] Fixed API inconsistence between web and JSB engine for `cc.Touch#getID`.
    21. [JSB] Fixed memory leak issue of cc.pool in JSB.
    22. [JSB] Fixed a bug that `cc.ScrollView`'s construction haven't been implemented in JSB.
    23. [JSB] Fixed arguments processing error in chipmunk bindings by adding safe guard.
    24. [JSB] Fixed a bug in particle system test case.
    25. [JSB] Fixed a potential crash issue for `cc.CallFunc`.
    
* Known Issues:
    1. AssetsManager doesn't work on windows due to a bug in libcurl
    2. Timeline animation haven't been bound to JSB