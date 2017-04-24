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
<span class='line'> 28</span>  * cc.shaderCache is a singleton object that stores manages GL shaders
<span class='line'> 29</span>  * @class
<span class='line'> 30</span>  * @name cc.shaderCache
<span class='line'> 31</span>  */</span><span class="WHIT">
<span class='line'> 32</span> </span><span class="NAME">cc.shaderCache</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="COMM">/** @lends cc.shaderCache# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 33</span> 
<span class='line'> 34</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 35</span> 	 * @public
<span class='line'> 36</span> 	 * @constant
<span class='line'> 37</span> 	 * @type {Number}
<span class='line'> 38</span> 	 */</span><span class="WHIT">
<span class='line'> 39</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_POSITION_TEXTURECOLOR</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 40</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 41</span> 	 * @public
<span class='line'> 42</span> 	 * @constant
<span class='line'> 43</span> 	 * @type {Number}
<span class='line'> 44</span> 	 */</span><span class="WHIT">
<span class='line'> 45</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_POSITION_TEXTURECOLOR_ALPHATEST</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 46</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 47</span> 	 * @public
<span class='line'> 48</span> 	 * @constant
<span class='line'> 49</span> 	 * @type {Number}
<span class='line'> 50</span> 	 */</span><span class="WHIT">
<span class='line'> 51</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_POSITION_COLOR</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 52</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 53</span> 	 * @public
<span class='line'> 54</span> 	 * @constant
<span class='line'> 55</span> 	 * @type {Number}
<span class='line'> 56</span> 	 */</span><span class="WHIT">
<span class='line'> 57</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_POSITION_TEXTURE</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">3</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 58</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 59</span> 	 * @public
<span class='line'> 60</span> 	 * @constant
<span class='line'> 61</span> 	 * @type {Number}
<span class='line'> 62</span> 	 */</span><span class="WHIT">
<span class='line'> 63</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_POSITION_TEXTURE_UCOLOR</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">4</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 64</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 65</span> 	 * @public
<span class='line'> 66</span> 	 * @constant
<span class='line'> 67</span> 	 * @type {Number}
<span class='line'> 68</span> 	 */</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_POSITION_TEXTURE_A8COLOR</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">5</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 70</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 71</span> 	 * @public
<span class='line'> 72</span> 	 * @constant
<span class='line'> 73</span> 	 * @type {Number}
<span class='line'> 74</span> 	 */</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_POSITION_UCOLOR</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">6</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 76</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 77</span> 	 * @public
<span class='line'> 78</span> 	 * @constant
<span class='line'> 79</span> 	 * @type {Number}
<span class='line'> 80</span> 	 */</span><span class="WHIT">
<span class='line'> 81</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_POSITION_LENGTH_TEXTURECOLOR</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">7</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 82</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 83</span> 	 * @public
<span class='line'> 84</span> 	 * @constant
<span class='line'> 85</span> 	 * @type {Number}
<span class='line'> 86</span> 	 */</span><span class="WHIT">
<span class='line'> 87</span> </span><span class="WHIT">	</span><span class="NAME">TYPE_MAX</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">8</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 88</span> 
<span class='line'> 89</span> </span><span class="WHIT">    </span><span class="NAME">_programs</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 90</span> 
<span class='line'> 91</span> </span><span class="WHIT">    </span><span class="NAME">_init</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 92</span> </span><span class="WHIT">        </span><span class="NAME">this.loadDefaultShaders</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 93</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 94</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 95</span> 
<span class='line'> 96</span> </span><span class="WHIT">    </span><span class="NAME">_loadDefaultShader</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">type</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 97</span> </span><span class="WHIT">        </span><span class="KEYW">switch</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">type</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 98</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURECOLOR</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">                </span><span class="NAME">program.initWithVertexShaderByteArray</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURE_COLOR_VERT</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SHADER_POSITION_TEXTURE_COLOR_FRAG</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>100</span> 
<span class='line'>101</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_POSITION</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_POSITION</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>102</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_COLOR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>103</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_TEX_COORD</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_TEX_COORDS</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>104</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>105</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>106</span> </span><span class="WHIT">                </span><span class="NAME">program.initWithVertexShaderByteArray</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURE_COLOR_VERT</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>107</span> 
<span class='line'>108</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_POSITION</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_POSITION</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>109</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_COLOR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>110</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_TEX_COORD</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_TEX_COORDS</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>111</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>112</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_COLOR</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>113</span> </span><span class="WHIT">                </span><span class="NAME">program.initWithVertexShaderByteArray</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_COLOR_VERT</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SHADER_POSITION_COLOR_FRAG</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>114</span> 
<span class='line'>115</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_POSITION</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_POSITION</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>116</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_COLOR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>118</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>119</span> </span><span class="WHIT">                </span><span class="NAME">program.initWithVertexShaderByteArray</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURE_VERT</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SHADER_POSITION_TEXTURE_FRAG</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>120</span> 
<span class='line'>121</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_POSITION</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_POSITION</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>122</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_TEX_COORD</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_TEX_COORDS</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>123</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>124</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE_UCOLOR</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>125</span> </span><span class="WHIT">                </span><span class="NAME">program.initWithVertexShaderByteArray</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURE_UCOLOR_VERT</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SHADER_POSITION_TEXTURE_UCOLOR_FRAG</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>126</span> 
<span class='line'>127</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_POSITION</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_POSITION</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>128</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_TEX_COORD</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_TEX_COORDS</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>129</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>130</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE_A8COLOR</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>131</span> </span><span class="WHIT">                </span><span class="NAME">program.initWithVertexShaderByteArray</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SHADER_POSITION_TEXTURE_A8COLOR_FRAG</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>132</span> 
<span class='line'>133</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_POSITION</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_POSITION</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>134</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_COLOR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>135</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_TEX_COORD</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_TEX_COORDS</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>136</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>137</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_UCOLOR</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>138</span> </span><span class="WHIT">                </span><span class="NAME">program.initWithVertexShaderByteArray</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_UCOLOR_VERT</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SHADER_POSITION_UCOLOR_FRAG</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>139</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="STRN">"aVertex"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_POSITION</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>140</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>141</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_LENGTH_TEXTURECOLOR</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>142</span> </span><span class="WHIT">                </span><span class="NAME">program.initWithVertexShaderByteArray</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>143</span> 
<span class='line'>144</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_POSITION</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_POSITION</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>145</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_TEX_COORD</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_TEX_COORDS</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>146</span> </span><span class="WHIT">                </span><span class="NAME">program.addAttribute</span><span class="PUNC">(</span><span class="NAME">cc.ATTRIBUTE_NAME_COLOR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.VERTEX_ATTRIB_COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>147</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>148</span> </span><span class="WHIT">            </span><span class="KEYW">default</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>149</span> </span><span class="WHIT">                </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"cocos2d: cc.shaderCache._loadDefaultShader, error shader type"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>150</span> </span><span class="WHIT">                </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>151</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>152</span> 
<span class='line'>153</span> </span><span class="WHIT">        </span><span class="NAME">program.link</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>154</span> </span><span class="WHIT">        </span><span class="NAME">program.updateUniforms</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>155</span> 
<span class='line'>156</span> </span><span class="WHIT">        </span><span class="COMM">//cc.checkGLErrorDebug();</span><span class="WHIT">
<span class='line'>157</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>158</span> 
<span class='line'>159</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>160</span>      * loads the default shaders
<span class='line'>161</span>      */</span><span class="WHIT">
<span class='line'>162</span> </span><span class="WHIT">    </span><span class="NAME">loadDefaultShaders</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>163</span> </span><span class="WHIT">        </span><span class="COMM">// Position Texture Color shader</span><span class="WHIT">
<span class='line'>164</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.GLProgram</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>165</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURECOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>166</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">cc.SHADER_POSITION_TEXTURECOLOR</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>167</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="STRN">"ShaderPositionTextureColor"</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>168</span> 
<span class='line'>169</span> </span><span class="WHIT">        </span><span class="COMM">// Position Texture Color alpha test</span><span class="WHIT">
<span class='line'>170</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.GLProgram</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>171</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>172</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">cc.SHADER_POSITION_TEXTURECOLORALPHATEST</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>173</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="STRN">"ShaderPositionTextureColorAlphaTest"</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>174</span> 
<span class='line'>175</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>176</span> </span><span class="WHIT">        </span><span class="COMM">// Position, Color shader</span><span class="WHIT">
<span class='line'>177</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>178</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.GLProgram</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>179</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>180</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">cc.SHADER_POSITION_COLOR</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>181</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="STRN">"ShaderPositionColor"</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>182</span> 
<span class='line'>183</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>184</span> </span><span class="WHIT">        </span><span class="COMM">// Position Texture shader</span><span class="WHIT">
<span class='line'>185</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>186</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.GLProgram</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>187</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>188</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">cc.SHADER_POSITION_TEXTURE</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>189</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="STRN">"ShaderPositionTexture"</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>190</span> 
<span class='line'>191</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>192</span> </span><span class="WHIT">        </span><span class="COMM">// Position, Texture attribs, 1 Color as uniform shader</span><span class="WHIT">
<span class='line'>193</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>194</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.GLProgram</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>195</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE_UCOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>196</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">cc.SHADER_POSITION_TEXTURE_UCOLOR</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>197</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="STRN">"ShaderPositionTextureUColor"</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>198</span> 
<span class='line'>199</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>200</span> </span><span class="WHIT">        </span><span class="COMM">// Position Texture A8 Color shader</span><span class="WHIT">
<span class='line'>201</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>202</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.GLProgram</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>203</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE_A8COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>204</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">cc.SHADER_POSITION_TEXTUREA8COLOR</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>205</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="STRN">"ShaderPositionTextureA8Color"</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>206</span> 
<span class='line'>207</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>208</span> </span><span class="WHIT">        </span><span class="COMM">// Position and 1 color passed as a uniform (to similate glColor4ub )</span><span class="WHIT">
<span class='line'>209</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>210</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.GLProgram</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>211</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_UCOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>212</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">cc.SHADER_POSITION_UCOLOR</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>213</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="STRN">"ShaderPositionUColor"</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>214</span> 
<span class='line'>215</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">        </span><span class="COMM">// Position, Legth(TexCoords, Color (used by Draw Node basically )</span><span class="WHIT">
<span class='line'>217</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>218</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.GLProgram</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>219</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_LENGTH_TEXTURECOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>220</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">cc.SHADER_POSITION_LENGTHTEXTURECOLOR</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>221</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="STRN">"ShaderPositionLengthTextureColor"</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>222</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>223</span> 
<span class='line'>224</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>225</span>      * reload the default shaders
<span class='line'>226</span>      */</span><span class="WHIT">
<span class='line'>227</span> </span><span class="WHIT">    </span><span class="NAME">reloadDefaultShaders</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>228</span> </span><span class="WHIT">        </span><span class="COMM">// reset all programs and reload them</span><span class="WHIT">
<span class='line'>229</span> 
<span class='line'>230</span> </span><span class="WHIT">        </span><span class="COMM">// Position Texture Color shader</span><span class="WHIT">
<span class='line'>231</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.programForKey</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURECOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>232</span> </span><span class="WHIT">        </span><span class="NAME">program.reset</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>233</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURECOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>234</span> 
<span class='line'>235</span> </span><span class="WHIT">        </span><span class="COMM">// Position Texture Color alpha test</span><span class="WHIT">
<span class='line'>236</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.programForKey</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURECOLORALPHATEST</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>237</span> </span><span class="WHIT">        </span><span class="NAME">program.reset</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>238</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>239</span> 
<span class='line'>240</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>241</span> </span><span class="WHIT">        </span><span class="COMM">// Position, Color shader</span><span class="WHIT">
<span class='line'>242</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>243</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.programForKey</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>244</span> </span><span class="WHIT">        </span><span class="NAME">program.reset</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>245</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>246</span> 
<span class='line'>247</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>248</span> </span><span class="WHIT">        </span><span class="COMM">// Position Texture shader</span><span class="WHIT">
<span class='line'>249</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>250</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.programForKey</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURE</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>251</span> </span><span class="WHIT">        </span><span class="NAME">program.reset</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>252</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>253</span> 
<span class='line'>254</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>255</span> </span><span class="WHIT">        </span><span class="COMM">// Position, Texture attribs, 1 Color as uniform shader</span><span class="WHIT">
<span class='line'>256</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>257</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.programForKey</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTURE_UCOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>258</span> </span><span class="WHIT">        </span><span class="NAME">program.reset</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>259</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE_UCOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>260</span> 
<span class='line'>261</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>262</span> </span><span class="WHIT">        </span><span class="COMM">// Position Texture A8 Color shader</span><span class="WHIT">
<span class='line'>263</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>264</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.programForKey</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_TEXTUREA8COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>265</span> </span><span class="WHIT">        </span><span class="NAME">program.reset</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>266</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_TEXTURE_A8COLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>267</span> 
<span class='line'>268</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>269</span> </span><span class="WHIT">        </span><span class="COMM">// Position and 1 color passed as a uniform (to similate glColor4ub )</span><span class="WHIT">
<span class='line'>270</span> </span><span class="WHIT">        </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>271</span> </span><span class="WHIT">        </span><span class="NAME">program</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.programForKey</span><span class="PUNC">(</span><span class="NAME">cc.SHADER_POSITION_UCOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>272</span> </span><span class="WHIT">        </span><span class="NAME">program.reset</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>273</span> </span><span class="WHIT">        </span><span class="NAME">this._loadDefaultShader</span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this.TYPE_POSITION_UCOLOR</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>274</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>275</span> 
<span class='line'>276</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>277</span>      * returns a GL program for a given key
<span class='line'>278</span>      * @param {String} key
<span class='line'>279</span>      */</span><span class="WHIT">
<span class='line'>280</span> </span><span class="WHIT">    </span><span class="NAME">programForKey</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">key</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>281</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">key</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>282</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>283</span> 
<span class='line'>284</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>285</span>      * returns a GL program for a shader name
<span class='line'>286</span>      * @param {String} shaderName
<span class='line'>287</span>      * @return {cc.GLProgram}
<span class='line'>288</span>      */</span><span class="WHIT">
<span class='line'>289</span> </span><span class="WHIT">    </span><span class="NAME">getProgram</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">shaderName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>290</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">shaderName</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>291</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>292</span> 
<span class='line'>293</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>294</span>      * adds a CCGLProgram to the cache for a given name
<span class='line'>295</span>      * @param {cc.GLProgram} program
<span class='line'>296</span>      * @param {String} key
<span class='line'>297</span>      */</span><span class="WHIT">
<span class='line'>298</span> </span><span class="WHIT">    </span><span class="NAME">addProgram</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">program</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">key</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>299</span> </span><span class="WHIT">        </span><span class="NAME">this._programs</span><span class="PUNC">[</span><span class="NAME">key</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">program</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>300</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>301</span> </span><span class="PUNC">}</span><span class="PUNC">;</span></pre></body></html>