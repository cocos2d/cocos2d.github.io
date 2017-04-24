# **版本更新说明：** #

##Cocos 3.10版本更新内容：

 &emsp;&emsp;【新增】Cocos2d-x与Cocos整合升级为Cocos引擎，一次安装引擎编辑器全搞定。

 &emsp;&emsp;【新增】Cocos引擎支持新建cocos2d-x预编译库和源代码项目。
                     
 &emsp;&emsp;【新增】Cocos引擎整合第三方服务接入工具AnySDK，打通游戏开发到上线全流程。
                     
 &emsp;&emsp;【新增】文档中心，整合Cocos2d-x用户向导，API文档，Cocos Studio用户向导。

 &emsp;&emsp;【新增】商店系统，获取丰富的游戏开发资料以及资源更容易。 
             
 &emsp;&emsp;【新增】问题反馈系统，问题直通引擎组，回复快速准确。

 &emsp;&emsp;【新增】Label新增三种overflow：CLAMP，SHRINK,  RESIZE_HEIGHT。

 &emsp;&emsp;【新增】重构Scale9Sprite，提高性能降低内存占用。

 &emsp;&emsp;【新增】ListView嵌套ClippingNode显示错误的问题。

 &emsp;&emsp;【修改】PageView继承ListView，PageView可以添加任何widget作为其子控件。

 &emsp;&emsp;【修改】全面优化JSB内存使用，增强引擎的稳定性，大幅度精简绑定代码以符合[Spidermonkey的GC标准](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/GC_Rooting_Guide) 。


##Cocos 2.3.2版本更新内容：


 &emsp;&emsp;【新增】3D场景和摄影机支持天空盒编辑。（**Cocos Framework 3.8支持**，文档：http://www.cocos.com/doc/）

 &emsp;&emsp;【新增】一键配置开发所需环境。

 &emsp;&emsp;【新增】繁体语言支持。

 &emsp;&emsp;【新增】JS项目支持增强型Web模拟器模拟。（**Cocos Framework 3.7及其以上版本支持**，商店搜索"web simulator"下载并安装即可）

 &emsp;&emsp;【优化】文档，教程，API合并为文档中心，学习更便利。

 &emsp;&emsp;【优化】整合商店，文档搜索，查询更快捷。

 &emsp;&emsp;【优化】输出窗口支持打印Windows模拟器与Mac模拟器启动调试信息。

 &emsp;&emsp;【优化】发布数据增加编辑数据与本地文件名大小写校验，解决因为windows系统文件名大小写不敏感导致的App出错的问题。

 &emsp;&emsp;【优化】发布路径设置增加打开发布路径功能。

 &emsp;&emsp;【优化】艺术数字控件默认显示。

 &emsp;&emsp;【优化】骨骼支持通过颜色进行标记。

 &emsp;&emsp;【优化】骨骼支持颜色属性作为动画帧。

 &emsp;&emsp;【优化】骨骼支持颜色混合属性作为动画帧。（**Cocos Framework 3.8支持**）

 &emsp;&emsp;【优化】骨骼动画编辑模式屏蔽骨骼颜色透明度级联刷新。（**Cocos Framework 3.8支持**）

 &emsp;&emsp;【优化】Cocos Framework示例项目上传商店。（商店搜索"Framework示例项目"下载并解压即可）

 &emsp;&emsp;【修复】安装cocos framework后，新建项目找不到cocos framework的问题。

 &emsp;&emsp;【修复】画布足够小时骨骼超出右上边界时会从左下边界冒出来的问题。

 &emsp;&emsp;【修复】导入带颜色混合属性cocos studio 1.6骨骼动画项目效果不正确的问题。

 &emsp;&emsp;【修复】编辑器部分英文翻译不准确的问题。

 &emsp;&emsp;【修复】编辑器的一些bug。

##Cocos 2.3.1版本更新内容：


 &emsp;&emsp;【新增】自定义Cocos Framework & Simulator功能。（**"Cocos Framework 3.7支持，文档：http://www.cocos.com/doc/**）

 &emsp;&emsp;【新增】项目设置增加全部发布选项。

 &emsp;&emsp;【新增】Cocos增加API文档，支持复制粘贴。

 &emsp;&emsp;【新增】偏好设置增加简化控件（按钮，复选框，滑动条）初始资源功能。（**"文档：http://www.cocos.com/doc/**）

 &emsp;&emsp;【新增】艺术字体控件支持首字符，字符宽，字符高设置。
 
 &emsp;&emsp;【新增】ttc格式字体支持描边设置。

 &emsp;&emsp;【新增】FAQ新增修复打包失败文档。（**文档：http://www.cocos.com/doc/**）

 &emsp;&emsp;【优化】字体描边算法，描边效果更合理。


 &emsp;&emsp;【优化】去掉解析"xxx missed"显示。(**Cocos Framework 3.7支持**)。


 &emsp;&emsp;【优化】Windows模拟器菜单显示改为标题栏右键弹出菜单，扩大调试区域。


 &emsp;&emsp;【优化】控件面板和属性面板UI，增强操作性。


 &emsp;&emsp;【优化】JS项目资源不需要添加到src/resource.js，浏览器运行也可以正常显示。（**Cocos Framework 3.7支持**）



 &emsp;&emsp;【优化】阴影偏移量支持两位小数，提高阴影效果精确度。


 &emsp;&emsp;【优化】Cocos文档页面支持复制粘贴。


 &emsp;&emsp;【优化】Cocos反馈页面增加常见问题解答。


 &emsp;&emsp;【修复】打开项目，描边宽度1变为0的问题。


 &emsp;&emsp;【修复】C++项目编辑资源后发布到VS运行，资源刷新不及时的问题。（**Cocos Framework 3.7支持**）


 &emsp;&emsp;【修复】在结构树重命名时按下Shift+B/T/Q/W会结束编辑状态的问题。

**&emsp;&emsp;Cocos 2.3.0版本更新内容：**

 &emsp;&emsp;【新增】3D场景内多个物体选中后，参考坐标轴和原点的快速切换功能。

 &emsp;&emsp;【新增】标尺与参考线在场景，节点和图层。

 &emsp;&emsp;【优化】以JSON文件格式发布时，将场景资源列表存储到对应的.json文件中。

 &emsp;&emsp;【优化】3D场景网格参考线。

 &emsp;&emsp;【优化】菜单增加隐藏/显示锚点，Windows快捷键为 ctrl + shift + A，
Mac平台的快捷键为Command+Shift+A。

 &emsp;&emsp;【优化】Cocos帮助文档，启动界面内置文档模块，方便快速查看。

 &emsp;&emsp;【修复】描边宽度为0，游戏加载效果仍然显示描边效果的问题。

 &emsp;&emsp;【修复】替换fnt字体，刷新资源区，渲染区不更新的问题。


##Cocos 2.2.9版本更新内容：

 &emsp;&emsp;【修复】plist合图导出png时，合图中含有透明属性的图片丢失。

##Cocos 2.2.8版本更新内容：

 &emsp;&emsp;【新增】点击3D世界坐标轴可快速调节视图。

 &emsp;&emsp;【新增】点击四个方向键可快捷移动3D场景。

 &emsp;&emsp;【新增】3D场景默认添加一个摄像机。

 &emsp;&emsp;【新增】支持3D对象快速等比例缩放。

 &emsp;&emsp;【新增】支持2D画布移动的手型按钮和快捷键：点击手型按钮（Q）后开启移动画布功能，点击箭头按钮（W）恢复到常态。

 &emsp;&emsp;【优化】导出Lua以插件形式在Cocos Store提供。

 &emsp;&emsp;【优化】优化Launcher界面，支持打开项目,打开项目所在文件夹。

 &emsp;&emsp;【优化】Launcher教程页添加cocos入门英文教程。

 &emsp;&emsp;【优化】资源区删除功能，支持从项目移除索引或者删除到回收站。

 &emsp;&emsp;【修复】编辑器导出数据文件中，PercentWidthEnabled以及PercentHeightEnabled不更新的问题。

##Cocos 2.2.6版本更新内容：
	
 &emsp;&emsp;【修正】打开含有较多合图文件的项目，合图文件中的图片丢失。

##Cocos 2.2.5版本更新内容：
									
 &emsp;&emsp;【新增】一键部署并运行app在iOS,Android,win32,Mac以及浏览器平台上。

 &emsp;&emsp;【新增】JS项目可以打包成Html5​ App。

 &emsp;&emsp;【新增】支持3D控件扩展。

 &emsp;&emsp;【新增】资源面板csd文件支持拷贝操作，快捷键为Ctrl/Command+D。

 &emsp;&emsp;【新增】双击嵌套的csd文件， 直接进入编辑状态。

 &emsp;&emsp;【新增】按钮和文本控件增加描边,阴影属性设置。(**Cocos 2d-x 3.6支持解析**)

 &emsp;&emsp;【新增】动画缓动设置。（Cocos 2d-x 3.6支持解析）。

 &emsp;&emsp;【新增】精灵控件，粒子控件blending功能。（**Cocos 2d-x 3.6支持解析**）

 &emsp;&emsp;【新增】取色器面板支持颜色历史记录。

 &emsp;&emsp;【新增】多选结构树节点，可批量操作显示与锁定。

 &emsp;&emsp;【优化】完整项目与资源项目整合为cocos项目，简化创建项目流程。

 &emsp;&emsp;【优化】资源项目可以升级为完整项目。

 &emsp;&emsp;【优化】支持快捷键（Shift + Q/W/T/B）控制调整对象的渲染层级​。

 &emsp;&emsp;【优化】创建序列帧动画，增加“是否追加第一帧为最后一帧”选项，可方便的创建循环的序列帧动画。
 
 &emsp;&emsp;【优化】去掉节点不可以重名的判断。

 &emsp;&emsp;【优化】九宫格参数可以更直观的通过拖动的方式进行设置。

 &emsp;&emsp;【优化】给控件设置资源，控件的尺寸将默认设置为资源的尺寸。

 &emsp;&emsp;【优化】3D网格参考线显示。

 &emsp;&emsp;【优化】图层（Layer）文件嵌套可以参与布局，做UI界面更加实用。

 &emsp;&emsp;【优化】整合发布与打包界面。​

 &emsp;&emsp;【修复】导入1.6 UI项目只改变结构树显示，不改变控件可见性，导致模拟器里面仍然显示的问题。

 &emsp;&emsp;【修复】ScrollView Area大小受content size限制的问题。						
																		
##Cocos 2.2.1版本更新内容：
    
 &emsp;&emsp;【修复】编辑器导出的合图文件会多增加.plist扩展名的问题。

##Cocos 2.2版本更新内容：
	
 &emsp;&emsp;【重磅推出】3D场景编辑——新增模型支持,粒子特效,摄像机控件，游戏制作功能更强大（**Cocos 2d-x 3.5支持解析**）。

 &emsp;&emsp;【万众期待】支持基于Lua脚本的自定义控件，扩展随心所欲 。

 &emsp;&emsp;【新增】Cocos商店华丽变身，下载,安装,卸载一键搞定，信息和评论与你分享。

 &emsp;&emsp;【新增】支持修改动画播放速度，预览演示更方便 （**cocos2d-x 3.5支持解析**）。

 &emsp;&emsp;【新增】多分辨率设置，常用分辨率自由设定 。
 
 &emsp;&emsp;【新增】控件高级属性可设置自定义数据 （**Cocos 2d-x 3.5支持解析**）。

 &emsp;&emsp;【优化】编辑器导出的数据，支持Cocos 2d-x 3.4 Final加载。
 
 &emsp;&emsp;【优化】新建项目与示例工程合并，创建项目更便捷 。

 &emsp;&emsp;【优化】对新创建的项目进行Name属性校验， 保证变量名有效。

 &emsp;&emsp;【优化】支持在属性区修改图层尺寸。

 &emsp;&emsp;【优化】固定与拉伸布局属性， 支持直接输入数值进行设置。

 &emsp;&emsp;【优化】控件可设置禁用的图片。

 &emsp;&emsp;【优化】Button控件支持清空默认资源， 减小资源大小。

 &emsp;&emsp;【优化】csd文件外部编辑后的同步问题。
 
 &emsp;&emsp;【优化】项目打开速度大幅提升。

 &emsp;&emsp;【修正】Mac OS X 10.10.2自动升级闪退的bug。


注意：Cocos2d-x 3.4（含）以上的版本支持cocos 2.2（含）以上的版本发布的数据。

