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
<span class='line'> 28</span>  * Instant actions are immediate actions. They don't have a duration like.
<span class='line'> 29</span>  * the CCIntervalAction actions.
<span class='line'> 30</span>  * @class
<span class='line'> 31</span>  * @extends cc.FiniteTimeAction
<span class='line'> 32</span>  */</span><span class="WHIT">
<span class='line'> 33</span> </span><span class="NAME">cc.ActionInstant</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.FiniteTimeAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.ActionInstant# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 34</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 35</span>      * return true if the action has finished.
<span class='line'> 36</span>      * @return {Boolean}
<span class='line'> 37</span>      */</span><span class="WHIT">
<span class='line'> 38</span> </span><span class="WHIT">    </span><span class="NAME">isDone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 39</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 40</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 41</span> 
<span class='line'> 42</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 43</span>      * called every frame with it's delta time. &lt;br />
<span class='line'> 44</span>      * DON'T override unless you know what you are doing.
<span class='line'> 45</span>      * @param {Number} dt
<span class='line'> 46</span>      */</span><span class="WHIT">
<span class='line'> 47</span> </span><span class="WHIT">    </span><span class="NAME">step</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 48</span> </span><span class="WHIT">        </span><span class="NAME">this.update</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 49</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 50</span> 
<span class='line'> 51</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 52</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'> 53</span>      *
<span class='line'> 54</span>      * @param {Number} dt
<span class='line'> 55</span>      */</span><span class="WHIT">
<span class='line'> 56</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 57</span> </span><span class="WHIT">        </span><span class="COMM">//nothing</span><span class="WHIT">
<span class='line'> 58</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 59</span> 
<span class='line'> 60</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 61</span>      * returns a reversed action. &lt;br />
<span class='line'> 62</span>      * For example: &lt;br />
<span class='line'> 63</span>      * - The action will be x coordinates of 0 move to 100. &lt;br />
<span class='line'> 64</span>      * - The reversed action will be x of 100 move to 0.
<span class='line'> 65</span>      * - Will be rewritten
<span class='line'> 66</span>      * @returns {cc.Action}
<span class='line'> 67</span>      */</span><span class="WHIT">
<span class='line'> 68</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 70</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 71</span> 
<span class='line'> 72</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 73</span>      * to copy object with deep copy.
<span class='line'> 74</span>      * returns a clone of action.
<span class='line'> 75</span>      *
<span class='line'> 76</span>      * @return {cc.FiniteTimeAction}
<span class='line'> 77</span>      */</span><span class="WHIT">
<span class='line'> 78</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 79</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 80</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 81</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 82</span> 
<span class='line'> 83</span> </span><span class="COMM">/**
<span class='line'> 84</span>  * Show the node.
<span class='line'> 85</span>  * @class
<span class='line'> 86</span>  * @extends cc.ActionInstant
<span class='line'> 87</span>  */</span><span class="WHIT">
<span class='line'> 88</span> </span><span class="NAME">cc.Show</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Show# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 89</span> 
<span class='line'> 90</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 91</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'> 92</span>      *
<span class='line'> 93</span>      * @param {Number} dt
<span class='line'> 94</span>      */</span><span class="WHIT">
<span class='line'> 95</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 96</span> </span><span class="WHIT">        </span><span class="NAME">this.target.visible</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 97</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 98</span> 
<span class='line'> 99</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>100</span>      * returns a reversed action. &lt;br />
<span class='line'>101</span>      * For example: &lt;br />
<span class='line'>102</span>      * - The action will be x coordinates of 0 move to 100. &lt;br />
<span class='line'>103</span>      * - The reversed action will be x of 100 move to 0.
<span class='line'>104</span>      * - Will be rewritten
<span class='line'>105</span>      * @returns {cc.Hide}
<span class='line'>106</span>      */</span><span class="WHIT">
<span class='line'>107</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>108</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Hide</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>109</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>110</span> 
<span class='line'>111</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>112</span>      * to copy object with deep copy.
<span class='line'>113</span>      * returns a clone of action.
<span class='line'>114</span>      *
<span class='line'>115</span>      * @return {cc.FiniteTimeAction}
<span class='line'>116</span>      */</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>118</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Show</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>119</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>120</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>121</span> 
<span class='line'>122</span> </span><span class="COMM">/**
<span class='line'>123</span>  * Show the Node.
<span class='line'>124</span>  * @function
<span class='line'>125</span>  * @return {cc.Show}
<span class='line'>126</span>  * @example
<span class='line'>127</span>  * // example
<span class='line'>128</span>  * var showAction = cc.show();
<span class='line'>129</span>  */</span><span class="WHIT">
<span class='line'>130</span> </span><span class="NAME">cc.show</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>131</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Show</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>132</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>133</span> 
<span class='line'>134</span> </span><span class="COMM">/**
<span class='line'>135</span>  * Show the Node. Please use cc.show instead.
<span class='line'>136</span>  * @static
<span class='line'>137</span>  * @deprecated since v3.0 &lt;br /> Please use cc.show instead.
<span class='line'>138</span>  * @return {cc.Show}
<span class='line'>139</span>  */</span><span class="WHIT">
<span class='line'>140</span> </span><span class="NAME">cc.Show.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.show</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>141</span> 
<span class='line'>142</span> </span><span class="COMM">/**
<span class='line'>143</span>  * Hide the node.
<span class='line'>144</span>  * @class
<span class='line'>145</span>  * @extends cc.ActionInstant
<span class='line'>146</span>  */</span><span class="WHIT">
<span class='line'>147</span> </span><span class="NAME">cc.Hide</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Hide# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>148</span> 
<span class='line'>149</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>150</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>151</span>      *
<span class='line'>152</span>      * @param {Number} dt
<span class='line'>153</span>      */</span><span class="WHIT">
<span class='line'>154</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>155</span> </span><span class="WHIT">        </span><span class="NAME">this.target.visible</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>156</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>157</span> 
<span class='line'>158</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>159</span>      * returns a reversed action. &lt;br />
<span class='line'>160</span>      * For example: &lt;br />
<span class='line'>161</span>      * - The action will be x coordinates of 0 move to 100. &lt;br />
<span class='line'>162</span>      * - The reversed action will be x of 100 move to 0.
<span class='line'>163</span>      * - Will be rewritten
<span class='line'>164</span>      * @returns {cc.Show}
<span class='line'>165</span>      */</span><span class="WHIT">
<span class='line'>166</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>167</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Show</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>168</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>169</span> 
<span class='line'>170</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>171</span>      * to copy object with deep copy.
<span class='line'>172</span>      * returns a clone of action.
<span class='line'>173</span>      *
<span class='line'>174</span>      * @return {cc.Hide}
<span class='line'>175</span>      */</span><span class="WHIT">
<span class='line'>176</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>177</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Hide</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>178</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>179</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>180</span> 
<span class='line'>181</span> </span><span class="COMM">/**
<span class='line'>182</span>  * Hide the node.
<span class='line'>183</span>  * @function
<span class='line'>184</span>  * @return {cc.Hide}
<span class='line'>185</span>  * @example
<span class='line'>186</span>  * // example
<span class='line'>187</span>  * var hideAction = cc.hide();
<span class='line'>188</span>  */</span><span class="WHIT">
<span class='line'>189</span> </span><span class="NAME">cc.hide</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>190</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Hide</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>191</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>192</span> 
<span class='line'>193</span> </span><span class="COMM">/**
<span class='line'>194</span>  * Hide the node. Please use cc.hide instead.
<span class='line'>195</span>  * @static
<span class='line'>196</span>  * @deprecated since v3.0 &lt;br /> Please use cc.hide instead.
<span class='line'>197</span>  * @return {cc.Hide}
<span class='line'>198</span>  * @example
<span class='line'>199</span>  * // example
<span class='line'>200</span>  * var hideAction = cc.hide();
<span class='line'>201</span>  */</span><span class="WHIT">
<span class='line'>202</span> </span><span class="NAME">cc.Hide.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.hide</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>203</span> 
<span class='line'>204</span> </span><span class="COMM">/**
<span class='line'>205</span>  * Toggles the visibility of a node.
<span class='line'>206</span>  * @class
<span class='line'>207</span>  * @extends cc.ActionInstant
<span class='line'>208</span>  */</span><span class="WHIT">
<span class='line'>209</span> </span><span class="NAME">cc.ToggleVisibility</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.ToggleVisibility# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>210</span> 
<span class='line'>211</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>212</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>213</span>      *
<span class='line'>214</span>      * @param {Number} dt
<span class='line'>215</span>      */</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>217</span> </span><span class="WHIT">        </span><span class="NAME">this.target.visible</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">!</span><span class="NAME">this.target.visible</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>218</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>219</span> 
<span class='line'>220</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>221</span>      * returns a reversed action.
<span class='line'>222</span>      * @returns {cc.ToggleVisibility}
<span class='line'>223</span>      */</span><span class="WHIT">
<span class='line'>224</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>225</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ToggleVisibility</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>226</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>227</span> 
<span class='line'>228</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>229</span>      * to copy object with deep copy.
<span class='line'>230</span>      * returns a clone of action.
<span class='line'>231</span>      *
<span class='line'>232</span>      * @return {cc.ToggleVisibility}
<span class='line'>233</span>      */</span><span class="WHIT">
<span class='line'>234</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>235</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ToggleVisibility</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>236</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>237</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>238</span> 
<span class='line'>239</span> </span><span class="COMM">/**
<span class='line'>240</span>  * Toggles the visibility of a node.
<span class='line'>241</span>  * @function
<span class='line'>242</span>  * @return {cc.ToggleVisibility}
<span class='line'>243</span>  * @example
<span class='line'>244</span>  * // example
<span class='line'>245</span>  * var toggleVisibilityAction = cc.toggleVisibility();
<span class='line'>246</span>  */</span><span class="WHIT">
<span class='line'>247</span> </span><span class="NAME">cc.toggleVisibility</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>248</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ToggleVisibility</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>249</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>250</span> 
<span class='line'>251</span> </span><span class="COMM">/**
<span class='line'>252</span>  * Toggles the visibility of a node. Please use cc.toggleVisibility instead.
<span class='line'>253</span>  * @static
<span class='line'>254</span>  * @deprecated since v3.0 &lt;br /> Please use cc.toggleVisibility instead.
<span class='line'>255</span>  * @return {cc.ToggleVisibility}
<span class='line'>256</span>  */</span><span class="WHIT">
<span class='line'>257</span> </span><span class="NAME">cc.ToggleVisibility.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.toggleVisibility</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>258</span> 
<span class='line'>259</span> </span><span class="COMM">/**
<span class='line'>260</span>  * Delete self in the next frame.
<span class='line'>261</span>  * @class
<span class='line'>262</span>  * @extends cc.ActionInstant
<span class='line'>263</span>  * @param {Boolean} [isNeedCleanUp=true]
<span class='line'>264</span>  *
<span class='line'>265</span>  * @example
<span class='line'>266</span>  * // example
<span class='line'>267</span>  * var removeSelfAction = new cc.RemoveSelf(false);
<span class='line'>268</span>  */</span><span class="WHIT">
<span class='line'>269</span> </span><span class="NAME">cc.RemoveSelf</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant.extend</span><span class="PUNC">(</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>270</span> </span><span class="WHIT">     </span><span class="NAME">_isNeedCleanUp</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>271</span> 
<span class='line'>272</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>273</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>274</span> 	 * Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
<span class='line'>275</span> 	 * @param {Boolean} [isNeedCleanUp=true]
<span class='line'>276</span> 	 */</span><span class="WHIT">
<span class='line'>277</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">isNeedCleanUp</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>278</span> </span><span class="WHIT">        </span><span class="NAME">cc.FiniteTimeAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>279</span> 
<span class='line'>280</span> </span><span class="WHIT">	    </span><span class="NAME">isNeedCleanUp</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.init</span><span class="PUNC">(</span><span class="NAME">isNeedCleanUp</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>281</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>282</span> 
<span class='line'>283</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>284</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>285</span>      *
<span class='line'>286</span>      * @param {Number} dt
<span class='line'>287</span>      */</span><span class="WHIT">
<span class='line'>288</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>289</span> </span><span class="WHIT">        </span><span class="NAME">this.target.removeFromParent</span><span class="PUNC">(</span><span class="NAME">this._isNeedCleanUp</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>290</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>291</span> 
<span class='line'>292</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>293</span>      * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
<span class='line'>294</span>      * @param isNeedCleanUp
<span class='line'>295</span>      * @returns {boolean}
<span class='line'>296</span>      */</span><span class="WHIT">
<span class='line'>297</span> </span><span class="WHIT">    </span><span class="NAME">init</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">isNeedCleanUp</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>298</span> </span><span class="WHIT">        </span><span class="NAME">this._isNeedCleanUp</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">isNeedCleanUp</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>299</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>300</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>301</span> 
<span class='line'>302</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>303</span>      * returns a reversed action.
<span class='line'>304</span>      */</span><span class="WHIT">
<span class='line'>305</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>306</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RemoveSelf</span><span class="PUNC">(</span><span class="NAME">this._isNeedCleanUp</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>307</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>308</span> 
<span class='line'>309</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>310</span>      * to copy object with deep copy.
<span class='line'>311</span>      * returns a clone of action.
<span class='line'>312</span>      *
<span class='line'>313</span>      * @return {cc.RemoveSelf}
<span class='line'>314</span>      */</span><span class="WHIT">
<span class='line'>315</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>316</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RemoveSelf</span><span class="PUNC">(</span><span class="NAME">this._isNeedCleanUp</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>317</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>318</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>319</span> 
<span class='line'>320</span> </span><span class="COMM">/**
<span class='line'>321</span>  * Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
<span class='line'>322</span>  *
<span class='line'>323</span>  * @function
<span class='line'>324</span>  * @param {Boolean} [isNeedCleanUp=true]
<span class='line'>325</span>  * @return {cc.RemoveSelf}
<span class='line'>326</span>  *
<span class='line'>327</span>  * @example
<span class='line'>328</span>  * // example
<span class='line'>329</span>  * var removeSelfAction = cc.removeSelf();
<span class='line'>330</span>  */</span><span class="WHIT">
<span class='line'>331</span> </span><span class="NAME">cc.removeSelf</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">isNeedCleanUp</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>332</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RemoveSelf</span><span class="PUNC">(</span><span class="NAME">isNeedCleanUp</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>333</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>334</span> 
<span class='line'>335</span> </span><span class="COMM">/**
<span class='line'>336</span>  * Please use cc.removeSelf instead.
<span class='line'>337</span>  * Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
<span class='line'>338</span>  *
<span class='line'>339</span>  * @static
<span class='line'>340</span>  * @deprecated since v3.0 &lt;br /> Please use cc.removeSelf instead.
<span class='line'>341</span>  * @param {Boolean} [isNeedCleanUp=true]
<span class='line'>342</span>  * @return {cc.RemoveSelf}
<span class='line'>343</span>  */</span><span class="WHIT">
<span class='line'>344</span> </span><span class="NAME">cc.RemoveSelf.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.removeSelf</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>345</span> 
<span class='line'>346</span> </span><span class="COMM">/**
<span class='line'>347</span>  * Flips the sprite horizontally.
<span class='line'>348</span>  * @class
<span class='line'>349</span>  * @extends cc.ActionInstant
<span class='line'>350</span>  * @param {Boolean} flip Indicate whether the target should be flipped or not
<span class='line'>351</span>  *
<span class='line'>352</span>  * @example
<span class='line'>353</span>  * var flipXAction = new cc.FlipX(true);
<span class='line'>354</span>  */</span><span class="WHIT">
<span class='line'>355</span> </span><span class="NAME">cc.FlipX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.FlipX# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>356</span> </span><span class="WHIT">    </span><span class="NAME">_flippedX</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>357</span> 
<span class='line'>358</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>359</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>360</span> 	 * Create a FlipX action to flip or unflip the target.
<span class='line'>361</span> 	 * @param {Boolean} flip Indicate whether the target should be flipped or not
<span class='line'>362</span> 	 */</span><span class="WHIT">
<span class='line'>363</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>364</span> </span><span class="WHIT">        </span><span class="NAME">cc.FiniteTimeAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>365</span> </span><span class="WHIT">        </span><span class="NAME">this._flippedX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>366</span> </span><span class="WHIT">		</span><span class="NAME">flip</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithFlipX</span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>367</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>368</span> 
<span class='line'>369</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>370</span>      * initializes the action with a set flipX.
<span class='line'>371</span>      * @param {Boolean} flip
<span class='line'>372</span>      * @return {Boolean}
<span class='line'>373</span>      */</span><span class="WHIT">
<span class='line'>374</span> </span><span class="WHIT">    </span><span class="NAME">initWithFlipX</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>375</span> </span><span class="WHIT">        </span><span class="NAME">this._flippedX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">flip</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>376</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>377</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>378</span> 
<span class='line'>379</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>380</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>381</span>      *
<span class='line'>382</span>      * @param {Number}  dt
<span class='line'>383</span>      */</span><span class="WHIT">
<span class='line'>384</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>385</span> </span><span class="WHIT">        </span><span class="NAME">this.target.flippedX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._flippedX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>386</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>387</span> 
<span class='line'>388</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>389</span>      * returns a reversed action.
<span class='line'>390</span>      * @return {cc.FlipX}
<span class='line'>391</span>      */</span><span class="WHIT">
<span class='line'>392</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>393</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FlipX</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._flippedX</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>394</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>395</span> 
<span class='line'>396</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>397</span>      * to copy object with deep copy.
<span class='line'>398</span>      * returns a clone of action.
<span class='line'>399</span>      *
<span class='line'>400</span>      * @return {cc.FiniteTimeAction}
<span class='line'>401</span>      */</span><span class="WHIT">
<span class='line'>402</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>403</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FlipX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>404</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithFlipX</span><span class="PUNC">(</span><span class="NAME">this._flippedX</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>405</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>406</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>407</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>408</span> 
<span class='line'>409</span> </span><span class="COMM">/**
<span class='line'>410</span>  * Create a FlipX action to flip or unflip the target.
<span class='line'>411</span>  *
<span class='line'>412</span>  * @function
<span class='line'>413</span>  * @param {Boolean} flip Indicate whether the target should be flipped or not
<span class='line'>414</span>  * @return {cc.FlipX}
<span class='line'>415</span>  * @example
<span class='line'>416</span>  * var flipXAction = cc.flipX(true);
<span class='line'>417</span>  */</span><span class="WHIT">
<span class='line'>418</span> </span><span class="NAME">cc.flipX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>419</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FlipX</span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>420</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>421</span> 
<span class='line'>422</span> </span><span class="COMM">/**
<span class='line'>423</span>  * Plese use cc.flipX instead.
<span class='line'>424</span>  * Create a FlipX action to flip or unflip the target
<span class='line'>425</span>  *
<span class='line'>426</span>  * @static
<span class='line'>427</span>  * @deprecated since v3.0 &lt;br /> Plese use cc.flipX instead.
<span class='line'>428</span>  * @param {Boolean} flip Indicate whether the target should be flipped or not
<span class='line'>429</span>  * @return {cc.FlipX}
<span class='line'>430</span>  */</span><span class="WHIT">
<span class='line'>431</span> </span><span class="NAME">cc.FlipX.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.flipX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>432</span> 
<span class='line'>433</span> </span><span class="COMM">/**
<span class='line'>434</span>  * Flips the sprite vertically
<span class='line'>435</span>  * @class
<span class='line'>436</span>  * @extends cc.ActionInstant
<span class='line'>437</span>  * @param {Boolean} flip
<span class='line'>438</span>  * @example
<span class='line'>439</span>  * var flipYAction = new cc.FlipY(true);
<span class='line'>440</span>  */</span><span class="WHIT">
<span class='line'>441</span> </span><span class="NAME">cc.FlipY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.FlipY# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>442</span> </span><span class="WHIT">    </span><span class="NAME">_flippedY</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>443</span> 
<span class='line'>444</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>445</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>446</span> 	 * Create a FlipY action to flip or unflip the target.
<span class='line'>447</span> 	 *
<span class='line'>448</span> 	 * @param {Boolean} flip
<span class='line'>449</span> 	 */</span><span class="WHIT">
<span class='line'>450</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>451</span> </span><span class="WHIT">        </span><span class="NAME">cc.FiniteTimeAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>452</span> </span><span class="WHIT">        </span><span class="NAME">this._flippedY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>453</span> 
<span class='line'>454</span> </span><span class="WHIT">		</span><span class="NAME">flip</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithFlipY</span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>455</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>456</span> 
<span class='line'>457</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>458</span>      * initializes the action with a set flipY.
<span class='line'>459</span>      * @param {Boolean} flip
<span class='line'>460</span>      * @return {Boolean}
<span class='line'>461</span>      */</span><span class="WHIT">
<span class='line'>462</span> </span><span class="WHIT">    </span><span class="NAME">initWithFlipY</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>463</span> </span><span class="WHIT">        </span><span class="NAME">this._flippedY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">flip</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>464</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>465</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>466</span> 
<span class='line'>467</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>468</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>469</span>      *
<span class='line'>470</span>      * @param {Number}  dt
<span class='line'>471</span>      */</span><span class="WHIT">
<span class='line'>472</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>473</span> </span><span class="WHIT">        </span><span class="NAME">this.target.flippedY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._flippedY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>474</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>475</span> 
<span class='line'>476</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>477</span>      * returns a reversed action.
<span class='line'>478</span>      * @return {cc.FlipY}
<span class='line'>479</span>      */</span><span class="WHIT">
<span class='line'>480</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>481</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FlipY</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._flippedY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>482</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>483</span> 
<span class='line'>484</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>485</span>      * to copy object with deep copy.
<span class='line'>486</span>      * returns a clone of action.
<span class='line'>487</span>      *
<span class='line'>488</span>      * @return {cc.FlipY}
<span class='line'>489</span>      */</span><span class="WHIT">
<span class='line'>490</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>491</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FlipY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>492</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithFlipY</span><span class="PUNC">(</span><span class="NAME">this._flippedY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>493</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>494</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>495</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>496</span> 
<span class='line'>497</span> </span><span class="COMM">/**
<span class='line'>498</span>  * Create a FlipY action to flip or unflip the target.
<span class='line'>499</span>  *
<span class='line'>500</span>  * @function
<span class='line'>501</span>  * @param {Boolean} flip
<span class='line'>502</span>  * @return {cc.FlipY}
<span class='line'>503</span>  * @example
<span class='line'>504</span>  * var flipYAction = cc.flipY(true);
<span class='line'>505</span>  */</span><span class="WHIT">
<span class='line'>506</span> </span><span class="NAME">cc.flipY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>507</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FlipY</span><span class="PUNC">(</span><span class="NAME">flip</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>508</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>509</span> 
<span class='line'>510</span> </span><span class="COMM">/**
<span class='line'>511</span>  * Please use cc.flipY instead
<span class='line'>512</span>  * Create a FlipY action to flip or unflip the target
<span class='line'>513</span>  *
<span class='line'>514</span>  * @static
<span class='line'>515</span>  * @deprecated since v3.0 &lt;br /> Please use cc.flipY instead.
<span class='line'>516</span>  * @param {Boolean} flip
<span class='line'>517</span>  * @return {cc.FlipY}
<span class='line'>518</span>  */</span><span class="WHIT">
<span class='line'>519</span> </span><span class="NAME">cc.FlipY.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.flipY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>520</span> 
<span class='line'>521</span> </span><span class="COMM">/**
<span class='line'>522</span>  * Places the node in a certain position
<span class='line'>523</span>  * @class
<span class='line'>524</span>  * @extends cc.ActionInstant
<span class='line'>525</span>  * @param {cc.Point|Number} pos
<span class='line'>526</span>  * @param {Number} [y]
<span class='line'>527</span>  * @example
<span class='line'>528</span>  * var placeAction = new cc.Place.create(cc.p(200, 200));
<span class='line'>529</span>  * var placeAction = new cc.Place.create(200, 200);
<span class='line'>530</span>  */</span><span class="WHIT">
<span class='line'>531</span> </span><span class="NAME">cc.Place</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Place# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>532</span> </span><span class="WHIT">    </span><span class="NAME">_x</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>533</span> </span><span class="WHIT">	</span><span class="NAME">_y</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>534</span> 
<span class='line'>535</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>536</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>537</span> 	 * Creates a Place action with a position.
<span class='line'>538</span> 	 * @param {cc.Point|Number} pos
<span class='line'>539</span> 	 * @param {Number} [y]
<span class='line'>540</span> 	 */</span><span class="WHIT">
<span class='line'>541</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">pos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>542</span> </span><span class="WHIT">        </span><span class="NAME">cc.FiniteTimeAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>543</span> </span><span class="WHIT">        </span><span class="NAME">this._x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>544</span> </span><span class="WHIT">	    </span><span class="NAME">this._y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>545</span> 
<span class='line'>546</span> </span><span class="WHIT">		</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pos</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>547</span> </span><span class="WHIT">			</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pos.x</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>548</span> </span><span class="WHIT">				</span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">pos.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>549</span> </span><span class="WHIT">				</span><span class="NAME">pos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">pos.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>550</span> </span><span class="WHIT">			</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>551</span> </span><span class="WHIT">			</span><span class="NAME">this.initWithPosition</span><span class="PUNC">(</span><span class="NAME">pos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>552</span> </span><span class="WHIT">		</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>553</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>554</span> 
<span class='line'>555</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>556</span>      * Initializes a Place action with a position
<span class='line'>557</span>      * @param {number} x
<span class='line'>558</span>      * @param {number} y
<span class='line'>559</span>      * @return {Boolean}
<span class='line'>560</span>      */</span><span class="WHIT">
<span class='line'>561</span> </span><span class="WHIT">    </span><span class="NAME">initWithPosition</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>562</span> </span><span class="WHIT">        </span><span class="NAME">this._x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>563</span> </span><span class="WHIT">        </span><span class="NAME">this._y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>564</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>565</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>566</span> 
<span class='line'>567</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>568</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>569</span>      *
<span class='line'>570</span>      * @param {Number}  dt
<span class='line'>571</span>      */</span><span class="WHIT">
<span class='line'>572</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>573</span> </span><span class="WHIT">        </span><span class="NAME">this.target.setPosition</span><span class="PUNC">(</span><span class="NAME">this._x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>574</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>575</span> 
<span class='line'>576</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>577</span>      * to copy object with deep copy.
<span class='line'>578</span>      * returns a clone of action.
<span class='line'>579</span>      *
<span class='line'>580</span>      * @return {cc.Place}
<span class='line'>581</span>      */</span><span class="WHIT">
<span class='line'>582</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>583</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Place</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>584</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithPosition</span><span class="PUNC">(</span><span class="NAME">this._x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>585</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>586</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>587</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>588</span> 
<span class='line'>589</span> </span><span class="COMM">/**
<span class='line'>590</span>  * Creates a Place action with a position.
<span class='line'>591</span>  * @function
<span class='line'>592</span>  * @param {cc.Point|Number} pos
<span class='line'>593</span>  * @param {Number} [y]
<span class='line'>594</span>  * @return {cc.Place}
<span class='line'>595</span>  * @example
<span class='line'>596</span>  * // example
<span class='line'>597</span>  * var placeAction = cc.place(cc.p(200, 200));
<span class='line'>598</span>  * var placeAction = cc.place(200, 200);
<span class='line'>599</span>  */</span><span class="WHIT">
<span class='line'>600</span> </span><span class="NAME">cc.place</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>601</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Place</span><span class="PUNC">(</span><span class="NAME">pos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>602</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>603</span> 
<span class='line'>604</span> </span><span class="COMM">/**
<span class='line'>605</span>  * Please use cc.place instead.
<span class='line'>606</span>  * Creates a Place action with a position.
<span class='line'>607</span>  * @static
<span class='line'>608</span>  * @deprecated since v3.0 &lt;br /> Please use cc.place instead.
<span class='line'>609</span>  * @param {cc.Point|Number} pos
<span class='line'>610</span>  * @param {Number} [y]
<span class='line'>611</span>  * @return {cc.Place}
<span class='line'>612</span>  */</span><span class="WHIT">
<span class='line'>613</span> </span><span class="NAME">cc.Place.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.place</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>614</span> 
<span class='line'>615</span> 
<span class='line'>616</span> </span><span class="COMM">/**
<span class='line'>617</span>  * Calls a 'callback'.
<span class='line'>618</span>  * @class
<span class='line'>619</span>  * @extends cc.ActionInstant
<span class='line'>620</span>  * @param {function} selector
<span class='line'>621</span>  * @param {object|null} [selectorTarget]
<span class='line'>622</span>  * @param {*|null} [data] data for function, it accepts all data types.
<span class='line'>623</span>  * @example
<span class='line'>624</span>  * // example
<span class='line'>625</span>  * // CallFunc without data
<span class='line'>626</span>  * var finish = new cc.CallFunc(this.removeSprite, this);
<span class='line'>627</span>  *
<span class='line'>628</span>  * // CallFunc with data
<span class='line'>629</span>  * var finish = new cc.CallFunc(this.removeFromParentAndCleanup, this,  true);
<span class='line'>630</span>  */</span><span class="WHIT">
<span class='line'>631</span> </span><span class="NAME">cc.CallFunc</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.CallFunc# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>632</span> </span><span class="WHIT">    </span><span class="NAME">_selectorTarget</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>633</span> </span><span class="WHIT">    </span><span class="NAME">_callFunc</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>634</span> </span><span class="WHIT">    </span><span class="NAME">_function</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>635</span> </span><span class="WHIT">    </span><span class="NAME">_data</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>636</span> 
<span class='line'>637</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>638</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>639</span> 	 * Creates a CallFunc action with the callback.
<span class='line'>640</span> 	 * @param {function} selector
<span class='line'>641</span> 	 * @param {object|null} [selectorTarget]
<span class='line'>642</span> 	 * @param {*|null} [data] data for function, it accepts all data types.
<span class='line'>643</span> 	 */</span><span class="WHIT">
<span class='line'>644</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">selector</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selectorTarget</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">data</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>645</span> </span><span class="WHIT">        </span><span class="NAME">cc.FiniteTimeAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>646</span> 
<span class='line'>647</span> </span><span class="WHIT">		</span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">selector</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>648</span> </span><span class="WHIT">			</span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">selectorTarget</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>649</span> </span><span class="WHIT">				</span><span class="NAME">this.initWithFunction</span><span class="PUNC">(</span><span class="NAME">selector</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>650</span> </span><span class="WHIT">			</span><span class="KEYW">else</span><span class="WHIT"> </span><span class="NAME">this.initWithFunction</span><span class="PUNC">(</span><span class="NAME">selector</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selectorTarget</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">data</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>651</span> </span><span class="WHIT">		</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>652</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>653</span> 
<span class='line'>654</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>655</span>      * Initializes the action with a function or function and its target
<span class='line'>656</span>      * @param {function} selector
<span class='line'>657</span>      * @param {object|Null} selectorTarget
<span class='line'>658</span>      * @param {*|Null} [data] data for function, it accepts all data types.
<span class='line'>659</span>      * @return {Boolean}
<span class='line'>660</span>      */</span><span class="WHIT">
<span class='line'>661</span> </span><span class="WHIT">    </span><span class="NAME">initWithFunction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">selector</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selectorTarget</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">data</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>662</span> </span><span class="WHIT">	    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">selectorTarget</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>663</span> </span><span class="WHIT">            </span><span class="NAME">this._data</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">data</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>664</span> </span><span class="WHIT">            </span><span class="NAME">this._callFunc</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">selector</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>665</span> </span><span class="WHIT">            </span><span class="NAME">this._selectorTarget</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">selectorTarget</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>666</span> </span><span class="WHIT">	    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>667</span> </span><span class="WHIT">	    </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">selector</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>668</span> </span><span class="WHIT">		    </span><span class="NAME">this._function</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">selector</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>669</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>670</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>671</span> 
<span class='line'>672</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>673</span>      * execute the function.
<span class='line'>674</span>      */</span><span class="WHIT">
<span class='line'>675</span> </span><span class="WHIT">    </span><span class="NAME">execute</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>676</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._callFunc</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">         </span><span class="COMM">//CallFunc, N, ND</span><span class="WHIT">
<span class='line'>677</span> </span><span class="WHIT">            </span><span class="NAME">this._callFunc.call</span><span class="PUNC">(</span><span class="NAME">this._selectorTarget</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.target</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._data</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>678</span> </span><span class="WHIT">        </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._function</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>679</span> </span><span class="WHIT">            </span><span class="NAME">this._function.call</span><span class="PUNC">(</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>680</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>681</span> 
<span class='line'>682</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>683</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>684</span>      *
<span class='line'>685</span>      * @param {Number}  dt
<span class='line'>686</span>      */</span><span class="WHIT">
<span class='line'>687</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>688</span> </span><span class="WHIT">        </span><span class="NAME">this.execute</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>689</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>690</span> 
<span class='line'>691</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>692</span>      * Get selectorTarget.
<span class='line'>693</span>      * @return {object}
<span class='line'>694</span>      */</span><span class="WHIT">
<span class='line'>695</span> </span><span class="WHIT">    </span><span class="NAME">getTargetCallback</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>696</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._selectorTarget</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>697</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>698</span> 
<span class='line'>699</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>700</span>      * Set selectorTarget.
<span class='line'>701</span>      * @param {object} sel
<span class='line'>702</span>      */</span><span class="WHIT">
<span class='line'>703</span> </span><span class="WHIT">    </span><span class="NAME">setTargetCallback</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">sel</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>704</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">sel</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="NAME">this._selectorTarget</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>705</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._selectorTarget</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>706</span> </span><span class="WHIT">                </span><span class="NAME">this._selectorTarget</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>707</span> </span><span class="WHIT">            </span><span class="NAME">this._selectorTarget</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">sel</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>708</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>709</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>710</span> 
<span class='line'>711</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>712</span>      * to copy object with deep copy.
<span class='line'>713</span>      * returns a clone of action.
<span class='line'>714</span>      *
<span class='line'>715</span>      * @return {cc.CallFunc}
<span class='line'>716</span>      */</span><span class="WHIT">
<span class='line'>717</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>718</span> </span><span class="WHIT">       </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>719</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._selectorTarget</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>720</span> </span><span class="WHIT">             </span><span class="NAME">action.initWithFunction</span><span class="PUNC">(</span><span class="NAME">this._callFunc</span><span class="PUNC">,</span><span class="WHIT">  </span><span class="NAME">this._selectorTarget</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._data</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>721</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._function</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>722</span> </span><span class="WHIT">             </span><span class="NAME">action.initWithFunction</span><span class="PUNC">(</span><span class="NAME">this._function</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>723</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>724</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>725</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>726</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>727</span> 
<span class='line'>728</span> </span><span class="COMM">/**
<span class='line'>729</span>  * Creates the action with the callback
<span class='line'>730</span>  * @function
<span class='line'>731</span>  * @param {function} selector
<span class='line'>732</span>  * @param {object|null} [selectorTarget]
<span class='line'>733</span>  * @param {*|null} [data] data for function, it accepts all data types.
<span class='line'>734</span>  * @return {cc.CallFunc}
<span class='line'>735</span>  * @example
<span class='line'>736</span>  * // example
<span class='line'>737</span>  * // CallFunc without data
<span class='line'>738</span>  * var finish = cc.callFunc(this.removeSprite, this);
<span class='line'>739</span>  *
<span class='line'>740</span>  * // CallFunc with data
<span class='line'>741</span>  * var finish = cc.callFunc(this.removeFromParentAndCleanup, this._grossini,  true);
<span class='line'>742</span>  */</span><span class="WHIT">
<span class='line'>743</span> </span><span class="NAME">cc.callFunc</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">selector</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selectorTarget</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">data</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>744</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.CallFunc</span><span class="PUNC">(</span><span class="NAME">selector</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selectorTarget</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">data</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>745</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>746</span> 
<span class='line'>747</span> </span><span class="COMM">/**
<span class='line'>748</span>  * Please use cc.callFunc instead.
<span class='line'>749</span>  * Creates the action with the callback.
<span class='line'>750</span>  * @static
<span class='line'>751</span>  * @deprecated since v3.0 &lt;br /> Please use cc.callFunc instead.
<span class='line'>752</span>  * @param {function} selector
<span class='line'>753</span>  * @param {object|null} [selectorTarget]
<span class='line'>754</span>  * @param {*|null} [data] data for function, it accepts all data types.
<span class='line'>755</span>  * @return {cc.CallFunc}
<span class='line'>756</span>  */</span><span class="WHIT">
<span class='line'>757</span> </span><span class="NAME">cc.CallFunc.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.callFunc</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>758</span> </span></pre></body></html>