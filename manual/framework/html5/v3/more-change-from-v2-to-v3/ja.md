# More

## CCAudio.js

`SimpleAudioEngine.js` は `CCAudio.js` に名前が変更されました。

`AudioEngine`からいくつかのAPIを削除しました。

```
preloadMusic
preloadEffect
isFormatSupported
preloadSound
```

`cc.AudioEngine.end`は静的メソッドへ変更しました。

## cc.textureCache

以下を削除しました:

```
cc.loadImg
cc.loadImage.handler
cc.computeImageFormatType
```

`addImageAsync` は`addImage`へマージされました
## CCTGAlib.js

`cc.tgaLoad`は削除されました。

## cc.Texture2D

変更:

```
cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888     --> cc.Texture2D.PIXEL_FORMAT_RGBA8888
cc.TEXTURE_2D_PIXEL_FORMAT_RGB888       --> cc.Texture2D.PIXEL_FORMAT_RGB888
cc.TEXTURE_2D_PIXEL_FORMAT_RGB565       --> cc.Texture2D.PIXEL_FORMAT_RGB565
cc.TEXTURE_2D_PIXEL_FORMAT_A8           --> cc.Texture2D.PIXEL_FORMAT_A8
cc.TEXTURE_2D_PIXEL_FORMAT_I8           --> cc.Texture2D.PIXEL_FORMAT_I8
cc.TEXTURE_2D_PIXEL_FORMAT_AI88         --> cc.Texture2D.PIXEL_FORMAT_AI88
cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444     --> cc.Texture2D.PIXEL_FORMAT_RGBA4444
cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1       --> cc.Texture2D.PIXEL_FORMAT_RGB5A1
cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC4       --> cc.Texture2D.PIXEL_FORMAT_PVRTC4
cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC2       --> cc.Texture2D.PIXEL_FORMAT_PVRTC2
cc.TEXTURE_2D_PIXEL_FORMAT_DEFAULT      --> cc.Texture2D.PIXEL_FORMAT_DEFAULT
cc.Texture2D.setDefaultAlphaPixelFormat(format) --> cc.Texture2D.defaultPixelFormat = format
cc.Texture2D.getDefaultAlphaPixelFormat()       --> cc.Texture2D.defaultPixelFormat
cc.Texture2D.defaultAlphaPixelFormat()          --> cc.Texture2D.defaultPixelFormat
```

## cc.Scheduler

`cc.PRIORITY_SYSTEM` --> `cc.Scheduler.PRIORITY_SYSTEM`.


## 配列操作関数

変更:

```
cc.ArrayVerifyType --> cc.arrayVerifyType
cc.ArrayRemoveObject --> cc.arrayRemoveObject
cc.ArrayRemoveArray ---> cc.arrayRemoveArray
cc.ArrayAppendObjectsToIndex --> cc.arrayAppendObjectsToIndex

cc.ArrayRemoveObjectAtIndex(arr, index) --> arr.splice(index, 1)
cc.ArrayGetIndexOfValue(arr, value) --> arr.indexOf(value)
cc.ArrayAppendObject(arr, addObj) --> arr.push(addObj)
cc.ArrayAppendObjectToIndex(arr, addObj, index) --> arr.splice(index, 0, addObj)
cc.ArrayGetIndexOfObject(arr, findObj) --> arr.indexOf(findObj)
cc.ArrayContainsObject(arr, findObj) --> arr.indexOf(findObj) != -1

cc.HASH_FIND_INTは削除されました
```

## Publicメソッドから privateメソッドへ変更されたメソッド

```
cc.setup                    --> cc._setup
cc.initDebugSetting         --> cc._initDebugSetting
cc.canvas                   --> cc._canvas
cc.drawingUtil              --> cc._drawingUtil
cc.renderContext            --> cc._renderContext
cc.gameDiv                  --> cc._gameDiv
cc.setContextMenuEnable     --> cc._setContextMenuEnable
cc.renderContextType        --> cc._renderType
cc.CANVAS                   --> cc._RENDER_TYPE_CANVAS
cc.WEBGL                    --> cc._RENDER_TYPE_CANVAS
cc.mainRenderContextBackup  --> cc._mainRenderContextBackup
cc.RectFromString           --> cc.spriteFrameCache._rectFromString
cc.PointFromString          --> cc.spriteFrameCache._pointFromString
cc.SizeFromString           --> cc.spriteFrameCache._sizeFromString
```

## 定数

以下の定数は削除されました:

```
cc.IS_SHOW_DEBUG_ON_PAGE
cc.COCOS2D_DEBUG
```


## その他

変更:

```
cc.dumpConfig ---> cc.sys.dump

```

削除:

```
cc.isAddedHiddenEvent
cc.originalCanvasSize
```

追加:

```
cc.BuilderReader.registerController
```