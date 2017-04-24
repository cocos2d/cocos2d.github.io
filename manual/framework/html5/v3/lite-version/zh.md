# Cocos2d-JS单文件引擎使用指引

这篇指引主要介绍如何使用从[在线下载工具](http://cocos2d-x.org/filecenter/jsbuilder/)下载下来的Cocos2d-JS的单文件引擎。

你有可能下载了下面三个版本中的一个：

- **Cocos2d-JS Full Version**: 完整版引擎包含Cocos2d-JS引擎的所有功能特性以及所有扩展，使用这个版本可以帮助你发掘Cocos2d-JS令人惊艳的创造力和可能性。你可以从[官方文档首页](http://www.cocos2d-x.org/docs/manual/framework/html5/zh)中查看Cocos2d-JS所支持的特性列表。

- **Cocos2d-JS Lite Version**: 精简版本只包含Cocos2d-JS的核心特性，它的优势是稳定，轻量，简单易用。它所包含的特性列表如下：
    + Canvas渲染器 (不支持WebGL)
    + 场景和图层
    + 事件管理器
    + 计时器
    + 精灵和贴图
    + TTF文本
    + 声音
    + 动作
    + 菜单和菜单项

- **Customized Version**: 如果你选择了定制版本的引擎，引擎脚本文件将包含你所选择的所有特性。

## 使用方式

单文件引擎的使用方式和其他Web库完全一样，你只需要将脚本嵌入到你的页面中即可，可以参考下载目录中的HelloWorld.html。

请注意脚本的加载时机，在HelloWorld的示例代码中：

```
window.onload = function(){
    cc.game.onStart = function(){
        //...
    };
    cc.game.run("gameCanvas");
};
```

可以看到，`cc.game.onStart`和`cc.game.run`都在window的onload函数中，因为只有在这时才能保证cocos2d-js-v3.0.js已经被加载成功，并且可以在你的用户脚本中使用Cocos2d-JS的API。在我们后面章节中将提到Cocos2d-JS的另一种传统工作流，那种工作流中由引擎脚本控制脚本的加载顺序，所以不需要检测页面的加载。

你需要将这些文件放到一个本地服务器或在线服务器并通过服务器访问才可以看到正确的结果。

## 帮助链接

- [在线API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [下载API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [文档目录](http://cocos2d-x.org/docs/manual/framework/html5/zh)
- [Github仓库](https://github.com/cocos2d/cocos2d-js)
- [在线论坛](http://www.cocoachina.com/bbs/thread.php?fid=59)
- [在线测试例](http://cocos2d-x.org/js-tests/)

## 关于脚本压缩

你可以使用[Google Closure Compiler](https://developers.google.com/closure/compiler/)来将所有js文件压缩成一个文件，Closure Compiler的高级压缩压缩比非常高，即便你下载的是压缩版引擎，也可以获得可观的压缩比。具体压缩步骤如下：

1. 下载Closure Compiler的jar程序文件
2. 按照自己的环境配置build.xml
3. 在控制台运行ant命令
4. 将页面中的所有js引用删除，引入打包出的`game.min.js`

请注意，你不可以在html页面中写任何js脚本，所有js脚本都必须一起打包起来，否则会引起错误。

## 注意

当你通过服务器访问游戏页面的时候，你将在控制台中发现一个错误提示：
"Failed to load resource: the server responded with a status of 404 (Not Found)"，提示`project.json`文件找不到

这是正常现象，并不是问题，你可以忽略它。或者可以添加一个空的`project.json`文件来避免这个错误报告。