# 액션의 새로운 설계 #

Cocos2d-JS v3.0 베타에서 액션은 보다 친화적이고 사용하기 쉽도록 향상되었습니다.

### 액션 생성을 위한 손쉬운 방법 제공 ###

We provide a shortcut to create an action, same name as action class name with the first character is lower.
액션 생성을 위한 손쉬운 방법을 제공하며, 같은 이름의 액션 클래스 이름의 첫 문자를 소문자로 바꾸었습니다.
 
예를 들어: 

```
 var action =  cc.MoveBy.create(2, cc.p(10, 10))
```
위의 액션을 다음과 같이 생성합니다.
```
 var action = cc.moveBy(2,cc.p(10,10))
```

### 이지(ease) 액션 재설계 ###

이지 액션은 실제로 다른 액션과 연계되어 사용됩니다. 타겟 액션을 첨부해야 하며 개별적으로는 사용할 수 없습니다. cc.ActionEase와 그 서브 클래스의 함수를 사용하기 쉽도록 업데이트하였습니다. 그래서 `cc.ActionInterval`로부터 상속 받을 필요 없이 델타 타임을 바꿀 수 있는 `easing` 함수를 제공하는 오브젝트로 랩핑했습니다.

`cc.ActionInterval`에 `easing` 함수를 추가하여 하나 또는 그 이상의 이지 오브젝트를 사용할 수 있습니다. 

예전 사용 예와 현재 새로운 사용 예를 비교하면 새로운 사용법이 보다 쉬운 것을 볼 수 있습니다:

**예전 사용 예:**

```
var easeMoveBy = cc.EaseIn.create(cc.MoveBy.create(2, cc.p(100,50)),0.3);
```

**새로운 사용 예:**

```
var easeMoveBy = cc.moveBy(2,cc.p(100,50)).easing(cc.easeIn(0.3));
```


### cc.Repeat, cc.RepeatForever, cc.Speed 재설계 ###

cc.Repeat, cc.RepeatForever, cc.Speed 또한 다른 액션과 연계되어 사용됩니다. 그래서 우리는 `cc.ActionInterval`에 `repeat`,`repeatForever`,`speed`,`getSpeed`,`setSpeed`와 같은 몇몇 함수를 추가했습니다. 이런 모든 변화는 개발자가 복합적인 액션을 보다 분명하게 사용할 수 있게 해줍니다.

예전 사용 예와 새로운 사용 예를 비교해보세요:

**예전 사용 예:**
```
var anAction = cc.Sequence.create(
    cc.Speed.create(cc.Repeat.create(cc.EaseIn.create(cc.MoveBy.create(2, cc.p(100,50)),0.3), 5),1.7),
    cc.RotateBy.create(2, 30));
```

**새로운 사용 예:**
```
var anAction = cc.sequence(
		cc.moveBy(2,cc.p(100,50)).easing(cc.easeIn(0.3).repeat(5).speed(1.7), 
		cc.rotateBy(2,30));
```

**주의사항**: 모든 변경사항은 이전 버전과 호환됩니다.

### 새로운 설계 리스트 ###

예전 사용 예       				     | 새로운 사용 예
------------ 					     | ------------
cc.Repeat.create(action, num)       | action.repeat(num)
cc.RepeatForever.create(action)     | action.repeatForever()
cc.Speed.create(action, speed)      | action.speed(speed)
cc.Speed.setSpeed(speed)  	         | action.setSpeed(speed)
cc.Speed.getSpeed()  			     | action.getSpeed()
cc.EaseIn.create(action, rate)      | action.easing(cc.easeIn(rate))
cc.EaseOut.create(action, rate)     | action.easing(cc.easeOut(rate))
cc.EaseInOut.create(action, rate)   | action.easing(cc.easeInOut(rate))
cc.EaseExponentialIn.create(action) | action.easing(cc.easeExponentialIn())
cc.EaseExponentialOut.create(action)| action.easing(cc.easeExponentialOut())
cc.EaseExponentialInOut.create(action)| action.easing(cc.easeExponentialInOut())
cc.EaseSineIn.create(action)		 | action.easing(cc.easeSineIn())
cc.EaseSineOut.create(action)		 | action.easing(cc.easeSineOut())
cc.EaseSineInOut.create(action)		 | action.easing(cc.easeSineInOut())
cc.EaseElasticIn.create(action)		 | action.easing(cc.easeElasticIn())
cc.EaseElasticOut.create(action)	 | action.easing(cc.easeElasticOut())
cc.EaseElasticInOut.create(action, rate)| action.easing(cc.easeElasticInOut(rate))
cc.EaseBounceIn.create(action)		 | action.easing(cc.easeBounceIn())
cc.EaseBounceOut.create(action)		 | action.easing(cc.easeBounceOut())
cc.EaseBounceInOut.create(action)	 | action.easing(cc.easeBounceInOut())
cc.EaseBackIn.create(action)		 | action.easing(cc.easeBackIn())
cc.EaseBackOut.create(action)		 | action.easing(cc.easeBackOut())
cc.EaseBackInOut.create(action)		 | action.easing(cc.easeBackInOut())

**예제**:

````
EaseIn:
var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0)).easing(cc.easeIn(2.0));
sprite.runAction(move);

RepeatForever:
var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0)).RepeatForever();
sprite.runAction(move);
````

**주의사항**:

```
var action = cc.RotateTo.create(0.5, 90);

//6 times speed
action.speed(2).speed(3);
action.getSpeed() ==> 6;

//Repeat 6 times
action.repeat(2).repeat(3);
```
