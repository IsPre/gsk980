export const part3_266=`
<div class=WordSection1 style='layout-grid:15.6pt 0pt'>

<h4><span lang=EN-US>3.26.6 </span><span style='font-family:宋体'>操作说明</span></h4>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>在将<span
lang=EN-US>K</span>参数<span lang=EN-US>K11.7=1</span>和状态参数<span lang=EN-US>No173.6=0</span>设置完以后，可以对<span
lang=EN-US>BT50</span>类型<span lang=EN-US>20</span>工位及以下的刀库进行操作。（<span
lang=EN-US>BT50</span>刀库逻辑兼容<span lang=EN-US>BT40</span>刀库逻辑）</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.1 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>刀盘机械回零</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>设置<span lang=EN-US>K12.7=1</span>，在回零方式下，按顺时针选刀按键，刀盘旋转，当检测到零点信号（<span
lang=EN-US>X0.0</span>）信号以后，刀盘停止旋转。该功能可用于系统调试以及重新更换刀具时使用。</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.2 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>手动方式下换刀</span></h5>

<p class=MsoNormal style='text-indent:21.0pt'>在手轮、手动、单步方式下，设置<span lang=EN-US>K21.2=0</span>，按系统顺时针<span
lang=EN-US>/</span>逆时针选刀按键，刀盘将顺时针<span lang=EN-US>/</span>逆时针旋转一个刀位，完成手动换刀。</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.3 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>自动方式下换刀流程</span></h5>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US><img width=606
height=673 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/%E6%A0%87%E5%87%86PLC%E5%9B%BE%E7%89%87/part3_266/image001.png"></span></p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.4 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>预选刀功能</span></h5>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:36.75pt'>程序运行时，输入Ｔ指令进行换刀。刀盘立即旋转寻找目标刀套，同时<span
lang=EN-US>T</span>辅助功能结束， 程序继续运行。在调用<span lang=EN-US>M6</span>换刀宏程序后，如果刀盘旋转未结束，则等待刀盘运行结束，再进行刀套动作。编程时，如果在<span
lang=EN-US>M6</span>调用宏程序前完成刀盘旋转，则能减少换刀时间，提高加工效率。</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.5 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>换刀臂动作</span></h5>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.0pt'><span
lang=EN-US>K11.0=0</span>时，需主轴定向和回参考点完成，才能对换刀臂进行动作。</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.0pt'><span
lang=EN-US>K11.0=1</span>开启刀库调试模式时，则可以直接对换刀臂进行动作。</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.6 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>异常处理</span></h5>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>当刀盘出现乱刀的时候处理如下：</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1</span>：当前刀套处于正确的刀具倒下的位置上，则只需在录入方式下，打开参数开关，将正确的对应刀具一一输入到<span
lang=EN-US>D411-D430</span>当中，并最后将当前刀套号输入<span lang=EN-US>D409</span>内即完成调整；</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2</span>：当前刀套未到位且产生刀套错乱时，则需要手动或者自动移动当前刀套到正确的刀具倒下位置上，再在录入方式下，输入对应的刀具信息到<span
lang=EN-US>D411-D430</span>当中，最后将当前刀套号输入<span lang=EN-US>D409</span>内则完成刀具调整。</p>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.7 </span><span
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
   none;vertical-align:bottom'><span lang=EN-US>A1.4</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center'>刀盘旋转时<span
   lang=EN-US>,</span>刀套必须水平到位</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>防止损坏刀盘</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X2.1</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A1.5</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center'>换刀臂电机过载</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>电机过载停止操作刀库</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.7</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A2.0</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center'>松刀检测超时报警</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>松刀没到位松刀时间过长</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X2.0</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A2.1</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center'>紧刀检测超时报警</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>紧刀没到位紧刀时间过长</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.7</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A2.2</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center'>松刀状态下不能主轴旋转</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>松刀下不能旋转</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.5</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A2.3</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center'>主轴旋转下不能主轴松紧刀</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>主轴旋转不能松紧刀</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>&nbsp;</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A3.7</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal><span lang=EN-US>K11.3</span>设为<span lang=EN-US>0</span>，圆盘刀库在刀具夹紧时不能进行刀臂动作</p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'>防止刀具夹紧时进行换刀会损坏机床</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X0.7</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A4.0</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal>圆盘刀库刀套倒下超时，请检查完成信号<span lang=EN-US>(X0.7)</span></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal style='text-autospace:none;vertical-align:bottom'>没检查到倒下完成信号，刀套倒下动作时间过长</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X0.6</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A4.1</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal>圆盘刀库刀套抬起超时，请检查完成信号<span lang=EN-US>(X0.6)</span></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal style='text-autospace:none;vertical-align:bottom'>没检查到抬起完成信号，刀套抬起动作时间过长</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.0</span></p>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.1</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A4.2</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal>圆盘刀库换刀臂换刀检测信号超时，请检查信号<span lang=EN-US>(X1.0</span>、<span
   lang=EN-US>X1.1)</span></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal style='text-autospace:none;vertical-align:bottom'>没检测到抓刀和停止信号，换刀臂动作超时</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.2</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A4.3</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal>圆盘刀库换刀臂回原位检测信号超时，请检查完成信号<span lang=EN-US>(X1.2)</span></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal style='text-autospace:none;vertical-align:bottom'>没检测到刀臂回原点信号，换刀臂动作超时</p>
   </td>
  </tr>
  <tr style='height:13.95pt'>
   <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
   border-top:none;padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.0</span></p>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.1</span></p>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>X1.2</span></p>
   </td>
   <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal align=center style='text-align:center;text-autospace:
   none;vertical-align:bottom'><span lang=EN-US>A4.4</span></p>
   </td>
   <td width=218 valign=top style='width:163.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal>圆盘刀库手动换刀臂旋转检查完成信号超时，请检查信号<span lang=EN-US>(X1.0</span>、<span
   lang=EN-US>X1.1</span>、<span lang=EN-US>X1.2)</span></p>
   </td>
   <td width=259 valign=top style='width:194.2pt;border-top:none;border-left:
   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 1.4pt 0cm 1.4pt;height:13.95pt'>
   <p class=MsoNormal style='text-autospace:none;vertical-align:bottom'>手动下没检查到倒下完成，刀套倒下动作时间按过长</p>
   </td>
  </tr>
 </thead>
</table>

</div>

<h5><span
 lang=EN-US style='font-size:10.5pt;line-height:155%'>3.26.6</span><span
lang=EN-US style='font-size:10.5pt;line-height:155%'>.8 </span><span
style='font-size:10.5pt;line-height:155%;font-family:宋体'>注意事项</span></h5>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>1</span>、<span
lang=EN-US>CNC</span>界面显示的<span lang=EN-US>T</span>代表当前主轴上使用的刀号，并不是当前刀盘的刀盘号；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>2</span>、在自动、录入、<span
lang=EN-US>DNC</span>方式下指定的<span lang=EN-US>T</span>指令代表刀号<span lang=EN-US>,</span>并不是刀盘号；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>3</span>、刀盘选刀时，只是旋转刀盘，预选对应的刀<span
lang=EN-US>,CNC</span>界面的<span lang=EN-US>T</span>显示不变；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>4</span>、刀库回零时，刀盘旋转到刀套号为<span
lang=EN-US>1</span>的位置，<span lang=EN-US>CNC</span>界面的<span lang=EN-US>T</span>显示不变；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>5</span>、执行<span
lang=EN-US>M69</span>时<span lang=EN-US>,</span>当前主轴上的刀号和当前刀套里面的刀具互换并更新当前刀具显示；</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>6</span>、数据参数<span
lang=EN-US>5026</span>的设置值要和刀盘的刀套数一致。</p>

<p class=MsoNormal style='margin-left:21.0pt'><span lang=EN-US>&nbsp;</span></p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>
`