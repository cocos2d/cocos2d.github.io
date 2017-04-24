#How to: Preload Resources#

Cocos Studio does not support asynchronous loading configuration  files but supports asynchronous loading UI images. 

Use this function `TextureCache::getInstance()->addImageAsync(filename,callback) ` to load images to memory,  and then load UI images. 

***Note** The loading efficiency of UI has been considerably improved since Cocos 2d-x v3.2. Now loading UI images from memory takes the most loading time.* 