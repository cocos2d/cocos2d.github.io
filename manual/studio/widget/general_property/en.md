# UI Widget General Properties

## Common properties

### Transparency

Sets the opacity of the background color, ranging from 0-255, 0 for transparent, 255 for the opaque option.

### Color blend

Sets the widget's blend color. The drop-down menu will appear after the color selection box option is selected. Select the color option after mixing the original widget and color rendering.

### Name

Sets the widget's name, so the widget can be obtained through the named values in Cocos Studio.

### Interactive

The control widget accepts user events. If the widget does not accept user events, such as a button, check the check box.

### Render layer

Sets the widget's rendering order. Smaller values are first rendering, but may be rendered after coverage.

### Tag

Sets the widget's tag, so the widget can be obtained through the tag values in Cocos Studio.


### Show/Hide

Controls whether the control is displayed. Users can set some widgets not displaying in start state, latter through the code and then displayed. But whether or not the control display will be initialized and loaded depends on your system's memory.

### Frame event

Setting widget animation's frame event, frame events into effective for animation.

-------

## Size and mode

### Mode 
  
Set the size of the widget.Include "Custom" mode and "Auto" mode.The default is "auto", in this mode the widget's size is the picture's size. If selected "Custom" mode, the widget size can be reset.  
Only for effective widget, not include layout, scrollview, listview, pageview. 

### Size

* W：Sets width of the widget in pixels.
* H：Sets height of the widget in pixels.

### Size percentage

Open the percentage mode of widget size.This setting only in Custom mode display.

### Size Percent

* W：Sets width of the widget in Percent.
* H：Sets height of the widget in Percent.

### 3x3 grids

3x3 grids use a small picture to draw the large area's picture without distortion techniques.

When drawing, follow the rules below:

	
 1. Keep the shape of the four edges.
 2. Stretch graphics and keeps the corners at the same size.
 3. You can simultaneously stretch the middle, horizontal, and vertical sections. The end result may not keep the original proportions.

Four parameters of Cocos Studio

 1. CapInsetsX and CapInsetsY use a pair of parameters. They determine our center coordinates of the lower left corner. Cocos2d-x uses the lower left corner as the origin.
 2. CapInsetsWidth and CapInsetsHeight determines the size of the center.

Note：

- The widget width should be greater than 2*X and widget height greater than 2*Y, or else the UI Editor will be prone to graphic artifacts.
- Set 3 x 3 grids attribute value in scaling properties to 1; otherwise the graphic appears distorted.


## Widget layout

Control  layout  is used to control the layout information,such as location / size / scale, the layout of the property area in different layout mode displays different setting options.

Properties of the model by layer (including layout/scrollview/listview/pageview) as the parent widget.Embodied in child controls attribute.

Including: absolute layout mode, relative layout mode, horizontal linear pattern, vertical linear pattern.

### Absolute Layout
-------
- Percentage

	Open the percentage mode of widget position.

- Position

	Set widget's position.The unit is pixel. 

- Proportion（%）

	Set widget's position. The percentage of the value relative to the parent control size.

- flip

	Set of controls flip properties, divided into horizontal and vertical flip.

- Scale

	Sets the widget's scaling, divided into X axis scaling and Y axis scaling. Values can be either positive or negative, when the negative effect can be achieved.

- Rotation

	Sets the widget's rotation property value to rotate clockwise.
	
	Drag the blue point operation control rotation Angle, widget's direction of rotation and blue point relative to the center point in the same direction.


- Anchor point

	 Sets the position of the anchor point. All widgets use the center point as the default anchor point except for the UIPanel, ScrollView, and DragPanel widgets which use the lower left corner as the anchor point.


### Relative Layout
-------
- Dock

	Sets the current selected widget's dock. The default is parent widget. You can choose the parent and all the peer widgets which no layout relationship with current selected widget.

	1. Dock is parent
	 - Horizontal Alignment： Sets the widget horizontal alignment mode relative to parent. Including“left”, “middle” and “right” three modes.
	 - Vertical Alignment：Sets the widget horizontal alignment mode relative to parent. Including “top”, “middle” and “bottom” three modes.
	2. Dock is peer
	 - Dock Ddge ：Sets the dock direction relative to the dock, the current selected widget will cling to one side of dock object.
	 - Horizontal Alignment：Sets the widget horizontal alignment mode relative to parent. Including“left”, “middle” and “right” three modes.( This attribute will be show only when the dock edge selected "top" or "bottom".)
	 - Vertical Alignment：Sets the widget horizontal alignment mode relative to parent. Including “top”, “middle” and “bottom” three modes.( This attribute will be show only when the dock edge selected "top" or "bottom".)

- Edge

	Set against the dock position displacement control. The unit is pixels. 
	According to the dock  relationship between different, edge is only two attributes are available.
	
- flip

	Set of controls flip properties, divided into horizontal and vertical flip.

- Scale

	Sets the widget's scaling, divided into X axis scaling and Y axis scaling. Values can be either positive or negative, when the negative effect can be achieved.

- Rotation

	Sets the widget's rotation property value to rotate clockwise.
	
	Drag the blue point operation control rotation Angle, widget's direction of rotation and blue point relative to the center point in the same direction.

- Anchor point

	 Sets the position of the anchor point. All widgets use the center point as the default anchor point except for the UIPanel, ScrollView, and DragPanel widgets which use the lower left corner as the anchor point.

### Linear Horizontal
-------
- Vertical Alignment

	Sets the widget horizontal alignment mode relative to parent.Including “top”,“middle” and “bottom” three modes.

- Edge

	Set against the dock position displacement control.The unit is pixels. 
	According to the dock  relationship between different, edge is only two attributes are available.

- flip

	Set of controls flip properties, divided into horizontal and vertical flip.

- Scale

	Sets the widget's scaling, divided into X axis scaling and Y axis scaling. Values can be either positive or negative, when the negative effect can be achieved.

- Rotation

	Sets the widget's rotation property value to rotate clockwise.
	
	Drag the blue point operation control rotation Angle, widget's direction of rotation and blue point relative to the center point in the same direction.

- Anchor point

	 Sets the position of the anchor point. All widgets use the center point as the default anchor point except for the UIPanel, ScrollView, and DragPanel widgets which use the lower left corner as the anchor point.

### Linear Vertical
-------
- Horizontal Alignment

	Sets the widget horizontal alignment mode relative to parent.Including“left”,“middle” and “right” three modes.

- Edge

	Set against the dock position displacement control.The unit is pixels. 
	According to the dock  relationship between different, edge is only two attributes are available.

- flip

	Set of controls flip properties, divided into horizontal and vertical flip.

- Scale

	Sets the widget's scaling, divided into X axis scaling and Y axis scaling. Values can be either positive or negative, when the negative effect can be achieved.

- Rotation

	Sets the widget's rotation property value to rotate clockwise.
	
	Drag the blue point operation control rotation Angle, widget's direction of rotation and blue point relative to the center point in the same direction.

 
- Anchor point

	 Sets the position of the anchor point. All widgets use the center point as the default anchor point except for the UIPanel, ScrollView, and DragPanel widgets which use the lower left corner as the anchor point.