# **如何使進行資源預載入?** #

一直以來Studio的UI介面都是沒有提供資源非同步載入的，但是UI裡頭用到的圖片是可以用非同步的方式預先載入到記憶體的。 
TextureCache::getInstance()->addImageAsync(filename,callback) 可以用這個函數把圖片都非同步讀到記憶體，然後再去載入UI。 

PS：3.2之前UI的載入速度是很慢的，3.2開始UI的載入速度已經大幅優化過了，現在載入UI主要消耗的時間在從記憶體讀檔上。
