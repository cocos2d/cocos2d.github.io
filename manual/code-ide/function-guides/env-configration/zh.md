# Cocos Code IDE开发环境配置指导 #
---------------



## **1. 与Cocos Code IDE相关的配置** ##

- ### **python** ###
	- **版本要求**
	
		Python版应大于等于2.7.5并且暂不支持Python 3.0及以上版本。建议使用2.7.5及以上的版本。
	- **安装注意事项**
	
		Mac平台：Mac OS系统会默认安装Python，请检查系统中的Python版本，如果不符合，需要到Python官网下载对应的Python安装包。
		
		Windows平台：需要到Python官网下载所对应Python安装包进行安装。
		
		**备注：**下载前请确认系统位数，按照正确的系统位数选择Python安装包。


## **2. 引擎配置** ##

- ### **引擎同IDE的依赖关系** ###

	Cocos Code IDE需要依赖引擎的cocos-console来进行工程的建立,编译和打包等操作。

- ### **引擎同Python的依赖关系** ###
		
	引擎依赖Python环境，引擎中的cocos-console在新建工程,编译和打包的过程中，都是需要调用相关的Python脚本来实现，所以用户需要正确安装Python环境后，才可以正常的使用这些功能。

- ### **Cocos2d-x** ###
	- **引擎版本和Cocos Code IDE版本的对应关系**

		| Cocos Code IDE 版本        | IDE对Cocos2d-x引擎支持的最高版本 |
		| -------------------------- |:-----------------------------:|
        | Cocos Code IDE 1.2.0       | Cocos2d-x 3.4                 |
        | Cocos Code IDE 1.1.0       | Cocos2d-x 3.3final            |
		| Cocos Code IDE 1.0.1       | Cocos2d-x 3.3rc0              |
		| Cocos Code IDE 1.0.0-Final | Cocos2d-x 3.3rc0              |
		| Cocos Code IDE 1.0.0-RC2   | Cocos2d-x 3.2                 |
		| Cocos Code IDE 1.0.0-RC1   | Cocos2d-x 3.2rc0              |
		| Cocos Code IDE 1.0.0-RC0   | Cocos2d-x 3.2alpha0           |
	
- ### **Cocos2d-JS** ###
	- **引擎版本和Cocos Code IDE版本的对应关系**

		| Cocos Code IDE 版本        | IDE对Cocos2d-JS引擎支持的最高版本 |
		| -------------------------- |:------------------------------:|
        | Cocos Code IDE 1.2.0       | Cocos2d-JS 3.3                 |
        | Cocos Code IDE 1.1.0       | Cocos2d-JS 3.2                 |
		| Cocos Code IDE 1.0.1       | Cocos2d-JS 3.1                 |
		| Cocos Code IDE 1.0.0-Final | Cocos2d-JS 3.1                 |
		| Cocos Code IDE 1.0.0-RC2   | Cocos2d-JS 3.0                 |
		| Cocos Code IDE 1.0.0-RC1   | Cocos2d-JS 3.0 RC2             |
		| Cocos Code IDE 1.0.0-RC0   | Cocos2d-JS 3.0 RC1             |

- ### **Quick** ###
	- **引擎版本和Cocos Code IDE版本的对应关系**
		| Cocos Code IDE 版本       | IDE对Quick引擎支持的最高版本 |
		|---------------------------|:-------------------------:|
        | Cocos Code IDE 1.2.0      | Quick 3.2rc1              |
        | Cocos Code IDE 1.1.0      | Quick 3.2rc1              |
		| Cocos Code IDE 1.0.1      | Quick 3.2rc1              |
		| Cocos Code IDE 1.0.0-Final| Quick 3.2rc0              |
	
- ### **注意事项** ###
	
	引擎路径中请不要包含带有非ASCII码的字符。
	
	如果是使用git方式获取的引擎，需要执行引擎目录下的download-deps.py来下载相应的依赖库，还需要执行git submodule update的命令来更新子模块。

## **3. Android环境配置** ##

- ### **Android SDK** ###

	- **Android SDK:** Android专属的软件开发工具包

	- **版本要求**
	
		要求sdk版本在android-10及以上。
	- **注意事项**
	
		sdk中的platforms目录如果为空，需要开发者使用SDK Manager进行下载不同版本的sdk。

- ### **Android NDK** ###
	- **Android NDK:** 使用Android NDK可以使用开发者方便的使用C/C++语言来进行Android平台的开发。Android NDK中包含了从C/C++生成原生代码库所需要的工具和build files。

	- **NDK版本与引擎版本的对应关系**

		Cocos2d-x 3.4，支持r10c。

		Cocos2d-x 3.2和Cocos2d-x 3.3，支持r9d和r10c。

		Cocos2d-x 3.0以上版本，Cocos2d-x 3.2以下版本，可以使用r9b,r9d。

	- **注意事项**
		
		Android NDK路径不可以包含有空格或非ASCII码字符，否则可能会导致编译失败或未知的一些错误。
		
- ### **Ant** ###
	- **Ant:** 是一个Apache基金会下的跨平台的构件工具，它可以实现项目的自动构建和部署等功能。使用Ant可以很方便的对Android项目进行构建，最终生成可用的应用程序	

	- **版本要求**
	
		经测试，1.9.3和1.9.4版本可以正常使用。
 
- ### **JDK** ###

	- **JDK:** Java语言的软件开发工具包，没有JDK的话，无法编译Java程序。而且还需要使用JDK中的工具对Android项目进行签名等操作
	
	- **版本要求**

		Cocos Code IDE 1.0.0-RC2及以上版本自带JDK 1.8，相关功能在此版本经过测试，可正常使用。
	
	- **注意事项**

		Cocos Code IDE 1.0.0-RC2及以上版本自带JDK，如果开发者想使用自定义的JDK，可以在Cocos Code IDE中Preference下的Cocos配置页进行更改。

## **4. iOS环境配置** ##


- ### **Xcode** ###

	- **Xcode简介**

		Xcode是苹果公司向开发人员提供的集成开发环境（非开源），用于开发Mac OS X,iOS的应用程序。Cocos Code IDE依赖于Xcode中的编译和打包工具。
		
	- **Xcode版本和IDE版本的对应关系**
		只支持Xcode 5.0及以上版本。
		
		Cocos Code IDE 1.0.0-Final及以上版本最高支持Xcode 6.1(6A1052d)版本。

- ### **Keychain Tools** ###

	- **Keychain Tools简介**
	
		keychain tools中包含有iOS真机调试或发布时，所需要的证书，Cocos Code IDE在编译打包时，需要读取这些信息来对app进行签名等操作 。


## **5. Win32环境配置** ##

- ### **VisualStudio** ###

	- **VisualStudio简介**
	
		是目前最流行的Windows平台应用程序的集成开发环境，同时也是一个基本完整的开发工具集，它包括了整个软件生命周期中所需要的大部分工具。并且Cocos Code IDE依赖VisualStudio中的MSBuild工具对win32的工程进行编译。
		
	- **版本要求**
	
		Visual Studio 2012及以上版本，并且不支持express版本。
