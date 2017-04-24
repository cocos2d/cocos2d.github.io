# **控件扩展** #

1.文档要点

&emsp;&emsp;自定义控件相关部分的设计思路及技术细节。包括两种自定义控件的编写方法： 

&emsp;&emsp;A.使用Lua脚本编写供Cocos Studio使用的自定义控件；（基础篇内容）

&emsp;&emsp;B.使用C#+Lua来编写供Cocos Studio使用的自定义控件；（进阶篇内容）

2.文档的读者

&emsp;&emsp;需要更进一步了解Cocos Studio，对Cocos Studio有自定义控件需求的用户。

&emsp;&emsp;在此，我们假定读者有以下的知识技能：

&emsp;&emsp;熟悉Cocos Studio软件的使用。

&emsp;&emsp;对Lua脚本有一定的了解。

&emsp;&emsp;对Cocos 2d-x导出的Lua接口比较熟悉。

&emsp;&emsp;对C#语言编程有一定的了解。（非必需，不影响基础篇的阅读。进阶篇有此要求）

3.背景知识

&emsp;&emsp;本文档内容会涉及到下列相关的背景知识：

&emsp;&emsp;1)Lua语言。（详情请参见：[http://www.lua.org/](http://www.lua.org/)）

&emsp;&emsp;2)Cocos2d-Lua绑定。

&emsp;&emsp;3)Mono.Addins。（详情请参见：[http://monoaddins.codeplex.com/](http://monoaddins.codeplex.com/)）

4)T4 模板。

&emsp;&emsp;（详情请参见：[https://msdn.microsoft.com/en-us/library/bb126445.aspx](https://msdn.microsoft.com/en-us/library/bb126445.aspx)）

&emsp;&emsp;通过阅读本文档，你将了解到以上和Cocos Studio扩展相关的内容。

4.目录位置

&emsp;&emsp;为方便读者查阅，在此把文档中会用到的几个目录位置在此汇总一下。

&emsp;&emsp;Cocos Studio的插件目录

&emsp;&emsp;Windows操作系统上文档位置默认安装时，这个目录是%userprofile%\Documents\Cocos\CocosStudio2\Addins。文档位置自定义安装时，则在Cocos Studio的文档安装目录中的相应位置。例如：文档的安装目录为 D:\CocosDocuments，则该路径为D:\CocosDocuments\Cocos\CocosStudio2\Addins。在Mac上，这个目录为用户目录 ~/Library/Application Support/Cocos/CocosStudio2/Addins 。

&emsp;&emsp;示例工程位置

&emsp;&emsp;Windows上文档位置默认安装时，这个目录是%userprofile%\Documents\Cocos\CocosStudio2\Samples\Addins。文档位置自定义安装时，则在Cocos Studio的文档安装目录中的相应位置。例如，文档的安装目录为D:\CocosDocuments，则该路径为D:\CocosDocuments\Cocos\CocosStudio2\Samples\Addins。在Mac上，这个目录为系统目录/Library/Application Support/Cocos/CocosStudio2/Samples/Addins。
在不引起混淆的情况的，以下的目录位置都是以在Windows操作系统上Cocos Studio的默认安装为例。

5.自定义控件

&emsp;&emsp;目前Cocos Studio支持两种编写自定义控件的方法：

&emsp;&emsp;1) 最基本的自定义控件编写，只写Lua代码。这部分适用于对现在的编辑器支持的控件进行自定义渲染。

&emsp;&emsp;2) 更多的定制，需要同时写C#代码和Lua代码。适用于需要更进一步的定制控件的情况，可以通过添加属性来动态的调整自定义扩展的控件。

&emsp;&emsp;如果工程中含有用 Lua 实现的自定义控件，在加载场景时就需要使用这些Lua文件。为更方便的使用Lua扩展来完成场景的构建，此次我们为Cocos Studio项目发布添加了Lua文件类型，如下图所示：

![image](res/image001.png)

&emsp;&emsp;在发布带有Lua自定义控件的Cocos Studio工程时，选择该选项。否则，自定义控件不可展示出来。例如，工程发布为csb文件时，相应的自定义Lua控件会被跳过从而不可使用。（在Cocos Studio工程不包含Lua自定义控件时也可以选择该项来将工程导出为Lua文件。）
如果有其它的特殊的发布格式需求，请参考自定义数据导出格式导出一节。

&emsp;&emsp;下面针对这两种情况分析介绍：

&emsp;&emsp;1) 基础篇针对基本的自定义控件的编写，用户只需要编写Lua代码即可完成操作。

&emsp;&emsp;2) 进阶篇针对的是有更多控制需要的自定义控件的编写，用户需要编写部分辅助的C#代码来完成操作。
下面我们来看下如何使用Lua脚本编写供Cocos Studio使用的自定义控件。

6.基础篇

&emsp;&emsp;Cocos Studio启动时，会扫描Cocos Studio插件目录下LuaScript目录，其中的Lua文件（以后缀名.lua作为判断）会被认为是一个用Lua编写的自定义扩展控件。文件名作为控件名字显示在Cocos Studio控件区（参见下面的示例）。

&emsp;&emsp;对于只需要修改或者扩展Cocos Studio控件的渲染的情况或者给控件属性设置默认值，比如要定制一套控件皮肤或者设置默认的文本字体，可以只编写Lua代码来完成操作。在这种情况下，用户根据我们规定的格式来编写Lua代码，在Lua代码中指定所扩展的Cocos Studio预定义控件的类型（这也就是下面会提到的GetBaseType的作用。由于这里是对Cocos Studio 预定义类型的扩展，所以除Lua所扩展的部分之外，其它控件部分的初始化依然是由Cocos Studio来完成。这也是基础篇里对控件的扩展可以只写Lua代码而不需要C#代码来完成的原因。），完成所扩展的控件的自定义构建，放在Cocos Studio插件目录下 LuaScript目录内，Cocos Studio的启动时便会加载它。要完成这个操作只需要以下两步：

&emsp;&emsp;1） 编写自定义控件Lua脚本代码。

&emsp;&emsp;2） 将上一步编写好的Lua脚本代码放置在Cocos Studio插件目录下LuaScript目录内。 


&emsp;&emsp;下面来看一个示例：一个自定义的带文本的精灵控件。
请在示例工程位置处找到Addins.sln，可以在Visual Studio 2013中打开它，下面的示例是位于LuaScript目录里的 abc.lua文件。

7.示例

&emsp;&emsp;一个自定义带文本的精灵控件：即在一个精灵上显示一行文字。

&emsp;&emsp;abc.lua 代码内容如下（其中的注释部分包含了代码的解释和一些注意事项）。

&emsp;&emsp;片段如下：
--[[
一个简单的示例，新建一个精灵，并在精灵上放置了一个文本。
当调用CreateCustomNode时，会生成这个精灵并返回。
]]

    -- 新建一个table，包含CreateCustomNode和GetBaseType方法。
    local container = {}

    -- 新建根节点Node，目前这个方法的名字为固定的，必须为CreateCustomNode。
    -- 方法的最后一句必须是一个return语句，把新建的结点返回。
    function container.CreateCustomNode()
	    -- 新建一个精灵。
	    local rootNode = cc.Sprite:create('temp.png') -- 图片资源位于本文件所在目录
	
	    -- 新建一个 Label。
	    local label = cc.Label:create()
	    label:setString('abc Label From Lua') -- 设置 label 的文本内容。
	    label:setSystemFontSize(24) -- 设置 label 字体大小。
	    label:setPosition(140, 50) -- 设置 label 的位置。
	    label:setName('labelName')  -- 设置 label 的名字。
	    label:retain()              -- 保留，以回避垃圾回收。
	
	    rootNode:addChild(label)
	    return rootNode
    end

-- 返回该插件所扩展的基础类型。
function container.GetBaseType()
    return 'Sprite'
end

-- 返回这个包含CreateCustomNode和GetBaseType方法的表。
return container
-- 片段到这里结束

&emsp;&emsp;分析：
上面的代码是一个完整的Lua模块。加载它时会返回一个Lua Table，也就是代码片段最后的那个container表。
方法GetBaseType用以返回这个Lua代码所扩展的自定义控件的根节点基础类型，这里返回一个字符串 ‘Sprite’， 表示自定义扩展的控件是一个精灵。GetBaseType的具体可用的返回值见下一节中关于GetBaseType方法的描述。
方法CreateCustomNode 用以返回一个结点，这里就是一个扩展的精灵。
假设上面的Lua代码文件abc.lua已经放置Cocos Studio插件目录下LuaScript目录内，同时目录中有图片temp.png。
运行Cocos Studio，可以在控件面板 “自定义控件” 分组中看到这个自定义控件，控件的名字即Lua文件名“abc”：

![image](res/image002.png)

&emsp;&emsp;由于这个自定义控件是扩展的精灵，所以它在控件面板中显示的图标和精灵一样。

&emsp;&emsp;拖动abc图标到渲染可以看到如下内容（注：背景图片为temp.png图片。）：


![image](res/image003.png)

&emsp;&emsp;在渲染区选中它，可以看到它的类型仍然为Sprite。

![image](res/image004.png)

&emsp;&emsp;Lua代码编写中的常见问题和注意事项，请参考下节。

&emsp;&emsp;8.常见问题和注意事项

&emsp;&emsp;使用Lua代码编写自定义控件的一些常见问题及注意事项：

&emsp;&emsp;1)在自定义控件栏无法看到所扩展的控件：代码文件需要放置在Cocos Studio插件目录下LuaScript目录内，同时目录中有图片temp.png。写好的Lua代码文件必须放置在这个目录内，否则的话，Cocos Studio启动时将找不到该Lua文件从而无法加载它。（例如，为了运行上面的示例，可以把示例工程位置中的 LuaScript 目录拷贝到Cocos Studio插件目录下，启动Cocos Studio以观察效果。）。
如果要从另外的地方加载Lua文件，则需要修改C#代码，这部分请参考进阶篇。

&emsp;&emsp;2)在Lua代码中需要用到的资源也应该放到这个目录中去（例如上面示例中的temp.png图片也是放置在 LuaScript目录内），以相对路径加载它LuaScript目录是加载 Lua 代码文件时的工作目录。在发布的时候，LuaScript目录会被整个拷贝到Cocos Studio的工程发布目录。LuaScript 目录只会被拷贝一次，如果工程发布目录里已经存在同名的目录，将不再拷贝。

&emsp;&emsp;3)一个Lua代码文件是一个完整的自定义模块。Lua代码最后会返回一个Lua Table。

&emsp;&emsp;4)Lua Table必须有一个名为CreateCustomNode的方法，调用它时可以生成自定义控件并返回。

&emsp;&emsp;5)Lua Table必须有一个名为GetBaseType的方法，以返回该自定义控件的根节点，这是一个字符串。Cocos Studio所包含的控件及其名字如下所示（控件名一列的英文部分表示该控件在引擎中的名字，即在渲染区选中相应的控件时在属性区中的类型显示；括号中的中文名字表示其在控件面板中的中文名字。GetBaseType返回列表示在Lua代码中应该返回的字符串。）：

          控件名	           GetBaseType返回
       Sprite（精灵）	          Sprite
    ParticleSystemQuad（粒子）    Particle
     TMXTiledMap（地图）	      GameMap
       ComAudio（声音）	        SimpleAudio
        Node（节点）	            Node
       Button（按钮）	           Button
	  CheckBox（复选框）       	  CheckBox
	  ImageView（图片）	          ImageView
	  TextBMFont（FNT 字体）	  TextBMFont
	  LoadingBar（进度条）	     LoadingBar
	  Slider（滑动条）	          Slider
	  Text（文本）	                Text
	  TextField（输入框）      	 TextField
	  ScrollView（滚动容器）	     ScrollView
	  ListView（列表容器）	     ListView
	  PageView（翻页容器）	     PageView
	 Particle3D（3D 粒子）	     Particle3D
	   Sprite3D（模型）	          Sprite3D										
     UserCamera（摄像机）	     UserCamera

&emsp;&emsp;6) 如何在自定义控件的Lua脚本中调用第三方Lua代码库? 

&emsp;&emsp;目前Cocos Studio的Lua运行时只支持从Cocos 2d-x导出的接口，默认没有加载其它接口。如果需要，请在Lua 代码中自行加载。例如，如果需要用到Quick-cocos2d-x提供的Lua扩展接口，请在代码中自行加载相关的库。

&emsp;&emsp;7) 只写Lua代码的话，可以自定义渲染，对相应的控件定制渲染。如果需要更深入的控件（例如需要扩展属性区），需要写配对的C#代码。

&emsp;&emsp;8) 一个自定义控件应该只有一个Lua文件来定义。同时，一个Lua文件只应该生成一个自定义控件。目前Cocos Studio会加载所有的位于LuaScript目录中的Lua文件。每个Lua文件对应于控件区的一个控件图标，图标显示的名字就是文件名（不带后缀的部分）。

&emsp;&emsp;9) 对于打开一个已经保存的有Lua扩展控件的工程，如果在打开工程前修改过相应的Lua脚本文件的内容，则加载的为新的脚本内容。如果加载过程出错，则不显示相应的自定义控件。

&emsp;&emsp;最佳实践：在Cocos Studio中编辑所需控件，编辑结束后，把工程发布为Lua文件。基于相应的代码片段进行修改，可以减少手动编写代码的工作量。

&emsp;&emsp;基础篇到此结束，对于只使用Lua代码目前只能完成一个简单的自定义控件（即扩展Cocos Studio预定义控件），如果需要更进一步的扩展，请参见以下几节。

&emsp;&emsp;9.进阶篇

&emsp;&emsp;对于需要更多定制的情况，比如要添加属性的修改，就需要用到Cocos Studio所提供的扩展功能，编写相应的C#代码来完成。这里先简单的介绍下这个过程（更详细的细节请参见下面各节），Cocos Studio是基于Mono.Addins来构建的插件系统，在需要对扩展更进一步的定制时，我们就需要使用这个插件系统（配置程序集）。为了扩展属性，需要对所扩展类型时行 C#扩展（视图模型的扩展，即从ViewModel派生一个子类，并添加属性。由于ViewModel的扩展，从而DataModel也需要相应的扩展。）。扩展的C#属性需要和Lua脚本进行数据交互（通过运行时从Lua代码读写数据，所以要修改相应的Lua脚本，并在C#里调用Cocos Studio提供的接口来与Lua脚本时行数据交互）。扩展的控件需要导出到Lua文件（通过添加Lua代码生成模板），相应的Lua代码生成模板虽然被添加到Cocos Studio的插件系统从而在工程发布可被应用（添加Lua代码生成模板的导出）。在此过程中的几个概念的关系如下图所示：

![image](res/image005.png)

&emsp;&emsp;（说明：Lua Objects为自定义控件的Lua脚本代码。Lua Codes从DataModel生成的Lua文件代码。）
一般来说，完成这个操作需要以下几步：

&emsp;&emsp;1） 编写自定义控件Lua脚本代码。

&emsp;&emsp;2） 将上一步编写好的Lua脚本代码放置在Cocos Studio的插件目录。 

&emsp;&emsp;3） 配置插件AddinConfig.cs。 

&emsp;&emsp;4） 添加ViewModel和DataModels。 

&emsp;&emsp;5） 添加Lua代码生成模板。

&emsp;&emsp;下面来看一个示例：一个自定义的带文本的精灵控件，该自定义控件在渲染区选中时，可以通过属性区修改文本的内容和字体大小。
这里我们已经提供了一个配置好的Visual Studio 2013项目工程，请在示例工程位置处找到Addins.sln，可以在Visual Studio 2013中打开它，下面的内容都是基于该示例工程（示例工程的其它介绍请参见示例工程一节）。

&emsp;&emsp;自定义控件部分主要位于Lua目录下的LuaScript子目录内。

&emsp;&emsp;10.示例

&emsp;&emsp;因为要控件精灵上文本的内容和字体大小，先在Lua代码中添加处理文本内容和字体大小的方法。如下所示：

&emsp;&emsp;Lua代码

&emsp;&emsp;LuaScript目录中一个可用的sprite0.lua代码如下所示（其中的注释部分包含了代码的解释和一些注意事项）。

&emsp;&emsp;片段如下：
--[[
一个简单的示例，新建一个精灵，并在精灵上放置了一个文本。
当调用CreateCustomNode时，会生成这个精灵并返回。
]]
		
	-- 新建一个精灵。
	-- 新建精灵时传入了一个图片路径作为参数。
	local function CreateSprite()
		return cc.Sprite:create('temp.png') --图片资源请放在本文件所在目录 (LuaScript 目录)
	end
	
	-- 新建一个Label，用以显示文字
	local function CreateLabel()
		local label = cc.Label:create()
		label:setString('sprite0 Label from Lua')
		label:setSystemFontSize(24)
		label:setPosition(140, 50)
		label:setName('labelName') --设置 label 的名字，这个 label 的名字在下面会用到。
		label:retain()
		return label
	end

	-- make sure ccslog is not empty
	local ccslog = ccslog
	if not ccslog then
	    ccslog = function(...) end
	end

	-- 新建一个table，避免全局变量污染。用以包括脚本中所定义的所有的全局方法。
	local container = {}
	-- 新建根节点 Node，目前这个方法的名字为固定的，必须为CreateCustomNode。
	-- 方法的最后一句必须是一个return语句，把新建的结点返回。
	function container.CreateCustomNode()
		local rootNode = CreateSprite()
		rootNode:addChild(CreateLabel())
		return rootNode
	end

	-- 返回该插件所扩展的基础类型。
	function container.GetBaseType()
	    return 'Sprite'
	end

	-- 取得精灵上文本的内容。
	-- root 参数即为调用CreateCustomNode时返回的根结点。
	function container.GetLabelText(root)
	    -- 在父控件中查找名字为 'labelName' 的子控件。
	    local child = root:getChildByName('labelName')
	    return child:getString()
	end

	-- 设置精灵上文本的内容。
	-- root 参数即为调用CreateCustomNode时返回的根结点。
	-- value 所赋的字符串的值。
	function container.SetLabelText(root, value)
	    -- 在父控件中查找名字为 'labelName' 的子控件。
	    local child = root:getChildByName('labelName')
	    child:setString(value)
	end

	-- 取得精灵上文本的字体大小。
	function container.GetLabelFont(root)
	    local child = root:getChildByName('labelName')
	    return child:getSystemFontSize()
	end
	
	-- 设置精灵上文本的字体大小。
	function container.SetLabelFont(root, value)
	    local child = root:getChildByName('labelName')
	    child:setSystemFontSize(value)
	end
	
	-- 返回这个包含所有全局方法的表
	return container

-- 片段到这里结束

&emsp;&emsp;分析：
新建精灵部分在上一个示例中已经描述。这里看下它新添加的两对Set/Get方法：
GetLabelText/SetLabelText（获取/设置精灵上文本的内容），GetLabelFont/SetLabelFont（获取/设置精灵上文本字体的大小）。注意这里的方法名，在下面的C#代码中会用到。
这里可以看到，在方法内部，是通过Cocos 2d-x导出的Lua接口完成相应的操作。 

&emsp;&emsp;在 Cocos Studio 3.10 版本中，新添加了 `ccslog` 用于向 Cocos Studio 的输出区输出信息。`ccslog` 的使用方法同 lua 中的 `print` ，在 3.10 版本的示例工程 sprite0.lua 代码中可以看到它的使用。

&emsp;&emsp;为了在Cocos Studio中可以生成它，使它可以展示在渲染区，为它添加ViewModel。如下所示：

&emsp;&emsp;视图模型

&emsp;&emsp;LuaCustomObject视图模型的代码片段如下：

    [DisplayName("Sprite Extend")]
    [ModelExtension(2)]
    [ControlGroup(ViewObjectCategory.CustomGroupKey, 2)]
    [EngineClassName("LuaCustom")]
    public class LuaCustomObject : SpriteObject
    {
        public LuaCustomObject()
            : base(GetScriptFileData())
        {
            if (System.IO.File.Exists(luaFile))
                luaValueConverter = new LuaValueConverter(luaFile, this);
            else
                throw new System.IO.FileNotFoundException(luaFile + " not found!");
        }

        private LuaValueConverter luaValueConverter;

        private static string luaFile = GetLuaFilePath();

        private static ScriptFileData GetScriptFileData()
        {
            if (System.IO.File.Exists(luaFile))
            {
                CSCocosHelp.AddSearchPath(Path.GetDirectoryName(luaFile));
                return new ScriptFileData(luaFile, ScriptType.Lua);
            }

            LogConfig.Output.Info(luaFile + " not exist!");
            return null;
        }

        /// <summary>
        /// get lua file path according to current running assembly.
        /// lua script file should in a folder "LuaScript" which is in current running assembly parent folder.
        /// e.g. current running assembly is in "Addins", lua file path is "Addins/LuaScript/sprite0.lua"
        ///
        ///      Addins
        ///      ├─Addins.Sample.dll (current running assembly)
        ///      └─LuaScript
        ///          ├─ sprite0.lua
        ///
        /// you can modify "LuaScript" or lua file name "sprite0.lua" to other name as you like.
        /// NOTICE: only Addins/LuaScript folder will be copied to target folder. if lua script is in other
        /// folder, user should write extra codes to copy it to target folder, e.g. use CustomSerializer to do the job.
        /// </summary>
        /// <returns>lua file path</returns>
        private static string GetLuaFilePath()
        {
            string assemblyFolder = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string luaScriptFolder = Path.Combine(assemblyFolder, "LuaScript");

            // make sure luaFile exists, if not, please copy it from source folder to target.
            // you can find the lua script file in "../LuaScript/" folder as "."(current folder) is the one
            // who contains current file LuaCustomObject.cs.(here "." is "Addins.Sample/Lua/ViewModel")
            //  
            //  ├─LuaScript
            //  │   ├─ sprite0.lua
            //  │
            //  └─ViewModel
            //      ├─ LuaCustomObject.cs (current file)
            //
            string luaFilePath = Path.Combine(luaScriptFolder, "sprite0.lua");

            return luaFilePath;
        }

        protected override string GetNamePrefix()
        {
            return "LuaSprite_";
        }

        [UndoProperty]
        [DefaultValue("abc")]
        [DisplayName("Label Text")]
        [Category("Group_Feature")]
        [Browsable(true)]
        [PropertyOrder(0)]
        public string LabelText
        {
            get
            {
                return luaValueConverter.GetStringValue("GetLabelText");
            }
            set
            {
                luaValueConverter.SetStringValue("SetLabelText", value);
                this.RaisePropertyChanged(() => this.LabelText);
            }
        }

        [UndoProperty]
        [DisplayName("Label Font")]
        [Category("Group_Feature")]
        [Description("Int value description")]
        [PropertyOrder(1)]
        [Browsable(true)]
        public int LabelFont
        {
            get
            {
                return luaValueConverter.GetIntValue("GetLabelFont");
            }
            set
            {
                luaValueConverter.SetIntValue("SetLabelFont", value);
                this.RaisePropertyChanged(() => this.LabelFont);
            }
        }

        #region methods for clone

        // set value to the object, used in clone.
        protected override void SetValue(object cObject)
        {
            base.SetValue(cObject);

            LuaCustomObject nObject = cObject as LuaCustomObject;
            if (nObject == null)
                return;
            nObject.LabelText = this.LabelText;
            nObject.LabelFont = this.LabelFont;
        }

        #endregion methods for clone
    }

&emsp;&emsp;分析：
由于该自定义控件扩展的是精灵，所以，它继承自SpriteObject。
DisplayName特性：在Cocos Studio控件栏里显示的自定义控件的名字，这里显示为"Sprite Extend"。
ModelExtension特性：导出这个自定义的ViewModel类型，其参数为类型导出顺序，由于添加了这个特性，这个控件就在 Cocos Studio的自定义控件组中显示出来，如下所示：

![image](res/image006.png)

&emsp;&emsp;（这个自定义控件的名字即为DisplayName所指定的"Sprite Extend"。）

&emsp;&emsp;如果所扩展的为3D控件，这里使用ModelExtension里需要多一个表示3D的参数，如下所示（详见示例工程中的 3D扩展）：

    [ModelExtension(2, EnumModelType.ThreeDimensional)]

&emsp;&emsp;Category特性：
分组，以及控件在分组中的顺序。这里因为给它指定的是名字是 "Control_Custom"， 所示该控件在控件区显示在“自定义控件”分组中，（注意：这里用字段"Control_Custom" 而实际显示为“自定义控件”是因为Cocos Studio里有特殊的处理，如果使用其它的字段，则会显示会字段的名字。）

&emsp;&emsp;EngineClassName：控件名，其名字会显示在属性面板的类型处。Cocos Studio的控件此处显示的是是它在 Cocos 2d-x中类型。自定义控件没有对应的引擎类型，所以此处以自己能清晰的分辨所选择类型为准。

![image](res/image007.png)

&emsp;&emsp;由于其中添加了LabelText和LabelFont扩展属性，所以它们在属性区展示如下：

![image](res/image008.png)

&emsp;&emsp;（注意属性的名字和ViewModel属性上的DisplayName的对应关系。）
属性区扩展及属性区编辑控件的扩展，请参考属性区扩展一节。

&emsp;&emsp;ViewModel的其它细节请参见DataModel和ViewModel一节。

&emsp;&emsp;在Cocos Studio中，每个ViewModel对应一个数据模型DataModel用来作数据的持久化，例如保存工程时会将 DataModel进行序列化保存到Cocos Studio的工程文件.csd文件中。所以，为这个ViewModel建立一个对应的DataModel。

&emsp;&emsp;数据模型

&emsp;&emsp;LuaCustomObjectData数据模型的代码片段如下：

	[DataModelExtension(typeof(LuaCustomObject))]
	public class LuaCustomObjectData : SpriteObjectData
	{
	    [ItemProperty]
	    [JsonProperty]
	    public string LabelText { get; set; }
	
	    [ItemProperty]
	    [JsonProperty]
	    public int LabelFont { get; set; }
	}

&emsp;&emsp;分析：

&emsp;&emsp;由于该自定义控件扩展的是精灵，所以，它继承自SpriteObjectData。
添加DataModelExtension 特性，其值为相对应的ViewModel的类型LuaCustomObject。
DataModel中属性为需要进行保存的所对应的ViewModel中的字段。
注意，DataModel中的属性名字需要和ViewModel相应的属性名字保持一致，比如上面的LabelText，就是对应于ViewModel中的LabelText。
DataModel的其它细节请参见DataModel和ViewModel一节。

&emsp;&emsp;接着，实现ViewModel中所扩展的属性和Lua代码的交互。相关的C#代码如下所示：

&emsp;&emsp;数据交互
&emsp;&emsp;与上面的Lua代码相对应的C#代码片段如下所示：

    [UndoPropertyAttribute]
    [DefaultValue("abc")]
    [DisplayName("Label Text")]
    [Category("Group_Feature")]
    [Browsable(true)]
    [PropertyOrder(0)]
    public string LabelText
    {
        get
        {
            return luaValueConverter.GetStringValue("GetLabelText");
        }
        set
        {
            luaValueConverter.SetStringValue("SetLabelText", value);
            this.RaisePropertyChanged(() => this.LabelText);
        }
    }

    [UndoPropertyAttribute]
    [DisplayName("Label Font")]
    [Category("Group_Feature")]
    [Description("Int value description")]
    [PropertyOrder(1)]
    [Browsable(true)]
    public int LabelFont
    {
        get
        {
            return luaValueConverter.GetIntValue("GetLabelFont");
        }
        set
        {
            luaValueConverter.SetIntValue("SetLabelFont", value);
            this.RaisePropertyChanged(() => this.LabelFont);
        }
    }

&emsp;&emsp;分析：

&emsp;&emsp;其中luaValueConverter.GetStringValue即为从Lua代码中取得一个字符串值，这里由于传入的参数为"GetLabelFont" ，从上面的Lua代码示例中取得精灵上的文本内容。注意这里的传入方法名和Lua代码的对应关系。其它几个数据交互调用与之类似。
属性的set最后调用this.RaisePropertyChanged是通知这里的属性值发生了改变，实现属性区界面刷新。
数据交互部分的其它细节请参见数据交互一节。

&emsp;&emsp;接着，为了让这个扩展能被Cocos Studio加载起来。将工程所编译生成的Addins.Sample.dll拷贝到Cocos Studio插件目录里。由于Cocos Studio所使用的插件方案的约定，需要给生成的程序集添加以特性：

&emsp;&emsp;添加AddinConfig.cs

&emsp;&emsp;给工程添加AddinConfig.cs文件，内容如下：

    // "3.10" is version of the this Addin. Addin should match its dependency with the same version.
    [assembly: Addin("Addins.Sample", "3.10", Namespace = Option.AddinNamespace)]
    
    // "3.10" is the version of Addin dependency.
    [assembly: AddinDependency("CocoStudio.Core", "3.10")]
    [assembly: AddinDependency("CocoStudio.Projects", "3.10")]
    [assembly: AddinDependency("CocoStudio.Model", "3.10")]
    [assembly: AddinDependency("CocoStudio.Model.Lua", "3.10")]
    [assembly: AddinDependency("CocoStudio.Model3D", "3.10")]
    [assembly: AddinDependency("CocoStudio.Model3D.Lua", "3.10")]
    [assembly: AddinDependency("Addins.LuaExtend", "3.10")]


&emsp;&emsp;分析：

&emsp;&emsp;设置插件导出以及插件的依赖。
具体的细节请参见插件技术方案一节。

&emsp;&emsp;自定义控件是由Lua生成，我们为了将自定义的扩展属性导出到Lua，需要把DataModel转化为Lua代码，如下所示。


&emsp;&emsp;Lua代码生成模板

&emsp;&emsp;在Cocos Studio工程中，使用T4模板技术来从DataModel生成Lua代码。

&emsp;&emsp;T4模板的代码如下所示：

	<#@ template debug="false" inherits="LuaSpriteObject" language="C#" linePragmas="false"#>
	<#@ assembly name="System.Core" #>
	<#@ import namespace="System.Linq" #>
	<#@ import namespace="System.Text" #>
	<#@ import namespace="System.Collections.Generic" #>
	<#@ import namespace="CocoStudio.Model.DataModel" #>
	<#@ import namespace="Addins.Sample.Lua.DataModel"#>
	<#@ import namespace="CocoStudio.Model.Lua.Templates" #>
	<#@ import namespace="Mono.Addins" #>
	
	<#+
	public override bool CanSerialize(BaseObjectData objectData)
	{
	    bool isOK = typeof(LuaCustomObjectData) == objectData.GetType();
	    return isOK;
	}
	
	public override void CreateObject(BaseObjectData objectData)
	{
		LuaCustomObjectData data = objectData as LuaCustomObjectData;
	#>
	local luaScript = require("<#= CocoStudio.Basic.Option.luaScriptFolderName #>/<#= System.IO.Path.GetFileName(data.ScriptData.RelativeScriptFile) #>")
	<#= GetNameDeclaration(objectData.Name) #> = luaScript.CreateCustomNode()
	<#+
	}
	
	public override void InitializeObject(BaseObjectData objectData)
	{
		LuaCustomObjectData data = objectData as LuaCustomObjectData;
		base.InitializeObject(data);
	#>
	luaScript.SetLabelText(<#= data.Name #>, "<#= data.LabelText #>")
	luaScript.SetLabelFont(<#= data.Name #>, <#=data.LabelFont#>)
	luaScript.GetLabelVisible(<#= data.Name #>, <#=data.LabelVisible.ToString().ToLower()#>)
	luaScript.SetMixedColor(<#= data.Name #>, <#=data.MixedColor.ToLuaString()#>)
	<#+
	}
	#>

&emsp;&emsp;分析：

&emsp;&emsp;inherits="LuaSpriteObject"，设置T4模板生成类继承自LuaSpriteObject，也就是精灵的Lua T4模板生成类。

&emsp;&emsp;CanSerialize：确定该T4模板生成类所操作的DataModel为LuaCustomObjectData。

&emsp;&emsp;CreateObject：生成该自定义控件的Lua代码。

&emsp;&emsp;InitializeObject：生成该自定义控件的设置属性代码。

&emsp;&emsp;AddChild : 由于该自定义控件扩展的是精灵，添加子控件不需要特殊操作，所以不用重写AddChild方法。

&emsp;&emsp;通过上面的继承关系我们可以看出，每一个DataModel会对应到一个Lua代码生成模板。在对某个控件进行扩展时，Lua代码生成模板类需要继承自控件的代码生成模板类。控件的代码生成模板类请参见相关类一览。

&emsp;&emsp;T4模板的其它细节请参见T4模板一节。

&emsp;&emsp;Lua代码生成的T4模板这里使用的是Monodevelop的插件机制，所以需要为其添加一个Xml导出文件。Cocos Studio项目在导出Lua文件时会由其插件机制扫描 "/CocoStudio/Model/Lua/Templates" 扩展点下的所有LuaBaseObject 类（这个类是所有的代码生成模板类的基类。），所以这里添加代码生成模板的导出类。在进行 Lua 代码生成的时候，Cocos Studio会以每个要生成的DataModel类为参数来调用CanSerialize来查找该DataModel所对应的代码模板生成类。

&emsp;&emsp;Lua代码生成模板导出

&emsp;&emsp;T4模板的关联文件为ExtensionModel目录中的LuaObjects.addin.xml。其在 VS2013 中的属性：“生成操作”为“嵌入的资源”，“复制到输出目录”为“不复制”。 

&emsp;&emsp;这个文件的作用是在"/CocoStudio/Model/Lua/Templates"扩展点添加由T4模板生成的类的全路径，即："Addins.Sample.Lua.Lua.LuaCustomObject"，其内容如下所示：

	<?xml version="1.0" encoding="utf-8" ?>
	<ExtensionModel>
	<Extension path = "/CocoStudio/Model/Lua/Templates">
		<Class class = "Addins.Sample.Lua.Lua.LuaCustomObject"/>
	</Extension>
	</ExtensionModel>

&emsp;&emsp;T4模板的其它细节请参见T4模板一节。

&emsp;&emsp;C#代码编写中的常见问题和注意事项，请参考下节。

&emsp;&emsp;11.常见问题和注意事项

&emsp;&emsp;利用C#写扩展的一些常见问题和注意事项。

&emsp;&emsp;插件技术方案

&emsp;&emsp;Cocos Studio是基于Mono.Addins来构建的插件系统，具体到代码上的表现是：在C#工程中添加 AddinConfig.cs文件，给程序集设置Addin特性，及使用AddinDependency给程序集设置相应的依赖。生成的DLL需要放置在%userprofile%\Documents\Cocos\CocosStudio2\Addins目录下（路径以在Windows操作系统上的位置为示例）。
Mono.Addins的具体细节请参考：[http://monoaddins.codeplex.com/](http://monoaddins.codeplex.com/)

&emsp;&emsp;DataModel和ViewModel 

&emsp;&emsp;在Cocos Studio中，渲染区所展示的每一个控件都是一个ViewModel，每一个ViewModel都对应一个 DataModel来管理其数据。

&emsp;&emsp;根据要扩展的控件的不同，ViewModel需要继承自NodeObject或者NodeObject的某个子类。DataModel需要相应的继承自和ViewModel的基类所配对的NodeObjectData或者NodeObjectData某个子类。
DataModel和ViewModel的关联通过DataModelExtension特性来实现。

&emsp;&emsp;DataModel和ViewModel中对应的属性名应该保持一致。

&emsp;&emsp;序列化方案

&emsp;&emsp;DataModel中的需要序列化的属性需要添加[ItemProperty]和[JsonProperty]特性，分别对应于xml和json 的序列化。

&emsp;&emsp;数据模型的xml序列化采用的是MonoDevelop的解决方案，具体的细节请参考[http://www.monodevelop.com/developers/articles/using-the-data-serializer/](http://www.monodevelop.com/developers/articles/using-the-data-serializer/)

&emsp;&emsp;数据模型的json序列化采用的是Newtonsoft.Json库，具体的细节请参考
[http://www.newtonsoft.com/json](http://www.newtonsoft.com/json)

&emsp;&emsp;数据交互

&emsp;&emsp;C#和Lua的数据交互，提供了LuaValueConverter用以在C#层和Lua层来交换数据。LuaValueConverter所提供的方法如下所示：
方法签名说明
	
	bool GetBoolValue(string funcName)	                            从指定的函数名 funcName 返回一个 bool 值。
	void SetBoolValue(string funcName, bool val)	                使用指定的函数名 funcName 设置一个 bool 值。
	int GetIntValue(string funcName)	                            从指定的函数名 funcName 返回一个整数。
	void SetIntValue(string funcName, int val)	                    使用指定的函数名 funcName 设置一个整数。
	string GetStringValue(string funcName)	                        从指定的函数名 funcName 返回一个字符串。
	void SetStringValue(string funcName, string val)	            使用指定的函数名 funcName 设置一个字符串。
	double GetDoubleValue(string funcName)	                        从指定的函数名 funcName 返回一个双精度浮点值。
	void SetDoubleValue(string funcName, double val)	            使用指定的函数名 funcName 设置一个双精度浮点值。
	float GetFloatValue(string funcName)	                        从指定的函数名 funcName 返回一个浮点值。
	void SetFloatValue(string funcName, float val)	                使用指定的函数名 funcName 设置一个浮点值。
	System.Drawing.Color GetColorValue(string funcName)	            从指定的函数名 funcName 返回一个颜色值。
	void SetColorValue(string funcName, System.Drawing.Color val)	使用指定的函数名 funcName 设置一个颜色值。
	void SetResourceDataValue(string funcName, ResourceData val)	使用指定的函数名 funcName 设置一个资源值。
&emsp;&emsp;注：

&emsp;&emsp;上面的函数签名为C#中的方法名。其中的类型均为C#语言定义中的类型。

&emsp;&emsp;调用时funcName应该传为方法在Lua中的方法名。

&emsp;&emsp;资源类型只有Set没有Get，对于需要取得资源的地方，可以调用GetStringValue方法返回资源的路径，在C#层进行后续处理。
C#和Lua之间数据的交互，目前只支持这几种预定义的类型，如果有需要其它的复合类型，可通过方法组合和类型转换来实现。在后续的开发中我们会逐渐丰富所支持的类型。

&emsp;&emsp;T4模板

&emsp;&emsp;为数据模型DataModel生成T4模板，以便在导出Cocos Studio工程时把DataModel内容导出到Lua文件。

&emsp;&emsp;T4模板具体实现时的规则：

&emsp;&emsp;每个要导出到Lua代码的控件都会对应一个T4模板。

&emsp;&emsp;T4 模板生成的C#文件需要继承自相应的扩展的控件类，同时需要重载以下的几个方法：

&emsp;&emsp;CanSerialier，用以判断将要处理的类型是自己的DataModel。

&emsp;&emsp;CreateObject，根据传入的DataModel，加载相应的Lua扩展文件。生成Lua代码，用以新建一个所扩展的控件。

&emsp;&emsp;InitializeObject，相应的扩展属性导出到Lua代码。

&emsp;&emsp;AddChild，如果扩展控件添加子控件使用的不是来自NodeObject的AddChild，则需要在此重写这个方法。例如，容器控件PageView添加子控件时使用addPage 。

&emsp;&emsp;T4模板请参考：[https://msdn.microsoft.com/en-us/library/bb126445.aspx ](https://msdn.microsoft.com/en-us/library/bb126445.aspx )

&emsp;&emsp;添加T4模板关联，以便Cocos Studio工程导出到Lua时找到该模板。(示例工程ExtensionModel目录中的 LuaObjects.addin.xml就是这个作用。)

&emsp;&emsp;相关类一览

&emsp;&emsp;Cocos Studio中的ViewModel，DataModel，及T4模板生成的相关类名一览：

&emsp;&emsp;ViewModel类DataModel类T4模板类
	
	SpriteObject	         SpriteObjectData	       LuaSpriteObject
	ParticleObject	         ParticleObjectData	       LuaParticleObject
	GameMapObject	         GameMapObjectData	       LuaGameMapObject
	SimpleAudioObject	     SimpleAudioObjectData	   LuaSimpleAudioObject
	NodeObject	             NodeObjectData	           LuaNodeObject
	ButtonObject	         ButtonObjectData	       LuaButtonObject
	CheckBoxObject	         CheckBoxObjectData	       LuaCheckBoxObject
	ImageViewObject	         ImageViewObjectData	   LuaImageViewObject
	TextBMFontObject	     TextBMFontObjectData	   LuaTextBMFontObject
	LoadingBarObject	     LoadingBarObjecDatat	   LuaLoadingBarObject
	SliderObject	         SliderObjectData	       LuaSliderObject
	TextObject	             TextObjectData	           LuaTextObject
	TextFieldObject	         TextFieldObjectData	   LuaTextFieldObject
	PanelObject	             PanelObjectData	       LuaPanelObject
	ScrollViewObject	     ScrollViewObjectData	   LuaScrollViewObject
	ListViewObject	         ListViewObjectData	       LuaListViewObject
	PageViewObject	         PageViewObjectData	       LuaPageViewObject
	Node3DObject	         Node3DObjectData	       LuaNode3DObject
	Particle3DObject 	     Particle3DObjectData	   LuaParticle3DObject
	Sprite3DObject	         Sprite3DObjectData	       LuaSprite3DObject
	UserCameraObject	     UserCameraObjectData	   LuaUserCameraObject


&emsp;&emsp;其它

&emsp;&emsp;1) Lua代码或者资源在其它地方（即：不是上面提到的LuaScript目录 ），Cocos Studio将不再负相应的拷贝，用户需要自行处理代码及资源路径的引用问题。

&emsp;&emsp;2) 在这里用到的Lua文件如果也是放置在Cocos Studio插件目录的LuaScript目录里的话。其本身的Lua文件也会以基础篇里所定义的基本的自定义控件形式出现。此时其只表现为基本的自定义控件而不再包括属性扩展。如下图示：

![image](res/image009.png)


&emsp;&emsp;Sprite Extend控件是进阶篇中提到的带属性区扩展的自定义控件，而sprite0则是基础篇中的基本的自定义控件（其表现出来的形式只和abc这个基本的自定义控件一样。）。虽然它们所对应的是同一个Lua文件。

&emsp;&emsp;3)如果自己要新建工程的话，请参照示例。目标框架为.Net Framework4.5，输出类型为类库。

&emsp;&emsp;12.示例工程

&emsp;&emsp;本节将介绍一些示例工程Addins.Sample的其它细节。

&emsp;&emsp;1) 示例工程的位置：Windows上文档位置默认安装时，这个目录会是%userprofile%\Documents\Cocos\CocosStudio2\Samples\Addins。文档位置非默认安装时，则在Cocos Studio的文档安装目录中的相应位置。例如，如果文档的安装目录为D:\CocosDocuments，则该路径为D:\CocosDocuments\Cocos\CocosStudio2\Samples\Addins。在Mac 上，这个目录为系统目录/Library/Application Support/Cocos/CocosStudio2/Samples/Addins。

&emsp;&emsp;2) 示例工程的编译：示例工程是一个Visual Studio 2013的解决方案。在 Windows上直接打开Addins.sln 即可编译。如果没有安装Mono库及GTK#请自行安装。在Mac上由于权限的关系，请把示例工程拷贝到一个用户有权限读写的目录时行编译。在Mac上可以使用Xamarin Studio进行编译。请自行安装MonoFramework。

&emsp;&emsp;3) 编译后DLL的拷贝。编译成功后，会得到一个Addins.Sample.dll，请将其拷贝到Addins目录里。（Windows 上文档位置默认安装时，这个目录会是%userprofile%\Documents\Cocos\CocosStudio2\Addins。文档位置非默认安装时，则在Cocos Studio的文档安装目录中的相应位置。以在Windows上为例，如果文档的安装目录为D:\CocosDocuments，则该路径为D:\CocosDocuments\Cocos\CocosStudio2\Addins。在Mac上，这个目录为用户目录~/Library/Application Support/Cocos/CocosStudio2/Addins）。

&emsp;&emsp;4) 示例工程后续如有更新，请参考新版本示例工程。示例工程的修改记录请参见示例工程Lua目录内的 修改记录.txt 文件。

&emsp;&emsp;13.其它

&emsp;&emsp;1) 文档所描述的内容适用于Cocos Studio 2.2.5及其以上的版本 所附带的示例工程。

&emsp;&emsp;2)Cocos Studio工程中控件的名字应为合法的Lua变量，否则发布到Lua文件后程序Lua程序不可以正常执行。这个可以Cocos Studio的工程配置文件中开启命名规则检查（注：工程配置文件即是Cocos Studio工程文件同目录的以.cfg为后缀的文件，将其中的字段IsNameStandardized置为“True”即可）。另外，不合法的变量名在发布Lua文件时会在Cocos Studio输出区打印相应的提示。

&emsp;&emsp;3)这是编辑器第一阶段的开放，上面只是针对控件扩展部分，给出了几个必要的类。在编辑器后续的开发过程中，我们会逐步开放编辑器扩展相关的接口和类。并给出相关的文档说明，敬请期待。

&emsp;&emsp;在后续的开发过程中文档的内容会根据反馈持续更新。如有更新，请以新的版本为准。
如果您对于Cocos Studio扩展有任何的意见或者是建议，请在论坛或者是开发者群里反馈给我们。感谢您对Cocos Studio的关注和支持，我们将回报您以更好用的产品。
