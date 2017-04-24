# cocos luacompile

## 简介

Compile the `.lua` files to `.luac`.

## 用法

```
cocos luacompile [-h] [-v] [-s SRC_DIR_ARR] [-d DST_DIR] [-e]
				[-k ENCRYPTKEY] [-b ENCRYPTSIGN] [--disable-compile]
```

## 参数说明

参数 | 可用值 | 示例 | 描述 | 是否必需
:------------: | :-------------: | :------------: | :------------: | :------------:
-h, --help | - | - | 显示帮助信息 | 否
-s, --src | lua 文件路径 | 	`./projects/MyLuaGame/src` | 指定需要编译的 lua 文件路径，支持指定多个路径。 | 是
-d, --dst | 输出文件路径。 | `./projects/MyLuaGame/src` | 指定输出文件的路径。 | 是
-e, --encrypt | - | - | 开启 XXTEA 加密功能。 | 否
-k, --encryptkey | 字符串 | `MyLuaKey` | 指定 XXTea 加密算法的 key。只有使用了 `-e` 参数时起效。默认值为 `2dxLua`。 | 否
-b, --encryptsign | 字符串 | `MyLuaSign` | 指定 XXTea 加密算法的 sign。只有使用了 `-e` 参数时起效。默认值为 `XXTEA`。 | 否

## 示例

* `cocos luacompile -h` 显示帮助信息。
* `cocos luacompile -s ./projects/MyLuaGame/src -d ./projects/MyLuaGame/src -e -k MyLuaKey -b MyLuaSign`  
	将 `./projects/MyLuaGame/src` 文件夹下的 lua 文件编译为 luac 文件，并使用 XXTea 算法进行加密。加密的 key 为 `MyLuaKey`，加密的 sign 为：`MyLuaSign`。