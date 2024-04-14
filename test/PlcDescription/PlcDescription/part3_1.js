export const part3_1=`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h1 align=center style='margin-left:-.05pt;text-align:center;text-indent:-1.1pt'><span
style='font-size:16.0pt;color:windowtext'>第三章 功能配置</span></h1>

<h3><span lang=EN-US>3.1&nbsp; </span>第一主轴旋转控制</h3>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>相关信号</span></b></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=71 valign=top style='width:52.9pt;border:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span style='font-family:宋体'>信号类型</span></b></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span style='font-family:宋体'>信号符号</span></b></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span style='font-family:宋体'>信号意义</span></b></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span style='font-family:宋体'>对应引脚</span></b></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span lang=EN-US>PLC</span></b><b><span
  style='font-family:宋体'>状态</span></b></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span lang=EN-US>C NC</span></b><b><span
  style='font-family:宋体'>诊断</span></b></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=71 rowspan=4 style='width:52.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>输入信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>机床面板主轴顺时针转键</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>X21.7</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>机床面板主轴逆时针转键</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>X21.3</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>机床面板主轴停止键</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>X21.5</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>SPAL</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>主轴报警信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>X5.0</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=71 rowspan=8 style='width:52.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>输出信号</span></p>
  </td>
  <td width=72 rowspan=2 style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>SRV</span></p>
  </td>
  <td width=230 rowspan=2 style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>主轴逆时针转信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>CN62.4</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y0.3</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y5.1</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 rowspan=2 style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>SFR</span></p>
  </td>
  <td width=230 rowspan=2 style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>主轴顺时针转信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>CN62.5</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y0.4</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y5.0</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>SPZD</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>主轴制动信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>CN62.8</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y0.7</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>机床面板主轴逆时针转指示灯</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y23.1</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>机床面板主轴顺时针转指示灯</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y19.1</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>机床面板主轴停止指示灯</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y18.0</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=71 rowspan=3 style='width:52.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>指令输入</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>M03</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>主轴顺时针转指令信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>M04</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>主轴逆时针转指令信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>M05</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>主轴停止指令信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>控制参数</span></b></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3712</span></p>
  </td>
  <td width=41 valign=top style='width:30.8pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=442 valign=top style='width:331.3pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>主轴类型（</span><span
  lang=EN-US style='font-family:"Arial",sans-serif'>0</span><span
  style='font-family:宋体'>：开关量主轴；</span><span lang=EN-US style='font-family:
  "Arial",sans-serif'>1</span><span style='font-family:宋体'>：模拟主轴；</span><span
  lang=EN-US style='font-family:"Arial",sans-serif'>2</span><span
  style='font-family:宋体'>：串行主轴）</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal style='margin-left:21.0pt'><b><span lang=EN-US>&nbsp;</span></b></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>K0010</span></p>
  </td>
  <td width=41 valign=top style='width:30.8pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>MTSS</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.45pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>RSJG</span></p>
  </td>
  <td width=55 valign=top style='width:41.45pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal style='margin-left:10.5pt;text-indent:21.0pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US style='font-family:宋体'>RSJG&nbsp;
=1: </span><span style='font-family:宋体'>复位时，<span lang=EN-US>CNC</span>不关闭主轴、冷却、润滑输出信号；</span></p>

<p class=MsoNormal style='margin-left:31.5pt;text-indent:31.5pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US style='font-family:宋体'>=0: </span><span
style='font-family:宋体'>复位时，</span><span lang=EN-US>CNC</span><span
style='font-family:宋体'>关闭主轴、冷却、润滑输出信号；</span></p>

<p class=MsoNormal style='margin-left:10.5pt;text-indent:21.0pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US style='font-family:宋体'>MTSS&nbsp;
=1: </span><span style='font-family:宋体'>执行<span lang=EN-US>M30</span>时不停止主轴；</span></p>

<p class=MsoNormal style='margin-left:31.5pt;text-indent:31.5pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US style='font-family:宋体'>=0: </span><span
style='font-family:宋体'>执行<span lang=EN-US>M30</span>时停止主轴。</span></p>

<p class=MsoNormal style='margin-left:50.4pt;text-autospace:none;vertical-align:
bottom'><span lang=EN-GB style='font-family:宋体'>&nbsp;</span></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>DT0021</span></p>
  </td>
  <td width=41 valign=top style='width:30.8pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=442 valign=top style='width:331.3pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  宋体'>M</span><span style='font-family:宋体'>代码执行持续时间</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>DT0022</span></p>
  </td>
  <td width=41 valign=top style='width:30.8pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=442 valign=top style='width:331.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>主轴停止到制动输出的延迟时间</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>DT0023</span></p>
  </td>
  <td width=41 valign=top style='width:30.8pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=442 valign=top style='width:331.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>主轴制动输出时间</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal style='margin-left:50.4pt;text-autospace:none;vertical-align:
bottom'><span lang=EN-GB style='font-family:宋体'>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><img width=485 height=197 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/%E6%A0%87%E5%87%86PLC%E5%9B%BE%E7%89%87/part3_1/image001.png"
align=left hspace=12><b><span style='font-family:宋体'>动作时序</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
style='font-family:宋体'>主轴动作时序如下图所示：</span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
lang=EN-US style='font-family:宋体'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US style='font-family:宋体'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US style='font-family:宋体'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US style='font-family:宋体'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US style='font-family:宋体'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US style='font-family:宋体'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US style='font-family:宋体'>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:17.1pt;line-height:18.0pt'><b><span
style='font-family:楷体_GB2312'>注：<span lang=EN-US>DT022</span>为从发出主轴停止信号到发出主轴制动信号的延迟时间；<span
lang=EN-US>DT023</span>为主轴制动保持时间。</span></b></p>

<p class=MsoNormal style='margin-left:17.1pt;text-indent:-14.25pt;line-height:
18.0pt'><b><span lang=EN-US style='font-family:楷体_GB2312'>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>控制逻辑</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
lang=EN-US>CNC</span><span style='font-family:宋体'>上电后，</span><span lang=EN-US>SSTP</span><span
style='font-family:宋体'>输出有效。在</span><span lang=EN-US>SSTP</span><span
style='font-family:宋体'>输出有效时，执行</span><span lang=EN-US>M03</span><span
style='font-family:宋体'>或</span><span lang=EN-US>M04</span><span
style='font-family:宋体'>，对应的</span><span lang=EN-US>SRV</span><span
style='font-family:宋体'>或</span><span lang=EN-US>SFR</span><span
style='font-family:宋体'>输出有效并保持，同时关闭</span><span lang=EN-US>SSTP</span><span
style='font-family:宋体'>输出；</span><span lang=EN-US>SFR</span><span
style='font-family:宋体'>或</span><span lang=EN-US>SRV</span><span
style='font-family:宋体'>输出有效时，执行</span><span lang=EN-US>M05</span><span
style='font-family:宋体'>，关闭</span><span lang=EN-US>SFR</span><span
style='font-family:宋体'>或</span><span lang=EN-US>SRV</span><span
style='font-family:宋体'>的输出，</span><span lang=EN-US>SSTP</span><span
style='font-family:宋体'>输出有效并保持；主轴制动</span><span lang=EN-US>SPZD</span><span
style='font-family:宋体'>信号输出延时由</span><span lang=EN-US>PLC</span><span
style='font-family:宋体'>数据</span><span lang=EN-US>DT022</span><span
style='font-family:宋体'>（主轴停止指令输出到主轴制动</span><span lang=EN-US>SPZD</span><span
style='font-family:宋体'>信号输出之间的延时时间）设定，制动信号保持的时间由</span><span lang=EN-US>PLC</span><span
style='font-family:宋体'>数据</span><span lang=EN-US>DT023</span><span
style='font-family:宋体'>（主轴制动输出时间）设定；</span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
style='font-family:宋体'>如当前主轴处于顺时针转或逆时针转状态，则执行</span><span lang=EN-US>M04</span><span
style='font-family:宋体'>或</span><span lang=EN-US>M03</span><span
style='font-family:宋体'>时，产生</span><span lang=EN-US>PLC</span><span
style='font-family:宋体'>报警</span><span lang=EN-US>A0.3</span><span
style='font-family:宋体'>：</span><span lang=EN-US>M03</span><span
style='font-family:宋体'>、</span><span lang=EN-US>M04</span><span
style='font-family:宋体'>指定错误。</span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>1</span>：<span lang=EN-US>CNC</span>外部急停或主轴报警时，关闭主轴旋转输出信号，同时输出<span
lang=EN-US>SSTP</span>信号；</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>2</span>：<span lang=EN-US>CNC</span>复位时，由<span
lang=EN-US>PLC</span>状态<span lang=EN-US>K0010</span>的<span lang=EN-US>RSJG</span>位设置是否取消<span
lang=EN-US>SFR</span>、<span lang=EN-US>SRV</span>的输出；</span></b></p>

<p class=MsoNormal style='text-indent:48.8pt;line-height:18.0pt'><b><span
style='font-family:楷体_GB2312'>当<span lang=EN-US>RSJG</span>＝<span lang=EN-US>0</span>时，<span
lang=EN-US>CNC</span>复位关闭<span lang=EN-US>SFR</span>、<span lang=EN-US>SRV</span>的输出；</span></b></p>

<p class=MsoNormal style='text-indent:48.8pt'><b><span style='font-family:楷体_GB2312'>当<span
lang=EN-US>RSJG</span>＝<span lang=EN-US>1</span>时，<span lang=EN-US>CNC</span>复位，<span
lang=EN-US>SFR</span>、<span lang=EN-US>SRV</span>的输出状态保持不变。</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>3</span>：执行<span lang=EN-US>M30</span>时，由<span
lang=EN-US>PLC</span>状态<span lang=EN-US>K0010</span>的<span lang=EN-US>MTSS</span>位设置是否取消<span
lang=EN-US>SFR</span>、<span lang=EN-US>SRV</span>的输出；</span></b></p>

<p class=MsoNormal><b><span lang=EN-US style='font-family:楷体_GB2312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>4</span>：<span lang=EN-US>CNC</span>检测到主轴报警信号<span
lang=EN-US>SPAL</span>后，产生<span lang=EN-US>3036</span>号报警：主轴驱动器未准备就绪，同时<span
lang=EN-US>F35.0</span>置<span lang=EN-US>1</span>；</span></b></p>

<p class=MsoNormal style='margin-left:45.8pt;text-indent:-24.8pt'><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>5</span>：主轴模拟量控制时，当输出的电压<span
lang=EN-US>&gt;0</span>时，主轴使能信号有效。</span></b></p>

<p class=MsoNormal style='margin-left:21.0pt'><b><span style='font-family:楷体_GB2312'>注<span
lang=EN-US>6</span>：串行主轴控制时不需要连接<span lang=EN-US>I/O</span>信号，系统和伺服通过总线进行通讯（主轴正转信号：<span
lang=EN-US>G70.5</span>，珠主轴反转信号：<span lang=EN-US>G70.4</span>）。</span></b></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>
`
