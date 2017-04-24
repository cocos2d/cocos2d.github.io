#アセットマネージャーの拡張について

このドキュメントでは,Cocos2d-JS（JSBのみ）の拡張された新しいアセットマネージャーを紹介します。 この拡張はゲームに使用するリソース（イメージファイル,オーディオファイル,ゲームスクリプト）のホットアップデートの為に設計されています。ウェブサーバー上に新しいリソースを更新すると,ゲームからリモートリソースを追跡し,デバイスにダウンロードすることができます。各アプリストアでアプリを更新する必要なく,新しいコンテンツをすぐに利用することができます。

##使用事例

既にリリースしているアプリでユーザからバグや問題点の報告があった場合,アプリの問題点を修正して各アプリストアにアプリを提出する必要があります。さらに審査が通るのを待つ必要もあります。

その他の場合

- バレンタインデーのイベントなどタイミングを逃したくない時
- ゲームバランスを著しく損なう重要なバグを発見した時
- 新しいレベルやシーンなど新しいパッケージを追加する時
- などなど...

上記の用なことに対応できるようにアセットマネージャは設計されています。

##特徴

Cocos2d-JS v3.0 RC0のアセットマネージャーは,ホットアップデートの為に非常に便利な機能を備えています。

- マルチスレッドダウンロードをサポート
- 2つの進行レベルをサポート : ファイルレベルの進行,byteレベルの進行
- Zip圧縮されたファイルをサポート
- ダウンロードの再開
- 進行情報,エラー情報の詳細
- ダウンロードに失敗したアセットのダウンロード再試行

##使用方法

アセットマネージャーを使用するのは非常に簡単です。まず,アプリパッケージにJSON形式のマニフェストファイルを作ります。

マニフェストファイルはリモートマニフェストファイルのオンラインアドレス,現在のバージョン,リソースを記述することができます。ゲーム処理中に更新するためには`jsb.AssetsManager`を使用します。

###マニフェストファイル

ここではJSON形式のマニフェストファイルの例を紹介します。

```
{
	"packageUrl" : "http://example.com/assets_manager/TestScene/",
	"remoteVersionUrl" : "http://example.com/assets_manager/TestScene/version.manifest",
	"remoteManifestUrl" : "http://example.com/assets_manager/TestScene/project.manifest",
	"version" : "1.0.0",
	"engineVersion" : "Cocos2d-JS v3.0 RC0",

	"assets" : {
		"Images/background.jpg" : {
			"md5" : "..."
		},
		"Images/icon.png" : {
			"md5" : "..."
		},
		"Images/button.png" : {
			"md5" : "..."
		},
		"src/game.js" : {
			"md5" : "..."
		},
		"src/layer.js" : {
			"md5" : "..."
		},
		"compressed.zip" : {
			"md5" : "...",
			"compressed" : true
		}
	},
    
    "searchPaths" : [
        "res/"
    ]
}
```

- packageUrl : アセットマネージャーがアセットをダウンロードするURLです。
- remoteVersionUrl : リモートバージョンを確認するURLです。新しいバージョンがサーバーに更新されているか否かを確認することができます。
- remoteManifestUrl : 全てのアセットの情報が含まれているリモートマニフェストファイルのURLです。
- version : このマニフェストファイルのバージョン情報です。
- engineVersion : マニフェストファイルで使用されるCocos2d-JSのバージョンです。
- assets : アセットの情報です。
    - key : アセットの相対パスになります。
    - md5 : アセットのバージョン情報になります。
    - compressed : 圧縮されているか否かを設定できます。trueの場合はダウンロードしたファイルが自動的に解凍されます。 また,サポートしている形式はZipファイルのみとなります。
- searchPaths : cocos2dエンジンに追加するパスになります。

マニフェストファイルが大きくなるにつれ,バージョン情報を比較する時間がかかります。`version.manifest`ファイルにはマニフェストファイルの最初の5つのフィールドと同じ情報が含まれていて,バージョン情報を比較する時間を短縮することができます。`version.manifest`ファイルが見つからない場合,直接マニフェストファイルをダウンロードします。

###jsb.AssetsManagerの使い方

以下が使用例になります。

```
var manager = new jsb.AssetsManager(manifestUrl, storagePath);

manager.update();
// プロセスが終わる前にアセットマネージャーが解放されてしまうとまずいので,参照カウンタを加算します。
manager.retain();

if (!manager.getLocalManifest().isLoaded()) {
    cc.log("Fail to update assets, step skipped.");
}
else {
    var listener = new jsb.EventListenerAssetsManager(manager, function(event) {
        switch (event.getEventCode())
        {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.log("No local manifest file found, skip assets update.");
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                var percent = event.getPercent();
                var filePercent = event.getPercentByFile();
                cc.log("Download percent : " + percent + " | File percent : " + filePercent);
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.log("Fail to download manifest file, update skipped.");
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                cc.log("Update finished.");
                // アセットマネージャーを解放します。
                manager.release();
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                cc.log("Update failed. " + event.getMessage());
                // アセットのダウンロードに失敗した場合は,何度か再試行を試した後に中止することをオススメします。
                manager.downloadFailedAssets();
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                cc.log("Asset update error: " + event.getAssetId() + ", " + event.getMessage());
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                cc.log(event.getMessage());
                break;
            default:
                break;
        }
    }
}
```

また,サンプルとしてjs-testsプロジェクト内にExtensions/AssetsManagerTestがあります。`jsb.AssetsManager`のその他のAPIとして以下の様なものがあります。

- checkUpdate()
- getState()
- getStoragePath()
- getLocalManifest()
- getRemoteManifest()

###既知の問題

Windows, iOSシミュレータ上でアセットマネージャーを使用したファイルの作成及びダウンロードに失敗する場合があります。問題が修正されるまでは実機のiOSデバイスを使用するようにしてください。