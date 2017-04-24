#自訂預編譯庫使用說明

##簡介

本文檔介紹如何定制預編譯庫&模擬器，並在遊戲工程中使用定制後的預編譯庫&模擬器。

定制預編譯庫是指安裝預編譯庫之後，對其中的引擎源碼進行修改與定制，然後使用的過程。

##版本要求

定制預編譯庫為v3.7版本新增的功能，3.7以下的版本並不支援。此文檔適用於 v3.8 以及以後版本。

以下的內容中提到的路徑以v3.10版本為例，具體路徑以實際安裝的預編譯庫版本為准。

##如何定制預編譯庫

定制預編譯庫實際上就是修改安裝的源碼。在預編譯庫安裝完成後，可以使用XCode 6.0機器以上的版本 和 Visual Studio 2013版本進行修改和調試：

* Mac系統可以使用XCode打開工程檔`/Applications/Cocos/Cocos2d-x/cocos2d-x-v3.10/build/cocos2d_libs.xcodeproj`，然後修改與調試代碼即可定制引擎。
* Windows系統可以使用Visual Studio打開工程檔`[安裝目錄]/Cocos/Cocos2d-x/Cocos2d-x-v3.10/build/cocos2d-win32.sln`，然後修改與調試代碼即可定制引擎。

##如何生成定制後的預編譯庫

###重新生成預編譯庫

cocos2d-x 3.10附帶了將源碼編譯生成預編譯庫的腳本工具：`cocos gen-libs`。

此腳本工具的使用說明如下：

```
usage: cocos gen-libs [-h] [-c] [-e ENGINE_PATH] [-p {ios,mac,android,win32}]
                      [-m {debug,release}] [--dis-strip] [--vs VS_VERSION]
                      [--app-abi APP_ABI]

生成新的cocos2d-x-3.10預編譯庫。

生成引擎的預編譯庫。生成的庫檔會保存在引擎根目錄的
'prebuilt' 資料夾。

通用參數:
  -h, --help            顯示説明資訊
  -c                    生成預編譯庫之前先刪除 'prebuilt' 資料夾。
  -p {ios,mac,android,win32}
                        指定需要編譯的目標平臺。可以通過多個 '-p' 參數指定編譯多個目標平臺。
                        預設編譯所有可用的目標平臺。
  -m {debug,release}, --mode {debug,release}
                        指定使用 debug 或者 release 模式來生成預編譯庫。預設值為 release。
  --dis-strip           關閉生成預編譯庫的 strip 功能。

Windows 相關參數:
  --vs VS_VERSION       指定使用的 Visual Studio 版本，例如 2013。
                        默認自動查找可用的版本。

Android 相關參數:
  --app-abi APP_ABI     設置 ndk-build 的 APP_ABI 屬性。可以使用 ':' 分隔多個值。
                        示例：--app-aib armeabi:x86:mips。預設值為 'armeabi'。
```

使用示例：

1. `cocos gen-libs -c` 清除之前的預編譯庫並編譯所有可用的目標平臺。
2. `cocos gen-libs -p win32 --vs 2015` 使用 VS2015 編譯 Win32 平臺。

編譯完成後，預編譯庫生成在 `Cocos2d-x/cocos2d-x-v3.10/prebuilt` 資料夾下。遊戲工程可以直接連結到新生成的預編譯庫。

備註：

* 對 預編譯庫 源碼的定制包括源碼修改以及相應的工程檔維護。如果定制後的代碼或者工程配置有問題可能導致編譯工具執行失敗。
* 當使用 `-m debug` 參數生成 debug 版本預編譯庫時，遊戲專案中的 Visual Studio 工程需要進行相應的修改才能正常編譯運行。修改內容如下：  
將 C/C++ -> Code Generation -> Runtime Library 由 /MD 修改為 /MDd。如圖：
![VS config](res/vs_config.jpg)

##重新生成模擬器


預編譯庫 中附帶了將源碼編譯生成預編譯庫的腳本工具：`cocos gen-simulator`。

此腳本工具的使用說明如下：

```
usage: cocos gen-simulator [-h] [-c] [-e ENGINE_PATH] [-m {debug,release}]
                           [-o OUT_DIR] [-p {ios,mac,android,win32}]
                           [--vs VS_VERSION]

生成cocos2d-x-3.10模擬器。

可用參數:
  -h, --help            顯示説明資訊。
  -c, --clean           生成之前清除輸出目錄。會完全刪除輸出目錄。
  -e ENGINE_PATH        指定引擎資料夾。預設值為當前工具所在的引擎根目錄。
  -m {debug,release}, --mode {debug,release}
                        指定使用 debug 或者 release 模式來生成模擬器。預設值為 debug。
  -o OUT_DIR, --output OUT_DIR
                        指定模擬器的輸出目錄。預設值為引擎根目錄下的 'simulator' 資料夾。
  -p {ios,mac,android,win32}
                        指定需要編譯的目標平臺。可以通過多個 '-p' 參數指定編譯多個目標平臺。
                        預設編譯所有可用的目標平臺。
  --vs VS_VERSION       指定使用的 Visual Studio 版本，例如 2013。
                        默認自動查找可用的版本。
```

使用示例：

1. `cocos gen-simulator -c` 清除之前的模擬器並生成所有可用目標平臺的模擬器。
2. `cocos gen-simulator -p win32 --vs 2015` 使用 VS2015 編譯 Win32 平臺模擬器。

##集成自訂模擬器：


把編譯出來的模擬器程式檔拷貝覆蓋掉"**安裝目錄/Cocos/cocos-simulator-bin**"下面的檔，這樣就可以替換掉Cocos內置的模擬器，使用自訂的模擬器了。

備註：

* 模擬器主要用於Cocos資源編輯器中的預覽功能。如果要在資源編輯器中使用新生成的模擬器，需要使用新生成的模擬器替換掉資源編輯器中的模擬器。
