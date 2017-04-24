Cocos2d-JS-v3.0 RC2 @ 2014년 8월 11일

* 유저 경험 친화적이고 더 안정적으로 Cocos UI 재설계.
* Cocostudio reader가 버전 1.2 - 1.5.x.를 지원하도록 업그레이드.
* Cocos2d-x v3.2의 Cocostudio Armature animation 업그레이드.
* 2.x createWithXXX 함수 추가와 모든 create/createWithXXX 함수 디프리케이트(deprecate).
* cc.NodeRGBA와 cc.LayerRGBA를 cc.Node로 병합.
* ctor 함수가 새로운 구문을 지원하도록 수정.
* cc.Sprite의 setColor 성능을 향상시키도록 재설계.
* CCAffineTransform.js의 소문자로 시작하는 함수의 이름 재정의.
* Cocos2d-x 3.2의 cc.Scale9Sprite 업그레이드.
* cc.LabelTTF의 행바꿈(line break) 알고리즘이 다양한 언어를 지원하도록 향상.
* cc.RenderTexture의 beginWithClear가 컬러값으로 0-255을 지원하도록 개발.
* 모든 액션의 소문자 얼라이어스(alias) 생성 함수의 임플리먼테이션(implementation) 향상.
* 3d 액션과 프로그레스(progress) 액션의 소문자 생성 함수 추가.
* 플랫폼 감지를 위한 cc.sys.platform API 추가.
* HelloWorld 프로젝트를 v3.0 API들로 업그레이드.
* [JSB] Cocos2d-JS의 알파 릴리즈에 Facebook SDK 포함.
* [JSB] Javascript의 Objective-C 리플렉션(reflection) 지원.
* [JSB] cc.loader와 cc.textureCache의 원격 이미지 로딩 지원.
* [JSB] 스파인 익스텐션(spine extension)과 GUI 익스텐션의 상속(inheritance) 지원.
* [JSB] console.log 함수.

* 버그 수정:
    1. ccs.TransformHelp의 변형 에러 수정.
    2. cc.MenuItemToggle의 콜백이 정확하게 초기화되지 않는 버그 수정.  
    3. cc.view의 크기가 조정될 때 위치가 부정확해지는 cc.layer의 bake 함수의 문제 수정.
    4. cc.LayerMultiplex의 버그 수정.
    5. cc.TMXLayer의 타입이 hexagonal일 때 모든 맵 이미지가 보여지지 않던 문제 수정.
    6. cc.ControlSwitch의 버그 수정.
    7. 이미지 포맷의 상수 불일치 수정.  
    8. ccui.Widget의 popScene 이후에 보이지 않던 문제점 해결.
    9. cc.TransitionSlideInB와 cc.TransitionSlideInT가 바르게 동작하도록 수정.
    10. 삼성 모바일의 WECHAT 브라우저가 재포커스된 후에 requestAnimFrame가 제대로 동작하지 않던 버그 수정.
    11. ccui.Widget과 ccui.Text's의 복제(clone) 함수 버그 수정.
    12. ccui.Layout의 클리핑 영역(clipping area)이 부정확하던 버그 수정.
    13. CCBoot.js의 bind 함수가 iOS 5.1의 사파라에서 정의되지 않던 문제 해결.
    14. 몇몇 브라우저에서 sourceNode의 playbackState가 제대로 작동하지 않던 cc.WebAudio 문제 해결.
    15. [JSB] Cocostudio 스튜디오 씬 테스트의 크래쉬(crash) 이슈 해결.
    16. [JSB] BaseData/AnimationData/MovementData의 속성.
    17. [JSB] cc.ReverseTime.
    18. [JSB] iOS 6.0 이하에서의 템플릿 크래쉬 이슈 해결.
    19. [JSB] lambda 함수 생성에 관한 바인딩 제네레이터 이슈 해결.
    20. [JSB] _ctor 함수 리뷰와 버그 수정.
    21. [JSB] 자바스크립트에서의 클래스 상속 리뷰.
    22. [JSB] 자동 바인딩의 코드 스타일 향상.
    23. [JSB] 빈 문자열이 NULL로 변환하는 형변환 문제 해결.
    24. [JSB] UILayout relative과 RenderTexture 테스트 케이스 문제 해결.
    25. [JSB] 해상도 정책 수정 후에 cc.visibleRect가 업데이트 되지 않던 문제 해결.
    26. [JSB] cc.loader.load 함수의 콜백의 결과 반환에 관한 문제 해결.
    27. [JSB] 이미지 포맷 상수의 값 불일치에 관한 버그 수정.
    28. [JSB] cc.TextFieldTTF'의 textFieldWithPlaceHolder을 create로 이름 변경.
    29. [JSB] cc.TMXTiledMap의 API 불일치 버그 수정.
    30. [JSB] 어떤 안드로이드 디바이스에서 스텐실 버퍼(stencil buffer)가 동작하지 않는 문제점 수정.
    31. [JSB] defaultPixelFormat 속성 정의 추가.
    32. [JSB] cc.radiansToDegrees 수정.
    
* 알려진 문제점:
    1. [JSB] cc.ActionInterval의 setSpeed와 getSpeed 함수가 JSB에서는 존재하지 않음.
    2. [JSB] `cc.easeBezierAction` 함수를 JSB에서는 지원하지 않음.
    3. [JSB] 윈도우즈 플랫폼과 iOS 시뮬레이터에서 jsb.AssetsManager의 문제점.