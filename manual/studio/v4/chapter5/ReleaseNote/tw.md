# **版本更新說明：** #

##Cocos 3.10版本更新內容：

 &emsp;&emsp;【新增】Cocos2d-x與Cocos整合升級為Cocos引擎，一次安裝引擎編輯器全搞定。

 &emsp;&emsp;【新增】Cocos引擎支援新建cocos2d-x預編譯庫和原始程式碼專案。
                     
 &emsp;&emsp;【新增】Cocos引擎整合協力廠商服務接入工具AnySDK，打通遊戲開發到上線全流程。
                     
 &emsp;&emsp;【新增】文檔中心，整合Cocos2d-x用戶嚮導，API文檔，Cocos Studio用戶嚮導。

 &emsp;&emsp;【新增】商店系統，獲取豐富的遊戲開發資料以及資源更容易。 
             
 &emsp;&emsp;【新增】問題回饋系統，問題直通引擎組，回復快速準確。

 &emsp;&emsp;【新增】Label新增三種overflow：CLAMP，SHRINK,  RESIZE_HEIGHT。

 &emsp;&emsp;【新增】重構Scale9Sprite，提高性能降低記憶體佔用。

 &emsp;&emsp;【新增】ListView嵌套ClippingNode顯示錯誤的問題。

 &emsp;&emsp;【修改】PageView繼承ListView，PageView可以添加任何widget作為其子控制項。

 &emsp;&emsp;【修改】全面優化JSB記憶體使用，增強引擎的穩定性，大幅度精簡綁定代碼以符合[Spidermonkey的GC標準](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/GC_Rooting_Guide) 。


##Cocos 2.3.2版本更新內容：

 &emsp;&emsp;【新增】3D場景和攝影機支持天空盒編輯。（**Cocos Framework 3.8支持**，文檔：http://www.cocos.com/doc/）

 &emsp;&emsp;【新增】一鍵配置開發所需環境。

 &emsp;&emsp;【新增】繁體語言支持。

 &emsp;&emsp;【新增】JS專案支持增強型Web模擬器模擬。（**Cocos Framework 3.7及其以上版本支持**，商店搜索"web simulator"下載並安裝即可）

 &emsp;&emsp;【優化】文檔，教程，API合併為文檔中心，學習更便利。

 &emsp;&emsp;【優化】整合商店，文檔搜索，查詢更快捷。

 &emsp;&emsp;【優化】輸出窗口支持列印Windows模擬器與Mac模擬器啟動調試資訊。

 &emsp;&emsp;【優化】發佈數據增加編輯數據與本地檔案名大小寫校驗，解決因為windows系統檔案名大小寫不敏感導致的App出錯的問題。

 &emsp;&emsp;【優化】發佈路徑設置增加打開發佈路徑功能。

 &emsp;&emsp;【優化】藝術數字控件默認顯示。

 &emsp;&emsp;【優化】骨骼支持通過顏色進行標記。

 &emsp;&emsp;【優化】骨骼支持顏色屬性作為動畫幀。

 &emsp;&emsp;【優化】骨骼支持顏色混合屬性作為動畫幀。（**Cocos Framework 3.8支持**）

 &emsp;&emsp;【優化】骨骼動畫編輯模式遮罩骨骼顏色透明度級聯刷新。（**Cocos Framework 3.8支持**）

 &emsp;&emsp;【優化】Cocos Framework示例專案上傳商店。（商店搜索"Framework示例專案"下載並解壓即可）

 &emsp;&emsp;【修復】安裝cocos framework後，新建專案找不到cocos framework的問題。

 &emsp;&emsp;【修復】畫布足夠小時骨骼超出右上邊界時會從左下邊界冒出來的問題。

 &emsp;&emsp;【修復】導入帶顏色混合屬性cocos studio 1.6骨骼動畫專案效果不正確的問題。

 &emsp;&emsp;【修復】編輯器部分英文翻譯不准確的問題。

 &emsp;&emsp;【修復】編輯器的一些bug。

##Cocos 2.3.0版本更新內容：

 &emsp;&emsp;【新增】3D場景內多個物體選中後，參考坐標軸和原點的快速切換功能。

 &emsp;&emsp;【新增】尺規與輔助線在場景，節點和圖層。

 &emsp;&emsp;【優化】以JSON檔案格式發佈時，將場景資源清單存儲到對應的.json文件中。

 &emsp;&emsp;【優化】3D場景網格輔助線。

 &emsp;&emsp;【優化】功能表增加隱藏/顯示錨點，Windows快速鍵為 ctrl + shift + A，
Mac平臺的快速鍵為Command+Shift+A。

 &emsp;&emsp;【優化】Cocos説明文檔，啟動介面內置文檔模組，方便快速查看。

 &emsp;&emsp;【修復】描邊寬度為0，遊戲載入效果仍然顯示描邊效果的問題。

 &emsp;&emsp;【修復】替換fnt字體，刷新資源區，渲染區不更新的問題。


##Cocos 2.2.9版本更新內容：

 &emsp;&emsp;【修復】plist合圖匯出png時，合圖中含有透明屬性的圖片丟失。

##Cocos 2.2.8版本更新內容：

 &emsp;&emsp;【新增】點擊3D世界坐標軸可快速調節視圖。

 &emsp;&emsp;【新增】點擊四個方向鍵可快捷移動3D場景。

 &emsp;&emsp;【新增】3D場景默認添加一個攝像機。

 &emsp;&emsp;【新增】支援3D對象快速等比例縮放。

 &emsp;&emsp;【新增】支援2D畫布移動的手型按鈕和快速鍵：點擊手型按鈕（Q）後開啟移動畫布功能，點擊箭頭按鈕（W）恢復到常態。

 &emsp;&emsp;【優化】匯出Lua以外掛程式形式在Cocos Store提供。

 &emsp;&emsp;【優化】優化Launcher介面，支援打開專案,打開專案所在資料夾。

 &emsp;&emsp;【優化】Launcher教程頁添加cocos入門英文教程。

 &emsp;&emsp;【優化】資源區刪除功能，支援從專案移除索引或者刪除到回收站。

 &emsp;&emsp;【修復】編輯器匯出資料檔案中，PercentWidthEnabled以及PercentHeightEnabled不更新的問題。

##Cocos 2.2.6版本更新內容：
    
 &emsp;&emsp;【修正】打開含有較多合圖檔的專案，合圖檔中的圖片丟失。

##Cocos 2.2.5版本更新內容：
                                    
 &emsp;&emsp;【新增】一鍵部署並運行app在iOS,Android,win32,Mac以及流覽器平臺上。

 &emsp;&emsp;【新增】JS項目可以打包成Html5 App。

 &emsp;&emsp;【新增】支援3D控制項擴展。

 &emsp;&emsp;【新增】資源面板csd檔支援拷貝操作，快速鍵為Ctrl/Command+D。

 &emsp;&emsp;【新增】按兩下嵌套的csd檔， 直接進入編輯狀態。

 &emsp;&emsp;【新增】按鈕和文本控制項增加描邊,陰影屬性設置。(**Cocos 2d-x 3.6支持解析**)

 &emsp;&emsp;【新增】動畫緩動設置。（Cocos 2d-x 3.6支持解析）。

 &emsp;&emsp;【新增】精靈控制項，粒子控制項blending功能。（**Cocos 2d-x 3.6支持解析**）

 &emsp;&emsp;【新增】取色器面板支援顏色歷史記錄。

 &emsp;&emsp;【新增】多選結構樹節點，可批量操作顯示與鎖定。

 &emsp;&emsp;【優化】完整專案與資源專案整合為cocos專案，簡化創建專案流程。

 &emsp;&emsp;【優化】資源專案可以升級為完整專案。

 &emsp;&emsp;【優化】支援快速鍵（Shift + Q/W/T/B）控制調整物件的渲染層級。

 &emsp;&emsp;【優化】創建序列幀動畫，增加“是否追加第一幀為最後一幀”選項，可方便的創建迴圈的序列幀動畫。
 
 &emsp;&emsp;【優化】去掉節點不可以重名的判斷。

 &emsp;&emsp;【優化】九宮格參數可以更直觀的通過拖動的方式進行設置。

 &emsp;&emsp;【優化】給控制項設置資源，控制項的尺寸將預設設置為資源的尺寸。

 &emsp;&emsp;【優化】3D網格輔助線顯示。

 &emsp;&emsp;【優化】圖層（Layer）檔嵌套可以參與佈局，做UI介面更加實用。

 &emsp;&emsp;【優化】整合發佈與打包介面。

 &emsp;&emsp;【修復】導入1.6 UI專案只改變結構樹顯示，不改變控制項可見性，導致模擬器裡面仍然顯示的問題。

 &emsp;&emsp;【修復】ScrollView Area大小受content size限制的問題。                        
                                                                        
##Cocos 2.2.1版本更新內容：
    
 &emsp;&emsp;【修復】編輯器匯出的合圖檔會多增加.plist副檔名的問題。

##Cocos 2.2版本更新內容：
    
 &emsp;&emsp;【重磅推出】3D場景編輯——新增模型支援,粒子特效,攝像機控制項，遊戲製作功能更強大（**Cocos 2d-x 3.5支援解析**）。

 &emsp;&emsp;【萬眾期待】支援基於Lua腳本的自訂控制項，擴展隨心所欲 。

 &emsp;&emsp;【新增】Cocos商店華麗變身，下載,安裝,卸載一鍵搞定，資訊和評論與你分享。

 &emsp;&emsp;【新增】支援修改動畫播放速度，預覽演示更方便 （**cocos2d-x 3.5支援解析**）。

 &emsp;&emsp;【新增】多解析度設置，常用解析度自由設定 。
 
 &emsp;&emsp;【新增】控制項高級屬性可設置自訂資料 （**Cocos 2d-x 3.5支援解析**）。

 &emsp;&emsp;【優化】編輯器匯出的資料，支援Cocos 2d-x 3.4 Final載入。
 
 &emsp;&emsp;【優化】新建專案與示例工程合併，創建專案更便捷 。

 &emsp;&emsp;【優化】對新創建的專案進行Name屬性校驗， 保證變數名有效。

 &emsp;&emsp;【優化】支援在屬性區修改圖層尺寸。

 &emsp;&emsp;【優化】固定與拉伸佈局屬性， 支援直接輸入數值進行設置。

 &emsp;&emsp;【優化】控制項可設置禁用的圖片。

 &emsp;&emsp;【優化】Button控制項支援清空預設資源， 減小資源大小。

 &emsp;&emsp;【優化】csd文件外部編輯後的同步問題。
 
 &emsp;&emsp;【優化】專案打開速度大幅提升。

 &emsp;&emsp;【修正】Mac OS X 10.10.2自動升級閃退的bug。


注意：Cocos2d-x 3.4（含）以上的版本支持cocos 2.2（含）以上的版本发布的数据。
