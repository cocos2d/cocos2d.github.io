Cocos2d-JS v3.6 Beta @ April 22 2015

* Upgraded Action Timeline and parser for the latest version of Cocos editor.
* Added `cc.sys.isObjectValid` to detect whether an object is still valid (in web and native engine).
* Added `enumerateChildren` function for `cc.Node`.
* Improved TMX transform to support RotationX and RotationY.
* Refactored Spine skeleton render command.
* Added checks to prevent issues when `cc.Node.WebGLRenderCmd` is not exist.
* Improved iOS browsers detection.
* Added getter setter function for `cc.MotionStreak`'s stroke property.
* Improved the detection of render mode.
* Make `cc.Scale9Sprite` support unpreloaded texture.
* [JSB] Added Skybox and its test case.
* [JSB] Added Terrain and its test case.
* [JSB] Reactivated Firefox remote debug functionality with SpiderMonkey v33.
* [JSB] Made `cc.Node`'s `setNormalizedPosition` function accept two parameter.
* [JSB] Synced `cc.Texture2D`'s pixel format constants with Cocos2d-x.
* [JSB] Added `cc.BlendFunc` and some predefined blend functions alias.
* [JSB] Upgraded `cc.Scheduler`'s API.
* [JSB] Added g/setEasingParams for `ccs.Frame`.
* [JSB] Added ccs.TweenType in JSB.
* [JSB] Removed Windows Phone 8 platform because it's deprecated in Angle support. (After discussed with Microsoft on the market share, we think it's reasonable to remove WP8 support. Developers can still deploy their games on Windows Phone 8.1 and universal platforms)

* Bug fixes:
    1. Fixed a bug that `cc.Scheduler`'s `scheduleOnce` runs multiply times.
    2. Fixed a bug of `cc.Scheduler`'s `pauseAllTargetsWithMinPriority`.
    3. Fixed a bug of `cc.eventManager` that its event listeners' order is incorrect when some nodes haven't been added to the scene graph or have been removed from parent without cleanup.
    4. Fixed a bug of `cc.LabelTTF` that `enableShadow` doesn't work.
    5. Fixed a bug of `cc.LabelTTF` that `setColor` doesn't set shadow color under Canvas render mode.
    6. Fixed a bug that stopped audios can be resume after invoking pause on them.
    7. Fixed a bug that `ccui.LoadingBar`'s texture renders incorrectly without preload.
    8. Fixed a bug that cocos builder's callback doesn't get invoked.
    9. Fixed a bug that TMX objects' position is incorrect when content scale factor is modified.
    10. Fixed a mistaken usage of `cc.isObject` in `cc.Sprite` implementation.
    11. Fixed a bug that position type haven't been copied in `cc.ParticleSystem`'s `clone` function.
    12. Fixed some undefined parameter check issues in `cc.Node`.
    13. Fixed a bug that setter for `scaleY` of `cc.EditBox` is incorrect.
    14. Fixed a bug of `cc.SkeletonAnimation` that its canvas render command doesn't work correctly.
    15. Fixed a parsing issue for the width of `cc.LabelBMFont`.
    16. Fixed `ccs.TweenType`'s constants naming issue.
    17. Fixed a bug that the spine skeleton may be rendered under the unsupported mode.
    18. Fixed a bug when setting `cc.ParticleSystem`'s blend function in the ActionTimeline parser.
    19. Added check to prevent issues that functions may not exist in the ActionTimeline parser.
    20. Fixed a typo of `ccs.displayFactory`.
    21. Fixed a bug of `cc.Node.setPosition` that parameter check is incorrect.
    22. [JSB] Fixed converToWorldSpace(AR) API inconsistency.
    23. [JSB] Fixed warning of redefining macro.
    24. [JSB] Fixed an issue of focus event dispatching that the widget dispatched will get deleted after the event.
    25. [JSB] Fixed a bug that `cc.sys.localStorage` get empty string from null item.