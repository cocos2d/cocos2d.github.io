#.getPermissionList(callback)

현재 유저에 의해 부여된 권한들을 얻습니다.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.getPermissionList = function(callback){}
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
    // 현재 유저에 의해 부여된 권한들
    "permissions" : [
        "publish_actions",
        "photos"
    ]
}
```

##예제

```자바스크립트
// FacebookAgent의 인스턴스를 facebook이라고 가정
facebook.getPermissionList(function(code, response){
    if(code == plugin.FacebookAgent.CODE_SUCCEED){
        var permissions = response["permissions"];
        var str = "Permissions: ";
        for (var i = 0; i < permissions.length; ++i) {
            str += permissions[i] + " ";
        }
        cc.log("Permissions: " + str);
    } else {
        cc.log("Failed to retrieve the permission list, error #" + code + ": " + response);
    }
});
```
