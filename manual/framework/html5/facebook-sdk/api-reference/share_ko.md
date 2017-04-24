#.share(info, callback)

당신의 앱에서 사람들이 자신의 상태를 업데이트할 수 있습니다.

사람들이 iOS나 안드로이드용 네이티브 페이스북 앱을 설치했다면, 이 메소드는 컨텐츠를 공유하는 사람의 디바이스에 설치된 네이티브 앱으로 앱을 전환됩니다. 그러면 당신의 앱으로 사람들이 공유한 내용이 리턴됩니다. 당신의 앱이 공유 다이얼로그를 통해 공유하도록 하는 페이스북 로그인을 사용할 필요가 없습니다. 아니면, 사람들이 네이티브 페이스북을 디바이스에 설치하지 않았을 경우, 메소드는 자동으로 피드 다이얼로그(Feed Dialog, 네이티브 페이스북 앱을 필요로 하지 않는 웹 다이얼로그)로 전환합니다. [Sharing in iOS](http://developers.facebook.com/docs/ios/share)와 [Sharing in Android](http://developers.facebook.com/docs/android/share)에서 상세한 내용을 확인하세요.

웹에서는 자바스크립트를 통해 공유 다이얼로그를 작동합니다. [Share Dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog)에서 상세한 내용을 확인하세요. 

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.share = function(info, callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|info|Object|Yes|공유될 컨텐츠.|
|callback|Function|No|이 콜백은 결과 코드와 응답 오브젝트 또는 에러 메시지가 적용됩니다.|

####`info` 컨텐츠:

|이름|종류|필수|설명|
|---|---|---|---|
|link|String|Yes|링크의 URL|
|title|String|No|링크의 제목|
|imageUrl|String|No|링크의 이미지 URL|
|description|String|No|링크의 설명|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. 공유 요청이 성공했다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```자바스크립트
var callback = function (code, response) {}
```
한편, 응답 오브젝트는 오직 공유 요청이 성공했을 때만 사용할 수 있으며 예제는 다음과 같습니다:

공유가 성공했다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`이고 `response`는 JSON 형식으로 다음과 같이 `post_id`를 포함합니다,
```자바스크립트
{
    // 공유된 포스트의 아이디
    "post_id" : "1697818070_220407711431887"
}
```

공유가 실패했다면, `code`는 에러 코드를 나타내고 `response`는 다음과 같이 JSON 형식으로 보여집니다,

```자바스크립트
{
    "error" : "FBErrorDialogInvalidShareParameters"
}
```

##예제

```자바스크립트
// 공유될 컨텐츠
var info = {
    "description": "Cocos2d-x is a great game engine",
    "title": "Cocos2d-x",
    "link": "http://www.cocos2d-x.org",
    "imageUrl": "http://files.cocos2d-x.org/images/orgsite/logo.png"
};

// FacebookAgent의 인스턴스를 facebook이라고 가정
facebook.share(info, function(code, response){
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        cc.log("share succeed");
    } else {
        cc.log("Sharing failed, error #" + code + ": " + response);
    }       
});
```
