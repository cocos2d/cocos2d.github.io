#从Cocos2d-JS v3.5到v3.6.1升级指南

## 0. 升级到Cocos2d-JS v3.5

如果你还在使用Cocos2d-html5或者较早版本的Cocos2d-JS，你可以首先参考之前版本的升级指南来升级 : [历史版本升级指南](../../zh.md)

## 1. [原生平台特性] 新的3D功能：地形和天空盒

在Cocos2d-JS v3.6.1中我们新增了两个3D功能：天空盒和地形。**请注意**，这是一个原生平台独占的特性，你不能够在Web引擎中使用这些3D功能，我们在短期内也没有计划在Web引擎中支持3D。

新绑定的3D类或对象列举如下：

```
jsb.Terrain
jsb.TextureCube
jsb.Skybox
```

现在想要知道如何使用3D模块，你可以参考下面的文档和范例代码：

- Cocos [3D模块API文档](http://www.cocos2d-x.org/reference/native-cpp/V3.5/dir_0cec398151724e9e1c180a4e8f99801b.html)
- Cocos [Camera类API文档](http://www.cocos2d-x.org/reference/native-cpp/V3.5/d6/d2b/classcocos2d_1_1_camera.html)
- Cocos [Light类API文档](http://www.cocos2d-x.org/reference/native-cpp/V3.5/d2/d85/classcocos2d_1_1_base_light.html)
- Cocos2d-JS v3.6.1测试用例，可以通过`build`文件夹中的Visual Studio工程来运行，或者在`samples/js-tests`目录下执行`cocos run`命令。运行成功后你可以参考下面的测试用例：
    - BillBoardTest：源代码位于`samples/js-tests/src/BillBoardTest`.
    - Camera3DTest：源代码位于`samples/js-tests/src/Camera3DTest`.
    - LightTest：源代码位于`samples/js-tests/src/LightTest`.
    - Sprite3DTest (包含天空盒测试例)：源代码位于`samples/js-tests/src/Sprite3DTest`.
    - TerrainTest: 源代码位于`samples/js-tests/src/TerrainTest`.
- Cocos2d-JS v3.5移植[FantasyWarriors 3D实例游戏源码](https://github.com/joshuastray/fantasywarrior)

## 2. 新API：`cc.sys.isObjectValid`

在Cocos2d-JS v3.6.1中，我们提供了一个新的API：`cc.sys.isObjectValid`，用来检查一个对象是否还有效。检测的结果在Web引擎和原生引擎中逻辑不同。

```
var valid = cc.sys.isObjectValid(object);
```

在Web引擎中，一个对象只要不是`null`或`undefined`，那么它就是有效的。

在原生引擎中，当JS对象和它对应的原生C++对象都存在时，这个API会返回true，否则会返回false。我们的开发者经常遇到`Invalid Native Object`错误，不明白为什么在Web上运行正常，一发布到原生平台就会出现这种问题，更不知道从何查起。那么，这主要是因为在Cocos2d-JS的原生引擎中，一个绑定的Cocos2d对象，既拥有一个JavaScript对象索引，同时拥有一个C++对象索引，这两个索引负责在不同的环境中表示同一个对象。JavaScript对象的生命周期由JavaScript的垃圾回收机制自动管理，而原生C++对象的生命周期是由Cocos2d的引用计数机制来管理。所以有可能产生一种情况：一个对象的JavaScript索引还存在，而它的C++索引却已经被释放了。这个时候，如果游戏逻辑代码尝试去调用这个对象的原生方法，就会导致`Invalid Native Object`错误。

这个新的API可以帮助你在运行时去检测一个对象是否已经失效了，对于避免游戏逻辑中可能的对象失效问题很有用处，而更有用的是，在遇到类似问题的时候它可以帮助你更好的调试，并找到错误背后真正的原因。

## 3. Cocos Console支持导出目录

在新版本中，Cocos Console在所有平台上支持导出目录，需要自定义导出目录可以使用`-o`选项

```
cocos compile -p web -m release -o ../www_released/
```

这条命令将发布Web版本的发布包到`../www_released/`文件夹中，`-o`选项可以支持绝对路径以及相对路径。