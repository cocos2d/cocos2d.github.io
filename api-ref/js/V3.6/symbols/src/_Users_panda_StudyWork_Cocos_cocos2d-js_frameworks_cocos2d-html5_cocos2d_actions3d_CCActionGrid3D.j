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
<span class='line'> 28</span>  * cc.Waves3D action. &lt;br />
<span class='line'> 29</span>  * Reference the test cases (Effects Advanced Test)
<span class='line'> 30</span>  * @class
<span class='line'> 31</span>  * @extends cc.Grid3DAction
<span class='line'> 32</span>  * @param {Number} duration
<span class='line'> 33</span>  * @param {cc.Size} gridSize
<span class='line'> 34</span>  * @param {Number} waves
<span class='line'> 35</span>  * @param {Number} amplitude
<span class='line'> 36</span>  */</span><span class="WHIT">
<span class='line'> 37</span> </span><span class="NAME">cc.Waves3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Waves3D# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 38</span> </span><span class="WHIT">    </span><span class="NAME">_waves</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 39</span> </span><span class="WHIT">    </span><span class="NAME">_amplitude</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 40</span> </span><span class="WHIT">    </span><span class="NAME">_amplitudeRate</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 41</span> 
<span class='line'> 42</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 43</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'> 44</span> 	 * Create a wave 3d action with duration, grid size, waves and amplitude.
<span class='line'> 45</span> 	 * @param {Number} duration
<span class='line'> 46</span> 	 * @param {cc.Size} gridSize
<span class='line'> 47</span> 	 * @param {Number} waves
<span class='line'> 48</span> 	 * @param {Number} amplitude
<span class='line'> 49</span> 	 */</span><span class="WHIT">
<span class='line'> 50</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 51</span> </span><span class="WHIT">        </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 52</span> </span><span class="WHIT">		</span><span class="NAME">amplitude</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 53</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 54</span> 
<span class='line'> 55</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 56</span>      * get Amplitude
<span class='line'> 57</span>      * @return {Number}
<span class='line'> 58</span>      */</span><span class="WHIT">
<span class='line'> 59</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 60</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 61</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 62</span> 
<span class='line'> 63</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 64</span>      * set Amplitude
<span class='line'> 65</span>      * @param {Number} amplitude
<span class='line'> 66</span>      */</span><span class="WHIT">
<span class='line'> 67</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 68</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 70</span> 
<span class='line'> 71</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 72</span>      * get Amplitude Rate
<span class='line'> 73</span>      * @return {Number}
<span class='line'> 74</span>      */</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 76</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 77</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 78</span> 
<span class='line'> 79</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 80</span>      * set Amplitude Rate
<span class='line'> 81</span>      * @param {Number} amplitudeRate
<span class='line'> 82</span>      */</span><span class="WHIT">
<span class='line'> 83</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitudeRate</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 84</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 85</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 86</span> 
<span class='line'> 87</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 88</span>      * initializes an action with duration, grid size, waves and amplitude
<span class='line'> 89</span>      * @param {Number} duration
<span class='line'> 90</span>      * @param {cc.Size} gridSize
<span class='line'> 91</span>      * @param {Number} waves
<span class='line'> 92</span>      * @param {Number} amplitude
<span class='line'> 93</span>      * @return {Boolean}
<span class='line'> 94</span>      */</span><span class="WHIT">
<span class='line'> 95</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 96</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 97</span> </span><span class="WHIT">            </span><span class="NAME">this._waves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 98</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>100</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>101</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>102</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>103</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>104</span> 
<span class='line'>105</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>106</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>107</span>      *
<span class='line'>108</span>      * @param {Number}  dt
<span class='line'>109</span>      */</span><span class="WHIT">
<span class='line'>110</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>111</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locGridSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>112</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locPos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>113</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._waves</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>114</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locGridSize.width</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">i</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>115</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locGridSize.height</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">j</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>116</span> </span><span class="WHIT">                </span><span class="NAME">locPos.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">                </span><span class="NAME">locPos.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">j</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>118</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>119</span> </span><span class="WHIT">                </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">v.x</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">0.01</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>120</span> </span><span class="WHIT">                </span><span class="COMM">//cc.log("v.z offset is" + (Math.sin(Math.PI * dt * this._waves * 2 + (v.y + v.x) * 0.01) * this._amplitude * this._amplitudeRate));</span><span class="WHIT">
<span class='line'>121</span> </span><span class="WHIT">                </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>122</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>123</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>124</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>125</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>126</span> 
<span class='line'>127</span> </span><span class="COMM">/**
<span class='line'>128</span>  * Create a wave 3d action with duration, grid size, waves and amplitude.
<span class='line'>129</span>  * @function
<span class='line'>130</span>  * @param {Number} duration
<span class='line'>131</span>  * @param {cc.Size} gridSize
<span class='line'>132</span>  * @param {Number} waves
<span class='line'>133</span>  * @param {Number} amplitude
<span class='line'>134</span>  */</span><span class="WHIT">
<span class='line'>135</span> </span><span class="NAME">cc.waves3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>136</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Waves3D</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>137</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>138</span> </span><span class="COMM">/**
<span class='line'>139</span>  * Please use cc.waves3D instead. &lt;br />
<span class='line'>140</span>  * Create a wave 3d action with duration, grid size, waves and amplitude.
<span class='line'>141</span>  * @param {Number} duration
<span class='line'>142</span>  * @param {cc.Size} gridSize
<span class='line'>143</span>  * @param {Number} waves
<span class='line'>144</span>  * @param {Number} amplitude
<span class='line'>145</span>  * @static
<span class='line'>146</span>  * @deprecated since v3.0 &lt;br /> Please use cc.waves3D instead.
<span class='line'>147</span>  */</span><span class="WHIT">
<span class='line'>148</span> </span><span class="NAME">cc.Waves3D.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.waves3D</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>149</span> 
<span class='line'>150</span> </span><span class="COMM">/**
<span class='line'>151</span>  * cc.FlipX3D action. &lt;br />
<span class='line'>152</span>  * Flip around. &lt;br />
<span class='line'>153</span>  * Reference the test cases (Effects Test)
<span class='line'>154</span>  * @class
<span class='line'>155</span>  * @extends cc.Grid3DAction
<span class='line'>156</span>  * @param {Number} duration
<span class='line'>157</span>  */</span><span class="WHIT">
<span class='line'>158</span> </span><span class="NAME">cc.FlipX3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.FlipX3D# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>159</span> 
<span class='line'>160</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>161</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>162</span> 	 * Create a Flip X 3D action with duration.
<span class='line'>163</span> 	 * @param {Number} duration
<span class='line'>164</span> 	 */</span><span class="WHIT">
<span class='line'>165</span> </span><span class="WHIT">	</span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>166</span> </span><span class="WHIT">		</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>167</span> </span><span class="WHIT">			</span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>168</span> </span><span class="WHIT">		</span><span class="KEYW">else</span><span class="WHIT"> </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>169</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>170</span> 
<span class='line'>171</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>172</span>      * initializes the action with duration
<span class='line'>173</span>      * @param {Number} duration
<span class='line'>174</span>      * @return {Boolean}
<span class='line'>175</span>      */</span><span class="WHIT">
<span class='line'>176</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>177</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>178</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>179</span> 
<span class='line'>180</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>181</span>      * initializes the action with gridSize and duration
<span class='line'>182</span>      * @param {cc.Size} gridSize
<span class='line'>183</span>      * @param {Number} duration
<span class='line'>184</span>      * @return {Boolean}
<span class='line'>185</span>      */</span><span class="WHIT">
<span class='line'>186</span> </span><span class="WHIT">    </span><span class="NAME">initWithSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>187</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">gridSize.width</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">gridSize.height</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>188</span> </span><span class="WHIT">            </span><span class="COMM">// Grid size must be (1,1)</span><span class="WHIT">
<span class='line'>189</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"Grid size must be (1,1)"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>190</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>191</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>192</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT">  </span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>193</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>194</span> 
<span class='line'>195</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>196</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>197</span>      *
<span class='line'>198</span>      * @param {Number}  dt
<span class='line'>199</span>      */</span><span class="WHIT">
<span class='line'>200</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>201</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">angle</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="COMM">// 180 degrees</span><span class="WHIT">
<span class='line'>202</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">mz</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">angle</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>203</span> </span><span class="WHIT">        </span><span class="NAME">angle</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">angle</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="COMM">// x calculates degrees from 0 to 90</span><span class="WHIT">
<span class='line'>204</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">mx</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.cos</span><span class="PUNC">(</span><span class="NAME">angle</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>205</span> 
<span class='line'>206</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">diff</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Vertex3F</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>207</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempVer</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>208</span> </span><span class="WHIT">        </span><span class="NAME">tempVer.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">tempVer.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>209</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v0</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">tempVer</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>210</span> </span><span class="WHIT">        </span><span class="NAME">tempVer.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">tempVer.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>211</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v1</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">tempVer</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>212</span> 
<span class='line'>213</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x0</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">v0.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>214</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x1</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">v1.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>215</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">a</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">b</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">d</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>217</span> 
<span class='line'>218</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">x0</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NAME">x1</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>219</span> </span><span class="WHIT">            </span><span class="COMM">// Normal Grid</span><span class="WHIT">
<span class='line'>220</span> </span><span class="WHIT">            </span><span class="NAME">a</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>221</span> </span><span class="WHIT">            </span><span class="NAME">b</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>222</span> </span><span class="WHIT">            </span><span class="NAME">c</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>223</span> </span><span class="WHIT">            </span><span class="NAME">d</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>224</span> </span><span class="WHIT">            </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>225</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>226</span> </span><span class="WHIT">            </span><span class="COMM">// Reversed Grid</span><span class="WHIT">
<span class='line'>227</span> </span><span class="WHIT">            </span><span class="NAME">c</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>228</span> </span><span class="WHIT">            </span><span class="NAME">d</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>229</span> </span><span class="WHIT">            </span><span class="NAME">a</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>230</span> </span><span class="WHIT">            </span><span class="NAME">b</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>231</span> </span><span class="WHIT">            </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>232</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>233</span> 
<span class='line'>234</span> </span><span class="WHIT">        </span><span class="NAME">diff.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">mx</span><span class="WHIT"> </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>235</span> </span><span class="WHIT">        </span><span class="NAME">diff.z</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.abs</span><span class="PUNC">(</span><span class="NAME">parseFloat</span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">mz</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">4.0</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>236</span> 
<span class='line'>237</span> </span><span class="WHIT">        </span><span class="COMM">// bottom-left</span><span class="WHIT">
<span class='line'>238</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>239</span> </span><span class="WHIT">        </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>240</span> </span><span class="WHIT">        </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.z</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>241</span> </span><span class="WHIT">        </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>242</span> 
<span class='line'>243</span> </span><span class="WHIT">        </span><span class="COMM">// upper-left</span><span class="WHIT">
<span class='line'>244</span> </span><span class="WHIT">        </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">b</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>245</span> </span><span class="WHIT">        </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>246</span> </span><span class="WHIT">        </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.z</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>247</span> </span><span class="WHIT">        </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">b</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>248</span> 
<span class='line'>249</span> </span><span class="WHIT">        </span><span class="COMM">// bottom-right</span><span class="WHIT">
<span class='line'>250</span> </span><span class="WHIT">        </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">c</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>251</span> </span><span class="WHIT">        </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>252</span> </span><span class="WHIT">        </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.z</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>253</span> </span><span class="WHIT">        </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">c</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>254</span> 
<span class='line'>255</span> </span><span class="WHIT">        </span><span class="COMM">// upper-right</span><span class="WHIT">
<span class='line'>256</span> </span><span class="WHIT">        </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>257</span> </span><span class="WHIT">        </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>258</span> </span><span class="WHIT">        </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.z</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>259</span> </span><span class="WHIT">        </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>260</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>261</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>262</span> 
<span class='line'>263</span> </span><span class="COMM">/**
<span class='line'>264</span>  * Create a Flip X 3D action with duration. &lt;br />
<span class='line'>265</span>  * Flip around.
<span class='line'>266</span>  * @function
<span class='line'>267</span>  * @param {Number} duration
<span class='line'>268</span>  * @return {cc.FlipX3D}
<span class='line'>269</span>  */</span><span class="WHIT">
<span class='line'>270</span> </span><span class="NAME">cc.flipX3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>271</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FlipX3D</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>272</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>273</span> 
<span class='line'>274</span> </span><span class="COMM">/**
<span class='line'>275</span>  * Please use cc.flipX3D instead. &lt;br />
<span class='line'>276</span>  * Create a Flip X 3D action with duration. &lt;br />
<span class='line'>277</span>  * Flip around.
<span class='line'>278</span>  * @param {Number} duration
<span class='line'>279</span>  * @return {cc.FlipX3D}
<span class='line'>280</span>  * @static
<span class='line'>281</span>  * @deprecated since v3.0 &lt;br /> Please use cc.flipX3D instead.
<span class='line'>282</span>  */</span><span class="WHIT">
<span class='line'>283</span> </span><span class="NAME">cc.FlipX3D.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.flipX3D</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>284</span> 
<span class='line'>285</span> </span><span class="COMM">/**
<span class='line'>286</span>  * cc.FlipY3D action. &lt;br />
<span class='line'>287</span>  * Upside down. &lt;br />
<span class='line'>288</span>  * Reference the test cases (Effects Test)
<span class='line'>289</span>  * @class
<span class='line'>290</span>  * @extends cc.FlipX3D
<span class='line'>291</span>  * @param {Number} duration
<span class='line'>292</span>  */</span><span class="WHIT">
<span class='line'>293</span> </span><span class="NAME">cc.FlipY3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.FlipX3D.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.FlipY3D# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>294</span> 
<span class='line'>295</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>296</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>297</span> 	 * Create a flip Y 3d action with duration.
<span class='line'>298</span> 	 * @param {Number} duration
<span class='line'>299</span> 	 */</span><span class="WHIT">
<span class='line'>300</span> </span><span class="WHIT">	</span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>301</span> </span><span class="WHIT">		</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>302</span> </span><span class="WHIT">			</span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>303</span> </span><span class="WHIT">		</span><span class="KEYW">else</span><span class="WHIT"> </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>304</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>305</span> 
<span class='line'>306</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>307</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>308</span>      *
<span class='line'>309</span>      * @param {Number}  dt
<span class='line'>310</span>      */</span><span class="WHIT">
<span class='line'>311</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>312</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">angle</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="COMM">// 180 degrees</span><span class="WHIT">
<span class='line'>313</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">mz</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">angle</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>314</span> </span><span class="WHIT">        </span><span class="NAME">angle</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">angle</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">;</span><span class="WHIT">     </span><span class="COMM">// x calculates degrees from 0 to 90</span><span class="WHIT">
<span class='line'>315</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">my</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.cos</span><span class="PUNC">(</span><span class="NAME">angle</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>316</span> 
<span class='line'>317</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">diff</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Vertex3F</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>318</span> 
<span class='line'>319</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tempP</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>320</span> </span><span class="WHIT">        </span><span class="NAME">tempP.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">tempP.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>321</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v0</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">tempP</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>322</span> </span><span class="WHIT">        </span><span class="NAME">tempP.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">tempP.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>323</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v1</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">tempP</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>324</span> 
<span class='line'>325</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y0</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">v0.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>326</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y1</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">v1.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>327</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>328</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">a</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">b</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">d</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>329</span> 
<span class='line'>330</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">y0</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NAME">y1</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>331</span> </span><span class="WHIT">            </span><span class="COMM">// Normal Grid</span><span class="WHIT">
<span class='line'>332</span> </span><span class="WHIT">            </span><span class="NAME">a</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>333</span> </span><span class="WHIT">            </span><span class="NAME">b</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>334</span> </span><span class="WHIT">            </span><span class="NAME">c</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>335</span> </span><span class="WHIT">            </span><span class="NAME">d</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>336</span> </span><span class="WHIT">            </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>337</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>338</span> </span><span class="WHIT">            </span><span class="COMM">// Reversed Grid</span><span class="WHIT">
<span class='line'>339</span> </span><span class="WHIT">            </span><span class="NAME">b</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>340</span> </span><span class="WHIT">            </span><span class="NAME">a</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>341</span> </span><span class="WHIT">            </span><span class="NAME">d</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>342</span> </span><span class="WHIT">            </span><span class="NAME">c</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>343</span> </span><span class="WHIT">            </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>344</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>345</span> 
<span class='line'>346</span> </span><span class="WHIT">        </span><span class="NAME">diff.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">my</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>347</span> </span><span class="WHIT">        </span><span class="NAME">diff.z</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.abs</span><span class="PUNC">(</span><span class="NAME">parseFloat</span><span class="PUNC">(</span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">mz</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">4.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>348</span> 
<span class='line'>349</span> </span><span class="WHIT">        </span><span class="COMM">// bottom-left</span><span class="WHIT">
<span class='line'>350</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>351</span> </span><span class="WHIT">        </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>352</span> </span><span class="WHIT">        </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.z</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>353</span> </span><span class="WHIT">        </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>354</span> 
<span class='line'>355</span> </span><span class="WHIT">        </span><span class="COMM">// upper-left</span><span class="WHIT">
<span class='line'>356</span> </span><span class="WHIT">        </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">b</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>357</span> </span><span class="WHIT">        </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>358</span> </span><span class="WHIT">        </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.z</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>359</span> </span><span class="WHIT">        </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">b</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>360</span> 
<span class='line'>361</span> </span><span class="WHIT">        </span><span class="COMM">// bottom-right</span><span class="WHIT">
<span class='line'>362</span> </span><span class="WHIT">        </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">c</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>363</span> </span><span class="WHIT">        </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>364</span> </span><span class="WHIT">        </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.z</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>365</span> </span><span class="WHIT">        </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">c</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>366</span> 
<span class='line'>367</span> </span><span class="WHIT">        </span><span class="COMM">// upper-right</span><span class="WHIT">
<span class='line'>368</span> </span><span class="WHIT">        </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>369</span> </span><span class="WHIT">        </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>370</span> </span><span class="WHIT">        </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">diff.z</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>371</span> </span><span class="WHIT">        </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>372</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>373</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>374</span> 
<span class='line'>375</span> </span><span class="COMM">/**
<span class='line'>376</span>  * Create a flip Y 3d action with duration. &lt;br />
<span class='line'>377</span>  * Upside down.
<span class='line'>378</span>  * @function
<span class='line'>379</span>  * @param {Number} duration
<span class='line'>380</span>  * @return {cc.FlipY3D}
<span class='line'>381</span>  */</span><span class="WHIT">
<span class='line'>382</span> </span><span class="NAME">cc.flipY3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>383</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FlipY3D</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>384</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>385</span> 
<span class='line'>386</span> </span><span class="COMM">/**
<span class='line'>387</span>  * Please use cc.flipY3D instead. &lt;br />
<span class='line'>388</span>  * Create a flip Y 3d action with duration.
<span class='line'>389</span>  * @param {Number} duration
<span class='line'>390</span>  * @return {cc.FlipY3D}
<span class='line'>391</span>  * @static
<span class='line'>392</span>  * @deprecated since v3.0 &lt;br /> Please use cc.flipY3D instead.
<span class='line'>393</span>  */</span><span class="WHIT">
<span class='line'>394</span> </span><span class="NAME">cc.FlipY3D.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.flipY3D</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>395</span> 
<span class='line'>396</span> </span><span class="COMM">/**
<span class='line'>397</span>  * cc.Lens3D action. &lt;br />
<span class='line'>398</span>  * Upside down. &lt;br />
<span class='line'>399</span>  * Reference the test cases (Effects Test)
<span class='line'>400</span>  * @class
<span class='line'>401</span>  * @extends cc.Grid3DAction
<span class='line'>402</span>  * @param {Number} duration
<span class='line'>403</span>  * @param {cc.Size} gridSize
<span class='line'>404</span>  * @param {cc.Point} position
<span class='line'>405</span>  * @param {Number} radius
<span class='line'>406</span>  */</span><span class="WHIT">
<span class='line'>407</span> </span><span class="NAME">cc.Lens3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Lens3D# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>408</span> </span><span class="WHIT">    </span><span class="COMM">//lens center position</span><span class="WHIT">
<span class='line'>409</span> </span><span class="WHIT">    </span><span class="NAME">_position</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>410</span> </span><span class="WHIT">    </span><span class="NAME">_radius</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>411</span> </span><span class="WHIT">    </span><span class="COMM">//lens effect. Defaults to 0.7 - 0 means no effect, 1 is very strong effect</span><span class="WHIT">
<span class='line'>412</span> </span><span class="WHIT">    </span><span class="NAME">_lensEffect</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>413</span> </span><span class="WHIT">    </span><span class="COMM">//lens is concave. (true = concave, false = convex) default is convex i.e. false</span><span class="WHIT">
<span class='line'>414</span> </span><span class="WHIT">    </span><span class="NAME">_concave</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>415</span> </span><span class="WHIT">    </span><span class="NAME">_dirty</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>416</span> 
<span class='line'>417</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>418</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>419</span> 	 * creates a lens 3d action with center position, radius.
<span class='line'>420</span> 	 * @param {Number} duration
<span class='line'>421</span> 	 * @param {cc.Size} gridSize
<span class='line'>422</span> 	 * @param {cc.Point} position
<span class='line'>423</span> 	 * @param {Number} radius
<span class='line'>424</span> 	 */</span><span class="WHIT">
<span class='line'>425</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>426</span> </span><span class="WHIT">        </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>427</span> 
<span class='line'>428</span> </span><span class="WHIT">        </span><span class="NAME">this._position</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>429</span> </span><span class="WHIT">		</span><span class="NAME">radius</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>430</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>431</span> 
<span class='line'>432</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>433</span>      * Get lens center position
<span class='line'>434</span>      * @return {Number}
<span class='line'>435</span>      */</span><span class="WHIT">
<span class='line'>436</span> </span><span class="WHIT">    </span><span class="NAME">getLensEffect</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>437</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._lensEffect</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>438</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>439</span> 
<span class='line'>440</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>441</span>      * Set lens center position
<span class='line'>442</span>      * @param {Number} lensEffect
<span class='line'>443</span>      */</span><span class="WHIT">
<span class='line'>444</span> </span><span class="WHIT">    </span><span class="NAME">setLensEffect</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">lensEffect</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>445</span> </span><span class="WHIT">        </span><span class="NAME">this._lensEffect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">lensEffect</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>446</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>447</span> 
<span class='line'>448</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>449</span>      * Set whether lens is concave
<span class='line'>450</span>      * @param {Boolean} concave
<span class='line'>451</span>      */</span><span class="WHIT">
<span class='line'>452</span> </span><span class="WHIT">    </span><span class="NAME">setConcave</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">concave</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>453</span> </span><span class="WHIT">        </span><span class="NAME">this._concave</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">concave</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>454</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>455</span> 
<span class='line'>456</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>457</span>      * get Position
<span class='line'>458</span>      * @return {cc.Point}
<span class='line'>459</span>      */</span><span class="WHIT">
<span class='line'>460</span> </span><span class="WHIT">    </span><span class="NAME">getPosition</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>461</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._position</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>462</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>463</span> 
<span class='line'>464</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>465</span>      * set Position
<span class='line'>466</span>      * @param {cc.Point} position
<span class='line'>467</span>      */</span><span class="WHIT">
<span class='line'>468</span> </span><span class="WHIT">    </span><span class="NAME">setPosition</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">position</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>469</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">cc.pointEqualToPoint</span><span class="PUNC">(</span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._position</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>470</span> </span><span class="WHIT">            </span><span class="NAME">this._position.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>471</span> </span><span class="WHIT">            </span><span class="NAME">this._position.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>472</span> </span><span class="WHIT">            </span><span class="NAME">this._dirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>473</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>474</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>475</span> 
<span class='line'>476</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>477</span>      * initializes the action with center position, radius, a grid size and duration
<span class='line'>478</span>      * @param {Number} duration
<span class='line'>479</span>      * @param {cc.Size} gridSize
<span class='line'>480</span>      * @param {cc.Point} position
<span class='line'>481</span>      * @param {Number} radius
<span class='line'>482</span>      * @return {Boolean}
<span class='line'>483</span>      */</span><span class="WHIT">
<span class='line'>484</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>485</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>486</span> </span><span class="WHIT">            </span><span class="NAME">this.setPosition</span><span class="PUNC">(</span><span class="NAME">position</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>487</span> </span><span class="WHIT">            </span><span class="NAME">this._radius</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>488</span> </span><span class="WHIT">            </span><span class="NAME">this._lensEffect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0.7</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>489</span> </span><span class="WHIT">            </span><span class="NAME">this._dirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>490</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>491</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>492</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>493</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>494</span> 
<span class='line'>495</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>496</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>497</span>      *
<span class='line'>498</span>      * @param {Number}  dt
<span class='line'>499</span>      */</span><span class="WHIT">
<span class='line'>500</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>501</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._dirty</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>502</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locGridSizeWidth</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locGridSizeHeight</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>503</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._radius</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locLensEffect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._lensEffect</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>504</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>505</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">vect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>506</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">r</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">l</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">new_r</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">pre_log</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>507</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locGridSizeWidth</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">i</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>508</span> </span><span class="WHIT">                </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locGridSizeHeight</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">j</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>509</span> </span><span class="WHIT">                    </span><span class="NAME">locPos.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>510</span> </span><span class="WHIT">                    </span><span class="NAME">locPos.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">j</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>511</span> </span><span class="WHIT">                    </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>512</span> </span><span class="WHIT">                    </span><span class="NAME">vect.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._position.x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">v.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>513</span> </span><span class="WHIT">                    </span><span class="NAME">vect.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._position.y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">v.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>514</span> </span><span class="WHIT">                    </span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.pLength</span><span class="PUNC">(</span><span class="NAME">vect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>515</span> 
<span class='line'>516</span> </span><span class="WHIT">                    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>517</span> </span><span class="WHIT">                        </span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">r</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>518</span> </span><span class="WHIT">                        </span><span class="NAME">pre_log</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>519</span> </span><span class="WHIT">                        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pre_log</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>520</span> </span><span class="WHIT">                            </span><span class="NAME">pre_log</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0.001</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>521</span> 
<span class='line'>522</span> </span><span class="WHIT">                        </span><span class="NAME">l</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.log</span><span class="PUNC">(</span><span class="NAME">pre_log</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locLensEffect</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>523</span> </span><span class="WHIT">                        </span><span class="NAME">new_r</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.exp</span><span class="PUNC">(</span><span class="NAME">l</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>524</span> 
<span class='line'>525</span> </span><span class="WHIT">                        </span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.pLength</span><span class="PUNC">(</span><span class="NAME">vect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>526</span> </span><span class="WHIT">                        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>527</span> </span><span class="WHIT">                            </span><span class="NAME">vect.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">vect.x</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">r</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>528</span> </span><span class="WHIT">                            </span><span class="NAME">vect.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">vect.y</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">r</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>529</span> 
<span class='line'>530</span> </span><span class="WHIT">                            </span><span class="NAME">vect.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">vect.x</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">new_r</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>531</span> </span><span class="WHIT">                            </span><span class="NAME">vect.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">vect.y</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">new_r</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>532</span> </span><span class="WHIT">                            </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.pLength</span><span class="PUNC">(</span><span class="NAME">vect</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locLensEffect</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>533</span> </span><span class="WHIT">                        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>534</span> </span><span class="WHIT">                    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>535</span> </span><span class="WHIT">                    </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>536</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>537</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>538</span> </span><span class="WHIT">            </span><span class="NAME">this._dirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>539</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>540</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>541</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>542</span> 
<span class='line'>543</span> </span><span class="COMM">/**
<span class='line'>544</span>  * creates a lens 3d action with center position, radius
<span class='line'>545</span>  * @function
<span class='line'>546</span>  * @param {Number} duration
<span class='line'>547</span>  * @param {cc.Size} gridSize
<span class='line'>548</span>  * @param {cc.Point} position
<span class='line'>549</span>  * @param {Number} radius
<span class='line'>550</span>  * @return {cc.Lens3D}
<span class='line'>551</span>  */</span><span class="WHIT">
<span class='line'>552</span> </span><span class="NAME">cc.lens3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>553</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Lens3D</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>554</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>555</span> 
<span class='line'>556</span> </span><span class="COMM">/**
<span class='line'>557</span>  * Please use cc.lens3D instead
<span class='line'>558</span>  * creates a lens 3d action with center position, radius
<span class='line'>559</span>  * @param {Number} duration
<span class='line'>560</span>  * @param {cc.Size} gridSize
<span class='line'>561</span>  * @param {cc.Point} position
<span class='line'>562</span>  * @param {Number} radius
<span class='line'>563</span>  * @return {cc.Lens3D}
<span class='line'>564</span>  * @static
<span class='line'>565</span>  * @deprecated since v3.0 &lt;br /> Please use cc.lens3D instead.
<span class='line'>566</span>  */</span><span class="WHIT">
<span class='line'>567</span> </span><span class="NAME">cc.Lens3D.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.lens3D</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>568</span> 
<span class='line'>569</span> </span><span class="COMM">/**
<span class='line'>570</span>  * cc.Ripple3D action. &lt;br />
<span class='line'>571</span>  * Reference the test cases (Effects Test)
<span class='line'>572</span>  * @class
<span class='line'>573</span>  * @extends cc.Grid3DAction
<span class='line'>574</span>  * @param {Number} duration
<span class='line'>575</span>  * @param {cc.Size} gridSize
<span class='line'>576</span>  * @param {cc.Point} position
<span class='line'>577</span>  * @param {Number} radius
<span class='line'>578</span>  * @param {Number} waves
<span class='line'>579</span>  * @param {Number} amplitude
<span class='line'>580</span>  */</span><span class="WHIT">
<span class='line'>581</span> </span><span class="NAME">cc.Ripple3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Ripple3D# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>582</span> </span><span class="WHIT">    </span><span class="COMM">/* center position */</span><span class="WHIT">
<span class='line'>583</span> </span><span class="WHIT">    </span><span class="NAME">_position</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>584</span> </span><span class="WHIT">    </span><span class="NAME">_radius</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>585</span> </span><span class="WHIT">    </span><span class="NAME">_waves</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>586</span> </span><span class="WHIT">    </span><span class="NAME">_amplitude</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>587</span> </span><span class="WHIT">    </span><span class="NAME">_amplitudeRate</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>588</span> 
<span class='line'>589</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>590</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>591</span> 	 * creates a ripple 3d action with radius, number of waves, amplitude.
<span class='line'>592</span> 	 * @param {Number} duration
<span class='line'>593</span> 	 * @param {cc.Size} gridSize
<span class='line'>594</span> 	 * @param {cc.Point} position
<span class='line'>595</span> 	 * @param {Number} radius
<span class='line'>596</span> 	 * @param {Number} waves
<span class='line'>597</span> 	 * @param {Number} amplitude
<span class='line'>598</span> 	 */</span><span class="WHIT">
<span class='line'>599</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>600</span> </span><span class="WHIT">        </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>601</span> 
<span class='line'>602</span> </span><span class="WHIT">        </span><span class="NAME">this._position</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>603</span> </span><span class="WHIT">		</span><span class="NAME">amplitude</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>604</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>605</span> 
<span class='line'>606</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>607</span>      * get center position
<span class='line'>608</span>      * @return {cc.Point}
<span class='line'>609</span>      */</span><span class="WHIT">
<span class='line'>610</span> </span><span class="WHIT">    </span><span class="NAME">getPosition</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>611</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._position</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>612</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>613</span> 
<span class='line'>614</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>615</span>      * set center position
<span class='line'>616</span>      * @param {cc.Point} position
<span class='line'>617</span>      */</span><span class="WHIT">
<span class='line'>618</span> </span><span class="WHIT">    </span><span class="NAME">setPosition</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">position</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>619</span> </span><span class="WHIT">        </span><span class="NAME">this._position.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>620</span> </span><span class="WHIT">        </span><span class="NAME">this._position.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>621</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>622</span> 
<span class='line'>623</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>624</span>      * get Amplitude
<span class='line'>625</span>      * @return {Number}
<span class='line'>626</span>      */</span><span class="WHIT">
<span class='line'>627</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>628</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>629</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>630</span> 
<span class='line'>631</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>632</span>      * set Amplitude
<span class='line'>633</span>      * @param {Number} amplitude
<span class='line'>634</span>      */</span><span class="WHIT">
<span class='line'>635</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>636</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>637</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>638</span> 
<span class='line'>639</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>640</span>      * get Amplitude rate
<span class='line'>641</span>      * @return {*}
<span class='line'>642</span>      */</span><span class="WHIT">
<span class='line'>643</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>644</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>645</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>646</span> 
<span class='line'>647</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>648</span>      * get amplitude rate
<span class='line'>649</span>      * @param {Number} amplitudeRate
<span class='line'>650</span>      */</span><span class="WHIT">
<span class='line'>651</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitudeRate</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>652</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>653</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>654</span> 
<span class='line'>655</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>656</span>      * initializes the action with radius, number of waves, amplitude, a grid size and duration
<span class='line'>657</span>      * @param {Number} duration
<span class='line'>658</span>      * @param {cc.Size} gridSize
<span class='line'>659</span>      * @param {cc.Point} position
<span class='line'>660</span>      * @param {Number} radius
<span class='line'>661</span>      * @param {Number} waves
<span class='line'>662</span>      * @param {Number} amplitude
<span class='line'>663</span>      * @return {Boolean}
<span class='line'>664</span>      */</span><span class="WHIT">
<span class='line'>665</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>666</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>667</span> </span><span class="WHIT">            </span><span class="NAME">this.setPosition</span><span class="PUNC">(</span><span class="NAME">position</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>668</span> </span><span class="WHIT">            </span><span class="NAME">this._radius</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>669</span> </span><span class="WHIT">            </span><span class="NAME">this._waves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>670</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>671</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>672</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>673</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>674</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>675</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>676</span> 
<span class='line'>677</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>678</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>679</span>      *
<span class='line'>680</span>      * @param {Number}  dt
<span class='line'>681</span>      */</span><span class="WHIT">
<span class='line'>682</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>683</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locGridSizeWidth</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locGridSizeHeight</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>684</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._radius</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>685</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>686</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">r</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tempPos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>687</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locGridSizeWidth</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">i</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>688</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locGridSizeHeight</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">j</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>689</span> </span><span class="WHIT">                </span><span class="NAME">locPos.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>690</span> </span><span class="WHIT">                </span><span class="NAME">locPos.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">j</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>691</span> </span><span class="WHIT">                </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>692</span> 
<span class='line'>693</span> </span><span class="WHIT">                </span><span class="NAME">tempPos.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._position.x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">v.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>694</span> </span><span class="WHIT">                </span><span class="NAME">tempPos.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._position.y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">v.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>695</span> </span><span class="WHIT">                </span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.pLength</span><span class="PUNC">(</span><span class="NAME">tempPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>696</span> 
<span class='line'>697</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>698</span> </span><span class="WHIT">                    </span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">r</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>699</span> </span><span class="WHIT">                    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">rate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.pow</span><span class="PUNC">(</span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">locRadius</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>700</span> </span><span class="WHIT">                    </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">0.1</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">rate</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>701</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>702</span> </span><span class="WHIT">                </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>703</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>704</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>705</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>706</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>707</span> 
<span class='line'>708</span> </span><span class="COMM">/**
<span class='line'>709</span>  * creates a ripple 3d action with radius, number of waves, amplitude
<span class='line'>710</span>  * @function
<span class='line'>711</span>  * @param {Number} duration
<span class='line'>712</span>  * @param {cc.Size} gridSize
<span class='line'>713</span>  * @param {cc.Point} position
<span class='line'>714</span>  * @param {Number} radius
<span class='line'>715</span>  * @param {Number} waves
<span class='line'>716</span>  * @param {Number} amplitude
<span class='line'>717</span>  * @return {cc.Ripple3D}
<span class='line'>718</span>  */</span><span class="WHIT">
<span class='line'>719</span> </span><span class="NAME">cc.ripple3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>720</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Ripple3D</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">radius</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>721</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>722</span> 
<span class='line'>723</span> </span><span class="COMM">/**
<span class='line'>724</span>  * Please use cc.ripple3D instead
<span class='line'>725</span>  * creates a ripple 3d action with radius, number of waves, amplitude
<span class='line'>726</span>  * @param {Number} duration
<span class='line'>727</span>  * @param {cc.Size} gridSize
<span class='line'>728</span>  * @param {cc.Point} position
<span class='line'>729</span>  * @param {Number} radius
<span class='line'>730</span>  * @param {Number} waves
<span class='line'>731</span>  * @param {Number} amplitude
<span class='line'>732</span>  * @return {cc.Ripple3D}
<span class='line'>733</span>  * @static
<span class='line'>734</span>  * @deprecated since v3.0 &lt;br /> Please use cc.ripple3D instead.
<span class='line'>735</span>  */</span><span class="WHIT">
<span class='line'>736</span> </span><span class="NAME">cc.Ripple3D.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ripple3D</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>737</span> 
<span class='line'>738</span> </span><span class="COMM">/**
<span class='line'>739</span>  * cc.Shaky3D action. &lt;br />
<span class='line'>740</span>  * Reference the test cases (Effects Test)
<span class='line'>741</span>  * @class
<span class='line'>742</span>  * @extends cc.Grid3DAction
<span class='line'>743</span>  * @param {Number} duration
<span class='line'>744</span>  * @param {cc.Size} gridSize
<span class='line'>745</span>  * @param {Number} range
<span class='line'>746</span>  * @param {Boolean} shakeZ
<span class='line'>747</span>  */</span><span class="WHIT">
<span class='line'>748</span> </span><span class="NAME">cc.Shaky3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Shaky3D# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>749</span> </span><span class="WHIT">    </span><span class="NAME">_randRange</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>750</span> </span><span class="WHIT">    </span><span class="NAME">_shakeZ</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>751</span> 
<span class='line'>752</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>753</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>754</span> 	 * Create a shaky3d action with a range, shake Z vertices.
<span class='line'>755</span> 	 * @param {Number} duration
<span class='line'>756</span> 	 * @param {cc.Size} gridSize
<span class='line'>757</span> 	 * @param {Number} range
<span class='line'>758</span> 	 * @param {Boolean} shakeZ
<span class='line'>759</span> 	 */</span><span class="WHIT">
<span class='line'>760</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">range</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">shakeZ</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>761</span> </span><span class="WHIT">        </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>762</span> </span><span class="WHIT">		</span><span class="NAME">shakeZ</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">range</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">shakeZ</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>763</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>764</span> 
<span class='line'>765</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>766</span>      * initializes the action with a range, shake Z vertices, a grid and duration
<span class='line'>767</span>      * @param {Number} duration
<span class='line'>768</span>      * @param {cc.Size} gridSize
<span class='line'>769</span>      * @param {Number} range
<span class='line'>770</span>      * @param {Boolean} shakeZ
<span class='line'>771</span>      * @return {Boolean}
<span class='line'>772</span>      */</span><span class="WHIT">
<span class='line'>773</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">range</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">shakeZ</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>774</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>775</span> </span><span class="WHIT">            </span><span class="NAME">this._randRange</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">range</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>776</span> </span><span class="WHIT">            </span><span class="NAME">this._shakeZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">shakeZ</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>777</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>778</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>779</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>780</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>781</span> 
<span class='line'>782</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>783</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>784</span>      *
<span class='line'>785</span>      * @param {Number}  dt
<span class='line'>786</span>      */</span><span class="WHIT">
<span class='line'>787</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>788</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locGridSizeWidth</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locGridSizeHeight</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>789</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locRandRange</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._randRange</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locShakeZ</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._shakeZ</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locP</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>790</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>791</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locGridSizeWidth</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">i</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>792</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locGridSizeHeight</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">j</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>793</span> </span><span class="WHIT">                </span><span class="NAME">locP.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>794</span> </span><span class="WHIT">                </span><span class="NAME">locP.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">j</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>795</span> </span><span class="WHIT">                </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">locP</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>796</span> </span><span class="WHIT">                </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.rand</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locRandRange</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locRandRange</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>797</span> </span><span class="WHIT">                </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.rand</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locRandRange</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locRandRange</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>798</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locShakeZ</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>799</span> </span><span class="WHIT">                    </span><span class="NAME">v.z</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.rand</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locRandRange</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locRandRange</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>800</span> </span><span class="WHIT">                </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">locP</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>801</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>802</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>803</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>804</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>805</span> 
<span class='line'>806</span> </span><span class="COMM">/**
<span class='line'>807</span>  * creates the action with a range, shake Z vertices, a grid and duration
<span class='line'>808</span>  * @function
<span class='line'>809</span>  * @param {Number} duration
<span class='line'>810</span>  * @param {cc.Size} gridSize
<span class='line'>811</span>  * @param {Number} range
<span class='line'>812</span>  * @param {Boolean} shakeZ
<span class='line'>813</span>  * @return {cc.Shaky3D}
<span class='line'>814</span>  */</span><span class="WHIT">
<span class='line'>815</span> </span><span class="NAME">cc.shaky3D</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">range</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">shakeZ</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>816</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Shaky3D</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">range</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">shakeZ</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>817</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>818</span> 
<span class='line'>819</span> </span><span class="COMM">/**
<span class='line'>820</span>  * Please use cc.shaky3D instead
<span class='line'>821</span>  * creates the action with a range, shake Z vertices, a grid and duration
<span class='line'>822</span>  * @param {Number} duration
<span class='line'>823</span>  * @param {cc.Size} gridSize
<span class='line'>824</span>  * @param {Number} range
<span class='line'>825</span>  * @param {Boolean} shakeZ
<span class='line'>826</span>  * @return {cc.Shaky3D}
<span class='line'>827</span>  * @static
<span class='line'>828</span>  * @deprecated since v3.0 &lt;br /> Please use cc.shaky3D instead.
<span class='line'>829</span>  */</span><span class="WHIT">
<span class='line'>830</span> </span><span class="NAME">cc.Shaky3D.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.shaky3D</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>831</span> 
<span class='line'>832</span> </span><span class="COMM">/**
<span class='line'>833</span>  * cc.Liquid action. &lt;br />
<span class='line'>834</span>  * Reference the test cases (Effects Test)
<span class='line'>835</span>  * @class
<span class='line'>836</span>  * @extends cc.Grid3DAction
<span class='line'>837</span>  * @param {Number} duration
<span class='line'>838</span>  * @param {cc.Size} gridSize
<span class='line'>839</span>  * @param {Number} waves
<span class='line'>840</span>  * @param {Number} amplitude
<span class='line'>841</span>  */</span><span class="WHIT">
<span class='line'>842</span> </span><span class="NAME">cc.Liquid</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Liquid# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>843</span> </span><span class="WHIT">    </span><span class="NAME">_waves</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>844</span> </span><span class="WHIT">    </span><span class="NAME">_amplitude</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>845</span> </span><span class="WHIT">    </span><span class="NAME">_amplitudeRate</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>846</span> 
<span class='line'>847</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>848</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>849</span> 	 * Create a liquid action with amplitude, a grid and duration.
<span class='line'>850</span> 	 * @param {Number} duration
<span class='line'>851</span> 	 * @param {cc.Size} gridSize
<span class='line'>852</span> 	 * @param {Number} waves
<span class='line'>853</span> 	 * @param {Number} amplitude
<span class='line'>854</span> 	 */</span><span class="WHIT">
<span class='line'>855</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>856</span> </span><span class="WHIT">        </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>857</span> </span><span class="WHIT">		</span><span class="NAME">amplitude</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>858</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>859</span> 
<span class='line'>860</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>861</span>      * get amplitude
<span class='line'>862</span>      * @return {Number}
<span class='line'>863</span>      */</span><span class="WHIT">
<span class='line'>864</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>865</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>866</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>867</span> 
<span class='line'>868</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>869</span>      * set amplitude
<span class='line'>870</span>      * @param {Number} amplitude
<span class='line'>871</span>      */</span><span class="WHIT">
<span class='line'>872</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>873</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>874</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>875</span> 
<span class='line'>876</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>877</span>      * get amplitude rate
<span class='line'>878</span>      * @return {Number}
<span class='line'>879</span>      */</span><span class="WHIT">
<span class='line'>880</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>881</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>882</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>883</span> 
<span class='line'>884</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>885</span>      * set amplitude rate
<span class='line'>886</span>      * @param {Number} amplitudeRate
<span class='line'>887</span>      */</span><span class="WHIT">
<span class='line'>888</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitudeRate</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>889</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>890</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>891</span> 
<span class='line'>892</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>893</span>      * initializes the action with amplitude, a grid and duration
<span class='line'>894</span>      * @param {Number} duration
<span class='line'>895</span>      * @param {cc.Size} gridSize
<span class='line'>896</span>      * @param {Number} waves
<span class='line'>897</span>      * @param {Number} amplitude
<span class='line'>898</span>      * @return {Boolean}
<span class='line'>899</span>      */</span><span class="WHIT">
<span class='line'>900</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>901</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>902</span> </span><span class="WHIT">            </span><span class="NAME">this._waves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>903</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>904</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>905</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>906</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>907</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>908</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>909</span> 
<span class='line'>910</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>911</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>912</span>      *
<span class='line'>913</span>      * @param {Number}  dt
<span class='line'>914</span>      */</span><span class="WHIT">
<span class='line'>915</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>916</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locSizeWidth</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locSizeHeight</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locPos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>917</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>918</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>919</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locSizeWidth</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">i</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>920</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locSizeHeight</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">j</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>921</span> </span><span class="WHIT">                </span><span class="NAME">locPos.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>922</span> </span><span class="WHIT">                </span><span class="NAME">locPos.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">j</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>923</span> </span><span class="WHIT">                </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>924</span> </span><span class="WHIT">                </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">.</span><span class="NUMB">01</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>925</span> </span><span class="WHIT">                </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">.</span><span class="NUMB">01</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>926</span> </span><span class="WHIT">                </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>927</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>928</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>929</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>930</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>931</span> 
<span class='line'>932</span> </span><span class="COMM">/**
<span class='line'>933</span>  * creates the action with amplitude, a grid and duration
<span class='line'>934</span>  * @function
<span class='line'>935</span>  * @param {Number} duration
<span class='line'>936</span>  * @param {cc.Size} gridSize
<span class='line'>937</span>  * @param {Number} waves
<span class='line'>938</span>  * @param {Number} amplitude
<span class='line'>939</span>  * @return {cc.Liquid}
<span class='line'>940</span>  */</span><span class="WHIT">
<span class='line'>941</span> </span><span class="NAME">cc.liquid</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>942</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Liquid</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>943</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>944</span> 
<span class='line'>945</span> </span><span class="COMM">/**
<span class='line'>946</span>  * Please use cc.liquid instead
<span class='line'>947</span>  * creates the action with amplitude, a grid and duration
<span class='line'>948</span>  * @param {Number} duration
<span class='line'>949</span>  * @param {cc.Size} gridSize
<span class='line'>950</span>  * @param {Number} waves
<span class='line'>951</span>  * @param {Number} amplitude
<span class='line'>952</span>  * @return {cc.Liquid}
<span class='line'>953</span>  * @static
<span class='line'>954</span>  * @deprecated since v3.0 &lt;br /> Please use cc.liquid instead.
<span class='line'>955</span>  */</span><span class="WHIT">
<span class='line'>956</span> </span><span class="NAME">cc.Liquid.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.liquid</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>957</span> 
<span class='line'>958</span> </span><span class="COMM">/**
<span class='line'>959</span>  * cc.Waves action. &lt;br />
<span class='line'>960</span>  * Reference the test cases (Effects Test)
<span class='line'>961</span>  * @class
<span class='line'>962</span>  * @extends cc.Grid3DAction
<span class='line'>963</span>  * @param {Number} duration
<span class='line'>964</span>  * @param {cc.Size} gridSize
<span class='line'>965</span>  * @param {Number} waves
<span class='line'>966</span>  * @param {Number} amplitude
<span class='line'>967</span>  * @param {Boolean} horizontal
<span class='line'>968</span>  * @param {Boolean} vertical
<span class='line'>969</span>  */</span><span class="WHIT">
<span class='line'>970</span> </span><span class="NAME">cc.Waves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Waves# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>971</span> </span><span class="WHIT">    </span><span class="NAME">_waves</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>972</span> </span><span class="WHIT">    </span><span class="NAME">_amplitude</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>973</span> </span><span class="WHIT">    </span><span class="NAME">_amplitudeRate</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>974</span> </span><span class="WHIT">    </span><span class="NAME">_vertical</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>975</span> </span><span class="WHIT">    </span><span class="NAME">_horizontal</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>976</span> 
<span class='line'>977</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>978</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>979</span> 	 * Create a wave action with amplitude, horizontal sin, vertical sin, a grid and duration.
<span class='line'>980</span> 	 * @param {Number} duration
<span class='line'>981</span> 	 * @param {cc.Size} gridSize
<span class='line'>982</span> 	 * @param {Number} waves
<span class='line'>983</span> 	 * @param {Number} amplitude
<span class='line'>984</span> 	 * @param {Boolean} horizontal
<span class='line'>985</span> 	 * @param {Boolean} vertical
<span class='line'>986</span> 	 */</span><span class="WHIT">
<span class='line'>987</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">horizontal</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">vertical</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>988</span> </span><span class="WHIT">        </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>989</span> </span><span class="WHIT">		</span><span class="NAME">vertical</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">horizontal</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">vertical</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>990</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>991</span> 
<span class='line'>992</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>993</span>      * get amplitude
<span class='line'>994</span>      * @return {Number}
<span class='line'>995</span>      */</span><span class="WHIT">
<span class='line'>996</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>997</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>998</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>999</span> 
<span class='line'>1000</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1001</span>      * set amplitude
<span class='line'>1002</span>      * @param {Number} amplitude
<span class='line'>1003</span>      */</span><span class="WHIT">
<span class='line'>1004</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1005</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1006</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1007</span> 
<span class='line'>1008</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1009</span>      * get amplitude rate
<span class='line'>1010</span>      * @return {Number}
<span class='line'>1011</span>      */</span><span class="WHIT">
<span class='line'>1012</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1013</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1014</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1015</span> 
<span class='line'>1016</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1017</span>      * set amplitude rate
<span class='line'>1018</span>      * @param {Number} amplitudeRate
<span class='line'>1019</span>      */</span><span class="WHIT">
<span class='line'>1020</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitudeRate</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1021</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1022</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1023</span> 
<span class='line'>1024</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1025</span>      * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
<span class='line'>1026</span>      * @param {Number} duration
<span class='line'>1027</span>      * @param {cc.Size} gridSize
<span class='line'>1028</span>      * @param {Number} waves
<span class='line'>1029</span>      * @param {Number} amplitude
<span class='line'>1030</span>      * @param {Boolean} horizontal
<span class='line'>1031</span>      * @param {Boolean} vertical
<span class='line'>1032</span>      * @return {Boolean}
<span class='line'>1033</span>      */</span><span class="WHIT">
<span class='line'>1034</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">horizontal</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">vertical</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1035</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1036</span> </span><span class="WHIT">            </span><span class="NAME">this._waves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1037</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1038</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1039</span> </span><span class="WHIT">            </span><span class="NAME">this._horizontal</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">horizontal</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1040</span> </span><span class="WHIT">            </span><span class="NAME">this._vertical</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">vertical</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1041</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1042</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1043</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1044</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1045</span> 
<span class='line'>1046</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1047</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>1048</span>      *
<span class='line'>1049</span>      * @param {Number}  dt
<span class='line'>1050</span>      */</span><span class="WHIT">
<span class='line'>1051</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1052</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locSizeWidth</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locSizeHeight</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locPos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1053</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locVertical</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._vertical</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locHorizontal</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._horizontal</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1054</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1055</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1056</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locSizeWidth</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">i</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1057</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locSizeHeight</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">j</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1058</span> </span><span class="WHIT">                </span><span class="NAME">locPos.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1059</span> </span><span class="WHIT">                </span><span class="NAME">locPos.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">j</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1060</span> </span><span class="WHIT">                </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1061</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locVertical</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1062</span> </span><span class="WHIT">                    </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">.</span><span class="NUMB">01</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1063</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locHorizontal</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1064</span> </span><span class="WHIT">                    </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locWaves</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">.</span><span class="NUMB">01</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitude</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locAmplitudeRate</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1065</span> </span><span class="WHIT">                </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1066</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1067</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1068</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1069</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1070</span> 
<span class='line'>1071</span> </span><span class="COMM">/**
<span class='line'>1072</span>  * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
<span class='line'>1073</span>  * @function
<span class='line'>1074</span>  * @param {Number} duration
<span class='line'>1075</span>  * @param {cc.Size} gridSize
<span class='line'>1076</span>  * @param {Number} waves
<span class='line'>1077</span>  * @param {Number} amplitude
<span class='line'>1078</span>  * @param {Boolean} horizontal
<span class='line'>1079</span>  * @param {Boolean} vertical
<span class='line'>1080</span>  * @return {cc.Waves}
<span class='line'>1081</span>  */</span><span class="WHIT">
<span class='line'>1082</span> </span><span class="NAME">cc.waves</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">horizontal</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">vertical</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1083</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Waves</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">waves</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">horizontal</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">vertical</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1084</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1085</span> 
<span class='line'>1086</span> </span><span class="COMM">/**
<span class='line'>1087</span>  * Please use cc.waves instead
<span class='line'>1088</span>  * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
<span class='line'>1089</span>  * @param {Number} duration
<span class='line'>1090</span>  * @param {cc.Size} gridSize
<span class='line'>1091</span>  * @param {Number} waves
<span class='line'>1092</span>  * @param {Number} amplitude
<span class='line'>1093</span>  * @param {Boolean} horizontal
<span class='line'>1094</span>  * @param {Boolean} vertical
<span class='line'>1095</span>  * @return {cc.Waves}
<span class='line'>1096</span>  * @static
<span class='line'>1097</span>  * @deprecated since v3.0 &lt;br /> Please use cc.waves instead.
<span class='line'>1098</span>  */</span><span class="WHIT">
<span class='line'>1099</span> </span><span class="NAME">cc.Waves.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.waves</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1100</span> 
<span class='line'>1101</span> </span><span class="COMM">/** @brief  */</span><span class="WHIT">
<span class='line'>1102</span> </span><span class="COMM">/**
<span class='line'>1103</span>  * cc.Twirl action. &lt;br />
<span class='line'>1104</span>  * Reference the test cases (Effects Test)
<span class='line'>1105</span>  * @class
<span class='line'>1106</span>  * @extends cc.Grid3DAction
<span class='line'>1107</span>  * @param {Number} duration
<span class='line'>1108</span>  * @param {cc.Size} gridSize
<span class='line'>1109</span>  * @param {cc.Point} position
<span class='line'>1110</span>  * @param {Number} twirls
<span class='line'>1111</span>  * @param {Number} amplitude
<span class='line'>1112</span>  */</span><span class="WHIT">
<span class='line'>1113</span> </span><span class="NAME">cc.Twirl</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Grid3DAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Twirl# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1114</span> </span><span class="WHIT">    </span><span class="COMM">/* twirl center */</span><span class="WHIT">
<span class='line'>1115</span> </span><span class="WHIT">    </span><span class="NAME">_position</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1116</span> </span><span class="WHIT">    </span><span class="NAME">_twirls</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1117</span> </span><span class="WHIT">    </span><span class="NAME">_amplitude</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1118</span> </span><span class="WHIT">    </span><span class="NAME">_amplitudeRate</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1119</span> 
<span class='line'>1120</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>1121</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>1122</span> 	 * Create a grid 3d action with center position, number of twirls, amplitude, a grid size and duration.
<span class='line'>1123</span> 	 * @param {Number} duration
<span class='line'>1124</span> 	 * @param {cc.Size} gridSize
<span class='line'>1125</span> 	 * @param {cc.Point} position
<span class='line'>1126</span> 	 * @param {Number} twirls
<span class='line'>1127</span> 	 * @param {Number} amplitude
<span class='line'>1128</span> 	 */</span><span class="WHIT">
<span class='line'>1129</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">twirls</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1130</span> </span><span class="WHIT">        </span><span class="NAME">cc.GridAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1131</span> 
<span class='line'>1132</span> </span><span class="WHIT">        </span><span class="NAME">this._position</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1133</span> </span><span class="WHIT">		</span><span class="NAME">amplitude</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">twirls</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1134</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1135</span> 
<span class='line'>1136</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1137</span>      * get twirl center
<span class='line'>1138</span>      * @return {cc.Point}
<span class='line'>1139</span>      */</span><span class="WHIT">
<span class='line'>1140</span> </span><span class="WHIT">    </span><span class="NAME">getPosition</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1141</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._position</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1142</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1143</span> 
<span class='line'>1144</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1145</span>      * set twirl center
<span class='line'>1146</span>      * @param {cc.Point} position
<span class='line'>1147</span>      */</span><span class="WHIT">
<span class='line'>1148</span> </span><span class="WHIT">    </span><span class="NAME">setPosition</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">position</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1149</span> </span><span class="WHIT">        </span><span class="NAME">this._position.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1150</span> </span><span class="WHIT">        </span><span class="NAME">this._position.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1151</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1152</span> 
<span class='line'>1153</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1154</span>      * get amplitude
<span class='line'>1155</span>      * @return {Number}
<span class='line'>1156</span>      */</span><span class="WHIT">
<span class='line'>1157</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1158</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1159</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1160</span> 
<span class='line'>1161</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1162</span>      * set amplitude
<span class='line'>1163</span>      * @param {Number} amplitude
<span class='line'>1164</span>      */</span><span class="WHIT">
<span class='line'>1165</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitude</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1166</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1167</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1168</span> 
<span class='line'>1169</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1170</span>      * get amplitude rate
<span class='line'>1171</span>      * @return {Number}
<span class='line'>1172</span>      */</span><span class="WHIT">
<span class='line'>1173</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1174</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1175</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1176</span> 
<span class='line'>1177</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1178</span>      * set amplitude rate
<span class='line'>1179</span>      * @param {Number} amplitudeRate
<span class='line'>1180</span>      */</span><span class="WHIT">
<span class='line'>1181</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amplitudeRate</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1182</span> </span><span class="WHIT">        </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1183</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1184</span> 
<span class='line'>1185</span> </span><span class="WHIT">    </span><span class="COMM">/** initializes the action with center position, number of twirls, amplitude, a grid size and duration */</span><span class="WHIT">
<span class='line'>1186</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">twirls</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1187</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.Grid3DAction.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1188</span> </span><span class="WHIT">            </span><span class="NAME">this.setPosition</span><span class="PUNC">(</span><span class="NAME">position</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1189</span> </span><span class="WHIT">            </span><span class="NAME">this._twirls</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">twirls</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1190</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1191</span> </span><span class="WHIT">            </span><span class="NAME">this._amplitudeRate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1192</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1193</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1194</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1195</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1196</span> 
<span class='line'>1197</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1198</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>1199</span>      *
<span class='line'>1200</span>      * @param {Number}  dt
<span class='line'>1201</span>      */</span><span class="WHIT">
<span class='line'>1202</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1203</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">c</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._position</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1204</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locSizeWidth</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locSizeHeight</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._gridSize.height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locPos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1205</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">amp</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0.1</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">this._amplitude</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">this._amplitudeRate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1206</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locTwirls</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._twirls</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1207</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">a</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">dX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">dY</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">avg</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1208</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locSizeWidth</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">i</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1209</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locSizeHeight</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="PUNC">++</span><span class="NAME">j</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1210</span> </span><span class="WHIT">                </span><span class="NAME">locPos.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1211</span> </span><span class="WHIT">                </span><span class="NAME">locPos.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">j</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1212</span> </span><span class="WHIT">                </span><span class="NAME">v</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.originalVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1213</span> 
<span class='line'>1214</span> </span><span class="WHIT">                </span><span class="NAME">avg.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locSizeWidth</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1215</span> </span><span class="WHIT">                </span><span class="NAME">avg.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locSizeHeight</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1216</span> 
<span class='line'>1217</span> </span><span class="WHIT">                </span><span class="NAME">a</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.pLength</span><span class="PUNC">(</span><span class="NAME">avg</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">Math.cos</span><span class="PUNC">(</span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">Math.PI</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locTwirls</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">amp</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1218</span> 
<span class='line'>1219</span> </span><span class="WHIT">                </span><span class="NAME">dX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">c.y</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">Math.cos</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">c.x</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1220</span> </span><span class="WHIT">                </span><span class="NAME">dY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.cos</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">c.y</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">Math.sin</span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">c.x</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1221</span> 
<span class='line'>1222</span> </span><span class="WHIT">                </span><span class="NAME">v.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">c.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">dX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1223</span> </span><span class="WHIT">                </span><span class="NAME">v.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">c.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">dY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1224</span> 
<span class='line'>1225</span> </span><span class="WHIT">                </span><span class="NAME">this.setVertex</span><span class="PUNC">(</span><span class="NAME">locPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">v</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1226</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1227</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1228</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1229</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1230</span> 
<span class='line'>1231</span> </span><span class="COMM">/**
<span class='line'>1232</span>  * creates the action with center position, number of twirls, amplitude, a grid size and duration
<span class='line'>1233</span>  * @function
<span class='line'>1234</span>  * @param {Number} duration
<span class='line'>1235</span>  * @param {cc.Size} gridSize
<span class='line'>1236</span>  * @param {cc.Point} position
<span class='line'>1237</span>  * @param {Number} twirls
<span class='line'>1238</span>  * @param {Number} amplitude
<span class='line'>1239</span>  * @return {cc.Twirl}
<span class='line'>1240</span>  */</span><span class="WHIT">
<span class='line'>1241</span> </span><span class="NAME">cc.twirl</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">twirls</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1242</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Twirl</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">gridSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">twirls</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">amplitude</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1243</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1244</span> 
<span class='line'>1245</span> </span><span class="COMM">/**
<span class='line'>1246</span>  * Please use cc.twirl instead
<span class='line'>1247</span>  * creates the action with center position, number of twirls, amplitude, a grid size and duration
<span class='line'>1248</span>  * @param {Number} duration
<span class='line'>1249</span>  * @param {cc.Size} gridSize
<span class='line'>1250</span>  * @param {cc.Point} position
<span class='line'>1251</span>  * @param {Number} twirls
<span class='line'>1252</span>  * @param {Number} amplitude
<span class='line'>1253</span>  * @return {cc.Twirl}
<span class='line'>1254</span>  * @static
<span class='line'>1255</span>  * @deprecated since v3.0 &lt;br /> Please use cc.twirl instead.
<span class='line'>1256</span>  */</span><span class="WHIT">
<span class='line'>1257</span> </span><span class="NAME">cc.Twirl.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.twirl</span><span class="PUNC">;</span></pre></body></html>