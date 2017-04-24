Cocos2d-JS-v3.0 RC0 @ 2014년 7월 4일

* 페이스북 SDK 플러그인을 plugin-x extension에 추가.
* GUI 시스템 `ccui`의 성능, 사용법, 유지보수 개선을 위한 재설계.
* `cc.Layer`의 레이어 베이킹(layer baking)을 위한 `bake` 함수 추가. 
* 오브젝트 풀(object pool) 추가 : `cc.pool`.
* 새로운 이징 액션(easing action) 함수 추가 : bezier action, quadratic actions, quartic actions, quintic actions, circle actions, cubic actions.
* `cc.loader`가 자원 불러오기에 실패했을때조차도 카운터의 진행이 계속되도록 개발. 
* `cc.Class.extend` 함수에서 다중 속성 오브젝트(multiple property objects)를 지원. 
* `ccui.Widget`의 `getLeftInParent`, `getBottomInParent`, `getRightInParent`, `getTopInParent` to `getLeftBoundary`, `getBottomBoundary`, `getRightBoundary`, `getTopBoundary`를 재설계.
* `cc.FadeIn.create(duration, toOpacity)`를 `cc.FadeIn.create(duration)`로 재설계.
* `ccui` extension의 모든 문자열 접근 함수를 `setString`과 `getString`으로 재설계.
* `ccui` extension에 `getContentSize`와 `setContentSize` 추가.
* `cc.Color`의 기본 알파값을 `undefined`에서 255로 수정.
* `cc.log`가 형식화된 문자열(formatted string)을 지원.
* [JSB] `cc.AssetsManager`가 멀티 쓰레드 다운로딩, 다운로드 이어하기, 압축 파일 지원, 개선된 진행 정보, 잘못된 자원들에 대한 재시도의 기능들로 향상.
* [JSB] CMake compilation을 통한 리눅스 지원.
* [JSB] JSB에서만 사용하는 API 이동 : 잘못된 사용 방지를 위해서 cc.fileUtils, cc.Reflection, cc.AssetsManager에 `jsb` 네임스페이스(namespace) 적용.
* [JSB] cocos console이 릴리스 모드에서 jsc compilation 지원.
* [JSB] 안드로이드 앱들이 SD 카드에 설치될 수 있도록 개발.
* [JSB] `ccui` extension의 위젯 클래스(widget classes)들의 확장 가능성(extendable) 개발.
* [JSB] 경로 검색 제어 함수(search path control functions)를 포함한 `jsb.fileUtils`의 완료 버전을 도입.
* [JSB] Mac OS X에서 데스크톱 플랫폼처럼 키보드와 마우스 수행능력(capabilities)를 제대로 인식.
* [JSB] JSB에서 마우스 이벤트 지원.
* [JSB] `cc.MenuItemImage`에서 스프라이트 프레임(sprite frame)의 이름을 생성 파라미터(construction parameter)로서 지원.
* [JSB] JSB에서 `cc.NodeRGBA`가 확장 가능하도록 함.
* [JSB] `ccs.AnimationData`와 `ccs.MovementData` 도입.
* [JSB] `cc.Node`에 `getUserData`와 `setUserData` 추가.

* 버그 픽스:
    1. 새로운 메소드를 사용하여 시퀀스 오브젝트나 스폰 오브젝트를 만들 때 발생하던 버그 픽스.
    2. 텍스쳐가 plist 파일에 포함되거나 scale9Enabled가 true일 때 `ccui.LoadingBar`의 `setPercent` 함수가 크래쉬되던 버그 픽스. 
    3. 오디오가 제대로 불러지지 않았을 때와 길이가 무한일 때 `cc.audioEngine`에서 크래쉬가 발생하던 버그 픽스.
    4. `cc.visibleRect`의 계산을 정확하게 수정.
    5. Fix `cc.Skin`'s bounding box calculation for canvas rendering.
    5. `cc.Skin`'의 캔버스 렌더링에서의 바운딩 박스 계산 수정.
    6. `cc.TextureCache`가 몇몇 상황에 텍스쳐 불러오기가 제대로 제어되지 않던 문제점 수정.
    7. 텍스쳐 사각형(texture rect)가 `cc.Sprite`의 `initWithFile` 함수에서 제로 사이즈가 되던 문제점 수정.
    8. 캔버스 렌더 모드에서 DrawNode와 함께 반전된 ClippingNode에서 발생하던 문제점 수정.
    9. `cc.SpriteFrame`이 텍스쳐 이름 파라미터로 초기화할 수 없던 버그 수정.
    10. `ccs.ArmatureAnimation`의 반복 파라미터(loop parameter) 버그 수정.
    11. `cc.JumpTo`의 `_delta` 위치 계산이 잘못되던 버그 수정.
    12. 오디오 파일 불러오기에 실패했을 때 `cc._audioLoader`가 작동하지 않던 버그 수정.
    13. [JSB] 마우스 이동 이벤트가 일어나는 동안 마우스 버튼이 언제나 왼쪽 버튼으로 인식되던 문제점 수정.
    14. [JSB] `showFPS` 설정이 무시되던 버그 수정.
    15. [JSB] 안드로이드의 키보드 이벤트에서 키가 제대로 인식되지 않던 문제점 해결. 
    16. [JSB] `ccui.Widget`의 `onEnter` 함수가 JSB에서 오버라이드되지 않던 문제점 수정.
    17. [JSB] 몇몇의 `init` 함수가 초기화 되는 동안 반복 실행되는 버그 수정.
    18. [JSB] `cc.Layer`의 `init` 함수가 초기화하는 동안 적용되지 않던 버그 수정.
    19. [JSB] JSB에서 `SpriteFrame`의 생성자가 `new`를 통한 생성을 지원하도록 함.
    20. [JSB] `cc.REPEAT_FOREVER` 상수값이 html5 엔진과 JSB 사이에 충돌하는 문제점 수정.
    21. [JSB] 몇몇 속성의 상속 문제점 수정.
    22. [JSB] `ccui.Button`의 `getTitleColor` 함수가 제대로된 값을 반환하지 못하던 버그 수정.
    23. [JSB] ChipmunkTest와 buoyancy의 테스트 케이스가 크래쉬되던 문제점 해결.
    24. [JSB] `cc.audioEngine.end()` 싱글톤 오디오 엔진 오브젝트를 릴리스하던 문제점 수정.
    25. [JSB] GET, POST, PUT, DELETE를 포함하는 XMLHttpRequest의 모든 메소드 지원. 
    
* 알려진 문제점:
    1. [JSB] `cc.ActionInterval`의 `setSpeed` 함수가 아직 지원되지 않음.
    2. [JSB] `cc.ActionInterval`의 `easing` 함수가 아직 `EaseBezierAction`을 지원하지 않음.
    3. [JSB] `cc.AssetsManager`가 윈도우즈와 iOS 시뮬레이터에서 파일은 다운로드 받고 생성하는데 실패할 수 있음 (실제 디바이스에서의 테스트 권장).
    4. [JSB] CocoStudio의 씬 다시 불러오기(scene reloading)가 메모리 릴리스 이슈와 크래쉬를 야기할 수 있음.
    5. [JSB] `ccui.TextField`가 키보드의 백스페이스 버튼에 응답하지 않음.
