Release Notes for Cocos2d-html5 v2.2
====================================

### Hightlights

-   Improved Sprite, Node, LabelTTF class, now it is clean and clear
-   Added a new sample game [Fruit Attack](http://www.cocos2d-x.org/html5-samples/samples/games/FruitAttack/index.html) which works great on PC browsers, mobile browsers, and can even be run natively as an android and iOS app with JSB
-   Replaced cc.Sprite and its subClasses’s texture from DOM element to \`cc.Texture2D on Canvas mode\`,
-   Improved cc.Texture2d, now you don’t need to wait resources loading when create a new scene or layers, texture will pop up when it is loaded
-   Improved the update function of Actions, now Actions use less temporary object, so it is good for GC and performance
-   Improved LabelTTF’s rendering pipeline, now it caches the result which is \`100% faster\` on mobile browser
-   Fixed API compatibility between Cocos2d-html5 and JSB , e.g. cc.ParticleSystemQuad has merged into cc.ParticleSystem, please refer to [Upgrade guide v2.1.5 to v2.2](http://www.cocos2d-x.org/wiki/Upgrade_Guide_from_Cocos2d-html5_v215_to_v22)
-   Added \`Auto Hiding url address bar\` for mobile browsers, please refer to the template and the hello world
-   Added frame event, collider and blend type supporting for Armature. Now Armature supports 2 tools: 1.[CocoStudio](http://www.cocostudio.org), 2.[DragonBones](https://github.com/2youyouo2/SkeletonAnimationDesignPanel)
-   Set auto render mode \`Default value\` to canvas for mobile browsers and WebGL for desktop browsers

### Bug Fixes

1.  Fixed cc.Sprite’s displayFrame returns wrong value on Canvas mode.
2.  Fixed cc.LabelBMFont is very slow when calling setString
3.  Fixed a bug of CCBReader that cc.ControlButton doesn’t work when its controller is \_jsControlled
4.  Fixed a bug of cc.TextureCache that the status of texture is wrong in callback
5.  Fixed a bug of cc.Scale9Sprite that its contentSize is wrong when call setCapInsets
6.  Fixed a bug of cc.TableView’s that contentSize is wrong when change datasource
7.  Fixed a bug of cc.Sprite that its children also follow fliped when it was fliped
8.  Fixed cc.Node’s nodeToWorldTransform returns wrong value on Canvas Mode
9.  Fixed a bug of cc.LayerColor that represent incorrect opacity passed into init method
10. Stop listening and remove the event for HtmlImageElement object onload
11. Fixed cc.ProgressTimer display wrong when its sprite was flipped
12. Fixed some bugs for actions that set their object property through reference when initiating actions.

### Known Issues

-   Effect Advanced Lens3D doesn’t work
-   ClipNodeTest effects varies in different browsers

### Download

[Cocos2d-html5-v2.2.zip](http://www.cocos2d-x.org/download_versions/8/Cocos2d-html5-v2.2.zip)
