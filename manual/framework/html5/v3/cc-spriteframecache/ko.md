# cc.spriteFrameCache

## 스프라이트프레임을 생성하기 위한 구조를 엔진 내부로 통합

plist를 파싱하기 위한 명령을 `cc._plistLoader`로 이동시켰습니다.

스프라이트프레임을 생성하기 위한 구조는:

```스크립트
{
    _inited : true,
    frames : {
        "a_frame_0.png" : {
            rect : {x : 0, y : 0, width : 1, height : 1},
            rotated : false,
            offset : {x : 0, y : 0},
            size : {width : 1, height : 1}
            aliases : ["a_f_0"]
        }
    },
    meta : {
        image : "a.png"
    }
}
```

스프라이트프레임을 생성하는 동안 엔진은 plist의 정보를 얻고 그 설정에 따라 변형을 시킵니다.

## 스프라이트프레임의 당신만의 설정 파일 커스터마이징

`cc.loader`로 쉽게 나만의 설정 파일을 커스터마이징할 수 있습니다. 그저 위의 정보로 당신의 설정 정보를 바꾸면 됩니다.

예를 들어 어떤 plist 파일(`res/ui/tcc_issue_1.plist, res/ui/tcc_issue_2.plist`)의 정보를 복원하기 위한 json 파일을 정의했다고 하겠습니다.
그 정의된 파일의 이름은 `res/ui/imgs.pkgJson`입니다:

```스크립트
{
    "tcc_issue_1.plist" : {
        "frames" : {
            "grossini_dance_01.png" : {
                "rect" : [2, 79, 51, 109],
                "offset" : [0, -1],
                "size" : [85, 121],
                "rotated" : true
            },
            "grossini_dance_05.png" : {
                "rect" : [2, 2, 75, 109],
                "offset" : [-1, -1],
                "size" : [85, 121],
                "rotated" : true
            },
            "grossini_dance_08.png" : {
                "rect" : [2, 79, 51,109],
                "offset" : [0, -1],
                "size" : [85, 121]
            }
        }
    },
    "tcc_issue_2.plist" : {
        "frames" : {
            "grossini_dance_13.png" : {
                "rect" : [2, 52, 51, 109],
                "offset" : [0, -1],
                "size" : [85, 121],
                "rotated" : true
            },
            "grossinis_sister1.png" : {
                "rect" : [2, 2, 48, 113],
                "offset" : [-1, -11],
                "size" : [52, 139],
                "rotated" : true
            },
            "grossinis_sister2.png" : {
                "rect" : [2, 105, 54, 126],
                "offset" : [-1, -2],
                "size" : [56, 138]
            }
        }
    }
}
```

(`meta.image`의 기본값은 plist의 경로입니다. 그래서 이 케이스에서 우리는 `meta` 속성을 설정할 필요가 없습니다.)

그러면 로더 플러그인을 커스터마이징해보겠습니다:

```

/**
 * 이것은 하나의 파일에 plist 파일들을 합치는 로더입니다.
 */
cc._pkgJsonLoader = {
    /**
     * @constant
     */
    KEY : {
        frames : "frames",
        rect : "rect", size : "size", offset : "offset", rotated : "rotated", aliases : "aliases",

        meta : "meta",
        image : "image"
    },
    /**
     * @constant
     */
    MIN_KEY : {
        frames : 0,
        rect : 0, size : 1, offset : 2, rotated : 3, aliases : 4,

        meta : 1,
        image : 0
    },
    _parse : function(data){
        var KEY = data instanceof Array ? this.MIN_KEY : this.KEY;
        var frames = {}, meta = data[KEY.meta] ? {image : data[KEY.meta][KEY.image]} : {};
        var tempFrames = data[KEY.frames];
        for (var frameName in tempFrames) {
            var f = tempFrames[frameName];
            var rect = f[KEY.rect];
            var size = f[KEY.size];
            var offset = f[KEY.offset];
            frames[frameName] = {
                rect : {x : rect[0], y : rect[1], width : rect[2], height : rect[3]},
                size : {width : size[0], height : size[1]},
                offset : {x : offset[0], y : offset[1]},
                rotated : f[KEY.rotated],
                aliases : f[KEY.aliases]
            }
        }
        return {_inited : true, frames : frames, meta : meta};
    },
    load : function(realUrl, url, res, cb){
        var self = this, locLoader = cc.loader, cache = locLoader.cache;
        locLoader.loadJson(realUrl, function(err, pkg){
            if(err) return cb(err);
            var dir = cc.path.dirname(url);
            for (var key in pkg) {
                var filePath = cc.path.join(dir, key);
                cache[filePath] = self._parse(pkg[key]);
            }
            cb(null, true);
        });
    }
};
cc.loader.register(["pkgJson"], cc._pkgJsonLoader);
```

`***.pkgJson`는 json 파일이지만 `.pkgJson`라고 이름 지었습니다. 왜냐하면 `cc._jsonLoader`가 아니라 우리가 만든 로더 플러그인에서 핸들링할 필요가 있기 때문입니다.  

그리고 또한 어글리(ugly) 모드도 지원합니다:

```script
{
    "tcc_issue_1.plist":[{
        "grossini_dance_01.png":[[2, 79, 51, 109],[85, 121],[0, -1],1],
        "grossini_dance_05.png":[[2, 2, 75, 109],[85, 121],[-1, -1],1],
        "grossini_dance_08.png":[[2, 79, 51,109],[85, 121],[0, -1]]
    }],
    "tcc_issue_2.plist":[{
        "grossini_dance_13.png":[[2, 52, 51, 109],[85, 121],[0, -1],1],
        "grossinis_sister1.png":[[2, 2, 48, 113],[52, 139],[-1, -11],1],
        "grossinis_sister2.png":[[2, 105, 54, 126],[56, 138],[-1, -2]]
    }]
}
```

이런 경우에:

1). 설정 파일의 사이즈 줄이기.

2). http request의 숫자 줄이기.

그리고 이런 경우에 코드 수정 없이 개발 단계에서는 plist 파일을 사용하고 릴리즈 단계에서는 pkgJson 파일을 사용할 수 있습니다.

그러나 커스터마이징된 로더 플러그인은 JSB에서는 지원되지 않습니다.
