export const part3_24=`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h3><span lang=EN-US>3.24 </span>抱闸控制</h3>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>相关信号</span></b></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='height:23.45pt'>
  <td width=75 style='width:56.1pt;border:solid black 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:23.45pt'>
  <p class=Default align=center style='text-align:center'><b><span
  style='font-size:10.5pt;color:windowtext'>信号类型</span></b></p>
  </td>
  <td width=112 style='width:83.85pt;border:solid black 1.0pt;border-left:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:23.45pt'>
  <p class=Default align=center style='text-align:center'><b><span
  style='font-size:10.5pt;color:windowtext'>地址符号</span></b></p>
  </td>
  <td width=135 style='width:101.25pt;border-top:solid black 1.0pt;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:23.45pt'>
  <p class=Default align=center style='text-align:center'><b><span
  style='font-size:10.5pt;color:windowtext'>信号意义</span></b></p>
  </td>
  <td width=70 style='width:52.8pt;border-top:solid black 1.0pt;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:23.45pt'>
  <p class=Default align=center style='text-align:center'><b><span lang=EN-US
  style='font-size:10.5pt;color:windowtext'>CNC</span></b><b><span
  style='font-size:10.5pt;color:windowtext'>引脚</span></b></p>
  </td>
  <td width=76 style='width:57.25pt;border:solid black 1.0pt;border-left:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:23.45pt'>
  <p class=Default align=center style='text-align:center'><b><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>PLC</span></b><b><span
  style='font-size:10.5pt;color:windowtext'>地址</span></b></p>
  </td>
  <td width=74 style='width:55.25pt;border:solid black 1.0pt;border-left:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:23.45pt'>
  <p class=Default align=center style='text-align:center'><b><span lang=EN-US
  style='font-size:10.5pt;color:windowtext'>CNC</span></b><b><span
  style='font-size:10.5pt;color:windowtext'>诊断</span></b></p>
  </td>
 </tr>
 <tr style='height:9.05pt'>
  <td width=75 valign=top style='width:56.1pt;border-top:none;border-left:solid black 1.0pt;
  border-bottom:none;border-right:solid black 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:9.05pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>输出信号</span></p>
  </td>
  <td width=112 style='width:83.85pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:9.05pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>SRDY</span></p>
  </td>
  <td width=135 style='width:101.25pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:9.05pt'>
  <p class=Default align=center style='text-align:center'><span
  style='font-size:10.5pt;color:windowtext'>抱闸控制信号输出</span></p>
  </td>
  <td width=70 style='width:52.8pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:9.05pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;color:windowtext'>CN62.3</span></p>
  </td>
  <td width=76 valign=top style='width:57.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:9.05pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y0.2</span></p>
  </td>
  <td width=74 valign=top style='width:55.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:9.05pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>相关参数</span></b></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>K0018</span></p>
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
  "Arial",sans-serif'>SRID</span></p>
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

</div>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:21.0pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US>SRID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
=1</span><span style='font-family:宋体'>：系统控制抱闸功能有效；</span></p>

<p class=MsoNormal style='margin-left:105.0pt;text-indent:5.25pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
=0</span><span style='font-family:宋体'>：系统控制抱闸功能无效。</span></p>

<p class=MsoNormal style='margin-left:105.0pt;text-indent:5.25pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>DT37</span></p>
  </td>
  <td width=41 valign=top style='width:30.8pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=442 valign=top style='width:331.3pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>系统上电后松开抱闸的延时时间。初始化为</span><span
  lang=EN-US style='font-family:"Arial",sans-serif'>4s</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal style='margin-left:105.0pt;text-indent:5.25pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>功能描述</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>系统上电后延时</span><span
lang=EN-US>DT37</span><span style='font-family:宋体'>设定的时间输出抱闸松开信号</span><span
lang=EN-US>Y0.2</span><span style='font-family:宋体'>。当产生急停报警或驱动报警时，关闭</span><span
lang=EN-US>Y0.2</span><span style='font-family:宋体'>输出，使</span><span lang=EN-US>Z</span><span
style='font-family:宋体'>轴电机抱闸，直到报警消除后再输出</span><span lang=EN-US>Y0.2</span><span
style='font-family:宋体'>。</span></p>

</div>

`