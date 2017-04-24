# cocos gen-libs

## 简介

生成引擎的预编译库。生成的库文件会保存在引擎根目录的 'prebuilt' 文件夹。

## 用法

```
usage: cocos gen-libs [-h] [-c] [-e ENGINE_PATH] [-p {ios,mac,android,win32}]
                      [-m {debug,release}] [--dis-strip] [--vs VS_VERSION]
                      [--app-abi APP_ABI]
```

## 参数说明

* **通用参数：**

	参数 | 可用值 | 示例 | 描述 | 是否必需
	:------------: | :-------------: | :------------: | :------------: | :------------:
	-h, --help | - | - | 显示帮助信息。 | 否
	-c | - | - | 生成预编译库之前先删除 'prebuilt' 文件夹。 | 否
	-e | 引擎路径 | `~/Work/cocos2d-x` | 指定引擎文件夹。默认值为当前工具所在的引擎根目录。 | 否
	-p | ios, mac, android, win32 | `mac` | 指定需要编译的目标平台。可以通过多个'-p' 参数指定编译多个目标平台。默认编译所有可用的目标平台。 | 否
	-m | debug, release | `debug` | 指定使用 debug 或者 release 模式来生成预编译库。默认值为 release。 | 否
	--dis-strip | - | - | 关闭生成预编译库的 strip 功能。 | 否

* **Android 平台参数：**

	参数 | 可用值 | 示例 | 描述 | 是否必需
	:------------: | :-------------: | :------------: | :------------: | :------------:
	--app-abi | x86, armeabi, armeabi-v7a | `armeabi:x86` | 设置 ndk-build 的 APP_ABI 属性。可以使用 ':' 分隔多个值。示例：`--app-aib armeabi:x86:mips`。默认值为 'armeabi'。 | 否	
* **Windows 平台参数：**

	参数 | 可用值 | 示例 | 描述 | 是否必需
	:------------: | :-------------: | :------------: | :------------: | :------------:
	--vs | 整数 | `2013` | 指定使用的 Visual Studio 版本，例如 2013。默认自动查找可用的版本。 | 否

## 注意事项

* 不同的操作系统中可用的目标平台是不一样的：
	
	* Mac : ios, mac, android  
	* Windows : android, win32  
	* Linux : android

* 如果需要一次生成多个目标平台的预编译库，可以通过多次使用 `-p` 参数来实现。例如： `-p ios -p mac` 会同时生成 iOS 和 Mac 两个目标平台的预编译库。

## 示例

* `cocos gen-libs -h`。显示帮助信息
* `cocos gen-libs -c`  
删除 `prebuilt` 文件夹。然后生成所有可用的目标平台预编译库。
* `cocos gen-libs -e ~/Work/cocos2d-x -p ios -p android`  
指定引擎路径为 `~/Work/cocos2d-x`。 然后生成 iOS 和 Android 两个平台的预编译库。
* `cocos gen-libs -p win32 --vs 2015 -m debug`  
使用 VS2015 和 debug 模式生成 win32 平台的预编译库。
