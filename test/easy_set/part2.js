export const part2=
`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h1 style='margin-bottom:0cm;line-height:normal'><span lang=EN-US
style='font-size:16.0pt'>2</span><span style='font-size:16.0pt'>、轴相关设置</span></h1>

<h2 style='margin:0cm'><span lang=EN-US style='font-size:10.5pt;line-height:
173%'>2.1 &nbsp;</span><span style='font-size:10.5pt;line-height:173%'>进给轴设置</span></h2>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=584
 style='width:437.75pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><a name="OLE_LINK1"></a><a name="OLE_LINK2"><span
  lang=EN-US>No.1010</span></a></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border:solid black 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>系统可设置的轴数</p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.187</span></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>设置轴类型</p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='color:#CC00FF'>参考设置值：</span></p>

<p class=MsoNormal><span lang=EN-US style='color:#CC00FF'>1010=5</span></p>

<p class=MsoNormal><span style='color:#CC00FF'>直线轴：<span lang=EN-US>187=00000000</span></span></p>

<p class=MsoNormal><span style='color:#CC00FF'>旋转轴：<span lang=EN-US>187=00000001</span></span></p>

<p class=MsoNormal><span style='color:#CC00FF'>轴无效：<span lang=EN-US>187=00000010</span></span></p>

<p class=MsoNormal><b>注：<span lang=EN-US>1</span>）使用伺服主轴时需要把<span lang=EN-US>C</span>轴设为旋转轴，以便使用刚性攻丝功能。</b></p>

<p class=MsoNormal style='text-indent:21.0pt'><b><span lang=EN-US>2</span>）<span
lang=EN-US>X</span>、<span lang=EN-US>Y</span>、<span lang=EN-US>Z</span>轴目前不能设置为旋转轴，如需这三个基本轴为旋转轴，请联系开发部。</b></p>

<h2 style='margin:0cm'><span lang=EN-US style='font-size:10.5pt;line-height:
173%'>2.2&nbsp; </span><span style='font-size:10.5pt;line-height:173%'>主轴设置</span></h2>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=584
 style='width:437.75pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.3710</span></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border:solid black 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>系统主轴数，默认值为<span lang=EN-US>1</span>，根据机床主轴个数修改</p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.3712</span></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>各主轴类型<span lang=EN-US>&nbsp;&nbsp; 0</span>：开关量主轴<span
  lang=EN-US>&nbsp; 1</span>：模拟主轴<span lang=EN-US>&nbsp;&nbsp; 2</span>：串行主轴</p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.3724</span></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>各主轴对于德主轴编码器编号，<span lang=EN-US>0</span>：为安装编码器，<span
  lang=EN-US>1</span>：主轴编码器来自于编码器接口<span lang=EN-US>1</span>，<span lang=EN-US>2</span>：主轴转速编号来源于编码器器接口<span
  lang=EN-US>2</span>，<span lang=EN-US>3</span>：主轴转速信号来自于<span lang=EN-US>GSKLINK</span>总线</p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.3760</span></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>各<span lang=EN-US>CS</span>主轴关联的进给轴，<span lang=EN-US>0:CS</span>轴无效，<span
  lang=EN-US>1=X</span>轴，<span lang=EN-US>2=Y</span>轴，<span lang=EN-US>3=Z</span>轴，<span
  lang=EN-US>4=4<sup>th</sup></span>轴，<span lang=EN-US>5=5<sup>th</sup></span>轴</p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.3741</span></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>各主轴第<span lang=EN-US>1</span>档的主轴最高转速</p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='color:#CC00FF'>参考设置值：</span></p>

<p class=MsoNormal><span style='color:#CC00FF'>使用伺服主轴：<span lang=EN-US>3712=2</span>、<span
lang=EN-US>3724=3</span>、<span lang=EN-US>3760=5</span>、<span lang=EN-US>3741</span>设为与驱动器参数<span
lang=EN-US>54</span>相同的值。</span></p>

<p class=MsoNormal><span style='color:#CC00FF'>使用变频器：<span lang=EN-US>3712=1</span>、<span
lang=EN-US>3724=1</span>、<span lang=EN-US>3760=0</span></span></p>

<h2 style='margin:0cm'><span lang=EN-US style='font-size:10.5pt;line-height:
173%'>2.3 &nbsp;</span><span style='font-size:10.5pt;line-height:173%'>驱动单元的轴名指定</span></h2>

<p class=MsoNormal style='text-indent:21.0pt;line-height:125%'>按设置<span
lang=EN-US>-&gt;CNC</span>设置，输入<span lang=EN-US>2</span>级密码，再按<span lang=EN-US><img
width=52 height=23 id="图片 3" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E7%AE%80%E6%98%93%E8%B0%83%E8%AF%95/image002.jpg"></span>菜单，如下图：</p>

<p class=MsoNormal align=left style='text-align:left;text-indent:21.0pt'><span
lang=EN-US><img width=465 height=349 id="图片 8" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E7%AE%80%E6%98%93%E8%B0%83%E8%AF%95/image003.jpg"></span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:125%'>按<span
lang=EN-US><img width=33 height=30 id="图片 17" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E7%AE%80%E6%98%93%E8%B0%83%E8%AF%95/image004.jpg"></span>菜单设置好所有驱动轴名（按照从进给轴到主轴的顺序设置）。如果需要修改单个驱动器的轴名，选中要修改的驱动器后按<span
lang=EN-US><img width=33 height=30 id="图片 16" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E7%AE%80%E6%98%93%E8%B0%83%E8%AF%95/image005.jpg"></span>进行轴名修改。</p>

<h2 style='margin:0cm'><span lang=EN-US style='font-size:10.5pt;line-height:
173%'>2.4 &nbsp;</span><span style='font-size:10.5pt;line-height:173%'>轴方向设置</span></h2>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=584
 style='width:437.75pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.8</span></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border:solid black 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>设置各轴移动方向</p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid black 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.174</span></p>
  </td>
  <td width=520 valign=top style='width:389.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal>设置各手动移动按键方向</p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt;
line-height:125%'><span lang=EN-US>1）<span style='font:7.0pt "Times New Roman"'>
</span></span><span lang=EN-US>X</span>轴往左为正（坐标增大），往右为负（坐标减小）。</p>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt;
line-height:125%'><span lang=EN-US>2）<span style='font:7.0pt "Times New Roman"'>
</span></span><span lang=EN-US>Y</span>轴往外面为正（坐标增大），往里面为负（坐标减小）。</p>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt;
line-height:125%'><span lang=EN-US>3）<span style='font:7.0pt "Times New Roman"'>
</span></span><span lang=EN-US>Z</span>轴往上正（坐标增大），往下为负（坐标减小）。</p>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt;
line-height:125%'><span lang=EN-US>4）<span style='font:7.0pt "Times New Roman"'>
</span></span><span lang=EN-US>A</span>轴（工作台旋转轴）顺时针旋转为正（坐标从<span lang=EN-US>0</span>到<span
lang=EN-US>360</span>），逆时针旋转为负（坐标从<span lang=EN-US>360</span>到<span lang=EN-US>0</span>）</p>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt;
line-height:125%'><span lang=EN-US>5）<span style='font:7.0pt "Times New Roman"'>
</span></span>机床移动方向与坐标变化方向相反时修改<span lang=EN-US>8</span>号参数即可，确保方向无误后再通过<span
lang=EN-US>174</span>号参数调整手动按键方向。</p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>
`