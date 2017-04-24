#自編譯Cocos Framework&Simulator使用說明


##簡介

本文檔介紹如何定制Cocos Framework&Simulator，並在遊戲工程中使用定制後的Cocos Framework&Simulator。

定制Cocos Framework是指安裝Cocos Framework之後，對其中的引擎源碼進行修改與定制，然後使用的過程。

##版本要求

定制Cocos Framework為v3.7版本新增的功能，3.7以下的版本並不支援。

以下的內容中提到的路徑以v3.7版本為例，具體路徑以實際安裝的Cocos Framework版本為准。

##如何定制Cocos Framework

定制Cocos Framework實際上就是修改安裝的源碼。在Cocos Framework安裝完成後，使用自己常用的IDE工具或者代碼編輯器對安裝的源碼進行修改即可。

* Mac系統可以使用XCode打開工程檔`/Applications/Cocos/frameworks/cocos2d-x-v3.7/build/CocosFramework.xcodeproj`，然後修改與調試代碼即可定制引擎。
* Windows系統可以使用Visual Studio打開工程檔`[安裝目錄]/frameworks/Cocos2d-x-v3.7/build/CocosFramework.sln`，然後修改與調試代碼即可定制引擎。

##如何生成定制後的Cocos Framework

###重新生成預編譯庫

Cocos Framework中附帶了將源碼編譯生成預編譯庫的腳本工具：`frameworks/cocos2d-x-v3.7/tools/framework-compile/gen_cocos_libs.py`。

此腳本工具的使用說明如下：

```
usage: gen_cocos_libs.py [-h] [-c] [-all] [--win] [--mac] [--ios] [--android]
                         [--dis-strip] [--vs VS_VERSION] [--app-abi APP_ABI]

生成新的Cocos Framework預編譯庫。

可用參數:

     -h, --help            顯示説明資訊

     -c                    編譯之前先刪除之前的 prebuilt 資料夾

     -all                  編譯所有平臺（Mac 系統編譯 Mac，iOS 和 Android；Windows 系統編譯 Win32 和 Android）

     --win                 編譯 Win32 平臺

     --mac                 編譯 Mac 平臺

     --ios                 編譯 iOS 平臺

     --android             編譯 Android 平臺

     --dis-strip, --disable-strip  關閉 strip 功能，編譯生成的 .a 檔不再 strip。（影響 Mac，iOS 和 Android 平臺的預編譯庫）

     --vs VS_VERSION       指定使用的 Visual Studio 版本。不指定的話，自動查找可用版本。

     --app-abi APP_ABI     指定 ndk-build 所使用的 APP_ABI 參數值。可以使用 ":" 來分隔多個值。例如：--app-abi armeabi:x86。 預設值為 armeabi。
```

使用示例：

1. `python gen_cocos_libs.py -c -all` 清除之前的預編譯庫並編譯所有平臺。
2. `python gen_cocos_libs.py --win --vs 2015` 使用VS2015編譯Win32平臺。

編譯完成後，預編譯庫生成在`frameworks/cocos2d-x-v3.7/prebuilt`資料夾下。遊戲工程可以直接連結到新生成的預編譯庫。

備註：

* 對Cocos Framework源碼的定制包括源碼修改以及相應的工程檔維護。如果定制後的代碼或者工程配置有問題可能導致編譯工具執行失敗。


##重新生成模擬器


Cocos Framework中附帶了將源碼編譯生成預編譯庫的腳本工具：`frameworks/cocos2d-x-v3.7/tools/framework-compile/gen_cocos_simulator.py`。

此腳本工具的使用說明如下：

```
usage: gen_cocos_simulator.py [-h] [-c] [-m {debug,release}] [-o OUT_DIR] -p
                              {ios,mac,android,win32,all} [--vs VS_VERSION]

重新生成模擬器。

可用參數:

    -h, --help            顯示説明資訊

    -c, --clean           重新生成之前，先刪除指定的輸出目錄。

    -m {debug,release}, --mode {debug,release}  生成模擬器的模式，可選值：debug，release

    -o OUT_DIR, --output OUT_DIR 生成的模擬器存放路徑。不指定的話，默認放在 "frameworks/cocos2d-x-v3.7/simulator" 資料夾。

    -p {ios,mac,android,win32,all}, --platform {ios,mac,android,win32,all} 需要編譯的平臺。如果為 all，則 Mac 系統編譯 Mac，iOS 和 Android；Windows 系統編譯 Win32 和 Android

    --vs VS_VERSION       指定使用的 Visual Studio 版本。不指定的話，自動查找可用版本。
```

使用示例：

1.`python gen_cocos_simulator.py -c -p all`清除之前的模擬器並編譯所有平臺。
2.`python gen_cocos_libs.py -p win32 --vs 2015`使用VS2015編譯Win32平臺模擬器。

##集成自訂模擬器：


把編譯出來的模擬器程式檔拷貝覆蓋掉"**安裝目錄/Cocos/cocos-simulator-bin**"下面的檔，這樣就可以替換掉Cocos內置的模擬器，使用自訂的模擬器了。

備註：

* 模擬器主要用於Cocos資源編輯器中的預覽功能。如果要在資源編輯器中使用新生成的模擬器，需要使用新生成的模擬器替換掉資源編輯器中的模擬器。
