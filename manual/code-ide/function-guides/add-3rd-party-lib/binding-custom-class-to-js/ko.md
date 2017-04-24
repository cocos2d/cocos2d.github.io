자바스크립트 런타임에 C++ 커스텀 클래스를 바인딩하는 법
===
---

이 문서는 자바스크립트 런타임에 커스텀 CPP 클래스를 바인딩하는 법을 보여줍니다. ** 자바스크립트 바인딩의 세부 사항에 대한 내용이 아닙니다**.

맥 런타임을 선택해서 예제를 진행하지만 모든 플랫폼에서 유사하게 진행됩니다.

### 런타임을 위한 소스 코드 만들기
Cocos Code IDE 내부에 CocosJSGame이라는 Cocos2d-JS 프로젝트를 만듭니다.

* 런타임의 소스코드는 \<프로젝트의 위치\>/frameworks/runtime-src에 위치하며, 이미 해당 디렉토리가 존재하면 다음 내용은 건너뛰셔도 좋습니다.
* 그렇지 않으면, 런타임을 위한 소스 코드를 다음의 절차에 따라 생성하셔야 합니다:
  * CocosJSGame를 우클릭
  * Cocos Tools->Add Native Codes Support...
  * **Generate**의 **Create Native Source Wizard** 클릭
  * 그러면 소스 코드가 생성될 것입니다

### 프로젝트에 CustomClass 클래스 추가하기
![](./res/custom_class_directory.png)

```

// CustomClass.h

#ifndef __CUSTOM__CLASS

#define __CUSTOM__CLASS

#include "cocos2d.h"

namespace cocos2d {
class CustomClass : public cocos2d::Ref
{
public:
    
    CustomClass();

    ~CustomClass();

    bool init();
    
    std::string helloMsg();

    CREATE_FUNC(CustomClass);
};
} //namespace cocos2d

#endif // __CUSTOM__CLASS

```

```
// CustomClass.cpp
#include "CustomClass.h"

USING_NS_CC;

CustomClass::CustomClass(){
    
}

CustomClass::~CustomClass(){
    
}

bool CustomClass::init(){
    return true;
}

std::string CustomClass::helloMsg() {
    return "Hello from CustomClass::sayHello";
}

```

**frameworks/runtime-src/proj.ios_mac/CocosJSGame.xcodeproj**를 열고, cocos2d_libs.xcodeproj에 CustomClass.h/CustomClass.cpp를 추가합니다. 꼭 아래처럼 **cocos2dx Mac**를 체크합니다:
![](./res/select_files_in_targets.png)

그러면 다음과 같은 새로운 프로젝트 구조를 볼 수 있습니다:

![](./res/customClassXCode.png)

소스 파일 경로를 검색 경로에 추가합니다:

![](./res/searchPath.png)

바인딩 파일 경로를 검색 경로에 추가합니다:

![](./res/binding_search_path.png)

### cocos2dx_custom.ini 추가하기

`tools/tojs` 디렉토리를 열고 `cocos2dx_custom.ini` 파일을 추가합니다:
![](./res/custom_ini_directory.png)

파일의 내용은 다음 같습니다:

```
[cocos2dx_custom]
# the prefix to be added to the generated functions. You might or might not use this in your own
# templates
prefix = cocos2dx_custom

# create a target namespace (in javascript, this would create some code like the equiv. to `ns = ns || {}`)
# all classes will be embedded in that namespace
target_namespace = cc

android_headers = -I%(androidndkdir)s/platforms/android-14/arch-arm/usr/include -I%(androidndkdir)s/sources/cxx-stl/gnu-libstdc++/4.7/libs/armeabi-v7a/include -I%(androidndkdir)s/sources/cxx-stl/gnu-libstdc++/4.7/include -I%(androidndkdir)s/sources/cxx-stl/gnu-libstdc++/4.8/libs/armeabi-v7a/include -I%(androidndkdir)s/sources/cxx-stl/gnu-libstdc++/4.8/include
android_flags = -D_SIZE_T_DEFINED_ 

clang_headers = -I%(clangllvmdir)s/lib/clang/3.3/include 
clang_flags = -nostdinc -x c++ -std=c++11

cocos_headers = -I%(cocosdir)s/cocos -I%(cocosdir)s/my -I%(cocosdir)s/cocos/base -I%(cocosdir)s/cocos/platform/android
cocos_flags = -DANDROID -DCOCOS2D_JAVASCRIPT

cxxgenerator_headers = 

# extra arguments for clang
extra_arguments = %(android_headers)s %(clang_headers)s %(cxxgenerator_headers)s %(cocos_headers)s %(android_flags)s %(clang_flags)s %(cocos_flags)s %(extra_flags)s 

# what headers to parse
headers = %(cocosdir)s/cocos/my/CustomClass.h

# what classes to produce code for. You can use regular expressions here. When testing the regular
# expression, it will be enclosed in "^$", like this: "^Menu*$".
classes = CustomClass.*

# what should we skip? in the format ClassName::[function function]
# ClassName is a regular expression, but will be used like this: "^ClassName$" functions are also
# regular expressions, they will not be surrounded by "^$". If you want to skip a whole class, just
# add a single "*" as functions. See bellow for several examples. A special class name is "*", which
# will apply to all class names. This is a convenience wildcard to be able to skip similar named
# functions from all classes.

skip = 

rename_functions = 

rename_classes = 

# for all class names, should we remove something when registering in the target VM?
remove_prefix = 

# classes for which there will be no "parent" lookup
classes_have_no_parents = 

# base classes which will be skipped when their sub-classes found them.
base_classes_to_skip = Ref Clonable

# classes that create no constructor
# Set is special and we will use a hand-written constructor
abstract_classes = 

# Determining whether to use script object(js object) to control the lifecycle of native(cpp) object or the other way around. Supported values are 'yes' or 'no'.
script_control_cpp = no


```

### tools/tojs/genbindings.py 수정하기

`custom_cmd_args`(Cocos2d-js 3.0 알파 2를 포함한 예전 버전에서는 `cmd_args`)를 찾아서 다음의 내용을 추가합니다:

```
  'cocos2dx_custom.ini' : ('cocos2dx_custom', 'jsb_cocos2dx_custom'), \
```
![](./res/genbindings_modify.png)

### tools/tojs/genbindings.py 실행하기

tools/tojs/genbindings.py를 실행하고, frameworks/custom/auto 디렉토리(또는 `custom_cmd_args` 대신에 `cmd_args`를 쓴다면 frameworks/js-bindings/bindings/auto 디렉토리)의 `jsb_cocos2dx_custom.cpp`와 `jsb_cocos2dx_custom.h`를 찾을 수 있습니다:
![](./res/auto_generate_directory.png)

Xcode 프로젝트에 해당 파일들을 추가합니다:

![](./res/addScriptToXcode.png)

### 자바스크립트에 해당 파일들을 등록

`jsb_cocos2dx_custom.hpp`를 열고, 전역 함수를 선언합니다: 

`register_all_cocos2dx_custom(JSContext* cx, JSObject* obj);`

자바스크립트 진입 파일을 실행하기 전에 예제처럼 AppDelegate.cpp의 CustomClass가 사용되기 전에 위의 함수를 호출합니다:

```
    ...
    #include "jsb_cocos2dx_custom.hpp"
    ...
    
	sc->addRegisterCallback(register_all_cocos2dx_custom);
    
#if (COCOS2D_DEBUG>0)
    if (startRuntime())
        return true;
#endif

    ScriptingCore::getInstance()->start();
    auto engine = ScriptingCore::getInstance();
    ScriptEngineManager::getInstance()->setScriptEngine(engine);
    ScriptingCore::getInstance()->runScript(ConfigParser::getInstance()->getEntryFile().c_str());   
```

### 런타임 빌드
Cocos Code IDE에서:

 * CocosJSGame 프로젝트 우클릭
 * Cocos Tools->Build Runtime...
 * 대상 플랫폼을 설정하고 **build** 클릭

### 자바스크립트에서 CustomClass 사용하기
main.js를 수정해서 CustomClass를 사용해보겠습니다:

```
	var customClass = cc.CustomClass.create();
    var msg = customClass.helloMsg()
    cc.log("customClass's msg is : " + msg)
```

### 테스트
`CocosJSGame` 프로젝트를 실행해보면 콘솔에서 다음과 같은 로그 메시지를 볼 수 있습니다:

`customClass's msg is : Hello from CustomClass::sayHello`



