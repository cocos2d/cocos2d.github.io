#웹에서 Cocos2d-JS의 페이스북 SDK 사용하기

페이스북에서 공식 자바스크립트 SDK를 제공하기 때문에 Cocos2d-JS에서 제공하는 SDK가 무슨 의미가 있을지 의아해하실 수도 있습니다. Cocos2d-JS는 크로스 플랫폼이기때문에 모바일 솔루션은 웹, iOS, 안드로이드에서 완벽하게 동작해야 합니다. 그러나 페이스북 공식 자바스크립트 SDK를 웹에서 사용하면 게임을 iOS나 안드로이드로 포팅할 때 페이스북 API를 사용한 모든 코드를 네이티브 코드로 수정해야 합니다. 때때로 이 작업이 불가능할 때도 있습니다.

그래서 우리는 코드 수정 없이 당신의 페이스북 게임의 크로스 플랫폼 구현을 위해서 Cocos2D-JS를 위한 페이스북 SDK 베타를 제공합니다.

Cocos2D-JS를 위한 페이스북 SDK 베타를 사용하기 위해서는 아래의 단계들을 따라해주세요:

## 1. 페이스북 자바스크립트 SDK 통합

다음과 같은 두 가지 방법이 있습니다:

- 개발자들은 모든 의존 파일(dependencies files)을 `frameworks/cocos2d-html5/extenrnal` 폴더에서 찾을 수 있고, 다음과 같이 수동으로 불러올 수 있습니다:
    
```
cc.loader.loadJs("", [
    "external/pluginx/platform/facebook_sdk.js",
    "external/pluginx/platform/facebook.js"
], function(){
    //do something
});
```
    
- 다른 쉬운 방법으로서 직접 페이스북 SDK 베타 모듈을 `project.json`에 포함할 수 있습니다. 모듈의 이름은 `plugin-facebook`으로 이 방법을 사용할 경우 엔진 로딩 과정에서 의존 파일들을 불러올 수 있습니다. 그러나 추가적인 로딩 시간이 필요하므로 선택은 당신의 몫입니다.

## 2. project.json에서 페이스북 파라메터 설정하기

`project.json`에 모든 페이스북 앱 관련 정보를 추가해야 합니다:

```
{
    "module" : ["cocos2d", "extensions", "external", "plugin-facebook"],
    "plugin" : {
        “facebook”: {
            "appId" : "", // Your application id provided by Facebook
            "xfbml" : true,
            "version" : "v2.0"
        }
    }
}
```

## 페이스북 SDK 베타를 사용하는 법

페이스북 API를 사용하는 방법에 대해서는 [페이스북 SDK API 레퍼런스](../api-reference/ko.md)를 참조해주세요.
