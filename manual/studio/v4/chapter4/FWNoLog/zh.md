# **基于预编译库项目log没有输出，怎么处理？** #

预编译库都是release版本的，所以使用LOG()这个宏打印的log都没有输出。 

开发者如果需要使用log输出进行调试，对于不同语言的工程使用相应的接口： 

```
cpp : log("any string") 

lua : release_print("any string") 

js : console.log("any string")
```
