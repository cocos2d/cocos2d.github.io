#코코스 콘솔 작업흐름

##배경

코코스 콘솔은 Cocos2d-JS를 위해 아주 간단하게 환경을 설정하고 프로젝트 생성할 수 있도록 디자인된 도구입니다. 

Cocos2d-JS v3.0 알파 릴리즈와 함께 선보였으며 v3.0의 모든 기능을 지원하며 세부적인 사항은 [릴리즈 노트](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0/release-note/ko)에서 확인하실 수 있습니다. CH5 v3.0a부터 많은 오래된 API들을 자바스크립트 유저 친화적인 API로 재설계 되었으며 JSB API들 또한 하나의 코드 기반으로 확실히 동작할 수 있도록 재설계 되었습니다. 또한 중요한 사항으로 CH5와 JSB가 함께 하나의 저장소로 통합되었습니다:[Cocos2d-JS](https://github.com/cocos2d/cocos2d-js). 자바스크립트로 게임 코드를 작성할 때 이 저장소를 사용해서 프로젝트를 관리한다면 당신이 웹 또는 네이티브 등 어떤 플랫폼으로 배포하길 원하든 전혀 문제가 되지 않습니다.

##콘솔 도구

Cocos2d-JS는 CH5와 JSB 어플리케이션을 보다 쉽고 편리하게 개발할 수 있도록 하는 콘솔 도구를 제공합니다. 이 도구를 통해 새로운 프로젝트를 생성하면 안드로이드, iOS, Mac OS, 웹 등 아주 쉽게 다양한 플랫폼으로 배포할 수 있습니다. 

##설정

처음으로 이 도구를 사용하기에 앞서 설정을 해야 합니다. Cocos2d-JS 저장소를 복제(Clone)하고 모든 서브모듈을 업데이트합니다. 그리고 콘솔창에서 Cocos2d-JS 폴더로 이동한 후 `./setup.py`를 실행합니다. NDK와 안드로이드 SDK, ANT의 경로를 입력합니다. 이 도구는 파이썬으로 개발되었기 때문에 파이썬(32비트) 2.7.5 또는 그 이후 버전이 설치되어 있어야 합니다(파이썬3는 지원하지 않습니다).

도움이 될만한 링크들:

* [파이썬 2.7.6](https://www.python.org/download/releases/2.7.6/)
* [안드로이드 SDK](https://developer.android.com/sdk/index.html?hl=sk)
* [NDK](https://developer.android.com/tools/sdk/ndk/index.html)
* [ANT 바이너리 릴리즈](http://ant.apache.org/)
    - ANT 다운로드
    - 다운로드 받은 파일을 압축 풀기.
    - JAVA_HOME에 당신의 자바 환경에 맞춰 환경 변수 설정, ANT_HOME에 압축을 해제한 ANT 디렉토리를 설정하고, ${ANT_HOME}/bin (유닉스) 또는 %ANT_HOME%/bin (윈도우즈)를 당신의 PATH에 추가.
    
    ```
    // 예제: 콘솔에서 실행 또는 .bash_profile에 추가 (Mac)
    export ANT_ROOT=/usr/local/ant/bin
    export JAVA_HOME=/usr/local/jdk1.7.0_51
    ```

##사용법

설정이 제대로 완료되었다면 콘솔에서 `cocos` 명령을 사용할 수 있습니다.

###새로운 프로젝트 만들기

* Cocos2d-x JSB와 Cocos2d-html5를 포함한 프로젝트 만들기:

	```
	cocos new projectName -l js
	```

* Cocos2d-html5만 포함한 프로젝트 만들기:

	```
	cocos new projectName -l js --no-native
	```

* 특정 디렉토리에 프로젝트 만들기:

	```
	cocos new projectName -l js -d ./Projects
	```

###프로젝트 실행하기

* Cocos2d-html5 프로젝트를 웹서버로 실행하기:

	```
	cd directory/to/project
	cocos run -p web
	```

* Cocos2d-JSB에서 프로젝트를 컴파일하고 실행하기 :

	```
	cd directory/to/project
	cocos compile -p ios|mac|android|web
	cocos run -p ios|mac|android
	```

* 유용한 옵션들

	```
	-p platform : 플랫폼을 설정합니다. ios|mac|android|web.
	-s source   : 프로젝트 디렉토리로 설정하지 않으면 현재 디렉토리를 사용합니다.
	-q          : 조용한(Quiet) 모드, 로그 메시지를 제거합니다.
	-m mode     : 디버그 또는 릴리즈 모드를 설정합니다. 설정하지 않을 경우 디버그 모드가 기본입니다.
	--source-map: 일반적인 소스맵(source-map) 파일을 설정합니다. (웹 플랫폼만)
	```

###도움말

사용법에 대해서 궁금할 경우 `-h`를 사용하시면 어떠한 명령어든 약간의 도움말을 볼 수 있습니다. 그리고 여기에 세 가지 명령을 소개합니다:

* `new` : 프로젝트 생성
* `compile` : 프로젝트 컴파일
* `run` : 프로젝트 실행
