Cocos2d-JS v3.3 RC0 @ Reb.1, 2015

* Added web exclusive functions: `_getFontStyle`, `_setFontStyle`, `_getFontWeight` and `_setFontWeight` APIs to `cc.LabelTTF`.
* Observed orientation change event on mobile for resolution policy adaptation.
* [JSB] Added bindings for `ccs.TextureData` and `ccs.ContourData`.

* Bug fixes:
    1. Fixed Cocos Studio JSON parser's issues for parsing nested animation.
    2. Fixed Cocos Studio JSON parser's parameters parsing issues.
    3. Fixed Cocos Studio JSON parser's issue for parsing layer.
    4. Fixed Cocos Studio JSON action parser's issues.
    5. Fixed Cocos Studio JSON parser's issue for parsing Scale9Sprite.
    6. Fixed Cocos Studio JSON parser's issues caused by parsing process order.
    7. Fixed Cocos Studio JSON parser's issue for parsing loading bar's direction.
    8. Fixed UI layout system issues.
    9. Fixed `cc.EditBox`'s position issue under certain resolution policies.
    10. Fixed `ccui.ListView`'s issue for setting direction.
    11. Fixed an issue of `cc.Tween` that its `_currentPercent` is incorrect in `updateHandler` function.
    12. Fixed an issue of `ccui.Button` that its state is incorrect in `_onPressStateChangedToNormal`.
    13. Fixed an issue of `cc.ArmatureAnimation`'s `setMovementEventCallFunc`.
    14. Fixed an issue of `cc.Sequence` action when it's repeated.
    15. Fixed `_anchorPointInPoints` usage issue.
    16. Fixed an issue of `cc.GLProgram` that it doesn't work on some devices which didn't support highp float precision.
    17. Fixed an issue of fade actions that they don't work when duration is 0.
    18. Fixed `onended` callback issue of audio engine on iOS.
    19. Fixed Cocos Builder's parser issue for auto playing animations.
    20. Added a message to `ccs.Armature` that it doesn't support adding widget as its child.
    21. Improved test cases for stability.
    22. [JSB]Fixed `setBackGroundColorVector` parameter issue.
    23. [JSB]Fixed `animationInfo` manual conversion issue.
    24. [JSB]Added `ccs.AnimationInfo` struct.
    25. [JSB]Improved JavaScriptObjCBridge's import order.
    26. [JSB]Fixed `cc.SpriteBatchNode.DEFAULT_CAPACITY` inconsistency issue.
    27. [JSB]Fixed `cc.MenuItemImage`'s children class's callback issue.
    28. [JSB]Enhanced `executeJSFunctionFromReservedSpot` function.
    29. [JSB]Fixed `cc.LabelTTF`'s `setDimensions` API inconsistency issue.