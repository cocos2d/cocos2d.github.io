Cocos2d-JS v3.5 @ April 1 2015

* Supported Windows Universal application publish which includes Windows, Windows RT, Windows Phone 8.1 platforms.
* Updated Cocos2d-x v3.5.
* Upgraded Cocos Studio parser to support Cocos Studio v2.2.
* Supported Cocos Studio 3D scene editing.
* Upgraded runtime template to support Cocos Code IDE 1.2.0.
* Upgraded Spine support to v2.1, added spine test case with FFD. FFD is supported in native but not in web, both engine can parse the new version file correctly, but the web engine will ignore FFD informations.
* Replaced '==' with '===' for better performance.
* Added `path` parameter in `ccs.load` to support modifying cocostudio project resource path.
* Added animationList to Cocostudio ActionTimeline to support playing animation by name.
* Made ParticleSystem support creation from a map object. 
* Added missing functions to `cc.Grid3D` and `cc.PageTurn3D`.
* Added tip message functions to `cc.TextFieldTTF` for mobile browser. 
* Added a function `cc.sys.openURL`.
* Disabled retina display by default for better performance.
* Added Bower support.
* Updated `cc.sys.OS_XXX` informations for supported systems.
* [JSB] Moved 3D modules to `jsb` namespace.
* [JSB] Bound `ParticleSystem3D` and `PUParticleSystem3D` which support Particle Universe editor.
* [JSB] Improved bindings registration code.
* [JSB] Supported setting custom scheduler or action manager for node.
* [JSB] Added `enableStroke`, `setBoundingWidth`, `setBoundingHeight` to `cc.Label` to fit web engine API.
* [JSB] Supported ArrayBuffer and ArrayBufferView in `XMLHTTPRequest`'s `send` function.
* [JSB] Made remote image loading fully asynchronous.
* [JSB] Made `cc.Camera`'s `unproject` function support one argument.

* Bug fixes:
	1. Fixed a bug of chipmunk.js that it doesn't work under closure compiler advanced mode.
	2. Fixed a bug of Cocos Studio parser that widget didn't set its layout component.
	3. Fixed grammatical mistakes in cocostudio parser logs. 
	4. Fixed memory leak issue in `cc.LabelBMFont`.
	5. Fixed a bug of `cc.Scale9Sprite` that its `updateDisplayColor` doesn't take effect.
	6. Fixed a bug of Cocos Studio parser that `cc.Scale9Sprite` doesn't display correctly if its texture isn't preloaded.
	7. Fixed a bug of `cc.MenuItemSprite` that the construction will fail when parameter `selectedSprite` is a Scale9Sprite instance. 
	8. Fixed a bug of Cocos Studio parser that the background color of `ccui.Layout` can't be parsed correctly.
	9. Fixed a bug of `cc.ClippingNode` that it doesn't work when set `inverted` to true in Canvas Mode.
	10. Fixed a bug of `ccs.Armature` that its name was modified to animation name when loading from json files.
	11. Fixed a bug of `ccui.PageView` that it cancel child touch during movement of page view. 
	12. Fixed a bug of `cc.Scheduler` that its parameter `repeat` is invalid in schedule function.
	13. Fixed a bug of `cc.Scheduler` that `unschedule` function may fail.
    14. [JSB] Fixed a crash issue that `ccui.Checkbox` will crash due to conflict usage of `setUserObject`.
    15. [JSB] Fixed an issue that `cc.Node`'s `init` function is empty implemented and can't be overridden.
    16. [JSB] Fixed `cc.ClippingNode`'s `init` function issue that it didn't support arguments.
    17. [JSB] Fixed an issue that TTF Cocos Studio parser can not correctly set TTF font for widgets.
    18. [JSB] Fixed relocation overflow compilation issue by adding `LOCAL_ARM_MODE := arm`.
	