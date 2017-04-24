# Cocos2d-JS v3.0 파이널 릴리스 노트

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS는 Cocos2d-x 엔진의 자바스크립트 버전으로 Cocos2d-html5와 Cocos2d-x JavaScript Binding을 포함합니다. 간단한 자바스크립트 친화적인 API들로 Cocos2d-x의 전체 기능을 지원하여 당신의 게임의 크로스 브라우징과 크로스 플랫폼 기술을 더합니다.

Cocos2d-JS는 v3.0에서 모든 플랫폼에 대한 작업 흐름을 재설계하여, 웹과 네이티브, 어떤 플랫폼으로 배포하는가에 상관 없이 일관된 개발 경험을 제공합니다. Cocos2d-JS는 놀라울 정도로 쉽고 자연스럽게 “하나의 코드로, 어디서든 실행됩니다” 하나의 자바스크립트 코드 기반으로 웹 브라우져와 Mac OS, Windows, iOS, Android 등 네이티브 플랫폼에서 모두 실행되는 게임을 만들 수 있습니다. 이를 통해 당신의 게임은 대부분의 유통 경로에서 엄청난 기회를 얻을 수 있습니다. 또 오직 웹에서의 캐주얼 게임에만 관심이 있다면 직접 웹페이지에 Cocos2d-JS Lite 버전을 놀랍도록 쉽고 아주 가볍게 임베드할 수 있습니다.

또한 자바스크립트 친화적인 API는 쉬운 코드, 테스트와 배포 등 당신의 게임 개발 경험를 용이하게 합니다. Cocos2d-JS v3.0은 아주 강력하고 쿨한 새로운 기능을 제공합니다: 에디터 지원, 에셋 매니져, 오브젝트 풀, 자바스크립트의 오브젝티브C/자바 리플렉션 등

## 작업 흐름

- 크로스 플랫폼 개발자는 Cocos Console을 통해 프로젝트를 생성합니다. Cocos Console은 모든 브라우져와 모든 네이티브 플랫폼의 게임을 효율적으로 개발할 수 있습니다. 

- 캐주얼 웹 게임 개발자는 Lite 버전을 다운 받고 다른 웹 프레임워크(예를 들자면 jQuery)를 사용하듯이 개발을 시작하면 됩니다.

![](./workflows.jpg)

## 주요사항

* 통일된 Cocos2d-JS API의 하나의 코드 베이스로 어디서나 실행되는 게임을 만들 수 있습니다.
* 자바스크립트 스타일 API 재설계: new 생성자, 속성 API, 간소화된 액션 API.
* 자원과 스크립트 업데이트를 위한 에셋 매니저.
* 모든 종류의 오브젝트에서 모든 이벤트 종류를 관찰하도록 할 수 있는 새로운 이벤트 매니저 추가.
* 자바스크립트의 자바/오브젝티브C 리플렉션 지원 추가.
* 스파인 애니메이션 지원 추가.

## 공지사항

JSB 빌드 필요사항 :

- [안드로이드 빌드] NDK 버전이 r9d이어야 합니다.
- [iOS 빌드] Xcode 버전이 반드시 5.1.1 이상이어야 합니다.

## 다운로드

- [Cocos2d-JS v3.0 Final](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.0.zip)
- [Cocos2d-JS v3.0 Lite Version](http://www.cocos2d-x.org/filecenter/jsbuilder)
- [온라인 API 레퍼런스](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [API 레퍼런스 다운로드](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [온라인 테스트 케이스](http://cocos2d-x.org/js-tests/)

## 더 많은 정보가 필요하시다면

모든 새로운 기능과 버그 수정에 대해 알고 싶으시다면 다음 문서를 참조해주세요.

- [Cocos2d-JS v3.0 체인지로그](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0/changelog/ko)
- [Cocos2d-JS v3.0 업그레이드 가이드](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/ko)

## Cocos2d 패밀리에 대해서

- Cocos2d-JS v3.0는  Cocos2d-x 3.2 파이널의 JSB 솔루션을 기반으로 합니다.
- Cocos2d-JS v3.0는 Cocos Code IDE v1.0.0 RC2부터 사용 가능합니다.
- Cocos2d-JS v3.0는 Cocos Studio v1.2 - v1.5.0.1에서 사용 가능합니다.

만약 문제점이 발생하면 커뮤니티를 통해 도움을 요청하세요 :

- [온라인 포럼](http://discuss.cocos2d-x.org/category/javascript)
- [관련 문서들](http://cocos2d-x.org/docs/manual/framework/html5/ko)
- [Github repository](https://github.com/cocos2d/cocos2d-js)

## 로드맵

Cocos2d-JS는 아주 간편한 크로스 플랫폼 개발을 지향합니다. 다음으로 우리는 모바일 웹에서의 성능 향상과 툴체인 향상과 문서화 완료를 중점으로 둘 것입니다. 아래의 리스트는 v3.1에 선보일 주요 작업들입니다.:

- 웹 엔진에서의 성능 향상 연구는 이미 큰 성과를 보이고 있으며, 캔버스 랜더 모드에서의 새로운 랜더러는 v3.1에서 적용될 것이며 v3.0보다 50% 이상 향상된 성능을 보입니다. 
- Cocos2d-JS 페이스북 SDK는 v3.1에서 릴리즈될 것이며, 개발자는 같은 자바스크립트 코드로 모든 페이스북 기능을 iOS/안드로이드/웹에서 사용할 수 있습니다.
- JSB에서의 메모리 모델에 대한 연구를 계속하여 안정성과 간편한 사용성을 향상시킬 것입니다.
- Cocos2d-JS 개발에 관한 모든 중요한 측면을 다룬 Cocos2d-JS 프로그래밍 가이드 문서를 완료할 것입니다.
