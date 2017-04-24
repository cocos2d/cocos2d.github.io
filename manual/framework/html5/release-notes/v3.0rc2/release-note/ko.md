# Cocos2d-JS v3.0 RC2 릴리스 노트

Cocos2d-JS는 Cocos2d-x 엔진의 자바스크립트 버전으로 Cocos2d-html5와 cocos2d-x JavaScript Binding을 포함합니다. 간단한 자바스크립트 친화적인 API들로 Cocos2d-x의 전체 기능을 지원합니다.

Cocos2d-JS는 웹과 네이티브, 어떤 플랫폼으로 배포하는가에 상관 없이 일관된 개발 경험을 제공합니다. Cocos2d-JS는 놀라울 정도로 쉽고 자연스럽게 “하나의 코드로, 어디서든 실행됩니다” 하나의 자바스크립트 코드 기반으로 웹 브라우져와 Mac OS, Windows, iOS, Android 등 네이티브 플랫폼에서 모두 실행되는 게임을 만들 수 있습니다. 이를 통해 당신의 게임은 대부분의 유통 경로에서 엄청난 기회를 얻을 수 있습니다.

또한 자바스크립트 친화적인 API는 쉬운 코드, 테스트와 배포 등 당신의 게임 개발 경험를 용이하게 합니다. 또한 Cocos2d-JS는 손쉽게 즉시 프로젝트를 생성하고 코딩을 시작할 수 있게 하는 스크립트 툴인 Cocos Console을 제공하며 android, iOS, Mac OS, 웹 등 새로운 프로젝트를 생성하거나 배포할 때도 사용할 수 있습니다.

더 많은 정보를 원하신다면 이 곳을 방문해주세요. [Cocos2d-JS Github](https://github.com/cocos2d/cocos2d-js)

## 다운로드

- [cocos2d-js-v3.0-rc2.zip](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.0-rc2.zip)
- [웹개발자를 위한 다운로드 빌더](http://www.cocos2d-x.org/filecenter/jsbuilder)
- [온라인 API 레퍼런스](http://www.cocos2d-x.org/reference/html5-js/V3.0rc2/index.html)
- [API 레퍼런스 다운로드](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-rc2-API.zip)
- [온라인 테스트 케이스](http://cocos2d-x.org/js-tests/)

## 주요사항

* Cocos2d-JS 알파 버전에서 iOS, Android, Web을 지원하는 Facebook SDK를 쉽게 사용할 수 있게 되었습니다.
* `ccui` 위젯을 RC0에서 종합적인 재설계를 했으나 안정적이지 않고 몇몇 호환성 문제점이 있었습니다. 하지만 현재 모든 보고된 버그를 RC2에서 수정하고 안정성과 성능을 크게 향상시켰습니다.
* Cocos Studio v1.2부터 v1.5.0.1에서 armature animation reader와 editor readers를 지원하도록 업그레이드.
* 자바스크립트 코드가 직접 Objective-C 클래스의 허용 정적 함수를 부를 수 있도록 허용하는 자바스크립트의 Objective-C 리플렉션(reflection) 지.
* JSB에서 개발자가 온라인 이미지를 로컬 텍스쳐로 로드할 수 있도록 하는 `cc.loader`와 `cc.textureCache`의 원격 이미지 로딩 지원.

## 더 많은 내용이 궁금하시다면

새로운 기능에 대해 알고 싶으시다면 다음 문서를 참조해주세요.

- [Cocos2d-JS v3.0 RC2 체인지로그](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc2/changelog/ko)
- [Cocos2d-JS v3.0 RC0 업그레이드 가이](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/ko)

## 새로운 문서

- [Objects pool 사용 문서](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-pool/en)
- [자바스크립트에서의 Objective-C 리플렉션(Reflection)](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection-oc/en)
- [iOS 앱내 결제 문서](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/ios-iap/en)

## Cocos2d 패밀리에 대해서

- Cocos2d-JS v3.0 RC2은 Cocos2d-x 3.2 final의 JSB 솔루션을 기반으로 합니다.
- Cocos2d-JS v3.0 RC2은 Cocos Code IDE v1.0.0 RC1에서 사용 가능합니다.
- Cocos2d-JS v3.0 RC2은 Cocos Studio v1.2 - v1.5.0.1에서 사용 가능합니다.

## 공지사항

만약 문제점이 발생하면 커뮤니티를 통해 도움을 요청하세요 :

- [온라인 포럼](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [관련 문서들](http://cocos2d-x.org/docs/manual/framework/html5/en)

JSB 빌드 필요사항 :

- [안드로이드 빌드] NDK 버전이 r9b - r9d여야 합니다.
- [안드로이드 빌드] Android SDK가 19 이상의 플랫폼을 포함하고 있어야 합니다.
- [iOS 빌드] Xcode 버전이 5.1나 5.1.1이어야 합니다.