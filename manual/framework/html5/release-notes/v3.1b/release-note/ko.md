# Cocos2d-JS v3.1 베타 릴리즈 노트

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS는 Cocos2d-x 엔진의 자바스크립트 버전으로 Cocos2d-html5와 cocos2d-x JSBinding을 포함합니다. 간단한 자바스크립트 친화적인 API들로 Cocos2d-x의 전체 기능을 지원합니다.

Cocos2d-JS는 웹과 네이티브, 어떤 플랫폼으로 배포하는가에 상관 없이 일관된 개발 경험을 제공합니다. Cocos2d-JS는 놀라울 정도로 쉽고 자연스럽게 “하나의 코드로, 어디서든 실행됩니다” 하나의 자바스크립트 코드 기반으로 웹 브라우져와 Mac OS, Windows, iOS, Android 등 네이티브 플랫폼에서 모두 실행되는 게임을 만들 수 있습니다. 이를 통해 당신의 게임은 대부분의 유통 경로에서 엄청난 기회를 얻을 수 있습니다.

또한 자바스크립트 친화적인 API는 쉬운 코드, 테스트와 배포 등 당신의 게임 개발 경험를 용이하게 합니다. 또한 Cocos2d-JS는 손쉽게 즉시 프로젝트를 생성하고 코딩을 시작할 수 있게 하는 스크립트 툴인 Cocos Console을 제공하며 android, iOS, Mac OS, 웹 등 새로운 프로젝트를 생성하거나 배포할 때도 사용할 수 있습니다.

## 작업흐름

- 크로스 플랫폼 개발자는 코코스 콘솔로 프로젝트를 생성하고 웹과 모든 네이티브 플랫폼으로 게임을 배포할 수 있습니다.

- 캐주얼 웹 게임 개발자는 라이트 버전을 다운로드하고 다른 웹 프레임워크처럼 개발을 시작하면 됩니다.(예를 들어 jQuery처럼)

![](../../v3.0/release-note/workflows.jpg)

## 주요사항

* 새로운 렌더러 구조로 웹 엔진을 재설계했으며, 새로운 렌더러는 웹 엔진의 엄청난 성능 향상을 가져왔습으나 아직 완벽하게 최적화되지 않았습니다. 우리의 다음 포커스는 최적화입니다.
* Cocos2d-JS 베타2를 위한 페이스북 SDK를 릴리즈했으며, API들이 크게 향상되고 안정화되었습니다. API 참고 문서 또한 보완했습니다.
* iOS 8 사파리에서 자동으로 WebGL이 가능하도록 하였으며, 캔버스 랜더러 모드에 비해 성능을 놀랍도록 향상시켰습니다.
* 샘플 게임인 MoonWarriors의 그래픽적 자원을 새롭게 업그레이드했습니다.
* chipmunk을 새로운 버전으로 업그레이드하고 chipmunk의 바인딩이 향상되도록 업그레이드했습니다.

## 주의사항

JSB 빌드를 위해서 다음과 같은 사항을 점검하세요 :

- [안드로이드 빌드] NDK 버전이 r9d여야 합니다.
- [iOS 빌드] Xcode 버전이 5.1.1 이상어야 합니다.

## 다운로드

- [Cocos2d-JS v3.1 베타](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.1-beta.zip)
- [온라인 API 레퍼런스](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [API 레퍼런스 다운로드](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [온라인 테스트 케이스](http://cocos2d-x.org/js-tests/)

## 더 많은 정보가 필요하시면

모든 기능과 버그 수정에 대해서 알기 원한다면 다음의 문서들을 참조하세요

- [Cocos2d-JS v3.1 베타 체인지로그](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.1b/changelog/ko)
- [Cocos2d-JS v3.1 업그레이드 가이드](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/ko)

## 프로젝트를 이전 버전에서 업그레이드하기

v3.0 이전 버전에서 v3.1 베타 버전으로 업그레이드하기를 원하신다면 다음의 절차를 따라야 합니다:

1. Cocos2d-JS v3.1 베타 패키지 다운로드합니다.
2. 코코스 콘솔 업그레이드를 위해서 `setup.py` 커맨드를 실행합니다.
3. `cocos new` 커맨드로 새로운 프로젝트를 생성합니다.
4. 예전 프로젝트의 "src", "res", "index.html", "project.json", "main.js" 등의 파일을 새로운 프로젝트 파일 위에 덮어씁니다.
5. 몇몇 API 변화 문제를 해결하기 위해서 업그레이드 가이드를 참고할 필요가 있습니다.

## Cocos2d 패밀리에 대해서

- Cocos2d-JS v3.1 베타는 Cocos2d-x 3.2 파이널을 JSB 솔루션의 베이스로 사용합니다
- Cocos2d-JS v3.1 베타는 일시적으로 코코스 코드 IDE와 호환되지 않습니다
- Cocos2d-JS v3.1 베타는 코코스 스튜디오 v1.2 - v1.5.0.1와 호환됩니다

만약 문제점이 발생하면 커뮤니티를 통해 도움을 요청하세요 :

- [온라인 포럼](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [루트 문서](http://cocos2d-x.org/docs/manual/framework/html5/ko)
- [Github repository](https://github.com/cocos2d/cocos2d-js)
