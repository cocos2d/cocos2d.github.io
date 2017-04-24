# 4.6 게임의 디렉터(Director)

## 4.6.1 컨셉(Concept)

영화를 좋아하신다면 당신이 좋아하는 영화 감독들의 이름을 알고 계실 것입니다. 실제로 그들이 자신의 영화에 출연하지 않더라도 그들은 영화에 생명력을 부여합니다. 감독은 영화를 만드는데 있어서 가장 중요한 역할을 담당합니다.

그래서 게임의 감독은 누구일까요? 당연히 우리는 개발자인 당신이라고 말할 수 있습니다. 그러나 당신 또한 게임 엔진에서 원하는 모든 것을 달성하기 위한 총감독이 필요합니다. 이 것은 정확하게 위대한 게임을 만드는 최고의 친구인 Cocos2d-JS의 디렉터가 담당합니다. 

더 구체적으로 Cocos2d-JS의 디렉터는 게임 실행 환경을 설정하고 메인 게임 루프와 씬 사이의 전환을 관리하는 오브젝트입니다. 이번 챕터에서는 디렉터의 주요 태스크와 어떻게 디렉터가 작동하는지에 대해 소개할 것입니다.

## 4.6.2 디렉터의 태스크

디렉터 오브젝트는 Cocos2d-JS에서 `cc.director`로 표현됩니다. 주요 태스크는 다음과 같습니다:

- **환경 설정**

    처음으로 게임이 시작하기 전에 디렉터는 게임을 위한 작업 환경을 설정합니다:

    1. 프로젝션(projection), 픽셀 타입(pixel type) 등을 포함한 뷰(view)의 컨택스트(context) 설정
    2. 프레임 속도(frame rate) 설정
    3. 스케쥴러, 액션 매니저, 이벤트 매니저 초기화
    4. 렌더러와 텍스쳐 캐시 초기화
    5. 디렉터의 다른 변수들을 기본값으로 설정

- **메인 루프 실행**
    
    비디오 게임의 기본 이론은 오래된 애니메이션과 꽤 비슷합니다. 애니메이션을 만들 때 아티스트가 아주 짧은 틈(예를 들어 1/24초)에 연속적으로 보여질 정적 이미지를 페이지별로 그리는데 이 때 각 페이지를 프레임이라고 부릅니다.

    비디오 게임도 같은 방식으로 렌더링합니다. 매 1/60초마다 프로그램은 디스플레이되는 스크린에 이미지(프레임)을 그립니다. 각 프레임의 렌더링 프로세스는 실행 중인 씬의 올바른 변형과 모든 그래픽 요소의 다른 정보들을 계산해서 스크린에 그것들을 하나씩 렌더링합니다. 게임 프로세스로서 각 프레임은 아주 조금씩 변화하고 결국 당신의 눈에는 아름다운 비디오 게임으로 보일 것입니다.

    `cc.director`'의 메인 루프에서 이 모든 것들이 수행됩니다. 메인 루프는 화면에 프레임을 그리는 절차를 반복합니다. 여기에 각 프레임이 처리되는 세부 내용이 있습니다.

    1. 성능 디버그 정보를 제공하기 위한 마지막 프레임 이후 경과한 시간을 계산합니다.
    2. 스케쥴된 태스크를 실행하기 위한 스케쥴러를 만듭니다.
    3. `cc.eventManager`를 통해 `cc.Director.EVENT_AFTER_UPDATE` 이벤트를 알립니다.
    4. 게임 화면을 지웁니다.
    5. 필요하다면 실행 중인 씬으로 교체합니다.
    6. 실행 중인 씬의 컨텐츠 노드를 살펴보고 필요하다면 각 노드를 위한 렌더러에게 변형을 업데이트하도록 지시합니다.
    7. `cc.eventManager`를 통해 `cc.Director.EVENT_AFTER_VISIT` 이벤트를 알립니다.
    8. 렌더러가 모든 렌더에게 씬에 그려지도록 지시합니다.
    9. `cc.eventManager`를 통해 `cc.Director.EVENT_AFTER_DRAW` 이벤트를 알립니다.
    10. 글로벌 토털 프레임을 하나 증가시킵니다.

    게다가 `cc.director`는 또한 메인 루프를 제어하기 위한 약간의 함수를 제공합니다:

    1. 메인 루프 정지: `cc.director.pause()`
    2. 메인 루프 정지로부터 재개: `cc.director.resume()`

- **씬 관리**

    and your program should control the scene flow via the APIs of `cc.director`:
    `cc.director`의 또다른 주요 태스크는 씬 관리입니다. 디렉터는 한번에 하나의 씬만을 실행할 수 있지만 원할 때 실행 중인 씬을 교체할 수 있어야 합니다. 그래서 일반적인 게임은 종종 서로 다른 용도를 가진 몇몇의 씬을 가지고 `cc.director`의 API들을 통해 씬의 흐름을 제어할 수 있어야 합니다:
    
    ```
    // cc.director를 통해 지정된 씬을 실행
    cc.director.runScene(scene);

    // 현재 실행 중인 씬을 획득
    var scene = cc.director.getRunningScene();
    
    // 씬 스택에 씬을 삽입,
    // 그리고 실행 중인 씬을 삽입한 씬으로 교체
    var scene = cc.director.pushScene(scene);

    // 씬 스택의 가장 위에 있는 씬을 제거,
    // 그리고 실행 중인 씬을 다음 가장 위에 있는 씬으로 교체
    cc.director.popScene();
    
    // 루트 씬을 제외하고 씬 스택의 모든 씩을 제거,
    // 그리고 실행 중인 씬을 루트 씬으로 교체
    cc.director.popToRootScene()
    ```

    추가적으로 `cc.TransitionScene`을 사용해서 씬과 씬 사이에 전환 효과를 주며 교체를 할 수 있습니다.

    ```
    // 전환 효과를 2초 동안 실행
    var transitionTime = 2;
    // 다음 씬 만들기
    var nextScene = new cc.Scene();
    // 위에서 생성한 씬으로 전환 씬 만들기
    var transitionScene = new cc.TransitionProgressInOut(transitionTime, nextScene);
    // 전환 씬 실행
    cc.director.runScene(transitionScene);
    ```

    예제에서 보는 것처럼 `cc.TransitionProgressInOut` 전환 효과를 사용하는데 그 이유는 기반 클래스인 `cc.TransitionScene`가 실제적으로 아무런 효과를 가지고 있지 않기 때문입니다. Cocos2d-JS에서 가능한 다른 전환 효과들을 살펴보시려면 API 레퍼런스나 TransitionScene 테스트 케이스를 참고하세요. 

## 4.6.3 설정과 속성

디렉터가 실행 환경을 제어하는 것처럼 또한 몇몇 설정과 속성을 가집니다:

```
// 디렉터가 정지 상태인지 여부를 알아냄
var paused = cc.director.isPaused();

// 애니메이션 간격 설정의 게터(Getter)와 세터(setter)
var interval = cc.director.getAnimationInterval();
cc.director.setAnimationInterval(value);

// content scale factor의 게터와 세터 
var scale = cc.director.getContentScaleFactor();
cc.director.setContentScaleFactor(scaleFactor);

// visible origin과 visible size를 위한 게터
var origin = cc.director.getVisibleOrigin();
var size = cc.director.getVisibleSize();

// 윈도우 크기의 게터, 윈도우 크기는 설정된 해상도 크기와 동일하고 윈도우 크기에서의 픽셀은 게임 윈도우의 실제 픽셀 크기입니다
var winSize = cc.director.getWinSize();
var winSizeInPixel = cc.director.getWinSizeInPixels();

// 디버그 상태를 표시할지 여부의 게터와 세터 
var isDisplaying = cc.director.isDisplayStats();
cc.director.setDisplayStats(displayStats);

// 뷰의 게터와 세터, cc.view를 참조하세요
cc.director.var view = cc.director.getOpenGLView();
cc.director.cc.director.setOpenGLView(openGLView);

// WebGL이나 OpenGL 프로젝션 게터와 세터
// 가능한 프로젝션들: cc.Director.PROJECTION_2D, cc.Director.PROJECTION_3D, cc.Director.PROJECTION_CUSTOM
cc.director.getProjection();
cc.director.setProjection(projection);
```

## 4.6.4 스케쥴러

앞에서 언급했듯이 메인 루프는 스케쥴러를 통해 스케쥴된 태스크를 실행합니다. 스케쥴러는 디렉터의 내부 시스템으로 실행 중인 씬의 노드들을 위한 몇 가지 형태의 스케쥴된 태스크들을 실행할 수 있습니다. 언제 어떻게 그런 태스크들을 실행할 것인지를 관리합니다.

There are several common ways to schedule a task, they are demonstrated in the following code snippet:
태스크를 스케쥴하는 몇가지 일반적인 방법이 있는데 다음 코드를 통해 설명하겠습니다:

```
var node = new cc.Node();

// 노드의 업데이트 함수를 매 프레임마다 실행
node.scheduleUpdate();
// 콜백 함수는 callback을 delay만큼 지연한 후에 interval 시간마다 repeat에서 설정한 반복 여부에 따라 실행
node.schedule(callback, interval, repeat, delay);
// 콜백 함수는 딜레이 타임 이후에 실행
node.scheduleOnce(callback, delay);
// 콜백 태스크를 취소
node.unschedule(callback);
// 노드의 모든 스케쥴된 태스크를 취소
node.unscheduleAllCallbacks();
```

**주의**

- 모든 스케쥴된 콜백 함수는 실행 컨텍스트로서의 타겟 노드에서 실행됩니다. 이는 콜백 함수의 `this` 오브젝트가 타겟 노드를 참조한다는 것을 의미합니다.
- 딜레이 시간이 0이라고 하더라도 첫번째 스케쥴된 콜백은 스케쥴 함수의 실행 이후 다음 프레임에 실행됩니다.

## 4.6.5 액션 매니저

액션 매니저는 디렉터의 또다른 중요한 내부 시스템입니다. 이는 실행 중인 씬의 모든 액션을 관리하고 매 프레임에 등록된 모든 액션 `update` 함수를 실행합니다. 액션 시스템의 세부 사항은 다른 문서에서 다룰 것입니다. 

## 4.6.6 디렉터의 이벤트

게임의 디렉터를 위한 몇가지 흥미로운 이벤트가 있습니다. 

- `cc.Director.EVENT_AFTER_DRAW`: 이 이벤트는 매 프레임의 렌더 프로세스 이후에 트리거됩니다.
- `cc.Director.EVENT_AFTER_VISIT`: 이 이벤트는 매 프레임의 씬 그래프 탐색 이후에 트리거됩니다.
- `cc.Director.EVENT_AFTER_UPDATE`: 이 이벤트는 매 프레임의 스케쥴된 태스크 이후에 트리거됩니다.
- `cc.Director.EVENT_PROJECTION_CHANGED`: 이 이벤트는 디렉터의 프로젝션이 변화한 후에 트리거됩니다.
