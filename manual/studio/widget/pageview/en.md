# PageView

## Icon

![](./res/pageview.png)

## Description

The ScrollView subclass implements the scrolling layer in the touch screen. The UIScrollView subclass is a subclass of Widget.
The control provides methods to set the layer container's clip, width and height, background color opacity, fill color, picture resources and other attributes.

## General Property

Link [General Property](../widget/general_property.md)

## Feature




### Transparency

Sets the opacity of the background color, ranging from 0-255, 0 for transparent, and 255 for the opaque option.

### Fill Color

- No color    
Sets no color for the background color.
- Monochrome   
Sets the background color（RGB).
- GradientColor   

	1.  StartColor  
	Sets the starting color of the gradient.
	2.  EndColor  
	Sets the ending color of the gradient.
	3.  X  
	X Vector
	4.  Y  
	Y Vector

### Clip

Hides control's child controls, which are out of the display area.

### File

Sets a picture (png, jpg) that will be displayed with default status.