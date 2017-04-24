#.isLoggedIn(callback)

유저가 당신의 앱을 인증받고 로그인 상태인지 여부를 체크합니다.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.isLoggedIn = function(callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|callback|Function|No|이 콜백은 결과 코드와 응답 오브젝트 또는 에러 메시지가 적용됩니다.|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. 페이스북으로부터 결과를 넘겨 받았다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```자바스크립트
var callback = function (code, response) {}
```

한편, 응답 오브젝트는 오직 결과를 받았을 때만 사용할 수 있으며 예제는 다음과 같습니다:

```자바스크립트
// 응답 오브젝트 
{
    // 유저의 현재 로그인 상태를 나타냅니다
    "isLoggedIn" : true
}
```

##예제

```자바스크립트
// FacebookAgent의 인스턴스를 facebook이라고 가정
facebook.isLoggedIn(function(code, response){
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        cc.log("isLoggedIn : " + response["isLoggedIn"])
    } else {
        cc.log("Check failed, error #" + code + ": " + response);
    }
});
```
