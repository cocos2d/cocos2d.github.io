# CCFileUtils

## Web engine

`CCFileUtils.js` has been removed in web engine because the native file search functionalities are not possible to implement for web engine.

* The function to get binary file has been moved to `cc.loader.loadBinary`(async) and `cc.loader.loadBinarySync`(sync).
And we hope you not to use `cc.loader.loadBinarySync`, because it's deprecated.

* All operations about resources have been moved to `cc.loader`.

* All operations about file path have been moved to `cc.path`.

## JSB

In JSB, as it's still useful, `cc.fileUtils` have been renamed to `jsb.fileUtils` to let user know it's only available in native platform.