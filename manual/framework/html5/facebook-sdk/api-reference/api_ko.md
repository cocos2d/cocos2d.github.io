#.api(path, method, params, callback)

자료를 얻거나 유저를 대신하여 작업을 수행하기 위한 [Facebook Graph API](http://developers.facebook.com/docs/reference/api/)를 호출합니. This will almost always be used once a user is logged in, and an access token has been granted; the [permissions](https://developers.facebook.com/docs/facebook-login/permissions/) encoded by the access token determine which Graph API calls will be available.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.request = function(path, method, params, callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|path|String|Yes|오픈 그래프 API 인터페이스 경로|
|method|String|Yes|요청사항을 보내기 위한 HTTP 메소드. 가능한 값은 `plugin.FacebookAgent.HttpMethod.GET`, `plugin.FacebookAgent.HttpMethod.POST`, `plugin.FacebookAgent.HttpMethod.DELETE`.|
|params|Object|No|요청사항에 대한 파라메터로 상세한 내용은 [Graph API Reference](https://developers.facebook.com/docs/graph-api/reference/)를 참조하세요.|
|callback|Function|No|이 콜백은 결과 코드와 응답 오브젝트 또는 에러 메시지가 적용됩니다.|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. Graph API 요청이 응답을 얻었다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```javascript
var callback = function (code, response) {}
```

한편, 응답 오브젝트는 오직 응답이 있을 때만 사용할 수 있으며 예제는 다음과 같습니다:

```자바스크립트
// 응답 오브젝트 
{
    // TODO
}
```

##예제

```자바스크립트
// 유저 아이디 검색
facebook.request("/me", plugin.FacebookAgent.HttpMethod.GET, function (type, response) {
    if (type == plugin.FacebookAgent.CODE_SUCCEED) {
        cc.log(response["id"]);
    } else {
        cc.log("Graph API request failed, error #" + code + ": " + response);
    }
});

// 유저 포토 앨범으로 사진 보내기
facebook.request("/me/photos", plugin.FacebookAgent.HttpMethod.POST, {"url": "http://files.cocos2d-x.org/images/orgsite/logo.png"}, function (type, response) {
    if (type == plugin.FacebookAgent.CODE_SUCCEED) {
        cc.log("post_id: " + response["post_id"]);
    } else {
        cc.log("Graph API request failed, error #" + code + ": " + response);
    }
});

```
