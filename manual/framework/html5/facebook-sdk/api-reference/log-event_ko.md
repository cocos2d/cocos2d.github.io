#.logEvent(eventName, valueToSum, parameters)

[App Event](https://developers.facebook.com/docs/ios/app-events/)를 발행합니다.

앱 이벤트는 페이스북 모바일 앱 광고의 효과성과 당신의 앱을 보다 더 잘 이해하기 위하는 기능을 지원합니다. 이 이벤트는 '카트에 추가하기'나 게임에서의 '레벨업'과 같은 14개의 미리 정의된 이벤트 중 하나가 될 수 있으며 페이스북의 모바일 광고로부터 오는 ROI를 이해하기 위한 커스텀 이벤트가 될 수 있습니다. 얼마나 자주 이런 이벤트가 페이스북의 [insights tool](https://developers.facebook.com/docs/insights/)에 의해 발생하는지 보고 받습니다.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.logEvent = function(eventName, valueToSum, parameters){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|eventName|Enum|Yes|이벤트명은 이벤트를 나타내기 위해 사용됩니다.|
|valueToSum|Number|No|이벤트의 모든 인스턴스를 합산한 값으로 그래서 평균값을 결정할 수 있습니다.|
|parameters||No|이벤트와 함께 하는 로그의 매개 변수.|

`plugin.FacebookAgent.AppEvent`에서 사전 정의된 이벤트:

|이름|로그를 남기는 시기|
|---|-------------|
|ACTIVATED_APP|An app is being activated, typically in the AppDelegate's applicationDidBecomeActive.|
|COMPLETED_REGISTRATION|A user has completed registration with the app.|
|VIEWED_CONTENT|A user has viewed a form of content in the app.|
|SEARCHED|A user has performed a search within the app.|
|RATED|The user has rated an item in the app. The valueToSum passed to logEvent should be the numeric rating.|
|COMPLETED_TUTORIAL|The user has completed a tutorial in the app.|
|ADDED_TO_CART|The user has added an item to their cart. The valueToSum passed to logEvent should be the item's price.|
|ADDED_TO_WISHLIST|The user has added an item to their wishlist. The valueToSum passed to logEvent should be the item's price.|
|INITIATED_CHECKOUT|The user has entered the checkout process. The valueToSum passed to logEvent should be the total price in the cart.|
|ADDED_PAYMENT_INFO|The user has entered their payment info.|
|PURCHASED|The user has completed a purchase.|
|ACHIEVED_LEVEL|The user has achieved a level in the app.|
|UNLOCKED_ACHIEVEMENT|The user has unlocked an achievement in the app.|
|SPENT_CREDITS|The user has spent app credits. The valueToSum passed to logEvent should be the number of credits spent.|

Predefined parameter names in `plugin.FacebookAgent.AppEventParam`:

|이름|유저 정의...|
|---|----------|
|CURRENCY|[ISO-4217 3-letter code](http://en.wikipedia.org/wiki/ISO_4217) for currency used (e.g. "USD", "EUR", "GBP").|
|REGISTRATION_METHOD|Method user has used to register for the app, e.g., "Facebook", "email", "Twitter", etc|
|CONTENT_TYPE|A generic content type/family for the logged event, e.g. "music", "photo", "video". Options to use will vary based upon what the app is all about.|
|CONTENT_ID|An ID for the specific piece of content being logged about. Could be an EAN, article identifier, etc., depending on the nature of the app.|
|SEARCH_STRING|The string provided by the user for a search operation.|
|SUCCESS|Whether the activity being logged about was successful or not.|
|MAX_RATING_VALUE|The maximum rating available for the `plugin.FacebookAgent.AppEvent.RATED` event. E.g., "5" or "10".|
|PAYMENT_INFO_AVAILABLE|Whether payment info is available for the `plugin.FacebookAgent.AppEvent.INITIATED_CHECKOUT` event. |
|NUM_ITEMS|How many items are being processed for an `plugin.FacebookAgent.AppEvent.INITIATED_CHECKOUT` or `plugin.FacebookAgent.AppEvent.PURCHASED` event.|
|DESCRIPTION|A description appropriate to the event being logged. E.g., the name of the achievement unlocked in the `plugin.FacebookAgent.AppEvent.UNLOCKED_ACHIEVEMENT` event.|

`plugin.FacebookAgent.AppEventParamValue`에서 사전 정의된 파라메터 값:

|이름|값|
|---|--|
|VALUE_YES|1|
|VALUE_NO|0|

##예제

```자바스크립트
var parameters = {};
var floatVal = 888.888;
parameters[plugin.FacebookAgent.AppEventParam.SUCCESS] = plugin.FacebookAgent.AppEventParamValue.VALUE_YES;
facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL);
facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL, floatVal);
facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL, parameters);
facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL, floatVal, parameters);
```
