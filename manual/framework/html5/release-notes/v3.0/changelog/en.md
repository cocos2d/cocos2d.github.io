Cocos2d-JS-v3.0 Final @ Sep.10, 2014

* Facebook SDK Beta2: Added `appRequest` API.
* Facebook SDK Beta2: Added permission request in `login` API, removed `requestPermission` API.
* Facebook SDK Beta2: Renamed `request` API to `api`.
* Facebook SDK Beta2: Renamed `publishInstall` API to `activateApp`.
* Added getter and setter function for browser's density dpi: `cc.view.setTargetDensityDPI`, `cc.view.getTargetDensityDPI`.
* Added some type check functions.
* Added audio support for wechat browser.
* Added setPlaceHolderColor and setTextColor to ccui.TextField.
* Added API reference for Cocos Studio extension.
* [JSB] Polished AssetsManager for better iOS simulator support.
* [JSB] Move `EventAssetsManager` and `EventListenerAssetsManager` to jsb namespace.
* [JSB] Supported formatted string in `cc.log`/`cc.warn`/`cc.error`/`cc.assert`.
* [JSB] Added `retain`/`release` function for cc.Touch

* Bugs fix:
    1. Fixed an issue of `cc.Menu` that its item's touch priority is different than cc.eventManager.
    2. Fixed an issue of `cc.view` that its NO_BORDER mode doesn't work correctly.
    3. Fixed an issue of `cc.LabelBMFont` that its content size is different than JSB.
    4. Fixed an issue of `cc.LabelBMFont` that its `setColor` is invalid on some mobile devices.
    5. Fixed an issue of `cc.PageView` that it can't receive TOUCH_CANCEL event.
    6. Fixed an issue of `cc.loader` that it can't load cross origin textures.
    7. Fixed an issue that Facebook SDK Web's `appRequest` wraps info parameter incorrectly.
    8. Fixed an issue of ccui widgets' `addEventListener` that it doesn't accept function's target as parameter.
    9. [JSB] Fixed a crash issue of Facebook SDK when session is closed.
    10. [JSB] Fixed constant inconsistence in ccui.TextField.
    11. [JSB] Fixed return value inconsistence of `cc.Node#getNodeToWorldTransform` function.
    12. [JSB] Fixed an issue that `cc.MenuItemImage`'s `setColor` doesn't work.
    13. [JSB] Fixed API inconsistence that `cc.Layer`'s `bake`/`unbake`/`isBaked` functions are absent in JSB.
    14. [JSB] Refactored ccui's `addEventListenerXXX` to `addEventListener` to fit Web engine API.
    15. [JSB] Fix an issue that delete doesn't work for `ccui.TextField`'s on desktop.
    16. [JSB] Fixed stroke color issue of LabelTTF on iOS.
    17. [JSB] Fixed an issue of `jsb.fileUtils.renameFile` on windows.
    18. [JSB] Fixed an issue of bindings generator script on windows.
    19. [JSB] Fixed `cc.REPEAT_FOREVER` value error.