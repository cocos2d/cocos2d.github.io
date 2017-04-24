#示例工程说明

###1.	示例工程位置

&emsp;&emsp;Windows 上文档位置默认安装时，这个目录是 %userprofile%\Documents\Cocos\CocosStudio2\Samples\Addins。文档位置自定义安装时，则在 Cocos Studio 的文档安装目录中的相应位置。例如，文档的安装目录为 D:\CocosDocuments，则该路径为 D:\CocosDocuments\Cocos\CocosStudio2\Samples\Addins 。在 Mac 上，这个目录为系统目录 /Library/Application Support/Cocos/CocosStudio2/Samples/Addins。

&emsp;&emsp;注：%userprofile% 是 Windows 一个环境变量，其值一般为 C:\users\ABC（ABC 用户名），可将该路径粘贴到 Windows 资源管理器地址栏以打开相应的目录。例如，在 Windows 的 cmd 命令行工具中输入 set userprofile 将得到以下输出：

![image](res/image001.png) 
 
(遮蔽部分为用户名)

###2.	示例工程其它细节

&emsp;&emsp;本节将介绍一些示例工程 Addins.Sample 的其它细节。

&emsp;&emsp;**示例工程的编译：**示例工程是一个 Visual Studio 2013 的解决方案。在 Windows 上直接打开 Addins.sln 即可编译。如果没有安装 Mono库及 GTK#，请自行安装。在 Mac 上由于权限的关系，请把示例工程拷贝到一个用户有权限读写的目录时行编译。在 Mac 上可以使用 Xamarin Studio 进行编译。请自行安装 MonoFramework。

&emsp;&emsp;**编译后 DLL 的拷贝。**编译成功后，会得到一个 Addins.Sample.dll ，请将其拷贝到 Addins 目录里。（Windows 上文档位置默认安装时，这个目录会是 %userprofile%\Documents\Cocos\CocosStudio2\Addins。文档位置非默认安装时，则在 Cocos Studio 的文档安装目录中的相应位置。以在 Windows 上为例，如果文档的安装目录为 D:\CocosDocuments，则该路径为 D:\CocosDocuments\Cocos\CocosStudio2\Addins。在 Mac 上，这个目录为用户目录 ~/Library/Application Support/Cocos/CocosStudio2/Addins）。
