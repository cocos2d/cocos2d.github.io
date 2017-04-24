# cocos jscompile

## 简介

对 js 文件进行加密和压缩处理。

## 用法

```
cocos jscompile [-h] [-v] [-s SRC_DIR_ARR] [-d DST_DIR] [-c]
				[-o COMPRESSED_FILENAME] [-j COMPILER_CONFIG]
				[-m CLOSURE_PARAMS]
```

## 参数说明

参数 | 可用值 | 示例 | 描述 | 是否必需
:------------: | :-------------: | :------------: | :------------: | :------------:
-h, --help | - | - | 显示帮助信息。 | 否
-s, --src | js 文件路径。 | 	`./projects/MyJSGame/src` | 指定需要编译的 js 文件路径，支持指定多个路径。 | 是
-d, --dst | 输出文件路径。 | `./projects/MyJSGame/src` | 指定输出文件的路径。 | 是
-c, --use_closure_compiler | - | - | 使用 closure 编译器将所有 js 文件压缩为一个大的文件。 | 否
-o, --output_compressed_filename | 文件名 | `MyJS.js` |  指定压缩为一个大的 js 文件名称。只有当使用了 '-c' 参数时起效。 | 否
-j, --compiler_config | - | - | 指定 json 格式的 closure 编译器配置，请参考compiler_config_sample.json。 | 否
-m, --closure_params | - | - | 传给 closure 编译器的扩展参数。会覆盖 closure 编译器的已有配置。 | 否

## 示例

* `cocos jscompile -h` 显示帮助信息。
* `cocos jscompile -s ./projects/MyJSGame/src -d ./projects/MyJSGame/src`  
	将 `./projects/MyJSGame/src` 文件夹下的 js 文件编译为 jsc 文件。