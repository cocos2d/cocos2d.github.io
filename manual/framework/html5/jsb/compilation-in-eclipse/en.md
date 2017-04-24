#Compile Android project in eclipse

This document will show you how to compile a Cocos2d-JS Android project in eclipse.

##Requirements:
- ADT bundle
- NDK r9d
- python 2.7

##Create a Project
As we always did, just run `cocos new MyGame -l js -d ~/workspace` in terminal.

##Import the project in eclipse
Open your eclipse in ADT bundle. click File->new->other, and select `Android Project from Existing Code`.

![](./res/1.png)

Select the `~/workspace/MyGame` folder in Root Directory. You will see many projects, we just select `MyGame` and `libcoocs2dx` here.

Then you will see the two projects have been imported.

![](./res/2.png)

##Setup an NDK builder in eclipse
We need a native builder to compile the C++ code before we generate the apk. Right click on `MyGame` and select `Properties`.

![](./res/3.png)

In `Builders`, click `New..`, select `program` and click OK button.

![](./res/4.png)

Now we begin to setup the builder. Click `Browse Workspace` to set the command location, select the `build_native.py`.

![](./res/5.png)

Click `Browse Workspace` to set the working directory, select MyGame and click OK.

![](./res/6.png)

add `-b release` or `-b debug` as you wish(default is debug) in Arguments.

![](./res/7.png)

Switch to Refresh tab , select `Refresh resources upon completion`.

![](./res/8.png)

Switch to Environment tab, click `New...`, add `NDK_ROOT` here.

![](./res/9.png)

Now we are finished to setup the Native builder, click OK.

##Run

Just clean & run as usual. The needed resources will be copied to assets folder, native code will be compiled as you can see in console, and finally generate the apk.