# cc.async

## 요약

이 것은 `node.js`의 `async`모듈을 모방한 싱글톤 모듈입니다.
`parallel`와 `map`을 추가했으며 나머지는 향후 추가될 수 있습니다.

## cc.async.parallel

I/O 태스크을 비동기적으로 처리합니다.

인수:

|   이름   |  종류   |  remark |
|:--------:|:-------:|:-------:|
|tasks|Array|필수. tasks의 각 아이템은 함수여야 합니다.|
|option|Object/Function|선택. node.js의 async모듈에는 존재하지 않습니다. 트리거나 오브젝트로서 함수가 될 수 있습니다 : {cb:function, cbTarget:object/null, trigger:function, triggerTarget:object/null}|
|cb|Function|선택. 모든 태스크의 마지막 콜백.|

사용 예 1:

```
cc.async.parallel([
    function(cb){
        cb(null, "a");//Instead of async function here
    },
    function(cb){
        cb(null, "B");//Instead of async function here
    }
], function(err, results){
    if(err) throw err;//error
    console.log(results);//["a", "B"]
});
```

사용 예 2:

```
cc.async.parallel([
    function(cb){
        cb(null, "a");//Instead of async function here
    },
    function(cb){
        cb(null, "B");//Instead of async function here
    }
], function(item, count, totalNum){
    console.log(item, count, totalNum);
}, function(err, results){
    if(err) return console.error(err);
    console.log(results);//["a", "B"]
});
```

사용 예 3:

```
var tempObj = {
    name : "TempObj",
    trigger : function(item, count, totalNum){
        console.log(this.name);//TempObj
        console.log(item, count, totalNum);
    },
    cb : function(err, results){
        if(err) return console.error(err);
        console.log(this.name);//TempObj
        console.log(results);//["a", "B"]
    }
};
var option = {
    trigger : tempObj.trigger,
    triggerTarget : tempObj,
    cb : tempObj.cb,
    cbTarget : tempObj
};
cc.async.parallel([
    function(cb){
        cb(null, "a");//Instead of async function here
    },
    function(cb){
        cb(null, "B");//Instead of async function here
    }
], option);
```

## cc.async.map

인수:

|   이름   |  종류   |  remark |
|:--------:|:-------:|:-------:|
|tasks|Array|필수. tasks의 각 아이템은 함수여야 합니다.|
|option|Object/Function|선택. node.js의 async모듈에는 존재하지 않습니다. 반복자나 오브젝트로서 함수가 될 수 있습니다 : {cb:function, cbTarget:object/null, iterator:function, iteratorTarget:object/null}|
|cb|Function|선택. 모든 태스크의 마지막 콜백. 태스크이 배열일 경우에 결과도 배열입니다. 그러나 태스크가 오브젝트면 결과는 오브젝트로 태스크와 같은 키를 가집니다.|

사용 예 1:

```
cc.async.map(["a", "B"], function(item, index, cb){
    console.log(this.name);//TempObj
    cb(null, index + ":" + item);//Instead of async function here
}, function(err, results){
    if(err) return console.error(err);
    console.log(results);//[ '0:a', '1:B' ]
});
```

사용 예 2:

```
cc.async.map({a:"a", b:"B"}, function(item, key, cb){
    cb(null, key + ":" + item);//Instead of async function here
}, function(err, results){
    if(err) return console.error(err);
    console.log(results);//{ a: 'a:a', b: 'b:B' }
});
```

사용 예 3:

```
var tempObj = {
    name : "TempObj",
    iterator : function(item, key, cb){
        cb(null, key + ":" + item);//Instead of async function here
    },
    cb : function(err, results){
        if(err) return console.error(err);
        console.log(this.name);//TempObj
        console.log(results);//{ a: 'a:a', b: 'b:B' }
    }
};
var option = {
    iterator : tempObj.iterator,
    iteratorTarget : tempObj,
    cb : tempObj.cb,
    cbTarget : tempObj
};
cc.async.map({a:"a", b:"B"}, option);
```
