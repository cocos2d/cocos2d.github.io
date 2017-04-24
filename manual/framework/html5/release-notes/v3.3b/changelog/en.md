Cocos2d-JS v3.3 Beta @ Jan.24, 2015

* Added Cocos Studio v2.x parser and refactored 1.x parser.
* Upgraded new flow layout UI system in web engine.
* Refactored `load` events of texture2d, sprite and so on to be more intuitive.
* Added JavaScript file loader.
* Allowed set texture to null in `cc.Sprite`.
* Added full test cases for Cocos Studio v2.x parser and the new flow layout UI system.
* Upgraded MoonWarriors sample's UI and graphic design.
* [JSB] Upgraded Cocos2d-x to v3.4 RC1.
* [JSB] Unified keycode between web engine and native engine to web standard values.
* [JSB] Added animation info's manual conversion for bindings.
* [JSB] Made local IP address url pass the url check of `cc.loader.loadImg` function.
* [JSB] Bound `ccs.AlphaFrame` for Cocos Studio animations.
* [JSB] Moved manual conversions of chipmunk to its own manual bindings file for better module support.

* Bug fixes:
	1. Fixed a bug of Cocos2d UI, their focus event has been supported.
	2. Fixed a buf of `ccui.Widget` that its percent position doesn't work.
	3. Fixed a bug of `ccs.Armature` that its position doesn't update in visit on WebGL render mode.
	4. Fixed a bug of `cc.Sprite` that its `setTextureRect` function doesn't work when `setColor` invoked.
	5. Fixed a bug of `cc.PhysicsSprite` that its position is incorrect.
	6. Fixed a bug of `ccs.Bone` that its `setOpacity` and `setColor` doesn't work.
	7. Fixed a bug of `cc.LabelBMFont` that its word wrap doesn't work.
	8. Fixed a bug of `cc.sys` that it gets the incorrect OS type when system is Linux.
	9. Fixed a bug of `cc.audioEngine` that its loading path is incorrect.
	10. Fixed a bug of `ccui.Widget` that it can't touch when it's reused.
	11. Fixed a bug of UI system that the `setNormalizedPosition` doesn't work.
	12. Fixed a bug of `cc.ActionInterval` that its `_times` conflict with `cc.Blink`.  
	13. Fixed release texture issue in canvas mode.
	14. Fixed a bug of `ccs.actionManager` that its `getActionByName` doesn't work.
	15. Fixed a bug of `cc.Sprite` that it can't draw without texture on WebGL mode.
	16. Fixed a bug of `cc.audioEngine` that it doesn't work on baidu browser.
	17. Fixed a bug of `cc.EditBox` that its position is incorrect on Canvas Mode and its string value is wrong when PlaceHolder is showing.
	18. Fixed a bug of `cc.loader` that its `loadImg` function doesn't work when image is accessed cross origin.
	19. Fixed a bug of `ccui.TextField` that its `contentSize` is incorrect in text field event.
    20. [JSB] Fixed restart game feature issue that action manager is not rescheduled after restarting game.
    21. [JSB] Fixed `jsb.AssetsManager`'s issue that manifest files progression is inversed.
    22. [JSB] Fixed `jsb.AssetsManager`'s issue that asset id isn't dispatched with progression event.
    23. [JSB] Fixed `Vec3` conversion issue.
    24. [JSB] Added missed `cc.AnimationFrame`'s `_ctor` function.
    25. [JSB] Added `cc.MenuItemToggle`'s `selectedItem` function to fix API inconsistence.
    26. [JSB] Fixed `LayoutParameter`'s `setMargin` function's API inconsistence with web engine.
    27. [JSB] Fixed `ccui.Button`'s constructor issue.
    28. [JSB] Fixed `ccui.Button`'s `setNormalizedPosition` function's API inconsistence with web engine.
    29. [JSB] Fixed `ccui.CheckBox`'s intialization issue.
    30. [JSB] Fixed `ccui.ImageView`'s constructor issue.
    31. [JSB] Fixed JSON parse issue in `XMLHTTPRequest`.
    32. [JSB] Fixed a wired compilation issue which reports `JSVAL_TO_IMPL` is not a function on win32.
    33. [JSB] Fixed image view test's implementation bug.
    34. [JSB] Fixed an UI button test's implementation bug.
    35. [JSB] Fixed list view test case's bug.
    36. [JSB] Fixed issues of `ccui.TextField`'s test cases.