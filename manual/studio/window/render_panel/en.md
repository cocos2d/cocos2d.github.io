# Render Panel

## Overview
![](./res/render_panel.png)
The Render panel provides a rendering widget to support real-time previewing functionality.

## View Operation

### Move View
Hold the blank space key and click the left mouse button to render mobile operation will adjust the position. 

### Scale View

Use the mouse wheel before and after rolling to standard zoom view rendering area

## Functionality

### Select

Hold the left mouse button and move, rendering area will follow the mouse to draw a rectangle, any contained in the rectangular control soymilk were selected.Select multiple controls can be done after the whole copy, delete operation or Settings, etc.

### Adjust

![](./res/drag_points.png)

* At the corners or the 1,2,4, or 5 points of reference as labelled above, you can use your mouse to adjust the size of the widget. You can also scale the widget by simultaneously pressing the Shift key and clicking on the widget to modify the widget to be uniform to scale.
* By selecting the point of reference as shown in the graphic as point 3, you can rotate the widget.
* Note that point 6 is an anchor point.


## Context Menu
### Add Object

![](./res/right_menu.png)

When you select a widget and add a widget through the context menu, Cocos Studio will add a widget to your currently selected widget. If you don't select a widget before you launching the context menu to add a widget, Cocos Studio will add the widget as a root widget's sub-widget.

### Layout

![](./res/widget_layout.png)

<table border="1" cellspacing="0" cellpadding="0" >
   <tr>
      <td>Center Alignment</td>
      <td>Aligns the selected widgets to the center.</td>
   </tr>
   <tr>
      <td>Left Alignment</td>
      <td>Aligns the selected widgets to the left.</td>
   </tr>
   <tr>
      <td>Right Alignment</td>
      <td>Aligns the selected widgets to the right.</td>
   </tr>
   <tr>
      <td>Top Alignment</td>
      <td>Aligns the selected widgets to the top.</td>
   </tr>
   <tr>
      <td>Bottom Alignment</td>
      <td>Aligns the selected widgets to the bottom.</td>
   </tr>
   <tr>
      <td>Horizontal Alignment</td>
      <td>Aligns the selected widgets horizontally.</td>
   </tr>
   <tr>
      <td>Vertical Alignment</td>
      <td>Aligns the selected widgets vertically.</td>
   </tr>
   <tr>
      <td>Original Alignment</td>
      <td>Reverts the selected widgets back to their original alignments.</td>
   </tr>
   <tr>
      <td></td>
   </tr>
</table>

### Delete Object

Deletes the selected widgets.
1.If no widget is selected, then the menu item will be disabled.

### Copy

Makes a copy of the selected widgets  
If no widget is selected, then the menu item will be disabled.

### Paste

Pastes the pre-copied widgets.
If no widgets were copied before, then the menu item will also be disabled.
