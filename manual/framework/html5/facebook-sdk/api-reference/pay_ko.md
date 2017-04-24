#.pay(product, callback)

Send a payment request, more details about Payments API can be found in the [Facebook Official Payments Document](https://developers.facebook.com/docs/payments/local-currency-payments-guide)

##파라메터

```자바스크립트
plugin.FacebookAgent.prototype.pay = function(product, callback){}
```

|이름|종류|필수|설명|
|---|---|---|---|
|product|Object|Yes|The product informations as mentioned in Facebook Payments doc. |
|callback|Function|No|이 콜백은 결과 코드와 응답 오브젝트 또는 에러 메시지가 적용됩니다.|

####`product` 컨텐츠:

|이름|종류|필수|설명|
|---|---|---|---|
|product|String|Yes|유저가 구매하려고 하는 당신의 og:product 오브젝트의 URL.|
|quantity|Number|No|유저가 구매하려고 하는 아이템의 양.|
|quantity_min|Number|No|유저가 구매할 수 있는 최소량.|
|quantity_max|Number|No|유저가 구매할 수 있는 최대량.|
|request_id|String|No|개발자가 정의한 거래를 위한 고유 식별자.|
|pricepoint_id|String|No|모바일 지불자가 직접 모바일 구매 흐름 단축을 위해 사용.|
|test_currency|String|No|이 파라메터는 당신이 특정 다이얼로그를 포함하는 디버깅과 테스트하는 동안 사용됩니다.|

##콜백 함수와 응답 오브젝트

콜백 함수를 정의하는 법은 다음과 같습니다. 로그 아웃에 성공했다면, `code`는 `plugin.FacebookAgent.CODE_SUCCEED`가 되며, 아닐 경우 에러 코드를 가리키며 `response`에 에러 메시지가 날아옵니다.

```자바스크립트
var callback = function (code, response) {}
```

한편, 응답 오브젝트는 오직 유저가 로그인에 성공했을 때만 사용할 수 있으며 예제는 다음과 같습니다:

```자바스크립트
// 응답 오브젝트 
{
    // TODO
}
```

##예제

```자바스크립트
var product = {
    product: 'https://www.cocos2d-x.org/demo/facebooktest/pay/item1.html'
};
facebook.pay(product, function(code, response){
    if (code == plugin.FacebookAgent.CODE_SUCCEED){
        if (response['status'] === 'completed')
            cc.log("Success: " + response['amount'] + response['currency']);
        else 
            cc.log("Abnormal: " + response['status'])
    } else {
        cc.log("Request send failed, error #" + code + ": " + response);
    }
});
```
