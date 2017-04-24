Upgrade Guide from Cocos2d-html5 v2.2 to v2.2.1
===============================================

Changes
-------

* cc.EGLView and most render classes have been re-written to adapt multiple resolution resources in-order to optimize performance on mobile browsers.
There have two types of browsers:

#### For full screen

* If full-screen game, just delete all elements of body’s children, and append game canvas to body element in html page.

    ```
    <body style=“padding:0; margin: 0; background: #000;”>
        <canvas id=“gameCanvas” width=“800” height=“480”></canvas>
        <script src=“cocos2d.js”></script>
    </body>
    ```

* Then if you want to support auto resizing game size according to browser screen, just add one call in main.js:

    ```
    cc.EGLView.getInstance.\_resizeWithBrowserSize;
    cc.EGLView.getInstance.setDesignResolutionSize;
    ```

#### No full screen

* However, the PC browsers always has so wide screen, developers would like to set the size of game canvas by themselves,

For example: developers want to add some dom elements around game canvas to decorate page, or add some adverts in game page.

The config file looks like this:

* index.html

    ```
    <body style=“text-align: center;background: #f2f6f8;”>
        <img style="clear:both;margin-bottom: 20px" src="res/Images/cocos2dbanner.png"/>
        <div></div>
        <div style=“display:inline-block;width:auto; margin: 0 auto; background: black; position:relative; border:5px solid black; border-radius: 10px; box-shadow: 0 5px 50px #333”>
            <canvas id=“gameCanvas” width=“800” height=“480”></canvas>
        </div>
        <script src=“tests-boot-html5.js”></script>
    </body>
    ```

* main.js

    ```
    applicationDidFinishLaunching:function {
        // ...
        // initialize director
        var director = cc.Director.getInstance;
        cc.EGLView.getInstance.setDesignResolutionSize;
        // ...
        return true;
    }
    ```

#### Added cc.Screen

* It uses for enter/exit FullScreen mode.

For example:

    ```
    //change the screen to full mode.
    cc.Screen.getInstance().requestFullScreen(cc.canvas, this.onFullScreenChangeFunc);
    //exit the full mode.       
    cc.Screen.getInstance().exitFullScreen()            
    ```