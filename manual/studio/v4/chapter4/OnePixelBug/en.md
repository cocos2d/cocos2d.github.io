# How to: Load SpriteSheet Correctly #

**Symptoms**
1 pixel gap appears after loading a sprite sheet with cocos. 

**Resolution**

Modify `ccConfig.h`

Change `#DEFINE CC_FIX_ARTIFACTS_BY_STRECHING_TEXEL 0 `

to `#define CC_FIX_ARTIFACTS_BY_STRECHING_TEXEL 1 `

