##기본 데이터##

함수로 기본 데이터를 만들어보겠습니다.

###1,cc.Point (3가지 방법)###
구조:{x:0,y:0}

    //1 빠른 생성, return cc.p(0,0)
    var point1 = cc.p();
    //2 일반적인 방법
    var point2 = cc.p(100,100);
    //3 복사
    var point3 = cc.p(point2);


###2,cc.Size  (3가지 방법)###
구조:{width:0,height:0}

    //1 빠른 생성, return cc.size(0,0)
    var size1 = cc.size();
    //2 일반적인 방법
    var size2 = cc.size(100,100);
    //3 복사
    var size3 = cc.size(size2);

###3,cc.Rect  (3가지 방법)###
structure:{x:0,y:0,width:0,height:0}

    //1 빠른 생성,return cc.rect(0,0,0,0)
    var rect1 = cc.rect();
    //2 일반적인 방법
    var rect2 = cc.rect(100,100,100,100);
    //3 복사
    var rect3 = cc.rect(rect2);

###4,cc.Color (5가지 방법)###
structure:{r:0,g:0,b:0,a:0}

    //1 빠른 생성,return cc.color(0,0,0,255);
    var color1 = cc.color();
    //2 일반적인 방법, 알파(투명도) 없음
    var color2 = cc.color(255,255,255);
	//3 일반적인 방법, 알파 있음
    var color3 = cc.color(255,255,255,255);
    //4 복사
    var color4 = cc.color(color2);
	//5 고정 색상
	var color5 = cc.color.white;

	9가지 종류의 고정 색상 타입:
	cc.color.WHITE;
	cc.color.YELLOW;
	cc.color.BLUE;
	cc.color.GREEN;
	cc.color.RED;
	cc.color.MAGENTA;
	cc.color.BLACK;
	cc.color.ORANGE;
	cc.color.GRAY;
