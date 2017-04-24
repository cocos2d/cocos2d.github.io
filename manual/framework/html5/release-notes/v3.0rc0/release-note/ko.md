# Cocos2d-JS v3.0 RC0 릴리스 노트

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS는 Cocos2d-x 엔진의 자바스크립트 버전으로 Cocos2d-html5와 cocos2d-x JavaScript Binding을 포함합니다. 간단한 자바스크립트 친화적인 API들로 Cocos2d-x의 전체 기능을 지원합니다.

Cocos2d-JS는 웹과 네이티브, 어떤 플랫폼으로 배포하는가에 상관 없이 일관된 개발 경험을 제공합니다. Cocos2d-JS는 놀라울 정도로 쉽고 자연스럽게 “하나의 코드로, 어디서든 실행됩니다” 하나의 자바스크립트 코드 기반으로 웹 브라우져와 Mac OS, Windows, iOS, Android 등 네이티브 플랫폼에서 모두 실행되는 게임을 만들 수 있습니다. 이를 통해 당신의 게임은 대부분의 유통 경로에서 엄청난 기회를 얻을 수 있습니다.

또한 자바스크립트 친화적인 API는 쉬운 코드, 테스트와 배포 등 당신의 게임 개발 경험를 용이하게 합니다. 또한 Cocos2d-JS는 손쉽게 즉시 프로젝트를 생성하고 코딩을 시작할 수 있게 하는 스크립트 툴인 Cocos Console을 제공하며 android, iOS, Mac OS, 웹 등 새로운 프로젝트를 생성하거나 배포할 때도 사용할 수 있습니다.

더 많은 정보를 원하신다면 이 곳을 방문해주세요. [Cocos2d-JS github site](https://github.com/cocos2d/cocos2d-js)

## 다운로드

- [cocos2d-js-v3.0-rc0.zip](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.0-rc0.zip)
- [온라인 API 레퍼런스](http://www.cocos2d-x.org/reference/html5-js/V3.0rc0/index.html)
- [API 레퍼런스 다운로드](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-rc0-API.zip)
- [웹 개발자를 위한 다운로드 빌더](http://cocos2d-x.org/filecenter/jsbuilder)

## 주요사항

* `cc.AssetsManager`은 멀티 쓰레드 다운로딩, 이어서 다운받기, 압축 파일 지원, 잘못된 자원들에 대한 재시도, 개선된 진행 정보 등과 함께 놀랍도록 개선되었다. 상세한 내용은 다음 문서를 참조해주세요. [AssetManager document](http://cocos2d-x.org/docs/manual/framework/html5/v3/assets-manager/en).
* 멀티플랫폼 페이스북 SDK 플러그인은 현재 plugin-x extension의 일부이며 안드로이드, iOS, 웹을 지원하며 이에 대한 사용법을 다룬 문서를 빠른 시일 내에 공개할 예정입니다.
* GUI 시스템 `ccui`는 성능, 사용법, 유지보수에 대한 엄청난 개선과 함께 재설계되었습니다.
* `cc.Layer`는 현재 bake 기능을 지원하며, baked static layer을 통해서 당신이 만든 게임은 놀라운 성능 향상을 경험할 수 있습니다. 상세한 내용은 다음 문서를 참조해주세요. [Layer baking document](http://cocos2d-x.org/docs/manual/framework/html5/v3/bake-layer/en).
* 오브젝트 풀(object pool) 구현은 RC0에서 제안되었습니다: `cc.pool`, 테스트 케이스는 대규모 오브젝트 생성에 대한 중요한 성능 개선을 보여줍니다.
* 이제 리눅스에서 CMake compilation을 통해 Cocos2d-JS를 지원합니다. 
* Cocos console이 릴리스 모드(release mode)에서 자동 jsc compilation을 지원합니다.

## 더 많은 내용이 궁금하시다면

새로운 기능에 대한 모든 내용은 [Cocos2d-JS v3.0 RC0 체인지 로그](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/changelog/ko)와 [Cocos2d-JS v3.0 RC0 업그레이드 가이드](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/ko)에서 소개합니다.

## 곧 추가될 문서들

- Plugin-x iOS 통합
- Facebook 플러그인 사용법
- cc.pool 사용법
- 그리고...

## Cocos Code IDE에 대해서

Cocos2d-JS v3.0 RC0은 7월 11일에 릴리스될 Cocos Code IDE를 지원할 것이고, 현재 버전은 지원하지 않으니 기억해주세요.
