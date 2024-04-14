export const part3_276=`
<div class=WordSection1 style='layout-grid:15.6pt 0pt'>

<h4><span lang=EN-US>3.27.6 </span><span style='font-family:宋体'>宏程序相关</span></h4>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.27.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.1 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>宏变量</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>1</span>．<span
lang=EN-US>#1000&nbsp; (G54.0) T</span>代码等于主轴上刀号<span lang=EN-US>, </span>换刀结束</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.27.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.2 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>宏程序</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>主程序：</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>O0001</span>（<span
lang=EN-US>O0001</span>）<span lang=EN-US>//</span>换刀主程序</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>T01 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//</span>刀盘会旋转到主轴上刀具号的刀套位置</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>通过<span
lang=EN-US>M</span>指令来调用换刀子程序，不用<span lang=EN-US>M98</span>调用</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>……</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>T05</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M6</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M30</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='text-indent:21.0pt'>换刀子程序：</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>O9000(O9000)</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N1 #501=#4003 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>保存<span
lang=EN-US>G90/G91</span>信息</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N2 #502=#4002  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>保存<span
lang=EN-US>G17/G18/G19</span>信息</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N3 IF[#1000EQ1]
GOTO 14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>换刀目标刀等于当前主轴上的刀，则跳转</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N4
 G17
  G91
 G30 Z0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>回到第二参考点</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>N5
 M19&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>主轴定向完成</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N6
 M65&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>刀盘向右推进</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N7
 M54&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>刀具松开</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; N8
 G30 Z0 P3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>回到第三参考点</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; N9
 M60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>启动刀盘旋转</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N10
 G30 Z0 P2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>回到第二参考点<span
lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N11
 M55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>刀具夹紧</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N12
 M66&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>刀盘向左推进</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N13 M61&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>换刀完成，更新刀具信息</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N14
 G#501
 G#502&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>恢复保存的<span
lang=EN-US>G90/G91</span>与<span lang=EN-US>G17/G18/G19</span>的值</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M99</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:76.85pt;text-indent:-56.4pt'><b>特别说明：</b><span
style='color:black'>程序中</span><span style='font-family:宋体;color:black'>G30 Z0
P3</span><span style='color:black'>设置第三参考点的目的为：</span><span style='font-family:
宋体;color:black'>1</span><span style='color:black'>、减少行程，提高效率；</span><span
style='font-family:宋体;color:black'>2</span><span style='color:black'>、避免经常撞击回零开关，减少回零开关的元器件损耗。建议将该位置设置在回零开关之下但不影响刀盘旋转的位置。</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>&nbsp;</span></p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection3 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

`