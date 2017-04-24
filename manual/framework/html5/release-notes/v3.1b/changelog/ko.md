Cocos2d-JS v3.1 beta @ 2014년 10월 13일

* 아키텍쳐 레벨의 새로운 렌더러로 웹 엔진의 재설계, 최적화는 진행 중입니다.
* Cocos2d-JS의 페이스북 SDK 베타2를 릴리즈, API가 크게 향상되고 안정화되었습니다.
* MoonWarriors 샘플을 새로운 그래픽 자산 셋과 함께 업그레이드시켰습니다.
* iOS 8 사파리에서 자동으로 WebGL이 사용 가능하도록 했습니다.
* chipmunk.js를 최신 버전으로 업그레이드 했습니다.
* `cc.LabelTTF`에서 그림자 색상을 설정할 수 있도록 지원합니다.
* ccui.Button에 `getTitleRenderer` 함수를 추가했습니다.
* 코코스 스튜디오에서 타임라인 애니메이션을 지원합니다.
* LabelAtlas의 `cascadeOpacityEnabled`와 `cascadeColorEnabled`의 기본값을 true로 설정합니다. 
* `cc.Sprite#setTexture`에서 텍스쳐를 제대로 불러올 수 없을 때 텍스쳐의 리스너를 추가했습니다. 
* `cc.pool`는 모든 종류의 오브젝트를 활성화합니다.
* chipmunk의 쿼리 테스트와 필요한 자바스크립트 바인딩을 추가했습니다.
* [JSB] `cp.Shape`의 속성과, `cp.Vect`와 `cp.v`의 잊어버린 메소드들을 추가했습니다.
* [JSB] `ccui.ListView`의 놓친 상수를 추가했습니다.
* [JSB] `cc.Node#setColor`의 알파값을 무시합니다.
* [JSB] Object.create을 사용하여 프로토타입 생성 중 상속의 메모리 누수 가능성을 방지할 수 있습니다.
* [JSB] 써드 파티 코드를 사용하여 보다 안정적인 URL 체크를 할 수 있는 정규표현식을 만들었습니다.

* 버그 수정:
    1. `cc.ComponentContainer`의 'if'문의 동작이 잘못된 버그를 수정했습니다.
    2. `cc.Scale9Sprite`의 캔버스와 WebGL에서의 동작이 다른 버그를 수정했습니다.
    3. `cc.EventListener`에서 일시정지 상태를 true로 설정할 수 있도록 버그를 수정했습니다.
    4. `cc.ParticleSystem`의 캔버스 렌더링 모드에서 캔버스 크기 조정을 적용할 수 있도록 버그를 수정했습니다.
    5. CCBoot.js의 `cc.loader`에서 `crossOrign` 속성이 IE9과 IE10에서 정의되었는지 여부를 확인하는 조건을 추가할 수 있도록 버그를 수정했습니다.
    6. `ccui.Widget`의 `setPosition` 함수의 동작이 부정확한 버그를 수정했습니다.
    7. `ccui.LoadingBar`의 `barRenderer`가  protected children 배열을 추가할 수 있도록 버그를 수정했습니다.
    8. `cc.Texture2D`의 `TEXTURE_MAG_FILTER`를 LINEAR로 설정할 수 있도록 버그를 수정했습니다.
    9. `cc.TMXMapInfo`가 `rotation` 속성을 제대로 파싱하지 못하던 버그를 수정했습니다.
    10. Fixed a bug of `cc.TMXLayer` that it should apply canvas scaling on Canvas rendering mode.
    10. `cc.TMXLayer`가 캔버스 렌더링 모드에서 캔버스 크기 조정을 적용할 수 있도록 버그를 수정했습니다.
    11. [JSB] `cc.textureCache.addImage`에서 리턴값이 부정확한 문제점을 수정했습니다.
    12. [JSB] `cc.loader.getRes`의 캐쉬된 리소스를 지원에 관한 문제점을 수정했습니다.
    13. [JSB] `cc.loader.loadImg`의 로컬 이미지 로딩 지원에 관한 문제점을 수정했습니다.
    14. [JSB] Xcode 6에서 `cocos run -p ios` 커맨드의 문제점을 수정했습니다.
    15. [JSB] iOS8에서 `cc.EditBox`의 동작 문제점을 수정했습니다.
    16. [JSB] `cc.Scale9Sprite`가 자식 노드(child node) 컨텐츠를 마스크할 수 있다는 문제점을 수정했습니다.
    17. [JSB] `arrivalOrder`가 리셋 이후에 자식들(children)이 제대로 정렬되지 않는 문제점을 수정했습니다.    
    18. [JSB] 생성시에 `_ctor` 함수 체크에 관한 문제점을 수정했습니다.
    19. [JSB] iOS 8과 다른 플랫폼 사이에 `cpGroup` 타입 정의가 불일치하던 버그를 수정했습니다.
    20. [JSB] 웹과 JSB 엔진 사이에서 `cc.Touch#getID`에 관한 API가 불일치를 수정했습니다.
    21. [JSB] JSB에서 cc.pool의 메모리 누수에 관한 문제점을 수정했습니다.
    22. [JSB] JSB에서 `cc.ScrollView`의 생성이 제대로 임플리먼트되지 않는 버그를 수정했습니다.
    23. [JSB] chipmunk 바인딩의 오류를 처리하는 인수를 세이프 가드를 추가해서 수정했습니다.
    24. [JSB] 파티클 시스템 테스트 케이스의 버그를 수정했습니다.
    25. [JSB] Fixed a potential crash issue for `cc.CallFunc`의 잠재적 크래쉬 오류의 문제점을 수정했습니다.
    
* 알려진 문제점:
    1. 에셋매니저가 libcurl의 버그 때문에 윈도우즈에서 제대로 동작하지 않습니다.
    2. 타임라인 애니메이션 JSB에서 바인딩되지 않습니다.
