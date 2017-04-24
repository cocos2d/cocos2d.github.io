# moduleConfig.json

## 요약

예전 `jsloader.js`는 순수하게 설정만을 담당하고 지원 도구인 `cocos-console`와 더 잘 어울리도록 `moduleConfig.json`으로 변경되었습니다.

## 설명

#### module

Cocos2d-JS의 모든 모듈 설정은 여기서 이루어집니다. 프로젝트에서 어떤 모듈을 사용할 필요가 있다면 `project.json`의 `modules`에 여기서 작성된 모듈의 설정 이름을 적으시면 됩니다.

각 모듈의 설정은 아래와 같이 모듈 이름이나 자바스크립트 경로의 배열로 이루어집니다:

```
"menus" : [
    "core", "actions",

    "cocos2d/menus/CCMenuItem.js",
    "cocos2d/menus/CCMenu.js"
]
```

여기서 `menus`는 `core`와 `actions`, `cocos2d/menus/CCMenuItem.js`, `cocos2d/menus/CCMenu.js`가 필요하다는 것을 의미합니다.
