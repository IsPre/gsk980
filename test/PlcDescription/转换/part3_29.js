export const part3_29=`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h3><span lang=EN-US>3.29 &nbsp; M10/M11</span>翻转控制</h3>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt;line-height:
18.0pt'><span lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span style='font-family:宋体'>相关信号</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 align=left
 style='border-collapse:collapse;margin-left:6.75pt;margin-right:6.75pt'>
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
  <td width=71 style='width:52.9pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>输出信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>ALTO</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>M10M11</span><span
  style='font-family:宋体'>翻转输出信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>CN62.36</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>Y2.7</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=71 rowspan=2 style='width:52.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>控制指令</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>M10</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y2.7</span><span
  style='font-family:宋体'>输出</span></p>
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
  vertical-align:bottom'><span lang=EN-US>M11</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y2.7</span><span
  style='font-family:宋体'>取消输出</span></p>
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

<p class=MsoNormal style='margin-left:51.25pt;text-indent:-17.95pt;line-height:
18.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:51.25pt;text-indent:-17.95pt;line-height:
18.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:51.25pt;text-indent:-17.95pt;line-height:
18.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

`