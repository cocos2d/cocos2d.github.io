#Load Exported Data#

 CSB files, published by Cocos Studio v2.0, need to be loaded with CSLoader. CSLoader has been available from Cocos2d-x 3.3 RC0. Currently Cocos Studio supports C++ and JS. The following are C ++, JS code.
 
### C++ (only support CSB data)

	#include "ui/CocosGUI.h"
	#include "Cocos Studio/Cocos Studio.h"

	using namespace cocos2d;
	using namespace Cocos Studio::timeline;
	
	void myScene::initFunc() 
	{ 
		 Node *rootNode = CSLoader::createNode("MainScene.csb");
		 this->addChild(rootNode);
		 
		 ActionTimeline *action = CSLoader::createTimeline("MainScene.csb"); 
		 rootNode->runAction(action); 
		 
		 action->gotoFrameAndPlay(0,true);
	} 


### Lua (support CSB and Lua data)

**To load CSB** 
     
			--相关代码在src\packages\mvc\ViewBase.lua文件
		function ViewBase:createResoueceNode(resourceFilename)
			if self.resourceNode_ then
				self.resourceNode_:removeSelf()
					self.resourceNode_ = nil
			end

			self.resourceNode_ = cc.CSLoader:createNode(resourceFilename)
			self:addChild(self.resourceNode_)
			
			local action = cc.CSLoader:createTimeline(resourceFilename)
			self.resourceNode_:runAction(action)
			
			action:gotoFrameAndPlay(0, true)
		end

**To load Lua** 

	   -- src\app\views\MainScene.lua: 
		   MainScene.RESOURCE_FILENAME = "MainScene.csb" change to  
	   	   MainScene.RESOURCE_FILENAME = "MainScene.lua"
	
	   --src\packages\mvc\ViewBase.lua：	
	   function ViewBase:createResoueceNode(resourceFilename)
	       if self.resourceNode_ then
				self.resourceNode_:removeSelf()
					self.resourceNode_ = nil
		   end

	       local scene=require(resourceFilename)
		   local gameScene=scene.create(nil)
		   self.resourceNode_=gameScene.root
	
	       gameScene.root:runAction(gameScene.animation)
	
	       gameScene.animation:gotoFrameAndPlay(0,true)
	    end    

### JS (only support JSON)
   
	//src\app.js:
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

		    var mainscene = ccs.load(res.MainScene_json);

		    var action = mainscene.action;
			if(action){

			    mainscene.node.runAction(action);

			    action.gotoFrameAndPlay(0, true);
			}
            this.addChild(mainscene.node);
		    return true;
		}
	});

***Notes*** 

*1 You can find the published csb/ json files in "res" directory under published projects folder.* 

*2 Data exported from Cocos Studio v2.1+, Cocos2d-x v3.4+ and Cocos 2d-js v3.3+ can be loaded.*

*3 Cocos Studio v2.x assumes that the resources’ directory of the editor is same as the directory of the game. If the directory of the exported files has been changed, so has the directory of the editor. You can also add the file path into FileUils with addSearchpath, and it should be noted that file name conflicts are not supported.* 
