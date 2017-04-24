Cocos2d-JS v3.0의 새로운 속성 API
======================================

1. 새로운 스타일
----------------

Cocos2d-JS v3.0에서 어떻게 바뀌었는지 예제를 직접 살펴보겠습니다:

| 예전 API       				    | 현재 API                            |
|:-----------------------------:|:----------------------------------:|
| node.setPosition(x, y);		| node.x = x; node.y = y;            |
| node.setRotation(r);			| node.rotation = r;                 |

표에서 보실 수 있는 것처럼, 함수 호출은 속성 수정으로 바뀌었습니다. 버전 3.0에서 `x`, `y`, `rotation`뿐만 아니라 대부분의 노드 속성을 이처럼 접근할 수 있습니다. 속성 목록은 이 문서의 끝 부분에서 찾을 수 있습니다.

[getter and setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)에 감사하며, 우리는 속성의 게터 함수와 세터 함수를 정의할 수 있습니다. 이는 어떻게 우리가 새로운 속성의 게터/세터를 위한 예전 함수를 정의해야 하는지를 알려줍니다. 예를 들면 실제로 `node.x = x;`는 사실은 x 값을 파라메터로 `setPositionX` 함수를 호출하는 형태로 예전 함수 호출과 비슷하기 때문에 단순화된 API를 두려워 할 필요가 없습니다.

오브젝트의 속성을 위한 게터/세터 함수를 정의하는 것은 다음의 코드처럼 사용하면 됩니다:

```
cc.defineGetterSetter(object, "propertyName", getterFunc, setterFunc);
```

그러면 `var a = object.propertyName;`를 실행할 때마다 `getterFunc`를 통하여 속성명에 따라 값을 검색합니다: `object.propertyName = newvalue;`를 실행하면 `setterFunc`를 통해서 값을 수정합니다.

속성의 이름으로 자바스크립트 개발자에게 아주 친숙한 CSS 스타일에 가까운 이름을 제안했습니다.


2. cc.Node의 `attr` 함수 
-----------------------------

개별적으로 속성 API는 그저 보다 짧은 코드를 가지도록 하는 함수의 교체로 보일 수도 있지만 속성 엑세스 API와 함께 cc.Node에게 더 많은 유용한 함수도 제공할 수 있습니다: `attr` 함수. jQuery의 `attr` 함수와 꽤 비슷하며 한번의 함수 호출로 모든 속성을 함께 설정할 수 있습니다. 

```자바스크립트
node.attr({
	x: 20,
	y: 20,
	anchorX: 0.5,
	anchorY: 0.5,
	width: 400,
	height: 300,
	scale: 2
});
```

단지 문서 마지막에 나와있는 리스트의 모든 속성만 가능한 것이 아니라 당신만의 커스텀 속성도 가능합니다.


3. 왜 그리고 무엇을 바꾸었나요?
-----------------------

왜 우리는 안정적인 API에 이런 엄청난 변화를 주고 싶어할까요? 분명한 대답은 이미 이전의 예제를 통해 보여주었습니다: 새로운 API는 예전 API보다 훨씬 쉽습니다. 

그러나 정말로 바꾸길 원한다고 해도 간단하지가 않습니다. Cocos2d-JS는 웹 개발자가 배우고 사용하기에 얼마나 어려운지에 대해서 오랜 시간 동안 인지해왔습니다. 다른 HTML5 게임 엔진과 비교하여 우리 엔진은 단지 자바스크립트 개발자를 위해서만 설개된 것은 아닙니다. 그리고 실제로 Cocos2d-JS의 API는 언제나 C++ 개발자가 이용하는 Cocos2d-x와 같았고 오리지널 Cocos2d-iPhone의 오브젝티브-C 스타일 API 또한 엔진 곳곳에 남아있습니다. 분명하게 Cocos2d-JS에 이식된 이런 API들은 때때로 자바스크립트 개발자에게 아주 어색합니다.

그래서 버전 3.0의 주요 태스크는 자바스크립트 API 스타일로 완벽하게 재설계하는 것이었습니다. 그리고 기꺼이 모든 것을 바꾸고 Cocos2d-JS를 '리붓'하는 커다란 위험을 감수하였습니다. 

속성으로 돌아와서 cc.Node와 모든 하위 클래스의 `getXXX()`와 `setXXX(value)` 함수 대신에 속성을 재설계하였습니다. 몇가지 다른 클래스에서 몇몇 속성 스타일 API 또한 제공합니다. 모든 속성과 관련된 클래스는 이 문서의 마지막에서 보실 수 있습니다.


4. 클로져 컴파일러(closure compiler)에 대해서
-------------------------

노드를 설정하는데 `attr`는 키-값 페어를 사용하면 프로젝트를 컴파일하는 클로저 컴파일러의 어드밴스드 모드를 사용하려고 할 때 문제가 발생할 수 있습니다. 

문제는 속성 이름이 압축되는 동안 어드밴스드 모드에서 키가 압축되지 않는다는 것입니다. 이는 `attr` 함수와 실제 속성 사이에 서로 일치하지 않는 문제점을 야기합니다. 다행히도 우리는 리스트에 나와있는 것처럼 대부분의 속성의 기능성을 보장할 수 있습니다. 다른 속성이나 커스텀 속성의 경우 클로저 컴파일러에 `expose` 주석을 추가하여 문제를 회피할 수 있습니다. 속성을 설정하기 위해 `attr` 함수를 사용하려고 할때만 문제점이 발생한다는 사실에 주의하세요. 

```자바스크립트
/** @expose */
node.shaderProgram;

/** @expose */
node.customProperty;

node.attr({
	shaderProgram: program,
	customProperty: 0
});
```


5. 상속 속성(Inherit property)
---------------------

또 다른 문제점은 클래스를 상속하려고 할 때나 속성의 게터/세터 함수를 오버라이드하려고 할 때입니다. 좋은 소식으로는 자동으로 이루어지도록 솔루션에 내장했다는 것입니다. 여기에 커스텀 스프라이트 서브 클래스에서 `x`의 게터/세터 함수를 오버라이드 하려고 할 때의 예제가 있습니다.

```자바스크립트
var MySprite = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.init();
	},
	getPositionX: function() {
		// Your own implementation
	},
	setPositionX: function(x) {
		// Your own implementation
	}
});

var mySprite = new MySprite();
```

그러면 `mySprite.x = x;`는 커스텀 `setPositionX` 함수를 호출하며 게터도 동일합니다. 상속된 게터/세터 함수의 이름는 부모 클래스의 이름과 같아야만 합니다. 그렇지 않으면 `cc.defineGetterSetter`를 통해서 속성을 재정의할 필요가 있습니다. 


6. 속성 목록
---------------------

### cc.Node

| 속성 | 종류 | 접근성 | 게터/세터 함수 | 고급 압축 준비 |
|:------:|:------:|:-------:|:-------:|:------:|
| x | Number | R&W | getPositionX, setPositionX | YES |
| y | Number | R&W | getPositionY, setPositionY | YES |
| width | Number | R&W | \_getWidth, _setWidth | YES |
| height | Number | R&W | \_getHeight, _setHeight | YES |
| anchorX | Number | R&W | \_getAnchorX, _setAnchorX | YES |
| anchorY | Number | R&W | \_getAnchorY, _setAnchorY | YES |
| skewX | Number | R&W | getSkewX, setSkewX | YES |
| skewY | Number | R&W | getSkewY, setSkewY | YES |
| zIndex | Number | R&W | getLocalZOrder, setLocalZOrder | YES |
| vertexZ | Number | R&W | getVertexZ, setVertexZ | YES |
| rotation | Number | R&W | getRotation, setRotation | YES |
| rotationX | Number | R&W | getRotationX, setRotationX | YES |
| rotationY | Number | R&W | getRotationY, setRotationY | YES |
| scale | Number | R&W | getScale, setScale | YES |
| scaleX | Number | R&W | getScaleX, setScaleX | YES |
| scaleY | Number | R&W | getScaleY, setScaleY | YES |
| opacity | Number | R&W | getOpacity, setOpacity | YES |
| opacityModifyRGB | Boolean | R&W | isOpacityModifyRGB, setOpacityModifyRGB | YES |
| cascadeOpacity | Boolean | R&W | isCascadeOpacityEnabled, setCascadeOpacityEnabled | YES |
| color | cc.Color | R&W | getColor, setColor | YES |
| cascadeColor | Boolean | R&W | isCascadeColorEnabled, setCascadeColorEnabled | YES |
| children | Array | readonly | getChildren | YES |
| childrenCount | Number | readonly | getChildrenCount | YES |
| parent | cc.Node | R&W | getParent, setParent | YES |
| visible | Boolean | R&W | isVisible, setVisible | YES |
| running | Boolean | readonly | isRunning | YES |
| ignoreAnchor | Boolean | R&W | isIgnoreAnchorPointForPosition, ignoreAnchorPointForPosition | YES |
| tag | Number | R&W | None | YES |
| userData | Object | R&W | None | YES |
| userObject | Object | R&W | None | YES |
| arrivalOrder | Number | R&W | None | YES |
| actionManager | cc.ActionManager | R&W | getActionManager, setActionManager | YES |
| scheduler | cc.Scheduler | R&W | getScheduler, setScheduler | YES |
| grid | cc.GridBase | R&W | None | NO |
| shaderProgram | cc.GLProgram | R&W | getShaderProgram, setShaderProgram | YES |


### cc.Texture2D

| 속성 | 종류 | 접근성 | 게터/세터 함수 | 고급 압축 준비 |
|:------:|:------:|:-------:|:-------:|:------:|
| name | WebGLTexture | readonly | getName | NO |
| pixelFormat | Number | readonly | getPixelFormat | NO |
| pixelsWidth | Number | readonly | getPixelsWide | NO |
| pixelsHeight | Number | readonly | getPixelsHigh | NO |
| width | Number | R&W | \_getWidth, _setWidth | NO |
| height | Number | R&W | \_getHeight, _setHeight | NO |
| shaderProgram | cc.GLProgram | R&W | None | NO |
| maxS | Number | R&W | None | NO |
| maxT | Number | R&W | None | NO |


### cc.Sprite

cc.NodeRGBA로부터 확장

| 속성 | 종류 | 접근성 | 게터/세터 함수 | 고급 압축 준비 |
|:------:|:------:|:-------:|:-------:|:------:|
| dirty | Boolean | R&W | None | YES |
| flippedX | Boolean | R&W | isFlippedX, setFlippedX | YES |
| flippedY | Boolean | R&W | isFlippedY, setFlippedY | YES |
| offsetX | Number | readonly | _getOffsetX | YES |
| offsetY | Number | readonly | _getOffsetY | YES |
| atlasIndex | Number | R&W | None | YES |
| texture | cc.Texture2D | R&W | getTexture, setTexture | YES |
| textureRectRotated | Boolean | readonly | isTextureRectRotated | YES |
| textureAtlas | cc.TextureAtlas | R&W | None | YES |
| batchNode | cc.SpriteBatchNode | R&W | getBatchNode, setBatchNode | YES |
| quad | cc.V3F_C4B_T2F_Quad | readonly | getQuad | YES |


### cc.LabelTTF

cc.Sprite로부터 확장(Extend)

| 속성 | 종류 | 접근성 | 게터/세터 함수 | 고급 압축 준비 |
|:------:|:------:|:-------:|:-------:|:------:|
| string | String | R&W | getString, setString | YES |
| textAlign | Number | R&W | getHorizontalAlignment, setHorizontalAlignment | YES |
| verticalAlign | Number | R&W | getVerticalAlignment, setVerticalAlignment | YES |
| fontSize | Number | R&W | getFontSize, setFontSize | YES |
| fontName | String | R&W | getFontName, setFontName | YES |
| font | String | R&W | \_getFont, _setFont | YES |
| boundingWidth | Number | R&W | \_getBoundingWidth, _setBoundingWidth | YES |
| boundingHeight | Number | R&W | \_getBoundingHeight, _setBoundingHeight | YES |
| fillStyle | cc.Color | R&W | \_getFillStyle, setFontFillColor | YES |
| strokeStyle | cc.Color | R&W | \_getStrokeStyle, _setStrokeStyle | YES |
| lineWidth | Number | R&W | \_getLineWidth, _setLineWidth | YES |
| shadowOffsetX | Number | R&W | \_getShadowOffsetX, _setShadowOffsetX | YES |
| shadowOffsetY | Number | R&W | \_getShadowOffsetY, _setShadowOffsetY | YES |
| shadowOpacity | Number | R&W | \_getShadowOpacity, _setShadowOpacity | YES |
| shadowBlur | Number | R&W | \_getShadowBlur, _setShadowBlur | YES |

[속성의 모든 목록](property-list.md)
