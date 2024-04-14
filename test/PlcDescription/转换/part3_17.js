export const part3_17=`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h3><span lang=EN-US>3.17 </span>复位时光标返回</h3>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt;line-height:
18.0pt'><span lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
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
  <td width=71 style='width:52.9pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 1.4pt 0cm 1.4pt'>
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
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>MDI</span><span
  style='font-family:宋体'>面板复位键</span></p>
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
  vertical-align:bottom'><span lang=EN-US>X24.0</span></p>
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

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

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
  "Arial",sans-serif'>&nbsp;</span></p>
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
  "Arial",sans-serif'>RESB</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal style='text-indent:31.5pt;text-autospace:none;vertical-align:
bottom'><span lang=EN-US>RESB&nbsp; =1: &nbsp;</span><span style='font-family:
宋体'>复位时光标返回功能有效；</span></p>

<p class=MsoNormal style='text-indent:68.25pt;text-autospace:none;vertical-align:
bottom'><span lang=EN-US>=0: &nbsp;</span><span style='font-family:宋体'>复位时光标返回功能无效。</span></p>

<p class=MsoNormal style='text-indent:63.0pt;text-autospace:none;vertical-align:
bottom'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt;line-height:
18.0pt'><span lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>功能说明</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>当</span><span
lang=EN-US>K10</span><span style='font-family:宋体'>的</span><span lang=EN-US>RESB</span><span
style='font-family:宋体'>设置为</span><span lang=EN-US>1</span><span
style='font-family:宋体'>时，在自动方式下按复位键</span><span lang=EN-US>(X24.0)</span><span
style='font-family:宋体'>时，系统复位且光标返回程序开头。</span></p>

</div>

`