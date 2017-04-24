#.login(permissions, callback)

Prompts the user to authorize your application or to grant additional authorizations using the [Login Dialog](https://developers.facebook.com/docs/facebook-login/) appropriate to the platform.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.login = function(permissions, callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|permissions|Array|No|유저로부터 취득할 수 있는 페이스북 권한 목록.|
|callback|Function|No|이 콜백은 결과 코드와 응답 오브젝트 또는 에러 메시지가 적용됩니다.|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. 로그인이 성공했다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```자바스크립트
var callback = function (code, response) {}
```

한편, 응답 오브젝트는 오직 유저가 로그인에 성공했을 때만 사용할 수 있으며 예제는 다음과 같습니다:

```자바스크립트
// 응답 오브젝트 
{
    // 엑세스 토큰
    "accessToken" : "",
    // 권한들
    "permissions" : [
        "publish_actions",
        "photos"
    ]
}
```

##예제

```자바스크립트
// FacebookAgent의 인스턴스를 facebook이라고 가정
facebook.login(["create_event", "create_note", "manage_pages", "publish_actions"], function(code, response){
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        cc.log("login succeed");
        cc.log("AccessToken: " + response["accessToken"]);
        var permissions = response["permissions"];
        var str = "Permissions: ";
        for (var i = 0; i < permissions.length; ++i) {
            str += permissions[i] + " ";
        }
        cc.log("Permissions: " + str);
    } else {
        cc.log("Login failed, error #" + code + ": " + response);
    }
});
```
