# Cocos2d-JS v3.1 Beta release note

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS is Cocos2d-x engine's JavaScript version that includes Cocos2d-html5 and Cocos2d-x JavaScript Bindings. It equips your game with cross-browser and cross-platform abilities, accompanied by full Cocos2d-x features and simplified JavaScript friendly APIs.

Cocos2d-JS reinvented workflows for all platforms in v3.x, it provides a consistent development experience for whichever platform you want to distribute to, no matter web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single JavaScript code base, you can run your game on all web browsers and native platforms including Mac OS, Windows, iOS and Android. This will bring your game great opportunities in almost all channels of distribution. On the other hand, if you are only interested in casual games on the web, you can embed directly in your web page the Cocos2d-JS Lite Version which is extremely easy to use and light as a feather.

Furthermore, JavaScript friendly APIs make your game development experience a breeze - easy to code, test and distribute. In the meantime, Cocos2d-JS v3.x is super powerful along with all these cool new features: Editors Support, Assets Manager, Object Pool, JS to Objective-C/JAVA reflection, etc.

## Workflows

- Cross platforms developers can use Cocos Console to create projects, boost their development with web version engine and deploy games onto all native platforms and all browsers with Cocos Console.

- Casual web game developers can download the Lite Version and start to develop just like using other web frameworks (e.g. jQuery).

![](../../v3.0/release-note/workflows.jpg)

## Highlights

* Refactorization of the web engine with new renderer architecture, the new renderer has brought a great performance boost on Web engine, yet it hasn't been fully optimized. The next step is to focus on the optimization.
* Released Facebook SDK for Cocos2d-JS Beta2, its API have been significantly improved and stablized. API reference document have also been greatly improved.
* Automatically enabled WebGL on iOS 8 safari, the performance is incredibly enhanced compare to Canvas render mode.
* Upgraded MoonWarriors sample game with brand new graphical assets.
* Upgraded chipmunk to the newest version and improved bindings for chipmunk.

## Notice

For JSB build, there are some restrictions :

- [Android build] NDK version must be r9d
- [iOS build] Xcode version must be 5.1.1 +

## Download

- [Cocos2d-JS v3.1 Beta](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.1-beta.zip)
- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [Online test cases](http://cocos2d-x.org/js-tests/)

## More information

Read more about all the features and bug fixes

- [Cocos2d-JS v3.1 Beta changelog](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.1b/changelog/en)
- [Cocos2d-JS v3.1 upgrade guide](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/en)

## Upgrade your project from previous versions

If you want to upgrade your game based on v3.0 previous version to the 3.1 Beta version, you should follow these steps:

1. Download the Cocos2d-JS v3.1 Beta package.
2. Upgrade cocos command with `setup.py`.
3. Create a new project with `cocos new` command.
4. Replace the "src", "res", "index.html", "project.json", "main.js" etc with your old project.
5. Then you may need to refer to the upgrade guide to solve some API change issues.

## About Cocos2d family

- Cocos2d-JS v3.1 Beta uses Cocos2d-x 3.2 final as base of JSB solution
- Cocos2d-JS v3.1 Beta is temporarily not compatible with Cocos Code IDE
- Cocos2d-JS v3.1 Beta is compatible with Cocos Studio v1.2 - v1.5.0.1

With any problems you might have, our communities are happy to help:

- [Online forum](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [Document root](http://cocos2d-x.org/docs/manual/framework/html5/en)
- [Github repository](https://github.com/cocos2d/cocos2d-js)