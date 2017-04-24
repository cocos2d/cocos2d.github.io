##create##

모든 createWithXXX 함수를 통합된 create 함수와 다른 파라메터로 재설계했습니다.

###1,Sprite (4 ways)###

(1) 이미지 경로로 스프라이트 생성

    //파라메터:이미지 경로
    var sprite1 = cc.Sprite.create("res/HelloHTML5World.png");

    //파라메터:이미지 경로, cc.rect
    var sprite2 = cc.Sprite.create("res/HelloHTML5World.png", cc.rect(0, 0, 480, 320));

(2) 프레임 이름으로 스프라이트 생성. 주의: 반드시 앞에 #을 추가해줘야 합니다

    //파라메터:프레임 이름
    var sprite = cc.Sprite.create('#grossini_dance_01.png');

(3) 스프라이트 프레임으로 스프라이트 생성

    var spriteFrame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
    //파라메터:cc.SpriteFrame
    var sprite = cc.Sprite.create(spriteFrame);

(4) 텍스쳐로 스프라이트 생성

    var texture = cc.textureCache.addImage("HelloHTML5World.png");
    //파라메터:texture
    var sprite1 = cc.Sprite.create(texture);
    //파라메터:texture,  cc.rect
    var sprite2 = cc.Sprite.create(texture,  cc.rect(0, 0, 480, 320));

###2,LabelTTF (2 ways)###

(1) 폰트, 사이즈, 다른 파라메터로 라벨 생성

    //파라메터:문자열, 폰트명, 폰트사이즈, 라벨의 넓이, 정렬
    var myLabel = cc.LabelTTF.create('label text',  'Times New Roman',  32,  cc.size(320, 32),  cc.TEXT_ALIGNMENT_LEFT);

(2) cc.FontDefinition으로 라벨 생성

    var fontDef = new cc.FontDefinition();
    fontDef.fontName = "Arial";
    fontDef.fontSize = "32";
    //파라메터:문자열, cc.FontDefinition
    var myLabel = cc.LabelTTF.create('label text',  fontDef);

###3,Animation (3 ways)###

(1) 빈 애니메이션 생성

    //no parameter
    var animation1 = cc.Animation.create();

(2) 스프라이트 프레임으로 애니메이션 생성

    var spriteFrameArr = [];
    var spriteFrame = cache.getSpriteFrame("grossini_dance_01.png");
    spriteFrameArr.push(spriteFrame);
    //파라메터:스프라이트 프레임
    var animation1 = cc.Animation.create(spriteFrameArr);
    //파라메터:스프라이트 프레임, 지연 시간
    var animation2 = cc.Animation.create(spriteFrameArr,  0.2);
    //파라메터:스프라이트 프레임, 지연 시간, 반복 횟수
    var animation3 = cc.Animation.create(spriteFrameArr,  0.2, 2);

(3) 애니메이션 프레임으로 에니메이션 생성

    var animationFrameArr = [];
    var animationFrame = new cc.AnimationFrame();
    aFrame1.initWithSpriteFrame(spriteFrame1, 0.5);
    animationFrameArr.push(animationFrame);
    //파라메터:애니메이션 프레임
    var animation1 = cc.Animation.create(animationFrameArr);
    //파라메터:애니메이션 프레임, 지연 시간
    var animation2 = cc.Animation.create(animationFrameArr,  0.2);
    //파라메터:애니메이션 프레임, 지연 시간, 반복 횟수
    var animation3 = cc.Animation.create(animationFrameArr,  0.2, 2);

###4,SpriteBatchNode (2 ways)###

(1) 이미지 경로로 생성

    //파라메터:이미지 경로, 최대 자식 용량
    var spriteBatchNode = cc.SpriteBatchNode.create("res/animations/grossini.png",  50);

(2) 텍스쳐로 생성

    var texture = cc.textureCache.addImage("res/animations/grossini.png");
    //파라메터:텍스쳐, 최대 자식 용량
    var spriteBatchNode = cc.SpriteBatchNode.create(texture, 50);

###5,SpriteFrame (2 ways)###

(1) 이미지 경로로 생성

    //파라메터:이미지 경로, cc.rect
    var frame1 = cc.SpriteFrame.create("res/grossini_dance.png", cc.rect(0, 0, 90, 128));
    //파라메터:이미지 경로, cc.rect, 회전, 오프셋, 원래 사이즈
    var frame2 = cc.SpriteFrame.create("res/grossini_dance.png", cc.rect(0, 0, 90, 128), false, 0, cc.size(90, 128));

(2) 텍스쳐로 생성

    var texture = cc.textureCache.addImage("res/grossini_dance.png");
    //파라메터:이미지 경로, cc.rect
    var frame1 = cc.SpriteFrame.create(texture,  cc.rect(0, 0, 90, 128));
    //파라메터:이미지 경로, cc.rect, 회전, 오프셋, 원래 사이즈
    var frame2 = cc.SpriteFrame.create(texture,  cc.rect(0, 0, 90, 128), false, 0, cc.size(90, 128));

###6,ParticleSystem (2 ways)###

(1) 총합으로 생성

    //파라메터: 총합
    var particle = cc.ParticleSystem.create(50);
    
(2) 텍스쳐로 생성

    //파라메터: plist 파일 경로
    var particle = cc.ParticleSystem.create("res/particle.plist");

###8,PhysicsSprite (4 ways)###

(1) 이미지 경로로 생성

    //파라메터:이미지 경로
    var physicsSprite1 = cc.PhysicsSprite.create("res/HelloHTML5World.png");

    //파라메터:이미지 경로, cc.rect
    var physicsSprite2 = cc.PhysicsSprite.create("res/HelloHTML5World.png", cc.rect(0, 0, 480, 320));

(2) 프레임 이름으로 생성. 주의: 앞에 반드시 #을 붙여줘야 합니다

    //파라메터: 프레임 이름
    var physicsSprite = cc.PhysicsSprite.create('#grossini_dance_01.png');

(3) 스프라이트 프레임으로 생성

    var spriteFrame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
    //파라메터:cc.SpriteFrame
    var physicsSprite = cc.PhysicsSprite.create(spriteFrame);

(4) 텍스쳐로 생성

    var texture = cc.textureCache.addImage("HelloHTML5World.png");
    //파라메터:텍스쳐
    var physicsSprite1 = cc.PhysicsSprite.create(texture);
    //파라메터:텍스쳐, cc.rect
    var physicsSprite2 = cc.PhysicsSprite.create(texture,  cc.rect(0, 0, 480, 320));

###9,TextureAtlas (2 ways)###

(1) 이미지 경로로 생성

    //파라메터:이미지 경로, 용량
    var textureAtlas = cc.TextureAtlas.create("res/animations/grossini.png",  50);

(2) 텍스쳐로 생성

    var texture = cc.textureCache.addImage("res/animations/grossini.png");
    //파라메터:텍스쳐, 용량
    var textureAtlas = cc.TextureAtlas.create(texture, 50);
