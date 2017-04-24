#이클립스에서 안드로이드 프로젝트 컴파일하기

이 문서는 이클립스에서 Cocos2d-JS 안드로이드 프로젝트를 어떻게 컴파일하는지 보여줍니다.

##필수사항:
- ADT bundle
- NDK r9d
- python 2.7

##프로젝트 생성
언제나 그렇듯이 그저 터미널에서 `cocos new MyGame -l js -d ~/workspace`를 실행합니다.

##이클립스에서 프로젝트 임포트(Import)
ADT bundle에서 이클립스를 실행한 후 File->new->other에서 `Android Project from Existing Code`를 선택합니다.

![](./res/1.png)

루트 디렉토리의 `~/workspace/MyGame`를 선택합니다. 많은 프로젝트가 보인다면 그저 `MyGame`과 `libcoocs2dx`를 선택합니다.

그러면 밑의 그림처럼 두 개의 프로젝트가 임포트된 것을 볼 수 있습니다.

![](./res/2.png)

##이클립스의 NDK 빌더 설정
apk 파일을 생성하기 전에 C++ 코드를 컴파일하기 위한 네이티브 빌더가 필요합니다. `MyGame`을 우클릭한 후 `Properties`를 선택해주세요.

![](./res/3.png)

`Builders`에서, `New..`를 클릭하고, `program`를 선택한 후 OK 버튼을 누릅니다.

![](./res/4.png)

이제 빌더를 설정하기 시작합니다. 커맨드 위치를 설정하기 위해 `Browse Worksapce`를 클릭하고 `build_native.py`를 선택합니다.

![](./res/5.png)

작업 디렉토리를 설정하기 위 `Brwose Worksapce`를 클릭하고, MyGame를 선택한 후 OK를 누릅니다.

![](./res/6.png)

`-b release` 또는 `-b debug`처럼 당신이 원하는대로(기본값은 debug) Arguments를 추가합니다.

![](./res/7.png)

Refresh 탭으로 변경한 후, `Refresh resources upon completion`를 선택합니다.

![](./res/8.png)

Environment 탭으로 변경한 후, `New...`를 클릭하고, `NDK_ROOT`를 여기에 추가합니다.

![](./res/9.png)

이제 OK를 클릭하면 네이티브 빌더를 설정이 끝납니다.

##실행

일반적으로 클린(clean) & 실행(run)을 합니다. 필요한 리소스들을 assets 폴더로 복사하고, 콘솔에서 볼 수 있는 것처럼 네이티브 코드는 컴파일됩니다. 그리고 apk 파일을 생성합니다.   
