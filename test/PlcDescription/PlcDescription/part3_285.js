export const part3_285=`
<div class=WordSection1 style='layout-grid:15.6pt 0pt'>

<h4><span lang=EN-US>3.28.5 </span><span style='font-family:宋体'>操作说明</span></h4>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>在将<span
lang=EN-US>K</span>参数<span lang=EN-US>K11.7=1</span>、<span lang=EN-US>K11.6=1</span>和状态参数<span
lang=EN-US>No173.6=0</span>设置完以后，可以对炮塔刀库进行操作。</p>

<h5><span lang=EN-US style='font-size:10.5pt;line-height:155%'>3.28.5.1</span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>刀盘机械回零</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>在回零方式下，按刀库回零按键，刀盘旋转，当同时检测到零点信号（<span
lang=EN-US>X0.0</span>）信号及刀位计数信号（<span lang=EN-US>X0.4</span>）以后，刀盘停止旋转。系统更新刀号为<span
lang=EN-US>1</span>号刀。</p>

<h5><span lang=EN-US style='font-size:10.5pt;line-height:155%'>3.28.5.2</span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>手动选刀</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>在手轮、手动、单步方式下，按系统面板顺时针<span
lang=EN-US>/</span>逆时针选刀按键，刀盘将顺时针<span lang=EN-US>/</span>逆时针旋转一个刀位，完成手动换刀。</p>

<h5><span lang=EN-US style='font-size:10.5pt;line-height:155%'>3.28.5.3 </span><span
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
   none;vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A6.2</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>主轴没定向，不能进入换刀区</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>防止损坏刀盘</p>
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
   none;vertical-align:bottom'><span lang=EN-US>A6.3</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span>轴不在第<span
   lang=EN-US>2</span>参考点，不能旋转刀盘</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>防止损坏刀盘</p>
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
   none;vertical-align:bottom'><span lang=EN-US>A6.4</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span>轴不在第<span
   lang=EN-US>2</span>参考点，不能进行刀库回零</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>防止损坏刀盘</p>
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
   none;vertical-align:bottom'><span lang=EN-US>A6.5</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>在换刀区内不能启动程序，避免撞刀</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>防止损坏刀盘</p>
   </td>
  </tr>
 </thead>
</table>

</div>

<h5><span lang=EN-US style='font-size:10.5pt;line-height:155%'>3.28.5.4</span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>注意事项</span></h5>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>1</span>、刀盘旋转时，<span
lang=EN-US>Z</span>轴需先返回第二参考点（<span lang=EN-US>G91 G30 Z0</span>）</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>2</span>、单独执行<span
lang=EN-US>T</span>指令时系统不进行刀盘旋转，执行<span lang=EN-US>M60</span>后进行刀盘旋转控制。</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>&nbsp;</span></p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

`