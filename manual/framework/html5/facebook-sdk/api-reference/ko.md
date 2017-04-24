#Cocos2d-JS 페이스북 SDK 베타 API 레퍼런스

##시작하기

페이스북 SDK 베타를 사용하기에 앞서 당신의 프로젝트에 Cocos2d-JS 페이스북 SDK 베타를 통합할 필요가 있습니다. 먼저 코코스 콘솔로 새로운 프로젝트를 만들고 다음의 문서에 따라 통합을 진행합니다:

- [코코스 콘솔 사용 문서](../../v2/cocos-console/ko.md)
- [Cocos2d-JS 페이스북 SDK 베타를 안드로이드에서 사용하기](../facebook-sdk-on-android/ko.md)
- [Cocos2d-JS 페이스북 SDK 베타를 iOS에서 사용하기](../facebook-sdk-on-ios/ko.md)
- [Cocos2d-JS 페이스북 SDK 베타를 웹에서 사용하기](../facebook-sdk-on-web/ko.md)

##API 목록

###FacebookAgent 클래스

`plugin.FacebookAgent`는 Cocos2d-JS 페이스북 SDK 베타의 캡슐화되지 않은 메소드들의 싱글톤 클래스입니다. 다른 것을 하기에 앞서, 먼저 이 인스턴스를 처음으로 초기화해야 합니다.

###핵심 메소드

|이름|설명|
|---|---|
|[getInstance](./get-instance_ko.md)|SDK를 초기화하고 `plugin.FacebookAgent`의 인스턴스를 반환합니다. 다른 것을 하기에 앞서 실행할 필요가 있습니다.|
|[destroyInstance](./destroy-instance_ko.md)|`plugin.FacebookAgent`의 인스턴스를 파괴합니다.|
|[api](./api_ko.md)| 유저나 친구의 행동에 대해서 알아내기 위한 [Facebook Graph API](http://developers.facebook.com/docs/graph-api)를 호출합니다.|
|[share](./share_ko.md)|페이스북에서의 상태 업데이트를 포스트합니다.|
|[dialog](./dialog-share_ko.md) |공유를 위한 페이스북 다이얼로그를 작동합니다.|
|[dialog](./dialog-message_ko.md) |메시지를 보내기 위한 페이스북 다이얼로그를 작동합니다.|
|[appRequest](./app-request_ko.md)|1:1 공유를 위한 [Request](http://developers.facebook.com/docs/reference/dialogs/requests/) 다이얼로그를 작동합니다.|

###Auth와 Session 메소드

|이름|설명|
|---|---|
|[login](./login_ko.md)|유저에게 당신의 앱의 인증을 요청하거나, 추가적인 허가를 승인합니다.|
|[logout](./logout_ko.md)|유저를 페이스북에서 완전히 로그아웃시킵니다.|
|[isLoggedIn](./isloggedin_ko.md)|유저가 현재 로그인이 되어있는지 여부와 앱이 인증되었는지를 체크합니다.|
|[requestAccessToken](./request-accesstoken_ko.md)|현재 유저가 당신의 어플리케이션을 승인하는 엑세스 토큰을 얻습니다.|
|[getPermissionList](./get-permission-list_ko.md)|현재 유저가 승인한 권한 리스트를 얻습니다.|

###Auxiliary 메소드

|이름|설명|
|---|---|
|[pay](./pay_ko.md)|[Facebook Payments](http://developers.facebook.com/docs/concepts/payments/)를 사용한 유저의 결제 처리를 합니다. _데스크탑에서만 지원_.|
|[activateApp](./publish-install_ko.md)|[Mobile Install Ads](http://developers.facebook.com/docs/tutorials/mobile-app-ads/)를 사용하기 위해 설치 메시지를 보냅니다. _모바일에서만 지_.|
|[logEvent](./log-event_ko.md)|[Mobile Install Ads](http://developers.facebook.com/docs/tutorials/mobile-app-ads/)와의 깊은 통합을 위해 앱 이벤트를 발행합니다. _Mobile only_.|

##페이스북 SDK 베타 기능

|메소드|iOS|Android|Web|
|:-:|:-:|:-----:|:-:|
|api|√|√|√|
|share|√|√|√|
|dialog - share_link|√|√|√|
|dialog - share_photo|√|√|×|
|dialog - share_open_graph|√|√|√|
|dialog - message_link|√|√|√|
|dialog - message_photo|√|√|×|
|dialog - message_open_graph|√|√|×|
|appRequest|√|√|√|
|login|√|√|√|
|logout|√|√|√|
|isLoggedIn|√|√|√|
|requestAccessToken|√|√|√|
|getPermissionList|√|√|√|
|pay|×|×|√|
|activateApp|√|√|×|
|logEvent|√|√|×|
