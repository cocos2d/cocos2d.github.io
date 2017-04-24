# 4.6 游戏导演

## 4.6.1 什么是游戏的导演

如果你非常喜欢电影，相信你一定能说出几个自己喜欢的导演的名字。即便他们几乎不在电影中出境，但却是他们给予电影以灵魂，可以说导演是一部电影中至关重要的角色。

那么，什么是游戏的导演呢？当然，我们可以说，作为开发者你就是游戏真正的导演，但是你还需要一个执行导演在游戏中完成你所设想的所有场景。这就是Cocos2d-JS引擎中导演对象的职责，它是你创造游戏最重要的助手。

具体来说，Cocos2d-JS中的导演是一个对象，它负责设置游戏的运行环境，控制游戏的住循环并且管理场景和场景的切换。这个章节将介绍导演对象的主要任务和它是怎样运作的。

## 4.6.2 导演的任务

Cocos2d-JS中导演对象名为：`cc.director`。下面是它主要的任务：

- **环境设定**

    首先，在进入游戏之前，导演对象会设置游戏的运行环境：

    1. 设置显示游戏的视图，包含视图的投射，像素格式，等等。
    2. 设置游戏运行帧率。
    3. 为当前导演对象初始化计时器，动作管理器和事件管理器。
    4. 为当前导演对象初始化贴图缓存和渲染器。
    5. 导演对象的其他设置

- **执行主循环**

    视频游戏的基本原理其实是和传统动画是一样的。在传统动画制作中，画师们一页一页得绘制静态的画面，这些画面最终会以很快的频率一幅幅展示出来。频率可以是比如每秒24张画，每张画面被称为一帧。

    视频游戏的绘制方式是完全一样的，每1/60秒，程序会绘制一张图片（一帧）到屏幕上，也就是60帧每秒。其中每一帧的绘制过程包含计算所有可视节点的转换矩阵以及其他信息，然后画面会一帧一帧得显示到屏幕上。随着游戏的进行，每一帧都会改变一点点，最后，玩家的眼前就会呈现出优美的游戏画面。

    以上所描述的所有过程都是在`cc.director`的主循环中完成的。主循环中每一次循环绘制一幅画面到屏幕上。下面是每一帧绘制的详细过程：

    1. 计算从上一帧开始到现在的时间，这将会被用于提供调试信息。
    2. 让导演对象中的计时器执行被计划的任务。
    3. 通过事件管理器通知`cc.Director.EVENT_AFTER_UPDATE`事件。
    4. 清空游戏屏幕。
    5. 如果需要进入下一个场景则进行场景切换。
    6. 遍历当前场景中的节点并更新节点的空间转换矩阵以及其他必要信息，然后发送绘制指令给渲染器。
    7. 通过事件管理器通知`cc.Director.EVENT_AFTER_VISIT`事件。
    8. 渲染器按顺序执行所有渲染指令来最终绘制整个场景到屏幕上。
    9. 通过事件管理器通知`cc.Director.EVENT_AFTER_DRAW`事件。
    10. 增加全局总帧数。

    除此之外，`cc.director`同样提供一些函数来控制主循环：

    1. 暂停主循环：`cc.director.pause()`
    2. 恢复主循环：`cc.director.resume()`

- **场景管理**

    导演对象的另一项重要任务就是场景管理，导演对象在同一时间只可以运行一个场景，但是你可以随意得切换运行场景。所以通常来说，一个游戏会包含用于不同用例的几个场景，你的程序应该通过`cc.director`的API来控制场景流。

    ```
    // 让导演对象执行目标场景
    cc.director.runScene(scene);

    // 获取当前正在执行的脚本
    var scene = cc.director.getRunningScene();
    
    // 将一个新场景推入场景栈中，并替换运行场景为这个新场景
    var scene = cc.director.pushScene(scene);

    // 将场景栈顶的场景推出场景栈，并替换运行场景为推出后栈顶的新场景
    cc.director.popScene();
    
    // 将场景栈中除了栈底的根场景以外的所有场景推出，并替换运行场景为根场景。
    cc.director.popToRootScene()
    ```

    除此之外，你可以通过`cc.TransitionScene`的效果类的转场特效来切换场景。

    ```
    // 转场特效持续两秒
    var transitionTime = 2;
    // 创建下一个场景
    var nextScene = new cc.Scene();
    // 使用下一个场景创建转场特效场景
    var transitionScene = new cc.TransitionProgressInOut(transitionTime, nextScene);
    // 替换运行场景为转场特效场景
    cc.director.runScene(transitionScene);
    ```

    在上面的例子中可以看出，我们使用了一个`cc.TransitionProgressInOut`转场特效，没有使用`cc.TransitionScene`是因为这个基础特效类没有任何实际效果，只提供运行机制。Cocos2d-JS引擎中还提供其他很多种预设转场特效，你可以参考API文档或是TransitionScene测试用例。

## 4.6.3 环境设置和属性

由于导演对象控制整个游戏运行环境，导演对象中还提供一些常用的设置和属性：

```
// 获取游戏主循环是否被暂停
var paused = cc.director.isPaused();

// 设置或获取动画帧间隔，这个设置会直接影响帧率
var interval = cc.director.getAnimationInterval();
cc.director.setAnimationInterval(value);

// 设置或获取导演对象的内容放缩比例
var scale = cc.director.getContentScaleFactor();
cc.director.setContentScaleFactor(scaleFactor);

// 设置或获取游戏世界可视窗口的原点和大小
var origin = cc.director.getVisibleOrigin();
var size = cc.director.getVisibleSize();

// 获取游戏世界大小，winSize的大小通常等同于设计分辨率，而winSizeInPixel的大小是游戏世界的像素大小
var winSize = cc.director.getWinSize();
var winSizeInPixel = cc.director.getWinSizeInPixels();

// 设置或获取调试信息是否被显示
var isDisplaying = cc.director.isDisplayStats();
cc.director.setDisplayStats(displayStats);

// 设置或获取视图，它指向`cc.view`
cc.director.var view = cc.director.getOpenGLView();
cc.director.cc.director.setOpenGLView(openGLView);

// 设置或获取WebGL/OpenGL的投影，
// 可能的投影类型包括：cc.Director.PROJECTION_2D, cc.Director.PROJECTION_3D, cc.Director.PROJECTION_CUSTOM
cc.director.getProjection();
cc.director.setProjection(projection);
```

## 4.6.4 计时器

正如之前提到的，游戏主循环会通过计时器执行预定的任务。这个计时器是导演对象的一个内部子系统，你可以对当前运行场景的节点执行一些类型的任务。计时器将会计划何时以及如何执行这些任务。

下面的代码片段展示了一些常用的创建任务的方式：

```
var node = new cc.Node();

// node的update函数将会在每一帧被执行
node.scheduleUpdate();
// callback回调函数会重复得在每个interval时间间隔之后被执行，重复次数为repeat次，并且这个任务会在delay延时之后开始执行
node.schedule(callback, interval, repeat, delay);
// callback回调函数会在delay延时之后被执行一次
node.scheduleOnce(callback, delay);
// 取消callback任务
node.unschedule(callback);
// 取消node节点所有计划中的任务
node.unscheduleAllCallbacks();
```

**注意**

- 所有任务中的回调函数会在自己的目标节点环境下被执行，也就是说，回调函数中的`this`对象将会指向目标节点
- 即使delay延时为0的情况下，任务回调函数的第一次执行也是在注册任务之后的下一帧中。

## 4.6.5 动作管理器

动作管理器是导演对象另一个重要的内部系统。它管理当前运行场景中的所有动作，它会在每一帧调用所有进行中动作的`update`函数。动作系统的细节会在后面的章节中详细讨论。

## 4.6.6 导演对象系统事件

导演对象还有一些内建的系统事件，可能会对你控制游戏的逻辑有帮助。

- `cc.Director.EVENT_AFTER_DRAW`：这个事件在每一帧图像的绘制完成之后被触发。
- `cc.Director.EVENT_AFTER_VISIT`：这个事件在每一帧场景树遍历之后被触发。
- `cc.Director.EVENT_AFTER_UPDATE`：这个事件在每一帧计时器任务执行完成之后被触发。
- `cc.Director.EVENT_PROJECTION_CHANGED`：这个事件在导演对象的投影属性被修改之后触发。