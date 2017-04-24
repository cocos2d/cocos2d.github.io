# ScrollView

## Icon

![](./res/scrollview.png)

## Description

The ScrollView subclass implements the scrolling layer in the touch screen. The ScrollView subclass is a subclass of Widget.
The control provides methods to set the layer container's clip, width and height, background color opacity, fill color, picture resources and other attributes.

## General Property

Link [General Property](../widget/general_property.md)

## Feature



### BounceBack

Set the widget bounceback Attribute.If selected, drag the layer's content will be capable of being dragged into from dragging boundary layer.


### Scroll direction

Sets the default scrolling direction.

### File

Sets a picture (png, jpg) that will be displayed with default status.

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

### ScrollAreaWidth

Sets the width of the scrolling area.

### ScrollAreaHeight

Sets the height of the scroll area.

**Note**: After setting the scrolling zone width and height, child controls must be located within the green wireframe.

### Transparency

Sets the opacity of the background color, ranging from 0-255, 0 for transparent, and 255 for the opaque option.

