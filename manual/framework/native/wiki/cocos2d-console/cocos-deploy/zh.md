# cocos deploy

## 简介

编译并在设备或模拟器上部署工程。

## 用法

`cocos deploy [-h] [-s SRC_DIR] [-q] [-p PLATFORM] [-m MODE]`

## 依赖的命令

* [compile](../cocos-compile/zh.md)

## 参数说明

参数 | 可用值 | 示例 | 描述 | 是否必需
:------------: | :-------------: | :------------: | :------------: | :------------:
-h, --help | - | - | 显示帮助信息。 | 否
-s, --src | 工程路径。 | `./projects/MyLuaGame` | 指定工程路径，默认值为当前路径。 | 否
-p, --platform | 编译的平台 | `android` | 指定要编译的平台。 | 是
-m, --mode | 编译模式 | `release` | 指定编译模式，`debug` 或者 `release`。默认值为`debug` | 否

## 注意事项

* 目前此命令只有在 `-p` 参数为 `android` 时有效果。会在模拟器或者设备上重新安装 apk。

## 示例

* `cocos deploy -h` 显示帮助信息。
* `cocos deploy -s ./projects/MyLuaGame -p andoird -m release`  
	编译 `MyLuaGame` 工程并，将 apk 安装到设备或者模拟器上。