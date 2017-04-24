# 2.2 Cross native / browser game with Cocos Console (JSB dev environment)

The best thing about Cocos2d-JS is its perfect multi-platform ability: one code base really runs everywhere with Cocos2d-JS v3.0. In this first version of Cocos2d-JS, we have merged the web engine (Cocos2d-html5) and the native engine (Cocos2d-x JavaScript Bindings) together, so that we can provide a unified workflow for all platforms. With Cocos2d-JS, developers can focus on writing JavaScript code. The Cocos Console tool will help you manage project creation and publishing.

**Cocos2d-JS v3.0 Framework Architecture**:

![](./Cocos2d-JS-Structure.jpg)

As we can see from the architecture of Cocos2d-JS, web based games make use of Cocos2d-html5 and native platforms are supported using Cocos2d-x's JavaScript Bindings (JSB). The JSB use SpiderMonkey as their runtime JavaScript engine and function as a bridge to map Cocos2d-x's API to the JavaScript API. Both the web and native solutions have already proven themselves in many games in the 2.x versions, but this is the first time these two solutions are truly combined, unified and simplified. The Cocos2d-JS API level shown in the architecture is where the real magic happens. It unifies and simplifies the two base engine's APIs so that the differences between platforms and devices are transparent for developers. All this leads to the same goal: Make multi-platform development incredibly easy!

**All platforms supported by Cocos2d-JS**:

- Desktop Browsers（Chrome, Safari, Firefox, Opera, IE9+）
- Mobile Browsers（Android, iOS）
- iOS
- Android
- Mac OS X
- Windows

##1. Downloading the Cocos2d-JS engine

Please go to the [download page](http://www.cocos2d-x.org/download) to download the latest version of Cocos2d-JS. The package content is showing below:

|Directory or file|Content description|
|----------|-------|
|build                  |Includes test cases and the Moon Warriors sample's Xcode project and Visual Studio project|
|docs                   |Includes JavaScript coding style guide, the latest release notes and the upgrade guide|
|frameworks             |Includes the web engine and the native engine|
| - cocos2d-html5       |Web engine|
| - js-bindings         |Cocos2d-x engine with JavaScript Bindings|
|samples                |Samples folder|
| - js-moonwarriors     |MoonWarriors sample game|
| - js-tests            |Cocos2d-JS test cases|
|templates              |Templates for Cocos Console|
|tools                  |Tools folder|
| - bindings-generator  |Automatic bindings generator tool|
| - cocos2d-console     |Cocos Console tool|
| - tojs                |Automatic JavaScript bindings configuration files and generation script|
|AUTHORS                |Authors list, including all contributors of the GitHub repository|
|CHANGELOG              |Change logs of all old versions|
|LICENSE                |Cocos2d-JS license|
|README.md              |Cocos2d-JS project introduction|
|setup.py               |Cocos Console's installation script|

##2. Installing Cocos Console

To help you with creating a project and publishing it, you can use the Cocos Console. After downloading the engine package, you can install Cocos Console by executing setup.py (Windows user may need to install [python 2.7](https://www.python.org/downloads/release/python-278/) first). This script will set-up the `cocos` command and all its dependencies. During the installation, you need to provide your NDK root path, Android SDK path for Android compilation and ANT path for web source compilation. Please note that you need to re-execute setup.py when you upgrade the engine to make sure it's referencing the newest engine.

Some useful links and installation tips:

* [Python 2.7.6](https://www.python.org/download/releases/2.7.6/)
* [Android SDK](https://developer.android.com/sdk/index.html?hl=sk)
* [NDK](https://developer.android.com/tools/sdk/ndk/index.html)
* Installing Ant:

    - [Download Ant](http://ant.apache.org/).
    - Decompress Ant to a folder.
    - Set the Java path as JAVA\_HOME environment variable, the Ant folder as ANT\_HOME environment variable. Then add ${ANT\_HOME}/bin (Unix) or %ANT\_HOME%/bin (Windows) to your system path.
    
    ```
    // Example: execute in terminal or add them to .bash_profile(Mac)
    export ANT_ROOT=/usr/local/ant/bin
    export JAVA_HOME=/usr/local/jdk1.7.0_51
    ```

##3. Project creation

It's very simple to create a project using Cocos Console. After installing the `cocos` command, you can go to you project's destination folder and open the terminal/command line tool to execute the following command:

```
cocos new -l js ProjectName
```

If the creation succeed, you will find the ProjectName folder in the destination folder. This project can be published to all supported platform. The newly created folder structure is different from the engine folder, here is a list of content and descriptions:

|Directory or file|Content description|
|----------|-------|
|frameworks             |Includes the web engine and the native engine|
| - cocos2d-html5       |Web engine|
| - js-bindings         |Cocos2d-x engine with JavaScript Bindings|
| - runtime-src         |Project folders for all native platforms, including iOS/MacOSX/Android/Windows|
|res                    |The project's resources folder, should be used to save all images, audio, fonts, animations, etc.|
|src                    |The project's source folder, should be used to save all JavaScript code for your game|
|publish                |Created when publishing your project under release mode, will contain the publish package|
|runtime                |Contains all runtime executables packaged under debug mode|
|tools                  |Tools folder|
| - bindings-generator  |Automatic bindings generator tool|
| - tojs                |Automatic JavaScript bindings configuration files and generation script|
|index.html             |Main web page for the project, it can be accessed via a web server and shows the game in action|
|main.js                |Entrance script for the game logic, contains initialization code|
|project.json           |Project's configuration file, detailed descriptions can be found in main.js|

##4. Fast development ability

Concrete parts of the Cocos2d-JS API and their usage will not be discussed in this chapter. However it's very important to mention that web platform is not only a distribution channel for Cocos2d-JS, but also an important and useful tool for developers to make prototypes and to boost their development. 

The reasons that we suggest developers to use web platform during prototyping and development are the following:

- Click to play, no need to wait for compiling, you can see the result of your changes with a simple page reload.
- Browser often offer a great JavaScript debugging tool, you can refer to [Google Chrome DevTools Introduction](https://developer.chrome.com/devtools). It can help developers to quickly locate and solve issues, it also solved the problem that native IDEs can not debug JavaScript code.
- This approach is better suited for JavaScript developers.

##5. Native platform compilation

###5.1 Cocos Console

If you want to test or publish your game on native platforms, after having developed and tested it on the web platform, you can compile your project for your selected platform. Again, Cocos Console provides an easy-to-use compilation command: `cocos compile`.

```
// Open the terminal or command line tool in the project's folder
// -p specifies the targeted platform, it can be web, ios, mac, android, win32
cocos compile -p web|ios|mac|android|win32

// You can choose the publishing mode with -m option, it can be debug or release
// Under web platform, you can also add the --advanced option to use the Closure Compiler's advanced mode to compress and obfuscate your JavaScript scripts
cocos compile -p android -m release
cocos compile -p web -m release --advanced

// Replace compile command with run to execute the published executable on real devices or emulators
cocos run -p web
cocos run -p ios
```

More details about Cocos Console can be found in the [Cocos Console documentation](http://cocos2d-x.org/wiki/Cocos2d-console).

###5.2 Using an IDE to compile the project

In the `frameworks/runtime-src/` folder, you can find project files for some platforms, including:

- proj.ios_mac: Xcode project for iOS and Mac OS X
- proj.win32: Visual Studio project for Windows
- proj.android: Eclipse project for Android

##6. Project publishing

###6.1 Native platform publishing

- Mac / Win32

    Execute this command to publish your project for Mac or Windows. If the compilation was successful, you can find executables in the `publish` folder.

    ```
    cocos compile -p mac|win32 -m release
    ```

- iOS

    Execute this command to publish your project for iOS. You can specify your own code signing identity with the `--sign-identity` option. If the compilation was successful, you can find executables in the `publish` folder.

    ```
    cocos compile -p ios -m release --sign-identity "iPhone Distribution:xxxxxxxx"
    ```

- Android
    
    1. Execute the command `cocos compile -p android -m release --ndk-mode release` to create an apk file of your project.
    2. If the compilation succeded, you can find the apk file in the `publish` folder. You can use the jarsigner tool to sign the apk with your own Android key store, detailed steps can be found in [Google's official documentation](http://developer.android.com/tools/publishing/app-signing.html)。

###6.2 Web platform publishing

Executing `cocos compile -p web -m release` will publish your project for web. If the compilation succeeded, you can find it in the `publish` folder. You can deploy this individual folder on your web server, so it can be visited.

As mentioned before, adding the `--advance` option in the publish command will activate Closure Compiler's advanced compressing mode to allow you to benefit from a higher compression ratio and even better performance. But it has some requirements for your code, if you experience issues in your game when using the advanced mode, please refer to the [Closure Compiler Advanced Compilation Document](https://developers.google.com/closure/compiler/docs/api-tutorial3) for suggestions and solution.
