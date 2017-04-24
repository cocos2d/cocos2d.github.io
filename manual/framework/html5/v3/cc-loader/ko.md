# cc.loader
===============

## 요약

예전 `cc.Loader`는 플러그인 모드 `cc.loader`로 재설계되었습니다.

모든 종류의 리소스 로더 플러그인은 각 모듈에 등록되어 있습니다. 버전 2.x와는 꽤 다릅니다.

이 경우 리소스 관리가 더 용이하고 개발자가 자신만의 리소스 로더 플러그인으로 커스터마이징할 수 있습니다.

`cc.loader`는 loadJs, loadImg 등 리소스의 기본 작업을 위한 API를 가지고 있습니다.

## API 설명

(`full-path` = `base-path` + `res-path`)


##### resPath

리소스의 기본 경로 (오디오 제외).

`cc.loader.resPath = "res"`를 설정하면 `a.png`의 `full-path`는 `res/a.png`이 됩니다.

##### audioPath

오디오의 기본 경로.

##### getXMLHttpRequest

XMLHttpRequest를 얻습니다.

##### loadJs

자바스크립트를 로드합니다.

```스크립트
인수:
url     리소스의 full-path
cb      콜백

return  none
```

* 사용법1:

```스크립트
cc.loader.loadJs("src", [
    "a.js", "b.js"
], function(err){
    if(err) return console.log("load failed");
    //success
});
```

* 사용법2:

```script
cc.loader.loadJs([
    "src/a.js", "src/b.js"
], function(err){
    if(err) return console.log("load failed");
    //success
});
```

* 사용법3:

```script
cc.loader.loadJs("src/a.js", function(err){
    if(err) return console.log("load failed");
    //success
});
```

##### loadJsWithImg

로딩 이미지와 함께 자바스크립트를 불러옵니다.

##### loadTxt

텍스트를 로드합니다.

```스크립트
인수:
url     리소스의 full-path
cb      콜백

return  none
```

사용법:

```스크립트
cc.loader.loadTxt("res/a.txt", function(err, data){
    if(err) return console.log("load failed");
    //success
});
```

##### loadImg

이미지를 로드합니다.

```스크립트
인수:
url     리소스의 full-path
option  선택. 구조는 `{isCrossOrigin : true}`입니다. `isCrossOrigin`의 기본값은 `true`(선택).
cb      콜백

return  이미지의 인스턴스
```


##### loadBinary

비동기적으로 바이너리 파일을 로드합니다.

```스크립트
인수:
url     리소스의 full-path
cb      콜백

return  바이너리의 데이터.
```


##### loadBinarySync

바이너리 파일을 동기적으로 로드합니다 (비추천).

```스크립트
인수:
url     리소스의 full-path
cb      콜백

return  바이너리의 데이터.
```


##### getUrl

리소스의 full-path를 얻습니다.

```스크립트
인수:
basePath    리소스의 basePath
url         리소스의 경로

return      full-path
```

사용법:

```스크립트
cc.loader.getUrl("res", "a.png");//-->"res/a.png"
cc.loader.getUrl("a.png");//(set cc.loader.resPath = "res")--->"res/a.png"。
```

##### load

예전 `cc.Loader.preload`를 교체.

```스크립트
인수:
res         리소스 리스트. 문자열 또는 배열이어야 합니다.
option      선택. 키 리스트:
            cb              콜백
            cbTarget        콜백의 타겟
            trigger         트리거
            triggerTarget   트리거의 타겟
cb          콜백 (선택)
```

사용법:

```스크립트
var res = ["res/a.png", "res/a.plist", "audio/b.mp3"];
var testTarget = {
    name : "the name is testTarget",
    trigger : function(){...},
    cb : function(err){...}
};
var option = {
    trigger : testTarget.trigger,
    triggerTarget : testTarget,
    cbTarget : testTarget
}
//사용법1
cc.loader.load(res, option, function(err){
    if(err) return console.log("load failed");
    console.log(this.name);//the name is testTarget
});

//사용법2
cc.loader.load(res, function(err){
    if(err) return console.log("load failed");
});

//사용법3
option.cb = testTarget.cb;
cc.loader.load(res, option);

//사용법4
cc.loader.load(res);
```

#### loadAliases

aliases를 얻기 위한 plist 설정 파일을 로드합니다.

```
Arguments:
url             설정 파일의 url.
                설정 파일의 내용:
                    <?xml version="1.0" encoding="UTF-8"?>
                    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
                    <plist version="1.0">
                    <dict>
                        <key>metadata</key>
                        <dict>
                            <key>version</key>
                            <integer>1</integer>
                        </dict>
                        <key>filenames</key>
                        <dict>
                            <key>grossini.bmp</key>
                            <string>res/Images/grossini.png</string>
                        </dict>
                    </dict>
                    </plist>

cb              콜백

사용법:

cc.loader.loadAliases("res/lookup-html5.plist", function(){
    var sprite = cc.Sprite.create("grossini.bmp");
    self.addChild( sprite );
    sprite.x = winSize.width/2;
    sprite.y = winSize.height/2;
});

```

##### register

리소스 로더 플러그인을 등록합니다.

```스크립트
인수:
extNames        리소스의 확장자 문자열 또는 문자열 배열.
loader          로더 플러그인 오브젝트는 반드시 "load"라는 이름의 함수를 가져야 합니다.
                `realUrl`, `url`, `res`, `cb`는 `load` 함수의 인수로 전달됩니다.
                이 로더 플러그인에 `getBasePath`라는 함수가 있다면,
                이런 종류의 리소스의 기본 경로는 `getBasePath` 함수의 반환값이 됩니다.
                기본값은 `cc.loader.resPath`입니다.

return          none
```

사용법:

```스크립트
cc.txtLoader = {
    load : function(realUrl, url, res, cb){
        cc.loader.loadTxt(realUrl, cb);
    }
}
cc.loader.register(["txt", "xml", "tmx", "tsx"], cc.txtLoader);
```

##### getRes

캐시된 리소스를 얻습니다.

```스크립트
인수:
url         리소스의 경로 (full-path가 아닙니다)

return      리소스의 데이터
```

Usage:

```스크립트
var img = cc.loader.getRes("a.png");
```

##### release

캐시된 리소스 데이터를 해제합니다.

```스크립트
인수:
url         리소스의 경로 (full-path가 아닙니다)

return      none
```

사용법:

```script
cc.loader.release("a.png");
```

##### releaseAlll

모든 캐시된 리소스 데이터를 해제합니다.

```스크립트
인수:      none

return          none
```

사용법:

```스크립트
cc.loader.releaseAll();
```

## 리소스 로더 플러그인 등록

`CCLoaders.js`의 코드를 보시면 이해하실 수 있습니다.

## 리소스를 설정하기 위한 구조

버전 2.x:

````
var resources = [
    {src:"res/a.png"},
    {fontName:"Marker Felt",src:[{src:"res/cocosgui/Marker Felt.ttf",type:"truetype"}]},
    {
        fontName:"Schwarzwald Regular",
        src:[
            {src:"res/fonts/Schwarzwald_Regular.eot", type:"embedded-opentype"},
            {src:"res/fonts/Schwarzwald Regular.ttf",type:"truetype"}
        ]
    }
]
````

버전 3.x:

```
var resources = [
    "res/a.png",
    "res/cocosgui/Marker Felt.ttf",
    {
        type:"font",
        name:"Schwarzwald Regular",
        srcs:["res/fonts/Schwarzwald_Regular.eot", "res/fonts/Schwarzwald Regular.ttf"]
    }
]
```

버전 3.x에서, 오브젝트가 아닌 스트링으로 자원을 설정해야 합니다.

몇몇 특별한 조건에서 리소스를 핸들링하기 위한 로더 플러그인 상태를 알기 위해 `type`를 사용할 수 있습니다.
그리고 `name` + `.` + `type`를 사용해서 리소스를 캐쉬하기 위한 키로 사용할 수 있습니다.

이 구조는 버전 2.x에서는 지원하지 않고 버전 3.x에서만 지원합니다.
