# cc.path

## 요약

싱글톤은 개발자가 파일 경로를 핸들링하기 위한 편의를 제공합니다.

우리는 이것을 `cc.path`라고 부르는데 그 이유는 `nodejs`에 `path`라는 같은 모듈이 존재하기 때문입니다. 

#### cc.path.join

경로로 만들기 위해 스트링을 합칩니다.

#### cc.path.extname

파일 경로의 확장자를 얻습니다.

인수:

|   이름   |   종류   |
|:--------:|:-------:|
|pathStr|String|



#### cc.path.basename

파일 이름을 얻습니다

인수:

|   이름   |  종류   |  설명 |
|:--------:|:-------:|:-------:|
|pathStr|String|필수|
|extname|String|선택. 삭제될 확장자.|


#### cc.path.dirname

파일 경로의 디렉토리 이름을 얻습니다

Arguments:

|   이름   |  종류   |  설명 |
|:--------:|:-------:|:-------:|
|pathStr|String|필수. 파일의 경로.|


#### cc.path.changeExtname

파일 경로의 확장자를 변경합니다.

인수

|   이름   |  종류   |  설명 |
|:--------:|:-------:|:-------:|
|pathStr|String|필수|
|extname|String|새로운 확장자. 기본값은 빈 문자열입니다.|


#### cc.path.changeBasename

파일 경로의 파일 이름을 변경합니다.

인수：

|   이름   |  종류   |  설명 |
|:--------:|:-------:|:-------:|
|pathStr|String|필수|
|basename|String|새로운 파일 이름.|
|isSameExt|Boolean|확장자가 같은지 여부.|


## 예제

테스트의 `PathTest`를 살펴보세요.
