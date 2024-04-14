export const part4=
`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h1><span lang=EN-US>4</span>、小线段前瞻功能</h1>

<h2><a name="_Toc95813021"><span lang=EN-US>4.1</span>小线段前瞻功能概述</a></h2>

<p class=MsoNormal><img width=237 height=185 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image050.jpg"
align=left hspace=12><img width=247 height=185 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image051.jpg"
align=left hspace=12><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>小线段前瞻功能主要用于<span
lang=EN-US>UG</span>、<span lang=EN-US>Mastercam</span>等软件制作的模具零件加工，也常用于轮廓精度要求较高的工件制造。</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</span>模具加工<span
lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>高精度零件加工</p>

<h2><a name="_Toc95813022"><span lang=EN-US>4.2</span>小线段前瞻的启用方式</a></h2>

<p class=MsoNormal style='text-indent:21.0pt'>小线段前瞻功能，可以通过<span lang=EN-US>G5.1</span>指令和参数设置，两种方式来启用该功能<span
lang=EN-US>:</span></p>

<h3><a name="_Toc95813023"><span lang=EN-US>4.2.1&nbsp; G5.1 </span>指令启用</a></h3>

<p class=MsoNormal>格式：<span lang=EN-US>G5.1&nbsp; Q_&nbsp;&nbsp; </span></p>

<p class=MsoNormal>说明：<span lang=EN-US>1</span>、<span lang=EN-US>Q</span>值只能选择<span
lang=EN-US>0</span>或<span lang=EN-US>1</span>，输入其他值系统将提示报警</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
2</span>、指定<span lang=EN-US>Q1</span>的时，小线段前瞻功能有效；</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
3</span>、指定<span lang=EN-US>Q0</span>时，小线段前瞻功能无效；</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
4</span>、<span lang=EN-US>M30</span>运行结束后，小线段前瞻功能无效；</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
5</span>、上电时，默认为小线段前瞻功能无效。</p>

<p class=MsoNormal>示例：</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; G0 X0
Y0 Z0</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; G5.1
Q1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (</span>进入小线段前瞻<span
lang=EN-US>)</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; G01
X0.1 Y0.1</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X0.3
Y0.2</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ......</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; G5.1
Q0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (</span>取消小线段前瞻<span
lang=EN-US>)</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h3><a name="_Toc95813024"><span lang=EN-US>4.2.2&nbsp; </span>参数设置启用</a></h3>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=570
 style='width:427.55pt;margin-left:31.45pt;border-collapse:collapse;border:
 none'>
 <tr>
  <td width=64 valign=top style='width:48.2pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'><span
  lang=EN-US>No.20</span></p>
  </td>
  <td width=506 valign=top style='width:379.35pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'>切削控制选择，<span
  lang=EN-US>0</span>：效率优先，<span lang=EN-US>1</span>：效率优先下提升轮廓精度，<span
  lang=EN-US>2</span>：前瞻轮廓优先</p>
  </td>
 </tr>
</table>

<p class=MsoNormal align=left style='text-align:left'><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No.20#=2</span>时，小线段前瞻功能常有效。无需通过<span
lang=EN-US>G5.1</span>指令来开启该功能。</p>

<h2><a name="_Toc95813025"><span lang=EN-US>4.3 </span>小线段前瞻相关参数</a></h2>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=548
 style='width:411.1pt;margin-left:5.4pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=57 valign=top style='width:42.8pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'><span
  lang=EN-US>No.80</span></p>
  </td>
  <td width=491 valign=top style='width:368.3pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'>小线段前瞻有效时，所有轴最大切削进给速度，（标准值<span
  lang=EN-US>5000</span>）</p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>说明：切削的上限速度，编程速度超过该速度，将以该速度运行。</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>&nbsp;</p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=548
 style='width:411.1pt;margin-left:5.4pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=57 valign=top style='width:42.8pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'><span
  lang=EN-US>No.82</span></p>
  </td>
  <td width=491 valign=top style='width:368.3pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'>小线段前瞻有效时，所有轴最大合成加速度（标准值<span
  lang=EN-US>50</span>）</p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>说明：切削加减速的上限，运行时超过该加速度，将以该加速度运行。</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>&nbsp;</p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=576
 style='width:432.35pt;margin-left:5.4pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=57 valign=top style='width:42.8pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'><span
  lang=EN-US>No.83</span></p>
  </td>
  <td width=519 valign=top style='width:389.55pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'>小线段前瞻有效时，各轴允许的最大加速度（标准值<span
  lang=EN-US>120</span>）</p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>说明：切削的单轴加减速上限值，运行时超过其中最小加速度，将通过该最小加速度，</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>限制合成加速度。</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>&nbsp;</p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=576
 style='width:432.35pt;margin-left:5.4pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=57 valign=top style='width:42.8pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'><span
  lang=EN-US>No.84</span></p>
  </td>
  <td width=519 valign=top style='width:389.55pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'>小线段前瞻有效时，所有轴最大的速度阶跃值，（标准值<span
  lang=EN-US>120</span>）</p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>说明：阶跃值越大，段和段之间过度的速度越快，机床震动越大，阶跃值越小，</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>段与段之间速度越慢，机床震动越小，加工平滑度降低。</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>&nbsp;</p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=576
 style='width:432.35pt;margin-left:5.4pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=57 valign=top style='width:42.8pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'><span
  lang=EN-US>No.89</span></p>
  </td>
  <td width=519 valign=top style='width:389.55pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph align=left style='text-align:left;text-indent:0cm'>小线段前瞻有效时，反向间隙确定反向的精度（<span
  lang=EN-US>0.001mm</span>），（<span lang=EN-US>Z</span>轴标准值<span lang=EN-US>3</span>）</p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>说明：确定反向精度，是为了避免小线段程序编程时，出现极小的反向数据后，重复反向，</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'>导致加工模具平面出现划痕现象</p>

</div>

<span style='font-size:10.5pt;font-family:等线'><br clear=all style='page-break-before:
always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>
`