# cocos gen-libs

## 简介

安装由SDKBOX提供的cocos2d-x引擎插件

## 用法

```
usage: cocos package [-h] [-v] [-p [PROJECT]] [-b [PLUGIN]] [-D SYMBOL] [-q]
                     [-d [DAYS]] [--china] [--dryrun] 
                     {import,info,update,forget,restore,list,clean,symbols,version}
```

## 参数说明

* **命令：**

| 命令            | 描述  |
| :--------------------- | :----------- |
|  import |  安装指定的插件 |
| update | 升级当前cocos2d-x项目的插件 |
| info | 显示当前项目已安装的插件 |
| restore | 回退之前对项目的改动 （测试功能） |
| list | 显示插件列表 |
| clean [N] | 清理已下载的插件 |
| symbols | 显示SDKBOX插件API |

* **参数：**

| 参数  | 完整参数  | 描述 |
| :------------- | :------------------------| :-----|
| -h      | --help          |显示帮助信息 |
| -v      | --verbose       |调整日志等级 |
| -p PROJECT | --project PROJECT |cocos2d-x项目路径 |
| -b PLUGIN | --plugin PLUGIN |插件路径 |
| -D SYMBOL | --symbol SYMBOL |显示项目详细信息 |
| -q | --nohelp |安装完成之后不打开文档 |
| -d [DAYS] | --days [DAYS] |设置保留日志的时间 |
|         | --china        |使用位于中国的服务器 |
|         | --dryrun        |测试安装 |
|         | --forcedownload |每次安装插件都从服务器下载 |
|         | --noupdate        |忽略更新 |
|         | --patcherrors        |提示代码注入过程中的错误 |
|         | --nopatching        |不修改当前项目代码 |

## 示例

安装iap插件
```
$ cocos package import -b iap -p /path/to/your/cocos2dx/game/
```

安装iap插件 （在cocos2d-x项目路径下运行）
```
$ cocos package import iap
```

安装已经下载的插件包
```
$ cocos package -b /path/to/your/package
```

显示所有插件列表
```
$ cocos package list
```

显示当前项目已安装的插件
```
$ cocos package info
```

清理安装日志
```
$ cocos package clean 5
```
