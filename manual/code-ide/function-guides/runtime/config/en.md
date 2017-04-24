Instructions of project root directory config.json file
===
---
This file represents essential information about your game project, it must be configured before running your application.

Structure of the config.json file
===
---
Here shows the general structure with an example of the config.json file.

	{
	
    "init_cfg":{
       "isLandscape": true,
       "isWindowTop": false,
       "name": "HelloLua",
       "width": 960,
       "height": 640,
       "entry": "src/main.lua",
	   "consolePort": 6010,
       "debugPort": 5086,
       "forwardConsolePort": 10088,
       "forwardUploadPort": 10090,
       "forwardDebugPort": 10086
    },
    "simulator_screen_size": [
        {
            "title": "iPhone 3Gs (480x320)",
            "width": 480,
            "height": 320
        },
        {
            "title": "iPhone 4 (960x640)",
            "width": 960,
            "height": 640
        },
        ....
    ]
	}
---	

##"init_cfg"##

####"isLandscape"####

boolean

Screen orientation, if true, the application orientation will be "landscape", otherwise it will be "portrait"

####"isWindowTop"####

boolean

Keep window on top, if true, the application window will be kept on top

####"entry"####

string

The entry script file, the path is relative to the project root directory, e.g.: "src/main.lua"

####"name"####
string

Project name which will be shown as the application window's title

**Note: This configuration is only valid for desktop system**

####"width"####

unsigned int

Application window's width

**Note: This configuration is only valid for desktop system**

####"height"####

unsigned int

Application window's height

**Note: This configuration is only valid for desktop system**

####"consolePort"####

unsigned int

Console's port number

**Note: This configuration is only valid for desktop system**

####"debugPort"####

unsigned int

The port number for debugging

**Note: This configuration is only valid for desktop system**

###Note: All port configurations are only valid for desktop systems###

---
##simulator_screen_size##

Configure multiple resolution sizes for different simulators, you can add or delete items in runtime's view menu

**Note: This configuration is only valid for desktop system**

####"title"####

string

The simulator title, e.g.: "iPhone 3Gs (480x320)"

####"width"####

unsigned int

The designed resolution width

####"height"####

unsigned int

The designed resolution height

---