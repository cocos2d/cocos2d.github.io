# **如何解决引擎加载合图会有1像素间隔？** #

修改 ccConfig.h

将#DEFINE CC_FIX_ARTIFACTS_BY_STRECHING_TEXEL 0 

改为#define CC_FIX_ARTIFACTS_BY_STRECHING_TEXEL 1 