# Map

![](./res/image099.png)

Map widget supports importing TMX format files, maps, topographic maps are widely used in games, in order to make a smooth switch the game screen players often use maps that bigger than the screen. If we use image, it will be a big hit to performance

Map is a good solution to this problem: the use of tile map. A large background image is represented by several small image, each corresponding to a small picture, namely tiles, mosaic tiles put these together, they form a complete map. When a number of different terrain for scene change, just load the tiles, greatly enhance efficiency.
 
#### Usage
In the battle scenes official example, we used the map as a background, that saves resources, but also enhance the efficiency:

![](./res/image100.png)

#### Scenario 1: Import and use the map file
You can import a specific effect of map control file (TMX files):

1. Drag the file from the resource panel to map control, release the mouse that implementation file import;

2. In the Properties panel "feature", click "Import Map File" button, select the file to import;

3. Select the map controls right on the canvas select "Set Map File", select the file to import.

