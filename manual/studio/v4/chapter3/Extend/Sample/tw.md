#示例工程說明

###1.    示例工程位置

&emsp;&emsp;Windows 上文檔位置預設安裝時，這個目錄是 %userprofile%\Documents\Cocos\CocosStudio2\Samples\Addins。文檔位置自訂安裝時，則在 Cocos Studio 的文檔安裝目錄中的相應位置。例如，文檔的安裝目錄為 D:\CocosDocuments，則該路徑為 D:\CocosDocuments\Cocos\CocosStudio2\Samples\Addins 。在 Mac 上，這個目錄為系統目錄 /Library/Application Support/Cocos/CocosStudio2/Samples/Addins。

&emsp;&emsp;注：%userprofile% 是 Windows 一個環境變數，其值一般為 C:\users\ABC（ABC 用戶名），可將該路徑粘貼到 Windows 資源管理器位址欄以打開相應的目錄。例如，在 Windows 的 cmd 命令列工具中輸入 set userprofile 將得到以下輸出：

![image](res/image001.png) 
 
(遮蔽部分為用戶名)

###2.    示例工程其它細節

&emsp;&emsp;本節將介紹一些示例工程 Addins.Sample 的其它細節。

&emsp;&emsp;**示例工程的編譯：**示例工程是一個 Visual Studio 2013 的解決方案。在 Windows 上直接打開 Addins.sln 即可編譯。如果沒有安裝 Mono庫及 GTK#，請自行安裝。在 Mac 上由於許可權的關係，請把示例工程拷貝到一個使用者有許可權讀寫的目錄時行編譯。在 Mac 上可以使用 Xamarin Studio 進行編譯。請自行安裝 MonoFramework。

&emsp;&emsp;**編譯後 DLL 的拷貝。**編譯成功後，會得到一個 Addins.Sample.dll ，請將其拷貝到 Addins 目錄裡。（Windows 上文檔位置預設安裝時，這個目錄會是 %userprofile%\Documents\Cocos\CocosStudio2\Addins。文檔位置非默認安裝時，則在 Cocos Studio 的文檔安裝目錄中的相應位置。以在 Windows 上為例，如果文檔的安裝目錄為 D:\CocosDocuments，則該路徑為 D:\CocosDocuments\Cocos\CocosStudio2\Addins。在 Mac 上，這個目錄為使用者目錄 ~/Library/Application Support/Cocos/CocosStudio2/Addins）。
