오브젝트 풀(Objects pool)
=====

## cc.pool의 활용 방법

클래스 인스턴스의 빈번한 생성과 삭제가 필요할 때 사용합니다. 새로운 인스턴스가 필요할 때 삭제하고 재사용하는 동안 `cc.pool`에 그것을 집어넣는 것은 완벽한 활용법입니다. 오브젝트 풀을 사용하면 메모리 사용을 줄이고 성능을 향상시킬 수 있습니다.
 
## cc.pool 사용법
 
1. **당신의 클래스가 `cc.pool`을 지원하도록 만드세요**

    먼저 클래스가 `unuse`와 `reuse` 함수를 가져야 합니다. `cc.pool`은 풀에 넣을 때 `unuse` 함수를 호출하며 `reuse` 함수는 주어진 매개 변수로 풀에서 오브젝트를 되살릴 때 사용합니다.

    여기 예제 클래스인 `MySprite`가 있습니다.

    ```
	var MySprite = cc.Sprite.extend({
		_hp: 0,
		_sp: 0,
		_mp: 0,
		ctor: function (f1, f2, f3) {
    		this._super(s_grossini);
    		this.initData(f1, f2, f3);
		},
		initData: function (f1, f2, f3) {
    		this._hp = f1;
    		this._mp = f2;
    		this._sp = f3;
		},
		unuse: function () {
    		this._hp = 0;
    		this._mp = 0;
    		this._sp = 0;
    		this.retain();//if in jsb
    		this.setVisible(false);
    		this.removeFromParent(true);
		},
		reuse: function (f1, f2, f3) {
    		this.initData(f1, f2, f3);
    		this.setVisible(true);
		}
	});	
    MySprite.create = function (f1, f2, f3) {
        return new MySprite(f1, f2, f3)
    }
    MySprite.reCreate = function (f1, f2, f3) {
        var pool = cc.pool;
        if (pool.hasObject(MySprite)) return pool.getFromPool(MySprite, f1, f2, f3);
        return  MySprite.create(f1, f2, f3);
    }
    ```

2. **`cc.pool`에 오브젝트 넣기**

    ```
    cc.pool.putInPool(object);
    ```

    `putInPool` 함수는 `object.unuse()`를 실행하고 향후 사용을 위해 `cc.pool`에 넣습니다.

3. **`cc.pool`에서 오브젝트 되살리기**

    ```
    var object = cc.pool.getFromPool("MySprite", args);
    ```

    풀에서 오브젝트를 꺼내기를 원하면 `getFromPool`를 사용하여 클래스와 파라메터를 전달하여 사용 가능한 오브젝트로 되살립니다. 풀은 오브젝트 초기화를 위한 `args`와 함께 `reuse` 함수를 호출하고 오브젝트를 반환합니다.

4. **오브젝트가 사용 가능한지 여부 체크**

    ```
    var exist = cc.pool.hasObject("MySprite");
    ```

5. **`cc.pool`에서 오브젝트 제거**

    ```
    cc.pool.removeObject(object);
    ```

6. **풀 비우기**

    ```
    cc.pool.drainAllPools();
    ```
    
    게임 씬을 전환할 때 아마도 예전 씬의 오브젝트는 더이상 사용하지 않을 것입니다. 그런 경우에 불필요한 메모리 사용을 피하기 위해서 풀의 모든 오브젝트를 `drainAllPools` 함수로 삭제할 수 있습니다.
