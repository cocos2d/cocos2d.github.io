# 2.1 Web Game Workflow with Cocos2d-JS Lite (Web dev environment)

The Cocos2d-JS team has designed a specific workflow for web developers. For these developers, it's much better to have a single file engine which is embedded, like other web frameworks, directly into their html page. What's more important, the Cocos2d-JS full package is too big and too complicated for web developers, it's like being thrown in a huge labyrinth. This will send our developers a wrong message: "Cocos2d-JS is too heavy to develop web games."

In fact, Cocos2d-JS's web engine have implemented modularization, it can be in the same time powerful and light as a feather. Because of all these reasons, we have promoted the Lite Version and its workflow for pure web development.

In this chapter, we will introduce you to the workflow of Cocos2d-JS Lite Version.

## Download Cocos2d-JS Lite Version

Please download the latest Lite Version engine on the [download page](http://cocos2d-x.org/filecenter/jsbuilder/). You can also download the Full Version web engine or create your own version.

Using the download builder you can choose between downloading a compressed or uncompressed version. The compressed version can reduce the JavaScript file size, but the engine code will become unreadable. You should choose the uncompressed mode during the development phase and replace it with the compressed version when you release your game.

## Downloaded Content

To simplify the usage of Lite Version, it not only contains the engine but also a complete HelloWorld project. The Lite Version includes:

|File name|Description|
|---------|-----------|
|build.xml|The ant build configuration file of the [Google Closure Compiler](https://developers.google.com/closure/compiler/) compress tool. You can download Closure Compiler, modify the configuration in this file, and use ant to compress all JavaScript code to have a higher compression ratio|
|cocos2d-js-v3.0.js|This is the engine's JavaScript file. Just embed this file in your page and then develop your game with Cocos2d-JS APIs|
|HelloWorld.html|The main page of HelloWorld, including all game code|
|HelloWorld.png|Texture file used by HelloWorld|
|README.md|Cocos2d-JS Lite Version usage guide|

## Usage Guide

You may have downloaded one of the following three versions:

- **Cocos2d-JS Full Version**: The Full Version engine includes all features and extensions of Cocos2d-JS. This version can help you explore all its possibilities. You can find a full feature list in the [official document root page](http://www.cocos2d-x.org/docs/manual/framework/html5/en).

- **Cocos2d-JS Lite Version**: The Lite Version engine contains some core features of Cocos2d-JS. It's extremely easy to use and light as a feather. Its feature list is showing below:
    + Canvas rendering (WebGL is not supported)
    + Scenes and layers
    + Event manager
    + Scheduler
    + Sprites and textures
    + LabelTTF
    + Audio engine
    + Actions
    + Menu and menu items

- **Customized Version**: The customized version contains the features you chose.

### How to use

As briefly introduced before, the usage of single file Lite Version engine is just like other web libraries. You can simply embed the JavaScript file in your html page. You can refer to HelloWorld.html in the downloaded project.

Please pay attention to the timing of JavaScript file's loading, take the  HelloWorld sample as an example:

```
window.onload = function(){
    cc.game.onStart = function(){
        //...
    };
    cc.game.run("gameCanvas");
};
```

As you can see, `cc.game.onStart` and `cc.game.run` are wrapped in the onload callback of window, so that we can guarantee that the engine's JavaScript file have been loaded and Cocos2d-JS APIs is available for your game code. In the following chapters, we will discuss another classic workflow which doesn't require the window's onload callback because the engine controls are all loaded in the file loading process.

Please also be noted that all files in the HelloWorld project should be put onto a local or online web server to work correctly.

### Useful links

- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [Documentation root](http://cocos2d-x.org/docs/manual/framework/html5/en)
- [Github repository](https://github.com/cocos2d/cocos2d-js)
- [Online forum](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [Online test cases](http://cocos2d-x.org/js-tests/)

## About the Closure Compiler

You can use [Google Closure Compiler](https://developers.google.com/closure/compiler/) to compress all js files to a smaller size, even if you've downloaded the compressed version. The steps to do this are:

1. Download Closure Compiler's jar app
2. Configure the build.xml with your own configuration
3. Run `ant` in the terminal
4. Replace the embeded js files in HelloWorld.html with the single output file `game.min.js`

Please be noticed that you can not write any js code in your html file, all js codes should be compressed at the same time, otherwise errors will be triggered.

## Notice

While opening the HelloWorld.html, you will receive an error:
"Failed to load resource: the server responded with a status of 404 (Not Found)" for the file `project.json`

For now this is not a problem, you can simply ignore it. If you want to get rid of this error, you can create an empty `project.json` file.

## Next step

In this chapter we explained the workflow for pure web development. In the next tutorial we will introduce you the complete and powerful workflow of Cocos2d-JS for developing cross-platform games.