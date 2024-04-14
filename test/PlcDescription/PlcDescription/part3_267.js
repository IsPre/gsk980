export const part3_267=`
<div class=WordSection1 style='layout-grid:15.6pt 0pt'>

<h4><span lang=EN-US>3.26.7 </span><span style='font-family:宋体'>宏程序相关</span></h4>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.7</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.1 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>宏变量</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>1</span>．<span
lang=EN-US>#1000&nbsp; (G54.0) </span>刀盘旋转、主轴定向、刀套倒下完成信号<span lang=EN-US>&nbsp;&nbsp;
</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>2</span>．<span
lang=EN-US>#1002&nbsp; (G54.2) T</span>代码等于主轴上刀号<span lang=EN-US>, </span>换刀结束</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.7</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.2 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>宏程序</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>主程序：</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>O0001</span>（<span
lang=EN-US>O0001</span>）<span lang=EN-US>//</span>换刀主程序</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>T01 </span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>G00 X</span>□<span
lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>预选刀可以在加工同时完成刀盘旋转</p>

<p class=MsoNormal style='text-indent:21.0pt'>。。。。。。</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>通过<span
lang=EN-US>M</span>指令来调用换刀子程序，不用<span lang=EN-US>M98</span>调用</p>

<p class=MsoNormal style='text-indent:21.0pt'>。。。。。。</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>T05</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M6</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>M30</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='text-indent:21.0pt'>换刀子程序：</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>O9001(O9001)</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N1 #501=#4003 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>保存<span
lang=EN-US>G90/G91</span>信息</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N2 IF[#1002EQ1]
GOTO 12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>换刀目标刀等于当前主轴上的刀，则跳转</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N3
 M62&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//</span>主轴定向和刀套倒下同时进行</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N4
 G91
 G30 Z0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>回到换刀参考点</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N5 IF[#1000EQ1] GOTO
7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>等待回参考点、刀盘旋转、主轴定向、刀套倒下完成<span
lang=EN-US>&nbsp;&nbsp; </span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N6 GOTO 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>回参考点、刀盘旋转、主轴定向、刀套倒下未完成</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N7
 M68&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>换刀臂马达第一次启动（换刀臂抓刀）</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N8
 M54&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>主轴刀具松开</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N9
 M69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>换刀臂马达第二次启动（换刀臂换刀）</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N10
 M55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>主轴刀具夹紧</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>N11
 M70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>换刀臂马达第三次启动<span
lang=EN-US>(</span>换刀臂回原位<span lang=EN-US>)</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=PT-BR>N12
 G#501&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //</span>恢复保存<span
lang=PT-BR>G90/G91</span>的值</p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=PT-BR>M99</span></p>

<p class=MsoNormal><span lang=PT-BR>&nbsp;</span></p>

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