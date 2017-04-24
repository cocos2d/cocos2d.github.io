PluginX IOS IAP 集成
===========
## 前期准备工作
- 到[苹果官网](https://developer.apple.com/in-app-purchase/)，把官网教程中需要填写的配置填写完毕。

## PluginX的集成
 - 引入pluginProtocol和pluginIap两个工程
 - 在工程中的 Target -> build Phases 中添加 StoreKit.framework和引入libPluginProtocol.a和libPluginIAP.a
 - 我们可以在Capabilities 中查看我们的工程中的IAP是否能够使用了，不能使用按照提示来进行配置
![](res/check.png)
 - 接下来我们就可以开始编写我们的应用了。
 
##代码的编写

 - 首先我们应该初始化pluginX的IAP插件，获取要加载的插件，并设置回调的监听，至于回调的函数，我们稍后会讲到。
 
 	```
	 	var pluginManager = plugin.PluginManager.getInstance();
        this.PluginIAP = pluginManager.loadPlugin("IOSIAP");
        //设置回调
        this.PluginIAP.setListener(this);
	```
	
- 设置使用的模式，用于区分我们是否将结果传递到我们自己的服务器进行（二次）校验（我们默认是不向自己服务器发送数据消息，如果您需要用服务器验证的模式，需要手动加入如下代码）。

		this.PluginIAP.callFuncWithParam("setServerMode");
		
- 接着，我们输入要查询的商品的id，将存有商品id的数组以一个字符串的形式传递过到requestProducts方法中。

 	```
	 	var pidList = ["001", "002"];
		this.PluginIAP.callFuncWithParam("requestProducts", 		plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, pidList.toString()));
	```
			
- 实现回调监听的方法，我们首先实现产品请求的回调函数,如果请求成功，会返回从appStore发回的商品信息：
	
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
    
- 我们把用户选中要购买的商品向AppStore发送购买请求，在这里，我们将购买的商品列表中的第一个商品：

		this.PluginIAP.payForProduct(this.product[0]);
		
- 接下来我们要实现购买商品的回调方法，

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

- 获取购买的反馈信息，我们根据自己的需求去处理，如果没有使用服务器校验的模式，只需要了解一下是否购买成功即可。如果需要从服务器校验数据，我们提供了一个方法，仅供参考，我们可以带上自己的参数，到自己服务器去验证这些信息。
- 现在介绍一下我们怎么用服务端（二次）验证：基本思路就是，我们将从onPayResult返回的msg信息，通过post的形式发送到自己的服务器，然后自己服务器根据这些信息进行存储和解析，并将我们传递过来的msg发送到苹果的验证服务器：
- sandbox：https://sandbox.itunes.apple.com/verifyReceipt 
- 真实地址：https://buy.itunes.apple.com/verifyReceipt
- 根据苹果返回的数据，去验证支付信息，并返回到客户端，最后记得需要关闭支付。

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
    	

## 结束语
 - 大家可以在cocos2d_jsb_samples-->pluginXTestsManager-->IOSIAPTest中找到IAP的完整测试例。
	