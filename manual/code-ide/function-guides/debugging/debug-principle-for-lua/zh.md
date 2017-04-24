Cocos2d-x lua 的基本调试原理
===
Cocos2d-x 引擎内置了 Lua binding 的支持，开发者可以直接用 C++ 实现比较复杂的算法，又可以通过 lua 脚本来进行快速地实现游戏逻辑。C++ 调试工具当然首选 Xcode,VS，而 lua 的调试工具五花八门，LDT 和 Decoda 等等，但是它们都不是专门针对 Cocos2d-x 的工具，Cocos2d-x 工程要使用它们需要开发者对工程进行改造，同时工具的配置也非常的繁琐，于是 Cocos 官方推出了自己的 Cocos Code IDE。

选用 LDT 作为调试 lua 的基础
-------
首先感谢 [LDT][ldt link]，这是 Eclipse 世界一款优秀的 lua 开发插件，但正如前文所说，[LDT][ldt link] 无法直接用于 Cocos2d-x 工程，而且配置比较繁琐，所以 Cocos 团队修改了 [LDT][ldt link] 源码并集成到 Cocos Code IDE 中，这比从零开始要快得多。

LDT 的基本流程
-------
1. LDT 在启动调试时通过 [DLTK][dltk link] 打开一个调试服务端口，等待调试客户端的连接
2. 游戏启动时运行 ldt_debugger.lua，这个步骤会请求与 LDT 调试端口进行连接
3. 连接成功后 LDT 就能进行调试操作了

Cocos2d-x 调试的总体流程
-------
IDE 作为调试服务器，游戏作为调试客户端

总体流程：

1. IDE 打开调试端口等待游戏连接
2. 游戏启动后连接 IDE 调试服务器端口
3. 连接成功，游戏获得各种断点信息
4. 游戏开始运行入口脚本文件
5. 当游戏运行脚本遇到断点时，会进入 paused 状态，并且通知 IDE
6. IDE 通过 [DLTK][dltk link] 提供用户各种常见的调试操作

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
-----
1. 为什么有时会连不上？

 	原因太多了，防火墙挡住了，端口被占用了等等等等。IDE 只能帮你检测到是被哪个进程占用了，清理什么的还是得靠你自己。当然，你也可以修改项目下的 project.json 来修改端口。如果你是远程调试，还需要确保你在 Debug Configurations 界面填写的 Host IP 和 Target IP 是能够互相访问的。
 	
2. 为什么选择了 ADB 调试还需要依赖网络，而 JavaScript 不需要？

    ADB 只提供了电脑通过 usb 线访问 Android 手机，但不提供 Android 手机通过 usb 线访问电脑的方式。而 [DLTK][dltk link] 又是以运行在电脑上的 Eclipse 作为调试服务器，等待 Android 设备访问的，所以 Android 设备需要通过网络来连接调试服务器。


[ldt link]: http://www.eclipse.org/koneki/ldt/
[dltk link]: http://www.eclipse.org/dltk/
[ios-sim link]: https://github.com/phonegap/ios-sim

