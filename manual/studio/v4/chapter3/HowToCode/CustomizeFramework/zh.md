#自编译Cocos Framework&Simulator使用说明


##简介

本文档介绍如何定制Cocos Framework&Simulator，并在游戏工程中使用定制后的Cocos Framework&Simulator。

定制Cocos Framework是指安装Cocos Framework之后，对其中的引擎源码进行修改与定制，然后使用的过程。

##版本要求

定制Cocos Framework为v3.7版本新增的功能，3.7以下的版本并不支持。

以下的内容中提到的路径以v3.7版本为例，具体路径以实际安装的Cocos Framework版本为准。

##如何定制Cocos Framework

定制Cocos Framework实际上就是修改安装的源码。在Cocos Framework安装完成后，可以使用XCode 6.0机器以上的版本 和 Visual Studio 2013版本进行修改和调试：

* Mac系统可以使用XCode打开工程文件`/Applications/Cocos/frameworks/cocos2d-x-v3.7/build/CocosFramework.xcodeproj`，然后修改与调试代码即可定制引擎。
* Windows系统可以使用Visual Studio打开工程文件`[安装目录]/frameworks/Cocos2d-x-v3.7/build/CocosFramework.sln`，然后修改与调试代码即可定制引擎。

##如何生成定制后的Cocos Framework

###重新生成预编译库

Cocos Framework中附带了将源码编译生成预编译库的脚本工具：`frameworks/cocos2d-x-v3.7/tools/framework-compile/gen_cocos_libs.py`。

此脚本工具的使用说明如下：

```
usage: gen_cocos_libs.py [-h] [-c] [-all] [--win] [--mac] [--ios] [--android]
                         [--dis-strip] [--vs VS_VERSION] [--app-abi APP_ABI]

生成新的Cocos Framework预编译库。

可用参数:

     -h, --help            显示帮助信息

     -c                    编译之前先删除之前的 prebuilt 文件夹

     -all                  编译所有平台（Mac 系统编译 Mac，iOS 和 Android；Windows 系统编译 Win32 和 Android）

     --win                 编译 Win32 平台

     --mac                 编译 Mac 平台

     --ios                 编译 iOS 平台

     --android             编译 Android 平台

     --dis-strip, --disable-strip  关闭 strip 功能，编译生成的 .a 文件不再 strip。（影响 Mac，iOS 和 Android 平台的预编译库）

     --vs VS_VERSION       指定使用的 Visual Studio 版本。不指定的话，自动查找可用版本。

     --app-abi APP_ABI     指定 ndk-build 所使用的 APP_ABI 参数值。可以使用 ":" 来分隔多个值。例如：--app-abi armeabi:x86。 默认值为 armeabi。
```

使用示例：

1. `python gen_cocos_libs.py -c -all` 清除之前的预编译库并编译所有平台。
2. `python gen_cocos_libs.py --win --vs 2015` 使用VS2015编译Win32平台。

编译完成后，预编译库生成在`frameworks/cocos2d-x-v3.7/prebuilt`文件夹下。游戏工程可以直接链接到新生成的预编译库。

备注：

* 对Cocos Framework源码的定制包括源码修改以及相应的工程文件维护。如果定制后的代码或者工程配置有问题可能导致编译工具执行失败。


##重新生成模拟器


Cocos Framework中附带了将源码编译生成预编译库的脚本工具：`frameworks/cocos2d-x-v3.7/tools/framework-compile/gen_cocos_simulator.py`。

此脚本工具的使用说明如下：

```
usage: gen_cocos_simulator.py [-h] [-c] [-m {debug,release}] [-o OUT_DIR] -p
                              {ios,mac,android,win32,all} [--vs VS_VERSION]

重新生成模拟器。

可用参数:

    -h, --help            显示帮助信息

    -c, --clean           重新生成之前，先删除指定的输出目录。

    -m {debug,release}, --mode {debug,release}  生成模拟器的模式，可选值：debug，release

    -o OUT_DIR, --output OUT_DIR 生成的模拟器存放路径。不指定的话，默认放在 "frameworks/cocos2d-x-v3.7/simulator" 文件夹。

    -p {ios,mac,android,win32,all}, --platform {ios,mac,android,win32,all} 需要编译的平台。如果为 all，则 Mac 系统编译 Mac，iOS 和 Android；Windows 系统编译 Win32 和 Android

    --vs VS_VERSION       指定使用的 Visual Studio 版本。不指定的话，自动查找可用版本。
```

使用示例：

1.`python gen_cocos_simulator.py -c -p all`清除之前的模拟器并编译所有平台。
2.`python gen_cocos_libs.py -p win32 --vs 2015`使用VS2015编译Win32平台模拟器。

##集成自定义模拟器：


把编译出来的模拟器程序文件拷贝覆盖掉"**安装目录/Cocos/cocos-simulator-bin**"下面的文件，这样就可以替换掉Cocos内置的模拟器，使用自定义的模拟器了。

备注：

* 模拟器主要用于Cocos资源编辑器中的预览功能。如果要在资源编辑器中使用新生成的模拟器，需要使用新生成的模拟器替换掉资源编辑器中的模拟器。
