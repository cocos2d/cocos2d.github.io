# 如何申请开发证书和使用Code IDE制作可以真机调试的ipa

## 1. 所需步骤

- **添加证书 (Development Certificates)**
- **添加设备 (Devices)**
- **添加App ID**
- **添加描述文件(Development Provisioning Profile)**
- **使用Code IDE编译打包Runtime**


## 2. 关于iOS真机调试的简单说明


#####1. 证书(Development Certificates): 苹果对于开发者的授权认证
#####2. UDID(Devices): Device的唯一标识
#####3. App ID: 对于每个要真机调试或以后要发布的App，都需要设置一个App ID, 它也是App的唯一标识，它通常需要用户提供Product name和Bundle ID,这里需要注意的是，Bundle ID是一个反转的DNS串, 例如：com.company.name, 它集合了开发商与应用程序的信息，这里的name字段可以指定为单一的应用，也可以指定为多个或全部的应用，单一的应用就如刚才的例子所描述的，name字段填写应用名称就好。如果多个或全部应用，name字段可以用“＊”件号代替。但用“＊”号代替的Bundle ID很多功能是使用不了的，例如推送, Gamecenter, 内购等功能。
#####4. 描述文件(Development Provisioning Profile): 就是将以上的证书，设备的UDID，App ID合起来，就是我们所说的描述文件


## 3. 添加证书(Development Certificates)
#####首先，我们需要进入[Apple Developer Center](http://developer.apple.com)，点击MemberCenter后登陆(当然，你得先有一个开发者帐号)，登陆后进入到图中所指向的位置
![image](res/certificate1.png)

#####进入到这一页面后，选择Certificates选项
![image](res/certificate2.png)

#####然后我们在左上角的位置，可以看到Certificates选项中，有一个Development的子选项
![image](res/certificate3.png)

#####我们在页面的右侧，可以找到一个小的加号，点击它，接着选择iOS App Development，点击Continue继续
![image](res/certificate4.png)

#####这里的意思是说，我们必须在Mac上创建一个CSR文件，用来创建我们的证书，接下来，我们就在我们的Mac上进行这一系列的操作
![image](res/certificate5.png)

#####在应用程序下的实用工具里，有一个钥匙串访问的小工具，可以帮助我们快速的创建CSR文件
![image](res/certificate6.png)

#####打开它以后，点击左上角的钥匙串访问的下拉菜单，选择证书助理下面的从证书的颁发机构请求证书
![image](res/certificate7.png)

#####然后我们需要填写用户的Email地址和Common Name，需要注意的就是，存储方式有两种，如果没有特殊需求的话，一般都是会保存在磁盘中，然后点击继续
![image](res/certificate8.png)

#####这一页面默认即可，然后继续
![image](res/certificate9.png)

#####此时，我们所需要的CSR文件就已经创建好了，接下来我们可以继续回到我们的创建Certificate的步骤
![image](res/certificate10.png)

#####回到我们的开发者中心的网站，并点击Continue后，会看到下图，Choose File就是我们刚才创建的那个文件，选择它，并点击Generate
![image](res/certificate11.png)

#####等待数秒后,如果不出意外，会提示我们已创建成功，点击Done后，选择我们创建的这一Certificate并下载
![image](res/certificate12.png)

#####双击下载好的Certificate文件，会自动的在钥匙串中添加秘钥,并且在证书的前方，有个小的三角箭头，点击后，会看到证书中包含一个钥匙一样的子项，这就证明我们的证书已创建成功了
![image](res/certificate13.png)

## 4. 添加设备(Devices)

#####添加设备有两种方式，第一种也是最省时省力的方式，连接iOS设备到Mac, 打开Xcode，并选择菜单栏中的Window下的Organizer,在跳出的界面中的左侧，选择你的设备，并且在显示的设备信息中，点击Use for Development,点击后，如果之前没有登陆，会提示先登陆。稍等待一下，这台设备就添加到我们帐号的测试设备列表中了。
![image](res/device1.png)

#####第二种方式，回到开发者中心的Certificates, Identifiers & Profiles页面，在左侧选择Devices, 然后点击右上角的加号，就可以开始创建了，选择Register Device后，Name就是设备的名字，可以随意填写，UDID可以通过Xcode菜单栏中的Windows下的Organizer获得。
![image](res/device2.png)

#####填写好后，点击Register就可以了
![image](res/device3.png)

## 5. 添加App ID

#####我们需要创建一个调试用的App ID, 方便我们以后的应用程序在设备上调试，苹果默认的存在一个Xcode iOS Wildcard App ID，简单的说，这个App ID可以适配作何应用程序的Bundle Identifier, 所以我们可以直接使用它来进行应用程序的调试。同样我们也可以点击右上角的加号来重新创建一个我们自己的App ID用来测试。
![image](res/appid1.png)

#####需要填写它的name
![image](res/appid2.png)

#####接着填写它的Bundle ID，我们选择Wilcard App ID, 格式一般就是com.company.*, 中间的这一段一般使用公司的名称，虽然看起来很方便，但坏处就是，这样的App ID不能使用内购，推送，Gamecenter等功能。当然你也可以选择Explicit App ID，但你必须明确的指定你的Bundle ID，不能使用＊号来代替。可以跟据自己应用的需求，来选择具体要使用哪一种。
![image](res/appid3.png)

#####点击Submit, 这样我们的App ID就创建完成
![image](res/appid4.png)

## 6. 添加描述文件(Development Provisioning Profile)

#####选择Provisioning Profiles下面的Development,并点击右上角的加号
![image](res/profile1.png)

#####选择iOS App Development,点击Continue
![image](res/profile2.png)

#####选择我们刚刚创建好的App ID
![image](res/profile3.png)

#####会列出当前帐号里面所有的可用的开发者证书，选择我们刚刚创建好的证书就可以了，或者你也可以选择多个证书，甚至是全部选择
![image](res/profile4.png)

#####列出了当前帐号所添加的设备，同样也是选择需要的测试设备，也可以多选或全选
![image](res/profile5.png)

#####填写配置文件名，然后点击Generate
![image](res/profile6.png)

#####等待数秒后，提示我们的描述文件已经创建成功了
![image](res/profile7.png)

#####现在我们需要将描述文件导入到我们的Mac上和测试设备上，这样我们才能将我们打包好的App运行在测试设备上，并且进行调试。

#####导入的方式有两种，第一种是使用Xcode自带的帐号系统和Organizer来分别导入描述文件到Mac和测试设备上

#####打开Xcode, 单击Xcode菜单栏中的Xcode下拉菜单中的Preferences选项，在弹出的页面中，选择Accounts, 如果当前没有登录你的开发者帐户，单击左右下的加号按钮，选择Add App ID, 然后登录你的开发者帐户,登陆成功后，单击页面右下角的View Details
![image](res/profile8.png)

#####单击View Details后，会弹出关于此帐号中证书和描述文件的具体信息，如果在下方的Provisioning Profiles中是空的或者没有我们之前创建的那个描述文件，点击左下角的刷新按钮，即可自动适配和导入当前证书所匹配的描述文件
![image](res/profile9.png)

#####单击Xcode菜单栏中的Window->Organizer选项，弹出界面后，选择我们需要进行调试设备下的Provisioning Profiles选项，然后将我们的描述文件拖到里面，也可以单击下方的Add按钮添加
![image](res/profile10.png)

#####第二种是使用[iPhone实用配置工具](http://support.apple.com/kb/DL1465?viewlocale=zh_CN&locale=zh_CN): 我们需要手动将刚才生成的描述文件下载到我们的Mac上, 然后打开iPhone实用配置工具将描述文件拖入iPhone实用配置工具中，这样但将描述文件导入了Mac中
![image](res/profile11.png)

#####在iPhone实用配置工具中，选择我们要进行调试的设备，然后在设备的详细信息页面选择预置描述文件，在列表中找到我们之前导入的描述文件，然后单击安装按钮
![image](res/profile12.png)


#####这样，我们描述文件的生成和导入也全部完成了。

## 7. 使用Code IDE中的Runtime Builder来编译打包可真机调试的iOS的ipa

#####在我们的Code IDE中，右键单击我们将打包iOS Runtime的工程，选择Cocos Tools菜单项中的Build Custom Runtimes选项
![image](res/pakcage1.png)

#####如果当前工程在创建时没有添加源码或从来没有追加过源码，将提示需要追加源码工程,单击Yes进行追加源码（如果工程中已有源码，请跳过此步骤）
![image](res/pakcage2.png)

#####在弹出的追加源码向导页面中，需要注意的是下方的iOS Bundle Identifier, 请确保它跟我们之前创建App ID是匹配的，点击Generate开始生成源码，追加源码需要花费一些时间，所以请耐心等待
![image](res/pakcage3.png)

#####追加源码成功,点击Close按钮
![image](res/pakcage4.png)

#####会跳转到我们的Runtime生成的向导页面,单击next
![image](res/pakcage5.png)

#####勾选Build iOS Device Runtime选项，并选择签名和所要编译打包的Target，然后点击Generate开始生成可真机调试的ipa。
![image](res/pakcage6.png)

#####生成ipa的过程，根据机器配置的不同，大概要花费掉5-15分，请耐心等待
![image](res/pakcage7.png)

#####生成完成，在Console下的log中会有提示ipa存放在哪里，如果生成失败，请详细查看Console中输出的log并检查错误
![image](res/pakcage8.png)

## 8. 安装及运行

#####连接好我们的ios设备，打开iTunes，选择library中的Apps
![image](res/install1.png)
![image](res/install2.png)

#####将我们打包好的ipa拖入到iTunes中
![image](res/install3.png)

#####进入到我们已经连接好的iOS设备中
![image](res/install4.png)

#####选择Apps
![image](res/install5.png)

#####这时，我们可以看到iTunes中左侧这一栏中，会有刚刚我们拖入的这个ipa，我们点击Install，这时它的状态为变成Will Install， 然后点击iTunes下方的Sync
![image](res/install6.png)
![image](res/install7.png)
![image](res/install8.png)

#####这些iTunes会显示当前的安装进度，当然这个过程可能需要花一点时间
![image](res/install9.png)

#####安装完成，打开我们的iOS设备，找到已安装好的App并运行它，当你看到如下图显示的界面，我们的ipa就安装成功了
![image](res/install10.png)

