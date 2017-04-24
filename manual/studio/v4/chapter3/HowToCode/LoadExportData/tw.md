# **匯出資料在代碼中載入** #

 使用cocos v2.x發佈的CSB資源更換了載入方式，需要用CSLoader來載入。目前的cocos支援的語言有C++,js,lua， 編輯器默認匯出的格式為csb,json，下面來分語言介紹如何在引擎載入編輯器匯出的資料：
 
 C++（僅能載入csb數據）：

    #include "ui/CocosGUI.h"
    #include "Cocos Studio/Cocos Studio.h"

    using namespace cocos2d;
    using namespace Cocos Studio::timeline;
    
    void myScene::initFunc() 
    { 
         //通過csb創建場景
         Node *rootNode = CSLoader::createNode("MainScene.csb");
         this->addChild(rootNode);
         
         //通過csb創建動畫 
         ActionTimeline *action = CSLoader::createTimeline("MainScene.csb"); 
         rootNode->runAction(action); 
         
         //同一個檔創建的節點只能使用同一個檔創建的動畫。 
         //從第0幀迴圈播放動畫
         action->gotoFrameAndPlay(0,true);
    } 


Lua（僅能載入csb資料和lua檔）：
     
&emsp;&emsp;載入csb：

        --相關代碼在src\packages\mvc\ViewBase.lua文件
        function ViewBase:createResoueceNode(resourceFilename)
            if self.resourceNode_ then
                self.resourceNode_:removeSelf()
                    self.resourceNode_ = nil
            end
            -- 通過csb創建場景
            self.resourceNode_ = cc.CSLoader:createNode(resourceFilename)
            self:addChild(self.resourceNode_)
            
            -- 通過csb創建動畫
            local action = cc.CSLoader:createTimeline(resourceFilename)
            self.resourceNode_:runAction(action)
            
            --同一個檔創建的節點只能使用同一個檔創建的動畫。 
            --從第0幀迴圈播放動畫
            action:gotoFrameAndPlay(0, true)
        end

&emsp;&emsp;載入lua：

       --相關代碼在src\app\views\MainScene.lua文件
       -- 注：這裡 MainScene.lua 為發佈出來的 Lua 代碼檔。您可以在發佈目錄中找到它。
           MainScene.RESOURCE_FILENAME = "MainScene.csb" 修改為 
              MainScene.RESOURCE_FILENAME = "MainScene.lua"
    
       --相關代碼在src\packages\mvc\ViewBase.lua文件：    
       function ViewBase:createResoueceNode(resourceFilename)
           if self.resourceNode_ then
                self.resourceNode_:removeSelf()
                    self.resourceNode_ = nil
           end
           -- 通過lua創建場景
           local scene=require(resourceFilename)
           local gameScene=scene.create(nil)
           self.resourceNode_=gameScene.root
    
           -- 通過lua創建動畫
           gameScene.root:runAction(gameScene.animation)
    
           --同一個檔創建的節點只能使用同一個檔創建的動畫。 
           --從第0幀迴圈播放動畫
           gameScene.animation:gotoFrameAndPlay(0,true)
        end    

JS（僅能載入Json數據）：
   
    //相關代碼在src\app.js文件
    var HelloWorldLayer = cc.Layer.extend({
        sprite:null,
        ctor:function () {
            //////////////////////////////
            // 1. super init first
            this._super();
        
            /////////////////////////////
            // 2. add a menu item with "X" image, which is clicked to quit the program
            //    you may modify it.
            // ask the window size
            var size = cc.winSize;
            //通過json創建場景
            var mainscene = ccs.load(res.MainScene_json);
            //獲取動畫
            var action = mainscene.action;
            if(action){
                //綁定動畫
                mainscene.node.runAction(action);
                //同一個檔創建的節點只能使用同一個檔創建的動畫。 
                //從第0幀迴圈播放動畫
                action.gotoFrameAndPlay(0, true);
            }
            this.addChild(mainscene.node);
            return true;
        }
    });



**注意：**

1. 您可以在發佈工程目錄的res子目錄中找到發佈出來的csb/json檔。

2. 2.1及其以上版本的cocos匯出的資料，Cocos 2d-x 3.4及其以上版本和Cocos 2d-js 3.3及其以上的版本均可以載入。 

3. Cocos v2.x假定在編輯器裡邊的資原始目錄即遊戲的最終的目錄結構，因而如果你修改了匯出資源的目錄則需要編輯器目錄也需要跟著修改。也可以用addSearchPath來把你的路徑添加到FileUtils中，但要注意檔案名衝突。 
