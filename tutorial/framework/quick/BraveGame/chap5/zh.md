# 使用Quick-Cocos2d-x搭建一个横版过关游戏(五)

在上一章中我们讲到了怎么在游戏中添加血量条等元素，接下来我们来学下怎么在Quick中使用物理引擎。

## Quick中使用的物理引擎

在Quick中通过CCPhysicsWorld类来使用物理引擎Box2D和Chipmunk(目前仅支持Chipmunk)。至于Box2D和Chipmunk的优劣问题，在这里我就不比较了，敢兴趣的同学可以自己度娘。因为Quick目前只支持Chipmunk，所以大家也不用想太多了。

### CCPhysicsWorld接口

关于CCPhysicsWorld类使用，大家可以打开Quick里面的Smaples下的physics，里面有一个简单的物理引擎的使用例子。打开文件`lib/cocos2d-x/external/chipmunk/cocos2dx_support`下的CCPhysicsWorld.h文件，里面包含了CCPhysicsWorld类的所有定义。我们在Lua里使用时只需要直接调用里面的接口就可以了。在Quick的physics例子中创建一个PhysicsWorld是这样写的：

	-- create physics world
    self.world = CCPhysicsWorld:create(0, GRAVITY)
    
    -- add world to scene
    self:addChild(self.world)

通过调用CCPhysicsWorld:create可以创建一个物理世界，create的两个参数分别为x轴上和y轴上的重力因子。当为负数时表示往左方或者是下方运动，当为正数时表示往右方或者上方运动，绝对值的数值越大，重力加速度越大。用过Chipmunk的同学知道，Chipmunk里有几种Body的类型。

- 圆形  通过调用`createCircleBody`来创建一个圆形的Body
- 矩形  通过调用`createBoxBody`来创建一个矩形的Body
- 多边形 通过调用`createPolygonBody`来创建一个多边形的Body

用法如下：

	-- 创建一个矩形碰撞区域
	local leftWallBody = self.world:createBoxBody(0, WALL_THICKNESS, display.height)
	
	-- 创建一个圆形碰撞区域
	local coinBody = self.world:createCircleBody(COIN_MASS, COIN_RADIUS)
	
通过`createXXXBody`创建出来的Body要通过bind方法绑定到精灵上。为了更好的模拟物理环境，也可以通过以下接口来设置一些系数：

- body:setFriction(friction) 摩擦系数 0-1.0
- body:setElasticity(elasticity) 反弹系数 0-1.0
- body:setIsSensor(isSensor) 是否可以感应
- body:setVelocity(velocityX, velocityY) 速度
- body:setAngleVelocity(velocity) 角速度

比如你的物体从一个斜坡上下滑时，你可以设置一个摩擦系数；如果你的物体是从高处掉落，那么你可以给他设置一个反弹系数。这些参数设置能够更真实的反应物理世界里的一些物理特性。

创建Body时需要注意的是函数的第一个参数，当mass的值<=0时表示是静态刚体，当mass的值大于0表示是普通刚体。

### CCPhysicsWorld碰撞检测

在Quick中增加碰撞检测，有这么几个步骤：

- body:setIsSensor(true): 设置能感应Body
- body:setCollisionType(碰撞类型): 设置Body的碰撞类型，这个参数当有不同的刚体时，必须要设置不同的整型值。
- world:addCollisionScriptListener(事件响应函数,碰撞类型1,碰撞类型2): 碰撞类型1和碰撞类型2，是你想要检测的碰撞发生的两个物体。

比如我们现在有两个物体，分别为类型1和类型2，我们可以这样写：

	world:addCollisionScriptListener(handler(self, self.onCollision), 1, 2)
	
	function ClassA:onCollision(eventType, event)
		if eventType == 'begin' then
		elseif eventType == 'preSolve' then
		elseif eventType == 'postSolve' then
		elseif eventType == 'separate' then
		end
	end

碰撞响应函数会传入两个参数，一个为eventType，有下面几种可能的值：

- `begin`: 碰撞开始
- `preSolve`: 持续碰撞(相交)，可以设置相交时独自的摩擦，弹力等
- `postSolve`: 调用完preSolve后，做后期处理，比如计算破坏等等
- `separate`: 分开，当删除一个shape时也会调用

通过这几个事件，能够对物体之间的碰撞做出及时的反应。

## 在游戏中添加碰撞

### 给游戏添加元素

为了更好的添加效果，我们还要给玩家角色和敌人对象添加被击中的效果，并且在被击中后用户要掉一部分血。怎么添加在前面的章节中已经讲解过，我们就不细说了，不明白的可以参看[代码](https://github.com/rainswan/Brave)。

### 添加碰撞代码

首先，我们先创建一个CCPhysicsWorld对象，为了方便管理，我们新建了一个类PhysicsManager，
代码如下：

	local world = nil
    
    local PhysicsManager = class("PhysicsManager", function()
        -- 创建
        return CCPhysicsWorld:create(0, 0)
    end)
    
    CollisionType = {}
    CollisionType.kCollisionTypePlayer = 1
    CollisionType.kCollisionTypeEnemy = 2
    
    function PhysicsManager:getInstance()
        if world == nil then
            world = PhysicsManager.new()
        end
    
        return world
    end
    
    return PhysicsManager
    
这样就创建了一个PhysicsManager的单例对象。

接下来，我们再在每个玩家和敌人对象中添加碰撞的刚体，比如，我们在玩家对象中添加如下语句：

	local world = PhysicsManager:getInstance()
    self.body = world:createBoxBody(1, self:getContentSize().width/2, 	self:getContentSize().height)
	--    self.body:bind(self)
    self.body:setCollisionType(CollisionType.kCollisionTypePlayer)
    self.body:setIsSensor(true)

    self:scheduleUpdate();
    self:addNodeEventListener(cc.NODE_ENTER_FRAME_EVENT, function() 	self.body:setPosition(self:getPosition()) end)

这样就给Player添加了一个大小为Player的1/2宽度，高度为Player的高度的矩形刚体。这里要注意的是被注释掉的
	
	self.body:bind(self)
	
Quick是更新body和精灵坐标的方式有两种，一种是通过将精灵绑定到body上，然后移动body；还有一种是通过移动精灵，在精灵内通过update来更新body的坐标。我们这游戏里采用了第二种方式。

在添加完碰撞检测后，我们再回到MainScene中，在MainScene:ctor中添加如下代码：

	-- 获取world并且添加到Scene中
	local world = PhysicsManager:getInstance()
    self:addChild(world)

	-- 启动世界更新
    world:start()
    
    -- 显示物理引擎调试层
    self.worldDebug = world:createDebugNode()
    self:addChild(self.worldDebug)
    
    -- 添加碰撞检测函数
    world:addCollisionScriptListener(handler(self, self.onCollision) ,
        CollisionType.kCollisionTypePlayer, CollisionType.kCollisionTypeEnemy)
        
为了在碰撞时检测事件，我们添加MainScene:onCollision函数：

	function MainScene:onCollision(eventType, event)
 
    	if eventType == 'begin' then
        	self.canAttack = true
        	local body1 = event:getBody1()
        	local body2 = event:getBody2()

        	if body1:getCollisionType() == CollisionType.kCollisionTypePlayer and body2 then
            	body2.isCanAttack = true
        	end
    	elseif eventType == 'separate' then
        	self.canAttack = false
        	local body1 = event:getBody1()
        	local body2 = event:getBody2()

        	if body1:getCollisionType() == CollisionType.kCollisionTypePlayer and body2 then
            	body2.isCanAttack = false
        	end
    	end
	end
	
这里添加个isCanAttack，这个是为了在接触时表示玩家可以砍敌人了，离开以后玩家是不能砍敌人的。我们稍微更改下MainScene:clickEnemy函数：

	function MainScene:clickEnemy(enemy)
        if self.canAttack then
            if self.player:getState() ~= "attack" then
                self.player:doEvent("clickEnemy")
                print("enemy:canAttack " .. tostring(enemy:getCanAttack()))
                if enemy:getCanAttack() and enemy:getState() ~= 'hit' then
                    enemy:doEvent("beHit", {attack = self.player.attack})
                end
            end
        else
            local x,y = self.player:getPosition()
            self.player:walkTo({x=x, y=y})
            if self.player:getState() ~= 'walk' then
                self.player:doEvent("clickScreen")
            end
        end
    end
    
这样一来，只有在碰撞时，玩家才能砍敌人。当然现在的敌人是不会动的，怎么解决敌人动的问题，就看大家的智慧了。嘿嘿！