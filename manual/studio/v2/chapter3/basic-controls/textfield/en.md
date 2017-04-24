TextField
 
![image](res/image094.png)

TextField allows the user to input text, you can set the input frame size, font, password mode, length limit, and other properties
 
 
Usage
We use TextField for screens like register account, game login, password, enter the money in the transaction. In the official login screen example, we will use the TextField:
  
![image](res/image066.png)

Scenario 1: Modify the TextField font
When using the TextField, we can also be set to enter the desired font content, if you need a special font you need to click Import to import a TTF font format TextField font, the font will be packaged together in a game when you publish.
 
![image](res/image095.png)

Note:  If font used is not specified, it will use default font of the device.
 
Scenario 2: Placeholder text
The so-called placeholder text, that is, when the state of the players have not yet entered the default text display. You can quickly set what you need through the properties' text ", as in the example, we use the" User Name "as a placeholder text
 
 
![image](res/image096.png)

Scenario 3: Password field
When you enter a password, usually you want to hide it, in order to protect account security. TextField control provides a property "password", and you can customize the display by which ciphertext symbols instead, the default is "*"
 
![image](res/image097.png)

Scenario 4: Limit the length of the input
You can limit the length of the text TextField, open the length limit in the Properties panel, and specify the maximum length of the TextField can be entered.

