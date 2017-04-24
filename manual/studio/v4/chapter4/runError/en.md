# How to fix cocos run -p web error#

### Symptom 1###
If the project created based on Framework 3.6 calls cocos run-p web with Framework 3.9, there might be error message. 

**Solution**: Change the Output Directory to "simulator". In Framework 3.6, the Output Directory for lua win32 is "runtime", Framework 3.9 has changed the directory to "simulator".   

### Symptom 2###
Cannot select a version of Visual Studio.

**Solution**: Add --vs parameter in command line. For example, VS2015 will be forced to use with the command --vs 2015. 

### Symptom 3###
If you have installed VS2013 and VS2015 at the same time, compile error messages might be displayed on Framework 3.6 and versions before that. 

**Solution**: Please install Framework 3.9. In Framework 3.9, appropriate VS version will be selected according to the engine's version, for Framework 3.9 has updated the console command logic. 

