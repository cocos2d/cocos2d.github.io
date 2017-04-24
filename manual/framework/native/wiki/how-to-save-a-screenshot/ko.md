#스크린샷을 저장하는 방법

v3.2 alpha0에서，`utils::captureScreen()`이 스크린샷 저장을 위해 추가되었다.

`utils::captureScreen()`선언:

```
void captureScreen(const std::function<void(bool, const std::string&)>& afterCaptured, const std::string& filename);
```

- `afterCaptured` 이 함수는 스크린샷 명령이 실행된 후 실행된다. bool 값은 스크린샷의 성공여부를 나타내고, 문자열은 스크린샷 저장경로를 말한다
- `filename` 스크린샷의 이름이다.  이것은 `screenshot.png` 같은 파일 이름이다. 또 `/sdcard/screenshot.png`과 같은 경로가 될 수도 있다.

##사용법

```
void CaptureScreenTest::afterCaptured(bool succeed, const std::string& outputFile)
{
    if (succeed)
    {
        // show screenshot
        auto sp = Sprite::create(outputFile);
        addChild(sp, 0, childName);
        Size s = Director::getInstance()->getWinSize();
        sp->setPosition(s.width / 2, s.height / 2);
        sp->setScale(0.25);
    }
    else
    {
        log("Capture screen failed.");
    }
}

void CaptureScreenTest::capture()
{
    utils::captureScreen(CC_CALLBACK_2(CaptureScreenTest::afterCaptured, this),"CaptureScreenTest.png");
}
```