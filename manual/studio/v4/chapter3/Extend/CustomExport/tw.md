# **自訂資料匯出格式** #

&emsp;&emsp;1.自訂資料匯出格式

&emsp;&emsp;Cocos Studio默認支援三種匯出格式：CSB,Json,Lua。使用者可能選擇自己需要的格式進行匯出，如果有特殊的需求，可以自定制匯出，相應的讀取部分也需要自己實現。只需要實現 `CocoStudio.Projects.IGameProjectSerializer` 介面（在 Cocos v2.3.3 版本之後為 `CocoStudio.Projects.IGameFileSerializer`, 請以實際代碼為準。參見示例工程中的 `PublishExtend` 目錄裡的 `CustomSerializer` 類）。介面的定義如下：

    [TypeExtensionPoint]
	// 在 Cocos v2.3.3 版本之後為 IGameFileSerializer
    public interface IGameProjectSerializer
    {
        /// <summary>
        /// 序列化器ID
        /// </summary>
        string ID { get; }

        /// <summary>
        /// 對外顯示的名稱
        /// </summary>
        string Label { get; }

        /// <summary>
        /// 執行序列化
        /// </summary>
        /// <param name="info">發佈設置資訊</param>
        /// <param name="projFile">專案檔案， 在 Cocos v2.3.3 之後該參數為 GameFile gameFile</param>
        /// <returns>錯誤資訊（正常結束時為空）</returns>
        string Serialize(PublishInfo info, IProjectFile projFile);

        /// <summary>
        /// 執行上下文初始化操作。
        /// 一個 Studio 解決方案只會調用一次，在第一次 Serialize 調用之前會被調用。
        /// 注：每個 *.csd 檔會調用一次 Serialize.
        /// </summary>
        void ContextInitialize(PublishInfo publishInfo);

        /// <summary>
        /// 執行上下文結束操作。
        /// 一個 Studio 解決方案只會調用一次，在最後一次 Serialize 調用之後會被調用。
        /// 注：每個 *.csd 檔會調用一次 Serialize.
        /// </summary>
        void ContextFinalize(PublishInfo publishInfo);
     }

&emsp;&emsp;其它部分請參見示例工程。

&emsp;&emsp;目前用戶可以實現將CSD檔（即：Cocos Studio的工程檔）轉化為自己需要的格式。

&emsp;&emsp;2.其它

&emsp;&emsp;在後續的開發過程中文檔的內容會根據回饋持續更新。如有更新，請以新的版本為准。

&emsp;&emsp;如果您對於Cocos Studio擴展有任何的意見或者是建議，請在論壇或者是開發者群裡回饋給我們。感謝您對Cocos Studio的關注和支持，我們將回報您以更好用的產品。
