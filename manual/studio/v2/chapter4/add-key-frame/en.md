# 4.1 Keyframe


Frame - the smallest unit of animation a single image

Keyframe - like each scene in a comic book, key frame is the frame at the most critical point.

#### When should I add keyframes

Take a look at  "footprint" as an example to illustrate how to create keyframes

1.  First, we want to add four footprints, placing them at a reasonable initial position

2.  achieve footsteps process that requires four footprints appear and disappear alternately, then assume the footprints appear to disappear need 10 frame, then we can think that the first step to set keyframes between 0 and 10, the second in the between 10 and 20, and so on. Why the same space to set two keyframes? The reason is to make the footprints appear gradually disappear from the animation, you need to achieve and last two keyframes.

#### Add keyframes

Keyframe records a movement or change, set a keyframe animation state is essential.

There are four ways to add keyframes:

(1) in the timeline scale online press the right mouse button and select "Add Frame" to add;

(2) Click "Add Frame" button![image](res/image119.jpg);

(3) press the left mouse button on the timeline, press the keyboard 
keys K key, add keyframes.

(4) use automatic recording frame function.

#### Automatic recording frame

Cocos Studio provides a convenient way to record keyframes: Automatic recording frame. When you check this option, move the scale line to the desired position, adjust the controls until the desired effect, the system will record all the controls and properties change state at the moment of the line for your keyframes.

When using the automatic recording frame, there is one caveat: be sure to move the scale line to the desired position, and then change the state of the control.

#### Editing keyframes

You can perform the following operations on a single key frame: move around, copy, cut, paste, delete.

You can also select multiple frames and perform the above function at the same time.
