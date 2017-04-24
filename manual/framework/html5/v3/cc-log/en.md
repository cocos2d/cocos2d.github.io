# log

There are two changes to log apis:

* Add cc.warn, cc.error.
* Refactor cc.Assert to cc.assert for fitting the API style

Examples:

```
cc.log("this is a log");
cc.log("this is a log for %s", "Cocos2d-html5");

cc.warn("this is a warning");
cc.warn("this is a warning for %s", "Cocos2d-html5");

cc.error("this is an error");
cc.error("this is an error for %s", "Cocos2d-html5");

cc.assert(false, "this is an assert");
cc.assert(false, "this is an assert for %s", "Cocos2d-html5");
```