Release Notes for Cocos2d-html5 v2.2.2
======================================

### Highlights

- Resolution policy now act as a combination of cc.ContainerStrategy and cc.ContentStrategy so that user can beautifully customize its behavior.
- cc.LabelTTF’s now support perfectly automatic line break with occidental and Chinese characters.
- cc.ClippingNode for canvas render mode is implemented.
- Refactored cc.Node and cc.Sprite by adding cc.*PointConst and cc.*SizeConst for better Performance. Now the performance of setPosition and getPosition is 65 faster than before.
- CCNode's setContentSize and setAnchorPoint support two types of parameters, more friendly and more efficient. setAnchorPoint(x,y) is 35 faster than setAnchorPoint(cc.p(x,y)).
- Added NPM support and adjusted folder structure. It supports modules customization, the mini HelloWorld is just 185KB when package all files into single file.Please visit [NPM Guide](http://www.cocos2d-x.org/wiki/Cocos-utils_for_NPM) for more details.
- Added SpriteFrameCache JSON format support.
- Added source map generating of Closure Compiler advance mode , please make sure your JDK version is 7.0 and up.
- Improved audio compatibility for mobile browser, added playing queue to solve the one audio restriction of some mobile browser.
- Refactoring TMXLayer for better performance.
- set cc.Rect’s origin and size from public to private for compatibility with JSB.
- CocoStudio supports async image loading.
- cc.log supports printing object content to console
- Refactoring indexing of actionManager and Scheduler for better performance.
- ClippingNode supports some features on Canvas Mode.
- Migrated Armature to v2.2.2.
- Add callback function to CocoStudio action completion and refactoring it for better performance.
- CCBReader supports that CCControl can send action by all types of event.
- Add create function to cc.NodeRGBA
- Add jsdoc document to CocoStudio classes

h3. Bugs fix:

1.  Fixed a bug of TMXLayer that it has thin lines at tile’s border when EGLView’s scale doesn’t equal 1.
2.  Fixed bugs of LabelBMFont about updateDisplayedOpacity and multi-line is incorrect.
3.  Fixed a bug of LabelTTF that enter an infinite loop when setting special string and fontSize to it.
4.  Fixed a bug of NodeRGBA and LayerRGBA about updateDisplayedColor and updateDisplayedOpacity.
5.  Fixed a bug of ProgressTimer that it can’t change color and opacity when calling setColor and setOpacity directly.
6.  Fixed a bug of cc.ProgressTimer that it has a blink when its reverseDirection equals false and type equals cc.PROGRESS\_TIMER\_TYPE\_RADIAL.
7.  Some Loaders need modify their default value to adapt CocosBuilder that CocosBuilder ignores some two properties object like cc.Point when all the properties equals to zero.
8.  Fixed a bug of Fixed a bug of TMXTileMap that its getProperty doesn’t work.
9.  Fixed a bug of ActionInterval that it throws error when its target doesn’t have RGBAProtocol property.
10. Fixed a bug of MenuItemSprite that it throws an error when create a MenuItemSprite object with cc.Node.
11. Fixed a bug of UIWidget that its container intercept touch event while they can’t.
12. Fixed a bug of ccs.UILayout about relative positioning.
13. Fixed a bug of Armature that its nodeToParentTransformCanvas correct.

### Known Issues:

1.  Effect Advanced Lens3D doesn’t work
2.  ClipNodeTest effects varies in different browsers
3.  Stencil of cc.ClippingNode doesn’t work well with WEBGL render mode, the stencil have the right size and shape but it masks the content with a monochrome mask.

### Download

[Cocos2d-html5-v2.2.2.zip](http://cdn.cocos2d-x.org/Cocos2d-html5-v2.2.2.zip)
