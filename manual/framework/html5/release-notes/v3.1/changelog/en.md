Cocos2d-JS-v3.1 @ Oct.22, 2014

* Released Facebook Integration for Cocos2d-JS v1.0, all APIs have been significantly polished and stabilized. Improved test cases for Facebook with more features demonstrated.
* Upgraded Cocos2d-x to v3.3 rc0
* Supported Cocos Studio v2.0 including Timeline animation support and proto buffers format support for both web engine and JSB engine.
* Refactored load event of texture, sprite frame and sprite for better maintainability.
* Refactored `cc.rendererCanvas` for improving performance.
* Moved the `CC_Texture0` definition of fragment shader to cc.GLProgram to ensure compatibility with JSB.
* Added normalized position functions to cc.Node.
* Refactored the constructor of Cocos Studio's classes and deprecated all create functions.
* Refactored Cocos Studio reader for better maintainability.
* Improved Facebook SDK.
* Modified `cc.ProgressTo`'s behavior, its progression didn't reset to zero when the progression is 100.
* Changed `ccui.Widget`'s default anchor point to (0, 0) in widget reader.
* Removed all deprecated create function usage in engine and in the test cases.
* [JSB] Refactor `cc.GLNode` for new renderer and re-enable OpenGL test case.

* Bug fixes:
    1. Fixed an issue of `cc.UILayout` that its scissor mode didn't work.
    2. Fixed an issue of `ccui.TextBMFont` that its 'string' property setting was incorrect.
    3. Fixed an issue of `cc.DrawNode` that its element's position was incorrect in Canvas mode.
    4. Fixed an issue of `cc.Layer` that its bake function didn't work in new renderer.
    5. Fixed an issue of `cc.Scale9Sprite` that its cached canvas size was incorrect.
    6. Fixed an issue of `cc.Director` that its position was incorrect when calling `setProjection` in new renderer.
    7. Fixed an issue of `cc.view` that the reinitialization logic of frame size was incorrect.
    8. Fixed incorrect usage of  `cc.progressTo` in progress action test.
    9. Fixed an issue of CocosNodeTest for the new renderer.
    10. Fixed minor issues in test cases.
    11. [JSB] Fixed an issue of `cc.EditBox`'s constructor.
    12. [JSB] Refactored an issue that `ccui.CheckBox`'s deprecated function `setSelectedState` is used instead of `setSelected`.
    13. [JSB] Fixed an issue of `cc.ScrollView`'s constructor.
    14. [JSB] Fixed an issue in Moon Warriors sample that a label's height was too small so it was cutting off its content.
    15. [JSB] Fixed user object conflict in `ccui.Widget`'s `addTouchEventListener` function binding.
    16. [JSB] Fixed an issue that null parameter was not correctly processed in `ccs.ArmatureAnimations`'s `setFrameEventCallFunc` and `setMovementEventCallFunc` functions.
    17. [JSB] Fixed an issue that `cc.Scale9Sprite`'s `updateWithBatchNode` had been deprecated in JSB.
    18. [JSB] Fixed an issue that `cc.SpriteBatchNode` could not be extended in JSB.
    19. [JSB] Fixed an issue that Cocos Studio extension classes could not be extended in JSB.
    20. [JSB] Fixed API inconsistency issues by renaming `cc.Node`'s `getRotationSkewX/Y` and `setRotationSkewX/Y` to `getRotationX/Y` and `setRotationX/Y`.

* Known Issues:
    1. `jsb.AssetsManager` doesn't work on windows due to a bug in libcurl