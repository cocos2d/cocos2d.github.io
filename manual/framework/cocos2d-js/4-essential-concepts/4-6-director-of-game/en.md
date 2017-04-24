# 4.6 Director of Game

## 4.6.1 Concept

If you like movies, I'm sure you can name some of your favourite directors. Even if they don't actually show up in their movies, they give a life to a movie. The director is the most important role for making a movie.

So what's the director of a game? Of course as a developer, we can say that you are the real director, but you also need an executive director to accomplish everything you want in the game engine. This is exactly the responsibility of the director in Cocos2d-JS, your best friend for making great games.

More specifically, the director in Cocos2d-JS is the object which sets up the running environment for the game, controls the main game loop and manages transitions between scenes. This chapter will introduce you the main tasks of the director and how the director works.

## 4.6.2 The task of the director

The director object is represented by `cc.director` in Cocos2d-JS. Here are its main tasks:

- **Setting up the environment**

    First of all, before entering the game, the director will set up the working environment for your game:

    1. Set up the context of the view, including the projection, the pixel format, etc.
    2. Set up the frame rate.
    3. Initialize the scheduler, action manager and event manager for the game.
    4. Initialize the texture cache and the renderer.
    5. Set up other variables of the director with default values.

- **Running the main loop**
    
    The basic theory of a video game is pretty much like the old school animations. For making an animation, the artists draw static images page by page which will then be shown one after another during a very short period, e.g. 1/24 second, each page is called a frame. 

    The video game is rendered in the same way, every 1/60 second, the program will draw an image(frame) to be displayed on the screen, this makes 60 frames per second. The render process of each frame calculates the correct transformation and other information of all the graphic elements in the running scene. They will then be rendered one by one to the screen. As the game progresses, each frame changes a little, resulting in a beautiful video game in front of your eyes.

    All the above is accomplished in `cc.director`'s main loop. Each iteration of the main loop draws a frame on the screen. Here is a detailed process during each frame.

    1. Calculate the time that has passed since the last frame, it's used to provide performance debug information.
    2. Make the scheduler run the scheduled tasks.
    3. Notify `cc.Director.EVENT_AFTER_UPDATE` event via `cc.eventManager`.
    4. Clear the game screen.
    5. Switch the running scene to the next one if needed.
    6. Traverse the running scene's content node and update their transform if needed, then send the render command to the renderer for each node.
    7. Notify `cc.Director.EVENT_AFTER_VISIT` event via `cc.eventManager`.
    8. The renderer executes all render command to draw the scene.
    9. Notify `cc.Director.EVENT_AFTER_DRAW` event via `cc.eventManager`.
    10. Increase the global total frames by one.

    Besides, `cc.director` also provides some functions to control the main loop:

    1. Pause the main loop: `cc.director.pause()`
    2. Resume the main loop from pause: `cc.director.resume()`

- **Scene management**

    Another important task of `cc.director` is the scene management. The director can run only one scene at a time, but you can switch the running scene whenever you want. An average game often has several scenes for different use cases, and your program should control the scene flow via the APIs of `cc.director`:
    
    ```
    // Make cc.director to run the targeted scene
    cc.director.runScene(scene);

    // Acquire the running scene
    var scene = cc.director.getRunningScene();
    
    // Push a scene to the scenes stack 
    // and replace the running scene with it
    var scene = cc.director.pushScene(scene);

    // Pop the top scene of the scenes stack
    // and replace the running scene with the next top scene.
    cc.director.popScene();
    
    // Pop all the scenes in the scenes stack except the root scene
    // and replace the running scene with the root scene.
    cc.director.popToRootScene()
    ```

    Additionally, you can use `cc.TransitionScene` to switch between scenes with a transition effect.

    ```
    // Transition effect will take 2 seconds
    var transitionTime = 2;
    // Create the next scene
    var nextScene = new cc.Scene();
    // Create the transition scene with the next scene
    var transitionScene = new cc.TransitionProgressInOut(transitionTime, nextScene);
    // Run the transition scene
    cc.director.runScene(transitionScene);
    ```

    As you can see from the example above, we used a `cc.TransitionProgressInOut` transition effect because the base class `cc.TransitionScene` has no real effect. There are other built in transition effects available in Cocos2d-JS, you can refer to the API reference or the TransitionScene test case.

## 4.6.3 Settings and properties

As the director controls the running environment, there are also some settings and properties available:

```
// Gets whether the director is paused
var paused = cc.director.isPaused();

// Getter and setter for the animation interval setting
var interval = cc.director.getAnimationInterval();
cc.director.setAnimationInterval(value);

// Getter and setter for the content scale factor
var scale = cc.director.getContentScaleFactor();
cc.director.setContentScaleFactor(scaleFactor);

// Getter for the visible origin and size
var origin = cc.director.getVisibleOrigin();
var size = cc.director.getVisibleSize();

// Getter for the window size, the window size equals to the designed resolution size. The window size in pixel is the real pixel size of the game window
var winSize = cc.director.getWinSize();
var winSizeInPixel = cc.director.getWinSizeInPixels();

// Getter and setter for whether the debug stats are displayed or not 
var isDisplaying = cc.director.isDisplayStats();
cc.director.setDisplayStats(displayStats);

// Getter and setter for the view, it's referring to cc.view
cc.director.var view = cc.director.getOpenGLView();
cc.director.cc.director.setOpenGLView(openGLView);

// Getter and setter for the WebGL or OpenGL projection
// Available projections: cc.Director.PROJECTION_2D, cc.Director.PROJECTION_3D, cc.Director.PROJECTION_CUSTOM
cc.director.getProjection();
cc.director.setProjection(projection);
```

## 4.6.4 Scheduler

As mentioned before, the main loop will run the scheduled tasks in the scheduler. The scheduler is an internal system of the director, you can run several types of scheduled tasks for the nodes in the running scene. It manages when and how to execute these tasks.

There are several common ways to schedule a task, they are demonstrated in the following code snippet:

```
var node = new cc.Node();

// The update function of node will be executed every frame
node.scheduleUpdate();
// The callback function will be executed after each ´interval´ time, it will be repeated ´repeat´ times, and the task will be delayed by ´delay´ time
node.schedule(callback, interval, repeat, delay);
// The callback function will be executed once after ´delay´ time
node.scheduleOnce(callback, delay);
// Cancel the callback task
node.unschedule(callback);
// Cancel all schedule tasks of the node
node.unscheduleAllCallbacks();
```

**Notice**

- All scheduled callback functions will be executed with its target node as the execution context. This means the `this` object in the callback functions is referring to the target node.
- If the delay time equals to 0, the first scheduled callback will be executed during the next frame after the the execution of the schedule function.

## 4.6.5 Action manager

The action manager is another important internal system of the director. It manages all actions in the running scene, it invokes the `update` functions of all actions registered every frame. The details of the action system are described in the following documents.

## 4.6.6 Events of the director

There are several built in events that may be interesting for your game in the director.

- `cc.Director.EVENT_AFTER_DRAW`: This event is triggered after the render process of every frame.
- `cc.Director.EVENT_AFTER_VISIT`: This event is triggered after the scene graph visit of every frame.
- `cc.Director.EVENT_AFTER_UPDATE`: This event is triggered after the schedule tasks of every frame.
- `cc.Director.EVENT_PROJECTION_CHANGED`: This event is triggered after the change of projection of the director.