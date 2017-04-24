# 2.3.3 Position and Layout


In Cocos Studio, the coordinate system is based on bottom left corner, so the the point at bottom left corner of the screen is at (0,0). 

For example,

![Image](res/image049.png)

Create a scene (Scene) file, to add two button nodes, and as shown above were set image asset, modify the node coordinates of "Home" (50, 50), "outposts" (200,200), and the effect on the map consistent. "Home," the coordinates (50,50) is actually relative to his parent object scene (Scene) in the lower left vertex coordinate offset.

In order to better understand the description of this rule, we can do a test, adjust the two nodes,

Add “outpost” as a child of “Home” Then you look at "checkpoints" will find the coordinates, the coordinate values ​from the original (200,200) is changed to (189,206). Apply the above rule, "outposts" in the lower left coordinates are the coordinates of the offset distance his parent node (Home) nodes, as shown below:

![Image](res/image050.jpg)

####Layout

In order to adapt various resolutions devices have, Cocos Studio provides layout functionality, such as percentage layout. Percentage layout is very simple to use, just switch the coordinates unit to "%”

![Image](res/image132.gif)

