#.requestAccessToken(callback)

Get the access token granted to your application by current user.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.requestAccessToken = function(callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|callback|Function|No|This callback will be invoked with a result code and a response object or an error message.|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. 페이스북으로부터 결과를 넘겨 받았다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```자바스크립트
var callback = function (code, response) {}
```

한편, 응답 오브젝트는 오직 결과를 받았을 때만 사용할 수 있으며 예제는 다음과 같습니다:

```자바스크립트
// 응답 오브젝트 
{
    // 현재 유저를 위한 엑세스 토큰
    "accessToken" : ""
}
```

##예제

```자바스크립트
// FacebookAgent의 인스턴스를 facebook이라고 가정
facebook.requestAccessToken(function(code, response){
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        cc.log("AccessToken: " + response["accessToken"]);
    } else {
        cc.log("Failed to retrieve the access token, error #" + code + ": " + response);
    }
});
```
