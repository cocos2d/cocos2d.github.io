#Samples

###Sample Path

By default samples are installed to  **%userprofile%\Documents\Cocos\CocosStudio2\Samples\Addins** on the computer. If the default installation folder is changed, samples are in the same folder with Documents. For example, if document is installed to **D:\CocosDocuments**, samples are in **D:\CocosDocuments\Cocos\CocosStudio2\Samples\Addins**. On Mac, samples are installed to **/Library/Application Support/Cocos/CocosStudio2/Samples/Addins**. 

Note `%userprofile%` is an environment variable on Windows.It is installed in **C:\users\ABC** (ABC is user name). Paste and open the location in Window Resource Manager. For example, type **set userprofile** in Windows CMD command line, you will get the following information on the screen. 

![image](res_en/image001.png) 
 
(Username is covered.)

###Compiling Samples 

Sample is a solution of Visual Studio 2013. You can directly compile Addins.sln on Windows. Mono library and GTK# are essential. Please install them on your computer. 

On Mac, you need to copy samples to a directory which users have permission to compile. On Mac, you can choose Xamarin Studio to compile. MonoFramework is necessary. 

### Copying DLL ###

After successful compile, you will get **Addins.Sample.dll**. Copy it to Addins directory.

By default samples are installed to  **%userprofile%\Documents\Cocos\CocosStudio2\Addins** on the computer. If the default installation folder is changed, samples are in the same folder with Documents. For example, if document is installed to **D:\CocosDocuments**, samples are in **D:\CocosDocuments\Cocos\CocosStudio2\Addins**. On Mac, samples are installed to **/Library/Application Support/Cocos/CocosStudio2/Addins**.