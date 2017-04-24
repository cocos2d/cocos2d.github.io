<html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8"> <style>
	.KEYW {color: #933;}
	.COMM {color: #bbb; font-style: italic;}
	.NUMB {color: #393;}
	.STRN {color: #393;}
	.REGX {color: #339;}
	.line {border-right: 1px dotted #666; color: #666; font-style: normal;}
	</style></head><body><pre><span class='line'>  1</span> <span class="COMM">/****************************************************************************
<span class='line'>  2</span>  Copyright (c) 2010-2012 cocos2d-x.org
<span class='line'>  3</span>  Copyright (c) 2008-2010 Ricardo Quesada
<span class='line'>  4</span>  Copyright (c) 2011      Zynga Inc.
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
<span class='line'> 26</span> </span><span class="COMM">/**
<span class='line'> 27</span>  * A tag constant for identifying fade scenes
<span class='line'> 28</span>  * @constant
<span class='line'> 29</span>  * @type Number
<span class='line'> 30</span>  */</span><span class="WHIT">
<span class='line'> 31</span> </span><span class="NAME">cc.SCENE_FADE</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">4208917214</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 32</span> 
<span class='line'> 33</span> </span><span class="COMM">/**
<span class='line'> 34</span>  * cc.TransitionEaseScene can ease the actions of the scene protocol.
<span class='line'> 35</span>  * @class
<span class='line'> 36</span>  * @extends cc.Class
<span class='line'> 37</span>  */</span><span class="WHIT">
<span class='line'> 38</span> </span><span class="NAME">cc.TransitionEaseScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Class.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionEaseScene# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 39</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 40</span>      * returns the Ease action that will be performed on a linear action.
<span class='line'> 41</span>      */</span><span class="WHIT">
<span class='line'> 42</span> </span><span class="WHIT">    </span><span class="NAME">easeActionWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 43</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 44</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 45</span> 
<span class='line'> 46</span> </span><span class="COMM">/**
<span class='line'> 47</span>  * horizontal orientation Type where the Left is nearer
<span class='line'> 48</span>  * @constant
<span class='line'> 49</span>  * @type Number
<span class='line'> 50</span>  */</span><span class="WHIT">
<span class='line'> 51</span> </span><span class="NAME">cc.TRANSITION_ORIENTATION_LEFT_OVER</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 52</span> </span><span class="COMM">/**
<span class='line'> 53</span>  * horizontal orientation type where the Right is nearer
<span class='line'> 54</span>  * @constant
<span class='line'> 55</span>  * @type Number
<span class='line'> 56</span>  */</span><span class="WHIT">
<span class='line'> 57</span> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 58</span> </span><span class="COMM">/**
<span class='line'> 59</span>  * vertical orientation type where the Up is nearer
<span class='line'> 60</span>  * @constant
<span class='line'> 61</span>  * @type Number
<span class='line'> 62</span>  */</span><span class="WHIT">
<span class='line'> 63</span> </span><span class="NAME">cc.TRANSITION_ORIENTATION_UP_OVER</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 64</span> </span><span class="COMM">/**
<span class='line'> 65</span>  * vertical orientation type where the Bottom is nearer
<span class='line'> 66</span>  * @constant
<span class='line'> 67</span>  * @type Number
<span class='line'> 68</span>  */</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="NAME">cc.TRANSITION_ORIENTATION_DOWN_OVER</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 70</span> 
<span class='line'> 71</span> </span><span class="COMM">/**
<span class='line'> 72</span>  * @class
<span class='line'> 73</span>  * @extends cc.Scene
<span class='line'> 74</span>  */</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="NAME">cc.TransitionScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Scene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionScene# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 76</span> </span><span class="WHIT">    </span><span class="NAME">_inScene</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 77</span> </span><span class="WHIT">    </span><span class="NAME">_outScene</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 78</span> </span><span class="WHIT">    </span><span class="NAME">_duration</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 79</span> </span><span class="WHIT">    </span><span class="NAME">_isInSceneOnTop</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 80</span> </span><span class="WHIT">    </span><span class="NAME">_isSendCleanupToScene</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 81</span> 
<span class='line'> 82</span> </span><span class="WHIT">    </span><span class="COMM">//private</span><span class="WHIT">
<span class='line'> 83</span> </span><span class="WHIT">    </span><span class="NAME">_setNewScene</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 84</span> </span><span class="WHIT">        </span><span class="NAME">this.unschedule</span><span class="PUNC">(</span><span class="NAME">this._setNewScene</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 85</span> </span><span class="WHIT">        </span><span class="COMM">// Before replacing, save the "send cleanup to scene"</span><span class="WHIT">
<span class='line'> 86</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">director</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 87</span> </span><span class="WHIT">        </span><span class="NAME">this._isSendCleanupToScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">director.isSendCleanupToScene</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 88</span> </span><span class="WHIT">        </span><span class="NAME">director.replaceScene</span><span class="PUNC">(</span><span class="NAME">this._inScene</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 89</span> 
<span class='line'> 90</span> </span><span class="WHIT">        </span><span class="COMM">// enable events while transitions</span><span class="WHIT">
<span class='line'> 91</span> </span><span class="WHIT">        </span><span class="NAME">director.getTouchDispatcher</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setDispatchEvents</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 92</span> </span><span class="WHIT">        </span><span class="COMM">// issue #267</span><span class="WHIT">
<span class='line'> 93</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 94</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 95</span> 
<span class='line'> 96</span> </span><span class="WHIT">    </span><span class="COMM">//protected</span><span class="WHIT">
<span class='line'> 97</span> </span><span class="WHIT">    </span><span class="NAME">_sceneOrder</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 98</span> </span><span class="WHIT">        </span><span class="NAME">this._isInSceneOnTop</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>100</span> 
<span class='line'>101</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>102</span>      * stuff gets drawn here
<span class='line'>103</span>      */</span><span class="WHIT">
<span class='line'>104</span> </span><span class="WHIT">    </span><span class="NAME">draw</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>105</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._isInSceneOnTop</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>106</span> </span><span class="WHIT">            </span><span class="NAME">this._outScene.visit</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>107</span> </span><span class="WHIT">            </span><span class="NAME">this._inScene.visit</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>108</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>109</span> </span><span class="WHIT">            </span><span class="NAME">this._inScene.visit</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>110</span> </span><span class="WHIT">            </span><span class="NAME">this._outScene.visit</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>111</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>112</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>113</span> 
<span class='line'>114</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>115</span>      * custom onEnter
<span class='line'>116</span>      */</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>118</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>119</span> 
<span class='line'>120</span> </span><span class="WHIT">        </span><span class="COMM">// disable events while transitions</span><span class="WHIT">
<span class='line'>121</span> </span><span class="WHIT">        </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getTouchDispatcher</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setDispatchEvents</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>122</span> 
<span class='line'>123</span> </span><span class="WHIT">        </span><span class="COMM">// outScene should not receive the onEnter callback</span><span class="WHIT">
<span class='line'>124</span> </span><span class="WHIT">        </span><span class="COMM">// only the onExitTransitionDidStart</span><span class="WHIT">
<span class='line'>125</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.onExitTransitionDidStart</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>126</span> 
<span class='line'>127</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.onEnter</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>128</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>129</span> 
<span class='line'>130</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>131</span>      * custom onExit
<span class='line'>132</span>      */</span><span class="WHIT">
<span class='line'>133</span> </span><span class="WHIT">    </span><span class="NAME">onExit</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>134</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.onExit.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>135</span> 
<span class='line'>136</span> </span><span class="WHIT">        </span><span class="COMM">// enable events while transitions</span><span class="WHIT">
<span class='line'>137</span> </span><span class="WHIT">        </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getTouchDispatcher</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setDispatchEvents</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>138</span> 
<span class='line'>139</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.onExit</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>140</span> 
<span class='line'>141</span> </span><span class="WHIT">        </span><span class="COMM">// _inScene should not receive the onEnter callback</span><span class="WHIT">
<span class='line'>142</span> </span><span class="WHIT">        </span><span class="COMM">// only the onEnterTransitionDidFinish</span><span class="WHIT">
<span class='line'>143</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.onEnterTransitionDidFinish</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>144</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>145</span> 
<span class='line'>146</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>147</span>      * custom cleanup
<span class='line'>148</span>      */</span><span class="WHIT">
<span class='line'>149</span> </span><span class="WHIT">    </span><span class="NAME">cleanup</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>150</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.cleanup.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>151</span> 
<span class='line'>152</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._isSendCleanupToScene</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>153</span> </span><span class="WHIT">            </span><span class="NAME">this._outScene.cleanup</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>154</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>155</span> 
<span class='line'>156</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>157</span>      * initializes a transition with duration and incoming scene
<span class='line'>158</span>      * @param {Number} t time in seconds
<span class='line'>159</span>      * @param {cc.Scene} scene a scene to transit to
<span class='line'>160</span>      * @return {Boolean} return false if error
<span class='line'>161</span>      */</span><span class="WHIT">
<span class='line'>162</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>163</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>164</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.TransitionScene.initWithDuration(): Argument scene must be non-nil"</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>165</span> 
<span class='line'>166</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.init</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>167</span> </span><span class="WHIT">            </span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>168</span> </span><span class="WHIT">            </span><span class="NAME">this.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>169</span> </span><span class="WHIT">            </span><span class="NAME">this.setPosition</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>170</span> </span><span class="WHIT">            </span><span class="COMM">// retain</span><span class="WHIT">
<span class='line'>171</span> </span><span class="WHIT">            </span><span class="NAME">this._inScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>172</span> </span><span class="WHIT">            </span><span class="NAME">this._outScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getRunningScene</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>173</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._outScene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>174</span> </span><span class="WHIT">                </span><span class="NAME">this._outScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Scene.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>175</span> </span><span class="WHIT">                </span><span class="NAME">this._outScene.init</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>176</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>177</span> 
<span class='line'>178</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._inScene</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">this._outScene</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>179</span> </span><span class="WHIT">                </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.TransitionScene.initWithDuration(): Incoming scene must be different from the outgoing scene"</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>180</span> 
<span class='line'>181</span> </span><span class="WHIT">            </span><span class="NAME">this._sceneOrder</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>182</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>183</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>184</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>185</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>186</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>187</span> 
<span class='line'>188</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>189</span>      * called after the transition finishes
<span class='line'>190</span>      */</span><span class="WHIT">
<span class='line'>191</span> </span><span class="WHIT">    </span><span class="NAME">finish</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>192</span> </span><span class="WHIT">        </span><span class="COMM">// clean up</span><span class="WHIT">
<span class='line'>193</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>194</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>195</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setScale</span><span class="PUNC">(</span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>196</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setRotation</span><span class="PUNC">(</span><span class="NUMB">0.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>197</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">cc.renderContextType</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc.WEBGL</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>198</span> </span><span class="WHIT">            </span><span class="NAME">this._inScene.getCamera</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">restore</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>199</span> 
<span class='line'>200</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>201</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setPosition</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>202</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setScale</span><span class="PUNC">(</span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>203</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setRotation</span><span class="PUNC">(</span><span class="NUMB">0.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>204</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">cc.renderContextType</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc.WEBGL</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>205</span> </span><span class="WHIT">            </span><span class="NAME">this._outScene.getCamera</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">restore</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>206</span> 
<span class='line'>207</span> </span><span class="WHIT">        </span><span class="COMM">//[self schedule:@selector(setNewScene:) interval:0];</span><span class="WHIT">
<span class='line'>208</span> </span><span class="WHIT">        </span><span class="NAME">this.schedule</span><span class="PUNC">(</span><span class="NAME">this._setNewScene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>209</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>210</span> 
<span class='line'>211</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>212</span>      * set hide the out scene and show in scene
<span class='line'>213</span>      */</span><span class="WHIT">
<span class='line'>214</span> </span><span class="WHIT">    </span><span class="NAME">hideOutShowIn</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>215</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>217</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>218</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>219</span> </span><span class="COMM">/**
<span class='line'>220</span>  * creates a base transition with duration and incoming scene
<span class='line'>221</span>  * @param {Number} t time in seconds
<span class='line'>222</span>  * @param {cc.Scene} scene the scene to transit with
<span class='line'>223</span>  * @return {cc.TransitionScene|Null}
<span class='line'>224</span>  */</span><span class="WHIT">
<span class='line'>225</span> </span><span class="NAME">cc.TransitionScene.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>226</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>227</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>228</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>229</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>230</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>231</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>232</span> 
<span class='line'>233</span> </span><span class="COMM">/**
<span class='line'>234</span>  * A cc.Transition that supports orientation like.&lt;br/>
<span class='line'>235</span>  * Possible orientation: LeftOver, RightOver, UpOver, DownOver&lt;br/>
<span class='line'>236</span>  * useful for when you want to make a transition happen between 2 orientations
<span class='line'>237</span>  * @class
<span class='line'>238</span>  * @extends cc.TransitionScene
<span class='line'>239</span>  */</span><span class="WHIT">
<span class='line'>240</span> </span><span class="NAME">cc.TransitionSceneOriented</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionSceneOriented# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>241</span> </span><span class="WHIT">    </span><span class="NAME">_orientation</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>242</span> 
<span class='line'>243</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>244</span>      * initialize the transition
<span class='line'>245</span>      * @param {Number} t time in seconds
<span class='line'>246</span>      * @param {cc.Scene} scene
<span class='line'>247</span>      * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} orientation
<span class='line'>248</span>      * @return {Boolean}
<span class='line'>249</span>      */</span><span class="WHIT">
<span class='line'>250</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">orientation</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>251</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.TransitionScene.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>252</span> </span><span class="WHIT">            </span><span class="NAME">this._orientation</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">orientation</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>253</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>254</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>255</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>256</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>257</span> 
<span class='line'>258</span> </span><span class="COMM">/**
<span class='line'>259</span>  * creates a base transition with duration and incoming scene
<span class='line'>260</span>  * @param {Number} t time in seconds
<span class='line'>261</span>  * @param {cc.Scene} scene
<span class='line'>262</span>  * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} orientation
<span class='line'>263</span>  * @return {cc.TransitionSceneOriented}
<span class='line'>264</span>  * @example
<span class='line'>265</span>  * // Example
<span class='line'>266</span>  * var goHorizontal = cc.TransitionSceneOriented.create(0.5, thisScene, cc.TRANSITION_ORIENTATION_LEFT_OVER)
<span class='line'>267</span>  */</span><span class="WHIT">
<span class='line'>268</span> </span><span class="NAME">cc.TransitionSceneOriented.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">orientation</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>269</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSceneOriented</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>270</span> </span><span class="WHIT">    </span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">orientation</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>271</span> 
<span class='line'>272</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>273</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>274</span> 
<span class='line'>275</span> </span><span class="COMM">/**
<span class='line'>276</span>  *  Rotate and zoom out the outgoing scene, and then rotate and zoom in the incoming
<span class='line'>277</span>  * @class
<span class='line'>278</span>  * @extends cc.TransitionScene
<span class='line'>279</span>  */</span><span class="WHIT">
<span class='line'>280</span> </span><span class="NAME">cc.TransitionRotoZoom</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionRotoZoom# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>281</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>282</span>      * Custom On Enter callback
<span class='line'>283</span>      * @override
<span class='line'>284</span>      */</span><span class="WHIT">
<span class='line'>285</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>286</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>287</span> 
<span class='line'>288</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setScale</span><span class="PUNC">(</span><span class="NUMB">0.001</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>289</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setScale</span><span class="PUNC">(</span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>290</span> 
<span class='line'>291</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>292</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>293</span> 
<span class='line'>294</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">rotoZoom</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>295</span> </span><span class="WHIT">            </span><span class="NAME">cc.Spawn.create</span><span class="PUNC">(</span><span class="NAME">cc.ScaleBy.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.001</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>296</span> </span><span class="WHIT">                </span><span class="NAME">cc.RotateBy.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>297</span> </span><span class="WHIT">            </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>298</span> 
<span class='line'>299</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">rotoZoom</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>300</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>301</span> </span><span class="WHIT">            </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">rotoZoom.reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>302</span> </span><span class="WHIT">                </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>303</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>304</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>305</span> 
<span class='line'>306</span> </span><span class="COMM">/**
<span class='line'>307</span>  * Creates a Transtion rotation and zoom
<span class='line'>308</span>  * @param {Number} t time in seconds
<span class='line'>309</span>  * @param {cc.Scene} scene the scene to work with
<span class='line'>310</span>  * @return {cc.TransitionRotoZoom}
<span class='line'>311</span>  * @example
<span class='line'>312</span>  * // Example
<span class='line'>313</span>  * var RotoZoomTrans = cc.TransitionRotoZoom.create(2, nextScene);
<span class='line'>314</span>  */</span><span class="WHIT">
<span class='line'>315</span> </span><span class="NAME">cc.TransitionRotoZoom.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>316</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionRotoZoom</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>317</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>318</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>319</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>320</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>321</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>322</span> 
<span class='line'>323</span> </span><span class="COMM">/**
<span class='line'>324</span>  * Zoom out and jump the outgoing scene, and then jump and zoom in the incoming
<span class='line'>325</span>  * @class
<span class='line'>326</span>  * @extends cc.TransitionScene
<span class='line'>327</span>  */</span><span class="WHIT">
<span class='line'>328</span> </span><span class="NAME">cc.TransitionJumpZoom</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionJumpZoom# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>329</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>330</span>      * Custom on enter
<span class='line'>331</span>      */</span><span class="WHIT">
<span class='line'>332</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>333</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>334</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">winSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>335</span> 
<span class='line'>336</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setScale</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>337</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="NAME">winSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>338</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>339</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>340</span> 
<span class='line'>341</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">jump</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.JumpBy.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">4</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="PUNC">-</span><span class="NAME">winSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">winSize.width</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">4</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>342</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">scaleIn</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">4</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>343</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">scaleOut</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">4</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>344</span> 
<span class='line'>345</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">jumpZoomOut</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">scaleOut</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jump</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>346</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">jumpZoomIn</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">jump</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scaleIn</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>347</span> 
<span class='line'>348</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">delay</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>349</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">jumpZoomOut</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>350</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">delay</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumpZoomIn</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>351</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>352</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>353</span> 
<span class='line'>354</span> </span><span class="COMM">/**
<span class='line'>355</span>  * creates a scene transition that zooms then jump across the screen, the same for the incoming scene
<span class='line'>356</span>  * @param {Number} t time in seconds
<span class='line'>357</span>  * @param {cc.Scene} scene
<span class='line'>358</span>  * @return {cc.TransitionJumpZoom}
<span class='line'>359</span>  */</span><span class="WHIT">
<span class='line'>360</span> </span><span class="NAME">cc.TransitionJumpZoom.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>361</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionJumpZoom</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>362</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>363</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>364</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>365</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>366</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>367</span> 
<span class='line'>368</span> </span><span class="COMM">/**
<span class='line'>369</span>  * Move in from to the left the incoming scene.
<span class='line'>370</span>  * @class
<span class='line'>371</span>  * @extends cc.TransitionScene
<span class='line'>372</span>  */</span><span class="WHIT">
<span class='line'>373</span> </span><span class="NAME">cc.TransitionMoveInL</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionMoveInL# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>374</span> 
<span class='line'>375</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>376</span>      * Custom on enter
<span class='line'>377</span>      */</span><span class="WHIT">
<span class='line'>378</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>379</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>380</span> </span><span class="WHIT">        </span><span class="NAME">this.initScenes</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>381</span> 
<span class='line'>382</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.action</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>383</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>384</span> </span><span class="WHIT">            </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">this.easeActionWithAction</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>385</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>386</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>387</span> 
<span class='line'>388</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>389</span>      * initializes the scenes
<span class='line'>390</span>      */</span><span class="WHIT">
<span class='line'>391</span> </span><span class="WHIT">    </span><span class="NAME">initScenes</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>392</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="PUNC">-</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>393</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>394</span> 
<span class='line'>395</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>396</span>      * returns the action that will be performed
<span class='line'>397</span>      */</span><span class="WHIT">
<span class='line'>398</span> </span><span class="WHIT">    </span><span class="NAME">action</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>399</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.MoveTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>400</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>401</span> 
<span class='line'>402</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>403</span>      * creates an ease action from action
<span class='line'>404</span>      * @param {cc.ActionInterval} action
<span class='line'>405</span>      * @return {cc.EaseOut}
<span class='line'>406</span>      */</span><span class="WHIT">
<span class='line'>407</span> </span><span class="WHIT">    </span><span class="NAME">easeActionWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>408</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.EaseOut.create</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>409</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>410</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>411</span> 
<span class='line'>412</span> </span><span class="COMM">/**
<span class='line'>413</span>  * creates an action that  Move in from to the left the incoming scene.
<span class='line'>414</span>  * @param {Number} t time in seconds
<span class='line'>415</span>  * @param {cc.Scene} scene
<span class='line'>416</span>  * @return {cc.TransitionMoveInL}
<span class='line'>417</span>  * @example
<span class='line'>418</span>  * // Example
<span class='line'>419</span>  * var MoveInLeft = cc.TransitionMoveInL.create(1, nextScene)
<span class='line'>420</span>  */</span><span class="WHIT">
<span class='line'>421</span> </span><span class="NAME">cc.TransitionMoveInL.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>422</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionMoveInL</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>423</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>424</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>425</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>426</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>427</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>428</span> 
<span class='line'>429</span> </span><span class="COMM">/**
<span class='line'>430</span>  * Move in from to the right the incoming scene.
<span class='line'>431</span>  * @class
<span class='line'>432</span>  * @extends cc.TransitionMoveInL
<span class='line'>433</span>  */</span><span class="WHIT">
<span class='line'>434</span> </span><span class="NAME">cc.TransitionMoveInR</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionMoveInL.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionMoveInR# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>435</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>436</span>      * Init
<span class='line'>437</span>      */</span><span class="WHIT">
<span class='line'>438</span> </span><span class="WHIT">    </span><span class="NAME">initScenes</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>439</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>440</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>441</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>442</span> 
<span class='line'>443</span> </span><span class="COMM">/**
<span class='line'>444</span>  * create a scene transition that Move in from to the right the incoming scene.
<span class='line'>445</span>  * @param {Number} t time in seconds
<span class='line'>446</span>  * @param {cc.Scene} scene
<span class='line'>447</span>  * @return {cc.TransitionMoveInR}
<span class='line'>448</span>  * @example
<span class='line'>449</span>  * // Example
<span class='line'>450</span>  * var MoveInRight = cc.TransitionMoveInR.create(1, nextScene)
<span class='line'>451</span>  */</span><span class="WHIT">
<span class='line'>452</span> </span><span class="NAME">cc.TransitionMoveInR.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>453</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionMoveInR</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>454</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>455</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>456</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>457</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>458</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>459</span> 
<span class='line'>460</span> </span><span class="COMM">/**
<span class='line'>461</span>  * Move in from to the top the incoming scene.
<span class='line'>462</span>  * @class
<span class='line'>463</span>  * @extends cc.TransitionMoveInL
<span class='line'>464</span>  */</span><span class="WHIT">
<span class='line'>465</span> </span><span class="NAME">cc.TransitionMoveInT</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionMoveInL.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionMoveInT# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>466</span> 
<span class='line'>467</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>468</span>      * init
<span class='line'>469</span>      */</span><span class="WHIT">
<span class='line'>470</span> </span><span class="WHIT">    </span><span class="NAME">initScenes</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>471</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>472</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>473</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>474</span> 
<span class='line'>475</span> </span><span class="COMM">/**
<span class='line'>476</span>  * Move in from to the top the incoming scene.
<span class='line'>477</span>  * @param {Number} t time in seconds
<span class='line'>478</span>  * @param {cc.Scene} scene
<span class='line'>479</span>  * @return {cc.TransitionMoveInT}
<span class='line'>480</span>  * @example
<span class='line'>481</span>  * // Example
<span class='line'>482</span>  * var MoveInTop = cc.TransitionMoveInT.create(1, nextScene)
<span class='line'>483</span>  */</span><span class="WHIT">
<span class='line'>484</span> </span><span class="NAME">cc.TransitionMoveInT.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>485</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionMoveInT</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>486</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>487</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>488</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>489</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>490</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>491</span> 
<span class='line'>492</span> </span><span class="COMM">/**
<span class='line'>493</span>  *  Move in from to the bottom the incoming scene.
<span class='line'>494</span>  * @class
<span class='line'>495</span>  * @extends cc.TransitionMoveInL
<span class='line'>496</span>  */</span><span class="WHIT">
<span class='line'>497</span> </span><span class="NAME">cc.TransitionMoveInB</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionMoveInL.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionMoveInB# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>498</span> 
<span class='line'>499</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>500</span>      * init
<span class='line'>501</span>      */</span><span class="WHIT">
<span class='line'>502</span> </span><span class="WHIT">    </span><span class="NAME">initScenes</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>503</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>504</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>505</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>506</span> 
<span class='line'>507</span> </span><span class="COMM">/**
<span class='line'>508</span>  * create a scene transition that Move in from to the bottom the incoming scene.
<span class='line'>509</span>  * @param {Number} t time in seconds
<span class='line'>510</span>  * @param {cc.Scene} scene
<span class='line'>511</span>  * @return {cc.TransitionMoveInB}
<span class='line'>512</span>  * @example
<span class='line'>513</span>  * // Example
<span class='line'>514</span>  * var MoveinB = cc.TransitionMoveInB.create(1, nextScene)
<span class='line'>515</span>  */</span><span class="WHIT">
<span class='line'>516</span> </span><span class="NAME">cc.TransitionMoveInB.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>517</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionMoveInB</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>518</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>519</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>520</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>521</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>522</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>523</span> 
<span class='line'>524</span> </span><span class="COMM">/**
<span class='line'>525</span>  * The adjust factor is needed to prevent issue #442&lt;br/>
<span class='line'>526</span>  * One solution is to use DONT_RENDER_IN_SUBPIXELS images, but NO&lt;br/>
<span class='line'>527</span>  * The other issue is that in some transitions (and I don't know why)&lt;br/>
<span class='line'>528</span>  * the order should be reversed (In in top of Out or vice-versa).
<span class='line'>529</span>  * @constant
<span class='line'>530</span>  * @type Number
<span class='line'>531</span>  */</span><span class="WHIT">
<span class='line'>532</span> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>533</span> 
<span class='line'>534</span> </span><span class="COMM">/**
<span class='line'>535</span>  * a transition that a new scene is slided from left
<span class='line'>536</span>  * @class
<span class='line'>537</span>  * @extends cc.TransitionScene
<span class='line'>538</span>  */</span><span class="WHIT">
<span class='line'>539</span> </span><span class="NAME">cc.TransitionSlideInL</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionSlideInL# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>540</span> </span><span class="WHIT">    </span><span class="NAME">_sceneOrder</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>541</span> </span><span class="WHIT">        </span><span class="NAME">this._isInSceneOnTop</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>542</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>543</span> 
<span class='line'>544</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>545</span>      * custom on enter
<span class='line'>546</span>      */</span><span class="WHIT">
<span class='line'>547</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>548</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>549</span> </span><span class="WHIT">        </span><span class="NAME">this.initScenes</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>550</span> 
<span class='line'>551</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.action</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>552</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">outA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.action</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>553</span> 
<span class='line'>554</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.easeActionWithAction</span><span class="PUNC">(</span><span class="NAME">inA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>555</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">outAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">this.easeActionWithAction</span><span class="PUNC">(</span><span class="NAME">outA</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>556</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">inAction</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>557</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">outAction</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>558</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>559</span> 
<span class='line'>560</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>561</span>      * initializes the scenes
<span class='line'>562</span>      */</span><span class="WHIT">
<span class='line'>563</span> </span><span class="WHIT">    </span><span class="NAME">initScenes</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>564</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="PUNC">-</span><span class="PUNC">(</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">width</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>565</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>566</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>567</span>      * returns the action that will be performed by the incomming and outgoing scene
<span class='line'>568</span>      * @return {cc.MoveBy}
<span class='line'>569</span>      */</span><span class="WHIT">
<span class='line'>570</span> </span><span class="WHIT">    </span><span class="NAME">action</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>571</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.MoveBy.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">width</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>572</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>573</span> 
<span class='line'>574</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>575</span>      * @param {cc.ActionInterval} action
<span class='line'>576</span>      * @return {*}
<span class='line'>577</span>      */</span><span class="WHIT">
<span class='line'>578</span> </span><span class="WHIT">    </span><span class="NAME">easeActionWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>579</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.EaseOut.create</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>580</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>581</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>582</span> 
<span class='line'>583</span> </span><span class="COMM">/**
<span class='line'>584</span>  * create a transition that a new scene is slided from left
<span class='line'>585</span>  * @param {Number} t time in seconds
<span class='line'>586</span>  * @param {cc.Scene} scene
<span class='line'>587</span>  * @return {cc.TransitionSlideInL}
<span class='line'>588</span>  * @example
<span class='line'>589</span>  * // Example
<span class='line'>590</span>  * var myTransition = cc.TransitionSlideInL.create(1.5, nextScene)
<span class='line'>591</span>  */</span><span class="WHIT">
<span class='line'>592</span> </span><span class="NAME">cc.TransitionSlideInL.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>593</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSlideInL</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>594</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>595</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>596</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>597</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>598</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>599</span> 
<span class='line'>600</span> </span><span class="COMM">/**
<span class='line'>601</span>  *  Slide in the incoming scene from the right border.
<span class='line'>602</span>  * @class
<span class='line'>603</span>  * @extends cc.TransitionSlideInL
<span class='line'>604</span>  */</span><span class="WHIT">
<span class='line'>605</span> </span><span class="NAME">cc.TransitionSlideInR</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSlideInL.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionSlideInR# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>606</span> </span><span class="WHIT">    </span><span class="NAME">_sceneOrder</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>607</span> </span><span class="WHIT">        </span><span class="NAME">this._isInSceneOnTop</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>608</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>609</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>610</span>      * initializes the scenes
<span class='line'>611</span>      */</span><span class="WHIT">
<span class='line'>612</span> </span><span class="WHIT">    </span><span class="NAME">initScenes</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>613</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">width</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>614</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>615</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>616</span>      *  returns the action that will be performed by the incomming and outgoing scene
<span class='line'>617</span>      * @return {cc.MoveBy}
<span class='line'>618</span>      */</span><span class="WHIT">
<span class='line'>619</span> </span><span class="WHIT">    </span><span class="NAME">action</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>620</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.MoveBy.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="PUNC">-</span><span class="PUNC">(</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">width</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>621</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>622</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>623</span> 
<span class='line'>624</span> </span><span class="COMM">/**
<span class='line'>625</span>  * create Slide in the incoming scene from the right border.
<span class='line'>626</span>  * @param {Number} t time in seconds
<span class='line'>627</span>  * @param {cc.Scene} scene
<span class='line'>628</span>  * @return {cc.TransitionSlideInR}
<span class='line'>629</span>  * @example
<span class='line'>630</span>  * // Example
<span class='line'>631</span>  * var myTransition = cc.TransitionSlideInR.create(1.5, nextScene)
<span class='line'>632</span>  */</span><span class="WHIT">
<span class='line'>633</span> </span><span class="NAME">cc.TransitionSlideInR.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>634</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSlideInR</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>635</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>636</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>637</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>638</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>639</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>640</span> 
<span class='line'>641</span> </span><span class="COMM">/**
<span class='line'>642</span>  * Slide in the incoming scene from the bottom border.
<span class='line'>643</span>  * @class
<span class='line'>644</span>  * @extends cc.TransitionSlideInL
<span class='line'>645</span>  */</span><span class="WHIT">
<span class='line'>646</span> </span><span class="NAME">cc.TransitionSlideInB</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSlideInL.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionSlideInB# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>647</span> </span><span class="WHIT">    </span><span class="NAME">_sceneOrder</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>648</span> </span><span class="WHIT">        </span><span class="NAME">this._isInSceneOnTop</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>649</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>650</span> 
<span class='line'>651</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>652</span>      * initializes the scenes
<span class='line'>653</span>      */</span><span class="WHIT">
<span class='line'>654</span> </span><span class="WHIT">    </span><span class="NAME">initScenes</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>655</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">height</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>656</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>657</span> 
<span class='line'>658</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>659</span>      * returns the action that will be performed by the incomming and outgoing scene
<span class='line'>660</span>      * @return {cc.MoveBy}
<span class='line'>661</span>      */</span><span class="WHIT">
<span class='line'>662</span> </span><span class="WHIT">    </span><span class="NAME">action</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>663</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.MoveBy.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">(</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">height</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>664</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>665</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>666</span> 
<span class='line'>667</span> </span><span class="COMM">/**
<span class='line'>668</span>  * create a Slide in the incoming scene from the bottom border.
<span class='line'>669</span>  * @param {Number} t time in seconds
<span class='line'>670</span>  * @param {cc.Scene} scene
<span class='line'>671</span>  * @return {cc.TransitionSlideInB}
<span class='line'>672</span>  * @example
<span class='line'>673</span>  * // Example
<span class='line'>674</span>  * var myTransition = cc.TransitionSlideInB.create(1.5, nextScene)
<span class='line'>675</span>  */</span><span class="WHIT">
<span class='line'>676</span> </span><span class="NAME">cc.TransitionSlideInB.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>677</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSlideInB</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>678</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>679</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>680</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>681</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>682</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>683</span> 
<span class='line'>684</span> </span><span class="COMM">/**
<span class='line'>685</span>  *  Slide in the incoming scene from the top border.
<span class='line'>686</span>  *  @class
<span class='line'>687</span>  *  @extends cc.TransitionSlideInL
<span class='line'>688</span>  */</span><span class="WHIT">
<span class='line'>689</span> </span><span class="NAME">cc.TransitionSlideInT</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSlideInL.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionSlideInT# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>690</span> </span><span class="WHIT">    </span><span class="NAME">_sceneOrder</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>691</span> </span><span class="WHIT">        </span><span class="NAME">this._isInSceneOnTop</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>692</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>693</span> 
<span class='line'>694</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>695</span>      * initializes the scenes
<span class='line'>696</span>      */</span><span class="WHIT">
<span class='line'>697</span> </span><span class="WHIT">    </span><span class="NAME">initScenes</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>698</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setPosition</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">(</span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">height</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>699</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>700</span> 
<span class='line'>701</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>702</span>      * returns the action that will be performed by the incomming and outgoing scene
<span class='line'>703</span>      * @return {cc.MoveBy}
<span class='line'>704</span>      */</span><span class="WHIT">
<span class='line'>705</span> </span><span class="WHIT">    </span><span class="NAME">action</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>706</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.MoveBy.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">height</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">cc.ADJUST_FACTOR</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>707</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>708</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>709</span> 
<span class='line'>710</span> </span><span class="COMM">/**
<span class='line'>711</span>  * create a Slide in the incoming scene from the top border.
<span class='line'>712</span>  * @param {Number} t time in seconds
<span class='line'>713</span>  * @param {cc.Scene} scene
<span class='line'>714</span>  * @return {cc.TransitionSlideInT}
<span class='line'>715</span>  * @example
<span class='line'>716</span>  * // Example
<span class='line'>717</span>  * var myTransition = cc.TransitionSlideInT.create(1.5, nextScene)
<span class='line'>718</span>  */</span><span class="WHIT">
<span class='line'>719</span> </span><span class="NAME">cc.TransitionSlideInT.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>720</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSlideInT</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>721</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>722</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>723</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>724</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>725</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>726</span> 
<span class='line'>727</span> </span><span class="COMM">/**
<span class='line'>728</span>  * Shrink the outgoing scene while grow the incoming scene
<span class='line'>729</span>  * @class
<span class='line'>730</span>  * @extends cc.TransitionScene
<span class='line'>731</span>  */</span><span class="WHIT">
<span class='line'>732</span> </span><span class="NAME">cc.TransitionShrinkGrow</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionShrinkGrow# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>733</span> 
<span class='line'>734</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>735</span>      * Custom on enter
<span class='line'>736</span>      */</span><span class="WHIT">
<span class='line'>737</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>738</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>739</span> 
<span class='line'>740</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setScale</span><span class="PUNC">(</span><span class="NUMB">0.001</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>741</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setScale</span><span class="PUNC">(</span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>742</span> 
<span class='line'>743</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">2</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">3.0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>744</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">3.0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>745</span> 
<span class='line'>746</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">scaleOut</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.01</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>747</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">scaleIn</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>748</span> 
<span class='line'>749</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">this.easeActionWithAction</span><span class="PUNC">(</span><span class="NAME">scaleIn</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>750</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>751</span> </span><span class="WHIT">            </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">this.easeActionWithAction</span><span class="PUNC">(</span><span class="NAME">scaleOut</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>752</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>753</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>754</span> 
<span class='line'>755</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>756</span>      * @param action
<span class='line'>757</span>      * @return {cc.EaseOut}
<span class='line'>758</span>      */</span><span class="WHIT">
<span class='line'>759</span> </span><span class="WHIT">    </span><span class="NAME">easeActionWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>760</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.EaseOut.create</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>761</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>762</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>763</span> 
<span class='line'>764</span> </span><span class="COMM">/**
<span class='line'>765</span>  * Shrink the outgoing scene while grow the incoming scene
<span class='line'>766</span>  * @param {Number} t time in seconds
<span class='line'>767</span>  * @param {cc.Scene} scene
<span class='line'>768</span>  * @return {cc.TransitionShrinkGrow}
<span class='line'>769</span>  * @example
<span class='line'>770</span>  * // Example
<span class='line'>771</span>  * var myTransition = cc.TransitionShrinkGrow.create(1.5, nextScene)
<span class='line'>772</span>  */</span><span class="WHIT">
<span class='line'>773</span> </span><span class="NAME">cc.TransitionShrinkGrow.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>774</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionShrinkGrow</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>775</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>776</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>777</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>778</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>779</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>780</span> 
<span class='line'>781</span> </span><span class="COMM">/**
<span class='line'>782</span>  *  Flips the screen horizontally.&lt;br/>
<span class='line'>783</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>784</span>  * @class
<span class='line'>785</span>  * @extends cc.TransitionSceneOriented
<span class='line'>786</span>  */</span><span class="WHIT">
<span class='line'>787</span> </span><span class="NAME">cc.TransitionFlipX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSceneOriented.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionFlipX# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>788</span> 
<span class='line'>789</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>790</span>      * custom on enter
<span class='line'>791</span>      */</span><span class="WHIT">
<span class='line'>792</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>793</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>794</span> 
<span class='line'>795</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inA</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outA</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>796</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>797</span> 
<span class='line'>798</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>799</span> 
<span class='line'>800</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._orientation</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>801</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>802</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">270</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>803</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>804</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>805</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>806</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>807</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>808</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>809</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>810</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>811</span> 
<span class='line'>812</span> </span><span class="WHIT">        </span><span class="NAME">inA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>813</span> </span><span class="WHIT">            </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Show.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>814</span> </span><span class="WHIT">            </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>815</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>816</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>817</span> 
<span class='line'>818</span> </span><span class="WHIT">        </span><span class="NAME">outA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>819</span> </span><span class="WHIT">            </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>820</span> </span><span class="WHIT">            </span><span class="NAME">cc.Hide.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>821</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>822</span> 
<span class='line'>823</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">inA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>824</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">outA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>825</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>826</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>827</span> 
<span class='line'>828</span> </span><span class="COMM">/**
<span class='line'>829</span>  * Flips the screen horizontally.&lt;br/>
<span class='line'>830</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>831</span>  * @param {Number} t time in seconds
<span class='line'>832</span>  * @param {cc.Scene} scene
<span class='line'>833</span>  * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} o
<span class='line'>834</span>  * @return {cc.TransitionFlipX}
<span class='line'>835</span>  * @example
<span class='line'>836</span>  * // Example
<span class='line'>837</span>  * var myTransition = cc.TransitionFlipX.create(1.5, nextScene) //default is cc.TRANSITION_ORIENTATION_RIGHT_OVER
<span class='line'>838</span>  *
<span class='line'>839</span>  * //OR
<span class='line'>840</span>  * var myTransition = cc.TransitionFlipX.create(1.5, nextScene, cc.TRANSITION_ORIENTATION_UP_OVER)
<span class='line'>841</span>  */</span><span class="WHIT">
<span class='line'>842</span> </span><span class="NAME">cc.TransitionFlipX.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>843</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>844</span> </span><span class="WHIT">        </span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>845</span> 
<span class='line'>846</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFlipX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>847</span> </span><span class="WHIT">    </span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>848</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>849</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>850</span> 
<span class='line'>851</span> </span><span class="COMM">/**
<span class='line'>852</span>  * Flips the screen vertically.&lt;br/>
<span class='line'>853</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>854</span>  * @class
<span class='line'>855</span>  * @extends cc.TransitionSceneOriented
<span class='line'>856</span>  */</span><span class="WHIT">
<span class='line'>857</span> </span><span class="NAME">cc.TransitionFlipY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSceneOriented.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionFlipY# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>858</span> 
<span class='line'>859</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>860</span>      * custom on enter
<span class='line'>861</span>      */</span><span class="WHIT">
<span class='line'>862</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>863</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>864</span> 
<span class='line'>865</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inA</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outA</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>866</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>867</span> 
<span class='line'>868</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>869</span> 
<span class='line'>870</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._orientation</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_UP_OVER</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>871</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>872</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">270</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>873</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>874</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>875</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>876</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>877</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>878</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>879</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>880</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>881</span> 
<span class='line'>882</span> </span><span class="WHIT">        </span><span class="NAME">inA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>883</span> </span><span class="WHIT">            </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Show.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>884</span> </span><span class="WHIT">            </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>885</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>886</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>887</span> </span><span class="WHIT">        </span><span class="NAME">outA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>888</span> </span><span class="WHIT">            </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>889</span> </span><span class="WHIT">            </span><span class="NAME">cc.Hide.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>890</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>891</span> 
<span class='line'>892</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">inA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>893</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">outA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>894</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>895</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>896</span> 
<span class='line'>897</span> </span><span class="COMM">/**
<span class='line'>898</span>  * Flips the screen vertically.&lt;br/>
<span class='line'>899</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>900</span>  * @param {Number} t time in seconds
<span class='line'>901</span>  * @param {cc.Scene} scene
<span class='line'>902</span>  * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} o
<span class='line'>903</span>  * @return {cc.TransitionFlipY}
<span class='line'>904</span>  * @example
<span class='line'>905</span>  * // Example
<span class='line'>906</span>  * var myTransition = cc.TransitionFlipY.create(1.5, nextScene)//default is cc.TRANSITION_ORIENTATION_UP_OVER
<span class='line'>907</span>  *
<span class='line'>908</span>  * //OR
<span class='line'>909</span>  * var myTransition = cc.TransitionFlipY.create(1.5, nextScene, cc.TRANSITION_ORIENTATION_RIGHT_OVER)
<span class='line'>910</span>  */</span><span class="WHIT">
<span class='line'>911</span> </span><span class="NAME">cc.TransitionFlipY.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>912</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>913</span> </span><span class="WHIT">        </span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_UP_OVER</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>914</span> 
<span class='line'>915</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFlipY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>916</span> </span><span class="WHIT">    </span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>917</span> 
<span class='line'>918</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>919</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>920</span> 
<span class='line'>921</span> </span><span class="COMM">/**
<span class='line'>922</span>  * Flips the screen half horizontally and half vertically.&lt;br/>
<span class='line'>923</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>924</span>  * @class
<span class='line'>925</span>  * @extends cc.TransitionSceneOriented
<span class='line'>926</span>  */</span><span class="WHIT">
<span class='line'>927</span> </span><span class="NAME">cc.TransitionFlipAngular</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSceneOriented.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionFlipAngular# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>928</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>929</span>      * custom on enter
<span class='line'>930</span>      */</span><span class="WHIT">
<span class='line'>931</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>932</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>933</span> 
<span class='line'>934</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inA</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outA</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>935</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>936</span> 
<span class='line'>937</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>938</span> 
<span class='line'>939</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._orientation</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>940</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>941</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">270</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>942</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>943</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>944</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>945</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>946</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>947</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>948</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>949</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>950</span> 
<span class='line'>951</span> </span><span class="WHIT">        </span><span class="NAME">inA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>952</span> </span><span class="WHIT">            </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Show.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>953</span> </span><span class="WHIT">            </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">45</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>954</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>955</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>956</span> </span><span class="WHIT">        </span><span class="NAME">outA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>957</span> </span><span class="WHIT">            </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">45</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>958</span> </span><span class="WHIT">            </span><span class="NAME">cc.Hide.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>959</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>960</span> 
<span class='line'>961</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">inA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>962</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">outA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>963</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>964</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>965</span> 
<span class='line'>966</span> </span><span class="COMM">/**
<span class='line'>967</span>  * Flips the screen half horizontally and half vertically.&lt;br/>
<span class='line'>968</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>969</span>  * @param {Number} t time in seconds
<span class='line'>970</span>  * @param {cc.Scene} scene
<span class='line'>971</span>  * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} o
<span class='line'>972</span>  * @return {cc.TransitionFlipAngular}
<span class='line'>973</span>  * @example
<span class='line'>974</span>  * // Example
<span class='line'>975</span>  * var myTransition = cc.TransitionFlipAngular.create(1.5, nextScene)//default is cc.TRANSITION_ORIENTATION_RIGHT_OVER
<span class='line'>976</span>  *
<span class='line'>977</span>  * //or
<span class='line'>978</span>  * var myTransition = cc.TransitionFlipAngular.create(1.5, nextScene, cc.TRANSITION_ORIENTATION_DOWN_OVER)
<span class='line'>979</span>  */</span><span class="WHIT">
<span class='line'>980</span> </span><span class="NAME">cc.TransitionFlipAngular.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>981</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>982</span> </span><span class="WHIT">        </span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>983</span> 
<span class='line'>984</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFlipAngular</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>985</span> </span><span class="WHIT">    </span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>986</span> 
<span class='line'>987</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>988</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>989</span> 
<span class='line'>990</span> </span><span class="COMM">/**
<span class='line'>991</span>  *  Flips the screen horizontally doing a zoom out/in&lt;br/>
<span class='line'>992</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>993</span>  * @class
<span class='line'>994</span>  * @extends cc.TransitionSceneOriented
<span class='line'>995</span>  */</span><span class="WHIT">
<span class='line'>996</span> </span><span class="NAME">cc.TransitionZoomFlipX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSceneOriented.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionZoomFlipX# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>997</span> 
<span class='line'>998</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>999</span>      * custom on enter
<span class='line'>1000</span>      */</span><span class="WHIT">
<span class='line'>1001</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1002</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1003</span> 
<span class='line'>1004</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inA</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outA</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1005</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1006</span> 
<span class='line'>1007</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1008</span> 
<span class='line'>1009</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._orientation</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1010</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1011</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">270</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1012</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1013</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1014</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1015</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1016</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1017</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1018</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1019</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1020</span> 
<span class='line'>1021</span> </span><span class="WHIT">        </span><span class="NAME">inA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1022</span> </span><span class="WHIT">            </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1023</span> </span><span class="WHIT">            </span><span class="NAME">cc.Spawn.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1024</span> </span><span class="WHIT">                </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1025</span> </span><span class="WHIT">                </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Show.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1026</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1027</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1028</span> </span><span class="WHIT">        </span><span class="NAME">outA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1029</span> </span><span class="WHIT">            </span><span class="NAME">cc.Spawn.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1030</span> </span><span class="WHIT">                </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1031</span> </span><span class="WHIT">                </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1032</span> </span><span class="WHIT">            </span><span class="NAME">cc.Hide.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1033</span> </span><span class="WHIT">            </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1034</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1035</span> 
<span class='line'>1036</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setScale</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1037</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">inA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1038</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">outA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1039</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1040</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1041</span> 
<span class='line'>1042</span> </span><span class="COMM">/**
<span class='line'>1043</span>  * Flips the screen horizontally doing a zoom out/in&lt;br/>
<span class='line'>1044</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>1045</span>  * @param {Number} t time in seconds
<span class='line'>1046</span>  * @param {cc.Scene} scene
<span class='line'>1047</span>  * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} o
<span class='line'>1048</span>  * @return {cc.TransitionZoomFlipX}
<span class='line'>1049</span>  * @example
<span class='line'>1050</span>  * // Example
<span class='line'>1051</span>  * var myTransition = cc.TransitionZoomFlipX.create(1.5, nextScene)//default is cc.TRANSITION_ORIENTATION_RIGHT_OVER
<span class='line'>1052</span>  *
<span class='line'>1053</span>  * //OR
<span class='line'>1054</span>  * var myTransition = cc.TransitionZoomFlipX.create(1.5, nextScene, cc.TRANSITION_ORIENTATION_DOWN_OVER)
<span class='line'>1055</span>  */</span><span class="WHIT">
<span class='line'>1056</span> </span><span class="NAME">cc.TransitionZoomFlipX.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1057</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1058</span> </span><span class="WHIT">        </span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1059</span> 
<span class='line'>1060</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionZoomFlipX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1061</span> </span><span class="WHIT">    </span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1062</span> 
<span class='line'>1063</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1064</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1065</span> 
<span class='line'>1066</span> </span><span class="COMM">/**
<span class='line'>1067</span>  * Flips the screen vertically doing a little zooming out/in&lt;br/>
<span class='line'>1068</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>1069</span>  * @class
<span class='line'>1070</span>  * @extends cc.TransitionSceneOriented
<span class='line'>1071</span>  */</span><span class="WHIT">
<span class='line'>1072</span> </span><span class="NAME">cc.TransitionZoomFlipY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSceneOriented.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionZoomFlipY# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1073</span> 
<span class='line'>1074</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1075</span>      * custom on enter
<span class='line'>1076</span>      */</span><span class="WHIT">
<span class='line'>1077</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1078</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1079</span> 
<span class='line'>1080</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inA</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outA</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1081</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1082</span> 
<span class='line'>1083</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1084</span> 
<span class='line'>1085</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._orientation</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_UP_OVER</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1086</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1087</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">270</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1088</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1089</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1090</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1091</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1092</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1093</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1094</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1095</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1096</span> 
<span class='line'>1097</span> </span><span class="WHIT">        </span><span class="NAME">inA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1098</span> </span><span class="WHIT">            </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1099</span> </span><span class="WHIT">            </span><span class="NAME">cc.Spawn.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1100</span> </span><span class="WHIT">                </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1101</span> </span><span class="WHIT">                </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Show.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1102</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1103</span> 
<span class='line'>1104</span> </span><span class="WHIT">        </span><span class="NAME">outA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1105</span> </span><span class="WHIT">            </span><span class="NAME">cc.Spawn.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1106</span> </span><span class="WHIT">                </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1107</span> </span><span class="WHIT">                </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1108</span> </span><span class="WHIT">            </span><span class="NAME">cc.Hide.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1109</span> 
<span class='line'>1110</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setScale</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1111</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">inA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1112</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">outA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1113</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1114</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1115</span> 
<span class='line'>1116</span> </span><span class="COMM">/**
<span class='line'>1117</span>  * Flips the screen vertically doing a little zooming out/in&lt;br/>
<span class='line'>1118</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>1119</span>  * @param {Number} t time in seconds
<span class='line'>1120</span>  * @param {cc.Scene} scene
<span class='line'>1121</span>  * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} o
<span class='line'>1122</span>  * @return {cc.TransitionZoomFlipY}
<span class='line'>1123</span>  * @example
<span class='line'>1124</span>  * // Example
<span class='line'>1125</span>  * var myTransition = cc.TransitionZoomFlipY.create(1.5, nextScene)//default is cc.TRANSITION_ORIENTATION_UP_OVER
<span class='line'>1126</span>  *
<span class='line'>1127</span>  * //OR
<span class='line'>1128</span>  * var myTransition = cc.TransitionZoomFlipY.create(1.5, nextScene, cc.TRANSITION_ORIENTATION_DOWN_OVER)
<span class='line'>1129</span>  */</span><span class="WHIT">
<span class='line'>1130</span> </span><span class="NAME">cc.TransitionZoomFlipY.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1131</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1132</span> </span><span class="WHIT">        </span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_UP_OVER</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1133</span> 
<span class='line'>1134</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionZoomFlipY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1135</span> </span><span class="WHIT">    </span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1136</span> 
<span class='line'>1137</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1138</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1139</span> 
<span class='line'>1140</span> </span><span class="COMM">/**
<span class='line'>1141</span>  *  Flips the screen half horizontally and half vertically doing a little zooming out/in.&lt;br/>
<span class='line'>1142</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>1143</span>  * @class
<span class='line'>1144</span>  * @extends cc.TransitionSceneOriented
<span class='line'>1145</span>  */</span><span class="WHIT">
<span class='line'>1146</span> </span><span class="NAME">cc.TransitionZoomFlipAngular</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSceneOriented.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionZoomFlipAngular# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1147</span> 
<span class='line'>1148</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1149</span>      * custom on enter
<span class='line'>1150</span>      */</span><span class="WHIT">
<span class='line'>1151</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1152</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1153</span> 
<span class='line'>1154</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inA</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outA</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1155</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1156</span> 
<span class='line'>1157</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1158</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._orientation</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1159</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1160</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">270</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1161</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1162</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1163</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1164</span> </span><span class="WHIT">            </span><span class="NAME">inDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1165</span> </span><span class="WHIT">            </span><span class="NAME">inAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1166</span> </span><span class="WHIT">            </span><span class="NAME">outDeltaZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">90</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1167</span> </span><span class="WHIT">            </span><span class="NAME">outAngleZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1168</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1169</span> 
<span class='line'>1170</span> </span><span class="WHIT">        </span><span class="NAME">inA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1171</span> </span><span class="WHIT">            </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1172</span> </span><span class="WHIT">            </span><span class="NAME">cc.Spawn.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1173</span> </span><span class="WHIT">                </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">inDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">45</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1174</span> </span><span class="WHIT">                </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Show.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1175</span> </span><span class="WHIT">            </span><span class="NAME">cc.Show.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1176</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1177</span> </span><span class="WHIT">        </span><span class="NAME">outA</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1178</span> </span><span class="WHIT">            </span><span class="NAME">cc.Spawn.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1179</span> </span><span class="WHIT">                </span><span class="NAME">cc.OrbitCamera.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outAngleZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outDeltaZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">45</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1180</span> </span><span class="WHIT">                </span><span class="NAME">cc.ScaleTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1181</span> </span><span class="WHIT">            </span><span class="NAME">cc.Hide.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1182</span> 
<span class='line'>1183</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setScale</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1184</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.runAction</span><span class="PUNC">(</span><span class="NAME">inA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1185</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">outA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1186</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1187</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1188</span> 
<span class='line'>1189</span> </span><span class="COMM">/**
<span class='line'>1190</span>  *  Flips the screen half horizontally and half vertically doing a little zooming out/in.&lt;br/>
<span class='line'>1191</span>  * The front face is the outgoing scene and the back face is the incoming scene.
<span class='line'>1192</span>  * @param {Number} t time in seconds
<span class='line'>1193</span>  * @param {cc.Scene} scene
<span class='line'>1194</span>  * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} o
<span class='line'>1195</span>  * @return {cc.TransitionZoomFlipAngular}
<span class='line'>1196</span>  * @example
<span class='line'>1197</span>  * // Example
<span class='line'>1198</span>  * var myTransition = cc.TransitionZoomFlipAngular.create(1.5, nextScene)//default is cc.TRANSITION_ORIENTATION_RIGHT_OVER
<span class='line'>1199</span>  *
<span class='line'>1200</span>  * //OR
<span class='line'>1201</span>  * var myTransition = cc.TransitionZoomFlipAngular.create(1.5, nextScene, cc.TRANSITION_ORIENTATION_DOWN_OVER)
<span class='line'>1202</span>  */</span><span class="WHIT">
<span class='line'>1203</span> </span><span class="NAME">cc.TransitionZoomFlipAngular.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1204</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1205</span> </span><span class="WHIT">        </span><span class="NAME">o</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TRANSITION_ORIENTATION_RIGHT_OVER</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1206</span> 
<span class='line'>1207</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionZoomFlipAngular</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1208</span> </span><span class="WHIT">    </span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">o</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1209</span> 
<span class='line'>1210</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1211</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1212</span> 
<span class='line'>1213</span> </span><span class="COMM">/**
<span class='line'>1214</span>  * Fade out the outgoing scene and then fade in the incoming scene.
<span class='line'>1215</span>  * @class
<span class='line'>1216</span>  * @extends cc.TransitionScene
<span class='line'>1217</span>  */</span><span class="WHIT">
<span class='line'>1218</span> </span><span class="NAME">cc.TransitionFade</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionFade# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1219</span> </span><span class="WHIT">    </span><span class="NAME">_color</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1220</span> 
<span class='line'>1221</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1222</span>      * Constructor
<span class='line'>1223</span>      */</span><span class="WHIT">
<span class='line'>1224</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1225</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1226</span> </span><span class="WHIT">        </span><span class="NAME">this._color</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Color4B</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1227</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1228</span> 
<span class='line'>1229</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1230</span>      * custom on enter
<span class='line'>1231</span>      */</span><span class="WHIT">
<span class='line'>1232</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1233</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1234</span> 
<span class='line'>1235</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">l</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.LayerColor.create</span><span class="PUNC">(</span><span class="NAME">this._color</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1236</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1237</span> 
<span class='line'>1238</span> </span><span class="WHIT">        </span><span class="NAME">this.addChild</span><span class="PUNC">(</span><span class="NAME">l</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SCENE_FADE</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1239</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">f</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.getChildByTag</span><span class="PUNC">(</span><span class="NAME">cc.SCENE_FADE</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1240</span> 
<span class='line'>1241</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">a</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1242</span> </span><span class="WHIT">            </span><span class="NAME">cc.FadeIn.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1243</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.hideOutShowIn</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//CCCallFunc.actionWithTarget:self selector:@selector(hideOutShowIn)],</span><span class="WHIT">
<span class='line'>1244</span> </span><span class="WHIT">            </span><span class="NAME">cc.FadeOut.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1245</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="COMM">//:self selector:@selector(finish)],</span><span class="WHIT">
<span class='line'>1246</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1247</span> </span><span class="WHIT">        </span><span class="NAME">f.runAction</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1248</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1249</span> 
<span class='line'>1250</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1251</span>      * custom on exit
<span class='line'>1252</span>      */</span><span class="WHIT">
<span class='line'>1253</span> </span><span class="WHIT">    </span><span class="NAME">onExit</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1254</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onExit.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1255</span> </span><span class="WHIT">        </span><span class="NAME">this.removeChildByTag</span><span class="PUNC">(</span><span class="NAME">cc.SCENE_FADE</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1256</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1257</span> 
<span class='line'>1258</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1259</span>      * initializes the transition with a duration and with an RGB color
<span class='line'>1260</span>      * @param {Number} t time in seconds
<span class='line'>1261</span>      * @param {cc.Scene} scene
<span class='line'>1262</span>      * @param {cc.Color3B} color
<span class='line'>1263</span>      * @return {Boolean}
<span class='line'>1264</span>      */</span><span class="WHIT">
<span class='line'>1265</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">color</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1266</span> </span><span class="WHIT">        </span><span class="NAME">color</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">color</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">cc.black</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1267</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.TransitionScene.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1268</span> </span><span class="WHIT">            </span><span class="NAME">this._color.r</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">color.r</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1269</span> </span><span class="WHIT">            </span><span class="NAME">this._color.g</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">color.g</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1270</span> </span><span class="WHIT">            </span><span class="NAME">this._color.b</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">color.b</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1271</span> </span><span class="WHIT">            </span><span class="NAME">this._color.a</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1272</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1273</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1274</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1275</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1276</span> 
<span class='line'>1277</span> 
<span class='line'>1278</span> </span><span class="COMM">/**
<span class='line'>1279</span>  * Fade out the outgoing scene and then fade in the incoming scene.
<span class='line'>1280</span>  * @param {Number} t time in seconds
<span class='line'>1281</span>  * @param {cc.Scene} scene
<span class='line'>1282</span>  * @param {cc.Color3B} color
<span class='line'>1283</span>  * @return {cc.TransitionFade}
<span class='line'>1284</span>  * @example
<span class='line'>1285</span>  * // Example
<span class='line'>1286</span>  * var myTransition = cc.TransitionFade.create(1.5, nextScene, cc.c3b(255,0,0))//fade to red
<span class='line'>1287</span>  */</span><span class="WHIT">
<span class='line'>1288</span> </span><span class="NAME">cc.TransitionFade.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">color</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1289</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">transition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFade</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1290</span> </span><span class="WHIT">    </span><span class="NAME">transition.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">color</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1291</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">transition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1292</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1293</span> 
<span class='line'>1294</span> </span><span class="COMM">/**
<span class='line'>1295</span>  * Cross fades two scenes using the cc.RenderTexture object.
<span class='line'>1296</span>  * @class
<span class='line'>1297</span>  * @extends cc.TransitionScene
<span class='line'>1298</span>  */</span><span class="WHIT">
<span class='line'>1299</span> </span><span class="NAME">cc.TransitionCrossFade</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionCrossFade# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1300</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1301</span>      * custom on enter
<span class='line'>1302</span>      */</span><span class="WHIT">
<span class='line'>1303</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1304</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1305</span> 
<span class='line'>1306</span> </span><span class="WHIT">        </span><span class="COMM">// create a transparent color layer</span><span class="WHIT">
<span class='line'>1307</span> </span><span class="WHIT">        </span><span class="COMM">// in which we are going to add our rendertextures</span><span class="WHIT">
<span class='line'>1308</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">color</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Color4B</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1309</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">winSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1310</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">layer</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.LayerColor.create</span><span class="PUNC">(</span><span class="NAME">color</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1311</span> 
<span class='line'>1312</span> </span><span class="WHIT">        </span><span class="COMM">// create the first render texture for inScene</span><span class="WHIT">
<span class='line'>1313</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">inTexture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.RenderTexture.create</span><span class="PUNC">(</span><span class="NAME">winSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">winSize.height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1314</span> 
<span class='line'>1315</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">null</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">inTexture</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1316</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1317</span> 
<span class='line'>1318</span> </span><span class="WHIT">        </span><span class="NAME">inTexture.getSprite</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1319</span> </span><span class="WHIT">        </span><span class="NAME">inTexture.setPosition</span><span class="PUNC">(</span><span class="NAME">winSize.width</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">winSize.height</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1320</span> </span><span class="WHIT">        </span><span class="NAME">inTexture.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1321</span> 
<span class='line'>1322</span> </span><span class="WHIT">        </span><span class="COMM">// render inScene to its texturebuffer</span><span class="WHIT">
<span class='line'>1323</span> </span><span class="WHIT">        </span><span class="NAME">inTexture.begin</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1324</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.visit</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1325</span> </span><span class="WHIT">        </span><span class="NAME">inTexture.end</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1326</span> 
<span class='line'>1327</span> </span><span class="WHIT">        </span><span class="COMM">// create the second render texture for outScene</span><span class="WHIT">
<span class='line'>1328</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">outTexture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.RenderTexture.create</span><span class="PUNC">(</span><span class="NAME">winSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">winSize.height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1329</span> </span><span class="WHIT">        </span><span class="NAME">outTexture.getSprite</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1330</span> </span><span class="WHIT">        </span><span class="NAME">outTexture.setPosition</span><span class="PUNC">(</span><span class="NAME">winSize.width</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">winSize.height</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1331</span> </span><span class="WHIT">        </span><span class="NAME">outTexture.setAnchorPoint</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1332</span> 
<span class='line'>1333</span> </span><span class="WHIT">        </span><span class="COMM">// render outScene to its texturebuffer</span><span class="WHIT">
<span class='line'>1334</span> </span><span class="WHIT">        </span><span class="NAME">outTexture.begin</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1335</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.visit</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1336</span> </span><span class="WHIT">        </span><span class="NAME">outTexture.end</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1337</span> 
<span class='line'>1338</span> </span><span class="WHIT">        </span><span class="NAME">inTexture.getSprite</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setBlendFunc</span><span class="PUNC">(</span><span class="NAME">gl.ONE</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gl.ONE</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">                                             </span><span class="COMM">// inScene will lay on background and will not be used with alpha</span><span class="WHIT">
<span class='line'>1339</span> </span><span class="WHIT">        </span><span class="NAME">outTexture.getSprite</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setBlendFunc</span><span class="PUNC">(</span><span class="NAME">gl.SRC_ALPHA</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gl.ONE_MINUS_SRC_ALPHA</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">                      </span><span class="COMM">// we are going to blend outScene via alpha</span><span class="WHIT">
<span class='line'>1340</span> 
<span class='line'>1341</span> </span><span class="WHIT">        </span><span class="COMM">// add render textures to the layer</span><span class="WHIT">
<span class='line'>1342</span> </span><span class="WHIT">        </span><span class="NAME">layer.addChild</span><span class="PUNC">(</span><span class="NAME">inTexture</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1343</span> </span><span class="WHIT">        </span><span class="NAME">layer.addChild</span><span class="PUNC">(</span><span class="NAME">outTexture</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1344</span> 
<span class='line'>1345</span> </span><span class="WHIT">        </span><span class="COMM">// initial opacity:</span><span class="WHIT">
<span class='line'>1346</span> </span><span class="WHIT">        </span><span class="NAME">inTexture.getSprite</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setOpacity</span><span class="PUNC">(</span><span class="NUMB">255</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1347</span> </span><span class="WHIT">        </span><span class="NAME">outTexture.getSprite</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">setOpacity</span><span class="PUNC">(</span><span class="NUMB">255</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1348</span> 
<span class='line'>1349</span> </span><span class="WHIT">        </span><span class="COMM">// create the blend action</span><span class="WHIT">
<span class='line'>1350</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">layerAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1351</span> </span><span class="WHIT">            </span><span class="NAME">cc.FadeTo.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.hideOutShowIn</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1352</span> </span><span class="WHIT">            </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1353</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1354</span> 
<span class='line'>1355</span> </span><span class="WHIT">        </span><span class="COMM">// run the blend action</span><span class="WHIT">
<span class='line'>1356</span> </span><span class="WHIT">        </span><span class="NAME">outTexture.getSprite</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">runAction</span><span class="PUNC">(</span><span class="NAME">layerAction</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1357</span> 
<span class='line'>1358</span> </span><span class="WHIT">        </span><span class="COMM">// add the layer (which contains our two rendertextures) to the scene</span><span class="WHIT">
<span class='line'>1359</span> </span><span class="WHIT">        </span><span class="NAME">this.addChild</span><span class="PUNC">(</span><span class="NAME">layer</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SCENE_FADE</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1360</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1361</span> 
<span class='line'>1362</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1363</span>      * custom on exit
<span class='line'>1364</span>      */</span><span class="WHIT">
<span class='line'>1365</span> </span><span class="WHIT">    </span><span class="NAME">onExit</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1366</span> </span><span class="WHIT">        </span><span class="NAME">this.removeChildByTag</span><span class="PUNC">(</span><span class="NAME">cc.SCENE_FADE</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1367</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onExit.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1368</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1369</span> 
<span class='line'>1370</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1371</span>      * overide draw
<span class='line'>1372</span>      */</span><span class="WHIT">
<span class='line'>1373</span> </span><span class="WHIT">    </span><span class="NAME">draw</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1374</span> </span><span class="WHIT">        </span><span class="COMM">// override draw since both scenes (textures) are rendered in 1 scene</span><span class="WHIT">
<span class='line'>1375</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1376</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1377</span> 
<span class='line'>1378</span> </span><span class="COMM">/**
<span class='line'>1379</span>  * Cross fades two scenes using the cc.RenderTexture object.
<span class='line'>1380</span>  * @param {Number} t time in seconds
<span class='line'>1381</span>  * @param {cc.Scene} scene
<span class='line'>1382</span>  * @return {cc.TransitionCrossFade}
<span class='line'>1383</span>  * @example
<span class='line'>1384</span>  * // Example
<span class='line'>1385</span>  * var myTransition = cc.TransitionCrossFade.create(1.5, nextScene)
<span class='line'>1386</span>  */</span><span class="WHIT">
<span class='line'>1387</span> </span><span class="NAME">cc.TransitionCrossFade.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1388</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">Transition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionCrossFade</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1389</span> </span><span class="WHIT">    </span><span class="NAME">Transition.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1390</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">Transition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1391</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1392</span> 
<span class='line'>1393</span> </span><span class="COMM">/**
<span class='line'>1394</span>  *  Turn off the tiles of the outgoing scene in random order
<span class='line'>1395</span>  * @class
<span class='line'>1396</span>  * @extends cc.TransitionScene
<span class='line'>1397</span>  */</span><span class="WHIT">
<span class='line'>1398</span> </span><span class="NAME">cc.TransitionTurnOffTiles</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionTurnOffTiles# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1399</span> </span><span class="WHIT">    </span><span class="NAME">_sceneOrder</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1400</span> </span><span class="WHIT">        </span><span class="NAME">this._isInSceneOnTop</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1401</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1402</span> 
<span class='line'>1403</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1404</span>      * custom on enter
<span class='line'>1405</span>      */</span><span class="WHIT">
<span class='line'>1406</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1407</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1408</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">winSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1409</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">aspect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">winSize.width</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">winSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1410</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="WHIT"> </span><span class="PUNC">|</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NUMB">12</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">aspect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1411</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">12</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1412</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">toff</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TurnOffTiles.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1413</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.easeActionWithAction</span><span class="PUNC">(</span><span class="NAME">toff</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1414</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.StopGrid.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1415</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1416</span> 
<span class='line'>1417</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1418</span>      * @param {cc.ActionInterval} action
<span class='line'>1419</span>      * @return {cc.ActionInterval}
<span class='line'>1420</span>      */</span><span class="WHIT">
<span class='line'>1421</span> </span><span class="WHIT">    </span><span class="NAME">easeActionWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1422</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1423</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1424</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1425</span> 
<span class='line'>1426</span> </span><span class="COMM">/**
<span class='line'>1427</span>  *  Turn off the tiles of the outgoing scene in random order
<span class='line'>1428</span>  * @param {Number} t time in seconds
<span class='line'>1429</span>  * @param {cc.Scene} scene
<span class='line'>1430</span>  * @return {cc.TransitionTurnOffTiles}
<span class='line'>1431</span>  * @example
<span class='line'>1432</span>  * // Example
<span class='line'>1433</span>  * var myTransition = cc.TransitionTurnOffTiles.create(1.5, nextScene)
<span class='line'>1434</span>  */</span><span class="WHIT">
<span class='line'>1435</span> </span><span class="NAME">cc.TransitionTurnOffTiles.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1436</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionTurnOffTiles</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1437</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1438</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1439</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1440</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1441</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1442</span> 
<span class='line'>1443</span> </span><span class="COMM">/**
<span class='line'>1444</span>  *  The odd columns goes upwards while the even columns goes downwards.
<span class='line'>1445</span>  * @class
<span class='line'>1446</span>  * @extends cc.TransitionScene
<span class='line'>1447</span>  */</span><span class="WHIT">
<span class='line'>1448</span> </span><span class="NAME">cc.TransitionSplitCols</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionSplitCols# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1449</span> 
<span class='line'>1450</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1451</span>      * custom on enter
<span class='line'>1452</span>      */</span><span class="WHIT">
<span class='line'>1453</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1454</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1455</span> </span><span class="WHIT">        </span><span class="NAME">this._inScene.setVisible</span><span class="PUNC">(</span><span class="KEYW">false</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1456</span> 
<span class='line'>1457</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">split</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.action</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1458</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">seq</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1459</span> </span><span class="WHIT">            </span><span class="NAME">split</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.hideOutShowIn</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">split.reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1460</span> 
<span class='line'>1461</span> </span><span class="WHIT">        </span><span class="NAME">this.runAction</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1462</span> </span><span class="WHIT">            </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">this.easeActionWithAction</span><span class="PUNC">(</span><span class="NAME">seq</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.StopGrid.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1463</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1464</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1465</span> 
<span class='line'>1466</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1467</span>      * @param {cc.ActionInterval} action
<span class='line'>1468</span>      * @return {cc.EaseInOut}
<span class='line'>1469</span>      */</span><span class="WHIT">
<span class='line'>1470</span> </span><span class="WHIT">    </span><span class="NAME">easeActionWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1471</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.EaseInOut.create</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">3.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1472</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1473</span> 
<span class='line'>1474</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1475</span>      * @return {*}
<span class='line'>1476</span>      */</span><span class="WHIT">
<span class='line'>1477</span> </span><span class="WHIT">    </span><span class="NAME">action</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1478</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.SplitCols.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">3</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1479</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1480</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1481</span> 
<span class='line'>1482</span> </span><span class="COMM">/**
<span class='line'>1483</span>  * The odd columns goes upwards while the even columns goes downwards.
<span class='line'>1484</span>  * @param {Number} t time in seconds
<span class='line'>1485</span>  * @param {cc.Scene} scene
<span class='line'>1486</span>  * @return {cc.TransitionSplitCols}
<span class='line'>1487</span>  * @example
<span class='line'>1488</span>  * // Example
<span class='line'>1489</span>  * var myTransition = cc.TransitionSplitCols.create(1.5, nextScene)
<span class='line'>1490</span>  */</span><span class="WHIT">
<span class='line'>1491</span> </span><span class="NAME">cc.TransitionSplitCols.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1492</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSplitCols</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1493</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1494</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1495</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1496</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1497</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1498</span> 
<span class='line'>1499</span> </span><span class="COMM">/**
<span class='line'>1500</span>  *  The odd rows goes to the left while the even rows goes to the right.
<span class='line'>1501</span>  * @class
<span class='line'>1502</span>  * @extends cc.TransitionSplitCols
<span class='line'>1503</span>  */</span><span class="WHIT">
<span class='line'>1504</span> </span><span class="NAME">cc.TransitionSplitRows</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSplitCols.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionSplitRows# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1505</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1506</span>      * @return {*}
<span class='line'>1507</span>      */</span><span class="WHIT">
<span class='line'>1508</span> </span><span class="WHIT">    </span><span class="NAME">action</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1509</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.SplitRows.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">3</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1510</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1511</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1512</span> 
<span class='line'>1513</span> </span><span class="COMM">/**
<span class='line'>1514</span>  * The odd rows goes to the left while the even rows goes to the right.
<span class='line'>1515</span>  * @param {Number} t time in seconds
<span class='line'>1516</span>  * @param {cc.Scene} scene
<span class='line'>1517</span>  * @return {cc.TransitionSplitRows}
<span class='line'>1518</span>  * @example
<span class='line'>1519</span>  * // Example
<span class='line'>1520</span>  * var myTransition = cc.TransitionSplitRows.create(1.5, nextScene)
<span class='line'>1521</span>  */</span><span class="WHIT">
<span class='line'>1522</span> </span><span class="NAME">cc.TransitionSplitRows.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1523</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionSplitRows</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1524</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1525</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1526</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1527</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1528</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1529</span> 
<span class='line'>1530</span> </span><span class="COMM">/**
<span class='line'>1531</span>  *  Fade the tiles of the outgoing scene from the left-bottom corner the to top-right corner.
<span class='line'>1532</span>  * @class
<span class='line'>1533</span>  * @extends cc.TransitionScene
<span class='line'>1534</span>  */</span><span class="WHIT">
<span class='line'>1535</span> </span><span class="NAME">cc.TransitionFadeTR</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionScene.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionFadeTR# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1536</span> </span><span class="WHIT">    </span><span class="NAME">_sceneOrder</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1537</span> </span><span class="WHIT">        </span><span class="NAME">this._isInSceneOnTop</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1538</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1539</span> 
<span class='line'>1540</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1541</span>      * Custom on enter
<span class='line'>1542</span>      */</span><span class="WHIT">
<span class='line'>1543</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1544</span> </span><span class="WHIT">        </span><span class="NAME">cc.TransitionScene.prototype.onEnter.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1545</span> 
<span class='line'>1546</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">winSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Director.getInstance</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">.</span><span class="NAME">getWinSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1547</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">aspect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">winSize.width</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">winSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1548</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="WHIT"> </span><span class="PUNC">|</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NUMB">12</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">aspect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1549</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">12</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1550</span> 
<span class='line'>1551</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.actionWithSize</span><span class="PUNC">(</span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1552</span> </span><span class="WHIT">        </span><span class="NAME">this._outScene.runAction</span><span class="PUNC">(</span><span class="WHIT">
<span class='line'>1553</span> </span><span class="WHIT">            </span><span class="NAME">cc.Sequence.create</span><span class="PUNC">(</span><span class="NAME">this.easeActionWithAction</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc.create</span><span class="PUNC">(</span><span class="NAME">this.finish</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1554</span> </span><span class="WHIT">                </span><span class="NAME">cc.StopGrid.create</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1555</span> </span><span class="WHIT">        </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1556</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1557</span> 
<span class='line'>1558</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1559</span>      * @param {cc.ActionInterval} action
<span class='line'>1560</span>      * @return {cc.ActionInterval}
<span class='line'>1561</span>      */</span><span class="WHIT">
<span class='line'>1562</span> </span><span class="WHIT">    </span><span class="NAME">easeActionWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1563</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1564</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1565</span> 
<span class='line'>1566</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1567</span>      * @param {cc.Size} size
<span class='line'>1568</span>      * @return {*}
<span class='line'>1569</span>      */</span><span class="WHIT">
<span class='line'>1570</span> </span><span class="WHIT">    </span><span class="NAME">actionWithSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">size</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1571</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.FadeOutTRTiles.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">size</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1572</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1573</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1574</span> 
<span class='line'>1575</span> </span><span class="COMM">/**
<span class='line'>1576</span>  *  Fade the tiles of the outgoing scene from the left-bottom corner the to top-right corner.
<span class='line'>1577</span>  * @param {Number} t time in seconds
<span class='line'>1578</span>  * @param {cc.Scene} scene
<span class='line'>1579</span>  * @return {cc.TransitionFadeTR}
<span class='line'>1580</span>  * @example
<span class='line'>1581</span>  * // Example
<span class='line'>1582</span>  * var myTransition = cc.TransitionFadeTR.create(1.5, nextScene)
<span class='line'>1583</span>  */</span><span class="WHIT">
<span class='line'>1584</span> </span><span class="NAME">cc.TransitionFadeTR.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1585</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFadeTR</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1586</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1587</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1588</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1589</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1590</span> 
<span class='line'>1591</span> </span><span class="COMM">/**
<span class='line'>1592</span>  *  Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
<span class='line'>1593</span>  * @class
<span class='line'>1594</span>  * @extends cc.TransitionFadeTR
<span class='line'>1595</span>  */</span><span class="WHIT">
<span class='line'>1596</span> </span><span class="NAME">cc.TransitionFadeBL</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFadeTR.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionFadeBL# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1597</span> 
<span class='line'>1598</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1599</span>      * @param {cc.Size} size
<span class='line'>1600</span>      * @return {*}
<span class='line'>1601</span>      */</span><span class="WHIT">
<span class='line'>1602</span> </span><span class="WHIT">    </span><span class="NAME">actionWithSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">size</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1603</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.FadeOutBLTiles.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">size</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1604</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1605</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1606</span> 
<span class='line'>1607</span> </span><span class="COMM">/**
<span class='line'>1608</span>  * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
<span class='line'>1609</span>  * @param {Number} t time in seconds
<span class='line'>1610</span>  * @param {cc.Scene} scene
<span class='line'>1611</span>  * @return {cc.TransitionFadeBL}
<span class='line'>1612</span>  * @example
<span class='line'>1613</span>  * // Example
<span class='line'>1614</span>  * var myTransition = cc.TransitionFadeBL.create(1.5, nextScene)
<span class='line'>1615</span>  */</span><span class="WHIT">
<span class='line'>1616</span> </span><span class="NAME">cc.TransitionFadeBL.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1617</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFadeBL</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1618</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1619</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1620</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1621</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1622</span> 
<span class='line'>1623</span> </span><span class="COMM">/**
<span class='line'>1624</span>  * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
<span class='line'>1625</span>  * @class
<span class='line'>1626</span>  * @extends cc.TransitionFadeTR
<span class='line'>1627</span>  */</span><span class="WHIT">
<span class='line'>1628</span> </span><span class="NAME">cc.TransitionFadeUp</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFadeTR.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionFadeUp# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1629</span> 
<span class='line'>1630</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1631</span>      * @param {cc.Size} size
<span class='line'>1632</span>      * @return {*}
<span class='line'>1633</span>      */</span><span class="WHIT">
<span class='line'>1634</span> </span><span class="WHIT">    </span><span class="NAME">actionWithSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">size</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1635</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.FadeOutUpTiles.create</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">size</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1636</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1637</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1638</span> 
<span class='line'>1639</span> </span><span class="COMM">/**
<span class='line'>1640</span>  * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
<span class='line'>1641</span>  * @param {Number} t time in seconds
<span class='line'>1642</span>  * @param {cc.Scene} scene
<span class='line'>1643</span>  * @return {cc.TransitionFadeUp}
<span class='line'>1644</span>  * @example
<span class='line'>1645</span>  * // Example
<span class='line'>1646</span>  * var myTransition = cc.TransitionFadeUp.create(1.5, nextScene)
<span class='line'>1647</span>  */</span><span class="WHIT">
<span class='line'>1648</span> </span><span class="NAME">cc.TransitionFadeUp.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1649</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFadeUp</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1650</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1651</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1652</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1653</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1654</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1655</span> 
<span class='line'>1656</span> </span><span class="COMM">/**
<span class='line'>1657</span>  * Fade the tiles of the outgoing scene from the top to the bottom.
<span class='line'>1658</span>  * @class
<span class='line'>1659</span>  * @extends cc.TransitionFadeTR
<span class='line'>1660</span>  */</span><span class="WHIT">
<span class='line'>1661</span> </span><span class="NAME">cc.TransitionFadeDown</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFadeTR.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TransitionFadeDown# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1662</span> 
<span class='line'>1663</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1664</span>      * @param {cc.Size} size
<span class='line'>1665</span>      * @return {*}
<span class='line'>1666</span>      */</span><span class="WHIT">
<span class='line'>1667</span> </span><span class="WHIT">    </span><span class="NAME">actionWithSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">size</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1668</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.FadeOutDownTiles.create</span><span class="PUNC">(</span><span class="WHIT"> </span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">size</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1669</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1670</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1671</span> 
<span class='line'>1672</span> </span><span class="COMM">/**
<span class='line'>1673</span>  * Fade the tiles of the outgoing scene from the top to the bottom.
<span class='line'>1674</span>  * @param {Number} t time in seconds
<span class='line'>1675</span>  * @param {cc.Scene} scene
<span class='line'>1676</span>  * @return {cc.TransitionFadeDown}
<span class='line'>1677</span>  * @example
<span class='line'>1678</span>  * // Example
<span class='line'>1679</span>  * var myTransition = cc.TransitionFadeDown.create(1.5, nextScene)
<span class='line'>1680</span>  */</span><span class="WHIT">
<span class='line'>1681</span> </span><span class="NAME">cc.TransitionFadeDown.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1682</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TransitionFadeDown</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1683</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">tempScene</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempScene.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">scene</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1684</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tempScene</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1685</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1686</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1687</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1688</span> </span></pre></body></html>