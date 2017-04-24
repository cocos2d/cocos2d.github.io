Upgrade Guide from Cocos2d-html5 v2.0 to v2.1
=============================================

-   Release Note
    -   10 performance increase across the board with cc.Class Release Mode
        - Added support for google.base which offers alternate javascript inheritance style.
        - Added support for CocosBuilder and Bone Animation.
        - Integrated Chipmunk physical engine. API is compatible with Cocos2d-x and Cocos2d-iPhone
        - Added PhysicsDebugNode, PhysicsSprite, DrawNode.
        - Better support for mouse/touch/keyboard
        - Fixed various bugs
        - Added WaterMelon with me game sample. which is 10 done in CocosBuilder and 90 Javascript
        - Added CocosDragon game sample. which is 90 done in CocosBuilder and 10% Javascript Code
    -   Added Edit Box for text input
    -   Configuration change from div to document

-   Changes
    -   APIs change：
         - remove “Background” in CocosDenshion/SimpleAudioEngine.js.
         - preloadBackgroundMusic(path) ~~> preloadMusic;
         - playBackgroundMusic~~> playMusic(path, false);
         - stopBackgroundMusic() ~~> stopMusic;
         - resumeBackgroundMusic~~> resumeMusic();

2) Fixed callback parameter, revert the order of selectorTarget and selector.

- cc.CallFunc.create = function (selectorTarget, selector) ~~> cc.CallFunc.create = function ;
- cc.CallFunc.create = function~~> cc.CallFunc.create = function (selector, selectorTarget, data);
- cc.MenuItem.create = function (rec, selector) ~~> cc.MenuItem.create = function ;
- cc.MenuItemLabel.create = function~~> cc.MenuItemLabel.create = function (label, selector, target);
- cc.MenuItemFont.create = function (value, target, selector) ~~> cc.MenuItemFont.create = function ;
- cc.MenuItemSprite.create~~> cc.MenuItemSprite.create(normalImage, SelectedImage, ‘callback’, targetNode);
 
3) “selector” ~~> “callback”, since “selector” has sense only on Objective-C

- scheduleSelector~~> scheduleCallbackForTarget(this, callback\_fn, !this.\_isRunning, interval, repeat, delay);
- unscheduleSelector(selector, target) ~~> unscheduleCallbackForTarget;
- scheduleSelector~~> scheduleCallback();
- unscheduleSelector() ~~> unscheduleCallback;
- unscheduleAllSelectors~~> unscheduleAllCallbacks();
 
4) scheduleUpdateForTarget (target, priority, paused) ~~> scheduleUpdateForTarget;

5) 

- removeAllChildrenWithCleanup~~> removeAllChildren (doCleanup) ;
- removeFromParentAndCleanup(cleanup) ~~> removeFromParent;
 
6) 

- addSpriteFrameWithFileName~~> addSpriteFrameWithFile(fileName);
- addAnimationsWithFile(plist) ~~> addAnimations;
- cc.Sprite.createWithSpriteFrameName~~> cc.Sprite.createWithSpriteFrame(spriteFrame);
 
** Cocos2d configuration changes

Files affected:

- cocos2d.js
- main.js

We changed cocos2d config object to go under document object. this will solve issues with IE9 toolbar’s flushing the html of the whole page, causing elements to lose their associated objects.

in cocos2d.js
 look for “s.c = c”,
 change it to “document.ccConfig = c”

in main.js
 look for “config:document.querySelector(‘\#cocos2d-html5’)[‘c’],”
 change it to “config:document.ccConfig,”
