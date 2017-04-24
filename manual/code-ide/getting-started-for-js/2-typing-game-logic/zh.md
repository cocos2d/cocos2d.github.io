编写游戏逻辑
=======

按照[《新建一个cocos2d-x JavaScript游戏》](../1-creating-a-cocos-game/zh.md)的步骤新建游戏工程后，接下来就可以编写游戏逻辑了。在此之前，先来了解一下新工程自带的示例代码的逻辑。

-------------------

1. 工程目录下有一个名字为[config.json](../../function-guides/runtime/config/zh.md)的配置文件，可以在Code IDE中双击打开。配置中"entry"字段设置了游戏的入口文件为"main.js"。  

        "init_cfg": {
            ...
            "entry": "main.js",
            ...
        }
2. 双击打开根目录下的"main.js"文件，里面主要定义了"cc.game.onStart"函数，在此函数中加载游戏的场景。在文件最后开始执行"cc.game.run"函数，开始游戏执行。
3. 在进入本游戏的场景前，引擎会读取根目录下的"project.json"文件，根据里面定义的"jsList"依次载入游戏脚本。

        "jsList" : [
            "src/resource.js",  // resources definition
            "src/app.js"        // game scene definition
        ]
3. 之后引擎调用在"main.js"中定义的"onStart"函数，开始执行游戏逻辑。"onStart"函数中主要的步骤是：设置游戏设计分辨率和屏幕适配模式；然后构建一个"HelloWorldScene"对象，通过"Director"运行此对象。  

        cc.view.adjustViewPort(true);
        cc.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
        //load resources
        cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new HelloWorldScene());
        }, this);

4. "HelloWorldScene"是在"src/app.js"文件中定义的。在此文件中，使用cocos2d-js引擎的API构建了一个"Scene"，其中添加了一个"Layer"。
5. 可以在模拟器的菜单中选择不同的分辨率，查看游戏在不同分辨率的屏幕上的表现效果。模拟器的窗口初始大小是在[config.json](../../function-guides/runtime/config/zh.md)中配置的。  
  ![](./res/js-multi-reso.jpg)
5. Code IDE为代码编写提供了方便的cocos2d-js引擎API自动提示功能，只要在代码中输入相应的前缀或单词就可以看到相关的API和函数说明，不过如果代码中有语法错误的话，可能会因为语法树构建失败而无法正确提示。  
  ![](./res/js-autocode.jpg)
6. 此外，编写游戏需要添加一些图片等做为显示图像的资源，只要把需要的图片拖动到工程管理界面的某个目录下就会复制一份图片到此目录下。而且Code IDE提供了资源路径自动提示功能，方便在代码中输入资源路径。  
  ![](./res/js-autopath.jpg)

-----------------
关于如何使用引擎API的更多资料可以在引擎的相关文档中找到，在此不再多述。

在编写完一段逻辑后，需要[《调试游戏代码》](../3-debugging/zh.md)，验证一下代码的效果正确与否。

