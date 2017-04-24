# Cocos2d-JS의 페이스북 SDK 살펴보기

## 모든 기능을 갖춘 테스트 케이스

완성된 테스트 케이스를 제공하기 때문에 모든 개발자들은 페이스북 SDK로 게임을 쉽게 만들기 시작할 수 있습니다. 테스트 케이스는 SDK의 모든 API를 포함하며 정확하게 사용하는 법을 보여줍니다. 

Cocos2d-JS의 페이스북 SDK에 익숙하지 않다면 다음 문서를 볼 것을 강력하게 추천합니다. [Cocos2d-JS의 페이스북 SDK API 레퍼런스](../api-reference/ko.md)

## 테스트 케이스 실행하는 법

먼저 Cocos2d-JS 엔진 패키지를 다운 받습니다. [다운로드](http://www.cocos2d-x.org/download).

- [크로스 네이티브 / 브라우저 게임과 코코스 콘솔(http://cocos2d-x.org/docs/manual/framework/cocos2d-js/2-working-environment-and-workflow/2-2-cross-native-browser-game-with-cocos-console/en)을 따라서 코코스 콘솔 도구를 설치합니다.
- 터미널 / 커맨드라인 도구를 열어서 `samples/js-tests/` 디렉토리로 이동합니다.
- 다음과 같은 명령어를 입력합니다 : 
    + `cocos run -p web --port 8080`로 테스트 케이스를 웹에서 실행합니다.
    + `cocos run -p ios` 테스트 케이스를 iOS 시뮬레이터에서 실행합니다(맥 환경과 Xcode가 필요).
    + `cocos run -p android` 테스트 케이스를 안드로이드 디바이스나 시뮬레이터에서 실행합니다.

## 페이스북 테스트 케이스 살펴보기

테스트 케이스 프로젝트가 실행되면 테스트 케이스 목록 중에서 `Facebook SDK Test`를 찾을 수 있습니다.

페이스북 SDK를 사용하는 법에 대한 두 가지 테스트 케이스를 보여줍니다.

1. Facebook SDK Sharing Test

    ![](share.jpg)

    이 페이지의 모든 테스트는 유저의 로그인을 필요로 하지 않으며 다음과 같은 기능들을 테스트할 수 있습니다:

    - 링크, 오픈 그래프 스토리, 사진을 당신의 타임라인이나 친구에게 공유합니다.
    - 링크, 오픈 그래프 스토리, 사진과 함께 당신의 친구에게 메시지를 보냅니다.
    - 다른 앱 리퀘스트를 당신의 친구에게 보냅니다.

    이 테스트 페이지는 다음의 API들을 커버합니다:

    - [.getInstance()](../api-reference/get-instance_ko.md)
    - [.canPresentDialog(info)](../api-reference/can-present-dialog_ko.md)
    - [.dialog(info, callback)](../api-reference/dialog_ko.md)
    - [.appRequest(info, callback)](../api-reference/app-request_ko.md)

2. Facebook SDK User Test

    ![](user.jpg)

    두번째 페이지에서는 페이스북 SDK의 다른 나머지 기능들을 테스트할 수 있습니다:

    - 유저의 페이스북 로그인 / 로그아웃.
    - 유저 아이디 되찾기(Retrieve).
    - 엑세스 토큰 되찾기.
    - 오픈 그래프 API 실행.
    - 오픈 그래프 API를 통해 당신의 앱 권한 되찾기.
    - 페이스북에 활성 이벤트 전송.
    - 페이스북에 앱 이벤트 로그 전송.
    - 페이스북에 앱내구매 로그 전송.
    - 캔버스 앱에서 페이스북 페이먼트 실행.

    마지막 네 개의 테스트는 오직 페이스북 캔버스 앱에서 실행할 수 있으며 여기서 테스트할 수 있습니다 [테스트 페이지](https://apps.facebook.com/cocostestmyfc/).

    이 테스트 페이지는 다음과 같은 API를 다룹니다:

    - [.getInstance()](../api-reference/get-instance_ko.md)
    - [.isLoggedIn()](../api-reference/isloggedin_ko.md)
    - [.login(permissions, callback)](../api-reference/login_ko.md)
    - [.logout(callback)](../api-reference/logout_ko.md)
    - [.getUserId()](../api-reference/get-userid_ko.md)
    - [.getAccessToken()](../api-reference/get-accesstoken_ko.md)
    - [.api(path, method, params, callback)](../api-reference/api_ko.md)
    - [.activateApp()](../api-reference/activate-app_ko.md)
    - [.logEvent(eventName, valueToSum, parameters)](../api-reference/log-event_ko.md)
    - [.logPurchase(amount, currency, parameters)](../api-reference/log-purchase_ko.md)
    - [.canvas.pay(info, callback)](../api-reference/pay_ko.md)

## 온라인 테스트

Cocos2d-JS 패키지 내의 테스트 케이스 이외에 우리는 또한 페이스북 캔버스 앱을 위한 테스트 케이스를 가지고 있습니다.

[페이스북 캔버스 테스트 케이스](https://apps.facebook.com/cocostestmyfc/)

## 다음으로

당신의 Cocos2d-JS 프로젝트에서 페이스북 SDK를 사용하기 위해 아래의 가이드들을 따라한다면 손쉽게 당신만의 페이스북 게임을 만들 수 있을 것이라고 믿습니다. 

- [안드로이드에서 Cocos2d-JS의 페이스북 SDK 사용하기](../facebook-sdk-on-android/ko.md)
- [iOS에서 Cocos2d-JS의 페이스북 SDK 사용하기](../facebook-sdk-on-ios/ko.md)
- [웹에서 Cocos2d-JS의 페이스북 SDK 사용하기](../facebook-sdk-on-web/ko.md)
