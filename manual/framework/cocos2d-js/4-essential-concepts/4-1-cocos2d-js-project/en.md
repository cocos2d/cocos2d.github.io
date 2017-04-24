#4.1 Cocos2d-JS项目结构介绍

如前面章节所述，`cocos new`命令能创建一个独立完整的Cocos2d-JS项目，本章将详细介绍新建工程的内容结构，如何配置项目环境以及Web引擎模块化的方法。希望能够让开发者对如何使用Cocos2d-JS引擎有更深入的理解。

##4.1.1 新建项目的目录结构说明

- **frameworks**:               包含Web引擎以及Native引擎
    - **cocos2d-html5**:        Web引擎
    - **js-bindings**:          Cocos2d-x引擎以及JSB框架
    - **runtime-src**:          项目的各平台工程文件，包含iOS/MacOSX/Android/Windows
- **index.html**:               Web工程的主页面，通过本地服务器访问这个页面即可看到游戏效果
- **main.js**:                  游戏入口文件，其中包含游戏初始化代码以及启动代码
- **project.json**:             工程配置文件，详细配置方法可参考main.js中的注释
- **res**:                      项目资源文件夹，应该用来存储所有图片，音频，字体，动画等资源
- **src**:                      项目脚本文件夹，应该用来存储游戏的所有JavaScript代码
- **runtime**:                  该目录初始状态下不存在，用来存储调试模式打包的工程执行文件
- **publish**:                  该目录初始状态下不存在，当工程以发布模式打包后，会创建该文件夹并保存对应平台的发布包
- **tools**:                    工具文件夹
    - **bindings-generator**:   JSB自动绑定生成工具
    - **tojs**:                 JSB自动绑定配置文件以及生成脚本

### 游戏入口脚本和资源预加载

`main.js`中包含`cc.game`的入口函数`onStart`逻辑，并调用`cc.game.run()`来启动游戏进程。游戏进程启动流程如下：

1. 引擎将开始加载引擎相关脚本，在Web中加载Web引擎本身，在原生应用中则会加载引擎依赖的附加JS脚本。
2. 加载用户JS脚本。
3. 收集系统和平台相关信息，初始化渲染器。
4. 启动`cc.director`的游戏主循环逻辑。
5. 调用`onStart`入口函数以执行用户的启动逻辑。

在入口函数中建议开发者利用`cc.LoaderScene.preload`函数对资源进行预加载，并在回调函数中进入游戏首个场景。

```
cc.LoaderScene.preload(preload_resources, function () {
    cc.director.runScene(new MyScene());
}, this);
```

开始场景前对于场景依赖的资源预加载在Web引擎中是非常必要的步骤，它可以让你的资源在需要的时候处于可用的状态。由于Web引擎中资源加载是异步的，举个例子，当开发者用一个贴图文件来创建一个Sprite的时候，若贴图未被预加载，Sprite的初始大小将为(0, 0)，这和很多开发者的预期效果是完全不同的；若成功预加载，则初始大小将等于贴图大小。这只是一个小问题，部分资源若在使用时未加载将会导致程序无法正常运行或中断。开发者也不用担心JSB中的兼容问题，尽管JSB原生应用中，资源是位于本地的，并不需要预加载，不过`cc.LoaderScene`仍然可以正常运行。

### 存储游戏资源和脚本

在这个目录结构中，开发者最应该关心的是`res`文件夹和`src`文件夹，其中`res`文件夹用来存储资源，`src`文件夹用来存储游戏脚本。当然，开发者可以新建其他文件夹来以自己喜好的方式保存任意文件，但是这样会破坏Cocos Console对工程编译和运行的控制。开发者可能不得不手动修改各个平台的工程并完成编译，这是因为Cocos Console编译时是按照默认文件夹配置来拷贝脚本和资源到目标中。

/*
具体来说，引擎对于脚本文件的兼容性更强一些，只要你正确得将用户脚本放入到`project.json`的`jsList`列表中，那么Cocos Console在Android，Win32平台上可以正确得将这些文件考虑到。对于iOS和Mac平台，则需要修改对应的Xcode工程以包含`src`文件夹之外的脚本。可是对于`res`文件夹之外的资源文件，就需要针对每个平台的工程进行配置
*/

### Web工程页面

`index.html`是Web工程的主页面，其主要内容和职责包含：

1. 包含用于显示游戏场景的canvas元素。
2. 引入用于引擎初始化和加载的引擎脚本：`CCBoot.js`。
3. 引入游戏启动的入口脚本：`main.js`。
4. 包含一些适配移动端浏览器页面的meta元素。

##4.1.2 项目工程配置文件project.json的说明

`project.json`文件是Cocos2d-JS的主要项目配置文件，它包含以下配置选项：

1. **debugMode**: 调试信息显示模式，可能的选值及其意义如下：
    - 0 - 不显示任何调试信息。
    - 1 - cc.error, cc.assert, cc.warn, cc.log在调试终端中打印信息，默认值。
    - 2 - cc.error, cc.assert, cc.warn在调试终端中打印信息。
    - 3 - cc.error, cc.assert在调试终端中打印信息。
    - 4 - cc.error, cc.assert, cc.warn, cc.log在Canvas上显示信息，Web引擎独占功能。
    - 5 - cc.error, cc.assert, cc.warn在Canvas上显示信息，Web引擎独占功能。
    - 6 - cc.error, cc.assert在Canvas上显示信息，Web引擎独占功能。

2. **showFPS**: 若取值为真则会在游戏窗口左下角显示绘制函数调用次数，渲染时间和帧率，默认取值为真。

3. **frameRate**: 用来设置期望帧率，当然，实际帧率会取决于游戏每帧计算消耗时间和运行平台等条件，期望帧率会保证游戏运行帧率不会超过期望帧率，并尽力运行在期望帧率上。

4. **id**: Web引擎页面中canvas元素的id，仅服务于Web引擎。

5. **renderMode**: Web引擎绘制模式，仅服务于Web引擎，可能的取值如下：
    - 0 - 由引擎自动选择绘制模式
    - 1 - 强制使用Canvas绘制模式
    - 2 - 强制使用WebGL绘制模式，但是实际上WebGL仍然可能会在一些移动浏览器上被忽略而自动使用Canvas绘制模式

6. **engineDir**: 在debug模式下，如果使用完整引擎来开发你的游戏，你需要将Web引擎的相对地址设置在这个字段下，但是如果你使用单文件引擎，可以忽略这个字段。

7. **modules**: 模块配置，将你的游戏需要引入的模块添加到一个数组中，仅服务于Web引擎。好的模块配置可以帮助开发者显著降低游戏脚本的大小，当Cocos Console在发布模式下编译生成的时候，将仅打包模块定义中定义包含的模块。关于存在哪些模块以及每个模块的定义可以参考`frameworks/cocos2d-html5/modulesConfig.json`。

8. **jsList**: 用户JS脚本列表，游戏中依赖的JS脚本都应该列入这个列表中。

##4.1.4 Web版本模块化的原理和使用方法

如前所述，Web引擎支持模块化，引擎被划分为多个子模块，模块之间相互依赖并提供给游戏对应的功能，下面是Web引擎的模块列表：

|模块名称|描述|
|-------|---|
|core|Engine core modules, includes Director, Node, Scene, Layer, Sprite, LabelTTF, EventManger, Scheduler and Texture2D. The default render is canvas|
|actions|Actions module contains basic anctions for animating node, easing actions and other decorative actions like repeat, speed|
|audio|Audio system|
|menus|Menu and MenuItem nodes for creating game menu|
|labels|Label nodes including LabelBMFont, LabelAtlas|
|ccui|Cocos UI widgets with layout support|
|shape-nodes|DrawNode can be used to render lines, polygons, curves, etc|
|render-texture|RenderTexture node for custom rendering|
|particle|ParticleSystem node and built in particle effects|
|progress-timer|ProgressTimer node which can transform a node into a progression bar|
|transitions|Scene transition effects|
|text-input|Nodes for simple text inputing|
|tilemap|TMX file parser for creating tile map layers|
|parallax|Parallax effect which can be applied to layers|
|editbox|Edit Box for more complex text inputing|
|clipping-nodes|ClippingNode can clip hosted nodes with shape or texture as stencil|
|motion-streak|MotionStreak which can manage a ribbon based on its motion|
|node-grid|Node grid for effects support|
|actions3d|3D Effects that can be applied to nodes, like page turn, shake, wave, etc|
|gui|Another GUI extension with a set of useful widgets|
|cocostudio|CocoStudio editor support|
|ccbreader|CocosBuilder editor support|
|ccpool|Built in object pool support|
|pluginx|Social network API plugins|
|plugin-facebook|Facebook SDK for Cocos2d-JS|
|socketio|ScoketIO library support|
|box2d|Built in box2d physics engine support|
|chipmunk|Built in Chipmunk physics engine support|
|spine|The spine support library|
|cocos2d|Contains main features of Cocos2d-JS: "core", "render-texture", "motion-streak", "node-grid", "clipping-nodes", "effects", "shape-nodes", "actions", "actions3d", "progress-timer", "transitions", "labels", "particle", "text-input", "menus", "tilemap", "parallax", "audio"|
|extensions|Contains the following modules: "cocostudio", "ccbreader", "ccpool", "gui", "editbox", "spine"|
|external|Contains the following modules: "box2d", "chipmunk", "socketio", "pluginx"|

##4.1.5 其他进阶开发技巧

1. Xcode和Visual Studio工程

**TBD**