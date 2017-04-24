#Cocos2d-JS v3.0의 오브젝트 생성과 클래스 상속#

Cocos2d-JS의 오브젝트 생성은 언제나 각 클래스의 `create` 함수를 사용하는 형태로 Cocos2d-x와 같은 방식으로 이루어집니다. Cocos2d-JS v3.0에서 오브젝트를 생성하기 위한 고전적인 방법을 소개하고자 합니다: `new` 연산자. 또한 v3.0 알파1에서 JSB를 사용하길 원하신다면 완벽한 해결책을 찾을 수 없었기 때문에 많은 엔진 클래스를 상속하여 사용할 수 없었습니다. 그러나 v3.0 알파2에서 이 문제를 해결했습니다. `new` 오퍼레이터 지원로 인해서 상속 코드도 훨씬 쉬워졌습니다.

이 문서에서 이것들을 사용하는 방법뿐만 아니라 몇몇 구현(implementation) 설명을 소개합니다.

##1. create 함수의 디프리케이트(Deprecated)##

오브젝트를 생성하는 쉬운 방법을 지원하면서 모든 `create`와 `createWithXXX` 함수는 디프리케이트되었습니다. `new` 생성자는 예전 `create` 함수를 위한 모든 파라메터를 지원합니다. 

##2. 생성자(Constructor)##

클래스 생성자를 호출하기 위해 `new` 연산자를 사용할 수 있습니다. 예를 들어 개발자가 `new` 연산자로 스프라이트 오브젝트를 생성할 때 HTML5와 JSB를 모두 지원하지만 이들의 구현은 꽤 다릅니다.

	var sprite = new cc.Sprite(filename, rect);
	var sprite = new cc.Sprite(texture, rect);
	var sprite = new cc.Sprite(spriteFrameName);

HTML5 엔진에서 모든 엔진 클래스의 `ctor` 함수가 create 함수와 같은 파라메터를 지원하도록 재설계했습니다.

JSB에서는 cc.Sprite의 `new` 연산자를 사용하는 것으로 인해 실제로는 C++ 레벨의 js\_cocos2dx\_Sprite\_constructor를 호출합니다. 이런 C++ 함수에서 우리는 스프라이트를 위한 메모리를 할당(allocate)하고 오토릴리즈 풀(autorelease pool)에 추가하며 JSB가 지원하는 initWithXXX 함수를 사용하여 초기화하기 위한 자바스크립트 레벨의 `_ctor` 함수를 실행합니다:

| Javascript | JSB | Cocos2d-x |
| ---------- |-----|-----------|              
| cc.Sprite.initWithSpriteFrameName | js_cocos2dx_Sprite_initWithSpriteFrameName | cocos2d::Sprite::initWithSpriteFrameName |
| cc.Sprite.initWithSpriteFrame | js_cocos2dx_Sprite_initWithSpriteFrame | cocos2d::Sprite::initWithSpriteFrame |
| cc.Sprite.initWithFile | js_cocos2dx_Sprite_initWithFile | cocos2d::Sprite::initWithFile |
| cc.Sprite.initWithTexture | js_cocos2dx_Sprite_initWithTexture | cocos2d::Sprite::initWithTexture |

이 프로세스의 진행 과정은 다음과 같습니다:

![](res/2.PNG)


##3. 상속(Inheritance)##

Cocos2d-HTML5 v2.x에서는 클래스를 확장할 때 다음과 같이 `create` 함수에서 다른 init 함수를 사용할 필요가 있었습니다.

	var MySprite = cc.Sprite.extend({
		ctor:function(){
			this._super();
			// 초기화
		}
		// 속성과 함수 추가
	});
	MySprite.create = function(filename,rect){
		var sprite = new MySprite();
		// texture와 rect로 초기화
		sprite.initWithTexture(fileName, rect);
		return sprite;
	};
    
    // 스프라이트 생성
    var sprite = MySprite.create(texture,cc.rect(0,0,480,320));
    
Cocos2d-JS에서는 단지 정확한 인자와 함께 ctor 함수만 오버라이드하고 _super 함수를 호출하면 됩니다.

	var MySprite = cc.Sprite.extend({
		ctor:function(filename,rect){
			this._super(filename,rect);
			// 초기화
		}
		// 속성과 함수 추가
	});
    
    // 스프라이트 생성
    var sprite = new MySprite(texture,cc.rect(0,0,480,320));

`new` 연산자를 지원하기 때문에 HTML5 엔진이 이 것을 아주 쉽게 이해할 수 있습니다.

그러나 JSB에서 `_super` 함수로 C++ 레벨의 스프라이트의 ctor 함수를 호출하는 것은 조금 다릅니다: `js_cocos2dx_Sprite_ctor` 함수는 스프라이트 오브젝트의 상속뿐만 아니라 `cc.Sprite.prototype._ctor`과 모든 파라메터 전달을 실행합니다. 이 `_ctor` 함수는 JS 레벨의 랩퍼에서 전달된 파라메터에 의해서 스프라이트 오브젝트를 정말로 초기화하며 최종적으로 유저의 커스텀 ctor 프로세스를 마무리합니다.

이 프로세스의 진행 과정은 다음과 같습니다:

![](res/3.PNG)
