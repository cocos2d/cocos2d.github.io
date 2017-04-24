# 2.1 Step 1:new game project

####Project
Project is one that will contain and organize scenes, layers, spritesheet, resources and other files.。
####Create new project

![Image](res/image025.png)

Start Cocos Studio, select New game project. Create a new Cocos Studio project, the project name is "CocosStudioDemo"

![Image](res/image026.png)
 
When you create a project, set up the project name and path, click the "New" button to create a new Cocos Studio game projects.

If you are a developer, you can directly generate Cocos2d-x source code projects

Folder structure

![Image](res/image027.png)
 
Which cocosstudio folder you placed all the resources used in the project

*.ccs project file, double-click the file to open your project

*.cfg file for the project configuration file used to manage your project configuration

####Create new project with source code
In the New Project dialog, check the "Generate Cococs2d-x project" in setting up the relevant parameters.

![Image](res/image028.png)
 
Package name: application equipment (IOS, Android) the unique ID.

Engine Path: Your native Cocos2d-x path. This property is very important, be sure to set the correct path to the engine. Currently Cocos Studio supports 3.x version of Cocos2d-x engine,get the latest version of the engine, go to the official website for Cocos2-x.

Project language: C ++, Lua, JavaScript

Operating environment: you can choose when to use Cocos2d-x or run a program run through the source code compiler.

Additional Features: Additional features for C ++ special optimization features provided by Intel.

Intel Common Connectivity Framework is a framework for universal connectivity provided by Intel, details see: https: //software.intel.com/en-us/ccf.X86 optimization is provided by Intel applies a framework X86 platform. GCC (GNU Compiler Collection, GNU Compiler Collection) is a set of multiple programming languages ​supported by the GNU compiler project development. ICC (Intel C ++ Compiler) was developed by Intel C / C ++ compiler. About ICC See https://software.intel.com/en-us/forums/intel-c-compiler 

目录结构
![Image](res/image029.png)
 
其中cocosstudio文件夹放置您项目中使用的所有资源

XXX.ccs文件为项目的启动文件，双击该文件可以开启您的项目

XXX.cfg文件为项目配置文件，用于管理您的项目配置信息

其他文件为Cocos2d-x代码项目文件，如果您想使用编写代码的IDE启动您的项目，您可以访问projects文件夹下的文件找到对应IDE的启动项来启动您的项目。
