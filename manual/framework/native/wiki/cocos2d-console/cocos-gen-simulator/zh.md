# cocos gen-simulator

## 简介

生成 Cocos 模拟器。

## 用法

```
usage: cocos gen-simulator [-h] [-c] [-e ENGINE_PATH] [-m {debug,release}]
                           [-o OUT_DIR] [-p {ios,mac,android,win32}]
                           [--vs VS_VERSION]
```

## 参数说明

参数 | 可用值 | 示例 | 描述 | 是否必需
:------------: | :-------------: | :------------: | :------------: | :------------:
-h, --help | - | - | 显示帮助信息。 | 否
-c | - | - | 生成之前清除输出目录。会完全删除输出目录。 | 否
-e | 引擎路径 | `~/Work/cocos2d-x` | 指定引擎文件夹。默认值为当前工具所在的引擎根目录。 | 否
-m | debug, release | `debug` | 指定使用 debug 或者 release 模式来生成预编译库。默认值为 release。 | 否
-o, --output | 输出文件路径 | `~/MySimulator` | 指定模拟器的输出目录。默认值为引擎根目录下的 'simulator' 文件夹。 | 否
-p | ios, mac, android, win32 | `mac` | 指定需要编译的目标平台。可以通过多个'-p' 参数指定编译多个目标平台。默认编译所有可用的目标平台。 | 否
--vs | 整数 | `2013` | 指定使用的 Visual Studio 版本，例如 2013。默认自动查找可用的版本。 | 否

## 注意事项

* 不同的操作系统中可用的目标平台是不一样的：
	
	* Mac : ios, mac, android  
	* Windows : android, win32  
	* Linux : android

* 如果需要一次生成多个目标平台的预编译库，可以通过多次使用 `-p` 参数来实现。例如： `-p ios -p mac` 会同时生成 iOS 和 Mac 两个目标平台的预编译库。

## 示例

* `cocos gen-simulator -h`。显示帮助信息
* `cocos gen-simulator -c`  
删除指定的输出文件夹。然后生成所有可用的目标平台的模拟器。
* `cocos gen-simulator -e ~/Work/cocos2d-x -o ~/MySimulator -p ios -p android`  
指定引擎路径为 `~/Work/cocos2d-x`。 然后生成 iOS 和 Android 两个平台的模拟器输出到 `~/MySimulator` 文件夹。
* `cocos gen-simulator -p win32 --vs 2015 -m debug`  
使用 VS2015 和 debug 模式生成 win32 平台的模拟器。
