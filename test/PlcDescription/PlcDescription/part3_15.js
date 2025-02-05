export const part3_15=`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h3><span lang=EN-US>3.15 </span>行程限位与急停</h3>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>相关信号</span></b></p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>1</span><span
style='font-family:宋体'>、正负超程信号独立处理：</span></p>

<div align=center>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
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
  <td width=71 rowspan=11 style='width:52.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  <p class=MsoNormal style='text-autospace:none;vertical-align:bottom'><span
  style='font-family:宋体'>输入信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>ESP</span></p>
  </td>
  <td width=230 valign=top style='width:172.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>外接急停信号</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>CN61.6</span></p>
  </td>
  <td width=66 valign=top style='width:49.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>X0.5</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTXN</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X</span><span
  style='font-size:10.5pt;color:windowtext'>轴负向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.36</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X2.7</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTXP</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X</span><span
  style='font-size:10.5pt;color:windowtext'>轴正向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.37</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.0</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTYN</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>Y</span><span
  style='font-size:10.5pt;color:windowtext'>轴负向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.38</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.1</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTYP</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>Y</span><span
  style='font-size:10.5pt;color:windowtext'>轴正向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.39</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.2</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTZN</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>Z</span><span
  style='font-size:10.5pt;color:windowtext'>轴负向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.43</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.6</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTZP</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>Z</span><span
  style='font-size:10.5pt;color:windowtext'>轴正向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.44</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.7</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LT4N</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>4<sup>th</sup></span><span
  style='font-size:10.5pt;color:windowtext'>轴负向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.40</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.3</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LT4P</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>4<sup>th</sup></span><span
  style='font-size:10.5pt;color:windowtext'>轴正向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.41</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.4</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LT5N</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>5<sup>th</sup></span><span
  style='font-size:10.5pt;color:windowtext'>轴负向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.30</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X2.1</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LT5P</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>5<sup>th</sup></span><span
  style='font-size:10.5pt;color:windowtext'>轴正向限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.31</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X2.2</span></p>
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

<p class=02 style='text-indent:25.65pt;line-height:18.0pt;text-autospace:none;
vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>

<p class=02 style='text-indent:25.65pt;line-height:18.0pt;text-autospace:none;
vertical-align:bottom'><span lang=EN-US>2</span>、正负超程信号合用处理时超程信号：</p>

<div align=center>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
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
  <td width=71 rowspan=5 style='width:52.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTXP</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X</span><span
  style='font-size:10.5pt;color:windowtext'>轴限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.37</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.0</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTYN</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>Y</span><span
  style='font-size:10.5pt;color:windowtext'>轴限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.38</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.1</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LTYP</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>Z</span><span
  style='font-size:10.5pt;color:windowtext'>轴限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.39</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.2</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LT4N</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>4<sup>th</sup></span><span
  style='font-size:10.5pt;color:windowtext'>轴限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.40</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.3</span></p>
  </td>
  <td width=70 valign=top style='width:52.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=72 style='width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>LT4P</span></p>
  </td>
  <td width=230 style='width:172.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>5<sup>th</sup></span><span
  style='font-size:10.5pt;color:windowtext'>轴限位</span></p>
  </td>
  <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>CN61.41</span></p>
  </td>
  <td width=66 style='width:49.5pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=Default align=center style='text-align:center'><span lang=EN-US
  style='font-size:10.5pt;font-family:"Times New Roman",serif;color:windowtext'>X3.4</span></p>
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

<p class=02 style='text-indent:25.65pt;line-height:18.0pt;text-autospace:none;
vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>控制参数</span></b></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=32 valign=top style='width:24.15pt;border:solid windowtext 1.5pt;
  border-right:solid windowtext 1.0pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=32 valign=top style='width:24.15pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=32 valign=top style='width:24.15pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>2</span></p>
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
  "Arial",sans-serif'>MESP</span></p>
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
  text-autospace:none;vertical-align:bottom'><b><span lang=EN-US
  style='font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
  </td>
  <td width=55 valign=top style='width:41.45pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><b><span lang=EN-US
  style='font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid'>
  <td width=97 colspan=3 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span style='font-family:宋体'>对应</span><span
  lang=EN-US style='font-family:"Arial",sans-serif'>F</span><span
  style='font-family:宋体'>地址</span></p>
  </td>
  <td width=41 valign=top style='width:30.8pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>F210.3</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><b><span lang=EN-US
  style='font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
  </td>
  <td width=55 valign=top style='width:41.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><b><span lang=EN-US
  style='font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
  </td>
 </tr>
</table>

</div>

<p class=03 style='text-indent:31.5pt;line-height:18.0pt;text-autospace:none;
vertical-align:bottom'><span lang=EN-US style='font-size:10.5pt;font-weight:
normal'>MESP=0</span><span style='font-size:10.5pt;font-weight:normal'>：外接急停功能有效；</span></p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>=1</span>：外接急停功能无效。</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=97 valign=top style='width:72.45pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>K15</span></p>
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
  "Arial",sans-serif'>LTEN1</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>LTEN2</span></p>
  </td>
  <td width=55 valign=top style='width:41.4pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>LT5</span></p>
  </td>
  <td width=55 valign=top style='width:41.45pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>LT4</span></p>
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
  text-autospace:none;vertical-align:bottom'><b><span lang=EN-US
  style='font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
  </td>
  <td width=55 valign=top style='width:41.45pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>LTHL</span></p>
  </td>
 </tr>
</table>

</div>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>LTHL =1: </span>超程信号与<span
lang=EN-US>+24V</span>断开报警；</p>

<p class=02 style='margin-left:16.4pt;text-indent:61.95pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>=O: </span>超程信号与<span
lang=EN-US>+24V</span>导通报警；</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>LT4&nbsp; =1: 4th</span>轴外接超程信号有效；</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;
=0: 4th</span>轴外接超程信号无效；</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>LT5&nbsp; =1: 5th</span>轴外接超程信号有效；</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;
=0: 5th</span>轴外接超程信号无效；<span lang=EN-US> </span></p>

<p class=02 style='margin-left:16.4pt;text-indent:0cm;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>LTEN1,LTEN2 =10: </span><a
name="OLE_LINK8"></a><a name="OLE_LINK9">正负超程信号独立处理</a>；</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;
=01: </span>正负超程信号合用处理；</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>&nbsp; &nbsp;&nbsp;
=00: </span>超程无效；</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;=11</span>：超程无效。</p>

<p class=02 style='margin-left:16.4pt;text-indent:36.1pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt;line-height:
18.0pt'><span lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>机床外部连接</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
style='font-family:宋体'>当</span><span lang=EN-US>LTEN</span><span
style='font-family:宋体'>为</span><span lang=EN-US>0</span><span style='font-family:
宋体'>（不检测轴外接超程信号时），外接急停、行程开关连接方式推荐如下图所示（以三轴为例）：</span></p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US><img
width=494 height=124 id="图片 1" src="part3_15.files/image001.jpg"></span></p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:-21.0pt;line-height:
18.0pt'><span lang=EN-US style='font-family:Wingdings'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><b><span style='font-family:宋体'>控制逻辑</span></b></p>

<p class=MsoNormal style='margin-left:73.5pt;text-indent:-52.5pt;line-height:
18.0pt'><span style='font-family:宋体'>急停控制：当急停开关的触点断开时，</span><span lang=EN-US>ESP</span><span
style='font-family:宋体'>信号与</span><span lang=EN-US>+24V</span><span
style='font-family:宋体'>断开，</span><span lang=EN-US>CNC</span><span
style='font-family:宋体'>急停报警。此时，</span><span lang=EN-US>CNC</span><span
style='font-family:宋体'>停止脉冲输出。除上述处理的功能外，急停报警时也可由梯形图定义其它功能。</span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:18.0pt'><span
lang=EN-US>&nbsp;</span></p>

<p class=02 style='margin-left:89.25pt;text-indent:-68.25pt;line-height:18.0pt;
text-autospace:none;vertical-align:bottom'>超程控制：<span lang=EN-US>1</span>、当出现外接超程报警时，将工作方式切换到手动或者手脉方式下<span
lang=EN-US>,</span>反方向移动报警轴直到超程信号翻转后，按复位键报警解除。</p>

<p class=MsoNormal style='margin-left:86.2pt;text-indent:-21.0pt'><span
lang=EN-US>&nbsp;2</span><span style='font-family:宋体'>、使用正负超程信号合用处理方式时，</span><span
style='font-family:宋体'>每个轴只有一个超程触点，通过轴的移动方向来判断正负超程报警。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

`