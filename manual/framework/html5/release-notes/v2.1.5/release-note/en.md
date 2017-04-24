Release Notes for Cocos2d-html5 v2.1.5
======================================

### Hightlights

-   Optimized John Resig’s inheritance pattern cc.Class.extend with advanced property initialization
-   Ported Cocos2d-html5 API to Cocos2d-x v2.1.4, keep compatible is the most important things
-   Optimized performance in some action’s update() function
-   Integrated Armature module, now you can use it to add your bone animation
-   Optimized performance of MoonWarriors and CocosDragon. Now they run smoother on mobile browser
-   Implemented the rest features of Cocos2d-x extensions in HTML5 version

### Bug Fixes

-   Fixed cc.EditBox Dom Element position issue when EGLView is setted
-   Fixed cc.EGLView adjustSize bug
-   Fixed the bug of cc.ParticleBatchNode that it doesn’t hide particles after particle life has expired when calling stopSystem()
-   Fixed a bug that LabelTTF dimension behavior doesn’t support height=0
-   Fixed line height for multiline LabelTTF and overlapping pixels in Scale9Sprite on Canvas browsers
-   Fixed a bug of cc.SimpleAudioEngine that unloading effect doesn’t work

### Known Issues

-   Effect Advanced Lens3D doesn’t work
-   ClipNodeTest effects varies in different browsers

### Download

[Cocos2d-html5-v2.1.5.zip](https://cocos2d-x.googlecode.com/files/Cocos2d-html5-v2.1.5.zip)
