# 2.1 Step 1:새로운 게임 프로젝트

####프로젝트
프로젝트는 씬, 레이어, 스프라이트시트, 리소스 등을 포함합니다.

####새로운 프로젝트 만들기

![Image](res/image025.png)

코코스 스튜디오를 시작하고 새로운 게임 프로젝트(New game project)를 선택합니다. "CocosStudioDemo"라는 이름으로 새로운 코코스 스튜디오 프로젝트를 만듭니다.

![Image](res/image026.png)

프로젝트를 생성할 때 프로젝트의 이름과 경로를 설정하고 "New" 버튼을 클릭하면 새로운 코코스 스튜디오 게임 프로젝트가 만들어집니다.

개발자라면 직접 Cocos2d-x 소스 코드 프로젝트를 생성할 수도 있습니다.

폴더 구조

![Image](res/image027.png)

cocostudio 폴더에는 프로젝트에서 사용하는 모든 리소스가 존재합니다.

*.ccs 프로젝트 파일, 파일을 더블 클릭하면 프로젝트가 열립니다.

*.cfg 파일은 프로젝트 설정을 위한 파일입니다.

####소스 코드와 함께 새로운 프로젝트 만들기

New Project 다이얼로그에서 "Generate Cococs2d-x project"를 체크하고 관련 파라메터를 설정합니다.

![Image](res/image028.png)

패키지 이름(Package name)

엔진 경로(Engine Path): 네이티브 Cocos2d-x 경로. 이 속성은 아주 중요하기 때문에 엔진의 정확한 경로를 설정해야 합니다. 현재 코코스 스튜디오는 3.x 버전의 Cocos2d-x 엔진을 지원합니다. 최신 버전의 엔진을 다운로드 받으시려면 Cocos2d-x 공식 사이트에 방문하세요.

프로젝트 언어(Project language): C++, Lua, JavaScript

운영 환경(Operating environment): Cocos2d-x 또는 프로그램을 실행할 때 사용할 소스 코드 컴파일러를 선택합니다.

추가적 기능(Additional Features): 인텔이 제공하는 C++ 스페셜 최적화 기능(C++ special optimization features).

인텔 일반 연결 프레임워크(Intel Common Connectivity Framework)는 인텔이 제공하는 유니버셜 커넥티비티(universal connectivity)를 위한 프레임워크로 세부사항은 [다음을 참고하세요](https://software.intel.com/en-us/ccf).
X86 최적화(optimization)는 인텔이 제공하는 프레임워크 X86 플랫폼을 적용합니다. GCC(GNU Compiler Collection)는 다중 프로그래밍 언어의 세트입니다. ICC(Intel C++ Compiler)은 인텔에서 개발한 C/C++ 컴파일러입니다. [ICC](https://software.intel.com/en-us/forums/intel-c-compiler)

디렉토리 구조
![Image](res/image029.png)
