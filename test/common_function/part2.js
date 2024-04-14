export const part2=
`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h1><span lang=EN-US>2</span>、钻孔攻丝电流检测功能</h1>

<h2><a name="_Toc96522496"><span lang=EN-US>2.1</span>功能说明</a></h2>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>在钻孔或者攻丝的时候，如果出现进给轴或主轴的电流超过一定范围，将导致刀具损坏的时候，系统将提前结束钻孔或者攻丝，并返回到初始平面，提示用户进行刀具或者工艺检测。</p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US><img
width=201 height=180 id="图片 38" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image045.jpg"></span></p>

<h2><a name="_Toc96522497"><span lang=EN-US>2.2</span>通过编程来指定电流检测</a></h2>

<p class=MsoNormal>参数设置：</p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=57 valign=top style='width:43.1pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>No.586</span></p>
  </td>
  <td width=58 valign=top style='width:43.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=57 valign=top style='width:43.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=58 valign=top style='width:43.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=57 valign=top style='width:43.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=58 valign=top style='width:43.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=57 valign=top style='width:43.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=58 valign=top style='width:43.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=58 valign=top style='width:43.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>JOCK</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; JOCK&nbsp;
==0&nbsp; </span>钻孔、攻丝指定<span lang=EN-US>E</span>值检测电流超限时，<span lang=EN-US>Z</span>轴检测有效</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
==1&nbsp; </span>钻孔、攻丝指定<span lang=EN-US>E</span>值检测电流超限时，主轴检测有效</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=518
 style='width:388.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=63 valign=top style='width:47.3pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>FIXTIME</span></p>
  </td>
  <td width=39 valign=top style='width:29.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>5128</span></p>
  </td>
  <td width=415 valign=top style='width:311.45pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span style='font-size:
  9.0pt'>钻孔检测到电流超限后的延时时间（<span lang=EN-US>ms</span>）</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=518
 style='width:388.15pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=65 valign=top style='width:49.1pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>TAPTIME</span></p>
  </td>
  <td width=39 valign=top style='width:29.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>5138</span></p>
  </td>
  <td width=413 valign=top style='width:309.65pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span style='font-size:
  9.0pt'>攻丝检测到电流超限后的延时时间（<span lang=EN-US>ms</span>）</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal>指令说明（以<span lang=EN-US>G81</span>为例）：</p>

<p class=MsoNormal><span lang=EN-US>G81&nbsp; X_&nbsp; Y_&nbsp; R_&nbsp;
Z_&nbsp; E_</span></p>

<p class=MsoNormal>说明：</p>

<p class=MsoNormal><span lang=EN-US>1</span>）<span lang=EN-US>E</span>值指定的是一个百分比数值，为电机额定电流的百分比，如指定<span
lang=EN-US>60</span>，检测值为额定电流的<span lang=EN-US>60%</span>，范围（<span lang=EN-US>0</span>～<span
lang=EN-US>150%</span>），大于<span lang=EN-US>150</span>，仍然按<span lang=EN-US>150</span>计算。</p>

<p class=MsoNormal><span lang=EN-US>2</span>）<span lang=EN-US>E</span>值指定为<span
lang=EN-US>0</span>的时候，检测功能无效</p>

<p class=MsoNormal><span lang=EN-US>3</span>）<span lang=EN-US>E</span>值指定的时候，可以通过参数<span
lang=EN-US>No.586</span>来设置检测轴是否有效</p>

<p class=MsoNormal><span lang=EN-US>4</span>）<span lang=EN-US>E</span>值为模态指令</p>

<p class=MsoNormal><span lang=EN-US>5</span>）如果是钻孔循环，检测到电流超限连续超限的时间小于检测延时时间<span
lang=EN-US>No.5128</span>，则不执行超限返回，系统继续执行钻孔，如果连续超限时间大于检测时间<span lang=EN-US>No.5128</span>，则立即执行超限返回。</p>

<p class=MsoNormal><span lang=EN-US>6</span>）如果是攻丝循环，检测到电流超限连续超限的时间小于检测延时时间<span
lang=EN-US>No.5138</span>，则不执行超限返回，系统继续执行攻丝，如果连续超限时间大于检测时间<span lang=EN-US>No.5138</span>，则立即执行超限返回。</p>

<h2><a name="_Toc96522498"><span lang=EN-US>2.3 </span>通过参数来设置电流超限值</a></h2>

<h3><a name="_Toc96522499"><span lang=EN-US>2.3.1 </span>钻孔设置电流超限</a></h3>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=556
 style='width:416.75pt;margin-left:21.0pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=53 valign=top style='width:40.05pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>FIXZCK</span></p>
  </td>
  <td width=39 valign=top style='width:29.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>5126</span></p>
  </td>
  <td width=463 valign=top style='width:347.3pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>Z</span><span style='font-size:9.0pt'>轴钻孔检测电流超限与额定电流的百分比（<span
  lang=EN-US>0</span>～<span lang=EN-US>150%</span>），<span lang=EN-US>0</span>：<span
  lang=EN-US>Z</span>轴检测无效</span></p>
  </td>
 </tr>
 <tr>
  <td width=53 valign=top style='width:40.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>FIXSPCK</span></p>
  </td>
  <td width=39 valign=top style='width:29.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>5127</span></p>
  </td>
  <td width=463 valign=top style='width:347.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span style='font-size:
  9.0pt'>主轴钻孔检测电流超限与额定电流的百分比（<span lang=EN-US>0</span>～<span lang=EN-US>150%</span>），<span
  lang=EN-US>0</span>：主轴检测无效</span></p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><span
lang=EN-US>&nbsp;</span></p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=556
 style='width:416.75pt;margin-left:21.0pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=54 valign=top style='width:40.65pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>FIXTIME</span></p>
  </td>
  <td width=39 valign=top style='width:29.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>5128</span></p>
  </td>
  <td width=462 valign=top style='width:346.7pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span style='font-size:
  9.0pt'>钻孔检测到电流超限后的延时时间（<span lang=EN-US>ms</span>）</span></p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><b>说明：</b></p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><span
lang=EN-US>1</span>） 当钻孔指定<span lang=EN-US>E</span>值检测的时，通过参数来检测电流超限功能无效</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><span
lang=EN-US>2</span>） 当未指定<span lang=EN-US>E</span>值，通过参数设置检测电流超限功能有效，如果只检测其中的一个轴，请将另外一个轴的检测值设置为<span
lang=EN-US>0</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3</span>）
设置的参数为百分比值，如指定<span lang=EN-US>60</span>，检测值为电机额定电流的<span lang=EN-US>60%</span></p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><span
lang=EN-US>4</span>） 当钻孔检测到电流超限后，如果连续超限的时间小于检测延时时间<span lang=EN-US>No.5128</span>，则不执行超限返回，系统仍然继续执行钻孔，如果连续超限时间大于检测时间<span
lang=EN-US>No.5128</span>，则立即执行超限返回。</p>

<h3><a name="_Toc96522500"><span lang=EN-US>2.3.2 </span>攻丝设置电流超限值</a></h3>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=556
 style='width:416.75pt;margin-left:21.0pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=53 valign=top style='width:40.05pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>TAPZCK</span></p>
  </td>
  <td width=39 valign=top style='width:29.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>5136</span></p>
  </td>
  <td width=463 valign=top style='width:347.3pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>Z</span><span style='font-size:9.0pt'>轴攻丝检测电流超限与额定电流的百分比（<span
  lang=EN-US>0</span>～<span lang=EN-US>150%</span>），<span lang=EN-US>0</span>：<span
  lang=EN-US>Z</span>轴检测无效</span></p>
  </td>
 </tr>
 <tr>
  <td width=53 valign=top style='width:40.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>TAPSPCK</span></p>
  </td>
  <td width=39 valign=top style='width:29.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>5137</span></p>
  </td>
  <td width=463 valign=top style='width:347.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span style='font-size:
  9.0pt'>主轴攻丝检测电流超限与额定电流的百分比（<span lang=EN-US>0</span>～<span lang=EN-US>150%</span>），<span
  lang=EN-US>0</span>：主轴检测无效</span></p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><span
lang=EN-US>&nbsp;</span></p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=556
 style='width:416.75pt;margin-left:21.0pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=57 valign=top style='width:43.05pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>TAPTIME</span></p>
  </td>
  <td width=39 valign=top style='width:29.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span lang=EN-US
  style='font-size:9.0pt'>5138</span></p>
  </td>
  <td width=459 valign=top style='width:344.3pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoListParagraph style='text-indent:0cm'><span style='font-size:
  9.0pt'>攻丝检测到电流超限后的延时时间（<span lang=EN-US>ms</span>）</span></p>
  </td>
 </tr>
</table>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><b>说明：</b></p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><span
lang=EN-US>1</span>） 当攻丝指定<span lang=EN-US>E</span>值检测的时，通过参数来检测电流超限功能无效</p>

<p class=MsoListParagraph style='margin-left:21.0pt;text-indent:0cm'><span
lang=EN-US>2</span>） 当未指定<span lang=EN-US>E</span>值，通过参数设置检测电流超限功能有效，如果只检测其中的一个轴，请将另外一个轴的检测值设置为<span
lang=EN-US>0</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3</span>）
设置的参数为百分比值，如指定<span lang=EN-US>60</span>，检测值为电机额定电流的<span lang=EN-US>60%</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4</span>）
如果是攻丝循环，检测到电流超限连续超限的时间小于检测延时时间<span lang=EN-US>No.5138</span>，则不执行超限返回，系统继续执行攻丝，如果连续超限时间大于检测时间<span
lang=EN-US>No.5138</span>，则立即执行超限返回。</p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>
`