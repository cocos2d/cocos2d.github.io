# Systematic Differences

## Introduction

Cocos Studio is a cross-platform game editor, in order to ensure uniform operation Editor resolve the differences between the systems through technical means, try to unify the user's operating experience. But limited to the operating system limitation, part of the operation will not achieve unity.For example, the file path in the different systems use a completely different approach to management.These issues will be unified for the record on this page.

#### Menu Bar

In the "Windows", Cocos Studio menu bar at the top of the editor interface,is located above the toolbar.In the "OS X", Cocos Studio menu bar same as the most of "OS X" applications, is located in the operating system menu bar, typically the operating system menu bar at the top of the window

### File Path

In the "Windows" operating system, the operating system will assign multiple letters, each letter will be independent.Similar to the path "D:\cocos\", between folders with "\" as a delimiter.In the "OS X" operating system,the operating system provides no concept of the letter, all the content will be "/" as the root path.When the Configuration Editor or by property editor opens, introducing, save the file,please note that the file path differences, especially in the time to manually enter the file path.