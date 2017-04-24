# CCSAXParser.js

## cc.saxParser

* cc.SAXParser는 싱글톤 오브젝트로 재설계되었습니다 : cc.saxParser.

* `tmxParse`, `preloadPlist`, `unloadPlist`, `getName`, `getExt`, `getList` 제거.

* `parse`의 인수는 오직 파싱하려고 하는 xml 컨텐츠이어야 합니다.

## cc.plistParser

plist 파일 파싱을 위해서 `cc.saxParser`를 확장하여 `cc.plistParser`  추가

## CCTMXXMLParser.js

앞으로 재설계할 것입니다.
