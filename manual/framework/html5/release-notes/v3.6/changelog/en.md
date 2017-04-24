Cocos2d-JS v3.6 @ April 29 2015

* Added GAF web runtime to the web engine, the native support will be merged in future version.
* Synchronised Cocos2d-x v3.6.
* [JSB] Added `ccs.FrameEaseType` in JSB.
* [JSB] Added SpiderMonkey remote debugger support in default template.

* Bug fixes:
    1. Fixed a bug of Cocos Studio parser that it doesn't parse correctly the outline of text widget and button widget.
    2. Fixed a bug of Cocos Studio parser that it doesn't support inner action correctly.
    3. Fixed a bug of Cocos Studio parser that `ccui.Text`'s content size is set incorrectly.
    4. Fixed a bug of Cocos Studio parser that `ccui.Layout`'s background color is set incorrectly.
    5. Fixed a bug of `cc.Node`'s `removeAllChildren` that it doesn't notify the renderer to update.
    6. Fixed a bug of audio system that the resume of music may start from the beginning.
    7. Fixed a bug that sprite's `setTexture` fails to update its content size.
    8. Fixed a bug that Scale9Sprite's children doesn't get transformed recursively.
    9. Fixed constant naming issue of `ccs.FrameEaseType`.
    10. Fixed `cc.LoaderScene.preload` API inconsistency between web engine and native engine.
    11. Fixed a bug that `ccui.Slider` doesn't act correctly when it's scaled.
    12. Fixed a bug that `ccui.Button` renders incorrectly when scale9sprite option enabled.
    13. Fixed circular invocation issue in `cc.Sprite`'s canvas render command.
    14. [JSB] Fixed naming issue of `ccs.ActionTimeline.isAnimationInfoExists`.
    15. [JSB] Fixed `clearInterval` issue by fixing scheduler APIs.
    16. [JSB] Fixed `cc.DrawNode`'s `drawSegment` parameter issue by adding default value for line width.