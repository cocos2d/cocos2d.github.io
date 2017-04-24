#.dialog(info, callback) (공유를 위한)

링크, 구조화된 [Open Graph](https://developers.facebook.com/products/open-graph) 스토리 또는 사진을 당신의 앱에서 유저 타임라인과 그들의 친구의 뉴스 피드로 공유합니다. 

iOS나 안드로이드에서 유저가 자신의 디바이스에 네이티브 페이스북 앱을 설치했다면, 네이티브 앱에서 공유 다이얼로그를 작동합니다. 그렇지 않으면 자동으로 웹 다이얼로그를 작동합니다. [Sharing in iOS](https://developers.facebook.com/docs/ios/share)와 [Sharing in Android](https://developers.facebook.com/docs/android/share)에서 상세한 내용을 확인하세요. 당신의 앱에서 공유가 가능하도록 유저의 페이스북 로그인을 사용할 필요가 없습니다.

웹에서 링크나 구조화된 오픈 그래프 스토리를 웹 공유 다이얼로그로만 공유할 수 있습니다. [Share Dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog)에서 상세한 내용을 확인하세요.

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.dialog = function(info, callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|info|Object|Yes|공유할 컨텐츠.|
|callback|Function|No|이 콜백은 결과 코드와 응답 오브젝트 또는 에러 메시지가 적용됩니다.|

####`info` 컨텐츠:

|이름|종류|필수|설명|
|---|---|---|---|
|dialog|String|Yes|트리거로서 당신이 원하는 페이스북 다이얼로그의 종류를 결정하는 속성.|
|Additional properties|Various|Yes|공유 다이얼로그 종류에 따른 다양한 추가적 속성에 대한 리스트는 아래를 참고하세요.|

####공유 다이얼로그 종류는 다음 중 하나가 될 수 있습니다:

|이름|다이얼로그 종류|
|---|-----------|
|share_link|공유 다이얼로그를 사용하여 페이스북에 링크를 공유|
|share_photo|공유 다이얼로그를 사용하여 페이스북에 이미지를 공유|
|share_open_graph|공유 다이얼로그를 사용하여 페이스북 오픈 그래프 스토리를 공유|

####`info` 오브젝트의 Additional properties를 위한 공유 다이얼로그 종류:

1. share_link

    |이름|종류|필수|설명|
    |---|---|---|---|
    |link|String|Yes|링크의 URL|
    |title|String|No|링크의 제목|
    |imageUrl|String|No|링크의 이미지|
    |description|String|No|링크의 설명|

2. share_photo

    |이름|종류|필수|설명|
    |---|---|---|---|
    |photo|String|Yes|사진의 경로|

3. share_open_graph

    |이름|종류|필수|설명|
    |---|---|---|---|
    |action_type|String|Yes|오픈 그래프 액션 종류|
    |preview_property|String|No|오픈 그래프 오브젝트 종류|
    |others|Various|No|오픈 그래프를 위한 다른 파라메터|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. 공유 요청이 성공했다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```자바스크립트
var callback = function (code, response) {}
```

한편, 응답 오브젝트는 오직 공유 요청이 성공했을 때만 사용할 수 있으며 각 공유 다이얼로그 종류에 따른 예제는 다음과 같습니다:

1. share_link

    ```자바스크립트
    // 응답 오브젝트 
    {
        // 공유한 포스트의 아이디
        "post_id" : "12345678"
    }
    ```
    
2. share_photo

    ```자바스크립트
    // 응답 오브젝트 
    {
        // 공유한 포스트의 아이디
        "post_id" : "12345678"
    }
    ```
    
3. share_open_graph

    ```자바스크립트
    // 응답 오브젝트 
    {
        // 공유한 포스트의 아이디
        "post_id" : "12345678"
    }
    ```

##예제

1. share_link

    ```자바스크립트
    var info = {
        "dialog": "share_link",
        "description": "Cocos2d-x is a great game engine",
        "title": "Cocos2d-x",
        "link": "http://www.cocos2d-x.org",
        "imageUrl": "http://files.cocos2d-x.org/images/orgsite/logo.png"
    };
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // 성공
        } else {
            cc.log("Sharing failed, error #" + code + ": " + response);
        }
    });
    ```
    
2. share_photo

    ```자바스크립트
    var info = {
        "dialog": "share_photo",
        "photo": "/User/XXX/Documents/a.png"
    };
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // 성공
        } else {
            cc.log("Sharing failed, error #" + code + ": " + response);
        }
    });
    ```
    
3. share_open_graph

    ```자바스크립트
    var info = {
        "dialog": "share_open_graph",
        "action_type": "cocostestmyfc:share",
        "preview_property": "cocos_document",
        "title": "Cocos2d-JS Game Engine",
        "image": "http://files.cocos2d-x.org/images/orgsite/logo.png",
        "url": "http://cocos2d-x.org/docs/manual/framework/html5/en",
        "description": "cocos document"
    };
    facebook.dialog(info, function (code, response) {
        if(code == plugin.FacebookAgent.CODE_SUCCEED){
            // 성공
        } else {
            cc.log("Sharing failed, error #" + code + ": " + response);
        }
    });
    ```
