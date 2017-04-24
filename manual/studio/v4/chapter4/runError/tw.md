#修復cocos run -p web失敗#

**問題一：**基於Framework 3.6版本的工程使用Framework 3.9 console調用cocos run -p web 運行失敗，如何解決？

解決方案：3.6 版本中的 lua win32 工程配置的輸出目錄為 runtime 目錄。而 3.9 版本中已經將輸出目錄修改為了 simulator，需要將VS工程中的輸出目錄調整為 simulator，即可解決。


**問題二：**如何指定編譯使用的vs？

解決方案：在命令中添加 --vs 參數即可。比如：使用 --vs 2015 則強制使用 VS2015 進行編譯運行。

**問題三：**
同時安裝 VS2013和VS2015後，Framework 3.6 以及之前的版本導致編譯報錯，如何解決？

解決方案：
   安裝Framework 3.9，Framework 3.9調整了console命令中查找VS版本的邏輯，根據工程所使用的引擎版本選擇相應的VS版本進行編譯。


