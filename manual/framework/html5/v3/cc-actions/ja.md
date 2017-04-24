# アクションの新しいデザイン

Cocos2d-JS v3.0 betaでは,アクションを簡単に使用できるようにいくつかの点が改善されています。

### アクションを生成する為のショートカット ###

使用したいアクション名でアクションを生成できるようにショートカットを用意しています。

例 :

```
var action = cc.MoveBy.create( 2, cc.p( 10, 10 ) )
```
このようにしてアクションを生成することができます。  

```
var action = cc.moveBy( 2, cc.p( 10, 10 ) )
```

### easeアクションの新しいデザイン ###

easeアクションは装飾的なアクションで,個別に使用することはできません。ターゲットにアタッチして使用することができます。cc.ActionEaseとそのサブクラスは`update`関数を所有しているので,`cc.ActionInterval`から継承する必要はありません。また,デルタ時間を変更する`easing`関数もラップされています。

1つ以上のオブジェクトを受け取るために,`cc.ActionInterval`に`easing`関数を追加しました。

以下に古い使用方法と新しい使用方法を記述しています。

**古い使用方法 :**

```
var easeMoveBy = cc.EaseIn.create( cc.MoveBy.create( 2, cc.p( 100, 50 ) ), 0.3 );
```

**新しい使用方法 :**

```
var easeMoveBy = cc.moveBy( 2, cc.p( 100, 50 ) ).easing( cc.easeIn( 0.3 );
```

### cc.Repeat, cc.RepeatForever, cc.Speedの新しいデザイン ###

cc.Repeat, cc.RepeatForever, cc.Speedなども装飾的なアクションなので,`cc.ActionInterval`に`repeat`関数, `repeatForever`関数, `speed`関数, `getSpeed`関数, `setSpeed`関数を追加しました。これらの変更により,複雑なアクションを明確にわかりやすく記述することが可能になりました。

以下に古い使用方法と新しい使用方法を記述しています。

**古い使用方法 :**

```
var anAction = cc.Sequence.create(
    cc.Speed.create( cc.Repeat.create( cc.EaseIn.create( cc.MoveBy.create( 2, cc.p( 100, 50 ) ), 0.3 ), 5 ), 1.7 ),
    cc.RotateBy.create( 2, 30 ) );
```

**新しい使用方法 :**

```
var anAction = cc.sequence(
		cc.moveBy( 2, cc.p( 100, 50 ) ).easing( cc.easeIn( 0.3 ).repeat( 5 ).speed( 1.7 ), 
		cc.rotateBy( 2, 30 ) );
```

**注意 :** すべての変更には下位互換性があります。

### 新しい使用方法一覧 ###

古い使用方法                           | 新しい使用方法
------------                         | ------------
cc.Repeat.create( action, num )      | action.repeat( num )
cc.RepeatForever.create( action )    | action.repeatForever()
cc.Speed.create( action, speed )     | action.speed( speed )
cc.Speed.setSpeed( speed )  	         | action.setSpeed( speed )
cc.Speed.getSpeed()  			     | action.getSpeed()
cc.EaseIn.create( action, rate )     | action.easing( cc.easeIn( rate ) )
cc.EaseOut.create( action, rate )    | action.easing( cc.easeOut( rate ) )
cc.EaseInOut.create( action, rate )  | action.easing( cc.easeInOut( rate ) )
cc.EaseExponentialIn.create( action )      | action.easing( cc.easeExponentialIn() )
cc.EaseExponentialOut.create( action )     | action.easing( cc.easeExponentialOut() )
cc.EaseExponentialInOut.create( action )   | action.easing( cc.easeExponentialInOut() )
cc.EaseSineIn.create( action )             | action.easing( cc.easeSineIn() )
cc.EaseSineOut.create( action )            | action.easing( cc.easeSineOut() )
cc.EaseSineInOut.create( action )          | action.easing( cc.easeSineInOut() )
cc.EaseElasticIn.create( action )          | action.easing( cc.easeElasticIn() )
cc.EaseElasticOut.create( action )         | action.easing( cc.easeElasticOut() )
cc.EaseElasticInOut.create( action, rate ) | action.easing( cc.easeElasticInOut( rate ) )
cc.EaseBounceIn.create( action )	           | action.easing( cc.easeBounceIn() )
cc.EaseBounceOut.create( action )          | action.easing( cc.easeBounceOut() )
cc.EaseBounceInOut.create( action )        | action.easing( cc.easeBounceInOut() )
cc.EaseBackIn.create( action )             | action.easing( cc.easeBackIn() )
cc.EaseBackOut.create( action )            | action.easing( cc.easeBackOut() )
cc.EaseBackInOut.create( action )          | action.easing( cc.easeBackInOut() )

**例 :**

````
EaseIn :
var move = cc.MoveBy.create( 2, cc.p( winSize.width - 80, 0 ) ).easing( cc.easeIn( 2.0 ) );
sprite.runAction( move );

RepeatForever :
var move = cc.MoveBy.create( 2, cc.p( winSize.width - 80, 0 ) ).RepeatForever();
sprite.runAction( move );
````

**注意 :**

```
var action = cc.RotateTo.create( 0.5, 90 );

// 速度が6倍になります。
action.speed( 2 ).speed( 3 );
action.getSpeed() ==> 6;

// 6回リピートします。
action.repeat( 2 ).repeat( 3 );
```