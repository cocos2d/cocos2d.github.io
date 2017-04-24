# cc.game

## 요약

`cc.Application`과 `cc.AppControl`는 게임 실행 코드를 단순화하기 위해 `cc.game`으로 교체되었습니다.

## 사용법

먼저 `index.html`를 통하여 `xxx/frameworks/cocos2d-html5/CCBoot.js`를 선언합니다.

그리고 게임을 부팅하기 위한 코드를 추가하며, 대개의 경우는 `main.js`를 사용합니다.

또한 `project.json`에 프로젝트의 세팅을 설정해야합니다.

```
cc.game.onStart = function(){
    //load resources
    cc.LoaderScene.preload(resource_list, function () {
        cc.director.runScene(new MyScene());
    }, this);
};
cc.game.run();
```

`cc.game.run`이 호출되는 동안 엔진은 `project.json`를 읽을 것입니다.


## 지연 실행

모든 스크립트가 준비되었다고 해도 게임의 메인 루프는 이후에 실행할 수도 있습니다.

```
cc.game.onStart = function(){
    //load resources
    cc.LoaderScene.preload(resource_list, function () {
        cc.director.runScene(new MyScene());
    }, this);
};
cc.game.prepare();

document.getElementById("myBtn").addEventListener("click", function(){
    cc.game.run();
});
```

## debugMode 상수

`project.json`의 `debugMode`:

```
DEBUG_MODE_NONE : 0                     // 없음
DEBUG_MODE_INFO : 1                     // INFO, WARN, ERROR가 표시됩니다.
DEBUG_MODE_WARN : 2                     // WARN, ERROR가 표시됩니다.
DEBUG_MODE_ERROR : 3                    // ERROR가 표시됩니다.
DEBUG_MODE_INFO_FOR_WEB_PAGE : 4        // INFO, WARN, ERROR이 HTML 페이지에 표시됩니다.
DEBUG_MODE_WARN_FOR_WEB_PAGE : 5        // WARN, ERROR이 HTML 페이지에 표시됩니다.
DEBUG_MODE_ERROR_FOR_WEB_PAGE : 6       // ERROR이 HTML 페이지에 표시됩니다.
```

## CONFIG_KEY 상수

`project.json`의 키:

```
engineDir : "engineDir",
dependencies : "dependencies",
debugMode : "debugMode",
showFPS : "showFPS",
frameRate : "frameRate",
id : "id",
renderMode : "renderMode",
jsList : "jsList",
classReleaseMode : "classReleaseMode"
```

``cc.game.config[cc.game.CONFIG_KEY.***]`를 사용하여 게임의 설정 값을 가져올 수 있습니다.

## EVENT\_HIDE & EVENT\_SHOW
Cocos2d-JS v3.0에서는 브라우저의 탭을 바꾸거나 스마트폰의 홈 버튼을 누르는 것처럼 포어그라운드나 백그라운드 진입을 위한 이벤트 리스너를 추가할 수 있습니다. 같은 이벤트에 대해서 두 개 또는 그 이상의 핸들러를 추가할 수 있습니다.

	cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function(){
        //onEnterBackground 핸들러
    });
    cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function(){
        //onEnterForeground 핸들러
    });
