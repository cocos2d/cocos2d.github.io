#Cocos2d-JS v3.x의 싱글톤 오브젝트

##원래 의도

Cocos2d-JS 버전 3.0 이전에는 모든 API는 Cocos2d-x로부터 포팅되었습니다. 불행하게도 많은 디자인이 C++ 개발에 유용하게 되어있었지만 자바스크립트 개발에는 크게 의미가 없었습니다.

이러한 디자인 중의 하나가 현재 싱글톤 클래스입니다. 예제로서 cc.SpriteFrameCache를 살펴보겠습니다 :

```
// 프레임을 생성하고 스프라이트 초기화에 프레임을 사용하기 위해 cc.SpriteFrameCache을 사용하기를 원할 때
cc.SpriteFrameCache.getInstance().addSpriteFrames(s_boxs_plist);
var boxFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("box_normal_00.png");
var sprite = cc.Sprite.createWithSpriteFrame(boxFrame);
```

첫번째로 이 코드는 길고 읽기 어렵습니다. cc.SpriteFrameCache의 싱글톤 오브젝트가 생성 여부에 상관 없이 오브젝트를 검색하는 함수를 호출합니다. 개발자가 싱글톤 오브젝트를 캐싱하는 로컬 오브젝트를 생성하는데 주의를 기울이지 않으면 스프라이트 프레임을 사용해서 많은 스프라이트를 생성할 때 문제는 악화됩니다. 마지막으로 가장 중요하게도 싱글톤 디자인 패턴은 싱글톤 오브젝트를 보호하고 싱글톤 클래스의 인스턴스를 생성하는 것을 바잊하기 위한 것입니다. 그러나 우리 모두가 알고 있듯이 자바스크립트에서는 필요가 없습니다 :

```
// CCSpriteFrameCache.js에서 쉽게 싱글톤 오브젝트를 찾을 수 있습니다.
cc.s_sharedSpriteFrameCache.addSpriteFrames(s_boxs_plist);
// 원한다면 또한 또다른 캐시를 생성할 수도 있습니다.
var myCache = new cc.SpriteFrameCache();
```

결과적으로 Cocos2d-JS v3.0의 주요 타겟에게 자바스크립트 스타일 API들을 제공하기로 결정하고 싱글톤 클래스의 복잡성을 제거하는 것이 좋겠다고 생했습니다.

##변경사항 리스트

클래스를 오브젝트로 재설계 :

```
// 엔진 코어
cc.Configuration.getInstance()              --> cc.configuration
cc.ShaderCache.getInstance()                --> cc.shaderCache
cc.TextureCache.getInstance()               --> cc.textureCache
cc.AnimationCache.getInstance()             --> cc.animationCache
cc.SpriteFrameCache.getInstance()           --> cc.spriteFrameCache
cc.Screen.getInstance()                     --> cc.screen
cc.TIFFReader.getInstance()                 --> cc.tiffReader
cc.IMEDispatcher.getInstance()              --> cc.imeDispatcher

// 익스텐션(extension)
ccs.GUIReader.getInstance()                 --> ccs.guiReader
ccs.SceneReader.getInstance()               --> ccs.sceneReader
ccs.DataReaderHelper                        --> ccs.dataReaderHelper
ccs.SpriteFrameCacheHelper.getInstance()    --> ccs.spriteFrameCacheHelper
ccs.ArmatureDataManager.getInstance()       --> ccs.armatureDataManager
ccs.ActionManager.getInstance()             --> ccs.actionManager
ccs.TriggerMng.getInstance()                --> ccs.triggerManager
ccs.ObjectFactory.getInstance()             --> ccs.objectFactory
```

오브젝트는 순수한 오브젝트로서 아래와 같은 임플리멘테이션(implementation)과 유사합니다 :

```
cc.screen = {
    init: function () {
	    //...
    },

    fullScreen: function() {
	    //...
    },

    requestFullScreen: function (element, onFullScreenChange) {
	    //...
    },

    exitFullScreen: function () {
        //...
    },

    autoFullScreen: function (element, onFullScreenChange) {
	    //...
    }
};
```

다른 한편으로는 확장 기능이 필요한 동안에는 사실 클래스가 매우 유용합니다. 그래서 몇몇 다른 싱글톤 클래스는 순수한 오브젝트로 재설계하지 않았습니다. 그러나 같은 API 스타일을 개발자에게 제공하기 위해서 클래스 임플리멘테이션과 직접 클래스의 싱글톤 오브젝트를 제공하는 것은 다음의 리스트처럼 지키고자 합니다 : 

```
cc.AudioEngine.getInstance()        --> cc.audioEngine
cc.Director.getInstance()           --> cc.director
cc.EGLView.getInstance()            --> cc.view
cc.SAXParser.getInstance()          --> cc.saxParser
cc.PlistParser.getInstance()        --> cc.plistParser
```

모든 오브젝트 이름의 첫번째 문자는 소문자이고 오브젝트와 클래스간의 차이점이라는 것에 주의하세요.

또 다른 주의사항은 `cc.view`를 위한 것으로 `cc.EGLView`처럼 원래 Cocos2d-iPhone으로부터 포팅된 경우 iOS의 openGL 뷰의 이름을 가지고 있지만 Cocos2d-JS에서는 2D 캔버스 뷰나 GL 뷰를 사용하기 때문에 단순한 `cc.view`로 이름을 바꾸기로 결정했습니다.

##결과

재설계 후에 시작 부분에 있던 예제를 v3.0으로 바꾸면 다음과 같습니다 :

```
cc.spriteFrameCache.addSpriteFrames(s_boxs_plist);
var boxFrame = cc.spriteFrameCache.getSpriteFrame("box_normal_00.png");
var sprite = cc.Sprite.createWithSpriteFrame(boxFrame);
```

Cocos2d-JS가 더 좋아졌다고 느끼시기를 기원합니다.
