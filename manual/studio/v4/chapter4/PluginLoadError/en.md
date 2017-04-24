# How to: Run Previous Versions of Addins in cocos #

If plugin interfaces change bewteen versions, previous versions of addins cannot run in higher versions of cocos. To solve this problem, follow the steps below: 

Open Samples of latest versions, which is in **%userprofile%\Documents\Cocos\CocosStudio2\Samples\Addins** (taking the default installation directory on Windows as an example).

Compare Samples and the customized addins to find differences and make modifications. 

- If there are changes or updates to an addin, that is version numbers of the Addin and AddinDependency are updated, you need to replace and compile the custom addins' reference library (DLL) with new Samples' reference library.  

- Use the latest version of Lua export plugin if you need to export projects to Lua. 


