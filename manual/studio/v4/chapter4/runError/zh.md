#修复cocos run -p web失败#

**问题一：**基于Framework 3.6版本的工程使用Framework 3.9 console调用cocos run -p web 运行失败，如何解决？

解决方案：3.6 版本中的 lua win32 工程配置的输出目录为 runtime 目录。而 3.9 版本中已经将输出目录修改为了 simulator，需要将VS工程中的输出目录调整为 simulator，即可解决。


**问题二：**如何指定编译使用的vs？

解决方案：在命令中添加 --vs 参数即可。比如：使用 --vs 2015 则强制使用 VS2015 进行编译运行。

**问题三：**
同时安装 VS2013和VS2015后，Framework 3.6 以及之前的版本导致编译报错，如何解决？

解决方案：
   安装Framework 3.9，Framework 3.9调整了console命令中查找VS版本的逻辑，根据工程所使用的引擎版本选择相应的VS版本进行编译。

