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
<span class='line'> 27</span>  * The controller component for Cocostudio.
<span class='line'> 28</span>  * @class
<span class='line'> 29</span>  * @extends ccs.Component
<span class='line'> 30</span>  */</span><span class="WHIT">
<span class='line'> 31</span> </span><span class="NAME">ccs.ComController</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">ccs.Component.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends ccs.ComController# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 32</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 33</span>      * Construction of ccs.ComController.
<span class='line'> 34</span>      */</span><span class="WHIT">
<span class='line'> 35</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 36</span> </span><span class="WHIT">        </span><span class="NAME">cc.Component.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 37</span> </span><span class="WHIT">        </span><span class="NAME">this._name</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="STRN">"ComController"</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 38</span> </span><span class="WHIT">        </span><span class="NAME">ccs.ComController.prototype.init.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 39</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 40</span> 
<span class='line'> 41</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 42</span>      * The callback calls when controller component enter stage.
<span class='line'> 43</span>      * @override
<span class='line'> 44</span>      */</span><span class="WHIT">
<span class='line'> 45</span> </span><span class="WHIT">    </span><span class="NAME">onEnter</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 46</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._owner</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'> 47</span> </span><span class="WHIT">            </span><span class="NAME">this._owner.scheduleUpdate</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 48</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 49</span> 
<span class='line'> 50</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 51</span>      * Returns controller component whether is enabled
<span class='line'> 52</span>      * @returns {Boolean}
<span class='line'> 53</span>      */</span><span class="WHIT">
<span class='line'> 54</span> </span><span class="WHIT">    </span><span class="NAME">isEnabled</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 55</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._enabled</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 56</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 57</span> 
<span class='line'> 58</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 59</span>      * Sets controller component whether is enabled
<span class='line'> 60</span>      * @param {Boolean} bool
<span class='line'> 61</span>      */</span><span class="WHIT">
<span class='line'> 62</span> </span><span class="WHIT">    </span><span class="NAME">setEnabled</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">bool</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 63</span> </span><span class="WHIT">        </span><span class="NAME">this._enabled</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">bool</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 64</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 65</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 66</span> </span><span class="COMM">/**
<span class='line'> 67</span>  * Allocates and initializes a ComController.
<span class='line'> 68</span>  * @deprecated since v3.0, please use new construction instead.
<span class='line'> 69</span>  * @return {ccs.ComController}
<span class='line'> 70</span>  * @example
<span class='line'> 71</span>  * // example
<span class='line'> 72</span>  * var com = ccs.ComController.create();
<span class='line'> 73</span>  */</span><span class="WHIT">
<span class='line'> 74</span> </span><span class="NAME">ccs.ComController.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">ccs.ComController</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 76</span> </span><span class="PUNC">}</span><span class="PUNC">;</span></pre></body></html>