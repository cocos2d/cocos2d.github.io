# Customize Cocos Framework & Simulator

### Overview

The following section provides guidance on how to create and include custom Cocos Framework & Simulator for your games. 

### Version Requirement

Customizing Cocos Framework requires Cocos Framework v3.7 or higher. 

The directories below are based on v3.7 and the installation of Cocos Framework. 

### How to customize Cocos Framework

Customizing Cocos Framework is actually modifying its source codes. After the installation of Cocos Framework, you can customize the framework with IDE or code editors. 

* On Mac, you can open projects `/Applications/Cocos/frameworks/cocos2d-x-v3.7/build/CocosFramework.xcodeproj` with XCode. Then you need to modify and debug codes. 
* On Windows, you can open projects ` [installation directory]/frameworks/cocos2d-x-v3.7/build/CocosFramework.sln` with Visual Studio. Then you need to modify and debug codes.

### How to release the custom Cocos Framework

#### Build a new precompiled library

There is a scripting tool in Cocos Framework to compile source codes to precompiled library: `frameworks/cocos2d-x-v3.7/tools/framework-compile/gen_cocos_libs.py`. 

The following is a detailed description of how to use this scripting tool: 

    ```
    usage: gen_cocos_libs.py [-h] [-c] [-all] [--win] [--mac] [--ios] [--android]
     [--dis-strip] [--vs VS_VERSION] [--app-abi APP_ABI]
    
     -h, 
    
     -c
    
     -all  
    
     --win 
    
     --mac 
    
     --ios 
    
     --android 
    
     --dis-strip, --disable-strip  
     --vs VS_VERSION   
    
     --app-abi APP_ABI 
     ```
For example: 

1. `python gen_cocos_libs.py -c -all` : Clear previous precompiled library and compile all platforms.
2. `python gen_cocos_libs.py --win --vs 2015` : Compile Win32 platform with Visual Studio 2015.

Precompiled library will be created in the following directory `frameworks/cocos2d-x-v3.7/prebuilt`. Include the new precompiled library to game projects.  

***Note** To customize Cocos Framework, you need to modify source codes and maintain project files. Any problem in the custom codes or projects will lead to a failure in implementing compiling tools.* 

#### Create a new simulator

There is a scripting tool in Cocos Framework to compile source codes to precompiled library: `frameworks/cocos2d-x-v3.7/tools/framework-compile/gen_cocos_simulator.py`。

The following is a detailed description of how to use this scripting tool: 

    ```
    usage: gen_cocos_simulator.py [-h] [-c] [-m {debug,release}] [-o OUT_DIR] -p
      {ios,mac,android,win32,all} [--vs VS_VERSION]
    
    
    -h, --help
    
    -c, --clean  
    
    -m {debug,release}, --mode {debug,release}  
    
    -o OUT_DIR, 
    
    -p {ios,mac,android,win32,all}
    
    --vs VS_VERSION   指定使用的 Visual Studio 版本。不指定的话，自动查找可用版本。
    ```
For example: 

1. `python gen_cocos_simulator.py -c -p all` : Clear previous simulators and compile all platforms. 
2. `python gen_cocos_libs.py -p win32 --vs 2015` : Compile Win32 simulator with Visual Studio 2015. 

### Integrate custom simulator

Copy and replace the files under " **installation directory/Cocos/cocos-simulator-bin** ". Once you have done it, you can use the custom simulator. 

***Note** Simulator is mainly used to preview projects. If you want to use a new simulator, you need to replace the current used simulator with the new one.* 
