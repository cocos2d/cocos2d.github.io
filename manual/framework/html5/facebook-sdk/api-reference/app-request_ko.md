#.appRequest(info, callback)

[App Requests](https://developers.facebook.com/docs/reference/dialogs/requests/)과 함께 커스터마이징된 메시지를 유저의 친구에게 표시합니다. 모든 플랫폼에서 유저가 전송 작업을 완료할 수 있도록 요청 다이얼로그를 작동합니다.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.appRequest = function(info, callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|info|Object|Yes|보낼 앱 요청 컨텐츠.|
|callback|Function|No|이 콜백은 결과 코드와 응답 오브젝트 또는 에러 메시지가 적용됩니다.|

####`info` 컨텐츠:

|이름|종류|필수|설명|
|---|---|---|---|
|title|String|Yes|앱 요청 메시지의 제목|
|message|String|Yes|앱 요청 메시지의 내용|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. 앱 요청이 성공했다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```자바스크립트
var callback = function (code, response) {}
```

한편, 응답 오브젝트는 오직 앱 요청이 성공했을 때만 사용할 수 있으며 예제는 다음과 같습니다:

```자바스크립트
// 응답 오브젝트 
{
    // TODO
}
```

##예제

```자바스크립트
var info = {
    "message": "Cocos2d-JS is a great game engine",
    "title": "Cocos2d-JS"
};
facebook.appRequest(info, function (code, msg) {
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        // 성공
    } else {
        cc.log("Request send failed, error #" + code + ": " + response);
    }
});
```
