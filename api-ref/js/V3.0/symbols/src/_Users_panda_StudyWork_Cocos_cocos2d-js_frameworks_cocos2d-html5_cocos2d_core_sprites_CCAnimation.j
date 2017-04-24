<html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8"> <style>
	.KEYW {color: #933;}
	.COMM {color: #bbb; font-style: italic;}
	.NUMB {color: #393;}
	.STRN {color: #393;}
	.REGX {color: #339;}
	.line {border-right: 1px dotted #666; color: #666; font-style: normal;}
	</style></head><body><pre><span class='line'>  1</span> <span class="COMM">/****************************************************************************
<span class='line'>  2</span>  Copyright (c) 2008-2010 Ricardo Quesada
<span class='line'>  3</span>  Copyright (c) 2011-2012 cocos2d-x.org
<span class='line'>  4</span>  Copyright (c) 2013-2014 Chukong Technologies Inc.
<span class='line'>  5</span> 
<span class='line'>  6</span>  http://www.cocos2d-x.org
<span class='line'>  7</span> 
<span class='line'>  8</span>  Permission is hereby granted, free of charge, to any person obtaining a copy
<span class='line'>  9</span>  of this software and associated documentation files (the "Software"), to deal
<span class='line'> 10</span>  in the Software without restriction, including without limitation the rights
<span class='line'> 11</span>  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
<span class='line'> 12</span>  copies of the Software, and to permit persons to whom the Software is
<span class='line'> 13</span>  furnished to do so, subject to the following conditions:
<span class='line'> 14</span> 
<span class='line'> 15</span>  The above copyright notice and this permission notice shall be included in
<span class='line'> 16</span>  all copies or substantial portions of the Software.
<span class='line'> 17</span> 
<span class='line'> 18</span>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
<span class='line'> 19</span>  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
<span class='line'> 20</span>  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
<span class='line'> 21</span>  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
<span class='line'> 22</span>  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
<span class='line'> 23</span>  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
<span class='line'> 24</span>  THE SOFTWARE.
<span class='line'> 25</span>  ****************************************************************************/</span><span class="WHIT">
<span class='line'> 26</span> 
<span class='line'> 27</span> </span><span class="COMM">/**
<span class='line'> 28</span>  * &lt;p>
<span class='line'> 29</span>  *    cc.AnimationFrame
<span class='line'> 30</span>  *    A frame of the animation. It contains information like:
<span class='line'> 31</span>  *       - sprite frame name
<span class='line'> 32</span>  *       - # of delay units.
<span class='line'> 33</span>  *       - offset
<span class='line'> 34</span>  * &lt;/p>
<span class='line'> 35</span>  * @class
<span class='line'> 36</span>  * @extends cc.Class
<span class='line'> 37</span>  * @param spriteFrame
<span class='line'> 38</span>  * @param delayUnits
<span class='line'> 39</span>  * @param userInfo
<span class='line'> 40</span>  * @returns {AnimationFrame}
<span class='line'> 41</span>  */</span><span class="WHIT">
<span class='line'> 42</span> </span><span class="NAME">cc.AnimationFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Class.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.AnimationFrame# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 43</span> </span><span class="WHIT">    </span><span class="NAME">_spriteFrame</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 44</span> </span><span class="WHIT">    </span><span class="NAME">_delayPerUnit</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 45</span> </span><span class="WHIT">    </span><span class="NAME">_userInfo</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 46</span> 
<span class='line'> 47</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delayUnits</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">userInfo</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 48</span> </span><span class="WHIT">        </span><span class="NAME">this._spriteFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">spriteFrame</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 49</span> </span><span class="WHIT">        </span><span class="NAME">this._delayPerUnit</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">delayUnits</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 50</span> </span><span class="WHIT">        </span><span class="NAME">this._userInfo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">userInfo</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 51</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 52</span> 
<span class='line'> 53</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 54</span>      * Create a new animation frame and copy all contents into it
<span class='line'> 55</span>      * @returns {AnimationFrame}
<span class='line'> 56</span>      */</span><span class="WHIT">
<span class='line'> 57</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 58</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 59</span> </span><span class="WHIT">        </span><span class="NAME">frame.initWithSpriteFrame</span><span class="PUNC">(</span><span class="NAME">this._spriteFrame.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._delayPerUnit</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._userInfo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 60</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">frame</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 61</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 62</span> 
<span class='line'> 63</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 64</span>      * Create a new animation frame and copy all contents into it
<span class='line'> 65</span>      * @returns {AnimationFrame}
<span class='line'> 66</span>      */</span><span class="WHIT">
<span class='line'> 67</span> </span><span class="WHIT">    </span><span class="NAME">copyWithZone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pZone</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 68</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.clone</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 70</span> 
<span class='line'> 71</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 72</span>      * Create a new animation frame and copy all contents into it
<span class='line'> 73</span>      * @returns {AnimationFrame}
<span class='line'> 74</span>      */</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="WHIT">    </span><span class="NAME">copy</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pZone</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 76</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">newFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 77</span> </span><span class="WHIT">        </span><span class="NAME">newFrame.initWithSpriteFrame</span><span class="PUNC">(</span><span class="NAME">this._spriteFrame.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._delayPerUnit</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._userInfo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 78</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">newFrame</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 79</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 80</span> 
<span class='line'> 81</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 82</span>      * initializes the animation frame with a spriteframe, number of delay units and a notification user info
<span class='line'> 83</span>      * @param {cc.SpriteFrame} spriteFrame
<span class='line'> 84</span>      * @param {Number} delayUnits
<span class='line'> 85</span>      * @param {object} userInfo
<span class='line'> 86</span>      */</span><span class="WHIT">
<span class='line'> 87</span> </span><span class="WHIT">    </span><span class="NAME">initWithSpriteFrame</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delayUnits</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">userInfo</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 88</span> </span><span class="WHIT">        </span><span class="NAME">this._spriteFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">spriteFrame</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 89</span> </span><span class="WHIT">        </span><span class="NAME">this._delayPerUnit</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">delayUnits</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 90</span> </span><span class="WHIT">        </span><span class="NAME">this._userInfo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">userInfo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 91</span> 
<span class='line'> 92</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 93</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 94</span> 
<span class='line'> 95</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 96</span>      * Returns sprite frame to be used
<span class='line'> 97</span>      * @return {cc.SpriteFrame}
<span class='line'> 98</span>      */</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">    </span><span class="NAME">getSpriteFrame</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>100</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._spriteFrame</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>101</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>102</span> 
<span class='line'>103</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>104</span>      * Sets sprite frame to be used
<span class='line'>105</span>      * @param {cc.SpriteFrame} spriteFrame
<span class='line'>106</span>      */</span><span class="WHIT">
<span class='line'>107</span> </span><span class="WHIT">    </span><span class="NAME">setSpriteFrame</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>108</span> </span><span class="WHIT">        </span><span class="NAME">this._spriteFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">spriteFrame</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>109</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>110</span> 
<span class='line'>111</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>112</span>      * Returns how many units of time the frame takes getter
<span class='line'>113</span>      * @return {Number}
<span class='line'>114</span>      */</span><span class="WHIT">
<span class='line'>115</span> </span><span class="WHIT">    </span><span class="NAME">getDelayUnits</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>116</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._delayPerUnit</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>118</span> 
<span class='line'>119</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>120</span>      * Sets how many units of time the frame takes setter
<span class='line'>121</span>      * @param delayUnits
<span class='line'>122</span>      */</span><span class="WHIT">
<span class='line'>123</span> </span><span class="WHIT">    </span><span class="NAME">setDelayUnits</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">delayUnits</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>124</span> </span><span class="WHIT">        </span><span class="NAME">this._delayPerUnit</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">delayUnits</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>125</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>126</span> 
<span class='line'>127</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>128</span>      * Returns the user custom information
<span class='line'>129</span>      * @return {object}
<span class='line'>130</span>      */</span><span class="WHIT">
<span class='line'>131</span> </span><span class="WHIT">    </span><span class="NAME">getUserInfo</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>132</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._userInfo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>133</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>134</span> 
<span class='line'>135</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>136</span>      * Sets the user custom information
<span class='line'>137</span>      * @param {object} userInfo
<span class='line'>138</span>      */</span><span class="WHIT">
<span class='line'>139</span> </span><span class="WHIT">    </span><span class="NAME">setUserInfo</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">userInfo</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>140</span> </span><span class="WHIT">        </span><span class="NAME">this._userInfo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">userInfo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>141</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>142</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>143</span> 
<span class='line'>144</span> </span><span class="COMM">/**
<span class='line'>145</span>  * Creates an animation frame.
<span class='line'>146</span>  * @deprecated since v3.0, please use the new construction instead
<span class='line'>147</span>  * @param {cc.SpriteFrame} spriteFrame
<span class='line'>148</span>  * @param {Number} delayUnits
<span class='line'>149</span>  * @param {object} userInfo
<span class='line'>150</span>  * @see cc.AnimationFrame
<span class='line'>151</span>  */</span><span class="WHIT">
<span class='line'>152</span> </span><span class="NAME">cc.AnimationFrame.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">,</span><span class="NAME">delayUnits</span><span class="PUNC">,</span><span class="NAME">userInfo</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>153</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">,</span><span class="NAME">delayUnits</span><span class="PUNC">,</span><span class="NAME">userInfo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>154</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>155</span> 
<span class='line'>156</span> </span><span class="COMM">/**
<span class='line'>157</span>  * &lt;p>
<span class='line'>158</span>  *     A cc.Animation object is used to perform animations on the cc.Sprite objects.&lt;br/>
<span class='line'>159</span>  *     &lt;br/>
<span class='line'>160</span>  *      The cc.Animation object contains cc.SpriteFrame objects, and a possible delay between the frames. &lt;br/>
<span class='line'>161</span>  *      You can animate a cc.Animation object by using the cc.Animate action.
<span class='line'>162</span>  * &lt;/p>
<span class='line'>163</span>  * @class
<span class='line'>164</span>  * @extends cc.Class
<span class='line'>165</span>  * @param {Array} frames
<span class='line'>166</span>  * @param {Number} delay
<span class='line'>167</span>  * @param {Number} [loops=1]
<span class='line'>168</span>  *
<span class='line'>169</span>  * @example
<span class='line'>170</span>  * // 1. Creates an empty animation
<span class='line'>171</span>  * var animation1 = new cc.Animation();
<span class='line'>172</span>  *
<span class='line'>173</span>  * // 2. Create an animation with sprite frames, delay and loops.
<span class='line'>174</span>  * var spriteFrames = [];
<span class='line'>175</span>  * var frame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
<span class='line'>176</span>  * spriteFrames.push(frame);
<span class='line'>177</span>  * var animation1 = new cc.Animation(spriteFrames);
<span class='line'>178</span>  * var animation2 = new cc.Animation(spriteFrames, 0.2);
<span class='line'>179</span>  * var animation2 = new cc.Animation(spriteFrames, 0.2, 2);
<span class='line'>180</span>  *
<span class='line'>181</span>  * // 3. Create an animation with animation frames, delay and loops.
<span class='line'>182</span>  * var animationFrames = [];
<span class='line'>183</span>  * var frame =  new cc.AnimationFrame();
<span class='line'>184</span>  * animationFrames.push(frame);
<span class='line'>185</span>  * var animation1 = new cc.Animation(animationFrames);
<span class='line'>186</span>  * var animation2 = new cc.Animation(animationFrames, 0.2);
<span class='line'>187</span>  * var animation3 = new cc.Animation(animationFrames, 0.2, 2);
<span class='line'>188</span>  *
<span class='line'>189</span>  * //create an animate with this animation
<span class='line'>190</span>  * var action = cc.animate(animation1);
<span class='line'>191</span>  *
<span class='line'>192</span>  * //run animate
<span class='line'>193</span>  * sprite.runAction(action);
<span class='line'>194</span>  */</span><span class="WHIT">
<span class='line'>195</span> </span><span class="NAME">cc.Animation</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Class.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Animation# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>196</span> </span><span class="WHIT">    </span><span class="NAME">_frames</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>197</span> </span><span class="WHIT">    </span><span class="NAME">_loops</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>198</span> </span><span class="WHIT">    </span><span class="NAME">_restoreOriginalFrame</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>199</span> </span><span class="WHIT">    </span><span class="NAME">_duration</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>200</span> </span><span class="WHIT">    </span><span class="NAME">_delayPerUnit</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>201</span> </span><span class="WHIT">    </span><span class="NAME">_totalDelayUnits</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>202</span> 
<span class='line'>203</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delay</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>204</span> </span><span class="WHIT">        </span><span class="NAME">this._frames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>205</span> 
<span class='line'>206</span> </span><span class="WHIT">		</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">frames</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>207</span> </span><span class="WHIT">			</span><span class="NAME">this.initWithSpriteFrames</span><span class="PUNC">(</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>208</span> </span><span class="WHIT">		</span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>209</span> </span><span class="WHIT">			</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frame0</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frames</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>210</span> </span><span class="WHIT">			</span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">frame0</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>211</span> </span><span class="WHIT">				</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">frame0</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">cc.SpriteFrame</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>212</span> </span><span class="WHIT">					</span><span class="COMM">//init with sprite frames , delay and loops.</span><span class="WHIT">
<span class='line'>213</span> </span><span class="WHIT">					</span><span class="NAME">this.initWithSpriteFrames</span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delay</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>214</span> </span><span class="WHIT">				</span><span class="PUNC">}</span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">frame0</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>215</span> </span><span class="WHIT">					</span><span class="COMM">//init with sprite frames , delay and loops.</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">					</span><span class="NAME">this.initWithAnimationFrames</span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delay</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>217</span> </span><span class="WHIT">				</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>218</span> </span><span class="WHIT">			</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>219</span> </span><span class="WHIT">		</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>220</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>221</span> 
<span class='line'>222</span> </span><span class="WHIT">    </span><span class="COMM">// attributes</span><span class="WHIT">
<span class='line'>223</span> 
<span class='line'>224</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>225</span>      * Returns the array of animation frames
<span class='line'>226</span>      * @return {Array}
<span class='line'>227</span>      */</span><span class="WHIT">
<span class='line'>228</span> </span><span class="WHIT">    </span><span class="NAME">getFrames</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>229</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._frames</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>230</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>231</span> 
<span class='line'>232</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>233</span>      * Sets array of animation frames
<span class='line'>234</span>      * @param {Array} frames
<span class='line'>235</span>      */</span><span class="WHIT">
<span class='line'>236</span> </span><span class="WHIT">    </span><span class="NAME">setFrames</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>237</span> </span><span class="WHIT">        </span><span class="NAME">this._frames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frames</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>238</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>239</span> 
<span class='line'>240</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>241</span>      * Adds a frame to a cc.Animation, the frame will be added with one "delay unit".
<span class='line'>242</span>      * @param {cc.SpriteFrame} frame
<span class='line'>243</span>      */</span><span class="WHIT">
<span class='line'>244</span> </span><span class="WHIT">    </span><span class="NAME">addSpriteFrame</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">frame</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>245</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">animFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>246</span> 
<span class='line'>247</span> </span><span class="WHIT">        </span><span class="NAME">animFrame.initWithSpriteFrame</span><span class="PUNC">(</span><span class="NAME">frame</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>248</span> </span><span class="WHIT">        </span><span class="NAME">this._frames.push</span><span class="PUNC">(</span><span class="NAME">animFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>249</span> </span><span class="WHIT">        </span><span class="COMM">// update duration</span><span class="WHIT">
<span class='line'>250</span> </span><span class="WHIT">        </span><span class="NAME">this._totalDelayUnits</span><span class="PUNC">++</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>251</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>252</span> 
<span class='line'>253</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>254</span>      * Adds a frame with an image filename. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit".
<span class='line'>255</span>      * @param {String} fileName
<span class='line'>256</span>      */</span><span class="WHIT">
<span class='line'>257</span> </span><span class="WHIT">    </span><span class="NAME">addSpriteFrameWithFile</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>258</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">texture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.textureCache.addImage</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>259</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.rect</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>260</span> </span><span class="WHIT">        </span><span class="NAME">rect.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">texture.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>261</span> </span><span class="WHIT">        </span><span class="NAME">rect.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">texture.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>262</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.SpriteFrame.create</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>263</span> </span><span class="WHIT">        </span><span class="NAME">this.addSpriteFrame</span><span class="PUNC">(</span><span class="NAME">frame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>264</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>265</span> 
<span class='line'>266</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>267</span>      * Adds a frame with a texture and a rect. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit".
<span class='line'>268</span>      * @param {cc.Texture2D} texture
<span class='line'>269</span>      * @param {cc.Rect} rect
<span class='line'>270</span>      */</span><span class="WHIT">
<span class='line'>271</span> </span><span class="WHIT">    </span><span class="NAME">addSpriteFrameWithTexture</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>272</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">pFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.SpriteFrame.create</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>273</span> </span><span class="WHIT">        </span><span class="NAME">this.addSpriteFrame</span><span class="PUNC">(</span><span class="NAME">pFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>274</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>275</span> 
<span class='line'>276</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>277</span>      * Initializes a cc.Animation with cc.AnimationFrame, do not call this method yourself, please pass parameters to constructor to initialize.
<span class='line'>278</span>      * @param {Array} arrayOfAnimationFrames
<span class='line'>279</span>      * @param {Number} delayPerUnit
<span class='line'>280</span>      * @param {Number} [loops=1]
<span class='line'>281</span>      */</span><span class="WHIT">
<span class='line'>282</span> </span><span class="WHIT">    </span><span class="NAME">initWithAnimationFrames</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">arrayOfAnimationFrames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delayPerUnit</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>283</span> </span><span class="WHIT">        </span><span class="NAME">cc.arrayVerifyType</span><span class="PUNC">(</span><span class="NAME">arrayOfAnimationFrames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>284</span> 
<span class='line'>285</span> </span><span class="WHIT">        </span><span class="NAME">this._delayPerUnit</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">delayPerUnit</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>286</span> </span><span class="WHIT">        </span><span class="NAME">this._loops</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>287</span> </span><span class="WHIT">        </span><span class="NAME">this._totalDelayUnits</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>288</span> 
<span class='line'>289</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locFrames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._frames</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>290</span> </span><span class="WHIT">        </span><span class="NAME">locFrames.length</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>291</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">arrayOfAnimationFrames.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>292</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">animFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arrayOfAnimationFrames</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>293</span> </span><span class="WHIT">            </span><span class="NAME">locFrames.push</span><span class="PUNC">(</span><span class="NAME">animFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>294</span> </span><span class="WHIT">            </span><span class="NAME">this._totalDelayUnits</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">animFrame.getDelayUnits</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>295</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>296</span> 
<span class='line'>297</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>298</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>299</span> 
<span class='line'>300</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>301</span>      * Clone the current animation
<span class='line'>302</span>      * @return {cc.Animation}
<span class='line'>303</span>      */</span><span class="WHIT">
<span class='line'>304</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>305</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">animation</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Animation</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>306</span> </span><span class="WHIT">        </span><span class="NAME">animation.initWithAnimationFrames</span><span class="PUNC">(</span><span class="NAME">this._copyFrames</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._delayPerUnit</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._loops</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>307</span> </span><span class="WHIT">        </span><span class="NAME">animation.setRestoreOriginalFrame</span><span class="PUNC">(</span><span class="NAME">this._restoreOriginalFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>308</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">animation</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>309</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>310</span> 
<span class='line'>311</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>312</span>      * Clone the current animation
<span class='line'>313</span>      * @return {cc.Animation}
<span class='line'>314</span>      */</span><span class="WHIT">
<span class='line'>315</span> </span><span class="WHIT">    </span><span class="NAME">copyWithZone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pZone</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>316</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">pCopy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Animation</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>317</span> </span><span class="WHIT">        </span><span class="NAME">pCopy.initWithAnimationFrames</span><span class="PUNC">(</span><span class="NAME">this._copyFrames</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._delayPerUnit</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._loops</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>318</span> </span><span class="WHIT">        </span><span class="NAME">pCopy.setRestoreOriginalFrame</span><span class="PUNC">(</span><span class="NAME">this._restoreOriginalFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>319</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">pCopy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>320</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>321</span> 
<span class='line'>322</span> </span><span class="WHIT">    </span><span class="NAME">_copyFrames</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>323</span> </span><span class="WHIT">       </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">copyFrames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>324</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">this._frames.length</span><span class="PUNC">;</span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>325</span> </span><span class="WHIT">            </span><span class="NAME">copyFrames.push</span><span class="PUNC">(</span><span class="NAME">this._frames</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>326</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">copyFrames</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>327</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>328</span> 
<span class='line'>329</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>330</span>      * Clone the current animation
<span class='line'>331</span>      * @param pZone
<span class='line'>332</span>      * @returns {cc.Animation}
<span class='line'>333</span>      */</span><span class="WHIT">
<span class='line'>334</span> </span><span class="WHIT">    </span><span class="NAME">copy</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pZone</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>335</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.copyWithZone</span><span class="PUNC">(</span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>336</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>337</span> 
<span class='line'>338</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>339</span>      * Returns how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ...
<span class='line'>340</span>      * @return {Number}
<span class='line'>341</span>      */</span><span class="WHIT">
<span class='line'>342</span> </span><span class="WHIT">    </span><span class="NAME">getLoops</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>343</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._loops</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>344</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>345</span> 
<span class='line'>346</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>347</span>      * Sets how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ...
<span class='line'>348</span>      * @param {Number} value
<span class='line'>349</span>      */</span><span class="WHIT">
<span class='line'>350</span> </span><span class="WHIT">    </span><span class="NAME">setLoops</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">value</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>351</span> </span><span class="WHIT">        </span><span class="NAME">this._loops</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">value</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>352</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>353</span> 
<span class='line'>354</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>355</span>      * Sets whether or not it shall restore the original frame when the animation finishes
<span class='line'>356</span>      * @param {Boolean} restOrigFrame
<span class='line'>357</span>      */</span><span class="WHIT">
<span class='line'>358</span> </span><span class="WHIT">    </span><span class="NAME">setRestoreOriginalFrame</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">restOrigFrame</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>359</span> </span><span class="WHIT">        </span><span class="NAME">this._restoreOriginalFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">restOrigFrame</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>360</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>361</span> 
<span class='line'>362</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>363</span>      * Returns whether or not it shall restore the original frame when the animation finishes
<span class='line'>364</span>      * @return {Boolean}
<span class='line'>365</span>      */</span><span class="WHIT">
<span class='line'>366</span> </span><span class="WHIT">    </span><span class="NAME">getRestoreOriginalFrame</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>367</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._restoreOriginalFrame</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>368</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>369</span> 
<span class='line'>370</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>371</span>      * Returns duration in seconds of the whole animation. It is the result of totalDelayUnits * delayPerUnit
<span class='line'>372</span>      * @return {Number}
<span class='line'>373</span>      */</span><span class="WHIT">
<span class='line'>374</span> </span><span class="WHIT">    </span><span class="NAME">getDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>375</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._totalDelayUnits</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">this._delayPerUnit</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>376</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>377</span> 
<span class='line'>378</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>379</span>      * Returns delay in seconds of the "delay unit"
<span class='line'>380</span>      * @return {Number}
<span class='line'>381</span>      */</span><span class="WHIT">
<span class='line'>382</span> </span><span class="WHIT">    </span><span class="NAME">getDelayPerUnit</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>383</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._delayPerUnit</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>384</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>385</span> 
<span class='line'>386</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>387</span>      * Sets delay in seconds of the "delay unit"
<span class='line'>388</span>      * @param {Number} delayPerUnit
<span class='line'>389</span>      */</span><span class="WHIT">
<span class='line'>390</span> </span><span class="WHIT">    </span><span class="NAME">setDelayPerUnit</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">delayPerUnit</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>391</span> </span><span class="WHIT">        </span><span class="NAME">this._delayPerUnit</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">delayPerUnit</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>392</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>393</span> 
<span class='line'>394</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>395</span>      * Returns total delay units of the cc.Animation.
<span class='line'>396</span>      * @return {Number}
<span class='line'>397</span>      */</span><span class="WHIT">
<span class='line'>398</span> </span><span class="WHIT">    </span><span class="NAME">getTotalDelayUnits</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>399</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._totalDelayUnits</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>400</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>401</span> 
<span class='line'>402</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>403</span>      * Initializes a cc.Animation with frames and a delay between frames, do not call this method yourself, please pass parameters to constructor to initialize.
<span class='line'>404</span>      * @param {Array} frames
<span class='line'>405</span>      * @param {Number} delay
<span class='line'>406</span>      * @param {Number} [loops=1]
<span class='line'>407</span>      */</span><span class="WHIT">
<span class='line'>408</span> </span><span class="WHIT">    </span><span class="NAME">initWithSpriteFrames</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delay</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>409</span> </span><span class="WHIT">        </span><span class="NAME">cc.arrayVerifyType</span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SpriteFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>410</span> </span><span class="WHIT">        </span><span class="NAME">this._loops</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>411</span> </span><span class="WHIT">        </span><span class="NAME">this._delayPerUnit</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">delay</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>412</span> </span><span class="WHIT">        </span><span class="NAME">this._totalDelayUnits</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>413</span> 
<span class='line'>414</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locFrames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._frames</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>415</span> </span><span class="WHIT">        </span><span class="NAME">locFrames.length</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>416</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>417</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">frames.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>418</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frames</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>419</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">animFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>420</span> </span><span class="WHIT">                </span><span class="NAME">animFrame.initWithSpriteFrame</span><span class="PUNC">(</span><span class="NAME">frame</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>421</span> </span><span class="WHIT">                </span><span class="NAME">locFrames.push</span><span class="PUNC">(</span><span class="NAME">animFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>422</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>423</span> </span><span class="WHIT">            </span><span class="NAME">this._totalDelayUnits</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frames.length</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>424</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>425</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>426</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>427</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>428</span>      * &lt;p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
<span class='line'>429</span>      * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
<span class='line'>430</span>      * This is a hack, and should be removed once JSB fixes the retain/release bug&lt;br/>
<span class='line'>431</span>      * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.&lt;br/>
<span class='line'>432</span>      * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,&lt;br/>
<span class='line'>433</span>      * when you want to use it later, a "Invalid Native Object" error will be raised.&lt;br/>
<span class='line'>434</span>      * The retain function can increase a reference count for the native object to avoid it being released,&lt;br/>
<span class='line'>435</span>      * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.&lt;br/>
<span class='line'>436</span>      * retain and release function call should be paired in developer's game code.&lt;/p>
<span class='line'>437</span>      * @function
<span class='line'>438</span>      * @see cc.Animation#release
<span class='line'>439</span>      */</span><span class="WHIT">
<span class='line'>440</span> </span><span class="WHIT">    </span><span class="NAME">retain</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>441</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>442</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>443</span>      * &lt;p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
<span class='line'>444</span>      * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
<span class='line'>445</span>      * This is a hack, and should be removed once JSB fixes the retain/release bug&lt;br/>
<span class='line'>446</span>      * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.&lt;br/>
<span class='line'>447</span>      * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,&lt;br/>
<span class='line'>448</span>      * when you want to use it later, a "Invalid Native Object" error will be raised.&lt;br/>
<span class='line'>449</span>      * The retain function can increase a reference count for the native object to avoid it being released,&lt;br/>
<span class='line'>450</span>      * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.&lt;br/>
<span class='line'>451</span>      * retain and release function call should be paired in developer's game code.&lt;/p>
<span class='line'>452</span>      * @function
<span class='line'>453</span>      * @see cc.Animation#retain
<span class='line'>454</span>      */</span><span class="WHIT">
<span class='line'>455</span> </span><span class="WHIT">    </span><span class="NAME">release</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>456</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>457</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>458</span> 
<span class='line'>459</span> </span><span class="COMM">/**
<span class='line'>460</span>  * Creates an animation.
<span class='line'>461</span>  * @deprecated since v3.0, please use new construction instead
<span class='line'>462</span>  * @see cc.Animation
<span class='line'>463</span>  * @param {Array} frames
<span class='line'>464</span>  * @param {Number} delay
<span class='line'>465</span>  * @param {Number} [loops=1]
<span class='line'>466</span>  * @return {cc.Animation}
<span class='line'>467</span>  */</span><span class="WHIT">
<span class='line'>468</span> </span><span class="NAME">cc.Animation.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delay</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>469</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Animation</span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">delay</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">loops</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>470</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>471</span> 
<span class='line'>472</span> </span><span class="COMM">/**
<span class='line'>473</span>  * @deprecated since v3.0, please use new construction instead
<span class='line'>474</span>  * @see cc.Animation
<span class='line'>475</span>  * @type {Function}
<span class='line'>476</span>  */</span><span class="WHIT">
<span class='line'>477</span> </span><span class="NAME">cc.Animation.createWithAnimationFrames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Animation.create</span><span class="PUNC">;</span></pre></body></html>