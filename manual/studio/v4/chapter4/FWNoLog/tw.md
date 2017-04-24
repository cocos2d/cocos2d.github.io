# **基於預編譯庫專案log沒有輸出，怎麼處理？** #

預編譯庫都是release版本的，所以使用LOG()這個宏列印的log都沒有輸出。 

開發者如果需要使用log輸出進行調試，對於不同語言的工程使用相應的介面： 

```
cpp : log("any string") 

lua : release_print("any string") 

js : console.log("any string")
```
