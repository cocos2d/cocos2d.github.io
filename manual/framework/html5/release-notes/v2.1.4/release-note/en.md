Release Notes for Cocos2d-html5 v2.1.4
======================================

Cocos2d-html5
-------------

### Hightlights

-   Added support for multiple resources loading, please refer to the document [Mechanism of Loading Resources](http://www.cocos2d-x.org/projects/cocos2d-x/wiki/Mechanism_of_loading_resources) for usage. This mechanic is the same as cocos2d-x now
-   Optimised “Performance Tests -\> Sprites Test”, and increased its benchmark to 220%! Yeah, 2.2 times faster than before!
-   Migrated audio (CocosDenshion) API to keep the same as Cocos2d JS API
-   Added auto test for NodeTests and TilemapTests
-   Changed CCTextureCache member functions such as addImage(path), addImageAysnc(path), removeTextureForKey(key) from using relative path to absolute path
-   Added support for particle batch node

### Bug Fixes

-   Fixed preLoading issue on iOS 5.1.1
-   Fixed cc.Menu / cc.MenuItemImage remaining touchable issue after replaceScene
-   Fixed Box2d and chipmunk path error for single engine file mode
-   Fixed cc.EditBox Dom Element position issue when cc.EditBox skewed
-   Fixed cc.ScrollView position issue when it’s parent node moved
-   Fixed cc.TouchDispatcher can’t touch issue when WebPage has been scrolled on Firefox or IE

### Known Issues

-   Effect Advanced Lens3D doesn’t work
-   ClipNodeTest effects varies in different browsers

### Download

[Cocos2d-html5-v2.1.4.zip](https://cocos2d-x.googlecode.com/files/Cocos2d-html5-v2.1.4.zip)
