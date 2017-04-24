# 2.2.1 New File

With Cocos Studio you can create scene, layers, node, SpriteSheet four file types.

![Image](res/image129.gif)

File name: file name can be number and alphabet, but can not include \ /: * "<> |;?

Type: Click to select the file type you want to create;

Description: The file type descriptive;

Size: Only layer supports canvas size.

####Scene File
The scene is Cocos2d-x essential elements, can be used to create level, menus and so on. Game is made of scenes, just like movies.

An important role for the scene is also to control the flow of the game, so the need to create multiple scenes to complete a game.

Scene file is saved as the scene file.

####Layer file
We can use layers to host sprite, labels or other elements of the game, and set the properties of these elements, such as position, rotation, and size.

Typically, we also organize layers by game logic, and we add the layers to the scene to display.

####Node file
node is the basic element of cocos2d-x, the element of the node must be a subclass or a node object. Node has the following main features:

Objects can contain other nodes;

You can set up a scheduled callback;

Node file used to store node, can be reused in other files.

####SpriteSheet file
SpriteSheet compose small images into one large spritesheet.

It is a very useful feature for game developers, it could increase the performance significantly.

Recommends that your SpriteSheet is less than 1024 * 1024, otherwise some device might have problem supporting it.

####How to choose the file type
	
Cocos2d-x use scene graph to manage the game, a game can be divided into different scene, a scene can be divided into different layers, one layer and can have any number of nodes.

There is always a scene presenting, and director will control the switching of the scene.

![Image](res/image032.png)

So whether to create a scene or a layer, you can base on the following assumption, Use scene 

for the main features, such as the login screen, the main interface, the battle interface.

use layers when you just need to change the graphics, such as character attributes, items backpacks, App Store, skill.

Use node for reusable components.

Use spritesheet to optimize the game performance.
