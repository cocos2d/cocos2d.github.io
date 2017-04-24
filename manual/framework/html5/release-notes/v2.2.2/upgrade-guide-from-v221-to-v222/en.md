Upgrade Guide from Cocos2d-html5 v2.2.1 to v2.2.2
=================================================

Changes:
========

1) cc.*PointConst and cc.*SizeConst
-----------------------------------

Refactored cc.Node and cc.Sprite by adding cc.*PointConst and cc.*SizeConst for better Performance.
Please note that getPosition, getContentSize and getAnchorPoint will return a const object, if we try to modify the object directly, it will print a log information like this:

"Warning of *PointConst: Modification to const or private property is forbidden" or "Warning of*SizeConst: Modification to const or private property is forbidden” (these information is in cocos2d/core/cocoa/CCGeometry.js)
so we should change our code usages.

Old usage:

    var getPos = aSprite.getPosition();
    getPos.x += 10; //Here will print a log information
    getPos.y -= 5;
    aSprite.setPosition(getPos);  

New usage:

    var getPos = aSprite.getPosition();
    aSprite.setPosition(getPos.x + 10, getPos.y - 5);  

or

    aSprite.setPosition(aSprite.getPositionX() + 10, aSprite.getPositionY() - 5);

2) New Resolution Policy design
-------------------------------

We have a new cc.ResolutionPolicy class, cc.EGLView’s setResolutionPolicy function accept either predefined policy as before or a cc.ResolutionPolicy object. cc.ResolutionPolicy can be instanciated with two strategy object: cc.ContainerStrategy which define how to resize the container of game canvas and cc.ContentStrategy which define how to setup the game viewport in canvas.

There are predefined strategies listed below:
* cc.ContainerStrategy.EQUAL_TO_FRAME
* cc.ContainerStrategy.PROPORTION_TO_FRAME
* cc.ContainerStrategy.ORIGINAL_CONTAINER
* cc.ContentStrategy.EXACT_FIT
* cc.ContentStrategy.SHOW_ALL
* cc.ContentStrategy.NO_BORDER
* cc.ContentStrategy.FIXED_HEIGHT
* cc.ContentStrategy.FIXED_WIDTH

e.g.

    // Classic way still work
    cc.EGLView.getInstance().setDesignResolutionSize(480, 320, cc.RESOLUTION_POLICY.SHOW_ALL);  

    // New way
    var policy = new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.SHOW_ALL);
    cc.EGLView.getInstance().setDesignResolutionSize(480, 320, policy);

    // You can also change your resolution policy
    cc.EGLView.getInstance().setResolutionPolicy(cc.RESOLUTION_POLICY.NO_BORDER);

Other notes:

1. There is one new notion: frame, frame is the outer container of the original game canvas object, in the most case, it’s the document body element, so the game canvas will be scaled to fit the browser window. If the frame is a div in user’s dom element tree, our resolution policy will only fit the game canvas to this frame.

2. You can make the resolution policy be reapplied automatically with browser’s resize event by setting resizeWithBrowserSize :

    cc.EGLView.getInstance().resizeWithBrowserSize(true);

3. Moreover, the engine give a user callback for browser’s resize event, you can register this callback with this function:

    ```
    cc.EGLView.getInstance().setResizeCallback(function() {
        // ...
    });

    // Remove callback:
    cc.EGLView.getInstance().setResizeCallback(null);
    ```

4. `_adjustSizeToBrowser` function in cc.EGLView has been deprecated.

5. The new way to set the resolution policy and the callback of resize event haven’t been binded to JSB, so pay attention if you want to use JSB.

For more details, please refer to this documentation: [Understand the Resolution Policy in Cocos2d-html5 2.2.2](http://www.cocos2d-x.org/wiki/Understand_the_Resolution_Policy_in_Cocos2d-Html5_222)

3)CocoStudio
------------

-   1.Change armatureAnimation playByIndex function to playWithIndex and add playWithNames, playWithIndexes to play an animation queue
    e.g.
    
    ```
    // Old way still work (Deprecated)
    armature.getAnimation().playByIndex(0);
    // New way
    armature.getAnimation().playWithIndex(0);
    
    // New api to play animation queue.
    // parameter1: movement names, parameter2: frame interval between animations, parameter3: loop
    armature.getAnimation().playWithNames([“moveName1”,“moveName2”,“moveName3”],10,true);
    // parameter1: movement indexes, parameter2: frame interval between animations, parameter3: loop
    armature.getAnimation().playWithIndexes([0,1,2],10,true);
    ```

-   2.Prefix UI of all UIWidget class has been removed
    e.g.
    
    From
    
    ```
    // Old class name
    ccs.UIWidget
    ccs.UIButton
    ...
    ```
    
    to
    
    ```
    // New class name
    ccs.Widget;
    ccs.Button;
    …
    ```

4) CCNode’s setContentSize and setAnchorPoint
---------------------------------------------

They now support two types of parameters, you can
* call setContentSize like these:

    aSprite.setContentSize(cc.size(width, height));

or

    aSprite.setContentSize(width, height);

### note: setContentSize(width, height) is 35 faster than setContentSize(cc.size(width, height)).

* call setAnchorPoint like these:

    ```
    aSprite.setAnchorPoint(cc.p(x,y)); 
    ```

or 

    ```
    aSprite.setAnchorPoint(x, y);
    ```

##### note: setAnchorPoint(x, y) is 35 faster than setAnchorPoint(cc.p(x,y)).

5) Improvement of compatibility with JSB
----------------------------------------

cc.Rect’s origin and size was set from public to private

* aRect.origin.x ~~> aRect.x
* aRect.origin.y ~~> aRect.y
* aRect.size.width ~~> aRect.width
* aRect.size.height ~~> aRect.height
