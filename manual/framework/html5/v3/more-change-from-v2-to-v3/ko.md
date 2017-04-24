# More

## CCAudio.js

`SimpleAudioEngine.js`의 이름이 `CCAudio.js`으로 바뀌었습니다。

`AudioEngine`의 API가 삭제되었습니다:

```
preloadMusic
preloadEffect
isFormatSupported
preloadSound
```

`cc.AudioEngine.end`는 인스턴스로 이동했습니다.

## cc.textureCache

삭제:

```
cc.loadImg
cc.loadImage.handler
cc.computeImageFormatType
```

`addImageAsync`는 `addImage`로 합쳐졌습니다.

## CCTGAlib.js

`cc.tgaLoad` 삭제。

## cc.Texture2D

삭제:

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


## 배열 작업

변화:

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

cc.HASH_FIND_INT 삭제
```

## Public에서 private으로

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

## 상수

삭제:

```
cc.IS_SHOW_DEBUG_ON_PAGE
cc.COCOS2D_DEBUG
```


## 기타

변화:

```
cc.dumpConfig ---> cc.sys.dump

```

삭제:

```
cc.isAddedHiddenEvent
cc.originalCanvasSize
```

추가:

```
cc.BuilderReader.registerController
```
