Cocos2d-JS-v3.0 파이널 @ 2014년 9월 10일

* 페이스북 SDK 베타2: `appRequest` API 추가.
* 페이스북 SDK 베타: login` API에 권한 요청 추가, `requestPermission` API 삭제.
* 페이스북 SDK 베타2: `request` API를 `api`로 이름 변경.
* 페이스북 SDK 베타2: `publishInstall` API를 `activateApp`로 이름 변경.
* 브라우저의 밀도(density) dpi를 위한 함수 추가: `cc.view.setTargetDensityDPI`, `cc.view.getTargetDensityDPI`.
* 타입 체크 함수 추가.
* 위챗(wechat) 브라우저를 위한 오디오 지원 추가.
* ccui.TextField에서 setPlaceHolderColor와 setTextColor 추가.
* Cocos Studio extension을 위한 API 레퍼런스 추가.
* [JSB] 더 나은 iOS 시뮬레이터 지원을 위한 Polished AssetsManager.
* [JSB] `EventAssetsManager`와 `EventListenerAssetsManager`를 jsb 네임스페이스로 이동.
* [JSB] `cc.log`/`cc.warn`/`cc.error`/`cc.assert`에서 서식(formatted string) 지원.
* [JSB] cc.Touch에 `retain`/`release` 함수 추가.

* 버그 수정:
    1. `cc.Menu`의 아이템 터치 우선권이 cc.eventManager와 다른 문제점 수정.
    2. `cc.view`의 NO_BORDER 모드가 제대로 작동하지 않던 문제점 수정.
    3. `cc.LabelBMFont`의 컨텐트 사이즈가 JSB와 다르던 문제점 수정.
    4. `cc.LabelBMFont`의 `setColor`가 어떤 모바일 디바이스에서 유효하지 않은 문제점 수정.
    5. `cc.PageView`의 TOUCH_CANCEL 이벤트를 받을 수 없던 문제점 수정.
    6. `cc.loader`가 cross origin textures를 로드할 수 없던 문제점 수.
    7. 페이스북 SDK 웹의 `appRequest` 정보 파라메터 랩핑이 정확하지 않던 문제점 수정.
    8. ccui widgets의 `addEventListener`가 함수의 타겟을 파라메터로서 허용하지 않던 문제점 수정.
    9. [JSB] 페이스북 SDK의 세션이 클로즈될 때 크래쉬 오류 수정.
    10. [JSB] ccui.TextField의 상수 불일치 수정.
    11. [JSB] `cc.Node#getNodeToWorldTransform` 함수의 리턴값 불일치 수정.
    12. [JSB] `cc.MenuItemImage`의 `setColor`가 작동하지 않는 문제점 수정.
    13. [JSB] `cc.Layer`의 `bake`/`unbake`/`isBaked` 함수가 JSB에 존재하지 않는 API 불일치 수정.
    14. [JSB] ccui의 `addEventListenerXXX`를 `addEventListener`로 웹 엔진 API에 맞게 재설계.
    15. [JSB] `ccui.TextField`가 데스크톱에서 제대로 삭제되지 않는 문제점 수정.
    16. [JSB] LabelTTF의 iOS에서의 외곽선 문제점 수정.
    17. [JSB] 윈도우즈에서의 `jsb.fileUtils.renameFile`의 문제점 수정.
    18. [JSB] 윈도우즈에서의 바인딩 제네레이터 스크립트 문제점 수정.
    19. [JSB] `cc.REPEAT_FOREVER` 값 에러 수정.
