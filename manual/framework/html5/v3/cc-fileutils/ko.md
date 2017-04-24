# CCFileUtils

## 웹 엔진

`CCFileUtils.js` has been removed in web engine because the native file search functionalities are not possible to implement for web engine.
`CCFileUtils.js`은 웹 엔진에서 제거되었습니다. 왜냐하면 네이티브 파일 검색 기능을 웹 엔진에서는 구현할 수 없기 때문입니다.

* 바이너리 파일을 얻는 함수는 `cc.loader.loadBinary`(async)와 `cc.loader.loadBinarySync`(sync)로 옮겨졌습니다.
그리고 `cc.loader.loadBinarySync`는 디프리케이트(deprecated) 되었기 때문에 사용하지 않는 것을 권합니다.

* 리소스에 대한 모든 작업은 `cc.loader`로 옮겨졌습니다.

* 파일 경로에 대한 모든 작업은 `cc.path`로 옮겨졌습니다.

## JSB

JSB에서는 여전히 유용합니다. `cc.fileUtils`는 사용자에게 네이티브 플랫폼에서만 사용 가능하다는 것을 알려주기 위해서 `jsb.fileUtils`으로 이름이 바뀌었습니다.
