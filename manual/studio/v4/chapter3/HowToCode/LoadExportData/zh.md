# **导出数据在代码中加载** #

 使用cocos v2.x发布的CSB资源更换了加载方式，需要用CSLoader来加载。目前的cocos支持的语言有C++,js,lua， 编辑器默认导出的格式为csb,json，下面来分语言介绍如何在引擎加载编辑器导出的数据：
 
 C++（仅能加载csb数据）：

	#include "ui/CocosGUI.h"
	#include "Cocos Studio/Cocos Studio.h"

	using namespace cocos2d;
	using namespace Cocos Studio::timeline;
	
	void myScene::initFunc() 
	{ 
		 //通过csb创建场景
		 Node *rootNode = CSLoader::createNode("MainScene.csb");
		 this->addChild(rootNode);
		 
		 //通过csb创建动画 
		 ActionTimeline *action = CSLoader::createTimeline("MainScene.csb"); 
		 rootNode->runAction(action); 
		 
		 //同一个文件创建的节点只能使用同一个文件创建的动画。 
		 //从第0帧循环播放动画
		 action->gotoFrameAndPlay(0,true);
	} 


Lua（仅能加载csb数据和lua文件）：
     
&emsp;&emsp;加载csb：

		--相关代码在src\packages\mvc\ViewBase.lua文件
		function ViewBase:createResoueceNode(resourceFilename)
			if self.resourceNode_ then
				self.resourceNode_:removeSelf()
					self.resourceNode_ = nil
			end
			-- 通过csb创建场景
			self.resourceNode_ = cc.CSLoader:createNode(resourceFilename)
			self:addChild(self.resourceNode_)
			
			-- 通过csb创建动画
			local action = cc.CSLoader:createTimeline(resourceFilename)
			self.resourceNode_:runAction(action)
			
			--同一个文件创建的节点只能使用同一个文件创建的动画。 
	        --从第0帧循环播放动画
			action:gotoFrameAndPlay(0, true)

		    assert(self.resourceNode_, string.format("ViewBase:createResoueceNode() - load resource node from file \"%s\" failed", resourceFilename))
            self:addChild(self.resourceNode_)
		end

&emsp;&emsp;加载lua：

	   --相关代码在src\app\views\MainScene.lua文件
	   -- 注：这里 MainScene.lua 为发布出来的 Lua 代码文件。您可以在发布目录中找到它。
		   MainScene.RESOURCE_FILENAME = "MainScene.csb" 修改为 
	   	   MainScene.RESOURCE_FILENAME = "MainScene.lua"
	
	   --相关代码在src\packages\mvc\ViewBase.lua文件：	
	   function ViewBase:createResoueceNode(resourceFilename)
	       if self.resourceNode_ then
				self.resourceNode_:removeSelf()
					self.resourceNode_ = nil
		   end
		   -- 通过lua创建场景
	       local scene=require(resourceFilename)
		   local gameScene=scene.create(nil)
		   
	       -- 通过lua创建动画
	       gameScene.root:runAction(gameScene.animation)
	
	       --同一个文件创建的节点只能使用同一个文件创建的动画。 
	       --从第0帧循环播放动画
	       gameScene.animation:gotoFrameAndPlay(0,true)

		   self.resourceNode_=gameScene.root

		   assert(self.resourceNode_, string.format("ViewBase:createResoueceNode() - load resource node from file \"%s\" failed", resourceFilename))
           self:addChild(self.resourceNode_)
	    end    

JS（仅能加载Json数据）：
   
	//相关代码在src\app.js文件
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
		    //通过json创建场景
		    var mainscene = ccs.load(res.MainScene_json);
			//获取动画
		    var action = mainscene.action;
			if(action){
                //绑定动画
			    mainscene.node.runAction(action);
                //同一个文件创建的节点只能使用同一个文件创建的动画。 
                //从第0帧循环播放动画
			    action.gotoFrameAndPlay(0, true);
			}
            this.addChild(mainscene.node);
		    return true;
		}
	});



**注意：**

1. 您可以在发布工程目录的res子目录中找到发布出来的csb/json文件。

2. 2.1及其以上版本的cocos导出的数据，Cocos 2d-x 3.4及其以上版本和Cocos 2d-js 3.3及其以上的版本均可以加载。 

3. Cocos v2.x假定在编辑器里边的资源目录即游戏的最终的目录结构，因而如果你修改了导出资源的目录则需要编辑器目录也需要跟着修改。也可以用addSearchPath来把你的路径添加到FileUtils中，但要注意文件名冲突。 
