# How to: Load Data Exported from cocos#

**Symptoms**

Failed to load data exported from cocos or the loading effects are not the same as desired. 

**Cause**

This issue may occur due to one or more of the following reasons: directory structure, layout codes and browser settings. 

**Resolution**

1 Adjust directory structure, and add `AddSearchPath` to res folder by default. 

2 Call layout codes, see [UI Layout and Multi-resolution Support](../../chapter3/UI/Layout/en.md) for more information. 

3 Add additional resources to `src/resource.js`, see [Load Exported Data](../../chapter3/HowToCode/LoadExportData/en.md) from more information. 
