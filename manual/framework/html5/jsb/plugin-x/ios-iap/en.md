PluginX IOS IAP Integration
===========

## Before Start

- Please check out in app purchase document in [Apple developer center](https://developer.apple.com/in-app-purchase/), set up your account environment first.

## PluginX Integrate

- Import **pluginProtocol** and  **pluginIAP** into your project
- Add **StoreKit.framework**  **libPluginProtocol.a**  and **libPluginIAP.a** into Target Build Phases
- We can check **Capabilities** tab if the In-App Purchase is vaild,if the status is off, wo need to open it :
<img src="res/check.png" width=500/>
- Everything is ok, we can start coding now.
 
##Start Coding

- Firstly you should get the **PluginManager** instance and use **loadPlugin** to load the plugin you need,and then use **setListener** to setup callback function.about the callback function we will describe them later.

    ```
    var pluginManager = plugin.PluginManager.getInstance();
    this.PluginIAP = pluginManager.loadPlugin("IOSIAP");
    //set the callback listener
    this.PluginIAP.setListener(this);
    ```
	
- Secondly you should choose if you want to use serverMode to verify you receipt on your server,if you want to do so, please call the function **setServerMode** to turn it on,notice that it's close as default;

    ```
	this.PluginIAP.callFuncWithParam("setServerMode");
    ```
		
- Thirdly you should put your product ids into an array and call **toString** function to change the array to string type before you call the **requestProducts** function, you will receive your products info by AppStore at callback function below.

    ```
    var pidList = ["001", "002"];
    this.PluginIAP.callFuncWithParam("requestProducts", plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, pidList.toString()));
	```
			
- Then, set the callback function named **onRequestProductResult**, it's **requestProducts** function's callback,it will receive data when AppStore return the info you request, if the **ret** parameter is **plugin.ProtocolIAP.RequestProductCode.RequestSuccess** you can receive the product info from AppStore by **productInfo** parameter.
	
    ```
    onRequestProductResult: function (ret, productInfo) {
        var msgStr = "";
        if (ret == plugin.ProtocolIAP.RequestProductCode.RequestFail) {
            msgStr = "request error";
            cc.log(msgStr);
        } else if (ret == plugin.ProtocolIAP.RequestProductCode.RequestSuccess) {
            this.product = productInfo
            msgStr = "list: [";
            for (var i = 0; i < productInfo.length; i++) {
                var product = productInfo[i];
                msgStr += product.productName + " ";
            }
            msgStr += " ]";
            cc.log(msgStr);
        }
    }
    ```
    
- When the user check the product they want to buy,you can call the function payForProduct and set the product's id as parameter,you can receive data at callback below.

    ```
    this.PluginIAP.payForProduct(this.product[0]);
    ```
		
- And then you should set the callback function named **onPayResult**,it's the callback for **payForProduct**, this function will receive data when users finish their payment.if you turn on the serverMode and the payment status is success(**plugin.ProtocolIAP.PayResultCode.PaySuccess**) you can receive the receipt at **msg** parameter.

    ```
    onPayResult: function (ret, msg, productInfo) {
        var str = "";
        if (ret == plugin.ProtocolIAP.PayResultCode.PaySuccess) {
            str = "payment Success pid is " + productInfo.productId;
            //if you use server mode get the receive message and post to your server
            if (this._serverMode && msg) {
                str = "payment verify from server";
                this.postServerData(msg);
            }
        } else if (ret == plugin.ProtocolIAP.PayResultCode.PayFail) {
            str = "payment fail";
        }
        cc.log(str);
    }
    ```

- If you didn't turn on the serverMode, you now finish the payment. **finishTransaction** will be invoked automatic.

- If you turn on the **serverMode** and you want to verify it by your own server ,you can add some info by a json type and then post it to your own server, so your server can receive the data and sent it to AppStore PaymentAddress or SandBox(for test), if everything is ok, you can receive response data from Apple.

- Check if the response data is valid ,if yes you can add products to the user and send the message back to client.

- At last if you turn on the **serverMode** you must call the **finishTransaction** function manually when the client receive your server response.

- the AppStore Payment address:
    - sandbox：https://sandbox.itunes.apple.com/verifyReceipt 
    - real address：https://buy.itunes.apple.com/verifyReceipt

    ```
    postServerData: function (data) {
        var that = this;
        var xhr = cc.loader.getXMLHttpRequest();

        //replace to your own server address
        xhr.open("POST", "http://localhost/");
        that.toggleToast(true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                that.toggleToast(false);
                var result = JSON.parse(xhr.responseText);
                // important ! remember to finishTransaction
                that.PluginIAP.callFuncWithParam("finishTransaction", new 					plugin.PluginParam(plugin.PluginParam.ParamType.TypeString,result.receipt.in_app[0].product_id));
            }
        };
        // you can add your data and post them to your server;
        var result = {userid: 100, receipt: data};
        xhr.send(JSON.stringify(result));
    },
    ```

## End

 - you can find the example in the test case at this path cocos2d_jsb_samples-->pluginXTestsManager-->IOSIAPTest
	