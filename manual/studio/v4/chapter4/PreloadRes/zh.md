# **如何使进行资源预加载?** #

一直以来Studio的UI界面都是没有提供资源异步加载的，但是UI里头用到的图片是可以用异步的方式预先加载到内存的。 
TextureCache::getInstance()->addImageAsync(filename,callback) 可以用这个函数把图片都异步读到内存，然后再去加载UI。 

PS：3.2之前UI的加载速度是很慢的，3.2开始UI的加载速度已经大幅优化过了，现在加载UI主要消耗的时间在从内存读文件上。