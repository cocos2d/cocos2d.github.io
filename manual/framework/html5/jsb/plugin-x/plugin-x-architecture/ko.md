#Plugin-x 구조

##Plugin-x란?
Plugin-x는 게임에서 사용하는 써드파티 SDK의 프로토콜입니다. Plugin-x와 함께 쉽게 써드파티 SDK를 사용할 수 있어서, 더이상 JNI 코드나 자바스크립트 바인딩 코드를 사용하지 않아도 됩니다. 바로 지금 분석(analytics), IAP, ads, 소셜(social) SDK가 통합된 Plugin-x를 사용해보세요. 어떠한 SDK도 Plugin-x를 통해 당신이 원하는대로 통합할 수 있습니다.

##Plugin-x 구조

대부분의 써드파티 SDK는 오브젝티브-C나 자바로 작성되었기 때문에, 리플랙션(reflection)을 쉽게 사용하고, 분석 프로토콜(analytics protocal), IAP 프로토콜, ads 프로토 등을 추상화하기 위한 C++ 랩퍼를 만들었습니다. 써드파티 SDK를 플러그인으로서 통합하기 위해서 프로토콜의 인터페이스를 임플리먼트(implement)하기만 하면 됩니다. 개발한 게임에서 SDK를 사용한다면, 플러그인을 불러오고 프로토콜의 인터페이스를 작동시키면 됩니다.

Plugin-x의 구조는 다음과 같습니다:

![](res/plugin-x-architecture.jpg)

플러그인을 불러오고, 인터페이스를 작동하고, 플러그인을 업로드하는 과정은 다음과 같습니다: 

![](res/plugin-x-sequence-chart.jpg)