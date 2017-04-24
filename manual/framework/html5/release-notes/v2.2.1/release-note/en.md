Release Notes for Cocos2d-html5 v2.2.1
======================================

### Hightlights

* CocoStudio is now supported on Cocos2d-html5. The GUI, scene and component modules have been added to it.
* cc.EGLView and most render classes have been re-written to adapt multiple resolution resources in-order to optimize performance on mobile browsers.
* Refactored cc.LabelTTF, now its contentSize and position is correct for labels which has defined stroke and shadow.
* Corrected the behavior of “CascadeColorEnabled” and “CascadeOpacityEnabled” for cc.NodeRGBA and cc.LayerRGBA.
* All cc.Assert has being replaced, and more arguments checking and log information have added to engine’s function.
* Added cc.Screen to engine, it uses to enter/exit fullscreen mode.
* Added cc.VisibleRect to engine, it provides nine points of game view for positioning.
* cc.WebAudioEngine now works perfectly on chrome.
* CocoStudio’s namespace changes to ccs now, and the other module’s namespace will be renamed and support NPM in next version.
* cc.rect now accepts more types of parameters on JSB and HTML5 now, for example: cc.rect(1,1,1,1) and cc.rect(aRect), and cc.rect(cc.p(1,1),cc.size(10,10));
* Optimized cc.Node’s getBoundingBoxToWorld for better Performance.
* Modified the *sequenceCompleted method in CCBAnimation, it can set the next sequence in callback now.
* Improved the maintainability for*drawSceneForWebGL and *drawSceneForCanvas.
* ParticleExamples has been refactored for JSB.
* HelloHTML5World’s CircleSprite has been removed, because it doesn’t work on JSB.



h3. Bug Fixes
- Fixed a Scale9Sprite’s bug that setCapInsets is invalid.
- Fixed a bug that prevents the game to run on Chrome 31 WebGL mode.
- Fixed a bug of LabelTTF that doesn’t work on Baidu browser.
- Fixed a bug of Sprite that it shouldn’t to set transform dirty when setting color or opacity.
- Fixed a bug that cc.EditBox’s setFontSize is invalid.
- Fixed a bug that Particles doesn’t work when search path in FileUtils was set.
- Fixed a bug of Scale9Sprite that it throws an error when*scale9Image is null.
- Fixed a bug of LayerGradient that it shows wrong size when setting content size.
- It should listen to the method “onLoad” in cc.FileUtils when the browser isn’t IE.

### Known Issues

- Effect Advanced Lens3D doesn’t work
- ClipNodeTest effects varies in different browsers

### Download

[Cocos2d-html5-v2.2.1.zip](http://cdn.cocos2d-x.org/Cocos2d-html5-v2.2.1.zip)
