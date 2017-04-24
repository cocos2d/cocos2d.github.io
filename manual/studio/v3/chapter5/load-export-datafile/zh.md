#如何加载cocos 2.0版本生成的数据
使用Cocos v2.0发布的CSB资源更换了加载方式，需要用CSLoader来加载。CSLoader在Cocos2d-x 3.3 RC0开始提供。目前的cocos支持的语言有C++,js,lua：
 
下面提供的分别为C++,js,lua的代码
###1.	C++
    #include "ui/CocosGUI.h"//UI相关的头文件 
    #include"cocostudio/CocoStudio.h"//在CocosStudio.h 头文件中已经包含了cocos所需要的各个头文件(除CocosGUI)因此我们使用Cocos仅需要包含他就可以 
    using namespace cocos2d;//CSLoader位于cocos2d命名空间。 
    using namespace cocostudio::timeline;//动画相关的类位于cocostuio::timeline当中 
  
  
    void myScene::initFunc() 
    { 
    //以下是加载相关的代码： 
    Node *rootNode = CSLoader::createNode("MainScene.csb");//传入cocos2.x的资源路径 
    this->addChild(rootNode);//假设this是即将显示的scene 
  
    //加载动画： 
    ActionTimeline *action = CSLoader::createTimeline("MainScene.csb"); 
    rootNode->runAction(action); 
    //注!!!：同一个文件创建的节点只能使用同一个文件创建的动画。 
    //嵌套节点的动画会自动加载动画，可以用嵌套节点->getActionByTag(嵌套节点->getTag()) 来获取动画 
  
  
    //播放动画： 
    action->gotoFrameAndPlay(0,60,true);//从第0帧到60帧循环播放。还有其他重载函数，具体看源码。 
  
  
    //帧事件监听 
    action->setFrameEventCallFunc(CC_CALLBACK_1(myScene::onFrameEvent, this)); 
    //关于CC_CALLBACK_1需要点C++11的基础才能知道是咋回事，这里只要照着写就行。想了解可以查下std::Bind 
    } 
    void myScene::onFrameEvent(Frame* frame)//固定的格式 
    { 
     EventFrame* evnt = dynamic_cast<EventFrame*>(frame); 
     if(!evnt) 
        return; 
  
    std::string str = evnt->getEvent(); 
     if (str == "xxoo") 
     { 
        CCLOG("come on baby"); 
     } 
    }
###2. js
resource.js

    var res=
    {
	 HelloWorld_png:"res/HelloWorld.png",
	 MainScene_json:"res/MainScene.json"
    };

    var g_resource=[];
    for(var i inres)
    {
	 g_resource.push(res[i]);
    }

app.js

    var HelloWorldLayer=cc.Layer.extend{{
    sprite:null,
    ctor:function()
     {
     this._super();
     var size=cc.winSize;
     var mainscene=ccs.load(res.MainScene_json);
     var action = mainscene.action;

        if(action){

        	mainscene.node.runAction(action);

        	action.gotoFrameAndPlay(0,true);

        }

     this.addChild(mainscene.node);

     return true;
     }
     }};

###3. lua

    local function RunExportedCSB(csbFileName)
       -- get root node from csb file.
       local node = cc.CSLoader:createNode(csbFileName)
       -- run animation in the scene
       local action = cc.CSLoader:createTimeline(csbFileName)
       node:runAction(action)
       action:gotoFrameAndPlay(0, true)

       -- add csb returned node to scene.
       local runningScene = cc.Director:getInstance():getRunningScene()
       if runningScene then
          runningScene:addChild(node)
       end
    end


相关代码可参考 src\app\views\MainScene.lua和 src\packages\mvc\ViewBase.lua文件。

####注: 

1. 您可以在发布工程目录的 res 子目录中找到发布出来的csb文件。

2. 2.1及其以上版本的cocos导出的数据，Cocos2d-x 3.4及其以上版本和cocos2d-js 3.3及其以上的版本均可以加载。 

3. Cocos v2.x 假定在编辑器里边的资源目录即游戏的最终的目录结构，因而如果你修改了导出资源的目录则需要编辑器目录也需要跟着修改。也可以用addSearchPath来把你的路径添加到FileUtils中，但要注意文件名冲突。 