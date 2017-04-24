#Cocos2d-JS v3.0 beta에서 Cocos2d-JS v3.0 RC0로 업그레이드

## 0. Cocos2d-JS v2.x에서 v3.0 beta로 업그레이드

혹시 Cocos2d-html5나 Cocos2d-JSB v.2.x를 사용 중이라면, 먼저 다음의 업그레이드 가이드를 먼저 읽어주세요. : [Cocos2d-html5 v2.2.x에서 Cocos2d-JS v3.0 beta로 업그레이드](../../v3.0a/upgrade-guide/en.md)

## 1. 레이어 굽기(Layer baking)

RC0에서는, 레이어를 정적 캐쉬(static cache)로 구울 수 있어서, 더 효율적으로 렌더링할 수 있습니다.

```
var layer = new cc.Layer();
layer.bake();

// 굽기 해제
layer.unbake();
```

상세한 정보는 다음 문서를 참조해주세요. [레이어 굽기에 대해서(layer baking document)](http://cocos2d-x.org/docs/manual/framework/html5/v3/bake-layer/en)

## 2. 오브젝트 풀(Object pool) : `cc.pool`

오브젝트 풀 구현은 RC0에서 제안되었습니다: `cc.pool`, 오브젝트들이 자주 릴리스되고 재생성되는 경우 당신이 만든 게임 성능을 향상시키는데 도움을 줍니다.

몇몇 흔한 사용 예 :
    - 슈팅 게임의 총알 (매우 빨리 사라짐, 대량 생성 및 파괴, 다른 오브젝트에 의한 사이드 이펙트 없음)
    - 캔디 크러쉬의 블럭들 (대량 생성 및 파괴)
    - 기타 등등...

더이상 오브젝트가 필요하지 않지만 재사용을 원할 때는 `cc.pool.putInPool(obj)`로 오브젝트풀에 추가할 수 있습니다.

```
layer.removeChild(sprite);
cc.pool.putInPool(sprite);
```

오브젝트풀에서 오브젝트를 다시 꺼내고 싶으면, `cc.pool.getFromPool()`를 사용하면 됩니다.

```
cc.pool.getFromPool(cc.Sprite, "a.png");
```

풀 안의 오브젝트가 사용 가능한지를 알고 싶을 때는 `cc.pool.hasObj(cc.Sprite)`를 사용합니다.

또 풀의 모든 오브젝트를 깨끗하게 정리하고 싶을 때는 `cc.pool.drainAllPool()`를 사용합니다.

## 3. 새로운 이징 함수(easing functions)

우리는 다음의 리스트와 같은 이징 함수들을 새롭게 추가했습니다:

```
cc.easeBezierAction(p0, p1, p2, p3)
cc.easeQuadraticActionIn()
cc.easeQuadraticActionOut()
cc.easeQuadraticActionInOut()
cc.easeQuarticActionIn()
cc.easeQuarticActionOut()
cc.easeQuarticActionInOut()
cc.easeQuinticActionIn()
cc.easeQuinticActionOut()
cc.easeQuinticActionInOut()
cc.easeCircleActionIn()
cc.easeCircleActionOut()
cc.easeCircleActionInOut()
cc.easeCubicActionIn()
cc.easeCubicActionOut()
cc.easeCubicActionInOut()
```

새로운 API들은 `action.easing(cc.easeQuadraticActionIn())`과 같이 사용됩니다.

## 4. jsb 네임스페이스

JSB에서만 사용되는 API들에 대해서 JSB 네임 스페이스를 적용했습니다:

```
cc.fileUtils        -->     jsb.fileUtils
cc.Reflection       -->     jsb.Reflection
cc.AssetsManager    -->     jsb.AssetsManager
```

그리고 `jsb.fileUtils`에 몇몇 새로운 함수를 도입했습니다:

```
jsb.fileUtils.getSearchPaths()
jsb.fileUtils.setSearchPaths(paths)
jsb.fileUtils.getSearchResolutionsOrder()
jsb.fileUtils.setSearchResolutionsOrder(orders)
jsb.fileUtils.addSearchResolutionsOrder(order)
```

## 5. ccui.Widget

ccui.Widget의 바운더리 함수(boundary functions)의 이름이 변경되었습니다.

```
getLeftInParent     -->     getLeftBoundary
getBottomInParent   -->     getBottomBoundary
getRightInParent    -->     getRightBoundary
getTopInParent      -->     getTopBoundary
```

우리는 또한 `ccui.Widget`에 `getContentSize`와 `setContentSize`를 추가했으며, `cc.Node`와 같은 사용법을 공유합니다. 

## 6. 다른 API 수정사항

### 6.1 cc.FadeIn

```
cc.FadeIn.create(duration, toOpacity)   -->     cc.FadeIn.create(duration)
```

### 6.2 형식화된 문자열(Formatted string) in cc.log

```
var str = "The number is";
var number = cc.random0To1() * 10;
cc.log("%s : %d", str, number);
```

### 6.3 cc.AssetsManager

RC0 버전에서, `downloadFailedAssets` 함수가 실패한 다운로드를 재시작할 수 있으며, 다른 기능에 대해서도 개선이 이루어졌습니다. [Assets manager document](../../../v3/assets-manager/en.md)
