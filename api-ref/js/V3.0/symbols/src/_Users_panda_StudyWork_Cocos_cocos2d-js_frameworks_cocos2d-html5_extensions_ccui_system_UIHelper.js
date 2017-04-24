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
<span class='line'> 27</span>  * ccui.helper is the singleton object which is the Helper object contains some functions for seek widget
<span class='line'> 28</span>  * @class
<span class='line'> 29</span>  * @name ccui.helper
<span class='line'> 30</span>  */</span><span class="WHIT">
<span class='line'> 31</span> </span><span class="NAME">ccui.helper</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 32</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 33</span> 	 * Finds a widget whose tag equals to param tag from root widget.
<span class='line'> 34</span> 	 * @param {ccui.Widget} root
<span class='line'> 35</span> 	 * @param {number} tag
<span class='line'> 36</span> 	 * @returns {ccui.Widget}
<span class='line'> 37</span> 	 */</span><span class="WHIT">
<span class='line'> 38</span> </span><span class="WHIT">	</span><span class="NAME">seekWidgetByTag</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">root</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tag</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 39</span> </span><span class="WHIT">	    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">root</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 40</span> </span><span class="WHIT">	        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 41</span> </span><span class="WHIT">	    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">root.getTag</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">tag</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 42</span> </span><span class="WHIT">	        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">root</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 43</span> 
<span class='line'> 44</span> </span><span class="WHIT">	    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">root.getChildren</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 45</span> </span><span class="WHIT">	    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">length</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren.length</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 46</span> </span><span class="WHIT">	    </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 47</span> </span><span class="WHIT">	        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">child</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 48</span> </span><span class="WHIT">	        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">res</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">ccui.helper.seekWidgetByTag</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tag</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 49</span> </span><span class="WHIT">	        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">res</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 50</span> </span><span class="WHIT">	            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">res</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 51</span> </span><span class="WHIT">	    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 52</span> </span><span class="WHIT">	    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 53</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 54</span> 
<span class='line'> 55</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 56</span> 	 * Finds a widget whose name equals to param name from root widget.
<span class='line'> 57</span> 	 * @param {ccui.Widget} root
<span class='line'> 58</span> 	 * @param {String} name
<span class='line'> 59</span> 	 * @returns {ccui.Widget}
<span class='line'> 60</span> 	 */</span><span class="WHIT">
<span class='line'> 61</span> </span><span class="WHIT">	</span><span class="NAME">seekWidgetByName</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">root</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">name</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 62</span> </span><span class="WHIT">	    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">root</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 63</span> </span><span class="WHIT">	        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 64</span> </span><span class="WHIT">	    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">root.getName</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">name</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 65</span> </span><span class="WHIT">	        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">root</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 66</span> </span><span class="WHIT">	    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">root.getChildren</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 67</span> </span><span class="WHIT">	    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">length</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren.length</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 68</span> </span><span class="WHIT">	    </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">	        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">child</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 70</span> </span><span class="WHIT">	        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">res</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">ccui.helper.seekWidgetByName</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">name</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 71</span> </span><span class="WHIT">	        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">res</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 72</span> </span><span class="WHIT">	            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">res</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 73</span> </span><span class="WHIT">	    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 74</span> </span><span class="WHIT">	    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 76</span> 
<span class='line'> 77</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 78</span> 	 * Finds a widget whose name equals to param name from root widget.
<span class='line'> 79</span> 	 * RelativeLayout will call this method to find the widget witch is needed.
<span class='line'> 80</span> 	 * @param {ccui.Widget} root
<span class='line'> 81</span> 	 * @param {String} name
<span class='line'> 82</span> 	 * @returns {ccui.Widget}
<span class='line'> 83</span> 	 */</span><span class="WHIT">
<span class='line'> 84</span> </span><span class="WHIT">	</span><span class="NAME">seekWidgetByRelativeName</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">root</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">name</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 85</span> </span><span class="WHIT">	    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">root</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 86</span> </span><span class="WHIT">	        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 87</span> </span><span class="WHIT">	    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">root.getChildren</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 88</span> </span><span class="WHIT">	    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">length</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren.length</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 89</span> </span><span class="WHIT">	    </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 90</span> </span><span class="WHIT">	        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">child</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 91</span> </span><span class="WHIT">	        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">layoutParameter</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">child.getLayoutParameter</span><span class="PUNC">(</span><span class="NAME">ccui.LayoutParameter.RELATIVE</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 92</span> </span><span class="WHIT">	        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">layoutParameter</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">layoutParameter.getRelativeName</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">name</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 93</span> </span><span class="WHIT">	            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">child</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 94</span> </span><span class="WHIT">	    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 95</span> </span><span class="WHIT">	    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 96</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 97</span> 
<span class='line'> 98</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 99</span>      * Finds a widget whose action tag equals to param name from root widget.
<span class='line'>100</span>      * @param {ccui.Widget} root
<span class='line'>101</span>      * @param {Number} tag
<span class='line'>102</span>      * @returns {ccui.Widget}
<span class='line'>103</span>      */</span><span class="WHIT">
<span class='line'>104</span> </span><span class="WHIT">	</span><span class="NAME">seekActionWidgetByActionTag</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">root</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tag</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>105</span> </span><span class="WHIT">	    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">root</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>106</span> </span><span class="WHIT">	        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>107</span> </span><span class="WHIT">	    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">root.getActionTag</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">tag</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>108</span> </span><span class="WHIT">	        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">root</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>109</span> </span><span class="WHIT">	    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">root.getChildren</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>110</span> </span><span class="WHIT">	    </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>111</span> </span><span class="WHIT">	        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">child</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arrayRootChildren</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>112</span> </span><span class="WHIT">	        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">res</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">ccui.helper.seekActionWidgetByActionTag</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tag</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>113</span> </span><span class="WHIT">	        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">res</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>114</span> </span><span class="WHIT">	            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">res</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>115</span> </span><span class="WHIT">	    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>116</span> </span><span class="WHIT">	    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>118</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>119</span> </span></pre></body></html>