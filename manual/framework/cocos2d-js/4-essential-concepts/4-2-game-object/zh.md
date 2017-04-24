# 4.2 cc.game对象和游戏启动流程

## 概述

`cc.game`是Cocos2d-JS的游戏对象，主要职责包括，配置的读取，引擎的加载，游戏脚本的加载，以及游戏的启动。

## cc.game对象的使用

cc.game对象目前的设计非常精简，使用也非常简单，开发者需要关注的只有非常有限的几个函数：`onStart`，`run`，`prepare`。

### `onStart`函数

新建Cocos2d-JS项目的启动代码位于main.js中：

```
cc.game.onStart = function(){
    //load resources
    cc.LoaderScene.preload(resource_list, function () {
        cc.director.runScene(new MyScene());
    }, this);
};
cc.game.run();
```

这段范例代码中，`onStart`是引擎加载完成并且开始游戏主循环之前会被调用的回调函数，开发者需要先通过赋值注册自己的游戏入口函数。通常在这个入口函数中，开发者需要使用`cc.LoaderScene`预加载入口场景所依赖的资源，并在加载完成后启动游戏的入口场景。虽然在JSB中，资源的预加载并不是必须的，因为依赖资源都存在App包中，但是还是推荐用这种方式来书写以保障Web平台和Native平台上游戏代码的统一性。

### 延迟运行

当游戏运行于Web页面中时，开发者可能需要延时启动游戏，比如等待用户点击某个按键。Cocos2d-JS支持游戏的延时运行，开发者可以通过`cc.game.prepare`函数来预先加载引擎和游戏脚本并准备游戏执行环境，在合适的时机再调用`cc.game.run`来开始游戏。

```
cc.game.onStart = function(){
    // 预加载资源
    cc.LoaderScene.preload(resource_list, function () {
        cc.director.runScene(new MyScene());
    }, this);
};
// 开始加载引擎和游戏脚本，准备游戏执行环境
cc.game.prepare();

document.getElementById("myBtn").addEventListener("click", function(){
    // 开始游戏
    cc.game.run();
});
```

### EVENT\_HIDE和EVENT\_SHOW事件

`cc.game`还支持对游戏进入后台和前台的事件监听：`cc.game.EVENT_HIDE`和`cc.game.EVENT_SHOW`事件。在Web平台上浏览器tab页面的切换，浏览器的关闭都可能会触发`cc.game.EVENT_HIDE`事件，返回游戏页面则会触发`cc.game.EVENT_SHOW`事件，不过由于浏览器的不同实现，浏览器中这些事件的触发并不被保障，所以请不要依赖`cc.game.EVENT_HIDE`事件来做关键的数据处理。在Native平台上，这两个事件则会在游戏切换至后台与前台的时候被调用，不同于Web平台，Native平台上这两个事件的触发是有保障的。

具体使用方式请参考范例代码：

```
cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function(){
    //处理游戏进入后台的情况
});
cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function(){
    //处理返回游戏的情况
});
```

## 启动流程

`cc.game.run`或`cc.game.prepare`的调用将启动引擎和游戏的加载，游戏进程启动流程如下：

1. 首先开始加载引擎相关脚本，在Web中加载Web引擎本身，在原生应用中则会加载引擎依赖的附加JS脚本。
2. 加载用户JS脚本。
3. 收集系统和平台相关信息，初始化渲染器。
4. 启动`cc.director`的游戏主循环逻辑。
5. 调用`onStart`入口函数以执行用户的启动逻辑。
