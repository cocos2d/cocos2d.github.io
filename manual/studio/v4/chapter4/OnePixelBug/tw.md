# **如何解決引擎載入合圖會有1圖元間隔？** #

修改 ccConfig.h

將#DEFINE CC_FIX_ARTIFACTS_BY_STRECHING_TEXEL 0 

改為#define CC_FIX_ARTIFACTS_BY_STRECHING_TEXEL 1 
