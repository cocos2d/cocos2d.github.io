Cocos2d-js 的基本调试原理
===
Cocos2d-js 包含了 HTML5 和 JavaScript Binding 两部分，使用 HTML5 可以开发网页游戏，而 JavaScript Binding 可以开发运行于 iOS 和 Android 设备上的原生游戏。

而 Cocos Code IDE 当前的重点是在支持 JavaScript Binding 的游戏开发工作流上。即支持打包 apk,ipa，同时支持调试 JavaScript 代码。

高大上一下
---------
Cocos2d-js 之所以可以支持被调试，是因为 Cocos2d-js 的 JavaScript 代码是被放在 spidermonkey 上运行，并且引擎还集成了 spidermonkey 的调试模块，有兴趣了解这方面知识的可参考 Mozilla 的官方文档。

+ [SpiderMonkey官方文档][SpiderMonkey link]
+ [SpiderMonkey调试支持][SpiderMonkey debugger link]
+ [SpiderMonkey调试相关文档][SpiderMonkey debugger doc link]

回到现实状态
----------
搞明白上面的原理是否能帮助你快速的开发出一款优秀的游戏呢？答案是：不能。你只要搞明白大致的原理就可以帮助你熟练地使用 Cocos Code IDE 进行游戏开发了。

调试的总体流程
----------
调试 JavaScript 时，游戏程序作为调试服务器，IDE 作为调试客户端

总体流程：

1. 游戏启动，开启 debug 端口用于传输调试信息，等待 IDE 连接（这就是为什么 runtime 会有一个蓝色等待界面的原因）
2. IDE 连接上 debug 端口后通知游戏在对应的脚本文件中打上断点
3. IDE 通知游戏运行入口脚本文件
4. 当游戏运行脚本遇到断点时，会进入 paused 状态，并且通知 IDE
5. 这个时候 IDE 通过 [远程调试协议][Debugger protocal link] 提供用户各种常见的调试操作

IDE 的额外工作
---
因为每次启动调试都要先启动游戏，因此我们尽可能自动化这个流程以方便用户，那么我们采用的方法是什么呢？

###Windows 版本和 Mac OSX 版本
只要用户在 Debug Configurations 配置好游戏路径，IDE 通过命令行就可以帮你启动了

###Android 的 ADB 模式
用户设置好 apk 路径，IDE 通过 adb 命令安装 apk 到你所连接的设备上，然后再通过 adb 命令启动，类似于执行了这些命令：

adb install -r PrebuiltRuntime.apk
adb shell am start -W apk的包名/apk的启动activity

如果你遇到IDE无法安装 apk 的情况，可以尝试使用上面的命令找到原因

###iOS 模拟器
我们通过第三方的工具 [ios-sim][ios-sim link] 将 app 安装到模拟器，并启动 app，目前内置在 IDE 中的 ios-sim 为 2.0.1（支持 Xcode5） 和 3.0.0（支持 Xcode6）

小提示
----
为什么有时会连不上？原因太多了，防火墙挡住了，端口被占用了等等等等。IDE 只能帮你检测到是被哪个进程占用了，清理什么的还是得靠你自己。当然，你也可以修改项目下的 project.json 来修改端口。如果你是远程调试，需要在 Debug Configurations 界面配置正确的 ip 地址，还要确保你的电脑能连接到你所填写的 ip 地址上。


[SpiderMonkey link]: https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey
[SpiderMonkey debugger link]: https://developer.mozilla.org/en-US/docs/Tools/Debugger-API
[SpiderMonkey debugger doc link]: https://github.com/jimblandy/DebuggerDocs
[Debugger protocal link]: https://wiki.mozilla.org/Remote_Debugging_Protocol
[ios-sim link]: https://github.com/phonegap/ios-sim
 