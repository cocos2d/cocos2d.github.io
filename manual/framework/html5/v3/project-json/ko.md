# project.json

## 요약

프로젝트의 설정. `cocos2d.js`는 `project.json`로 교체되었습니다. 그리고 `index.html`와 같은 경로에 위치해야합니다.

장점:

* `json` 파일은 설정 파일에 적합합니다.

* `cocos-console`과 같은 지원도구와 잘 어울립니다.

## 설명

#### debugMode

예전 `COCOS2D_DEBUG`를 교체.

* 0 : close all
* 1 : info level
* 2 : warn level
* 3 : error level
* 4 : info level with web page
* 5 : warn level with web page
* 6 : error level with web page

#### renderMode

* 0 : default
* 1 : canvas
* 2 : webgl

#### showFPS

기본값은 false.

#### frameRate

기본값은 60.

#### engineDir

버전 2.x에서 `***/cocos2d-html5/cocos2d`를 가리켜야 했지만 버전 3.x에서는 `***/cocos2d-html5`를 가리키면 됩니다.
기본값 `frameworks/cocos2d-html5`.

#### jsList

예전 `appFiles`과 같은 역할을 하는 자바스크립트 파일의 리스트.

#### id

예전 `tag`와 같은 역할을 하며 캔버스의 id를 의미.

#### modules

프로젝트에 필요한 모듈들.

모듈의 이름은 `moduleConfig.json`의 `module`을 참고.

```
"modules" : ["extensions", "pluginx", "box2d", "chipmunk"]
```
