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
<span class='line'> 28</span>  * &lt;p>cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) )  &lt;br/>
<span class='line'> 29</span>  *
<span class='line'> 30</span>  * cc.Sprite can be created with an image, or with a sub-rectangle of an image.  &lt;br/>
<span class='line'> 31</span>  *
<span class='line'> 32</span>  * If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid   &lt;br/>
<span class='line'> 33</span>  *    - Features when the parent is a cc.BatchNode: &lt;br/>
<span class='line'> 34</span>  *        - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.  &lt;br/>
<span class='line'> 35</span>  *
<span class='line'> 36</span>  *    - Limitations   &lt;br/>
<span class='line'> 37</span>  *        - Camera is not supported yet (eg: CCOrbitCamera action doesn't work)  &lt;br/>
<span class='line'> 38</span>  *        - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl) &lt;br/>
<span class='line'> 39</span>  *        - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can't individually set the aliased property.  &lt;br/>
<span class='line'> 40</span>  *        - The Blending function property belongs to CCSpriteBatchNode, so you can't individually set the blending function property. &lt;br/>
<span class='line'> 41</span>  *        - Parallax scroller is not supported, but can be simulated with a "proxy" sprite.        &lt;br/>
<span class='line'> 42</span>  *
<span class='line'> 43</span>  *  If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:      &lt;br/>
<span class='line'> 44</span>  *    - It supports blending functions    &lt;br/>
<span class='line'> 45</span>  *    - It supports aliasing / antialiasing    &lt;br/>
<span class='line'> 46</span>  *    - But the rendering will be slower: 1 draw per children.   &lt;br/>
<span class='line'> 47</span>  *
<span class='line'> 48</span>  * The default anchorPoint in cc.Sprite is (0.5, 0.5). &lt;/p>
<span class='line'> 49</span>  * @class
<span class='line'> 50</span>  * @extends cc.Node
<span class='line'> 51</span>  *
<span class='line'> 52</span>  * @param {String|cc.SpriteFrame|HTMLImageElement|cc.Texture2D} fileName  The string which indicates a path to image file, e.g., "scene1/monster.png".
<span class='line'> 53</span>  * @param {cc.Rect} rect  Only the contents inside rect of pszFileName's texture will be applied for this sprite.
<span class='line'> 54</span>  * @param {Boolean} [rotated] Whether or not the texture rectangle is rotated.
<span class='line'> 55</span>  * @example
<span class='line'> 56</span>  *
<span class='line'> 57</span>  * 1.Create a sprite with image path and rect
<span class='line'> 58</span>  * var sprite1 = new cc.Sprite("res/HelloHTML5World.png");
<span class='line'> 59</span>  * var sprite2 = new cc.Sprite("res/HelloHTML5World.png",cc.rect(0,0,480,320));
<span class='line'> 60</span>  *
<span class='line'> 61</span>  * 2.Create a sprite with a sprite frame name. Must add "#" before frame name.
<span class='line'> 62</span>  * var sprite = new cc.Sprite('#grossini_dance_01.png');
<span class='line'> 63</span>  *
<span class='line'> 64</span>  * 3.Create a sprite with a sprite frame
<span class='line'> 65</span>  * var spriteFrame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
<span class='line'> 66</span>  * var sprite = new cc.Sprite(spriteFrame);
<span class='line'> 67</span>  *
<span class='line'> 68</span>  * 4.Create a sprite with an existing texture contained in a CCTexture2D object
<span class='line'> 69</span>  *      After creation, the rect will be the size of the texture, and the offset will be (0,0).
<span class='line'> 70</span>  * var texture = cc.textureCache.addImage("HelloHTML5World.png");
<span class='line'> 71</span>  * var sprite1 = new cc.Sprite(texture);
<span class='line'> 72</span>  * var sprite2 = new cc.Sprite(texture, cc.rect(0,0,480,320));
<span class='line'> 73</span>  *
<span class='line'> 74</span>  * @property {Boolean}              dirty               - Indicates whether the sprite needs to be updated.
<span class='line'> 75</span>  * @property {Boolean}              flippedX            - Indicates whether or not the sprite is flipped on x axis.
<span class='line'> 76</span>  * @property {Boolean}              flippedY            - Indicates whether or not the sprite is flipped on y axis.
<span class='line'> 77</span>  * @property {Number}               offsetX             - &lt;@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
<span class='line'> 78</span>  * @property {Number}               offsetY             - &lt;@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
<span class='line'> 79</span>  * @property {Number}               atlasIndex          - The index used on the TextureAtlas.
<span class='line'> 80</span>  * @property {cc.Texture2D}         texture             - Texture used to render the sprite.
<span class='line'> 81</span>  * @property {Boolean}              textureRectRotated  - &lt;@readonly> Indicate whether the texture rectangle is rotated.
<span class='line'> 82</span>  * @property {cc.TextureAtlas}      textureAtlas        - The weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode.
<span class='line'> 83</span>  * @property {cc.SpriteBatchNode}   batchNode           - The batch node object if this sprite is rendered by cc.SpriteBatchNode.
<span class='line'> 84</span>  * @property {cc.V3F_C4B_T2F_Quad}  quad                - &lt;@readonly> The quad (tex coords, vertex coords and color) information.
<span class='line'> 85</span>  */</span><span class="WHIT">
<span class='line'> 86</span> </span><span class="NAME">cc.Sprite</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Node.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Sprite# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 87</span> </span><span class="WHIT">	</span><span class="NAME">dirty</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 88</span> </span><span class="WHIT">	</span><span class="NAME">atlasIndex</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 89</span> </span><span class="WHIT">    </span><span class="NAME">textureAtlas</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 90</span> 
<span class='line'> 91</span> </span><span class="WHIT">    </span><span class="NAME">_batchNode</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 92</span> </span><span class="WHIT">    </span><span class="NAME">_recursiveDirty</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//Whether all of the sprite's children needs to be updated</span><span class="WHIT">
<span class='line'> 93</span> </span><span class="WHIT">    </span><span class="NAME">_hasChildren</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//Whether the sprite contains children</span><span class="WHIT">
<span class='line'> 94</span> </span><span class="WHIT">    </span><span class="NAME">_shouldBeHidden</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//should not be drawn because one of the ancestors is not visible</span><span class="WHIT">
<span class='line'> 95</span> </span><span class="WHIT">    </span><span class="NAME">_transformToBatch</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 96</span> 
<span class='line'> 97</span> </span><span class="WHIT">    </span><span class="COMM">//</span><span class="WHIT">
<span class='line'> 98</span> </span><span class="WHIT">    </span><span class="COMM">// Data used when the sprite is self-rendered</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">    </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>100</span> </span><span class="WHIT">    </span><span class="NAME">_blendFunc</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//It's required for CCTextureProtocol inheritance</span><span class="WHIT">
<span class='line'>101</span> </span><span class="WHIT">    </span><span class="NAME">_texture</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//cc.Texture2D object that is used to render the sprite</span><span class="WHIT">
<span class='line'>102</span> 
<span class='line'>103</span> </span><span class="WHIT">    </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>104</span> </span><span class="WHIT">    </span><span class="COMM">// Shared data</span><span class="WHIT">
<span class='line'>105</span> </span><span class="WHIT">    </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>106</span> </span><span class="WHIT">    </span><span class="COMM">// texture</span><span class="WHIT">
<span class='line'>107</span> </span><span class="WHIT">    </span><span class="NAME">_rect</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//Rectangle of cc.Texture2D</span><span class="WHIT">
<span class='line'>108</span> </span><span class="WHIT">    </span><span class="NAME">_rectRotated</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//Whether the texture is rotated</span><span class="WHIT">
<span class='line'>109</span> 
<span class='line'>110</span> </span><span class="WHIT">    </span><span class="COMM">// Offset Position (used by Zwoptex)</span><span class="WHIT">
<span class='line'>111</span> </span><span class="WHIT">    </span><span class="NAME">_offsetPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">// absolute</span><span class="WHIT">
<span class='line'>112</span> </span><span class="WHIT">    </span><span class="NAME">_unflippedOffsetPositionFromCenter</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>113</span> 
<span class='line'>114</span> </span><span class="WHIT">    </span><span class="NAME">_opacityModifyRGB</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>115</span> 
<span class='line'>116</span> </span><span class="WHIT">    </span><span class="COMM">// image is flipped</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">    </span><span class="NAME">_flippedX</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//Whether the sprite is flipped horizontally or not.</span><span class="WHIT">
<span class='line'>118</span> </span><span class="WHIT">    </span><span class="NAME">_flippedY</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//Whether the sprite is flipped vertically or not.</span><span class="WHIT">
<span class='line'>119</span> 
<span class='line'>120</span> </span><span class="WHIT">    </span><span class="NAME">_textureLoaded</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>121</span> </span><span class="WHIT">    </span><span class="NAME">_className</span><span class="PUNC">:</span><span class="STRN">"Sprite"</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>122</span> 
<span class='line'>123</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>124</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">self</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>125</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.ctor.call</span><span class="PUNC">(</span><span class="NAME">self</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>126</span> </span><span class="WHIT">        </span><span class="NAME">self._shouldBeHidden</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>127</span> </span><span class="WHIT">        </span><span class="NAME">self._offsetPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>128</span> </span><span class="WHIT">        </span><span class="NAME">self._unflippedOffsetPositionFromCenter</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>129</span> </span><span class="WHIT">        </span><span class="NAME">self._blendFunc</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="NAME">src</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">cc.BLEND_SRC</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">dst</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">cc.BLEND_DST</span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>130</span> </span><span class="WHIT">        </span><span class="NAME">self._rect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.rect</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>131</span> 
<span class='line'>132</span> </span><span class="WHIT">        </span><span class="NAME">self._softInit</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>133</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>134</span> 
<span class='line'>135</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>136</span>      * Returns whether the texture have been loaded
<span class='line'>137</span>      * @returns {boolean}
<span class='line'>138</span>      */</span><span class="WHIT">
<span class='line'>139</span> </span><span class="WHIT">    </span><span class="NAME">textureLoaded</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>140</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._textureLoaded</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>141</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>142</span> 
<span class='line'>143</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>144</span>      * Add a event listener for texture loaded event.
<span class='line'>145</span>      * @param {Function} callback
<span class='line'>146</span>      * @param {Object} target
<span class='line'>147</span>      * @deprecated since 3.1, please use addEventListener instead
<span class='line'>148</span>      */</span><span class="WHIT">
<span class='line'>149</span> </span><span class="WHIT">    </span><span class="NAME">addLoadedEventListener</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">callback</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>150</span> </span><span class="WHIT">        </span><span class="NAME">this.addEventListener</span><span class="PUNC">(</span><span class="STRN">"load"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">callback</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>151</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>152</span> 
<span class='line'>153</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>154</span>      * Returns whether or not the Sprite needs to be updated in the Atlas
<span class='line'>155</span>      * @return {Boolean} True if the sprite needs to be updated in the Atlas, false otherwise.
<span class='line'>156</span>      */</span><span class="WHIT">
<span class='line'>157</span> </span><span class="WHIT">    </span><span class="NAME">isDirty</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>158</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.dirty</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>159</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>160</span> 
<span class='line'>161</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>162</span>      * Makes the sprite to be updated in the Atlas.
<span class='line'>163</span>      * @param {Boolean} bDirty
<span class='line'>164</span>      */</span><span class="WHIT">
<span class='line'>165</span> </span><span class="WHIT">    </span><span class="NAME">setDirty</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">bDirty</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>166</span> </span><span class="WHIT">        </span><span class="NAME">this.dirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">bDirty</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>167</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>168</span> 
<span class='line'>169</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>170</span>      * Returns whether or not the texture rectangle is rotated.
<span class='line'>171</span>      * @return {Boolean}
<span class='line'>172</span>      */</span><span class="WHIT">
<span class='line'>173</span> </span><span class="WHIT">    </span><span class="NAME">isTextureRectRotated</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>174</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._rectRotated</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>175</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>176</span> 
<span class='line'>177</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>178</span>      * Returns the index used on the TextureAtlas.
<span class='line'>179</span>      * @return {Number}
<span class='line'>180</span>      */</span><span class="WHIT">
<span class='line'>181</span> </span><span class="WHIT">    </span><span class="NAME">getAtlasIndex</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>182</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.atlasIndex</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>183</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>184</span> 
<span class='line'>185</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>186</span>      * Sets the index used on the TextureAtlas.
<span class='line'>187</span>      * @warning Don't modify this value unless you know what you are doing
<span class='line'>188</span>      * @param {Number} atlasIndex
<span class='line'>189</span>      */</span><span class="WHIT">
<span class='line'>190</span> </span><span class="WHIT">    </span><span class="NAME">setAtlasIndex</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">atlasIndex</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>191</span> </span><span class="WHIT">        </span><span class="NAME">this.atlasIndex</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">atlasIndex</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>192</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>193</span> 
<span class='line'>194</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>195</span>      * Returns the rect of the cc.Sprite in points
<span class='line'>196</span>      * @return {cc.Rect}
<span class='line'>197</span>      */</span><span class="WHIT">
<span class='line'>198</span> </span><span class="WHIT">    </span><span class="NAME">getTextureRect</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>199</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.rect</span><span class="PUNC">(</span><span class="NAME">this._rect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>200</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>201</span> 
<span class='line'>202</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>203</span>      * Returns the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
<span class='line'>204</span>      * @return {cc.TextureAtlas}
<span class='line'>205</span>      */</span><span class="WHIT">
<span class='line'>206</span> </span><span class="WHIT">    </span><span class="NAME">getTextureAtlas</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>207</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.textureAtlas</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>208</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>209</span> 
<span class='line'>210</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>211</span>      * Sets the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
<span class='line'>212</span>      * @param {cc.TextureAtlas} textureAtlas
<span class='line'>213</span>      */</span><span class="WHIT">
<span class='line'>214</span> </span><span class="WHIT">    </span><span class="NAME">setTextureAtlas</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">textureAtlas</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>215</span> </span><span class="WHIT">        </span><span class="NAME">this.textureAtlas</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">textureAtlas</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>217</span> 
<span class='line'>218</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>219</span>      * Returns the offset position of the sprite. Calculated automatically by editors like Zwoptex.
<span class='line'>220</span>      * @return {cc.Point}
<span class='line'>221</span>      */</span><span class="WHIT">
<span class='line'>222</span> </span><span class="WHIT">    </span><span class="NAME">getOffsetPosition</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>223</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NAME">this._offsetPosition</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>224</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>225</span> 
<span class='line'>226</span> </span><span class="WHIT">	</span><span class="NAME">_getOffsetX</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>227</span> </span><span class="WHIT">		</span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._offsetPosition.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>228</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>229</span> </span><span class="WHIT">	</span><span class="NAME">_getOffsetY</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>230</span> </span><span class="WHIT">		</span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._offsetPosition.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>231</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>232</span> 
<span class='line'>233</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>234</span>      * Returns the blend function
<span class='line'>235</span>      * @return {cc.BlendFunc}
<span class='line'>236</span>      */</span><span class="WHIT">
<span class='line'>237</span> </span><span class="WHIT">    </span><span class="NAME">getBlendFunc</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>238</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._blendFunc</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>239</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>240</span> 
<span class='line'>241</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>242</span>      * Initializes a sprite with a SpriteFrame. The texture and rect in SpriteFrame will be applied on this sprite.&lt;br/>
<span class='line'>243</span>      * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself,
<span class='line'>244</span>      * @param {cc.SpriteFrame} spriteFrame A CCSpriteFrame object. It should includes a valid texture and a rect
<span class='line'>245</span>      * @return {Boolean}  true if the sprite is initialized properly, false otherwise.
<span class='line'>246</span>      */</span><span class="WHIT">
<span class='line'>247</span> </span><span class="WHIT">    </span><span class="NAME">initWithSpriteFrame</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>248</span> </span><span class="WHIT">        </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.Sprite_initWithSpriteFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>249</span> 
<span class='line'>250</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">spriteFrame.textureLoaded</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>251</span> </span><span class="WHIT">            </span><span class="COMM">//add event listener</span><span class="WHIT">
<span class='line'>252</span> </span><span class="WHIT">            </span><span class="NAME">this._textureLoaded</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>253</span> </span><span class="WHIT">            </span><span class="NAME">spriteFrame.addEventListener</span><span class="PUNC">(</span><span class="STRN">"load"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._renderCmd._spriteFrameLoadedCallback</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>254</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>255</span> 
<span class='line'>256</span> </span><span class="WHIT">        </span><span class="COMM">//TODO</span><span class="WHIT">
<span class='line'>257</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc._renderType</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc._RENDER_TYPE_CANVAS</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">spriteFrame._rotated</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>258</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">ret</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.initWithTexture</span><span class="PUNC">(</span><span class="NAME">spriteFrame.getTexture</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">spriteFrame.getRect</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>259</span> </span><span class="WHIT">        </span><span class="NAME">this.setSpriteFrame</span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>260</span> 
<span class='line'>261</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">ret</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>262</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>263</span> 
<span class='line'>264</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>265</span>      * Initializes a sprite with a sprite frame name. &lt;br/>
<span class='line'>266</span>      * A cc.SpriteFrame will be fetched from the cc.SpriteFrameCache by name.  &lt;br/>
<span class='line'>267</span>      * If the cc.SpriteFrame doesn't exist it will raise an exception. &lt;br/>
<span class='line'>268</span>      * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
<span class='line'>269</span>      * @param {String} spriteFrameName A key string that can fected a valid cc.SpriteFrame from cc.SpriteFrameCache
<span class='line'>270</span>      * @return {Boolean} true if the sprite is initialized properly, false otherwise.
<span class='line'>271</span>      * @example
<span class='line'>272</span>      * var sprite = new cc.Sprite();
<span class='line'>273</span>      * sprite.initWithSpriteFrameName("grossini_dance_01.png");
<span class='line'>274</span>      */</span><span class="WHIT">
<span class='line'>275</span> </span><span class="WHIT">    </span><span class="NAME">initWithSpriteFrameName</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">spriteFrameName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>276</span> </span><span class="WHIT">        </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">spriteFrameName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.Sprite_initWithSpriteFrameName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>277</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.spriteFrameCache.getSpriteFrame</span><span class="PUNC">(</span><span class="NAME">spriteFrameName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>278</span> </span><span class="WHIT">        </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">frame</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">spriteFrameName</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.Sprite_initWithSpriteFrameName1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>279</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.initWithSpriteFrame</span><span class="PUNC">(</span><span class="NAME">frame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>280</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>281</span> 
<span class='line'>282</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>283</span>      * Tell the sprite to use batch node render.
<span class='line'>284</span>      * @param {cc.SpriteBatchNode} batchNode
<span class='line'>285</span>      */</span><span class="WHIT">
<span class='line'>286</span> </span><span class="WHIT">    </span><span class="NAME">useBatchNode</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">batchNode</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>287</span> </span><span class="WHIT">        </span><span class="NAME">this.textureAtlas</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">batchNode.getTextureAtlas</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="COMM">// weak ref</span><span class="WHIT">
<span class='line'>288</span> </span><span class="WHIT">        </span><span class="NAME">this._batchNode</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">batchNode</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>289</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>290</span> 
<span class='line'>291</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>292</span>      * &lt;p>
<span class='line'>293</span>      *    set the vertex rect.&lt;br/>
<span class='line'>294</span>      *    It will be called internally by setTextureRect.                           &lt;br/>
<span class='line'>295</span>      *    Useful if you want to create 2x images from SD images in Retina Display.  &lt;br/>
<span class='line'>296</span>      *    Do not call it manually. Use setTextureRect instead.  &lt;br/>
<span class='line'>297</span>      *    (override this method to generate "double scale" sprites)
<span class='line'>298</span>      * &lt;/p>
<span class='line'>299</span>      * @param {cc.Rect} rect
<span class='line'>300</span>      */</span><span class="WHIT">
<span class='line'>301</span> </span><span class="WHIT">    </span><span class="NAME">setVertexRect</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">rect</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>302</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locRect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._rect</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>303</span> </span><span class="WHIT">        </span><span class="NAME">locRect.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>304</span> </span><span class="WHIT">        </span><span class="NAME">locRect.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>305</span> </span><span class="WHIT">        </span><span class="NAME">locRect.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>306</span> </span><span class="WHIT">        </span><span class="NAME">locRect.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>307</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>308</span> 
<span class='line'>309</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>310</span>      * Sort all children of this sprite node.
<span class='line'>311</span>      * @override
<span class='line'>312</span>      */</span><span class="WHIT">
<span class='line'>313</span> </span><span class="WHIT">    </span><span class="NAME">sortAllChildren</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>314</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._reorderChildDirty</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>315</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">_children</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._children</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>316</span> 
<span class='line'>317</span> </span><span class="WHIT">            </span><span class="COMM">// insertion sort</span><span class="WHIT">
<span class='line'>318</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">len</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_children.length</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">j</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tmp</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>319</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="PUNC">(</span><span class="NAME">i</span><span class="PUNC">=</span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">&lt;</span><span class="NAME">len</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>320</span> </span><span class="WHIT">                </span><span class="NAME">tmp</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>321</span> </span><span class="WHIT">                </span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>322</span> 
<span class='line'>323</span> </span><span class="WHIT">                </span><span class="COMM">//continue moving element downwards while zOrder is smaller or when zOrder is the same but mutatedIndex is smaller</span><span class="WHIT">
<span class='line'>324</span> </span><span class="WHIT">                </span><span class="KEYW">while</span><span class="PUNC">(</span><span class="NAME">j</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>325</span> </span><span class="WHIT">                    </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">tmp._localZOrder</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">j</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">_localZOrder</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>326</span> </span><span class="WHIT">                        </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">j</span><span class="PUNC">+</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">j</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>327</span> </span><span class="WHIT">                    </span><span class="PUNC">}</span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">tmp._localZOrder</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">j</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">_localZOrder</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">tmp.arrivalOrder</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">j</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">arrivalOrder</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>328</span> </span><span class="WHIT">                        </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">j</span><span class="PUNC">+</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">j</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>329</span> </span><span class="WHIT">                    </span><span class="PUNC">}</span><span class="KEYW">else</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>330</span> </span><span class="WHIT">                        </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>331</span> </span><span class="WHIT">                    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>332</span> </span><span class="WHIT">                    </span><span class="NAME">j</span><span class="PUNC">--</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>333</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>334</span> </span><span class="WHIT">                </span><span class="NAME">_children</span><span class="PUNC">[</span><span class="NAME">j</span><span class="PUNC">+</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">tmp</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>335</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>336</span> 
<span class='line'>337</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._batchNode</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>338</span> </span><span class="WHIT">                </span><span class="NAME">this._arrayMakeObjectsPerformSelector</span><span class="PUNC">(</span><span class="NAME">_children</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.Node._stateCallbackType.sortAllChildren</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>339</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>340</span> 
<span class='line'>341</span> </span><span class="WHIT">            </span><span class="COMM">//don't need to check children recursively, that's done in visit of each child</span><span class="WHIT">
<span class='line'>342</span> </span><span class="WHIT">            </span><span class="NAME">this._reorderChildDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>343</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>344</span> 
<span class='line'>345</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>346</span> 
<span class='line'>347</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>348</span>      * Reorders a child according to a new z value.  (override cc.Node )
<span class='line'>349</span>      * @param {cc.Node} child
<span class='line'>350</span>      * @param {Number} zOrder
<span class='line'>351</span>      * @override
<span class='line'>352</span>      */</span><span class="WHIT">
<span class='line'>353</span> </span><span class="WHIT">    </span><span class="NAME">reorderChild</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">zOrder</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>354</span> </span><span class="WHIT">        </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.Sprite_reorderChild_2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>355</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._children.indexOf</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>356</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="NAME">cc._LogInfos.Sprite_reorderChild</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>357</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>358</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>359</span> 
<span class='line'>360</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">zOrder</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">child.zIndex</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>361</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>362</span> 
<span class='line'>363</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._batchNode</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">!</span><span class="NAME">this._reorderChildDirty</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>364</span> </span><span class="WHIT">            </span><span class="NAME">this._setReorderChildDirtyRecursively</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>365</span> </span><span class="WHIT">            </span><span class="NAME">this._batchNode.reorderBatch</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>366</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>367</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.reorderChild.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">zOrder</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>368</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>369</span> 
<span class='line'>370</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>371</span>      * Removes a child from the sprite.
<span class='line'>372</span>      * @param child
<span class='line'>373</span>      * @param cleanup  whether or not cleanup all running actions
<span class='line'>374</span>      * @override
<span class='line'>375</span>      */</span><span class="WHIT">
<span class='line'>376</span> </span><span class="WHIT">    </span><span class="NAME">removeChild</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cleanup</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>377</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._batchNode</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>378</span> </span><span class="WHIT">            </span><span class="NAME">this._batchNode.removeSpriteFromAtlas</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>379</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.removeChild.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cleanup</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>380</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>381</span> 
<span class='line'>382</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>383</span>      * Sets whether the sprite is visible or not.
<span class='line'>384</span>      * @param {Boolean} visible
<span class='line'>385</span>      * @override
<span class='line'>386</span>      */</span><span class="WHIT">
<span class='line'>387</span> </span><span class="WHIT">    </span><span class="NAME">setVisible</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">visible</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>388</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.setVisible.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">visible</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>389</span> </span><span class="WHIT">        </span><span class="NAME">this._renderCmd.setDirtyRecursively</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>390</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>391</span> 
<span class='line'>392</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>393</span>      * Removes all children from the container.
<span class='line'>394</span>      * @param cleanup whether or not cleanup all running actions
<span class='line'>395</span>      * @override
<span class='line'>396</span>      */</span><span class="WHIT">
<span class='line'>397</span> </span><span class="WHIT">    </span><span class="NAME">removeAllChildren</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cleanup</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>398</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._children</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locBatchNode</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._batchNode</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>399</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locBatchNode</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">locChildren</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>400</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">len</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locChildren.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">len</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>401</span> </span><span class="WHIT">                </span><span class="NAME">locBatchNode.removeSpriteFromAtlas</span><span class="PUNC">(</span><span class="NAME">locChildren</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>402</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>403</span> 
<span class='line'>404</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.removeAllChildren.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cleanup</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>405</span> </span><span class="WHIT">        </span><span class="NAME">this._hasChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>406</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>407</span> 
<span class='line'>408</span> </span><span class="WHIT">    </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>409</span> </span><span class="WHIT">    </span><span class="COMM">// cc.Node property overloads</span><span class="WHIT">
<span class='line'>410</span> </span><span class="WHIT">    </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>411</span> 
<span class='line'>412</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>413</span>      * Sets whether ignore anchor point for positioning
<span class='line'>414</span>      * @param {Boolean} relative
<span class='line'>415</span>      * @override
<span class='line'>416</span>      */</span><span class="WHIT">
<span class='line'>417</span> </span><span class="WHIT">    </span><span class="NAME">ignoreAnchorPointForPosition</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">relative</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>418</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._batchNode</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>419</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="NAME">cc._LogInfos.Sprite_ignoreAnchorPointForPosition</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>420</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>421</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>422</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.ignoreAnchorPointForPosition.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">relative</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>423</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>424</span> 
<span class='line'>425</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>426</span>      * Sets whether the sprite should be flipped horizontally or not.
<span class='line'>427</span>      * @param {Boolean} flippedX true if the sprite should be flipped horizontally, false otherwise.
<span class='line'>428</span>      */</span><span class="WHIT">
<span class='line'>429</span> </span><span class="WHIT">    </span><span class="NAME">setFlippedX</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">flippedX</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>430</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._flippedX</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">flippedX</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>431</span> </span><span class="WHIT">            </span><span class="NAME">this._flippedX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">flippedX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>432</span> </span><span class="WHIT">            </span><span class="NAME">this.setTextureRect</span><span class="PUNC">(</span><span class="NAME">this._rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._rectRotated</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._contentSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>433</span> </span><span class="WHIT">            </span><span class="NAME">this.setNodeDirty</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>434</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>435</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>436</span> 
<span class='line'>437</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>438</span>      * Sets whether the sprite should be flipped vertically or not.
<span class='line'>439</span>      * @param {Boolean} flippedY true if the sprite should be flipped vertically, false otherwise.
<span class='line'>440</span>      */</span><span class="WHIT">
<span class='line'>441</span> </span><span class="WHIT">    </span><span class="NAME">setFlippedY</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">flippedY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>442</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._flippedY</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">flippedY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>443</span> </span><span class="WHIT">            </span><span class="NAME">this._flippedY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">flippedY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>444</span> </span><span class="WHIT">            </span><span class="NAME">this.setTextureRect</span><span class="PUNC">(</span><span class="NAME">this._rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._rectRotated</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._contentSize</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>445</span> </span><span class="WHIT">            </span><span class="NAME">this.setNodeDirty</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>446</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>447</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>448</span> 
<span class='line'>449</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>450</span>      * &lt;p>
<span class='line'>451</span>      * Returns the flag which indicates whether the sprite is flipped horizontally or not.                      &lt;br/>
<span class='line'>452</span>      *                                                                                                              &lt;br/>
<span class='line'>453</span>      * It only flips the texture of the sprite, and not the texture of the sprite's children.                       &lt;br/>
<span class='line'>454</span>      * Also, flipping the texture doesn't alter the anchorPoint.                                                    &lt;br/>
<span class='line'>455</span>      * If you want to flip the anchorPoint too, and/or to flip the children too use:                                &lt;br/>
<span class='line'>456</span>      *      sprite.setScaleX(sprite.getScaleX() * -1);  &lt;p/>
<span class='line'>457</span>      * @return {Boolean} true if the sprite is flipped horizontally, false otherwise.
<span class='line'>458</span>      */</span><span class="WHIT">
<span class='line'>459</span> </span><span class="WHIT">    </span><span class="NAME">isFlippedX</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>460</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._flippedX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>461</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>462</span> 
<span class='line'>463</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>464</span>      * &lt;p>
<span class='line'>465</span>      *     Return the flag which indicates whether the sprite is flipped vertically or not.                         &lt;br/>
<span class='line'>466</span>      *                                                                                                              &lt;br/>
<span class='line'>467</span>      *      It only flips the texture of the sprite, and not the texture of the sprite's children.                  &lt;br/>
<span class='line'>468</span>      *      Also, flipping the texture doesn't alter the anchorPoint.                                               &lt;br/>
<span class='line'>469</span>      *      If you want to flip the anchorPoint too, and/or to flip the children too use:                           &lt;br/>
<span class='line'>470</span>      *         sprite.setScaleY(sprite.getScaleY() * -1); &lt;p/>
<span class='line'>471</span>      * @return {Boolean} true if the sprite is flipped vertically, false otherwise.
<span class='line'>472</span>      */</span><span class="WHIT">
<span class='line'>473</span> </span><span class="WHIT">    </span><span class="NAME">isFlippedY</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>474</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._flippedY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>475</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>476</span> 
<span class='line'>477</span> </span><span class="WHIT">    </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>478</span> </span><span class="WHIT">    </span><span class="COMM">// RGBA protocol</span><span class="WHIT">
<span class='line'>479</span> </span><span class="WHIT">    </span><span class="COMM">//</span><span class="WHIT">
<span class='line'>480</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>481</span>      * Sets whether opacity modify color or not.
<span class='line'>482</span>      * @function
<span class='line'>483</span>      * @param {Boolean} modify
<span class='line'>484</span>      */</span><span class="WHIT">
<span class='line'>485</span> </span><span class="WHIT">    </span><span class="NAME">setOpacityModifyRGB</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">modify</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>486</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._opacityModifyRGB</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">modify</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>487</span> </span><span class="WHIT">            </span><span class="NAME">this._opacityModifyRGB</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">modify</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>488</span> </span><span class="WHIT">            </span><span class="NAME">this._renderCmd._setColorDirty</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>489</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>490</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>491</span> 
<span class='line'>492</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>493</span>      * Returns whether opacity modify color or not.
<span class='line'>494</span>      * @return {Boolean}
<span class='line'>495</span>      */</span><span class="WHIT">
<span class='line'>496</span> </span><span class="WHIT">    </span><span class="NAME">isOpacityModifyRGB</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>497</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._opacityModifyRGB</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>498</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>499</span> 
<span class='line'>500</span> </span><span class="WHIT">    </span><span class="COMM">// Animation</span><span class="WHIT">
<span class='line'>501</span> 
<span class='line'>502</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>503</span>      * Changes the display frame with animation name and index.&lt;br/>
<span class='line'>504</span>      * The animation name will be get from the CCAnimationCache
<span class='line'>505</span>      * @param {String} animationName
<span class='line'>506</span>      * @param {Number} frameIndex
<span class='line'>507</span>      */</span><span class="WHIT">
<span class='line'>508</span> </span><span class="WHIT">    </span><span class="NAME">setDisplayFrameWithAnimationName</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">animationName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">frameIndex</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>509</span> </span><span class="WHIT">        </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">animationName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_3</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>510</span> 
<span class='line'>511</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">cache</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.animationCache.getAnimation</span><span class="PUNC">(</span><span class="NAME">animationName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>512</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">cache</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>513</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="NAME">cc._LogInfos.Sprite_setDisplayFrameWithAnimationName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>514</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>515</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>516</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">animFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cache.getFrames</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">[</span><span class="NAME">frameIndex</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>517</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">animFrame</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>518</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="NAME">cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>519</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>520</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>521</span> </span><span class="WHIT">        </span><span class="NAME">this.setSpriteFrame</span><span class="PUNC">(</span><span class="NAME">animFrame.getSpriteFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>522</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>523</span> 
<span class='line'>524</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>525</span>      * Returns the batch node object if this sprite is rendered by cc.SpriteBatchNode
<span class='line'>526</span>      * @returns {cc.SpriteBatchNode|null} The cc.SpriteBatchNode object if this sprite is rendered by cc.SpriteBatchNode, null if the sprite isn't used batch node.
<span class='line'>527</span>      */</span><span class="WHIT">
<span class='line'>528</span> </span><span class="WHIT">    </span><span class="NAME">getBatchNode</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>529</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._batchNode</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>530</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>531</span> 
<span class='line'>532</span> </span><span class="WHIT">    </span><span class="NAME">_setReorderChildDirtyRecursively</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>533</span> </span><span class="WHIT">        </span><span class="COMM">//only set parents flag the first time</span><span class="WHIT">
<span class='line'>534</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._reorderChildDirty</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>535</span> </span><span class="WHIT">            </span><span class="NAME">this._reorderChildDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>536</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">pNode</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._parent</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>537</span> </span><span class="WHIT">            </span><span class="KEYW">while</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pNode</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">pNode</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">this._batchNode</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>538</span> </span><span class="WHIT">                </span><span class="NAME">pNode._setReorderChildDirtyRecursively</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>539</span> </span><span class="WHIT">                </span><span class="NAME">pNode</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">pNode.parent</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>540</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>541</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>542</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>543</span> 
<span class='line'>544</span> </span><span class="WHIT">    </span><span class="COMM">// CCTextureProtocol</span><span class="WHIT">
<span class='line'>545</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>546</span>      * Returns the texture of the sprite node
<span class='line'>547</span>      * @returns {cc.Texture2D}
<span class='line'>548</span>      */</span><span class="WHIT">
<span class='line'>549</span> </span><span class="WHIT">    </span><span class="NAME">getTexture</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>550</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._texture</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>551</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>552</span> 
<span class='line'>553</span> </span><span class="WHIT">	</span><span class="NAME">_softInit</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>554</span> </span><span class="WHIT">		</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>555</span> </span><span class="WHIT">			</span><span class="NAME">cc.Sprite.prototype.init.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>556</span> </span><span class="WHIT">		</span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.isString</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>557</span> </span><span class="WHIT">			</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="STRN">"#"</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>558</span> </span><span class="WHIT">				</span><span class="COMM">// Init with a sprite frame name</span><span class="WHIT">
<span class='line'>559</span> </span><span class="WHIT">				</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frameName</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">fileName.substr</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fileName.length</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>560</span> </span><span class="WHIT">				</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">spriteFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.spriteFrameCache.getSpriteFrame</span><span class="PUNC">(</span><span class="NAME">frameName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>561</span> </span><span class="WHIT">				</span><span class="NAME">this.initWithSpriteFrame</span><span class="PUNC">(</span><span class="NAME">spriteFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>562</span> </span><span class="WHIT">			</span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>563</span> </span><span class="WHIT">				</span><span class="COMM">// Init  with filename and rect</span><span class="WHIT">
<span class='line'>564</span> </span><span class="WHIT">				</span><span class="NAME">cc.Sprite.prototype.init.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">fileName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>565</span> </span><span class="WHIT">			</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>566</span> </span><span class="WHIT">		</span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.isObject</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>567</span> </span><span class="WHIT">			</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">cc.Texture2D</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>568</span> </span><span class="WHIT">				</span><span class="COMM">// Init  with texture and rect</span><span class="WHIT">
<span class='line'>569</span> </span><span class="WHIT">				</span><span class="NAME">this.initWithTexture</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>570</span> </span><span class="WHIT">			</span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">cc.SpriteFrame</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>571</span> </span><span class="WHIT">				</span><span class="COMM">// Init with a sprite frame</span><span class="WHIT">
<span class='line'>572</span> </span><span class="WHIT">				</span><span class="NAME">this.initWithSpriteFrame</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>573</span> </span><span class="WHIT">			</span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">HTMLImageElement</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">HTMLCanvasElement</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>574</span> </span><span class="WHIT">				</span><span class="COMM">// Init with a canvas or image element</span><span class="WHIT">
<span class='line'>575</span> </span><span class="WHIT">				</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">texture2d</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Texture2D</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>576</span> </span><span class="WHIT">				</span><span class="NAME">texture2d.initWithElement</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>577</span> </span><span class="WHIT">				</span><span class="NAME">texture2d.handleLoadedTexture</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>578</span> </span><span class="WHIT">				</span><span class="NAME">this.initWithTexture</span><span class="PUNC">(</span><span class="NAME">texture2d</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>579</span> </span><span class="WHIT">			</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>580</span> </span><span class="WHIT">		</span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>581</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>582</span> 
<span class='line'>583</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>584</span>      * Returns the quad (tex coords, vertex coords and color) information.
<span class='line'>585</span>      * @return {cc.V3F_C4B_T2F_Quad|null} Returns a cc.V3F_C4B_T2F_Quad object when render mode is WebGL, returns null when render mode is Canvas.
<span class='line'>586</span>      */</span><span class="WHIT">
<span class='line'>587</span> </span><span class="WHIT">    </span><span class="NAME">getQuad</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>588</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._renderCmd.getQuad</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>589</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>590</span> 
<span class='line'>591</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>592</span>      * conforms to cc.TextureProtocol protocol
<span class='line'>593</span>      * @function
<span class='line'>594</span>      * @param {Number|cc.BlendFunc} src
<span class='line'>595</span>      * @param {Number} dst
<span class='line'>596</span>      */</span><span class="WHIT">
<span class='line'>597</span> </span><span class="WHIT">    </span><span class="NAME">setBlendFunc</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">src</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">dst</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>598</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locBlendFunc</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._blendFunc</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>599</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dst</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>600</span> </span><span class="WHIT">            </span><span class="NAME">locBlendFunc.src</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">src.src</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>601</span> </span><span class="WHIT">            </span><span class="NAME">locBlendFunc.dst</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">src.dst</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>602</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>603</span> </span><span class="WHIT">            </span><span class="NAME">locBlendFunc.src</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">src</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>604</span> </span><span class="WHIT">            </span><span class="NAME">locBlendFunc.dst</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">dst</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>605</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>606</span> </span><span class="WHIT">        </span><span class="NAME">this._renderCmd.updateBlendFunc</span><span class="PUNC">(</span><span class="NAME">locBlendFunc</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>607</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>608</span> 
<span class='line'>609</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>610</span>      * Initializes an empty sprite with nothing init.&lt;br/>
<span class='line'>611</span>      * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
<span class='line'>612</span>      * @function
<span class='line'>613</span>      * @return {Boolean}
<span class='line'>614</span>      */</span><span class="WHIT">
<span class='line'>615</span> </span><span class="WHIT">    </span><span class="NAME">init</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>616</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">_t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>617</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">arguments.length</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>618</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">_t.initWithFile</span><span class="PUNC">(</span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>619</span> 
<span class='line'>620</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.init.call</span><span class="PUNC">(</span><span class="NAME">_t</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>621</span> </span><span class="WHIT">        </span><span class="NAME">_t.dirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_t._recursiveDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>622</span> 
<span class='line'>623</span> </span><span class="WHIT">        </span><span class="NAME">_t._blendFunc.src</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.BLEND_SRC</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>624</span> </span><span class="WHIT">        </span><span class="NAME">_t._blendFunc.dst</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.BLEND_DST</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>625</span> 
<span class='line'>626</span> </span><span class="WHIT">        </span><span class="NAME">_t.texture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>627</span> </span><span class="WHIT">        </span><span class="NAME">_t._flippedX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_t._flippedY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>628</span> 
<span class='line'>629</span> </span><span class="WHIT">        </span><span class="COMM">// default transform anchor: center</span><span class="WHIT">
<span class='line'>630</span> </span><span class="WHIT">        </span><span class="NAME">_t.anchorX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>631</span> </span><span class="WHIT">        </span><span class="NAME">_t.anchorY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>632</span> 
<span class='line'>633</span> </span><span class="WHIT">        </span><span class="COMM">// zwoptex default values</span><span class="WHIT">
<span class='line'>634</span> </span><span class="WHIT">        </span><span class="NAME">_t._offsetPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>635</span> </span><span class="WHIT">        </span><span class="NAME">_t._offsetPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>636</span> </span><span class="WHIT">        </span><span class="NAME">_t._hasChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>637</span> 
<span class='line'>638</span> </span><span class="WHIT">        </span><span class="NAME">this._renderCmd._init</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>639</span> </span><span class="WHIT">        </span><span class="COMM">// updated in "useSelfRender"</span><span class="WHIT">
<span class='line'>640</span> </span><span class="WHIT">        </span><span class="COMM">// Atlas: TexCoords</span><span class="WHIT">
<span class='line'>641</span> </span><span class="WHIT">        </span><span class="NAME">_t.setTextureRect</span><span class="PUNC">(</span><span class="NAME">cc.rect</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>642</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>643</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>644</span> 
<span class='line'>645</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>646</span>      * &lt;p>
<span class='line'>647</span>      *     Initializes a sprite with an image filename.&lt;br/>
<span class='line'>648</span>      *
<span class='line'>649</span>      *     This method will find pszFilename from local file system, load its content to CCTexture2D,&lt;br/>
<span class='line'>650</span>      *     then use CCTexture2D to create a sprite.&lt;br/>
<span class='line'>651</span>      *     After initialization, the rect used will be the size of the image. The offset will be (0,0).&lt;br/>
<span class='line'>652</span>      *     Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
<span class='line'>653</span>      * &lt;/p>
<span class='line'>654</span>      * @param {String} filename The path to an image file in local file system
<span class='line'>655</span>      * @param {cc.Rect} rect The rectangle assigned the content area from texture.
<span class='line'>656</span>      * @return {Boolean} true if the sprite is initialized properly, false otherwise.
<span class='line'>657</span>      */</span><span class="WHIT">
<span class='line'>658</span> </span><span class="WHIT">    </span><span class="NAME">initWithFile</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">filename</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>659</span> </span><span class="WHIT">        </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">filename</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.Sprite_initWithFile</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>660</span> 
<span class='line'>661</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tex</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.textureCache.getTextureForKey</span><span class="PUNC">(</span><span class="NAME">filename</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>662</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">tex</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>663</span> </span><span class="WHIT">            </span><span class="NAME">tex</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.textureCache.addImage</span><span class="PUNC">(</span><span class="NAME">filename</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>664</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.initWithTexture</span><span class="PUNC">(</span><span class="NAME">tex</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">cc.rect</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tex._contentSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tex._contentSize.height</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>665</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>666</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">rect</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>667</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">size</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">tex.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>668</span> </span><span class="WHIT">                </span><span class="NAME">rect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.rect</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">size.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">size.height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>669</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>670</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.initWithTexture</span><span class="PUNC">(</span><span class="NAME">tex</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>671</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>672</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>673</span> 
<span class='line'>674</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>675</span>      * Initializes a sprite with a texture and a rect in points, optionally rotated.  &lt;br/>
<span class='line'>676</span>      * After initialization, the rect used will be the size of the texture, and the offset will be (0,0).&lt;br/>
<span class='line'>677</span>      * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
<span class='line'>678</span>      * @function
<span class='line'>679</span>      * @param {cc.Texture2D|HTMLImageElement|HTMLCanvasElement} texture A pointer to an existing CCTexture2D object. You can use a CCTexture2D object for many sprites.
<span class='line'>680</span>      * @param {cc.Rect} [rect] Only the contents inside rect of this texture will be applied for this sprite.
<span class='line'>681</span>      * @param {Boolean} [rotated] Whether or not the texture rectangle is rotated.
<span class='line'>682</span>      * @param {Boolean} [counterclockwise=true] Whether or not the texture rectangle rotation is counterclockwise (texture package is counterclockwise, spine is clockwise).
<span class='line'>683</span>      * @return {Boolean} true if the sprite is initialized properly, false otherwise.
<span class='line'>684</span>      */</span><span class="WHIT">
<span class='line'>685</span> </span><span class="WHIT">    </span><span class="NAME">initWithTexture</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">counterclockwise</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>686</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">_t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>687</span> </span><span class="WHIT">        </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">arguments.length</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.CCSpriteBatchNode_initWithTexture</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>688</span> 
<span class='line'>689</span> </span><span class="WHIT">        </span><span class="NAME">rotated</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>690</span> </span><span class="WHIT">        </span><span class="NAME">texture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._renderCmd._handleTextureForRotatedTexture</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">counterclockwise</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>691</span> 
<span class='line'>692</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">cc.Node.prototype.init.call</span><span class="PUNC">(</span><span class="NAME">_t</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>693</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>694</span> 
<span class='line'>695</span> </span><span class="WHIT">        </span><span class="NAME">_t._batchNode</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>696</span> </span><span class="WHIT">        </span><span class="NAME">_t._recursiveDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>697</span> </span><span class="WHIT">        </span><span class="NAME">_t.dirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>698</span> </span><span class="WHIT">        </span><span class="NAME">_t._opacityModifyRGB</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>699</span> 
<span class='line'>700</span> </span><span class="WHIT">        </span><span class="NAME">_t._blendFunc.src</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.BLEND_SRC</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>701</span> </span><span class="WHIT">        </span><span class="NAME">_t._blendFunc.dst</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.BLEND_DST</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>702</span> 
<span class='line'>703</span> </span><span class="WHIT">        </span><span class="NAME">_t._flippedX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_t._flippedY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>704</span> 
<span class='line'>705</span> </span><span class="WHIT">        </span><span class="COMM">// default transform anchor: center</span><span class="WHIT">
<span class='line'>706</span> </span><span class="WHIT">        </span><span class="NAME">_t.setAnchorPoint</span><span class="PUNC">(</span><span class="NUMB">0.5</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0.5</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>707</span> 
<span class='line'>708</span> </span><span class="WHIT">        </span><span class="COMM">// zwoptex default values</span><span class="WHIT">
<span class='line'>709</span> </span><span class="WHIT">        </span><span class="NAME">_t._offsetPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>710</span> </span><span class="WHIT">        </span><span class="NAME">_t._offsetPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>711</span> </span><span class="WHIT">        </span><span class="NAME">_t._hasChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>712</span> 
<span class='line'>713</span> </span><span class="WHIT">        </span><span class="NAME">this._renderCmd._init</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>714</span> 
<span class='line'>715</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locTextureLoaded</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">texture.isLoaded</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>716</span> </span><span class="WHIT">        </span><span class="NAME">_t._textureLoaded</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locTextureLoaded</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>717</span> 
<span class='line'>718</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">locTextureLoaded</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>719</span> </span><span class="WHIT">            </span><span class="NAME">_t._rectRotated</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>720</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">rect</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>721</span> </span><span class="WHIT">                </span><span class="NAME">_t._rect.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>722</span> </span><span class="WHIT">                </span><span class="NAME">_t._rect.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>723</span> </span><span class="WHIT">                </span><span class="NAME">_t._rect.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>724</span> </span><span class="WHIT">                </span><span class="NAME">_t._rect.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>725</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>726</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">_t.texture</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>727</span> </span><span class="WHIT">                </span><span class="NAME">_t.texture.removeEventListener</span><span class="PUNC">(</span><span class="STRN">"load"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_t</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>728</span> </span><span class="WHIT">            </span><span class="NAME">texture.addEventListener</span><span class="PUNC">(</span><span class="STRN">"load"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_t._renderCmd._textureLoadedCallback</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_t</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>729</span> </span><span class="WHIT">            </span><span class="NAME">_t.texture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">texture</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>730</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>731</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>732</span> 
<span class='line'>733</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">rect</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>734</span> </span><span class="WHIT">            </span><span class="NAME">rect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.rect</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">texture.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">texture.height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>735</span> 
<span class='line'>736</span> </span><span class="WHIT">        </span><span class="NAME">this._renderCmd._checkTextureBoundary</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>737</span> 
<span class='line'>738</span> </span><span class="WHIT">        </span><span class="NAME">_t.texture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">texture</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>739</span> </span><span class="WHIT">        </span><span class="NAME">_t.setTextureRect</span><span class="PUNC">(</span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>740</span> 
<span class='line'>741</span> </span><span class="WHIT">        </span><span class="COMM">// by default use "Self Render".</span><span class="WHIT">
<span class='line'>742</span> </span><span class="WHIT">        </span><span class="COMM">// if the sprite is added to a batchnode, then it will automatically switch to "batchnode Render"</span><span class="WHIT">
<span class='line'>743</span> </span><span class="WHIT">        </span><span class="NAME">_t.setBatchNode</span><span class="PUNC">(</span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>744</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>745</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>746</span> 
<span class='line'>747</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>748</span>      * Updates the texture rect of the CCSprite in points.
<span class='line'>749</span>      * @function
<span class='line'>750</span>      * @param {cc.Rect} rect a rect of texture
<span class='line'>751</span>      * @param {Boolean} [rotated] Whether or not the texture is rotated
<span class='line'>752</span>      * @param {cc.Size} [untrimmedSize] The original pixels size of the texture
<span class='line'>753</span>      */</span><span class="WHIT">
<span class='line'>754</span> </span><span class="WHIT">    </span><span class="NAME">setTextureRect</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">untrimmedSize</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">needConvert</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>755</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">_t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>756</span> </span><span class="WHIT">        </span><span class="NAME">_t._rectRotated</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>757</span> </span><span class="WHIT">        </span><span class="NAME">_t.setContentSize</span><span class="PUNC">(</span><span class="NAME">untrimmedSize</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>758</span> 
<span class='line'>759</span> </span><span class="WHIT">        </span><span class="NAME">_t.setVertexRect</span><span class="PUNC">(</span><span class="NAME">rect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>760</span> </span><span class="WHIT">        </span><span class="NAME">_t._renderCmd._setTextureCoords</span><span class="PUNC">(</span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">needConvert</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>761</span> 
<span class='line'>762</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">relativeOffsetX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_t._unflippedOffsetPositionFromCenter.x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">relativeOffsetY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_t._unflippedOffsetPositionFromCenter.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>763</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">_t._flippedX</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>764</span> </span><span class="WHIT">            </span><span class="NAME">relativeOffsetX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">relativeOffsetX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>765</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">_t._flippedY</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>766</span> </span><span class="WHIT">            </span><span class="NAME">relativeOffsetY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">relativeOffsetY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>767</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locRect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_t._rect</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>768</span> </span><span class="WHIT">        </span><span class="NAME">_t._offsetPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">relativeOffsetX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">_t._contentSize.width</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locRect.width</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>769</span> </span><span class="WHIT">        </span><span class="NAME">_t._offsetPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">relativeOffsetY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">_t._contentSize.height</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locRect.height</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>770</span> 
<span class='line'>771</span> </span><span class="WHIT">        </span><span class="COMM">// rendering using batch node</span><span class="WHIT">
<span class='line'>772</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">_t._batchNode</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>773</span> </span><span class="WHIT">            </span><span class="COMM">// update dirty, don't update _recursiveDirty</span><span class="WHIT">
<span class='line'>774</span> </span><span class="WHIT">            </span><span class="NAME">_t.dirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>775</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>776</span> </span><span class="WHIT">            </span><span class="COMM">// self rendering</span><span class="WHIT">
<span class='line'>777</span> </span><span class="WHIT">            </span><span class="COMM">// Atlas: Vertex</span><span class="WHIT">
<span class='line'>778</span> </span><span class="WHIT">            </span><span class="NAME">this._renderCmd._resetForBatchNode</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>779</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>780</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>781</span> 
<span class='line'>782</span> </span><span class="WHIT">    </span><span class="COMM">// BatchNode methods</span><span class="WHIT">
<span class='line'>783</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>784</span>      * Updates the quad according the the rotation, position, scale values.
<span class='line'>785</span>      * @function
<span class='line'>786</span>      */</span><span class="WHIT">
<span class='line'>787</span> </span><span class="WHIT">    </span><span class="NAME">updateTransform</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>788</span> </span><span class="WHIT">        </span><span class="NAME">this._renderCmd.updateTransform</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>789</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>790</span> 
<span class='line'>791</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>792</span>      * Add child to sprite (override cc.Node)
<span class='line'>793</span>      * @function
<span class='line'>794</span>      * @param {cc.Sprite} child
<span class='line'>795</span>      * @param {Number} localZOrder  child's zOrder
<span class='line'>796</span>      * @param {String} [tag] child's tag
<span class='line'>797</span>      * @override
<span class='line'>798</span>      */</span><span class="WHIT">
<span class='line'>799</span> </span><span class="WHIT">    </span><span class="NAME">addChild</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">localZOrder</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tag</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>800</span> </span><span class="WHIT">        </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.CCSpriteBatchNode_addChild_2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>801</span> 
<span class='line'>802</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">localZOrder</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>803</span> </span><span class="WHIT">            </span><span class="NAME">localZOrder</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">child._localZOrder</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>804</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tag</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>805</span> </span><span class="WHIT">            </span><span class="NAME">tag</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">child.tag</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>806</span> 
<span class='line'>807</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._renderCmd._setBatchNodeForAddChild</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>808</span> </span><span class="WHIT">            </span><span class="COMM">//cc.Node already sets isReorderChildDirty_ so this needs to be after batchNode check</span><span class="WHIT">
<span class='line'>809</span> </span><span class="WHIT">            </span><span class="NAME">cc.Node.prototype.addChild.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">localZOrder</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">tag</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>810</span> </span><span class="WHIT">            </span><span class="NAME">this._hasChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>811</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>812</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>813</span> 
<span class='line'>814</span> </span><span class="WHIT">    </span><span class="COMM">// Frames</span><span class="WHIT">
<span class='line'>815</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>816</span>      * Sets a new sprite frame to the sprite.
<span class='line'>817</span>      * @function
<span class='line'>818</span>      * @param {cc.SpriteFrame|String} newFrame
<span class='line'>819</span>      */</span><span class="WHIT">
<span class='line'>820</span> </span><span class="WHIT">    </span><span class="NAME">setSpriteFrame</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">newFrame</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>821</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">_t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>822</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">cc.isString</span><span class="PUNC">(</span><span class="NAME">newFrame</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>823</span> </span><span class="WHIT">            </span><span class="NAME">newFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.spriteFrameCache.getSpriteFrame</span><span class="PUNC">(</span><span class="NAME">newFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>824</span> </span><span class="WHIT">            </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">newFrame</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.Sprite_setSpriteFrame</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>825</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>826</span> 
<span class='line'>827</span> </span><span class="WHIT">        </span><span class="NAME">this.setNodeDirty</span><span class="PUNC">(</span><span class="KEYW">true</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>828</span> 
<span class='line'>829</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frameOffset</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">newFrame.getOffset</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>830</span> </span><span class="WHIT">        </span><span class="NAME">_t._unflippedOffsetPositionFromCenter.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frameOffset.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>831</span> </span><span class="WHIT">        </span><span class="NAME">_t._unflippedOffsetPositionFromCenter.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frameOffset.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>832</span> 
<span class='line'>833</span> </span><span class="WHIT">        </span><span class="COMM">// update rect</span><span class="WHIT">
<span class='line'>834</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">pNewTexture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">newFrame.getTexture</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>835</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locTextureLoaded</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">newFrame.textureLoaded</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>836</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">locTextureLoaded</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>837</span> </span><span class="WHIT">            </span><span class="NAME">_t._textureLoaded</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>838</span> </span><span class="WHIT">            </span><span class="NAME">newFrame.addEventListener</span><span class="PUNC">(</span><span class="STRN">"load"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">sender</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>839</span> </span><span class="WHIT">                </span><span class="NAME">_t._textureLoaded</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>840</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locNewTexture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">sender.getTexture</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>841</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locNewTexture</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">_t._texture</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>842</span> </span><span class="WHIT">                    </span><span class="NAME">_t.texture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locNewTexture</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>843</span> </span><span class="WHIT">                </span><span class="NAME">_t.setTextureRect</span><span class="PUNC">(</span><span class="NAME">sender.getRect</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sender.isRotated</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sender.getOriginalSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>844</span> </span><span class="WHIT">                </span><span class="NAME">_t.dispatchEvent</span><span class="PUNC">(</span><span class="STRN">"load"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>845</span> </span><span class="WHIT">                </span><span class="NAME">_t.setColor</span><span class="PUNC">(</span><span class="NAME">_t.color</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>846</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_t</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>847</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="KEYW">else</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>848</span> </span><span class="WHIT">            </span><span class="COMM">// update texture before updating texture rect</span><span class="WHIT">
<span class='line'>849</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">pNewTexture</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">_t._texture</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>850</span> </span><span class="WHIT">                </span><span class="NAME">_t.texture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">pNewTexture</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>851</span> </span><span class="WHIT">            </span><span class="NAME">_t.setTextureRect</span><span class="PUNC">(</span><span class="NAME">newFrame.getRect</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">newFrame.isRotated</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">newFrame.getOriginalSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>852</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>853</span> </span><span class="WHIT">        </span><span class="NAME">this._renderCmd._updateForSetSpriteFrame</span><span class="PUNC">(</span><span class="NAME">pNewTexture</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>854</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>855</span> 
<span class='line'>856</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>857</span>      * Sets a new display frame to the sprite.
<span class='line'>858</span>      * @param {cc.SpriteFrame|String} newFrame
<span class='line'>859</span>      * @deprecated
<span class='line'>860</span>      */</span><span class="WHIT">
<span class='line'>861</span> </span><span class="WHIT">    </span><span class="NAME">setDisplayFrame</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">newFrame</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>862</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="NAME">cc._LogInfos.Sprite_setDisplayFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>863</span> </span><span class="WHIT">        </span><span class="NAME">this.setSpriteFrame</span><span class="PUNC">(</span><span class="NAME">newFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>864</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>865</span> 
<span class='line'>866</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>867</span>      * Returns whether or not a cc.SpriteFrame is being displayed
<span class='line'>868</span>      * @function
<span class='line'>869</span>      * @param {cc.SpriteFrame} frame
<span class='line'>870</span>      * @return {Boolean}
<span class='line'>871</span>      */</span><span class="WHIT">
<span class='line'>872</span> </span><span class="WHIT">    </span><span class="NAME">isFrameDisplayed</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">frame</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>873</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._renderCmd.isFrameDisplayed</span><span class="PUNC">(</span><span class="NAME">frame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>874</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>875</span> 
<span class='line'>876</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>877</span>      * Returns the current displayed frame.
<span class='line'>878</span>      * @deprecated since 3.4, please use getSpriteFrame instead
<span class='line'>879</span>      * @return {cc.SpriteFrame}
<span class='line'>880</span>      */</span><span class="WHIT">
<span class='line'>881</span> </span><span class="WHIT">    </span><span class="NAME">displayFrame</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>882</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.getSpriteFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>883</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>884</span> 
<span class='line'>885</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>886</span>      * Returns the current displayed frame.
<span class='line'>887</span>      * @return {cc.SpriteFrame}
<span class='line'>888</span>      */</span><span class="WHIT">
<span class='line'>889</span> </span><span class="WHIT">    </span><span class="NAME">getSpriteFrame</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>890</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.SpriteFrame</span><span class="PUNC">(</span><span class="NAME">this._texture</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>891</span> </span><span class="WHIT">            </span><span class="NAME">cc.rectPointsToPixels</span><span class="PUNC">(</span><span class="NAME">this._rect</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>892</span> </span><span class="WHIT">            </span><span class="NAME">this._rectRotated</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>893</span> </span><span class="WHIT">            </span><span class="NAME">cc.pointPointsToPixels</span><span class="PUNC">(</span><span class="NAME">this._unflippedOffsetPositionFromCenter</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>894</span> </span><span class="WHIT">            </span><span class="NAME">cc.sizePointsToPixels</span><span class="PUNC">(</span><span class="NAME">this._contentSize</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>895</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>896</span> 
<span class='line'>897</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>898</span>      * Sets the batch node to sprite
<span class='line'>899</span>      * @function
<span class='line'>900</span>      * @param {cc.SpriteBatchNode|null} spriteBatchNode
<span class='line'>901</span>      * @example
<span class='line'>902</span>      *  var batch = new cc.SpriteBatchNode("Images/grossini_dance_atlas.png", 15);
<span class='line'>903</span>      *  var sprite = new cc.Sprite(batch.texture, cc.rect(0, 0, 57, 57));
<span class='line'>904</span>      *  batch.addChild(sprite);
<span class='line'>905</span>      *  layer.addChild(batch);
<span class='line'>906</span>      */</span><span class="WHIT">
<span class='line'>907</span> </span><span class="WHIT">    </span><span class="NAME">setBatchNode</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">spriteBatchNode</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>908</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">_t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>909</span> </span><span class="WHIT">        </span><span class="NAME">_t._batchNode</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">spriteBatchNode</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="COMM">// weak reference</span><span class="WHIT">
<span class='line'>910</span> 
<span class='line'>911</span> </span><span class="WHIT">        </span><span class="COMM">// self render</span><span class="WHIT">
<span class='line'>912</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">_t._batchNode</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>913</span> </span><span class="WHIT">            </span><span class="NAME">_t.atlasIndex</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sprite.INDEX_NOT_INITIALIZED</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>914</span> </span><span class="WHIT">            </span><span class="NAME">_t.textureAtlas</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>915</span> </span><span class="WHIT">            </span><span class="NAME">_t._recursiveDirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>916</span> </span><span class="WHIT">            </span><span class="NAME">_t.dirty</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>917</span> 
<span class='line'>918</span> </span><span class="WHIT">            </span><span class="NAME">this._renderCmd._resetForBatchNode</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>919</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>920</span> </span><span class="WHIT">            </span><span class="COMM">// using batch</span><span class="WHIT">
<span class='line'>921</span> </span><span class="WHIT">            </span><span class="NAME">_t._transformToBatch</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.affineTransformIdentity</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>922</span> </span><span class="WHIT">            </span><span class="NAME">_t.textureAtlas</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">_t._batchNode.getTextureAtlas</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="COMM">// weak ref</span><span class="WHIT">
<span class='line'>923</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>924</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>925</span> 
<span class='line'>926</span> </span><span class="WHIT">    </span><span class="COMM">// CCTextureProtocol</span><span class="WHIT">
<span class='line'>927</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>928</span>      * Sets the texture of sprite
<span class='line'>929</span>      * @function
<span class='line'>930</span>      * @param {cc.Texture2D|String} texture
<span class='line'>931</span>      */</span><span class="WHIT">
<span class='line'>932</span> </span><span class="WHIT">    </span><span class="NAME">setTexture</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>933</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">texture</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>934</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._renderCmd._setTexture</span><span class="PUNC">(</span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>935</span> 
<span class='line'>936</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">cc.isString</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>937</span> </span><span class="WHIT">            </span><span class="NAME">texture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.textureCache.addImage</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>938</span> 
<span class='line'>939</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">texture._textureLoaded</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>940</span> </span><span class="WHIT">                </span><span class="NAME">texture.addEventListener</span><span class="PUNC">(</span><span class="STRN">"load"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>941</span> </span><span class="WHIT">                    </span><span class="NAME">this._renderCmd._setTexture</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>942</span> </span><span class="WHIT">                    </span><span class="NAME">this._changeRectWithTexture</span><span class="PUNC">(</span><span class="NAME">texture.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>943</span> </span><span class="WHIT">                    </span><span class="NAME">this.setColor</span><span class="PUNC">(</span><span class="NAME">this._realColor</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>944</span> </span><span class="WHIT">                    </span><span class="NAME">this._textureLoaded</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>945</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>946</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="KEYW">else</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>947</span> </span><span class="WHIT">                </span><span class="NAME">this._renderCmd._setTexture</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>948</span> </span><span class="WHIT">                </span><span class="NAME">this._changeRectWithTexture</span><span class="PUNC">(</span><span class="NAME">texture.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>949</span> </span><span class="WHIT">                </span><span class="NAME">this.setColor</span><span class="PUNC">(</span><span class="NAME">this._realColor</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>950</span> </span><span class="WHIT">                </span><span class="NAME">this._textureLoaded</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>951</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>952</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="KEYW">else</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>953</span> </span><span class="WHIT">            </span><span class="COMM">// CCSprite: setTexture doesn't work when the sprite is rendered using a CCSpriteSheet</span><span class="WHIT">
<span class='line'>954</span> </span><span class="WHIT">            </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">cc.Texture2D</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.Sprite_setTexture_2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>955</span> </span><span class="WHIT">            </span><span class="NAME">this._changeRectWithTexture</span><span class="PUNC">(</span><span class="NAME">texture.getContentSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>956</span> </span><span class="WHIT">            </span><span class="NAME">this._renderCmd._setTexture</span><span class="PUNC">(</span><span class="NAME">texture</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>957</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>958</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>959</span> 
<span class='line'>960</span> </span><span class="WHIT">    </span><span class="NAME">_changeRectWithTexture</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">rect</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>961</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">rect</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">rect.width</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">!</span><span class="NAME">rect.height</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>962</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">textureRect</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.getTextureRect</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>963</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">textureRect.height</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">textureRect.width</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>964</span> </span><span class="WHIT">        </span><span class="NAME">rect.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.x</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>965</span> </span><span class="WHIT">        </span><span class="NAME">rect.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.y</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>966</span> </span><span class="WHIT">        </span><span class="NAME">rect.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.width</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>967</span> </span><span class="WHIT">        </span><span class="NAME">rect.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">rect.height</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>968</span> </span><span class="WHIT">        </span><span class="NAME">this.setTextureRect</span><span class="PUNC">(</span><span class="NAME">rect</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>969</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>970</span> 
<span class='line'>971</span> </span><span class="WHIT">    </span><span class="NAME">_createRenderCmd</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>972</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">cc._renderType</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">cc._RENDER_TYPE_CANVAS</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>973</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Sprite.CanvasRenderCmd</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>974</span> </span><span class="WHIT">        </span><span class="KEYW">else</span><span class="WHIT">
<span class='line'>975</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Sprite.WebGLRenderCmd</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>976</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>977</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>978</span> 
<span class='line'>979</span> </span><span class="COMM">/**
<span class='line'>980</span>  * Create a sprite with image path or frame name or texture or spriteFrame.
<span class='line'>981</span>  * @deprecated since v3.0, please use new construction instead
<span class='line'>982</span>  * @see cc.Sprite
<span class='line'>983</span>  * @param {String|cc.SpriteFrame|HTMLImageElement|cc.Texture2D} fileName  The string which indicates a path to image file, e.g., "scene1/monster.png".
<span class='line'>984</span>  * @param {cc.Rect} rect  Only the contents inside rect of pszFileName's texture will be applied for this sprite.
<span class='line'>985</span>  * @param {Boolean} [rotated] Whether or not the texture rectangle is rotated.
<span class='line'>986</span>  * @return {cc.Sprite} A valid sprite object
<span class='line'>987</span>  */</span><span class="WHIT">
<span class='line'>988</span> </span><span class="NAME">cc.Sprite.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>989</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Sprite</span><span class="PUNC">(</span><span class="NAME">fileName</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rect</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">rotated</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>990</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>991</span> 
<span class='line'>992</span> </span><span class="COMM">/**
<span class='line'>993</span>  * @deprecated since v3.0, please use new construction instead
<span class='line'>994</span>  * @see cc.Sprite
<span class='line'>995</span>  * @function
<span class='line'>996</span>  */</span><span class="WHIT">
<span class='line'>997</span> </span><span class="NAME">cc.Sprite.createWithTexture</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sprite.create</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>998</span> 
<span class='line'>999</span> </span><span class="COMM">/**
<span class='line'>1000</span>  * @deprecated since v3.0, please use new construction instead
<span class='line'>1001</span>  * @see cc.Sprite
<span class='line'>1002</span>  * @function
<span class='line'>1003</span>  */</span><span class="WHIT">
<span class='line'>1004</span> </span><span class="NAME">cc.Sprite.createWithSpriteFrameName</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sprite.create</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1005</span> 
<span class='line'>1006</span> </span><span class="COMM">/**
<span class='line'>1007</span>  * @deprecated since v3.0, please use new construction instead
<span class='line'>1008</span>  * @see cc.Sprite
<span class='line'>1009</span>  * @function
<span class='line'>1010</span>  */</span><span class="WHIT">
<span class='line'>1011</span> </span><span class="NAME">cc.Sprite.createWithSpriteFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sprite.create</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1012</span> </span><span class="COMM">/**
<span class='line'>1013</span>  * cc.Sprite invalid index on the cc.SpriteBatchNode
<span class='line'>1014</span>  * @constant
<span class='line'>1015</span>  * @type {Number}
<span class='line'>1016</span>  */</span><span class="WHIT">
<span class='line'>1017</span> </span><span class="NAME">cc.Sprite.INDEX_NOT_INITIALIZED</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1018</span> 
<span class='line'>1019</span> </span><span class="NAME">cc.EventHelper.prototype.apply</span><span class="PUNC">(</span><span class="NAME">cc.Sprite.prototype</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1020</span> 
<span class='line'>1021</span> </span><span class="NAME">cc.assert</span><span class="PUNC">(</span><span class="NAME">cc.isFunction</span><span class="PUNC">(</span><span class="NAME">cc._tmp.PrototypeSprite</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc._LogInfos.MissingFile</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"SpritesPropertyDefine.js"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1022</span> </span><span class="NAME">cc._tmp.PrototypeSprite</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1023</span> </span><span class="KEYW">delete</span><span class="WHIT"> </span><span class="NAME">cc._tmp.PrototypeSprite</span><span class="PUNC">;</span></pre></body></html>