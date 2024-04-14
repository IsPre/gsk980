export const part3_275=`
<div class=WordSection1 style='layout-grid:15.6pt 0pt'>

<h4><span lang=EN-US>3.27.5 </span><span style='font-family:宋体'>操作说明</span></h4>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>在将<span
lang=EN-US>K</span>参数<span lang=EN-US>K11.6=1</span>和状态参数<span lang=EN-US>No173.6=0</span>设置完以后，可以对斗笠式刀库进行操作。</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.27.5</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.1</span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>刀盘机械回零</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>设置<span lang=EN-US>K12.7=1</span>，在回零方式下，按顺时针选刀按键，刀盘旋转，当检测到零点信号（<span
lang=EN-US>X0.0</span>）信号以后，刀盘停止旋转。该功能可用于系统调试以及重新更换刀具时使用。</p>

<h5><span lang=EN-US style='font-size:10.5pt;line-height:155%'>3.27.5.2 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>手动选刀</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>在手轮、手动、单步方式下，设置<span lang=EN-US>K21.2=0</span>，按系统面板顺时针<span
lang=EN-US>/</span>逆时针选刀按键，刀盘将顺时针<span lang=EN-US>/</span>逆时针旋转一个刀位，完成手动换刀。</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.27.5</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.3 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>宏程序调用换刀流程</span></h5>

<p class=MsoNormal><span lang=EN-US><img width=661 height=566
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/%E6%A0%87%E5%87%86PLC%E5%9B%BE%E7%89%87/part3_275/image001.png"></span></p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.27.5</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.4 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>异常处理</span></h5>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>当刀盘出现乱刀的时候处理如下：</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>当前刀套处于正确的刀具倒下的位置上，则只需在录入方式下，打开参数开关，将当前刀套号输入<span
lang=EN-US>D409</span>、<span lang=EN-US>D410</span>内即完成调整。</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.27.5</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.5 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>相关报警和限制</span></h5>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=621
 style='width:465.4pt;border-collapse:collapse'>
 <thead>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><b>报警地址</b></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><b>报警号</b></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border:solid windowtext 1.0pt;
   border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><b>报警内容</b></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border:solid windowtext 1.0pt;
   border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><b>互锁逻辑</b></p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>F45.2</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A0.4</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>主轴定向时<span
   lang=EN-US>,</span>检测定向反馈信号超时<span lang=EN-US>(F45.2)</span></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>检查主轴定向超时，停止定向</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X0.2</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A1.1</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>气缸压力低</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>压力低不能进行正确的换刀</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A1.2</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>刀盘旋转时间过长</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>避免刀盘旋转损坏</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X2.2</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A1.3</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>刀盘电机过载</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>刀盘过载停止操作刀库</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X0.6</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A1.6</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>斗笠刀库启动刀盘旋转时，</p>
   <p class=MsoNormal style='text-indent:15.75pt'><span lang=EN-US>Z</span>轴未离开第<span
   lang=EN-US>2</span>参考点</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>防止损坏刀盘</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.7</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A2.0</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>松刀检测超时报警</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>松刀没到位松刀时间过长</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X2.0</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A2.1</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>紧刀检测超时报警</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>紧刀没到位松刀时间过长</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.7</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A2.2</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>松刀状态下不能主轴旋转</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>松刀下不能旋转</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X2.0</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A2.3</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>主轴旋转下不能主轴松紧刀</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>主轴旋转不能松紧刀</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X0.7</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A4.5</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>斗笠刀库刀盘进检查信号超时，</p>
   <p class=MsoNormal style='text-indent:10.5pt'>请检查完成信号<span lang=EN-US>(X0.7)</span></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>没能检测到刀盘前进到位信号，超时</p>
   </td>
  </tr>
  <tr>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X0.6</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A4.6</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>斗笠刀库刀盘退检查信号超时，</p>
   <p class=MsoNormal style='text-indent:10.5pt'>请检查完成信号<span lang=EN-US>(X0.6)</span></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>没能检测到刀盘后退到位信号超时</p>
   </td>
  </tr>
 </thead>
</table>

</div>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.27.5</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.6 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>注意事项</span></h5>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>1</span>、<span
lang=EN-US>CNC</span>界面显示的<span lang=EN-US>T</span>代表当前主轴上使用的刀号，并不是当前刀盘的刀盘号；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>2</span>、在自动、录入、<span
lang=EN-US>DNC</span>方式下指定的<span lang=EN-US>T</span>指令代表刀号<span lang=EN-US>,</span>并不是刀盘号；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>3</span>、刀盘选刀时，只是刀盘旋转刀相应刀位，<span
lang=EN-US>CNC</span>界面的<span lang=EN-US>T</span>显示不变；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>4</span>、在回零方式下，按面板换刀键（<span
lang=EN-US>980MDi</span>竖式），刀盘旋转到刀套号为<span lang=EN-US>1</span>的位置，<span
lang=EN-US>CNC</span>界面的<span lang=EN-US>T</span>显示不变；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>5</span>、数据参数<span
lang=EN-US>5025</span>、<span lang=EN-US>5026</span>的设置值要和刀盘的刀套数一致。</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>&nbsp;</span></p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

`