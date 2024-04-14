export const part3_286=`
<div class=WordSection1 style='layout-grid:15.6pt 0pt'>

<h4><span lang=EN-US>3.28.6 </span><span style='font-family:宋体'>宏程序相关</span></h4>

<h5><span lang=EN-US style='font-size:10.5pt;line-height:155%'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.28.6.1</span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>宏变量</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>1</span>、<span
lang=EN-US>#1000&nbsp; (G54.0) T</span>代码等于主轴上刀号<span lang=EN-US>, </span>换刀结束</p>

<h5><span lang=EN-US style='font-size:10.5pt;line-height:155%'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.28.6.2</span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>宏程序</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>主程序：</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>O0001</span>（<span
lang=EN-US>O0001</span>）<span lang=EN-US>//</span>换刀主程序</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>T** M06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//</span>调用换刀子程序换刀</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>……</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M30</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='text-indent:21.0pt'>换刀子程序：</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>O9002(O9002)</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N1 #501=#4003 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>保存<span
lang=EN-US>G90/G91</span>信息</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N2 #502=#4002 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>保存<span
lang=EN-US>G17/G18/G19</span>信息</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N3 IF[#1000EQ1]
GOTO 10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>换刀目标刀等于当前主轴上的刀，则跳转</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N4 G17
  G91 G28 Z0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>回到第一参考点</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>N5 M19&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>主轴定向</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N6 G30 Z0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>回到第二参考点，由机械完成刀具与主轴脱扣</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N7 M60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>启动刀盘旋转</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N8 G28 Z0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>回到第一参考点，由机械完成主轴与刀具扣合</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N9 M05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>取消定向</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N10 G#501
 G#502&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>恢复保存的<span
lang=EN-US>G90/G91</span>与<span lang=EN-US>G17/G18/G19</span>的值</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M99</span></p>

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