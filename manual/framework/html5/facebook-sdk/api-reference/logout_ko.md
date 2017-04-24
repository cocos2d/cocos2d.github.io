#.logout(callback)

페이스북에 로그인한 유저를 로그아웃 시킵니다. 이 액션은 또한 어떠한 엑세스 토큰도 무효화합니다.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.logout = function(callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|callback|Function|No|이 콜백은 결과 코드와 응답 오브젝트 또는 에러 메시지가 적용됩니다.|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. 로그 아웃에 성공했다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```자바스크립트
var callback = function (code, response) {}
```

##예제

```자바스크립트
// FacebookAgent의 인스턴스를 facebook이라고 가정
facebook.logout(function(code){
    if(code == plugin.FacebookAgent.CODE_SUCCEED){ //logout succeed
        cc.log("logout succeed");
    } else {
        cc.log("Logout failed, error #" + code + ": " + response);
    }
});
```
