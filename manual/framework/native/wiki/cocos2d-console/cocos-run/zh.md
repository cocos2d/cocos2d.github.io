# cocos run

## 简介

编译工程，并在设备或者模拟器上部署和运行工程。

## 用法

```
cocos run [-h] [-s SRC_DIR] [-q] [-p PLATFORM] [-m MODE] [-b BROWSER]
          [--host [SERVER_HOST]] [--port [SERVER_PORT]]
```

## 依赖的命令

* [deploy](../cocos-deploy/zh.md)

## 参数说明

* **通用参数：**  

	参数 | 可用值 | 示例 | 描述 | 是否必需
	:------------: | :-------------: | :------------: | :------------: | :------------:
	-h, --help | - | - | 显示帮助信息。 | 否
	-s, --src | 工程路径 | `./projects/MyLuaGame` | 指定工程路径，默认值为当前路径。 | 否
	-p, --platform | 运行的平台 | `android` | 指定要运行的平台。 | 是
	-m, --mode | 编译模式 | `release` | 指定编译模式，`debug` 或者 `release`。默认值为`debug` | 否

* **Web 平台参数：**

	参数 | 可用值 | 示例 | 描述 | 是否必需
	:------------: | :-------------: | :------------: | :------------: | :------------:
	--host | 服务器的 ip 地址 | `127.0.0.1` | 设置本地服务器的主机地址，默认值为 127.0.0.1 | 否
	--port | 服务器端口号 | `8000` | 设置本地服务器的端口，默认值为 8000 | 否
	-b, --browser | 浏览器程序路径 | `/Applications/Chrome.app` | 设置指定浏览器打开 url。如果未指定使用系统默认浏览器。 | 否
	--param | 指定启动浏览器的附加参数。 | - | 用于 web simulator 的参数。 | 否


## 注意事项

* 目前不支持在 iOS 设备上运行工程。

## 示例

* `cocos run -h` 显示帮助信息。
* `cocos run -s ./projects/MyLuaGame -p android -m release`  
	使用 release 模式编译 `MyLuaGame` 工程，并在 Android 设备或者模拟器上运行工程。