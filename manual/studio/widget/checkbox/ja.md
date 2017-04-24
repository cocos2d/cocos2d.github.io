# CheckBoxについて

## アイコン

![](./res/checkbox.png)

## 説明

スクロールビューサブクラスはタッチスクリーン上におけるチェックボックスを実装します。このスクロールビューはウィジェットのサブクラスでもあります。


このウィジェットの機能として,背景画像を切り替えたり,その画像に合わせたタグやアトリビュートを設定することが出来ます。
これらの機能により,かなり細かく外見を設定できます。

### Featureの項目について
#### background
チェックボックスの背景画像を設定する項目です。

Normal	: DisplayStateがNormalかつ押下状態ではない場合に表示される画像  
Pressed	: DisplayStateがNormalかつ押下状態の場合に表示される画像   
Disabled: DisplayStateがDisabledの場合に表示される画像

####LogoStyle
チェックボックスのロゴを設定する項目です。
ロゴは押下状態とは関係なく表示されます。

Normal : DisplayStateがNormalかつSelectedにチェックが入っている場合に表示する画像   
Disabled : DisplayStateがDisabledかつSelectedにチェックが入っている場合に表示する画像

####DisplayState
画面の表示状態を設定できます。
NormalState及びDisableStateのどちらかにチェックを入れることで,それに対応した状態でエディットすることが出来るようになります。

####Selected
チェックボックスが選択されているかを設定できます。
Selectedにチェックを入れることで,チェックボックスが選択された状態でエディットすることが出来,逆にチェックを外すことで選択されていない状態でエディット出来るようになります。