# 2.1 Cocos2d-JS 라이트의 웹 게임 작업 흐름 (웹 개발 환경)

Cocos2d-JS는 웹 개발자를 위한 특정 작업흐름을 디자인했습니다. 이 개발자들에게 html 페이지에 다른 웹 프레임워크처럼 직접 하나의 파일 엔진을 임베디드하는 것이 훨씬 좋습니다. Cocos2d-JS 풀 패키지는 마치 거대 미로에 던져진 것처럼 웹 개발자에게 너무 크고 너무 복잡하다는 점도 중요합니다. 이는 개발자에게 다음과 같은 잘못된 메시지를 보낼 것입니다: "Cocos2d-JS는 웹 게임을 개발하기에 너무 무거워."

사실 Cocos2d-JS의 웹 엔진은 모듈화를 임플리먼트하여 깃털처럼 가벼우면서도 파워풀할 수 있습니다. 이러한 모든 이유 때문에 우리는 라이트 버전과 순수한 웹 개발자를 위한 작업흐름을 보여주려고 합니다.

이 챕터에서 우리는 Cocos2d-JS 라이트 버전의 작업 흐름을 소개할 것입니다.

## Cocos2d-JS 라이트 버전 다운로드

[다운로드 페이지](http://cocos2d-x.org/filecenter/jsbuilder/)에서 최신 라이트 버전 엔진을 다운로드 받으실 수 있습니다. 또한 풀 버전 웹 엔진이나 당신만의 버전을 커스터마이징할 수도 있습니다.

한편 압축 옵션을 선택하여 효율적으로 자바스크립트 파일 사이즈를 감소할 수 있으나 엔진 코드가 난독화될 수 있습니다. 그러니 개발 단계에서는 비압축(uncompressed) 모드를 선택하고 게임을 릴리즈하는 시점에 압축 버전으로 교체하는 것을 추천합니다.

## 다운로드된 컨텐츠

라이트 버전의 사용법을 간단히 살펴보면 다운로드된 컨텐츠는 자바스크립트 엔진 파일뿐만 아니라 완성된 HelloWorld 프로젝트도 포함합니다: 

|파일명|설명|
|---------|-----------|
|build.xml|[구글 클로저 컴파일러](https://developers.google.com/closure/compiler/) 압축 툴의 ant 빌드 설정 파일로서  클로저 컴파일러를 다운로드해서 이 파일의 설정을 수정하면 ant를 사용하여 모든 자바스크립트 코드를 높은 압축율로 압축할 수 있습니다|
|cocos2d-js-v3.0.js|엔진의 자바스크립트 파일로서 원하는 웹 페이지에 임베디드하는 것만으로 Cocos2d-JS API를 사용하여 게임을 개발할 수 있습니다|
|HelloWorld.html|모든 게임 코드를 포함한 HelloWorld의 메인 페이지|
|HelloWorld.png|HelloWorld에서 사용하는 텍스쳐 파일|
|README.md|Cocos2d-JS 라이트 버전 사용 가이드|

## 사용 가이드

다음의 세 가지 버전 중 하나를 다운로드할 수 있습니다:

- **Cocos2d-JS 풀 버전**: 모든 기능과 Cocos2d-JS의 익스텐션을 포함하는 풀 버전 엔진으로 이 버전은 가장 큰 가능성과 창조성을 탐험할 수 있습니다. [공식 문서 루트 페이지](http://www.cocos2d-x.org/docs/manual/framework/html5/ko)에서 모든 기능의 리스트를 확인하실 수 있습니다.

- **Cocos2d-JS 라이트 버전**: 라이트 버전 엔진은 Cocos2d-JS의 몇가지 핵심 기능을 포함하며 깃털처럼 가볍고 놀랍도록 쉽게 사용할 수 있습니다. 기능 목록은 다음과 같습니다:
    + 캔버스 렌더러 (WebGL 미지원)
    + 씬(Scenes)과 레이어(layers)
    + 이벤트 매니저(Event manager)
    + 스케쥴러(Scheduler)
    + 스프라이트(Sprite)와 텍스쳐(texture)
    + 라벨(LabelTTF)
    + 오디오 엔진(Audio engine)
    + 액션(Actions)
    + 메뉴(Menu)와 메뉴 아이템(menu items)

- **커스터마이징 버전**: 당신이 선택한 기능을 포함하는 커스터마이징 버전.

### 사용법

앞선 소개처럼, 라이트 버전 엔진의 싱글 파일의 사용법은 다른 웹 라이브러리와 비슷합니다. 자바스크립트 파일을 HTML 페이지에 포함하는 것만으로 사용할 수 있으며 다운로드한 프로젝트의 HelloWorld.html을 참고하세요.

자바스크립트 파일의 로딩 타이밍에 주의해야 하는데 그 부분은 HelloWorld 예제를 살펴보겠습니다:

```
window.onload = function(){
    cc.game.onStart = function(){
        //...
    };
    cc.game.run("gameCanvas");
};
```

보시는 것처럼 `cc.game.onStart`와 `cc.game.run`은 윈도우의 onload 콜백에 포함하여 엔진의 자바스크립트 파일을 불러온 후에 Cocos2d-JS API를 사용하도록 합니다. 

또한 HelloWorld 프로젝트의 모든 파일이 로컬이나 웹 서버에 정확하게 포함되어야만 제대로 동작합니다.

## 유용한 링크들

- [온라인 API 레퍼런스](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [API 레퍼런스 다운로드](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [문서 루트](http://cocos2d-x.org/docs/manual/framework/html5/ko)
- [Github 저장소](https://github.com/cocos2d/cocos2d-js)
- [온라인 포럼](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [온라인 테스트 케이스](http://cocos2d-x.org/js-tests/)

## 클로저 컴파일러(Closure Compiler)에 대해서

[구글 클로즈 컴파일러](https://developers.google.com/closure/compiler/)를 사용하여 모든 JS 파일을 작은 사이즈로 압축할 수 있으며 압축된 버전을 다운 받으실 수도 있습니다. 절차는 다음과 같습니다:

1. 클로저 컴파일러의 JAR 앱 다운로드
2. build.xml에 당신만의 설정을 추가
3. 터미널에서 `ant` 실행
4. HelloWorld.html에 포함된 JS 파일을 아웃풋 파일인 `game.min.js`로 교체

모든 JS 코드는 같은 시간에 압축되어야 하기 때문에 압축하는 동안 어떠한 JS 코드도 수정하지 않도록 주의하세요, 아니면 에러가 발생합니다.

## 주의사항

HelloWorld.html를 여는 동안, 다음과 같은 에러가 발생할 수도 있습니다:
"Failed to load resource: the server responded with a status of 404 (Not Found)" 에러는 `project.json` 파일의 문제입니다.

이것은 문제가 아니며 간단히 무시해버릴 수도 있습니다. 또는 빈 project.json 파일을 생성해서 제거할 수도 있습니다.

## 다음으로

이 챕터에서는 순수 웹 개발의 작업흐름을 설명했고, 다음으로 코어 엔드 게임 개발을 위한 Cocos2d-JS의 작업흐름을 소개할 것입니다.
