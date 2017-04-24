#从Cocos2d-JS v3.2到v3.3升级指南

## 0. 升级到Cocos2d-JS v3.2

如果你还在使用Cocos2d-html5或者较早版本的Cocos2d-JS，你可以通过之前版本的升级指南来首先升级 : [Cocos2d-JS v3.2升级指南](../../v3.2rc0/upgrade-guide/zh.md)

## 1. 新的Cocos Studio JSON解析器

在Cocos2d-JS v3.3中我们引入了一个新的解析器API来解析Cocos Studio所有版本的JSON文件：

```
// nodeAndAction遵循这种结构：{node: cc.Node, action: cc.Action}
var nodeAndAction = ccs.load(file);
```

这个API覆盖所有Cocos Studio 1.*版本的JSON导出文件解析，其中包含UI解析，节点解析，动作解析，场景解析功能。这个API同时覆盖Cocos Studio 2.1+的JSON导出文件解析，包含节点和动作解析功能。

再次强调，新的解析API只支持JSON格式，如果你使用Cocos Studio 2.1+版本，请导出项目为JSON格式，Cocos2d-JS不支持Flatbuffer格式，不论是在web引擎中还是在native引擎中。

1. 参数

    `ccs.load`接受JSON文件路径作为其唯一参数。
    
2. 返回值

    解析接口的返回值是一个对象，包含两个属性：`node`和`action`。解析成功的话`node`的值必然会存在，但对于有些项目，`action`的值可能为空，因为在项目中不包含任何动作。另外，当解析失败时，返回值为：
    
    ```
    {node: null, action: null}
    ```
    
3. 在Web引擎中预加载资源

    如大家所知，在web引擎中，所有使用到的资源必须经过预加载才能够正常在场景中使用，Cocos Studio资源同样适用这条规则。你需要预加载的不仅是JSON工程文件，还包括它的所有依赖文件，这意味着这个工程中所引用的所有图片文件，plist文件，json文件，音频文件等。在web引擎中，这些资源都必须被添加到预加载列表中。否则的话，在控制台中可能会收到一些警告信息，类似下面这条：
    
    ```
    res/cocosui/UIEditorTest/2.0.5/res/Default/SliderNode_Disable.png need to be preloaded
    ```
    
    如果你在调试中发现这样的警告信息，建议你添加被报告的资源到预加载列表中。
    
    但是在原生引擎中，不需要预加载这些资源，对于任何本地文件你都可以忽略预加载过程，因为他们将自动随着应用本身被加载。
    
4. 1.*解析API

    Cocos Studio 1.*的旧版本解析API仍然像往常一样工作。