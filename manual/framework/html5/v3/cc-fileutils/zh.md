# CCFileUtils

## Web引擎

CCFileUtils.js在Web引擎中已经被删除了，原因是FileUtils在原生平台中的文件检索功能在Web端是无法实现的。

* 二进制文件获取的方法被转移到了`cc.loader.loadBinary`（异步）以及`cc.loader.loadBinarySync`（同步）中。
其中，`cc.loader.loadBinarySync`方法是极其不推荐使用的，可能在今后版本升级改造中会被废弃掉。希望开发者别滥用。

* 所有资源加载,获取,释放等操作都统一到`cc.loader`中了。

* 对于路径字符串拼接操作统一到`cc.path`中了。

## JSB

在JSB中，由于FileUtils调用的是原生平台的实现，所以我们将其保留，并将`cc.fileUtils`重命名为`jsb.fileUtils`，这样用户就会知道这是原生平台才有的API。

