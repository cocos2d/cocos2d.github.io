#Actions

Actions 들은 Node 오브젝트에게 주어지는 행동입니다.  이 Actions 들은 대게 위치, 회전, 크기변환과 같은 오브젝트의 속성을 변경합니다. 만약 이런 속성들이 시간에 따라 변하면 `IntervalAction` 이라 부르고, 즉각적으로 변하면 `InstantAction` 이라 부릅니다. 예를 들어 `MoveBy Action`은 시간에 따라 위치를 변화시키므로 `IntervalAction` 자식 클래스입니다.

예제:
```
	// test case: cpp-tests->Actions-Basic

    // source: cocos2d-x/tests/cpp-tests/Classes/ActionsTest/ActionsTest.cpp

    // code snap
    // 스프라이트를 50픽셀 오른쪽, 10픽셀 위쪽으로 2초간 이동시킨다.
    auto  actionBy = MoveBy::create(2, Point(50,10));
```
```
    -- test case: lua-tests->ActionsTest

    -- source: cocos2d-x/tests/lua-tests/src/ActionsTest/ActionsTest.lua

    -- code snap
    local actionBy = cc.MoveBy:create(2, cc.p(50, 10))
```

`IntervalAction` Actions 들은 흥미로운 속성을 가지고 있는데, 이들은 시간관련 Actions들을 통해 가속될 수 있습니다.

* [EaseIn](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/dd/dde/classcocos2d_1_1_ease_in.html)
* [EaseOut](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/da/d63/classcocos2d_1_1_ease_out.html)
* [EaseInOut](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/da/d63/classcocos2d_1_1_ease_out.html)
* [Speed](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d7/d5e/classcocos2d_1_1_speed.html)

시간관련 Actions 예제 :

你可以通过用ActionManager来暂停和恢复所有actions:

```
    // test cast: cpp-tests->Actions-Ease

    // source: cocos2d-x/tests/cpp-tests/Classes/ActionsEaseTest/ActionsEaseTest.cpp

    // code snap
    // 스프라이트를 50픽셀 오른쪽, 10픽셀 위쪽으로 2초간 이동시킨다.
    auto  actionBy = MoveBy::create(2, Point(50,10));
    // Create easeIn of move action
    auto  easeAction = EaseIn::create(actionBy, 2.5f);
```
```
    -- test cast: lua-tests->ActionsEaseTest

    -- source: cocos2d-x/tests/lua-tests/src/ActionsEaseTest/ActionsEaseTest.lua

    -- code snap
    -- 스프라이트를 50픽셀 오른쪽, 10픽셀 위쪽으로 2초간 이동시킨다.
    local actionBy = cc.MoveBy:create(2, cc.p(50, 10))
    -- Create easeIn of move action
    local  easeAction = cc.EaseIn:create(actionBy, 2.5)
```

`ActionManager`를 이용하여 모든 Actions들을 일시정지하거나 다시시작 할 수 있습니다.
```
    // 일시적지 Actions
    Director *director = Director::getInstance();
    pausedTargets = director->getActionManager()->pauseAllRunningActions();

    // 다시시작 Actions
    Director *director = Director::getInstance();
    director->getActionManager()->resumeTargets(pausedTargets);
```
```
    -- 일시정지 Actions
    local director = cc.Director:getInstance()
    local pausedTargets = director:getActionManager():pauseAllRunningActions()

    -- 다시시작 Actions
    director:getActionManager():resumeTargets(pausedTargets)
```

##Basic Actions

기본 Actions 들은 아래와 같은 기본 속성을 변경합니다.

###위치(position)

* [MoveBy](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d6/d7c/classcocos2d_1_1_move_by.html)
* [MoveTo](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/de/d42/classcocos2d_1_1_move_to.html)
* [JumpBy](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/de/d21/classcocos2d_1_1_jump_by.html)
* [JumpTo](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/dd/d7b/classcocos2d_1_1_jump_to.html)
* [BezierBy](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d1/df4/classcocos2d_1_1_bezier_by.html)
* [BezierTo](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/da/dac/classcocos2d_1_1_bezier_to.html)
* [Place](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/de/ddd/classcocos2d_1_1_place.html)


###크기(scale)

* [ScaleBy](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/df/d00/classcocos2d_1_1_scale_by.html)
* [ScaleTo](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d6/d06/classcocos2d_1_1_scale_to.html)



###회전(Rotation)

* [RotateBy](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d0/d28/classcocos2d_1_1_rotate_by.html)
* [RotateTo](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d0/d71/classcocos2d_1_1_rotate_to.html)



###가시성(Visibility)

* [Show](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d0/df4/classcocos2d_1_1_show.html)
* [Hide](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/db/dd2/classcocos2d_1_1_hide.html)
* [Blink](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/db/dc3/classcocos2d_1_1_blink.html)
* [ToggleVisibility](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/db/d66/classcocos2d_1_1_toggle_visibility.html)



###불투명도(opacity)

* [FadeIn](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d0/d0a/classcocos2d_1_1_fade_in.html)
* [FadeOut](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/dd/d49/classcocos2d_1_1_fade_out.html)
* [FadeTo](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d9/de6/classcocos2d_1_1_fade_to.html)



###색상(color)

* [TintBy](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/d2/d6b/classcocos2d_1_1_tint_by.html)
* [TintTo](http://www.cocos2d-x.org/reference/native-cpp/V3.0rc1/dd/df2/classcocos2d_1_1_tint_to.html)

예제:

```
    Sprite *sprite = Sprite::create("Images/grossini.png");
    sprite->setPosition(Point(100, 100));
    addChild(sprite);

    MoveBy* act1 = MoveBy::create(0.5, Point(100, 0));
    sprite->runAction(Repeat::create(act1, 1));
```
```
    local sprite = cc.Sprite:create("Images/grossini.png")
    sprite:setPosition(cc.p(100, 100))
    self:addChild(sprite)

    local act1 = cc.MoveBy:create(0.5, cc.p(100, 0))
    sprite:runAction(cc.Repeat:create(act1, 1))
```

act1 은 0.5초간 `Point(100,0)`으로 이동하는 `MoveBy` Action입니다.

