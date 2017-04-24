# Cocos2d-JS

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS는 Cocos2d-x 엔진의 자바스크립트 버전으로 Cocos2d-html5와 cocos2d-x JSBinding을 포함합니다. 간단한 자바스크립트 친화적인 API들로 Cocos2d-x의 전체 기능을 지원합니다.

Cocos2d-JS는 웹과 네이티브, 어떤 플랫폼으로 배포하는가에 상관 없이 일관된 개발 경험을 제공합니다. Cocos2d-JS는 놀라울 정도로 쉽고 자연스럽게 “하나의 코드로, 어디서든 실행됩니다” 하나의 자바스크립트 코드 기반으로 웹 브라우져와 Mac OS, Windows, iOS, Android 등 네이티브 플랫폼에서 모두 실행되는 게임을 만들 수 있습니다. 이를 통해 당신의 게임은 대부분의 유통 경로에서 엄청난 기회를 얻을 수 있습니다.

또한 자바스크립트 친화적인 API는 쉬운 코드, 테스트와 배포 등 당신의 게임 개발 경험를 용이하게 합니다. 또한 Cocos2d-JS는 손쉽게 즉시 프로젝트를 생성하고 코딩을 시작할 수 있게 하는 스크립트 툴인 Cocos Console을 제공하며 android, iOS, Mac OS, 웹 등 새로운 프로젝트를 생성하거나 배포할 때도 사용할 수 있습니다.

## 작업흐름

- 크로스 플랫폼 개발자는 코코스 콘솔로 프로젝트를 생성하고 웹과 모든 네이티브 플랫폼으로 게임을 배포할 수 있습니다.

- 캐주얼 웹 게임 개발자는 라이트 버전을 다운로드하고 다른 웹 프레임워크처럼 개발을 시작하면 됩니다.(예를 들어 jQuery처럼)

## 다운로드와 API 레퍼런스

- [Cocos2d-JS github 저장소](http://github.com/cocos2d/cocos2d-js/)
- [Cocos2d-JS 풀 버전 다운로드](http://www.cocos2d-x.org/download)
- [Cocos2d-JS 라이트 버전 다운로드](http://www.cocos2d-x.org/filecenter/jsbuilder)
- [온라인 API 레퍼런스](http://www.cocos2d-x.org/wiki/Reference)
- [API 레퍼런스 다운로드](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-beta-API.zip)
- [온라인 테스트 케이스](http://cocos2d-x.org/js-tests/)

## 주요 기능

* 모든 최신 브라우져와 네이티브 플랫폼 지원
* 씬(Scene) 관리(워크플로우)
* 씬간의 화면 전환(Transitions)
* 스프라이트(Sprites)와 스프라이트 시트(Sprite Sheets)
* 효과: Lens, Ripple, Waves, Liquid 등
* 액션:
    * 변형 액션(Trasformation Actions): Move, Rotate, Scale, Fade, Tint 등
    * 구성 액션(Composable actions): Sequence, Spawn, Repeat, Reverse
    * 이즈 액션(Ease Actions): Exp, Sin, Cubic, Elastic, etc.
    * 기타 액션: CallFunc, OrbitCamera, Follow, Tween
* 에셋 매니저
* 기본 메뉴와 버튼
* 통합된 물리 엔진: Chipmunk, Box2d
* 파티클 시스템
* 뼈대 에니메이션(Skeleton Animations): Spine, Armature 지원
* 글꼴:
    * 고정 너비 글꼴과 가변 너비 글꼴을 사용한 빠른 글꼴 렌더링
    * .ttf 글꼴 지원
* 타일맵 지원: 직각(Orthogonal), 마름모(Isometric), 육각형(Hexagonal)
* 시차 스크롤(Parallax scrolling)
* 동작 궤적(Motion Streak)
* 렌더 투 텍스쳐(Render To Texture)
* 모바일 기기의 터치/가속도계
* 데스크탑의 터치/마우스/키보드
* OpenAL 또는 WebAudio에 기반한 사운드 엔진 지원(CocosDenshion 라이브러리)
* 통합된 슬로우 모션/빨리 감기
* 빠르고 압축된 텍스쳐: PVR 압축과 압축되지 않은 텍스쳐, ETC1 압축 텍스쳐, 기타 등등
* 해상도 독립
* 커스터마이제이션을 위한 모듈화 엔진
* 상용화에 유리한 오픈 소스 : 오픈소스 프로젝트와 클로즈드 소스 프로젝트 모두 호환
* OpenGL ES 2.0 (모바일) / OpenGL 2.1 (데스크탑) 기반
* WebGL 지원과 자동 캔버스 폴백(auto canvas fallback)

## 관련문서

- [Cocos2d-JS v3.1 베타 릴리스 노트](./release-notes/v3.1b/release-note/ko.md)
- [Cocos2d-JS v3.1 베타 체인지 로그](./release-notes/v3.1b/changelog/ko.md)
- [Cocos2d-JS v3.0 RC0 업그레이드 가이드](./release-notes/v3.0rc0/upgrade-guide/ko.md)

- 시작하기
    - [라이트 버전 작업흐름](./v3/lite-version/ko.md)
    - [왜 Cocos2d-html5로 게임을 개발해야 하는가?](./v2/cocosh5-advantages/ko.md)
    - [Cocos2d-html5 2.2.2의 화면 해상도 지원 정책](./v2/resolution-policy-design/ko.md)
    - [릴리스 노트 히스토리](./release-notes/en.md)
        
- 버전 3.x의 새로운 기능과 API 변화:
    - [코코스 콘솔을 통한 새로운 작업흐름](./v2/cocos-console/ko.md)
    - [에셋 매니저](./v3/assets-manager/ko.md)
    - [새로운 이벤트 매니저](./v3/eventManager/ko.md)
    - [새로운 속성 API](./v3/getter-setter-api/ko.md)
    - [게임 생성](./v3/cc-game/ko.md)
    - [생성자와 상속](./v3/inheritance/ko.md)
    - [간단해진 액션](./v3/cc-actions/ko.md) 
    - [오브젝트 풀](./v3/cc-pool/ko.md) 
    - [Cocos2d-html5 modulization](./v3/moduleconfig-json/en.md)
    - [Pure configuration file](./v3/project-json/en.md)
    - [기본 데이터 재설계](./v3/basic-data/ko.md)
    - [Singleton objects refactoration](./v3/singleton-objs/en.md)
    - [Unified create functions](./v3/create-api/en.md)
    - [cc.loader로 리소스 불러오기](./v3/cc-loader/ko.md)
    - [System information in cc.sys](./v3/cc-sys/en.md)
    - [cc.path를 이용한 경로 관리](./v3/cc-path/ko.md)
    - [cc.async](./v3/cc-async/ko.md)
    - [Modification to cc.saxParser](./v3/cc-saxparser/en.md)
    - [Modification to cc.spriteFrameCache](./v3/cc-spriteframecache/en.md)
    - [cc.FileUtils에 대해서](./v3/cc-fileutils/ko.md)
    - [cc.log에 대해서](./v3/cc-log/ko.md)
    - [Other change from v2.2.2 to v3.0](./v3/more-change-from-v2-to-v3/en.md)
    - [레이어의 베이크 함수](./v3/bake-layer/ko.md)
    - [Using cc.reflection to call Java methods](./v3/reflection/en.md)
 
- Cocos2d-JS의 페이스북 SDK
    - [페이스북 SDK API 레퍼런스](./facebook-sdk/api-reference/ko.md)
    - [안드로이드에서 Cocos2d-JS의 페이스북 SDK 사용하기](./facebook-sdk/facebook-sdk-on-android/ko.md)
    - [iOS에서 Cocos2d-JS의 페이스북 SDK 사용하기](./facebook-sdk/facebook-sdk-on-ios/ko.md)
    - [웹에서 Cocos2d-JS의 페이스북 SDK 사용하기](./facebook-sdk/facebook-sdk-on-web/ko.md)
    - [페이스북 SDK 테스트 케이스](./facebook-sdk/facebook-test-case/ko.md)
    
- 기타 문서
    - [JSB에서 익스텐션 사용하기(중국어)](./jsb/jsb-extension/zh.md)
    - [Plugin-x 구조](./v3/plugin-x/plugin-x-architecture/ko.md)
    - [안드로이드에서 plugin-x 사용하기](./v3/plugin-x/how-to-use-plugin-x-on-android/ko.md)
    - [안드로이드에서 당신만의 플러그인을 만들어보세요](./v3/plugin-x/how-to-write-your-own-plugin-for-android/ko.md)
    - [iOS에서 IAP 플러그인 사용하기](./jsb/plugin-x/ios-iap/ko.md)
    
- 튜토리얼
    - [튜토리얼 루트](http://cocos2d-x.org/docs/tutorial/framework/html5/en)
