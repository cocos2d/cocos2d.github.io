# Cocos2d-JS 싱글 파일 엔진 유저 가이드

이 가이드는 [온라인 다운로더](http://cocos2d-x.org/filecenter/jsbuilder/)에서 다운로드한 Cocos2d-JS의 싱글 파일 엔진의 사용법에 관한 가이드입니다.

다음의 버전 중 하나를 다운로드 받으실 수 있습니다:

- **Cocos2d-JS 풀 버전**: 풀 버전 엔진은 모든 기능과 모든 익스텐션을 포함합니다. 기능을 보시려면 [Cocos2d-JS 안내 문서](http://www.cocos2d-x.org/docs/manual/framework/html5/ko)를 참조하세요.

- **Cocos2d-JS 라이트 버전**: 라이트 버전은 몇가지 핵심 기능을 포함합니다. 기능 목록은 다음과 같습니다:
    + 캔버스 랜더러 (WebGL 지원 X)
    + 씬(Scene)과 레이어(Layers)
    + 이벤트 매니저(Event Manager)
    + 스케쥴러(Scheduler)
    + 스프라이트(Sprite)와 텍스쳐2D(Texture2D)
    + 라벨(LabelTTF)
    + 오디오(Audio)
    + 액션(Actions)
    + 메뉴(Menu)와 메뉴 아이템(MenuItems)

- **커스터마이징 버전**: 당신의 필요에 따라서 커스터마이징하여 해당 기능이 포함된 JS 파일을 다운로드 받으실 수 있습니다.

## 사용법

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
