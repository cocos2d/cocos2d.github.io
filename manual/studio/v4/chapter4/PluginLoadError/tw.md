# **如何解決老版本外掛程式在新版本載入不成功？** #

新版本的 Cocos 發佈時，如果外掛程式相關的介面改動較大，外掛程式的版本號會有所更新。

此時基於老版本 Cocos 編寫的外掛程式在新版本裡不可載入。

該問題的解決方法如下：

打開新版本的外掛程式示例工程，該工程在（以 Windows 上的 Cocos 文檔預設安裝目錄為例） %userprofile%\Documents\Cocos\CocosStudio2\Samples\Addins 。

對比示例工程及自己所編寫的外掛程式工程，查看差異，做相應的修改。

> 對於外掛程式版本號升級的，即 AddinConfig.cs 檔中，Addin 及 AddinDependency 特性中的版本號發生變化的，需要用示例工程中引用庫（Library 目錄裡的 DLL）替換自己的外掛程式工程，之後重新編譯。

> 如果需要匯出到 Lua 的，需要使用新版本的 Lua 匯出外掛程式（見下圖）。

