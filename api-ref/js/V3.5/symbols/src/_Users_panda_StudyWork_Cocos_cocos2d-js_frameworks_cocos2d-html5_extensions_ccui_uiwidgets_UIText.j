<html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8"> <style>
	.KEYW {color: #933;}
	.COMM {color: #bbb; font-style: italic;}
	.NUMB {color: #393;}
	.STRN {color: #393;}
	.REGX {color: #339;}
	.line {border-right: 1px dotted #666; color: #666; font-style: normal;}
	</style></head><body><pre><span class='line'>  1</span> <span class="COMM">/****************************************************************************
<span class='line'>  2</span>  Copyright (c) 2011-2012 cocos2d-x.org
<span class='line'>  3</span>  Copyright (c) 2013-2014 Chukong Technologies Inc.
<span class='line'>  4</span> 
<span class='line'>  5</span>  http://www.cocos2d-x.org
<span class='line'>  6</span> 
<span class='line'>  7</span>  Permission is hereby granted, free of charge, to any person obtaining a copy
<span class='line'>  8</span>  of this software and associated documentation files (the "Software"), to deal
<span class='line'>  9</span>  in the Software without restriction, including without limitation the rights
<span class='line'> 10</span>  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
<span class='line'> 11</span>  copies of the Software, and to permit persons to whom the Software is
<span class='line'> 12</span>  furnished to do so, subject to the following conditions:
<span class='line'> 13</span> 
<span class='line'> 14</span>  The above copyright notice and this permission notice shall be included in
<span class='line'> 15</span>  all copies or substantial portions of the Software.
<span class='line'> 16</span> 
<span class='line'> 17</span>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
<span class='line'> 18</span>  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
<span class='line'> 19</span>  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
<span class='line'> 20</span>  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
<span class='line'> 21</span>  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
<span class='line'> 22</span>  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
<span class='line'> 23</span>  THE SOFTWARE.
<span class='line'> 24</span>  ****************************************************************************/</span><span class="WHIT">
<span class='line'> 25</span> 
<span class='line'> 26</span> </span><span class="COMM">/**
<span class='line'> 27</span>  * The text control of Cocos UI.
<span class='line'> 28</span>  * @class
<span class='line'> 29</span>  * @extends ccui.Widget
<span class='line'> 30</span>  *
<span class='line'> 31</span>  * @property {Number}   boundingWidth       - Width of the bounding area of label, the real content width is limited by boundingWidth
<span class='line'> 32</span>  * @property {Number}   boundingHeight      - Height of the bounding area of label, the real content height is limited by boundingHeight
<span class='line'> 33</span>  * @property {String}   string              - The content string of the label
<span class='line'> 34</span>  * @property {Number}   stringLength        - &lt;@readonly> The content string length of the label
<span class='line'> 35</span>  * @property {String}   font                - The label font with a style string: e.g. "18px Verdana"
<span class='line'> 36</span>  * @property {String}   fontName            - The label font name
<span class='line'> 37</span>  * @property {Number}   fontSize            - The label font size
<span class='line'> 38</span>  * @property {Number}   textAlign           - Horizontal Alignment of label, cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT
<span class='line'> 39</span>  * @property {Number}   verticalAlign       - Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM
<span class='line'> 40</span>  * @property {Boolean}  touchScaleEnabled   - Indicate whether the label will scale when touching
<span class='line'> 41</span>  */</span><span class="WHIT">
<span class='line'> 42</span> </span><span class="NAME">ccui.Text</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">ccui.Widget.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends ccui.Text# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 43</span> </span><span class="WHIT">    </span><span class="NAME">_touchScaleChangeEnabled</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 44</span> </span><span class="WHIT">    </span><span class="NAME">_normalScaleValueX</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 45</span> </span><span class="WHIT">    </span><span class="NAME">_normalScaleValueY</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 46</span> </span><span class="WHIT">    </span><span class="NAME">_fontName</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="STRN">"Thonburi"</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 47</span> </span><span class="WHIT">    </span><span class="NAME">_fontSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">10</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 48</span> </span><span class="WHIT">    </span><span class="NAME">_onSelectedScaleOffset</span><span class="PUNC">:</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 49</span> </span><span class="WHIT">    </span><span class="NAME">_labelRenderer</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="STRN">""</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 50</span> </span><span class="WHIT">    </span><span class="NAME">_textAreaSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 51</span> </span><span class="WHIT">    </span><span class="NAME">_textVerticalAlignment</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 52</span> </span><span class="WHIT">    </span><span class="NAME">_textHorizontalAlignment</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 53</span> </span><span class="WHIT">    </span><span class="NAME">_className</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="STRN">"Text"</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 54</span> </span><span class="WHIT">    </span><span class="NAME">_type</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 55</span> </span><span class="WHIT">    </span><span class="NAME">_labelRendererAdaptDirty</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 56</span> 
<span class='line'> 57</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 58</span>      * allocates and initializes a UILabel.
<span class='line'> 59</span>      * Constructor of ccui.Text. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'> 60</span>      * @param {String} textContent
<span class='line'> 61</span>      * @param {String} fontName
<span class='line'> 62</span>      * @param {Number} fontSize
<span class='line'> 63</span>      * @example
<span class='line'> 64</span>      * // example
<span class='line'> 65</span>      * var uiLabel = new ccui.Text();
<span class='line'> 66</span>      */</span><span class="WHIT">
<span class='line'> 67</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">textContent</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontSize</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 68</span> </span><span class="WHIT">        </span><span class="NAME">this._type</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">ccui.Text.Type.SYSTEM</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">        </span><span class="NAME">this._textAreaSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 70</span> </span><span class="WHIT">        </span><span class="NAME">ccui.Widget.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 71</span> 
<span class='line'> 72</span> </span><span class="WHIT">        </span><span class="NAME">fontSize</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.init</span><span class="PUNC">(</span><span class="NAME">textContent</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 73</span> 
<span class='line'> 74</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 75</span> 
<span class='line'> 76</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 77</span>      * Initializes a ccui.Text. Please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
<span class='line'> 78</span>      * @param {String} textContent
<span class='line'> 79</span>      * @param {String} fontName
<span class='line'> 80</span>      * @param {Number} fontSize
<span class='line'> 81</span>      * @returns {boolean}
<span class='line'> 82</span>      * @override
<span class='line'> 83</span>      */</span><span class="WHIT">
<span class='line'> 84</span> </span><span class="WHIT">    </span><span class="NAME">init</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">textContent</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontSize</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 85</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">ccui.Widget.prototype.init.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 86</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">arguments.length</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 87</span> </span><span class="WHIT">                </span><span class="NAME">this.setFontName</span><span class="PUNC">(</span><span class="NAME">fontName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 88</span> </span><span class="WHIT">                </span><span class="NAME">this.setFontSize</span><span class="PUNC">(</span><span class="NAME">fontSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 89</span> </span><span class="WHIT">                </span><span class="NAME">this.setString</span><span class="PUNC">(</span><span class="NAME">textContent</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 90</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="KEYW">else</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 91</span> </span><span class="WHIT">                </span><span class="NAME">this.setFontName</span><span class="PUNC">(</span><span class="NAME">this._fontName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 92</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 93</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 94</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 95</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 96</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 97</span> 
<span class='line'> 98</span> </span><span class="WHIT">    </span><span class="NAME">_initRenderer</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.LabelTTF</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>100</span> </span><span class="WHIT">        </span><span class="NAME">this.addProtectedChild</span><span class="PUNC">(</span><span class="NAME">this._labelRenderer</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">ccui.Text.RENDERER_ZORDER</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>101</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>102</span> 
<span class='line'>103</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>104</span>      * Changes the  value of ccui.Text.
<span class='line'>105</span>      * @deprecated since v3.0, please use setString() instead.
<span class='line'>106</span>      * @param {String} text
<span class='line'>107</span>      */</span><span class="WHIT">
<span class='line'>108</span> </span><span class="WHIT">    </span><span class="NAME">setText</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">text</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>109</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"Please use the setString"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>110</span> </span><span class="WHIT">        </span><span class="NAME">this.setString</span><span class="PUNC">(</span><span class="NAME">text</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>111</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>112</span> 
<span class='line'>113</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>114</span>      * Changes the  value of ccui.Text.
<span class='line'>115</span>      * @param {String} text
<span class='line'>116</span>      */</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">    </span><span class="NAME">setString</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">text</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>118</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">text</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getString</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>119</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>120</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setString</span><span class="PUNC">(</span><span class="NAME">text</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>121</span> </span><span class="WHIT">        </span><span class="NAME">this._updateContentSizeWithTextureSize</span><span class="PUNC">(</span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>122</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRendererAdaptDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>123</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>124</span> 
<span class='line'>125</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>126</span>      * Gets the string value of ccui.Text.
<span class='line'>127</span>      * @deprecated since v3.0, please use getString instead.
<span class='line'>128</span>      * @returns {String}
<span class='line'>129</span>      */</span><span class="WHIT">
<span class='line'>130</span> </span><span class="WHIT">    </span><span class="NAME">getStringValue</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>131</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"Please use the getString"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>132</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getString</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>133</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>134</span> 
<span class='line'>135</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>136</span>      * Gets the string value of ccui.Text.
<span class='line'>137</span>      * @returns {String}
<span class='line'>138</span>      */</span><span class="WHIT">
<span class='line'>139</span> </span><span class="WHIT">    </span><span class="NAME">getString</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>140</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getString</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>141</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>142</span> 
<span class='line'>143</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>144</span>      * Gets the string length of ccui.Text.
<span class='line'>145</span>      * @returns {Number}
<span class='line'>146</span>      */</span><span class="WHIT">
<span class='line'>147</span> </span><span class="WHIT">    </span><span class="NAME">getStringLength</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>148</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getStringLength</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>149</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>150</span> 
<span class='line'>151</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>152</span>      * Sets fontSize
<span class='line'>153</span>      * @param {Number} size
<span class='line'>154</span>      */</span><span class="WHIT">
<span class='line'>155</span> </span><span class="WHIT">    </span><span class="NAME">setFontSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">size</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>156</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setFontSize</span><span class="PUNC">(</span><span class="NAME">size</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>157</span> </span><span class="WHIT">        </span><span class="NAME">this._fontSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">size</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>158</span> </span><span class="WHIT">        </span><span class="NAME">this._updateContentSizeWithTextureSize</span><span class="PUNC">(</span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>159</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRendererAdaptDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>160</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>161</span> 
<span class='line'>162</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>163</span>      * Returns font Size of ccui.Text
<span class='line'>164</span>      * @returns {Number}
<span class='line'>165</span>      */</span><span class="WHIT">
<span class='line'>166</span> </span><span class="WHIT">    </span><span class="NAME">getFontSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>167</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._fontSize</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>168</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>169</span> 
<span class='line'>170</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>171</span>      * Sets font name
<span class='line'>172</span>      * @return {String} name
<span class='line'>173</span>      */</span><span class="WHIT">
<span class='line'>174</span> </span><span class="WHIT">    </span><span class="NAME">setFontName</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">name</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>175</span> </span><span class="WHIT">        </span><span class="NAME">this._fontName</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">name</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>176</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setFontName</span><span class="PUNC">(</span><span class="NAME">name</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>177</span> </span><span class="WHIT">        </span><span class="NAME">this._updateContentSizeWithTextureSize</span><span class="PUNC">(</span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>178</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRendererAdaptDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>179</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>180</span> 
<span class='line'>181</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>182</span>      * Returns font name of ccui.Text.
<span class='line'>183</span>      * @returns {string}
<span class='line'>184</span>      */</span><span class="WHIT">
<span class='line'>185</span> </span><span class="WHIT">    </span><span class="NAME">getFontName</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>186</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._fontName</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>187</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>188</span> 
<span class='line'>189</span> </span><span class="WHIT">    </span><span class="NAME">_setFont</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">font</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>190</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">res</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.LabelTTF._fontStyleRE.exec</span><span class="PUNC">(</span><span class="NAME">font</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>191</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">res</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>192</span> </span><span class="WHIT">            </span><span class="NAME">this._fontSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">parseInt</span><span class="PUNC">(</span><span class="NAME">res</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>193</span> </span><span class="WHIT">            </span><span class="NAME">this._fontName</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">res</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>194</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer._setFont</span><span class="PUNC">(</span><span class="NAME">font</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>195</span> </span><span class="WHIT">            </span><span class="NAME">this._labelScaleChangedWithSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>196</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>197</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>198</span> </span><span class="WHIT">    </span><span class="NAME">_getFont</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>199</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer._getFont</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>200</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>201</span> 
<span class='line'>202</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>203</span>      * Returns the type of ccui.Text.
<span class='line'>204</span>      * @returns {null}
<span class='line'>205</span>      */</span><span class="WHIT">
<span class='line'>206</span> </span><span class="WHIT">    </span><span class="NAME">getType</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>207</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT">  </span><span class="NAME">this._type</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>208</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>209</span> 
<span class='line'>210</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>211</span>      * Sets text Area Size
<span class='line'>212</span>      * @param {cc.Size} size
<span class='line'>213</span>      */</span><span class="WHIT">
<span class='line'>214</span> </span><span class="WHIT">    </span><span class="NAME">setTextAreaSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">size</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>215</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setDimensions</span><span class="PUNC">(</span><span class="NAME">size</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._ignoreSize</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>217</span> </span><span class="WHIT">            </span><span class="NAME">this._customSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">size</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>218</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>219</span> </span><span class="WHIT">        </span><span class="NAME">this._updateContentSizeWithTextureSize</span><span class="PUNC">(</span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>220</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRendererAdaptDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>221</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>222</span> 
<span class='line'>223</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>224</span>      * Returns renderer's dimension.
<span class='line'>225</span>      * @returns {cc.Size}
<span class='line'>226</span>      */</span><span class="WHIT">
<span class='line'>227</span> </span><span class="WHIT">    </span><span class="NAME">getTextAreaSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>228</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getDimensions</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>229</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>230</span> 
<span class='line'>231</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>232</span>      * Sets Horizontal Alignment of cc.LabelTTF
<span class='line'>233</span>      * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} alignment Horizontal Alignment
<span class='line'>234</span>      */</span><span class="WHIT">
<span class='line'>235</span> </span><span class="WHIT">    </span><span class="NAME">setTextHorizontalAlignment</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">alignment</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>236</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setHorizontalAlignment</span><span class="PUNC">(</span><span class="NAME">alignment</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>237</span> </span><span class="WHIT">        </span><span class="NAME">this._updateContentSizeWithTextureSize</span><span class="PUNC">(</span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>238</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRendererAdaptDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>239</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>240</span> 
<span class='line'>241</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>242</span>      * Returns Horizontal Alignment of label
<span class='line'>243</span>      * @returns {TEXT_ALIGNMENT_LEFT|TEXT_ALIGNMENT_CENTER|TEXT_ALIGNMENT_RIGHT}
<span class='line'>244</span>      */</span><span class="WHIT">
<span class='line'>245</span> </span><span class="WHIT">    </span><span class="NAME">getTextHorizontalAlignment</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>246</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getHorizontalAlignment</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>247</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>248</span> 
<span class='line'>249</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>250</span>      * Sets Vertical Alignment of label
<span class='line'>251</span>      * @param {cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM} alignment
<span class='line'>252</span>      */</span><span class="WHIT">
<span class='line'>253</span> </span><span class="WHIT">    </span><span class="NAME">setTextVerticalAlignment</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">alignment</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>254</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setVerticalAlignment</span><span class="PUNC">(</span><span class="NAME">alignment</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>255</span> </span><span class="WHIT">        </span><span class="NAME">this._updateContentSizeWithTextureSize</span><span class="PUNC">(</span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>256</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRendererAdaptDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>257</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>258</span> 
<span class='line'>259</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>260</span>      * Gets text vertical alignment.
<span class='line'>261</span>      * @returns {VERTICAL_TEXT_ALIGNMENT_TOP|VERTICAL_TEXT_ALIGNMENT_CENTER|VERTICAL_TEXT_ALIGNMENT_BOTTOM}
<span class='line'>262</span>      */</span><span class="WHIT">
<span class='line'>263</span> </span><span class="WHIT">    </span><span class="NAME">getTextVerticalAlignment</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>264</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getVerticalAlignment</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>265</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>266</span> 
<span class='line'>267</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>268</span>      * Sets the touch scale enabled of label.
<span class='line'>269</span>      * @param {Boolean} enable
<span class='line'>270</span>      */</span><span class="WHIT">
<span class='line'>271</span> </span><span class="WHIT">    </span><span class="NAME">setTouchScaleChangeEnabled</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">enable</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>272</span> </span><span class="WHIT">        </span><span class="NAME">this._touchScaleChangeEnabled</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">enable</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>273</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>274</span> 
<span class='line'>275</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>276</span>      * Gets the touch scale enabled of label.
<span class='line'>277</span>      * @returns {Boolean}
<span class='line'>278</span>      */</span><span class="WHIT">
<span class='line'>279</span> </span><span class="WHIT">    </span><span class="NAME">isTouchScaleChangeEnabled</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>280</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._touchScaleChangeEnabled</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>281</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>282</span> 
<span class='line'>283</span> </span><span class="WHIT">    </span><span class="NAME">_onPressStateChangedToNormal</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>284</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._touchScaleChangeEnabled</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>285</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>286</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setScaleX</span><span class="PUNC">(</span><span class="NAME">this._normalScaleValueX</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>287</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setScaleY</span><span class="PUNC">(</span><span class="NAME">this._normalScaleValueY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>288</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>289</span> 
<span class='line'>290</span> </span><span class="WHIT">    </span><span class="NAME">_onPressStateChangedToPressed</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>291</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._touchScaleChangeEnabled</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>292</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>293</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setScaleX</span><span class="PUNC">(</span><span class="NAME">this._normalScaleValueX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._onSelectedScaleOffset</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>294</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setScaleY</span><span class="PUNC">(</span><span class="NAME">this._normalScaleValueY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._onSelectedScaleOffset</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>295</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>296</span> 
<span class='line'>297</span> </span><span class="WHIT">    </span><span class="NAME">_onPressStateChangedToDisabled</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>298</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>299</span> 
<span class='line'>300</span> </span><span class="WHIT">    </span><span class="NAME">_onSizeChanged</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>301</span> </span><span class="WHIT">        </span><span class="NAME">ccui.Widget.prototype._onSizeChanged.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>302</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRendererAdaptDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>303</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>304</span> 
<span class='line'>305</span> </span><span class="WHIT">    </span><span class="NAME">_adaptRenderers</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>306</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._labelRendererAdaptDirty</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>307</span> </span><span class="WHIT">            </span><span class="NAME">this._labelScaleChangedWithSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>308</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRendererAdaptDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>309</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>310</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>311</span> 
<span class='line'>312</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>313</span>      * Returns the renderer's content size.
<span class='line'>314</span>      * @override
<span class='line'>315</span>      * @returns {cc.Size}
<span class='line'>316</span>      */</span><span class="WHIT">
<span class='line'>317</span> </span><span class="WHIT">    </span><span class="NAME">getVirtualRendererSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>318</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>319</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>320</span> 
<span class='line'>321</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>322</span>      * Returns the renderer of ccui.Text.
<span class='line'>323</span>      * @returns {cc.Node}
<span class='line'>324</span>      */</span><span class="WHIT">
<span class='line'>325</span> </span><span class="WHIT">    </span><span class="NAME">getVirtualRenderer</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>326</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>327</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>328</span> 
<span class='line'>329</span> </span><span class="WHIT">    </span><span class="COMM">//@since v3.3</span><span class="WHIT">
<span class='line'>330</span> </span><span class="WHIT">    </span><span class="NAME">getAutoRenderSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>331</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">virtualSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>332</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._ignoreSize</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>333</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.setDimensions</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>334</span> </span><span class="WHIT">            </span><span class="NAME">virtualSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>335</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.setDimensions</span><span class="PUNC">(</span><span class="NAME">this._contentSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._contentSize.height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>336</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>337</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">virtualSize</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>338</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>339</span> 
<span class='line'>340</span> </span><span class="WHIT">    </span><span class="NAME">_labelScaleChangedWithSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>341</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locContentSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._contentSize</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>342</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._ignoreSize</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>343</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.setDimensions</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>344</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.setScale</span><span class="PUNC">(</span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>345</span> </span><span class="WHIT">            </span><span class="NAME">this._normalScaleValueX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._normalScaleValueY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>346</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>347</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.setDimensions</span><span class="PUNC">(</span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NAME">locContentSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locContentSize.height</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>348</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">textureSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>349</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">textureSize.width</span><span class="WHIT"> </span><span class="PUNC">&lt;=</span><span class="WHIT"> </span><span class="NUMB">0.0</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">textureSize.height</span><span class="WHIT"> </span><span class="PUNC">&lt;=</span><span class="WHIT"> </span><span class="NUMB">0.0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>350</span> </span><span class="WHIT">                </span><span class="NAME">this._labelRenderer.setScale</span><span class="PUNC">(</span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>351</span> </span><span class="WHIT">                </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>352</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>353</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">scaleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locContentSize.width</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">textureSize.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>354</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">scaleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locContentSize.height</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">textureSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>355</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.setScaleX</span><span class="PUNC">(</span><span class="NAME">scaleX</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>356</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.setScaleY</span><span class="PUNC">(</span><span class="NAME">scaleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>357</span> </span><span class="WHIT">            </span><span class="NAME">this._normalScaleValueX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">scaleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>358</span> </span><span class="WHIT">            </span><span class="NAME">this._normalScaleValueY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">scaleY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>359</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>360</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setPosition</span><span class="PUNC">(</span><span class="NAME">locContentSize.width</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locContentSize.height</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>361</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>362</span> 
<span class='line'>363</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>364</span>      * Returns the "class name" of ccui.Text.
<span class='line'>365</span>      * @returns {string}
<span class='line'>366</span>      */</span><span class="WHIT">
<span class='line'>367</span> </span><span class="WHIT">    </span><span class="NAME">getDescription</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>368</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="STRN">"Label"</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>369</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>370</span> 
<span class='line'>371</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>372</span>      * Enables shadow style and sets color, offset and blur radius styles.
<span class='line'>373</span>      * @param {cc.Color} shadowColor
<span class='line'>374</span>      * @param {cc.Size} offset
<span class='line'>375</span>      * @param {Number} blurRadius
<span class='line'>376</span>      */</span><span class="WHIT">
<span class='line'>377</span> </span><span class="WHIT">    </span><span class="NAME">enableShadow</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">shadowColor</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">offset</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blurRadius</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>378</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.enableShadow</span><span class="PUNC">(</span><span class="NAME">shadowColor</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">offset</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blurRadius</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>379</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>380</span> 
<span class='line'>381</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>382</span>      * Enables outline style and sets outline's color and size.
<span class='line'>383</span>      * @param {cc.Color} outlineColor
<span class='line'>384</span>      * @param {cc.Size} outlineSize
<span class='line'>385</span>      */</span><span class="WHIT">
<span class='line'>386</span> </span><span class="WHIT">    </span><span class="NAME">enableOutline</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">outlineColor</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outlineSize</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>387</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.enableStroke</span><span class="PUNC">(</span><span class="NAME">outlineColor</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">outlineSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>388</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>389</span> 
<span class='line'>390</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>391</span>      * Enables glow color
<span class='line'>392</span>      * @param glowColor
<span class='line'>393</span>      */</span><span class="WHIT">
<span class='line'>394</span> </span><span class="WHIT">    </span><span class="NAME">enableGlow</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">glowColor</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>395</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._type</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">ccui.Text.Type.TTF</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>396</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.enableGlow</span><span class="PUNC">(</span><span class="NAME">glowColor</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>397</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>398</span> 
<span class='line'>399</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>400</span>      * Disables renderer's effect.
<span class='line'>401</span>      */</span><span class="WHIT">
<span class='line'>402</span> </span><span class="WHIT">    </span><span class="NAME">disableEffect</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>403</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._labelRenderer.disableEffect</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>404</span> </span><span class="WHIT">            </span><span class="NAME">this._labelRenderer.disableEffect</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>405</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>406</span> 
<span class='line'>407</span> </span><span class="WHIT">    </span><span class="NAME">_createCloneInstance</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>408</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">ccui.Text</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>409</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>410</span> 
<span class='line'>411</span> </span><span class="WHIT">    </span><span class="NAME">_copySpecialProperties</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">uiLabel</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>412</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">uiLabel</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">ccui.Text</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>413</span> </span><span class="WHIT">            </span><span class="NAME">this.setFontName</span><span class="PUNC">(</span><span class="NAME">uiLabel._fontName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>414</span> </span><span class="WHIT">            </span><span class="NAME">this.setFontSize</span><span class="PUNC">(</span><span class="NAME">uiLabel.getFontSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>415</span> </span><span class="WHIT">            </span><span class="NAME">this.setString</span><span class="PUNC">(</span><span class="NAME">uiLabel.getString</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>416</span> </span><span class="WHIT">            </span><span class="NAME">this.setTouchScaleChangeEnabled</span><span class="PUNC">(</span><span class="NAME">uiLabel.touchScaleEnabled</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>417</span> </span><span class="WHIT">            </span><span class="NAME">this.setTextAreaSize</span><span class="PUNC">(</span><span class="NAME">uiLabel._textAreaSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>418</span> </span><span class="WHIT">            </span><span class="NAME">this.setTextHorizontalAlignment</span><span class="PUNC">(</span><span class="NAME">uiLabel._labelRenderer.getHorizontalAlignment</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>419</span> </span><span class="WHIT">            </span><span class="NAME">this.setTextVerticalAlignment</span><span class="PUNC">(</span><span class="NAME">uiLabel._labelRenderer.getVerticalAlignment</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>420</span> </span><span class="WHIT">            </span><span class="NAME">this.setContentSize</span><span class="PUNC">(</span><span class="NAME">uiLabel.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>421</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>422</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>423</span> 
<span class='line'>424</span> </span><span class="WHIT">    </span><span class="NAME">_setBoundingWidth</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">value</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>425</span> </span><span class="WHIT">        </span><span class="NAME">this._textAreaSize.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">value</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>426</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer._setBoundingWidth</span><span class="PUNC">(</span><span class="NAME">value</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>427</span> </span><span class="WHIT">        </span><span class="NAME">this._labelScaleChangedWithSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>428</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>429</span> </span><span class="WHIT">    </span><span class="NAME">_setBoundingHeight</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">value</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>430</span> </span><span class="WHIT">        </span><span class="NAME">this._textAreaSize.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">value</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>431</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer._setBoundingHeight</span><span class="PUNC">(</span><span class="NAME">value</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>432</span> </span><span class="WHIT">        </span><span class="NAME">this._labelScaleChangedWithSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>433</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>434</span> </span><span class="WHIT">    </span><span class="NAME">_getBoundingWidth</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>435</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._textAreaSize.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>436</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>437</span> </span><span class="WHIT">    </span><span class="NAME">_getBoundingHeight</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>438</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._textAreaSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>439</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>440</span> 
<span class='line'>441</span> </span><span class="WHIT">    </span><span class="NAME">_changePosition</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>442</span> </span><span class="WHIT">        </span><span class="NAME">this._adaptRenderers</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>443</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>444</span> 
<span class='line'>445</span> </span><span class="WHIT">    </span><span class="NAME">setColor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">color</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>446</span> </span><span class="WHIT">        </span><span class="NAME">cc.ProtectedNode.prototype.setColor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">color</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>447</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setColor</span><span class="PUNC">(</span><span class="NAME">color</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>448</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>449</span> 
<span class='line'>450</span> </span><span class="WHIT">    </span><span class="NAME">setTextColor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">color</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>451</span> </span><span class="WHIT">        </span><span class="NAME">this._labelRenderer.setFontFillColor</span><span class="PUNC">(</span><span class="NAME">color</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>452</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>453</span> 
<span class='line'>454</span> </span><span class="WHIT">    </span><span class="NAME">getTextColor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>455</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._labelRenderer._getFillStyle</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>456</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>457</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>458</span> 
<span class='line'>459</span> </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">_p</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">ccui.Text.prototype</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>460</span> 
<span class='line'>461</span> </span><span class="COMM">// Extended properties</span><span class="WHIT">
<span class='line'>462</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>463</span> </span><span class="NAME">_p.boundingWidth</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>464</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"boundingWidth"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._getBoundingWidth</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._setBoundingWidth</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>465</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>466</span> </span><span class="NAME">_p.boundingHeight</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>467</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"boundingHeight"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._getBoundingHeight</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._setBoundingHeight</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>468</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>469</span> </span><span class="NAME">_p.string</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>470</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"string"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.getString</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.setString</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>471</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>472</span> </span><span class="NAME">_p.stringLength</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>473</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"stringLength"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.getStringLength</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>474</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>475</span> </span><span class="NAME">_p.font</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>476</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"font"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._getFont</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._setFont</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>477</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>478</span> </span><span class="NAME">_p.fontSize</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>479</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"fontSize"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.getFontSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.setFontSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>480</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>481</span> </span><span class="NAME">_p.fontName</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>482</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"fontName"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.getFontName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.setFontName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>483</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>484</span> </span><span class="NAME">_p.textAlign</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>485</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"textAlign"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.getTextHorizontalAlignment</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.setTextHorizontalAlignment</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>486</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>487</span> </span><span class="NAME">_p.verticalAlign</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>488</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"verticalAlign"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.getTextVerticalAlignment</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p.setTextVerticalAlignment</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>489</span> 
<span class='line'>490</span> </span><span class="NAME">_p</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>491</span> 
<span class='line'>492</span> </span><span class="COMM">/**
<span class='line'>493</span>  * allocates and initializes a UILabel.
<span class='line'>494</span>  * @deprecated since v3.0, please use new ccui.Text() instead.
<span class='line'>495</span>  * @return {ccui.Text}
<span class='line'>496</span>  */</span><span class="WHIT">
<span class='line'>497</span> </span><span class="NAME">ccui.Label</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">ccui.Text.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">textContent</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontSize</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>498</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">ccui.Text</span><span class="PUNC">(</span><span class="NAME">textContent</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fontSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>499</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>500</span> 
<span class='line'>501</span> </span><span class="COMM">/**
<span class='line'>502</span>  * The zOrder value of ccui.Text's renderer.
<span class='line'>503</span>  * @constant
<span class='line'>504</span>  * @type {number}
<span class='line'>505</span>  */</span><span class="WHIT">
<span class='line'>506</span> </span><span class="NAME">ccui.Text.RENDERER_ZORDER</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>507</span> 
<span class='line'>508</span> </span><span class="COMM">/**
<span class='line'>509</span>  * @ignore
<span class='line'>510</span>  */</span><span class="WHIT">
<span class='line'>511</span> </span><span class="NAME">ccui.Text.Type</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>512</span> </span><span class="WHIT">    </span><span class="NAME">SYSTEM</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>513</span> </span><span class="WHIT">    </span><span class="NAME">TTF</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="WHIT">
<span class='line'>514</span> </span><span class="PUNC">}</span><span class="PUNC">;</span></pre></body></html>