#升級或降級Cocos Framework#

**基於cocos2d-x 3.10及其之後的版本：**

不再支持通過切換Cocos Framework的版本進行自動升級，支支持手動升級，方法如下：

新建一個基於新的Framework創建的項目，然後將這個項目與升級之後的項目進行對比，把Classes下面的檔以及proj.android，proj，ios_mac，proj.win32裡面除掉專案檔案其他部分進行手動合併。


**基於cocos2d-x 3.9及其以前的版本：**

當大家安裝了多個cocos2d-x的時候，在功能表-》專案（P）->項目設置...-》打包，可以切換Cocos Framework的版本，如圖：

![image](res/image001.png)         

設置新的Framework後，下一次打包或者運行在設備上的時候，會自動對當前項目進行升級，升級腳本只會把當前項目的proj.XXXX的專案檔案中引用庫的路徑重定向到新的Framework庫所在的目錄，並不會對當前項目的檔進行合併，包括Classes下面的檔以及proj.XXXX裡面除掉專案檔案其他部分，所以當大家發現升級後的項目運行不起來的時候，可以採用以下方法進行解決：

新建一個基於新的Framework創建的項目，然後將這個項目與升級之後的項目進行對比，把Classes下面的檔以及proj.android，proj，ios_mac，proj.win32裡面除掉專案檔案其他部分進行手動合併，這樣便可以解決您的問題。
