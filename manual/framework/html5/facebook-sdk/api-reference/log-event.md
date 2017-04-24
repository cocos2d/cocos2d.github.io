#.logEvent(eventName, valueToSum, parameters)

Publishes an App Event. More details at [App Events](http://developers.facebook.com/docs/platforminsights/appevents).

##Parameters

```javascript
plugin.FacebookAgent.prototype.logEvent = function(eventName, valueToSum, parameters){}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|eventName|Enum in `plugin.FacebookAgent.AppEvent`|Yes|The name of the event to log|
|valueToSum|float|No|An number representing some value to be summed when reported|
|parameters|Dictionary|No|Any parameters needed to describe the event|

Predefined _eventName_ in `plugin.FacebookAgent.AppEvent`:

|Name|When to log|
|----|-----------|
|ACHIEVED_LEVEL|The user has achieved a level in the app.|
|ACTIVATED_APP|An app is being activated.|
|ADDED_PAYMENT_INFO|The user has entered their payment info.|
|ADDED_TO_CART|The user has added an item to their cart. The valueToSum passed to logEvent should be the item's price.|
|ADDED_TO_WISHLIST|The user has added an item to their wishlist. The valueToSum passed to logEvent should be the item's price.|
|COMPLETED_REGISTRATION|A user has completed registration with the app.|
|COMPLETED_TUTORIAL|The user has completed a tutorial in the app.|
|INITIATED_CHECKOUT|The user has entered the checkout process. The valueToSum passed to logEvent should be the total price in the cart.|
|PURCHASED|The user has completed a purchase.|
|RATED|The user has rated an item in the app. The valueToSum passed to logEvent should be the numeric rating.|
|SEARCHED|A user has performed a search within the app.|
|SPENT_CREDITS|The user has spent app credits. The valueToSum passed to logEvent should be the number of credits spent.|
|UNLOCKED_ACHIEVEMENT|The user has unlocked an achievement in the app.|
|VIEWED_CONTENT|A user has viewed a form of content in the app.|

Predefined parameter keys in `plugin.FacebookAgent.AppEventParam`:

|Name|User to specify...|
|----|------------------|
|CONTENT_ID|An ID for the specific piece of content being logged about. Could be an EAN, article identifier, etc., depending on the nature of the app.|
|CONTENT_TYPE|A generic content type/family for the logged event, e.g. "music", "photo", "video". Options to use will vary based upon what the app is all about.|
|CURRENCY|[ISO-4217 3-letter code](http://en.wikipedia.org/wiki/ISO_4217) for currency used (e.g. "USD", "EUR", "GBP").|
|DESCRIPTION|A description appropriate to the event being logged. E.g., the name of the achievement unlocked in the `plugin.FacebookAgent.AppEvent.UNLOCKED_ACHIEVEMENT` event.|
|LEVEL|The level achieved in a `plugin.FacebookAgent.AppEvent.ACHIEVED_LEVEL` event.|
|MAX_RATING_VALUE|The maximum rating available for the `plugin.FacebookAgent.AppEvent.RATED` event. E.g., "5" or "10".|
|NUM_ITEMS|How many items are being processed for an `plugin.FacebookAgent.AppEvent.INITIATED_CHECKOUT` or `plugin.FacebookAgent.AppEvent.PURCHASED` event.|
|PAYMENT_INFO_AVAILABLE|Whether payment info is available for the `plugin.FacebookAgent.AppEvent.INITIATED_CHECKOUT` event. |
|REGISTRATION_METHOD|Method user has used to register for the app, e.g., "Facebook", "email", "Twitter", etc|
|SEARCH_STRING|The string provided by the user for a search operation.|
|SUCCESS|Whether the activity being logged about was successful or not.|

##Example

```javascript
var facebook = plugin.FacebookAgent.getInstance();
var floatVal = 888.888;
var parameters = {};
parameters[plugin.FacebookAgent.AppEventParam.SUCCESS] = 1;
facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL, floatVal, parameters);
```
