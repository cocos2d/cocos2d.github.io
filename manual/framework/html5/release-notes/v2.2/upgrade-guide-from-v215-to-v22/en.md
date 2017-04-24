Upgrade Guide from Cocos2d-html5 v2.1.5 to v2.2
===============================================

-   Changes
    -   Improved Sprite, Node, LabelTTF class define from separated code to combined code for maintainability, now it is clean and clear
    -   cc.Sprite and its subClasses’s texture has been replaced from DOM element to cc.Texture2D on Canvas mode
    -   Improved cc.Texture2d for direct using without pre-loading image resources, you don’t need to wait resources loading when create a new scene or layers
    -   Migrated CCBReader and GUI to Cocos2d-x 2.1.4
    -   Improved update function of Action, and avoid using temporary object, it is good for GC and performance
    -   Modified LabelTTF’s rendering from direct drawing to pre-rendering for performance, 100% faster than before on mobile browser
    -   Fixed APIs of HTML5 according to JSB for compatibility, e.g. cc.ParticleSystemQuad has merged into cc.ParticleSystem, please check it according to the second part of this wiki
    -   Added Hiding url address bar for mobile browser, please check the template and hello world
    -   Re-writed Canvas Mode of RenderTexture to adapt WebGL interface
    -   Added frame event, collider and blend type supporting for Armature. Now Armature supports two tools:1.CocoStudio(windows,http://www.cocostudio.org), 2.DragonBones(flash, https://github.com/2youyouo2/SkeletonAnimationDesignPanel)
    -   Set auto render mode default value to canvas in mobile browsers and WebGL in desktop browsers

* APIs change：
- cc.RectMake, cc.SizeMake and cc.PointMake have been deprecated, please use cc.rect, cc.size and cc.p instead.
var aRect = cc.RectMake(8,8,8,8); ~~\> var aRect = cc.rect;
var aSize = cc.SizeMake;~~\> var aSize = cc.size(8,8);
var aPoint = cc.PointMake(8,8); ~~\> var aPoint = cc.p;
- cc.Director.getInstance.getTouchDispatcher.addTargetedDelegate, cc.Director.getInstance.getTouchDispatcher.addStandardDelegate
 and cc.Director.getInstance.getTouchDispatcher.removeDelegate have been private, please use cc.registerTargetedDelegate, cc.registerStandardDelegate and cc.unregisterTouchDelegate instead.
 cc.Director.getInstance.getTouchDispatcher.addTargetedDelegate~~\> cc.registerTargetedDelegate(this.\_touchPriority, true, this);
 cc.Director.getInstance().getTouchDispatcher().addStandardDelegate(this,this.\_touchPriority) ~~\> cc.registerStandardDelegate;
 cc.Director.getInstance.getTouchDispatcher.removeDelegate~~\> cc.unregisterTouchDelegate(this);
- cc.ParticleSystemQuad has merged into cc.ParticleSystem
cc.ParticleSystemQuad.create(); ~~\> cc.ParticleSystem.create;
- cc.Sprite and its subClasses’s texture has been replaced from DOM element to cc.Texture2D on Canvas mode
 var aTexture = aSprite.getTexture; var texWidth = aTexture.width;~~\> var aTextureSize = aSprite.getTexture().getContentSize(); var texWidth = aTextureSize.width;
- cc.SpriteFrameCache’s addSpriteFramesWithJson has been deprecated, because Json format doesn’t support on JSB. Use XML format instead
- cc.SimpleAudioEngine’s preloadSound has been deprecated, please use preloadBackgroundMusic and preloadEffect instead.
- add setPlaceholderFontName, setPlaceholderFontSize, setFontName, setFontSize functions to cc.EditBox
- cc.TileMapAtlas’ tileAt has renamed to getTileAt
 aTileMapAtlas.tileAt(cc.p(1,1)); ~~\> aTileMapAtlas.getTileAt);
- cc.Sprite’s setFlipX, setFlipY have renamed to setFlippedX, setFlippedY
 aSprite.setFlipX;~~\> aSprite.setFlippedX(true);
 aSprite.setFlipY(true); -\> aSprite.setFlippedY(true);
