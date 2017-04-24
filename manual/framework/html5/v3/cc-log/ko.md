# log

로그 API에 두 가지의 변화가 있습니다:

* cc.warn, cc.error 추가.
* API 스타일 일치를 위해 cc.Assert를 cc.assert로 재설계.

예제:

```
cc.log("this is a log");
cc.log("this is a log for %s", "Cocos2d-html5");

cc.warn("this is a waring");
cc.warn("this is a waring for %s", "Cocos2d-html5");

cc.error("this is an error");
cc.error("this is an error for %s", "Cocos2d-html5");

cc.assert(false, "this is an assert");
cc.assert(false, "this is an assert for %s", "Cocos2d-html5");
```
