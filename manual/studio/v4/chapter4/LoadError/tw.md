#載入編輯器匯出資料錯誤或者效果不對？#


1，調整目錄結構，需要添加AddSearchPath，預設res資料夾。

2，沒有調用佈局代碼，參考 《[佈局與多解析度適配](../../chapter3/UI/Layout/tw.md)》。

3，如果是流覽器，額外的資源需要添加到src/resource.js，參考《[如何載入cocos v2.0版本發佈的資料](../../chapter3/HowToCode/LoadExportData/tw.md)》

