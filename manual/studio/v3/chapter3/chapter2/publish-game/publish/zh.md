# 3.2.6.1 构建发布

当您使用Cocos Studio编辑完资源，准备编写代码完成游戏逻辑制作时，可以使用发布功能，将资源整理,精简出去。发布时，Cocos Studio用将您项目中未使用到的资源过滤掉，将生成合图资源，甚至会生成编码的运行环境。

点击工具栏里的“发布”的下拉按钮，这里有四种发布方式，它们会根据项目类型和使用环境出现在您的项目中：

####发布资源
系统将您的Cocos Studio项目资源如场景文件,图层文件等梳理后发布至项目所在文件夹下的res文件夹。

####发布到Cocos Code IDE工程
Cocos Code IDE是一个基于Eclipse的跨平台IDE，专门为Cocos2d-x Lua&JavaScript开发人员准备。

当您在新建项目时选择了创建Cocos2d-x项目，且编程工具选择了使用Cocos Code IDE时，点击“发布到Cocos Code IDE工程”将更新项目文件，项目可以在Cocos Code IDE中编辑。详见Cocos Code IDE官网。

####发布到Xcode工程
Xcode是运行在苹果公司Mac操作系统下的集成开发环境，用于开发Mac OS X,iOS的应用程序。

当您的电脑为Mac系统并且创建的是包含Cocos2d-x源代码的项目，点击“发布到Xcode工程”将更新项目文件。

####发布到Visual Studio工程
Visual Studio是微软公司发布的一个基本完整的开发工具集，所写的目标代码适用于微软支持的所有平台。

当您的电脑为Windows系统并且创建的是包含Cocos2d-x源代码的项目，点击“发布到Visual Studio工程”将更新项目文件。
