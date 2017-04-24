# **如何解决老版本插件在新版本加载不成功？** #

新版本的 Cocos 发布时，如果插件相关的接口改动较大，插件的版本号会有所更新。

此时基于老版本 Cocos 编写的插件在新版本里不可加载。

该问题的解决方法如下：

打开新版本的插件示例工程，该工程在（以 Windows 上的 Cocos 文档默认安装目录为例） %userprofile%\Documents\Cocos\CocosStudio2\Samples\Addins 。

对比示例工程及自己所编写的插件工程，查看差异，做相应的修改。

> 对于插件版本号升级的，即 AddinConfig.cs 文件中，Addin 及 AddinDependency 特性中的版本号发生变化的，需要用示例工程中引用库（Library 目录里的 DLL）替换自己的插件工程，之后重新编译。

> 如果需要导出到 Lua 的，需要使用新版本的 Lua 导出插件（见下图），可以在 Cocos 商店中下到。


Lua 导出插件，见下图：

   ![image](res/image001.png) 

