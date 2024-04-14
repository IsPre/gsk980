export const part3_265=`

<div class=WordSection1 style='layout-grid:15.6pt 0pt'>

<h4><span lang=EN-US>3.26.5 PMC</span><span style='font-family:宋体'>数据表</span></h4>

<p class=MsoNormal align=left style='margin-left:15.75pt;text-align:left;
text-indent:-15.75pt'><span lang=EN-US>1．<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-US>D</span>地址（一字节二进制数）：</p>

<p class=MsoNormal style='margin-left:15.75pt'><span lang=EN-US>D407</span>为当前机床刀库刀套数目，初始化为<span
lang=EN-US>20</span>，用户可根据机床的刀套数实时修改</p>

<p class=MsoNormal style='margin-left:15.75pt'><span lang=EN-US>D408 </span>为目标刀套号，初始值为<span
lang=EN-US>0</span>。 </p>

<p class=MsoNormal style='margin-left:15.75pt'><span lang=EN-US>D409 </span>为当前刀套号，初始设定值<span
lang=EN-US>0</span>。</p>

<p class=MsoNormal style='margin-left:15.75pt'><span lang=EN-US>D410 </span>主轴上的刀具号<span
lang=EN-US>,</span>默认为<span lang=EN-US>0</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp; D411-430</span>为刀套<span
lang=EN-US>1-20</span>内的刀具号，初始设定值为<span lang=EN-US>1-20</span>。</p>

<p class=MsoNormal><span lang=EN-US>2</span>．<span lang=EN-US>C </span>地址：<span
lang=EN-US> C21</span>：<span style='font-size:12.0pt'>刀库</span>手动、刀盘回零计数器</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C22</span>：<span
style='font-size:12.0pt'>刀库顺时针旋转计数器</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C23</span>：<span
style='font-size:12.0pt'>刀库逆时针旋转计数器</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

`