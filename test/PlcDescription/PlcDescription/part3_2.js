export const part3_2=`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h3><span lang=EN-US>3.2&nbsp; </span>第二主轴旋转控制</h3>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>相关信号</span><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=581
 style='width:435.4pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=71 valign=top style='width:52.9pt;border:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span style='font-family:黑体'>信号类型</span></b></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span style='font-family:黑体'>信号符号</span></b></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span style='font-family:黑体'>信号意义</span></b></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span style='font-family:黑体'>对应引脚</span></b></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span lang=EN-US>PLC</span></b><b><span
  style='font-family:黑体'>状态</span></b></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><b><span lang=EN-US>CNC</span></b><b><span
  style='font-family:黑体'>诊断</span></b></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:17.75pt'>
  <td width=71 rowspan=3 style='width:52.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:17.75pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>输出信号</span></p>
  </td>
  <td width=72 style='width:54.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:17.75pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>SRV2</span></p>
  </td>
  <td width=230 style='width:172.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:17.75pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>第二主轴逆时针转信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:17.75pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:17.75pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y8.0</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:17.75pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:16.15pt'>
  <td width=72 style='width:54.0pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:16.15pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>SFR2</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:16.15pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>第二主轴顺时针转信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:16.15pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:16.15pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y8.1</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:none;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:16.15pt'>
  <p class=MsoNormal style='text-autospace:none;vertical-align:bottom'><span
  lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>SPZD</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>第二主轴制动信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>CN62.42</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y3.5</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
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
  vertical-align:bottom'><span lang=EN-US>M73</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>第二主轴顺时针转指令信号</span></p>
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
  vertical-align:bottom'><span lang=EN-US>M74</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>第二主轴逆时针转指令信号</span></p>
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
 <tr style='page-break-inside:avoid;height:14.05pt'>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:14.05pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>M75</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:14.05pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>第二主轴停止指令信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:14.05pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:14.05pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:14.05pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal><b><span style='font-family:宋体'>注：第一主轴相关信号参照主轴旋转控制说明</span></b></p>

<p class=MsoNormal><b><span lang=EN-US>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>参数控制</span></b></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3710</span></p>
  </td>
  <td width=41 valign=top style='width:30.8pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=442 valign=top style='width:331.3pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>系统主轴数</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3712</span></p>
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
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>主轴类型（<span
  lang=EN-US>0</span>：开关量主轴；<span lang=EN-US>1</span>：模拟主轴；<span lang=EN-US>2</span>：串行主轴）</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal><b><span lang=EN-US>&nbsp;</span></b></p>

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

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 align=left
 style='border-collapse:collapse;margin-left:6.75pt;margin-right:6.75pt'>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>K0013</span></p>
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
   "Arial",sans-serif'>EMS</span></p>
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
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.45pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=15 style='margin-left:0cm;line-height:18.0pt'><span lang=EN-US
style='font-family:宋体'>&nbsp;</span></p>

<p class=15 style='margin-left:0cm;line-height:18.0pt'><span lang=EN-US
style='font-family:宋体'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
EMS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=0: </span><span style='font-family:
宋体'>多主轴功能无效</span></p>

<p class=15 style='margin-left:0cm;line-height:18.0pt'><span lang=EN-US
style='font-family:宋体'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;=1</span><span
style='font-family:宋体'>：多主轴功能有效<span lang=EN-US> </span></span></p>

<p class=MsoNormal style='margin-left:21.0pt'><b><span lang=EN-US>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>多主轴功能说明</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>S</span><span
style='font-family:宋体'>代码作为指定选定主轴速度旋转，如果一个主轴对应的选择信号没有选通，它将以之前的速度继续旋转。这样就能实现多个主轴在同一时间内以不同的速度旋转。</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>多主轴控制说明</span></b></p>

<p class=MsoNormal style='margin-left:42.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>&Oslash;<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span style='font-family:宋体'>多主轴功能只有主轴处于模拟电压方式控制下才有效</span></p>

<p class=MsoNormal style='margin-left:42.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>&Oslash;<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-US>M03/M04 S</span><span style='font-family:宋体'>□□□□</span>
<span style='font-family:宋体'>切换为第一主轴且主轴正反转</span></p>

<p class=MsoNormal style='margin-left:42.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>&Oslash;<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-US>M73/M74 S</span><span style='font-family:宋体'>□□□□</span>
<span style='font-family:宋体'>切换为第二主轴且主轴正反转</span></p>

<p class=MsoNormal style='margin-left:42.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>&Oslash;<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-US>M05/M75 </span><span style='font-family:宋体'>第一主轴</span><span
lang=EN-US>/</span><span style='font-family:宋体'>第二主轴停止正反转</span></p>

<p class=MsoNormal style='margin-left:42.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>&Oslash;<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span style='font-family:宋体'>操作面板逆时针转按键灯、主轴停止按键灯、顺时针转按键灯只反应第一主轴的旋转状态，不反映第二主轴的旋转状态</span></p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>时序图</span></b></p>

<p class=MsoNormal><span lang=EN-US><img width=561 height=239
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/%E6%A0%87%E5%87%86PLC%E5%9B%BE%E7%89%87/part3_2/image001.png"></span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>控制逻辑</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
lang=EN-US>CNC</span><span style='font-family:宋体'>上电后，系统当前处于第一主轴状态。系统通过</span><span
lang=EN-US>M03</span><span style='font-family:宋体'>、</span><span lang=EN-US>M04</span><span
style='font-family:宋体'>控制第一主轴的正反转输出。</span><span lang=EN-US>M73</span><span
style='font-family:宋体'>、</span><span lang=EN-US>M74</span><span
style='font-family:宋体'>为切换到第二主轴进行主轴正反转输出。完成切换后，对当前主轴的控制逻辑跟主轴旋转中的主轴控制逻辑一致。</span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
style='font-family:宋体'>如当前第二主轴处于顺时针转或逆时针转状态，则执行</span><span lang=EN-US>M74</span><span
style='font-family:宋体'>或</span><span lang=EN-US>M73</span><span
style='font-family:宋体'>时，产生</span><span lang=EN-US>PLC</span><span
style='font-family:宋体'>报警</span><span lang=EN-US>A0.7</span><span
style='font-family:宋体'>：</span><span lang=EN-US>M73</span><span
style='font-family:宋体'>、</span><span lang=EN-US>M74</span><span
style='font-family:宋体'>指定错误。</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>1</span>：输入<span lang=EN-US>S</span>值为指定主轴下的速度变更</span></b></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>2</span>：切换主轴时，如果将要切换的主轴正在旋转，则切换时，必须输入跟将要切换主轴旋转方向一致的<span
lang=EN-US>M</span>指令或者先停止将要切换的主轴旋转，否则将产生<span lang=EN-US>PLC</span>报警：主轴旋转方向指定错误。</span></b></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>3</span>：<span lang=EN-US>CNC</span>外部急停或者主轴报警时，关闭多主轴旋转输出信号，同时输出停止信号</span></b></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><b><span
style='font-family:楷体_GB2312'>注<span lang=EN-US>4</span>：串行主轴控制时不需要连接<span
lang=EN-US>I/O</span>信号，系统和伺服通过总线进行通讯（主轴正转信号：<span lang=EN-US>G74.5</span>，珠主轴反转信号：<span
lang=EN-US>G74.4</span>）。</span></b></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>
`
