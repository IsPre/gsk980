export const part8=`<div class=WordSection1 style='layout-grid:15.6pt'>

<p class=MsoNormal><b><span lang=EN-US style='font-size:18.0pt'>8</span></b><b><span
style='font-size:18.0pt;font-family:宋体'>、</span></b><b><span lang=EN-US
style='font-size:18.0pt'>980MDi </span></b><b><span style='font-size:18.0pt;
font-family:宋体'>周边轴</span></b></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h3><span style='font-family:宋体'>概述</span></h3>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>周边轴功能，是一个简化版的多通道功能。</span></p>

<p class=MsoNormal><span style='font-family:宋体'>系统共有</span><span lang=EN-US>6</span><span
style='font-family:宋体'>个周边轴控制组。每个周边轴控制组，如同一个独立的通道控制，可以独立编程，并可以与主程序同时运行。</span></p>

<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;
color:#004080'><img width=409 height=234 id="图片 1"
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image001.jpg"></span></p>

<h3><span style='font-family:宋体'>周边轴设置</span></h3>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>系统共有</span><span
lang=EN-US>6</span><span style='font-family:宋体'>组周边轴控制，且每组周边轴控制，最多可控制</span><span
lang=EN-US>6</span><span style='font-family:宋体'>个轴。各周边轴的脉冲输出端口，由参数</span><span
lang=EN-US>7100#~7105#</span><span style='font-family:宋体'>设置。</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>周边轴控制组结构如下：</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US><img width=294
height=187 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image002.png"></span></p>

<h3><span style='font-family:宋体'>编程格式</span></h3>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>每组周边轴控制中，只可运行</span><span
lang=EN-US>5</span><span style='font-family:宋体'>个特定程序号的程序。这</span><span
lang=EN-US>5</span><span style='font-family:宋体'>个特定的程序名，由参数</span><span
lang=EN-US>7130#~7135#</span><span style='font-family:宋体'>设置。</span></p>

<h4><span style='font-family:宋体'>周边轴程序的编写</span></h4>

<p class=MsoNormal style='margin-left:18.0pt'><span style='font-family:宋体'>在周边轴专用程序号里，编写对应的周边轴控制程序。编写方法与普通程序编写一致。（周边轴专用程序号，由参数</span><span
lang=EN-US>7130#~7135#</span><span style='font-family:宋体'>设置）。</span></p>

<h4><span style='font-family:宋体'>周边轴程序启动指令</span></h4>

<p class=MsoNormal><span style='font-family:宋体'>在主程序中，通过执行特定</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码，作为调出和执行周边轴程序的开始指令。这些特定</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码，称为周边轴程序启动</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码。由参数</span><span lang=EN-US>7130#~7135#</span><span
style='font-family:宋体'>设置。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>例</span><span lang=EN-US>1</span><span
style='font-family:宋体'>）使用一组周边轴的情况</span></p>

<p class=MsoNormal><span lang=EN-US><img width=516 height=460 id="图片 9"
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image003.png"></span></p>

<p class=MsoNormal><b><span style='font-family:宋体'>注：</span></b><span
style='font-family:宋体'>①</span><span lang=EN-US>~</span><span style='font-family:
宋体'>③录入的周边轴程序，存储在</span><span lang=EN-US>O8011</span><span style='font-family:
宋体'>号程序中；且④中的</span><span lang=EN-US>M8011</span><span style='font-family:宋体'>，都由参数</span><span
lang=EN-US>7130#=8011</span><span style='font-family:宋体'>实现。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>例</span><span lang=EN-US>2</span><span
style='font-family:宋体'>）使用两组周边轴的情况</span></p>

<p class=MsoNormal><span lang=EN-US><img width=558 height=508 id="图片 11"
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image004.jpg"></span></p>

<p class=MsoNormal><span style='font-family:宋体'>注：</span></p>

<p class=MsoNormal><span lang=EN-US>1</span><span style='font-family:宋体'>）①</span><span
lang=EN-US>~</span><span style='font-family:宋体'>③录入的周边轴程序，存储在</span><span
lang=EN-US>O8011</span><span style='font-family:宋体'>号程序中；且⑦中的</span><span
lang=EN-US>M8011</span><span style='font-family:宋体'>，由参数</span><span
lang=EN-US>7130#= 8011</span><span style='font-family:宋体'>实现。</span></p>

<p class=MsoNormal><span lang=EN-US>2)</span><span style='font-family:宋体'>④</span><span
lang=EN-US>~</span><span style='font-family:宋体'>⑥录入的周边轴程序，存储在</span><span
lang=EN-US>O8021</span><span style='font-family:宋体'>号程序中；且⑧中的</span><span
lang=EN-US>M8021</span><span style='font-family:宋体'>，由参数</span><span
lang=EN-US>7131#=8021</span><span style='font-family:宋体'>实现。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>例</span><span lang=EN-US>3</span><span
style='font-family:宋体'>）</span><span lang=EN-US>1</span><span style='font-family:
宋体'>组周边轴多个程序的情况（</span><span lang=EN-US>7130#= 8011</span><span
style='font-family:宋体'>）</span></p>

<p class=MsoNormal><span style='position:absolute;z-index:251660288;left:0px;
margin-left:127px;margin-top:677px;width:221px;height:117px'>

<table cellpadding=0 cellspacing=0>
 <tr>
  <td width=221 height=117 bgcolor=white style='vertical-align:top;background:
  white'><span style='position:absolute;left:0pt;z-index:251660288'>
  <table cellpadding=0 cellspacing=0 width="100%">
   <tr>
    <td>
    <div style='padding:3.6pt 7.2pt 3.6pt 7.2pt'>
    <p class=MsoNormal><span style='font-family:宋体'>周边轴控制组</span><span
    lang=EN-US>1</span><span style='font-family:宋体'>中，</span></p>
    <p class=MsoNormal><span style='font-family:宋体'>将依次顺序执行</span><span
    lang=EN-US>O8011</span><span style='font-family:宋体'>，</span><span
    lang=EN-US>O8012</span><span style='font-family:宋体'>，</span><span
    lang=EN-US>O8013</span><span style='font-family:宋体'>，</span><span
    lang=EN-US>O8014</span><span style='font-family:宋体'>，</span><span
    lang=EN-US>O8015</span><span style='font-family:宋体'>程序。</span></p>
    </div>
    </td>
   </tr>
  </table>
  </span>&nbsp;</td>
 </tr>
</table>

</span><span style='position:absolute;z-index:251659264;left:0px;margin-left:
92px;margin-top:674px;width:36px;height:118px'><img width=29 height=94
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image005.png"></span><span lang=EN-US><img
width=323 height=202 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image006.png"
alt="文本框: O1234&#13;&#10;…..&#13;&#10;M8011		&#13;&#10;M8012&#13;&#10;M8013	&#13;&#10;M8014&#13;&#10;M8015&#13;&#10;…..&#13;&#10;M30&#13;&#10;"></span></p>

<h4><span style='font-family:宋体'>周边轴单独移动指令</span></h4>

<p class=MsoNormal><b><span style='font-family:宋体'>指令格式</span></b><span
style='font-family:宋体'>：</span></p>

<p class=MsoNormal><b><span lang=EN-US style='font-size:12.0pt'>G190&nbsp;&nbsp;&nbsp;&nbsp; [</span></b><b><span
style='font-size:12.0pt;font-family:宋体'>指令</span></b><b><span lang=EN-US
style='font-size:12.0pt'>]&nbsp; [</span></b><b><span style='font-size:12.0pt;
font-family:宋体'>任意周边轴地址</span></b><b><span lang=EN-US style='font-size:12.0pt'>]&nbsp;&nbsp; </span></b><span
lang=EN-US>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:宋体'>为任意周边轴单独指定程序。</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><span
lang=EN-US>G190</span><span style='font-family:宋体'>由程序中的周边轴地址决定周边轴控制组。缺省轴地址或指定了不同周边轴控制组的轴地址，系统都将报警。</span></p>

<p class=MsoNormal><b><span style='font-size:12.0pt;font-family:宋体'>或</span></b></p>

<p class=MsoNormal><b><span lang=EN-US style='font-size:12.0pt'>G191&nbsp;&nbsp;&nbsp;&nbsp; [</span></b><b><span
style='font-size:12.0pt;font-family:宋体'>指令</span></b><b><span lang=EN-US
style='font-size:12.0pt'>]&nbsp; </span></b><span lang=EN-US>:</span><span
style='font-family:宋体'>为周边轴控制组</span><span lang=EN-US>1</span><span
style='font-family:宋体'>，单独指定程序；</span></p>

<p class=MsoNormal><b><span lang=EN-US style='font-size:12.0pt'>G192&nbsp;&nbsp;&nbsp;&nbsp; [</span></b><b><span
style='font-size:12.0pt;font-family:宋体'>指令</span></b><b><span lang=EN-US
style='font-size:12.0pt'>]&nbsp; </span></b><span lang=EN-US>:</span><span
style='font-family:宋体'>为周边轴控制组</span><span lang=EN-US>2</span><span
style='font-family:宋体'>，单独指定程序；</span></p>

<p class=MsoNormal><b><span lang=EN-US style='font-size:12.0pt'>G193&nbsp;&nbsp;&nbsp;&nbsp; [</span></b><b><span
style='font-size:12.0pt;font-family:宋体'>指令</span></b><b><span lang=EN-US
style='font-size:12.0pt'>]&nbsp; </span></b><span lang=EN-US>:</span><span
style='font-family:宋体'>为周边轴控制组</span><span lang=EN-US>3</span><span
style='font-family:宋体'>，单独指定程序；</span></p>

<p class=MsoNormal><b><span lang=EN-US style='font-size:12.0pt'>G194&nbsp;&nbsp;&nbsp;&nbsp; [</span></b><b><span
style='font-size:12.0pt;font-family:宋体'>指令</span></b><b><span lang=EN-US
style='font-size:12.0pt'>]&nbsp; </span></b><span lang=EN-US>:</span><span
style='font-family:宋体'>为周边轴控制组</span><span lang=EN-US>4</span><span
style='font-family:宋体'>，单独指定程序；</span></p>

<p class=MsoNormal><b><span lang=EN-US style='font-size:12.0pt'>G195&nbsp;&nbsp;&nbsp;&nbsp; [</span></b><b><span
style='font-size:12.0pt;font-family:宋体'>指令</span></b><b><span lang=EN-US
style='font-size:12.0pt'>]  </span></b><span lang=EN-US>:</span><span
style='font-family:宋体'>为周边轴控制组</span><span lang=EN-US>5</span><span
style='font-family:宋体'>，单独指定程序；</span></p>

<p class=MsoNormal><b><span lang=EN-US style='font-size:12.0pt'>G196&nbsp;&nbsp;&nbsp;&nbsp; [</span></b><b><span
style='font-size:12.0pt;font-family:宋体'>指令</span></b><b><span lang=EN-US
style='font-size:12.0pt'>]  </span></b><span lang=EN-US>:</span><span
style='font-family:宋体'>为周边轴控制组</span><span lang=EN-US>6</span><span
style='font-family:宋体'>，单独指定程序；</span></p>

<p class=MsoNormal><b><span lang=EN-US style='font-size:12.0pt'>&nbsp;</span></b></p>

<p class=MsoNormal><span lang=EN-US>&nbsp; G190~G196</span><span
style='font-family:宋体'>可以在主程序中，单独指定并控制周边轴程序。</span></p>

<p class=MsoNormal><span style='font-family:宋体'>当</span><span lang=EN-US>G190~G196</span><span
style='font-family:宋体'>指定的周边轴未处于工作状态，则立即执行</span><span lang=EN-US>G190~G196</span><span
style='font-family:宋体'>指定的程序；如周边轴处于工作状态，则在其完成后，再执行</span><span lang=EN-US>G190~G196</span><span
style='font-family:宋体'>指定的程序。</span></p>

<p class=MsoNormal><span style='font-family:宋体'>例如程序）</span></p>

<p class=MsoNormal><span lang=EN-US><img width=334 height=239
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image007.png"
alt="文本框: O1234&#13;&#10;…..&#13;&#10;G50 X100 Y100&#13;&#10;G190 G00 A10.0		(周边轴控制1的单独指令)&#13;&#10;G00 X80 Y50&#13;&#10;G191 G01 A20 F500	(周边轴控制1的单独指令)&#13;&#10;G01 X45 F1000&#13;&#10;G192 G01 B10.0 F500  (周边轴控制2的单独指令)&#13;&#10;…..&#13;&#10;M30&#13;&#10;"></span><span
lang=EN-US>&nbsp; </span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h3><span style='font-family:宋体'>周边轴</span><span lang=EN-US>G</span><span
style='font-family:宋体'>代码</span></h3>

<p class=MsoNormal><span style='font-family:宋体'>周边轴控制中，可以指定如下</span><span
lang=EN-US>G</span><span style='font-family:宋体'>代码</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b><span lang=EN-US>G</span></b><b><span style='font-family:
  宋体'>代码</span></b></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-indent:52.5pt'><b><span style='font-family:
  宋体'>代码说明</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G00</span><span style='font-family:宋体;
  color:black'>（初态</span><span lang=EN-US style='color:black'>G</span><span
  style='font-family:宋体;color:black'>代码）</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>快速移动</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G01</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>直线插补</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G04</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>暂停</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G28</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>返回机械零点</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G43</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>正方向刀具长度偏移</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G44</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>负方向刀具长度偏移</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G49</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>刀具长度偏移注消</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G92</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>坐标系设定</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G80</span><span style='font-family:宋体;
  color:black'>（初态</span><span lang=EN-US style='color:black'>G</span><span
  style='font-family:宋体;color:black'>代码）</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>固定循环注销</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G81</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>钻孔循环</span><span
  lang=EN-US style='color:black'>(</span><span style='font-family:宋体;
  color:black'>点钻循环</span><span lang=EN-US style='color:black'>)</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G82</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>钻孔循环</span><span
  lang=EN-US style='color:black'>(</span><span style='font-family:宋体;
  color:black'>镗阶梯孔循环</span><span lang=EN-US style='color:black'>)</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G73</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>深孔钻循环</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G83</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>深孔钻循环</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G74</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>左旋攻丝循环</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G84</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>右旋攻丝循环</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G85</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>镗孔循环</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G86</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>镗削循环</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G89</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>镗孔循环</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G90</span><span style='font-family:宋体;
  color:black'>（初态</span><span lang=EN-US style='color:black'>G</span><span
  style='font-family:宋体;color:black'>代码）</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>绝对值编程</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G91</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>相对值编程</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G94</span><span style='font-family:宋体;
  color:black'>（初态</span><span lang=EN-US style='color:black'>G</span><span
  style='font-family:宋体;color:black'>代码）</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>每分进给</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G95</span></p>
  </td>
  <td width=274 valign=top style='width:205.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>每转进给</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h4><span style='font-family:宋体'>周边轴程序中的模态</span></h4>

<p class=MsoNormal><b><span style='font-size:12.0pt;font-family:宋体'>初始模态</span></b></p>

<p class=MsoNormal><span style='font-family:宋体'>如下：</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=73 valign=top style='width:55.05pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b><span style='font-family:宋体'>初始模态</span></b></p>
  </td>
  <td width=132 valign=top style='width:99.2pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-indent:21.1pt'><b><span style='font-family:
  宋体'>模态说明</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=73 valign=top style='width:55.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G00</span></p>
  </td>
  <td width=132 valign=top style='width:99.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>快速移动</span></p>
  </td>
 </tr>
 <tr>
  <td width=73 valign=top style='width:55.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G80</span></p>
  </td>
  <td width=132 valign=top style='width:99.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>固定循环注销</span></p>
  </td>
 </tr>
 <tr>
  <td width=73 valign=top style='width:55.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G90</span></p>
  </td>
  <td width=132 valign=top style='width:99.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>绝对值编程</span></p>
  </td>
 </tr>
 <tr>
  <td width=73 valign=top style='width:55.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G94</span></p>
  </td>
  <td width=132 valign=top style='width:99.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>每分进给</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><b><span style='font-size:12.0pt;font-family:宋体'>钻孔固定循环模态</span></b></p>

<p class=MsoNormal><span style='font-family:宋体'>打孔循环指令，</span><span lang=EN-US>G81</span><span
style='font-family:宋体'>，</span><span lang=EN-US>G82</span><span
style='font-family:宋体'>，</span><span lang=EN-US>G73/G83</span><span
style='font-family:宋体'>，</span><span lang=EN-US>G74/G84</span><span
style='font-family:宋体'>，</span><span lang=EN-US>G85</span><span
style='font-family:宋体'>，</span><span lang=EN-US>G86</span><span
style='font-family:宋体'>，</span><span lang=EN-US>G89</span><span
style='font-family:宋体'>，</span></p>

<p class=MsoListParagraph style='margin-left:39.0pt;text-indent:-18.0pt'><span
lang=EN-US>1）<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
style='font-family:宋体'>固定在</span><span lang=EN-US>G17</span><span
style='font-family:宋体'>平面下，只能第三轴打孔；故，在打孔指令中，周边轴的第三轴无效，则系统将发出报警。</span></p>

<p class=MsoListParagraph style='margin-left:39.0pt;text-indent:-18.0pt'><span
lang=EN-US>2）<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
style='font-family:宋体'>都是返回初始平面。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h4><span style='font-family:宋体'>周边轴的长度偏置</span></h4>

<p class=MsoNormal><span style='font-family:宋体'>周边轴的长度偏置，只能在第三轴中执行。在长度偏置指令中，周边轴的第三轴无效，则系统将发出报警。</span></p>

<h4><span style='font-family:宋体'>周边轴工件坐标系</span></h4>

<p class=MsoListParagraph style='margin-left:28.5pt;text-indent:-18.0pt'><span
lang=EN-US>1）<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
style='font-family:宋体'>周边轴坐标设定指令</span><span lang=EN-US>G92</span><span
style='font-family:宋体'>的编程和执行，与通常程序的指令一样。</span></p>

<p class=MsoListParagraph style='margin-left:28.5pt;text-indent:-18.0pt'><span
lang=EN-US>2）<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
style='font-family:宋体'>周边轴工件坐标系（</span><span lang=EN-US>G54~G59</span><span
style='font-family:宋体'>），在周边轴程序开始运行后，就不再受主程序坐标系变换的影响，一直保持不变。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h3><span style='font-family:宋体'>周边轴程序中的</span><span lang=EN-US>MST</span><span
style='font-family:宋体'>代码</span></h3>

<p class=MsoNormal><span style='font-family:宋体'>周边轴程序中的</span><span lang=EN-US>MST</span><span
style='font-family:宋体'>代码，执行时会发出独立的代码信号和选通信号。因此，周边轴程序与主程序，可以指定相同的</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码。</span></p>

<p class=MsoNormal><span style='font-family:宋体'>而且主程序和周边轴程序的</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码进行逻辑组合，可以在主程序和周边轴程序间实现同时启动程序的功能。</span></p>

<p class=MsoNormal><span style='font-family:宋体'>例）</span></p>

<p class=MsoNormal><span lang=EN-US><img width=483 height=167
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image008.png"></span></p>

<h4><span style='font-family:宋体'>等待</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码</span></h4>

<p class=MsoNormal><span style='font-family:宋体'>通过使用周边轴特定的等待</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码，可以在主程序和周边轴程序中进行等待。</span></p>

<p class=MsoNormal style='text-indent:10.5pt'><span style='font-family:宋体'>每个周边轴控制组可以设置</span><span
lang=EN-US>5</span><span style='font-family:宋体'>个等待</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码。具体由参数</span><span lang=EN-US>7160#~7189#</span><span
style='font-family:宋体'>设置。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>例）周边轴控制组</span><span
lang=EN-US>1</span><span style='font-family:宋体'>中，参数</span><span lang=EN-US>7160#=250</span><span
style='font-family:宋体'>：</span></p>

<p class=MsoNormal><span lang=EN-US><img width=586 height=165
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image009.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='font-family:宋体'>等待</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码的选通信号和共段时的执行顺序，由参数</span><span lang=EN-US>750#</span><span
style='font-family:宋体'>设置。</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=630
 style='width:472.55pt;margin-left:5.25pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border:solid windowtext 1.5pt;
  border-right:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>5</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=59 valign=top style='width:44.2pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=60 valign=top style='width:45.05pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=56 valign=top style='width:41.7pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=70 valign=top style='width:52.25pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=52 valign=top style='width:39.2pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=70 valign=top style='width:52.25pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=53 valign=top style='width:39.85pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>WMNO</span></p>
  </td>
  <td width=60 valign=top style='width:45.05pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>WMST</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='text-indent:.5pt;text-autospace:none;vertical-align:
bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>WMST</span><span
lang=EN-US style='font-family:宋体'>=1: </span><span style='font-family:宋体'>周边轴等待<span
lang=EN-US>M</span>代码的选通信号，输出有效<span lang=EN-US>(PMC</span>需进行逻辑控制<span
lang=EN-US>)</span>；</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US style='font-family:宋体'>=0: </span><span
style='font-family:宋体'>周边轴等待<span lang=EN-US>M</span>代码的选通信号，输出无效<span
lang=EN-US>(</span>不需<span lang=EN-US>PMC</span>进行逻辑控制<span lang=EN-US>)</span>；。</span></p>

<p class=MsoNormal style='text-autospace:none;vertical-align:bottom'><span
lang=EN-US style='font-family:"Arial",sans-serif'>WMNO</span><span lang=EN-US
style='font-family:宋体'>=1: </span><span style='font-family:宋体'>周边轴等待<span
lang=EN-US>M</span>代码共段时，最后执行；</span></p>

<p class=MsoNormal style='text-autospace:none;vertical-align:bottom'><span
lang=EN-US style='font-family:宋体'>&nbsp;&nbsp;&nbsp; =0: </span><span
style='font-family:宋体'>周边轴等待<span lang=EN-US>M</span>代码共段时，最先执行。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h4><span style='font-family:宋体'>流程性</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码</span></h4>

<p class=MsoNormal><span style='font-family:宋体'>周边轴中，不能执行流程性</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码，例如：</span><span lang=EN-US>M98</span><span
style='font-family:宋体'>，</span><span lang=EN-US>M99</span><span
style='font-family:宋体'>，以及</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码调用子程序功能。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h3><span style='font-family:宋体'>周边轴宏程序<span style='color:red'>（暂不增加）</span></span></h3>

<p class=MsoNormal><span style='font-family:宋体'>周边轴程序与主程序一样，可以指定运算符和宏变量，执行宏程序。</span></p>

<p class=MsoNormal><b><span style='font-family:宋体'>局部宏变量</span></b></p>

<p class=MsoNormal><span style='font-family:宋体'>局部宏变量，在周边轴控制组</span><span
lang=EN-US>1~6</span><span style='font-family:宋体'>中，分别独立存在。</span></p>

<p class=MsoNormal><b><span style='font-family:宋体'>公共宏变量</span></b></p>

<p class=MsoNormal><span style='font-family:宋体'>公共宏变量，与主程序公用。</span></p>

<p class=MsoNormal><b><span style='font-family:宋体'>系统宏变量</span></b></p>

<p class=MsoNormal><span style='font-family:宋体'>系统宏变量，与主程序公用。</span></p>

<p class=MsoNormal><b><span lang=EN-US>PMC</span></b><b><span style='font-family:
宋体'>宏变量</span></b></p>

<p class=MsoNormal><span lang=EN-US>&nbsp; PMC</span><span style='font-family:
宋体'>宏变量，在周边轴控制组</span><span lang=EN-US>1~6</span><span style='font-family:宋体'>中，分别独立存在。对应的详细</span><span
lang=EN-US>PMC</span><span style='font-family:宋体'>信号地址，如下：</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=417
 style='width:312.6pt;margin-left:4.65pt;border-collapse:collapse'>
 <tr style='height:16.5pt'>
  <td width=114 valign=bottom style='width:85.8pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><b><span
  style='font-family:宋体;color:black'>周边轴控制组</span></b></p>
  </td>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><b><span lang=EN-US
  style='font-family:宋体;color:black'>PMC</span></b><b><span style='font-family:
  宋体;color:black'>信号地址</span></b></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><b><span
  style='font-family:宋体;color:black'>位数</span></b></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><b><span lang=EN-US
  style='font-family:宋体;color:black'>PMC</span></b><b><span style='font-family:
  宋体;color:black'>变量号</span></b></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><b><span
  style='font-family:宋体;color:black'>读写</span></b></p>
  </td>
 </tr>
 <tr style='height:45.55pt'>
  <td width=114 rowspan=5 style='width:85.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:45.55pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>周边轴控制组<span lang=EN-US>1</span></span></p>
  </td>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:45.55pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G670.0</span></p>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>...</span></p>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G670.7</span></p>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G671.0</span></p>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>...</span></p>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G671.7</span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:45.55pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:45.55pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1400<br>
  ...<br>
  #1407<br>
  #1408<br>
  ...<br>
  #1415</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:45.55pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G670~G671</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1432</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:52.9pt'>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.9pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F700.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  F700.7<br>
  F701.0<br>
  ...<br>
  F701.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.9pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.9pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1450<br>
  ...<br>
  #1457<br>
  #1458<br>
  ...<br>
  #1465</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.9pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F700~F701</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1482</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F702~F705</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>32</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1483</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:57.7pt'>
  <td width=114 rowspan=5 style='width:85.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:57.7pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>周边轴控制组<span lang=EN-US>2</span></span></p>
  </td>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:57.7pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G672.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  G672.7<br>
  G673.0<br>
  ...<br>
  G673.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:57.7pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:57.7pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1500<br>
  ...<br>
  #1507<br>
  #1508<br>
  ...<br>
  #1515</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:57.7pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G672~G673</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1532</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:48.1pt'>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:48.1pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F706.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  F706.7<br>
  F707.0<br>
  ...<br>
  F707.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:48.1pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:48.1pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1550<br>
  ...<br>
  #1557<br>
  #1558<br>
  ...<br>
  #1565</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:48.1pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F706~F707</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1582</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F708~F711</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>32</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1583</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:54.7pt'>
  <td width=114 rowspan=5 style='width:85.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:54.7pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>周边轴控制组<span lang=EN-US>3</span></span></p>
  </td>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:54.7pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G674.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  G674.7<br>
  G675.0<br>
  ...<br>
  G675.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:54.7pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:54.7pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1600<br>
  ...<br>
  #1607<br>
  #1608<br>
  ...<br>
  #1615</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:54.7pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G674~G675</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1632</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:53.6pt'>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:53.6pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F712.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  F712.7<br>
  F713.0<br>
  ...<br>
  F713.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:53.6pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:53.6pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1650<br>
  ...<br>
  #1657<br>
  #1658<br>
  ...<br>
  #1665</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:53.6pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F712~F713</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1682</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F714~F717</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>32</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1683</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:57.9pt'>
  <td width=114 rowspan=5 style='width:85.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:57.9pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>周边轴控制组<span lang=EN-US>4</span></span></p>
  </td>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:57.9pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G676.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  G676.7<br>
  G677.0<br>
  ...<br>
  G677.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:57.9pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:57.9pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1700<br>
  ...<br>
  #1707<br>
  #1708<br>
  ...<br>
  #1715</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:57.9pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G676~G677</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1732</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:52.2pt'>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.2pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F718.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  F718.7<br>
  F719.0<br>
  ...<br>
  F719.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.2pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.2pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1750<br>
  ...<br>
  #1757<br>
  #1758<br>
  ...<br>
  #1765</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.2pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F718~F719</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1782</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F720~F723</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>32</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1783</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:52.45pt'>
  <td width=114 rowspan=5 style='width:85.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:52.45pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>周边轴控制组<span lang=EN-US>5</span></span></p>
  </td>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.45pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G678.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  G678.7<br>
  G679.0<br>
  ...<br>
  G679.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.45pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.45pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1800<br>
  ...<br>
  #1807<br>
  #1808<br>
  ...<br>
  #1815</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:52.45pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G678~G679</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1832</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:54.5pt'>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:54.5pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F724.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  F724.7<br>
  F725.0<br>
  ...<br>
  F725.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:54.5pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:54.5pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1850<br>
  ...<br>
  #1857<br>
  #1858<br>
  ...<br>
  #1865</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:54.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F724~F725</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1882</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F726~F729</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>32</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1883</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:53.3pt'>
  <td width=114 rowspan=5 style='width:85.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:53.3pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>周边轴控制组<span lang=EN-US>6</span></span></p>
  </td>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:53.3pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G680.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  G680.7<br>
  G681.0<br>
  ...<br>
  G681.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:53.3pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:53.3pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1900<br>
  ...<br>
  #1907<br>
  #1908<br>
  ...<br>
  #1915</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:53.3pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>G680~G681</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1932</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>只读</span></p>
  </td>
 </tr>
 <tr style='height:55.4pt'>
  <td width=104 valign=bottom style='width:78.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:55.4pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F730.0<br>
  </span><span style='font-size:9.0pt;font-family:宋体;color:black'>…<span
  lang=EN-US><br>
  F730.7<br>
  F731.0<br>
  ...<br>
  F731.7</span></span></p>
  </td>
  <td width=47 valign=bottom style='width:35.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:55.4pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>1<br>
  ...<br>
  1<br>
  1<br>
  ...<br>
  1</span></p>
  </td>
  <td width=85 valign=bottom style='width:63.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:55.4pt'>
  <p class=MsoNormal style='line-height:9.0pt'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1950<br>
  ...<br>
  #1957<br>
  #1958<br>
  ...<br>
  #1965</span></p>
  </td>
  <td width=66 nowrap style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:55.4pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F730~F731</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>16</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1982</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
 <tr style='height:13.5pt'>
  <td width=104 nowrap valign=bottom style='width:78.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>F732~F735</span></p>
  </td>
  <td width=47 nowrap valign=bottom style='width:35.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>32</span></p>
  </td>
  <td width=85 nowrap valign=bottom style='width:63.8pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
  style='font-size:9.0pt;font-family:宋体;color:black'>#1983</span></p>
  </td>
  <td width=66 nowrap valign=bottom style='width:49.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>读<span lang=EN-US>/</span>写</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>程序例）</span><span lang=EN-US>7130#=
8011</span></p>

<p class=MsoNormal><span lang=EN-US><img width=342 height=166
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image010.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>注意：</span></p>

<p class=MsoNormal><span style='font-family:宋体'>周边轴程序中，不能执行宏程序调用子程序的功能。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h2><span style='font-family:宋体'>相关参数</span></h2>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=630
 style='width:472.55pt;margin-left:5.25pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border:solid windowtext 1.5pt;
  border-right:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>5</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=59 valign=top style='width:44.2pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=60 valign=top style='width:45.05pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=56 valign=top style='width:41.7pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=70 valign=top style='width:52.25pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=52 valign=top style='width:39.2pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=70 valign=top style='width:52.25pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>***</span></p>
  </td>
  <td width=53 valign=top style='width:39.85pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>WMNO</span></p>
  </td>
  <td width=60 valign=top style='width:45.05pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span lang=EN-US style='font-family:
  "Arial",sans-serif'>WMST</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='text-indent:.5pt;text-autospace:none;vertical-align:
bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>WMST</span><span
lang=EN-US style='font-family:宋体'>=1: </span><span style='font-family:宋体'>周边轴等待<span
lang=EN-US>M</span>代码的选通信号，输出有效<span lang=EN-US>(PMC</span>需进行逻辑控制<span
lang=EN-US>)</span>；</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt;text-autospace:
none;vertical-align:bottom'><span lang=EN-US style='font-family:宋体'>=0: </span><span
style='font-family:宋体'>周边轴等待<span lang=EN-US>M</span>代码的选通信号，输出无效<span
lang=EN-US>(</span>不需<span lang=EN-US>PMC</span>进行逻辑控制<span lang=EN-US>)</span>；。</span></p>

<p class=MsoNormal style='text-autospace:none;vertical-align:bottom'><span
lang=EN-US style='font-family:"Arial",sans-serif'>WMNO</span><span lang=EN-US
style='font-family:宋体'>=1: </span><span style='font-family:宋体'>周边轴等待<span
lang=EN-US>M</span>代码共段时，最后执行；</span></p>

<p class=MsoNormal style='text-autospace:none;vertical-align:bottom'><span
lang=EN-US style='font-family:宋体'>&nbsp;&nbsp;&nbsp; =0: </span><span
style='font-family:宋体'>周边轴等待<span lang=EN-US>M</span>代码共段时，最先执行。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=630
 style='width:472.55pt;margin-left:5.25pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border:solid windowtext 1.5pt;
  border-right:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>1</span>各轴的轴号<span lang=EN-US>(0:</span>无效；<span lang=EN-US>1:X</span>；<span
  lang=EN-US>2:Y</span>；<span lang=EN-US>3:Z</span>；<span lang=EN-US>4:4th</span>；<span
  lang=EN-US>5:5th</span>；<span lang=EN-US>6:6th)</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>2</span>各轴的轴号<span lang=EN-US>(0:</span>无效；<span lang=EN-US>1:X</span>；<span
  lang=EN-US>2:Y</span>；<span lang=EN-US>3:Z</span>；<span lang=EN-US>4:4th</span>；<span
  lang=EN-US>5:5th</span>；<span lang=EN-US>6:6th)</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>2</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>3</span>各轴的轴号<span lang=EN-US>(0:</span>无效；<span lang=EN-US>1:X</span>；<span
  lang=EN-US>2:Y</span>；<span lang=EN-US>3:Z</span>；<span lang=EN-US>4:4th</span>；<span
  lang=EN-US>5:5th</span>；<span lang=EN-US>6:6th)</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>4</span>各轴的轴号<span lang=EN-US>(0:</span>无效；<span lang=EN-US>1:X</span>；<span
  lang=EN-US>2:Y</span>；<span lang=EN-US>3:Z</span>；<span lang=EN-US>4:4th</span>；<span
  lang=EN-US>5:5th</span>；<span lang=EN-US>6:6th)</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>4</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>5</span>各轴的轴号<span lang=EN-US>(0:</span>无效；<span lang=EN-US>1:X</span>；<span
  lang=EN-US>2:Y</span>；<span lang=EN-US>3:Z</span>；<span lang=EN-US>4:4th</span>；<span
  lang=EN-US>5:5th</span>；<span lang=EN-US>6:6th)</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>5</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>6</span>各轴的轴号<span lang=EN-US>(0:</span>无效；<span lang=EN-US>1:X</span>；<span
  lang=EN-US>2:Y</span>；<span lang=EN-US>3:Z</span>；<span lang=EN-US>4:4th</span>；<span
  lang=EN-US>5:5th</span>；<span lang=EN-US>6:6th)</span></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-left:.5pt;text-autospace:none;vertical-align:
bottom'><span style='font-family:宋体'>设定范围：<span lang=EN-US>0</span>～<span
lang=EN-US>6</span></span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>此参数为周边轴控制组中各轴号对应的系统轴号。</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>设定值为</span><span
lang=EN-US>0</span><span style='font-family:宋体'>，则该周边轴无输出（即，无效）。</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>若，周边轴控制组中的所有轴号，都设为</span><span
lang=EN-US>0</span><span style='font-family:宋体'>，则该组周边轴控制无效。</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>例）将</span><span lang=EN-US>Y</span><span
style='font-family:宋体'>，</span><span lang=EN-US>Z</span><span style='font-family:
宋体'>，</span><span lang=EN-US>4<sup>th</sup></span><span style='font-family:
宋体'>，</span><span lang=EN-US>5<sup>th</sup></span><span style='font-family:
宋体'>，</span><span lang=EN-US>6<sup>th</sup></span><span style='font-family:
宋体'>，设置到不同的周边轴控制组中，进行独立控制。设置如下：</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=631
 style='width:473.2pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b><span style='font-family:宋体'>参数号</span></b></p>
  </td>
  <td width=57 valign=top style='width:42.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b><span style='font-family:宋体'>设置值</span></b></p>
  </td>
  <td width=298 valign=top style='width:223.6pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b><span style='font-family:宋体'>设置说明</span></b></p>
  </td>
  <td width=212 valign=top style='width:159.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  style='font-family:宋体'>编程说明</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7100.X</span></p>
  </td>
  <td width=57 valign=top style='width:42.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>2</span></p>
  </td>
  <td width=298 rowspan=2 valign=top style='width:223.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴控制组</span><span
  lang=EN-US>1</span><span style='font-family:宋体'>，控制第</span><span lang=EN-US>1</span><span
  style='font-family:宋体'>轴，进行独立编程与运动。脉冲输出在系统</span><span lang=EN-US>Y</span><span
  style='font-family:宋体'>轴的端口上。</span></p>
  </td>
  <td width=212 rowspan=2 valign=top style='width:159.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>控制</span><span lang=EN-US>1</span><span
  style='font-family:宋体'>使用</span><span lang=EN-US>Y</span><span
  style='font-family:宋体'>地址编程，其他轴地址报警</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 colspan=2 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7100.yz456=0</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7101.x</span></p>
  </td>
  <td width=57 valign=top style='width:42.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>3</span></p>
  </td>
  <td width=298 rowspan=2 valign=top style='width:223.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴控制组</span><span
  lang=EN-US>2</span><span style='font-family:宋体'>，控制第</span><span lang=EN-US>1</span><span
  style='font-family:宋体'>轴，进行独立编程与运动。脉冲输出在系统</span><span lang=EN-US>Z</span><span
  style='font-family:宋体'>轴的端口上。</span></p>
  </td>
  <td width=212 rowspan=2 valign=top style='width:159.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>控制</span><span lang=EN-US>2</span><span
  style='font-family:宋体'>使用</span><span lang=EN-US>Z</span><span
  style='font-family:宋体'>地址编程，其他轴地址报警</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 colspan=2 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7101.yz456=0</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7102.y</span></p>
  </td>
  <td width=57 valign=top style='width:42.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>4</span></p>
  </td>
  <td width=298 rowspan=2 valign=top style='width:223.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴控制组</span><span
  lang=EN-US>3</span><span style='font-family:宋体'>，控制第</span><span lang=EN-US>2</span><span
  style='font-family:宋体'>轴，进行独立编程与运动。脉冲输出在系统</span><span lang=EN-US>4th</span><span
  style='font-family:宋体'>轴的端口上。</span></p>
  </td>
  <td width=212 rowspan=2 valign=top style='width:159.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>控制</span><span lang=EN-US>3</span><span
  style='font-family:宋体'>使用指定的第</span><span lang=EN-US>4</span><span
  style='font-family:宋体'>地址（</span><span lang=EN-US>A/B/C</span><span
  style='font-family:宋体'>）编程，其他轴地址报警</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 colspan=2 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7102.xz456=0</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7103.z</span></p>
  </td>
  <td width=57 valign=top style='width:42.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>5</span></p>
  </td>
  <td width=298 rowspan=2 valign=top style='width:223.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴控制组</span><span
  lang=EN-US>4</span><span style='font-family:宋体'>，控制第</span><span lang=EN-US>3</span><span
  style='font-family:宋体'>轴，进行独立编程与运动。脉冲输出在系统</span><span lang=EN-US>5th</span><span
  style='font-family:宋体'>轴的端口上。</span></p>
  </td>
  <td width=212 rowspan=2 valign=top style='width:159.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>控制</span><span lang=EN-US>4</span><span
  style='font-family:宋体'>使用指定的第</span><span lang=EN-US>5</span><span
  style='font-family:宋体'>地址（</span><span lang=EN-US>A/B/C</span><span
  style='font-family:宋体'>）编程，其他轴地址报警</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 colspan=2 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7102.xy456=0</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7104.z</span></p>
  </td>
  <td width=57 valign=top style='width:42.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>6</span></p>
  </td>
  <td width=298 rowspan=3 valign=top style='width:223.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴控制组</span><span
  lang=EN-US>5</span><span style='font-family:宋体'>，控制第</span><span lang=EN-US>3</span><span
  style='font-family:宋体'>轴，进行独立编程与运动。脉冲输出在系统</span><span lang=EN-US>6th</span><span
  style='font-family:宋体'>轴的端口上。</span></p>
  </td>
  <td width=212 rowspan=3 valign=top style='width:159.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>控制</span><span lang=EN-US>5</span><span
  style='font-family:宋体'>使用指定的第</span><span lang=EN-US>6</span><span
  style='font-family:宋体'>地址（</span><span lang=EN-US>A/B/C</span><span
  style='font-family:宋体'>）编程，其他轴地址报警</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 colspan=2 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7102.xy456=0</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7118</span></p>
  </td>
  <td width=57 valign=top style='width:42.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>6</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 colspan=2 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7105.xyz456=0</span></p>
  </td>
  <td width=298 valign=top style='width:223.6pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴控制组</span><span
  lang=EN-US>6</span><span style='font-family:宋体'>无效。</span></p>
  </td>
  <td width=212 valign=top style='width:159.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='font-family:宋体'>系统结构图如下：</span></p>

<p class=MsoNormal><span lang=EN-US><img width=482 height=614
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%20%E5%91%A8%E8%BE%B9%E8%BD%B4/image011.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=630
 style='width:472.55pt;margin-left:5.25pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border:solid windowtext 1.5pt;
  border-right:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>1</span>中，第<span lang=EN-US>1</span>程序号以及开始执行的<span lang=EN-US>M</span>代码</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>2</span>中，第<span lang=EN-US>1</span>程序号以及开始执行的<span lang=EN-US>M</span>代码</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>2</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>3</span>中，第<span lang=EN-US>1</span>程序号以及开始执行的<span lang=EN-US>M</span>代码</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>4</span>中，第<span lang=EN-US>1</span>程序号以及开始执行的<span lang=EN-US>M</span>代码</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>4</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>5</span>中，第<span lang=EN-US>1</span>程序号以及开始执行的<span lang=EN-US>M</span>代码</span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>5</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>6</span>中，第<span lang=EN-US>1</span>程序号以及开始执行的<span lang=EN-US>M</span>代码</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-left:.5pt;text-autospace:none;vertical-align:
bottom'><span style='font-family:宋体'>设定范围：<span lang=EN-US>8000</span>～<span
lang=EN-US>9999</span>，设置了范围以外的值，则该功能无效。</span></p>

<p class=MsoNormal><span style='font-family:宋体'>此参数设定周边轴控制程序的专用程序号的开头号。以及在主程序中，启动该程序的</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码的开头号。</span></p>

<p class=MsoNormal><span style='font-family:宋体'>（设定值）～（设定值</span><span
lang=EN-US>+4</span><span style='font-family:宋体'>）的程序号和</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码将成为，周边轴的专用程序号和等待</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>例）</span><span lang=EN-US>7130#=8000</span><span
style='font-family:宋体'>，则表示：</span></p>

<p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:宋体'>，为周边轴控制组</span><span
lang=EN-US>1</span><span style='font-family:宋体'>中，</span><span
style='font-family:宋体'>第<span lang=EN-US>1</span>程序的程序号；且在主程序中，使用<span
lang=EN-US>M8000</span>启动执行<span lang=EN-US>O8000</span>。</span></p>

<p class=MsoNormal><span lang=EN-US>O8001</span><span style='font-family:宋体'>，为周边轴控制组</span><span
lang=EN-US>1</span><span style='font-family:宋体'>中，</span><span
style='font-family:宋体'>第<span lang=EN-US>2</span>程序的程序号；且在主程序中，使用<span
lang=EN-US>M8001</span>启动执行<span lang=EN-US>O8001</span>。</span></p>

<p class=MsoNormal><span lang=EN-US>O8002</span><span style='font-family:宋体'>，为周边轴控制组</span><span
lang=EN-US>1</span><span style='font-family:宋体'>中，</span><span
style='font-family:宋体'>第<span lang=EN-US>3</span>程序的程序号；且在主程序中，使用<span
lang=EN-US>M8002</span>启动执行<span lang=EN-US>O8002</span>。</span></p>

<p class=MsoNormal><span lang=EN-US>O8003</span><span style='font-family:宋体'>，为周边轴控制组</span><span
lang=EN-US>1</span><span style='font-family:宋体'>中，</span><span
style='font-family:宋体'>第<span lang=EN-US>4</span>程序的程序号；且在主程序中，使用<span
lang=EN-US>M8003</span>启动执行<span lang=EN-US>O8003</span>。</span></p>

<p class=MsoNormal><span lang=EN-US>O8004</span><span style='font-family:宋体'>，为周边轴控制组</span><span
lang=EN-US>1</span><span style='font-family:宋体'>中，</span><span
style='font-family:宋体'>第<span lang=EN-US>5</span>程序的程序号；且在主程序中，使用<span
lang=EN-US>M8004</span>启动执行<span lang=EN-US>O8004</span>。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=630
 style='width:472.55pt;margin-left:5.25pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border:solid windowtext 1.5pt;
  border-right:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:none;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>1</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>1</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>1</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>2</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>2</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>1</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>3</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>1</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>4</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>4</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>1</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>5</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>5</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>2</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>1</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal style='text-autospace:none;vertical-align:bottom'><span
  lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;6</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>2</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>2</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>2</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>3</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>2</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>4</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>6</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>9</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>2</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>5</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>3</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>1</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>3</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>2</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>2</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>3</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>3</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>3</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>4</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>4</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>3</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>5</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>5</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>4</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>1</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;6</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>4</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>2</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>4</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>3</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>4</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>4</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>9</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>4</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>5</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>0</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>5</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>1</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>5</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>2</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>2</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>5</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>3</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>3</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>5</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>4</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>4</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>5</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>5</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>5</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>6</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>1</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;6</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>6</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>2</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>6</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>3</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>6</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>4</span></span></p>
  </td>
 </tr>
 <tr style='page-break-inside:avoid;height:12.25pt'>
  <td width=29 valign=top style='width:21.8pt;border-top:none;border-left:solid windowtext 1.5pt;
  border-bottom:solid windowtext 1.5pt;border-right:none;padding:0cm 1.4pt 0cm 1.4pt;
  height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>7</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>1</span></p>
  </td>
  <td width=30 valign=top style='width:22.8pt;border:none;border-bottom:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>8</span></p>
  </td>
  <td width=27 valign=top style='width:19.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>9</span></p>
  </td>
  <td width=38 valign=top style='width:28.5pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='text-align:center;text-autospace:none;
  vertical-align:bottom'><span lang=EN-US style='font-family:"Arial",sans-serif'>&nbsp;</span></p>
  </td>
  <td width=479 valign=top style='width:359.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt;height:12.25pt'>
  <p class=MsoNormal align=center style='margin-right:-3.05pt;text-align:center;
  text-autospace:none;vertical-align:bottom'><span style='font-family:宋体'>周边轴控制组<span
  lang=EN-US>6</span>的<span lang=EN-US>M</span>等待代码<span lang=EN-US>5</span></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-left:.5pt;text-autospace:none;vertical-align:
bottom'><span style='font-family:宋体'>设定范围：<span lang=EN-US>8000</span>～<span
lang=EN-US>9999</span>，设置了范围以外的值，则该功能无效。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h2><span style='font-family:宋体'>相关</span><span lang=EN-US>GF</span><span
style='font-family:宋体'>信号</span></h2>

<h3><span lang=EN-US>G</span><span style='font-family:宋体'>信号</span></h3>

<p class=MsoNormal><span style='font-family:宋体'>周边轴</span><span lang=EN-US>1~6</span><span
style='font-family:宋体'>组</span><span lang=EN-US>G</span><span style='font-family:
宋体'>信号汇总如下：</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b><span style='font-family:宋体'>周边轴</span><span
  lang=EN-US>G</span></b><b><span style='font-family:宋体'>信号</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-indent:31.6pt'><b><span style='font-family:
  宋体'>信号名称</span></b></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-indent:42.15pt'><b><span style='font-family:
  宋体'>信号意义</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G604.0~G604.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>辅助功能完成信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G004.3</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G605.0~G605.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>辅助功能锁住信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G005.6</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G606.0~G606.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>倍率取消信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G006.4</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G607.0~G607.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>自动运行启动信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G007.2</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G608.0~G608.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>自动运行停止信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G008.5</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G609.0~G609.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>复位</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G008.6</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G610.0~G610.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>外部急停信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G008.7</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G612,G613</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G614,G615</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G616,G617</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G618,G619</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G620,G621</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G622,G623</span><span style='font-family:
  宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>手动倍率</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G10,G11</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G630</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G631</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G632</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G633</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G634</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G635</span><span style='font-family:宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>进给倍率</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G12</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G640.0</span><span style='font-family:
  宋体'>，</span><span lang=EN-US>G640.1</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G641.0</span><span style='font-family:
  宋体'>，</span><span lang=EN-US>G641.1</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G642.0</span><span style='font-family:
  宋体'>，</span><span lang=EN-US>G642.1</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G643.0</span><span style='font-family:
  宋体'>，</span><span lang=EN-US>G643.1</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G644.0</span><span style='font-family:
  宋体'>，</span><span lang=EN-US>G644.1</span><span style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>G645.0</span><span style='font-family:
  宋体'>，</span><span lang=EN-US>G645.1</span><span style='font-family:宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>快速倍率</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G14.0</span><span
  style='font-family:宋体'>，</span><span lang=EN-US>G14.1</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G649.0~G649.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>速度到达信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G029.4</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G654.0~G654.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>程序段跳过信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G044.0</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>G656.0~G656.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>单程序段信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G046.1</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US style='color:black'>G663.0~G663.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>周边轴等待</span><span
  lang=EN-US style='color:black'>M</span><span style='font-family:宋体;
  color:black'>代码忽略信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>G063.7</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US style='color:black'>G670</span><span
  lang=EN-US>,<span style='color:black'>G671</span></span><span
  style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US style='color:black'>G672</span><span
  lang=EN-US>,<span style='color:black'>G673</span></span><span
  style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US style='color:black'>G674</span><span
  lang=EN-US>,<span style='color:black'>G675</span></span><span
  style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US style='color:black'>G676</span><span
  lang=EN-US>,<span style='color:black'>G677</span></span><span
  style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US style='color:black'>G678</span><span
  lang=EN-US>,<span style='color:black'>G679</span></span><span
  style='font-family:宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US style='color:black'>G680</span><span
  lang=EN-US>,<span style='color:black'>G681</span></span><span
  style='font-family:宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>用户宏程序用输入信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US
  style='color:black'>G54</span><span lang=EN-US>,<span style='color:black'>G55</span></span><span
  style='font-family:宋体'>意义相同</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><b><span lang=EN-US>NMWT1~NMWT6</span></b><b><span
style='font-family:宋体'>（</span></b><b><span lang=EN-US>G663.0~G663.5</span></b><b><span
style='font-family:宋体'>）：</span></b></p>

<p class=MsoNormal><span style='font-family:宋体'>●信号类型：</span><span lang=EN-US>PLC
–&gt;NC </span></p>

<p class=MsoNormal style='text-indent:21.0pt'><b><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NMWT1</span></b><span
lang=EN-US>, </span><span style='font-family:宋体'>周边轴控制组</span><span lang=EN-US>1</span><span
style='font-family:宋体'>，等待</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码忽略信号；</span></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>NMWT2</span></b><span
lang=EN-US>, </span><span style='font-family:宋体'>周边轴控制组</span><span lang=EN-US>2</span><span
style='font-family:宋体'>，等待</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码忽略信号；</span></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>………….</span></b></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>NMWT6</span></b><span
lang=EN-US>, </span><span style='font-family:宋体'>周边轴控制组</span><span lang=EN-US>6</span><span
style='font-family:宋体'>，等待</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码忽略信号；</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-84.0pt'><span
style='font-family:宋体'>●信号功能：</span><span style='font-family:宋体'>本信号成为</span><span
lang=EN-US>'1'</span><span style='font-family:宋体'>时，不进行基于</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码的等待。忽略在加工程序中所指令的等待</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码。</span></p>

<p class=MsoNormal style='margin-left:84.0pt'><span style='font-family:宋体'>本信号成为</span><span
lang=EN-US>'0'</span><span style='font-family:宋体'>时，进行基于</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码的等待。在周边轴程序中指令等待</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码指令时，主程序会等待同一</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码指令，然后开始执行下一个程序段。</span></p>

<p class=MsoNormal><span style='font-family:宋体'>●信号地址：</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=594
 style='width:445.85pt;margin-left:26.6pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal><b><span lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#7</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#6</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#5</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#4</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#3</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#2</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#1</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#0</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=59 valign=top style='width:44.55pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>G663</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>NMWT6</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>NMWT5</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>NMWT4</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>NMWT3</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>NMWT2</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>NMWT1</span></b></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h3><span lang=EN-US>F</span><span style='font-family:宋体'>信号</span></h3>

<p class=MsoNormal><span style='font-family:宋体'>周边轴</span><span lang=EN-US>1~6</span><span
style='font-family:宋体'>组</span><span lang=EN-US>F</span><span style='font-family:
宋体'>信号汇总如下：</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b><span style='font-family:宋体'>周边轴</span><span
  lang=EN-US>F</span></b><b><span style='font-family:宋体'>信号</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-indent:31.6pt'><b><span style='font-family:
  宋体'>信号名称</span></b></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-indent:42.15pt'><b><span style='font-family:
  宋体'>信号意义</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US style='color:black'>F600.0~F600.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>周边轴</span><span
  lang=EN-US style='color:black'>1~6</span><span style='font-family:宋体;
  color:black'>组有效信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴控制组有效无效的标识</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F604.0~F604.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>自动运行暂停信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F0.4</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F605.0~F605.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>自动运行启动信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F0.5</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F607.0~F607.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>自动运行中信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F0.7</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F610.0~F610.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>报警中信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F001.0</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F611.0~F611.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>复位中信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F001.1</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F613.0~F613.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>分配结束信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F001.3</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F615.0~F615.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>攻丝中信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F001.5</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F617.0~F617.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>准备就绪信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F001.7</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F621.0~F621.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>快速移动中信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F002.1</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F626.0~F626.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>切削进给中信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F002.6</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F629.0~F629.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴等待</span><span lang=EN-US>M</span><span
  style='font-family:宋体'>代码执行中</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F063.6</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F630.0~F630.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>程序段跳过确认信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F004.0</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F631.0~F631.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>机床锁</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F004.1</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F633.0~F633.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>单段确认信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F004.3</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F634.0~F634.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>辅助功能锁确认信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F004.4</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F640.0~F640.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>辅助功能选通脉冲信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F007.0</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F642.0~F642.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>主轴功能选通脉冲信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F007.2</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F643.0~F643.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>刀具功能选通脉冲信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F007.3</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F646.0~F646.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>DM30</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F009.4</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F647.0~F647.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>DM02</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F009.5</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F648.0~F648.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>DM01</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F009.6</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F649.0~F649.5</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>DM00</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F009.7</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F650,F651</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F652,F653</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F654,F655</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F656,F657</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F658,F659</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F660,F661</span><span style='font-family:
  宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>辅助功能代码信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F010,F011</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F662,F663</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F664,F665</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F666,F667</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F668,F669</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F670,F671</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F672,F673</span><span style='font-family:
  宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>主轴功能代码信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F022,F023</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F674,F675</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F676,F677</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F678,F679</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F680,F681</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F682,F683</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F684,F685</span><span style='font-family:
  宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>刀具功能代码信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US>F026,F027</span><span
  style='font-family:宋体'>意义相同</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F688,F689</span><span style='font-family:
  宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴组</span><span lang=EN-US>1</span><span
  style='font-family:宋体'>启动</span><span lang=EN-US>M</span><span
  style='font-family:宋体'>代码起始号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>参数</span><span lang=EN-US>7130#</span><span
  style='font-family:宋体'>的输出值</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F690,F691</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴组</span><span lang=EN-US>2</span><span
  style='font-family:宋体'>启动</span><span lang=EN-US>M</span><span
  style='font-family:宋体'>代码起始号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>参数</span><span lang=EN-US>7131#</span><span
  style='font-family:宋体'>的输出值</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F692,F693</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴组</span><span lang=EN-US>3</span><span
  style='font-family:宋体'>启动</span><span lang=EN-US>M</span><span
  style='font-family:宋体'>代码起始号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>参数</span><span lang=EN-US>7132#</span><span
  style='font-family:宋体'>的输出值</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F694,F695</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴组</span><span lang=EN-US>4</span><span
  style='font-family:宋体'>启动</span><span lang=EN-US>M</span><span
  style='font-family:宋体'>代码起始号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>参数</span><span lang=EN-US>7133#</span><span
  style='font-family:宋体'>的输出值</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F696,F697</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴组</span><span lang=EN-US>5</span><span
  style='font-family:宋体'>启动</span><span lang=EN-US>M</span><span
  style='font-family:宋体'>代码起始号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>参数</span><span lang=EN-US>7134#</span><span
  style='font-family:宋体'>的输出值</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F698,F699</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>周边轴组</span><span lang=EN-US>6</span><span
  style='font-family:宋体'>启动</span><span lang=EN-US>M</span><span
  style='font-family:宋体'>代码起始号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>参数</span><span lang=EN-US>7135#</span><span
  style='font-family:宋体'>的输出值</span></p>
  </td>
 </tr>
 <tr>
  <td width=121 valign=top style='width:90.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>F700~F705</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F706~F711</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F712~F717</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F718~F723</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F724~F729</span><span style='font-family:
  宋体'>；</span></p>
  <p class=MsoNormal><span lang=EN-US>F730~F735</span><span style='font-family:
  宋体'>；</span></p>
  </td>
  <td width=198 valign=top style='width:148.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体;color:black'>用户宏程序用输出信号</span></p>
  </td>
  <td width=249 valign=top style='width:186.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>与</span><span lang=EN-US
  style='color:black'>F54 ~F59</span><span style='font-family:宋体'>意义相同</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><b><span lang=EN-US>PHCTL1~PHCTL6</span></b><b><span
style='font-family:宋体'>（</span><span lang=EN-US>F600.0~F600.5</span></b><b><span
style='font-family:宋体'>）：</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>●信号类型：</span><span
lang=EN-US>NC-&gt;PLC </span></p>

<p class=MsoNormal style='margin-left:83.25pt;text-indent:-83.25pt'><span
lang=EN-US style='font-family:宋体'>&nbsp;&nbsp;&nbsp; </span><span
style='font-family:宋体'>●信号功能：</span><span style='font-family:宋体;color:black'>周边轴</span><span
lang=EN-US style='color:black'>1~6</span><span style='font-family:宋体;
color:black'>组有效信号</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:21.0pt'><b><span
lang=EN-US>PHCTL1</span></b><span lang=EN-US>, </span><span style='font-family:
宋体'>周边轴控制组</span><span lang=EN-US>1</span><span style='font-family:宋体;
color:black'>有效</span><span style='font-family:宋体'>信号；</span></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>PHCTL 2</span></b><span
lang=EN-US>, </span><span style='font-family:宋体'>周边轴控制组</span><span lang=EN-US>2</span><span
style='font-family:宋体;color:black'>有效</span><span style='font-family:宋体'>信号；</span></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>………….</span></b></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>PHCTL 6</span></b><span
lang=EN-US>, </span><span style='font-family:宋体'>周边轴控制组</span><span lang=EN-US>6</span><span
style='font-family:宋体;color:black'>有效</span><span style='font-family:宋体'>信号；</span></p>

<p class=MsoNormal style='margin-left:94.5pt;text-indent:-94.5pt'><span
lang=EN-US style='font-family:宋体'>&nbsp;&nbsp;&nbsp; </span><span
style='font-family:宋体'>●输出条件：</span><span lang=EN-US>PHCTLn=0,</span><span
style='font-family:宋体'>对应的周边轴控制组无效；</span></p>

<p class=MsoNormal style='margin-left:63.0pt;text-indent:21.0pt'><span
lang=EN-US>PHCTLn=1,</span><span style='font-family:宋体'>对应的周边轴控制组有效；</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>●信号地址<span
lang=EN-US>:</span></span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=594
 style='width:445.85pt;margin-left:26.6pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#7</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#6</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#5</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#4</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#3</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#2</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#1</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#0</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=59 valign=top style='width:44.55pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>F600</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>PHCTL6</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>PHCTL5</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>PHCTL4</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>PHCTL3</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>PHCTL2</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>PHCTL1</span></b></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><b><span lang=EN-US>WATO1~WATO6</span></b><b><span
style='font-family:宋体'>（</span><span lang=EN-US>F629.0~F629.5</span></b><b><span
style='font-family:宋体'>）：</span></b></p>

<p class=MsoNormal style='text-indent:21.0pt'><span style='font-family:宋体'>●信号类型：</span><span
lang=EN-US>NC-&gt;PLC </span></p>

<p class=MsoNormal style='margin-left:83.25pt;text-indent:-83.25pt'><span
lang=EN-US style='font-family:宋体'>&nbsp;&nbsp;&nbsp; </span><span
style='font-family:宋体'>●信号功能：</span><span style='font-family:宋体'>此信号通知处于基于</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码等待中的事实</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:21.0pt'><b><span
lang=EN-US>WATO1</span></b><span lang=EN-US>, </span><span style='font-family:
宋体'>周边轴控制组</span><span lang=EN-US>1</span><span style='font-family:宋体'>，</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码等待中信号；</span></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>WATO2</span></b><span
lang=EN-US>, </span><span style='font-family:宋体'>周边轴控制组</span><span lang=EN-US>2</span><span
style='font-family:宋体'>，</span><span lang=EN-US>M</span><span style='font-family:
宋体'>代码等待中信号；</span></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>………….</span></b></p>

<p class=MsoNormal style='margin-left:105.0pt'><b><span lang=EN-US>WATO6</span></b><span
lang=EN-US>, </span><span style='font-family:宋体'>周边轴控制组</span><span lang=EN-US>6</span><span
style='font-family:宋体'>，</span><span lang=EN-US>M</span><span style='font-family:
宋体'>代码等待中信号；</span></p>

<p class=MsoNormal style='margin-left:94.5pt;text-indent:-94.5pt'><span
lang=EN-US style='font-family:宋体'>&nbsp;&nbsp;&nbsp; </span><span
style='font-family:宋体'>●输出条件：</span></p>

<p class=MsoNormal style='margin-left:42.0pt;text-indent:21.0pt'><span
style='font-family:宋体'>下列情形下成为</span><span lang=EN-US>'1'</span><span
style='font-family:宋体'>。</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><span
style='font-family:宋体'>·周边轴程序正在执行</span><span lang=EN-US>M</span><span
style='font-family:宋体'>等待代码；</span></p>

<p class=MsoNormal style='text-indent:63.0pt'><span style='font-family:宋体'>下列情形下成为</span><span
lang=EN-US>'0'</span><span style='font-family:宋体'>。</span></p>

<p class=MsoNormal style='margin-left:42.0pt;text-indent:42.0pt'><span
style='font-family:宋体'>周边轴程序未进行</span><span lang=EN-US>M</span><span
style='font-family:宋体'>代码等待。</span></p>

<p class=MsoNormal style='margin-left:94.5pt;text-indent:-73.5pt'><span
style='font-family:宋体'>●信号地址<span lang=EN-US>:</span></span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=594
 style='width:445.85pt;margin-left:26.6pt;border-collapse:collapse'>
 <tr style='page-break-inside:avoid'>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#7</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#6</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#5</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#4</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#3</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#2</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#1</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>#0</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=59 valign=top style='width:44.55pt;border:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>F629</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border:none;border-right:solid windowtext 1.5pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>&nbsp;</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>WATO6</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>WATO5</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.55pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>WATO4</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>WATO3</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border-top:solid windowtext 1.5pt;
  border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.0pt;
  padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>WATO2</span></b></p>
  </td>
  <td width=59 valign=top style='width:44.6pt;border:solid windowtext 1.5pt;
  border-left:none;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US>WATO1</span></b></p>
  </td>
 </tr>
</table>

<h2><span style='font-family:宋体'>钻孔和刚性攻丝示例</span></h2>

<h3><span lang=EN-US>6</span><span style='font-family:宋体'>个轴实现同时钻孔功能</span></h3>

<p class=MsoNormal><span style='font-family:宋体'>控制参数设置：</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=618
 style='width:463.8pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=45 valign=top style='width:33.7pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7100</span></p>
  </td>
  <td width=43 valign=top style='width:31.95pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=15 rowspan=7 valign=top style='width:11.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7101</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=16 rowspan=7 valign=top style='width:11.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7102</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=17 rowspan=7 valign=top style='width:12.55pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7103</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=15 rowspan=7 valign=top style='width:11.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7104</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>设置</span></p>
  </td>
  <td width=15 rowspan=7 valign=top style='width:11.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7105</span></p>
  </td>
  <td width=45 valign=top style='width:33.7pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>设置</span></p>
  </td>
 </tr>
 <tr>
  <td width=45 valign=top style='width:33.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=43 valign=top style='width:31.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=45 valign=top style='width:33.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=45 valign=top style='width:33.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=43 valign=top style='width:31.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=45 valign=top style='width:33.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=45 valign=top style='width:33.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=43 valign=top style='width:31.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>1</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>2</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>3</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>4</span></p>
  </td>
  <td width=45 valign=top style='width:34.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>5</span></p>
  </td>
  <td width=45 valign=top style='width:34.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=45 valign=top style='width:33.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>6</span></p>
  </td>
 </tr>
 <tr>
  <td width=45 valign=top style='width:33.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=43 valign=top style='width:31.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=45 valign=top style='width:33.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=45 valign=top style='width:33.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=43 valign=top style='width:31.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=45 valign=top style='width:33.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=45 valign=top style='width:33.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=43 valign=top style='width:31.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=43 valign=top style='width:32.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=45 valign=top style='width:33.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>控制组的程序开始执行</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=618
 style='width:463.8pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=45 valign=top style='width:33.65pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=15 rowspan=2 valign=top style='width:11.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=16 rowspan=2 valign=top style='width:11.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=17 rowspan=2 valign=top style='width:12.55pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=15 rowspan=2 valign=top style='width:11.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:34.05pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>设置</span></p>
  </td>
  <td width=15 rowspan=2 valign=top style='width:11.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=47 valign=top style='width:35.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=54 valign=top style='width:40.2pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>设置</span></p>
  </td>
 </tr>
 <tr>
  <td width=45 valign=top style='width:33.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7130</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8000</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7131</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8005</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7132</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8010</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7133</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8015</span></p>
  </td>
  <td width=45 valign=top style='width:34.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7134</span></p>
  </td>
  <td width=44 valign=top style='width:33.35pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8020</span></p>
  </td>
  <td width=47 valign=top style='width:35.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7135</span></p>
  </td>
  <td width=54 valign=top style='width:40.2pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8025</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr style='height:103.2pt'>
  <td width=225 valign=top style='width:168.45pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:103.2pt'>
  <p class=MsoNormal><span style='font-family:宋体'>主程序（示列）：</span></p>
  <p class=MsoNormal><span lang=EN-US>M8000&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>1</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M8005&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>2</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M8010&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>3</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M8015&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>4</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M8020&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>5</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M8025&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>6</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M30</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=568 colspan=3 valign=top style='width:426.1pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>控制程序（示例）：</span></p>
  </td>
 </tr>
 <tr>
  <td width=189 valign=top style='width:142.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>1</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 X0</span></p>
  <p class=MsoNormal><span lang=EN-US>G81 X-20 R2 F2000</span></p>
  <p class=MsoNormal><span lang=EN-US>X-30</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=189 valign=top style='width:142.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>2</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 Y0</span></p>
  <p class=MsoNormal><span lang=EN-US>G81 Y-40 R2 F2000</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 Y0</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=189 valign=top style='width:142.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>3</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 Z0</span></p>
  <p class=MsoNormal><span lang=EN-US>G81 Z-40 R2 F2000</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 Z0</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=189 valign=top style='width:142.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>4</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 A0</span></p>
  <p class=MsoNormal><span lang=EN-US>G81 A-15 R2 F2000</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 A0</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=189 valign=top style='width:142.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>5</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 C0</span></p>
  <p class=MsoNormal><span lang=EN-US>G83 Q5 C-40 R2 F2000</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 C0</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=189 valign=top style='width:142.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>6</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 B0</span></p>
  <p class=MsoNormal><span lang=EN-US>G73 B-12 Q7 R2 F2000</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 B0</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><b><span style='font-family:宋体'>注意：</span></b></p>

<p class=MsoNormal><span lang=EN-US>1</span><span style='font-family:宋体'>，设置</span><span
lang=EN-US>6</span><span style='font-family:宋体'>个轴同时钻孔时，需要将系统</span><span
lang=EN-US>6</span><span style='font-family:宋体'>个轴全部设置成直线轴，设置参数为</span><span
lang=EN-US>NO.187</span></p>

<p class=MsoNormal><span lang=EN-US>2</span><span style='font-family:宋体'>，设置钻孔时，</span><span
lang=EN-US>7100</span><span style='font-family:宋体'>～</span><span lang=EN-US>7105</span><span
style='font-family:宋体'>参数的轴号必须设置到</span><span lang=EN-US>Z</span><span
style='font-family:宋体'>轴上，否则将报警</span></p>

<p class=MsoNormal><span lang=EN-US>3</span><span style='font-family:宋体'>，</span><span
lang=EN-US>7100</span><span style='font-family:宋体'>～</span><span lang=EN-US>7105</span><span
style='font-family:宋体'>参数既是输出地址，也是编程地址</span></p>

<h3><span lang=EN-US>3</span><span style='font-family:宋体'>个轴同时刚性攻丝功能</span></h3>

<p class=MsoNormal><span style='font-family:宋体'>基本设置</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>No.187</span></p>
  </td>
  <td width=105 valign=top style='width:78.9pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置轴属性</span></p>
  </td>
  <td width=16 rowspan=7 valign=top style='width:11.8pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=59 valign=top style='width:43.95pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>3760</span></p>
  </td>
  <td width=114 valign=top style='width:85.8pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span><span lang=EN-US>CS</span><span
  style='font-family:宋体'>关联轴</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=105 valign=top style='width:78.9pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>00000000</span></p>
  </td>
  <td width=59 valign=top style='width:43.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>S1</span></p>
  </td>
  <td width=114 valign=top style='width:85.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>5</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=105 valign=top style='width:78.9pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>00000000</span></p>
  </td>
  <td width=59 valign=top style='width:43.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>S2</span></p>
  </td>
  <td width=114 valign=top style='width:85.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>4</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=105 valign=top style='width:78.9pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>00000000</span></p>
  </td>
  <td width=59 valign=top style='width:43.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>S3</span></p>
  </td>
  <td width=114 valign=top style='width:85.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>6</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=105 valign=top style='width:78.9pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>00000001</span></p>
  </td>
  <td width=59 valign=top style='width:43.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=114 valign=top style='width:85.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=105 valign=top style='width:78.9pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>00000001</span></p>
  </td>
  <td width=59 valign=top style='width:43.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=114 valign=top style='width:85.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=64 valign=top style='width:47.95pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=105 valign=top style='width:78.9pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>00000001</span></p>
  </td>
  <td width=59 valign=top style='width:43.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=114 valign=top style='width:85.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><b><span lang=EN-US>&nbsp;</span></b></p>

<p class=MsoNormal><b><span style='font-family:宋体'>注：</span></b></p>

<p class=MsoNormal><span lang=EN-US>CS</span><span style='font-family:宋体'>轴的关联轴，必须跟周边轴控制的轴号相匹配</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>控制参数设置：</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=298
 style='width:223.7pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=46 valign=top style='width:34.35pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7100</span></p>
  </td>
  <td width=43 valign=top style='width:32.55pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=15 rowspan=7 valign=top style='width:11.35pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=46 valign=top style='width:34.45pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>7101</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=16 rowspan=7 valign=top style='width:12.05pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.75pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7102</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
 </tr>
 <tr>
  <td width=46 valign=top style='width:34.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=43 valign=top style='width:32.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=46 valign=top style='width:34.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>X</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=46 valign=top style='width:34.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=43 valign=top style='width:32.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=46 valign=top style='width:34.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Y</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=46 valign=top style='width:34.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=43 valign=top style='width:32.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>1</span></p>
  </td>
  <td width=46 valign=top style='width:34.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>2</span></p>
  </td>
  <td width=45 valign=top style='width:33.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>Z</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>3</span></p>
  </td>
 </tr>
 <tr>
  <td width=46 valign=top style='width:34.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=43 valign=top style='width:32.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=46 valign=top style='width:34.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>A</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=46 valign=top style='width:34.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=43 valign=top style='width:32.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>5</span></p>
  </td>
  <td width=46 valign=top style='width:34.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>4</span></p>
  </td>
  <td width=45 valign=top style='width:33.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>C</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>6</span></p>
  </td>
 </tr>
 <tr>
  <td width=46 valign=top style='width:34.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=43 valign=top style='width:32.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=46 valign=top style='width:34.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>B</span></p>
  </td>
  <td width=43 valign=top style='width:32.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:宋体'>控制组的程序开始执行</span><span
lang=EN-US>M</span><span style='font-family:宋体'>代码</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=293
 style='width:219.9pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=45 valign=top style='width:33.65pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=15 rowspan=2 valign=top style='width:11.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
  <td width=16 rowspan=2 valign=top style='width:11.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-family:宋体'>设置</span></p>
  </td>
 </tr>
 <tr>
  <td width=45 valign=top style='width:33.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7130</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8000</span></p>
  </td>
  <td width=45 valign=top style='width:33.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7131</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8005</span></p>
  </td>
  <td width=44 valign=top style='width:33.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>7132</span></p>
  </td>
  <td width=43 valign=top style='width:32.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US>8010</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=300 valign=top style='width:225.15pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>主程序（示列）：</span></p>
  <p class=MsoNormal><span lang=EN-US>M8000&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>1</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M8005&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>2</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M8010&nbsp; </span><span
  style='font-family:宋体'>（调用控制程序</span><span lang=EN-US>3</span><span
  style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>M30</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=568 colspan=3 valign=top style='width:426.1pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span style='font-family:宋体'>控制程序（示例）：</span></p>
  </td>
 </tr>
 <tr>
  <td width=189 valign=top style='width:142.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>1</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 X0</span></p>
  <p class=MsoNormal><span lang=EN-US>M29 S500</span></p>
  <p class=MsoNormal><span lang=EN-US>G74 X-20 R2 F1</span></p>
  <p class=MsoNormal><span lang=EN-US>X-30</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=189 valign=top style='width:142.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>2</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 Y0</span></p>
  <p class=MsoNormal><span lang=EN-US>M29 S500</span></p>
  <p class=MsoNormal><span lang=EN-US>G74 Y-15 R2 F1</span></p>
  <p class=MsoNormal><span lang=EN-US>Y-31</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
  <td width=189 valign=top style='width:142.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><span lang=EN-US>O8000</span><span style='font-family:
  宋体'>（控制程序</span><span lang=EN-US>3</span><span style='font-family:宋体'>）</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 Z0</span></p>
  <p class=MsoNormal><span lang=EN-US>M29 S500</span></p>
  <p class=MsoNormal><span lang=EN-US>G74 Z-18 R2 F1</span></p>
  <p class=MsoNormal><span lang=EN-US>Z-22</span></p>
  <p class=MsoNormal><span lang=EN-US>G0 Z0</span></p>
  <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><b><span style='font-family:宋体'>注意：</span></b></p>

<p class=MsoNormal><span lang=EN-US>1</span><span style='font-family:宋体'>，设置攻丝时，运动轴必须设置到</span><span
lang=EN-US>Z</span><span style='font-family:宋体'>轴上，旋转轴必须设定到第</span><span
lang=EN-US>5</span><span style='font-family:宋体'>轴上，否则无效。</span></p>

<p class=MsoNormal><span lang=EN-US>2</span><span style='font-family:宋体'>，</span><span
lang=EN-US>7100</span><span style='font-family:宋体'>～</span><span lang=EN-US>7105</span><span
style='font-family:宋体'>参数既是输出地址，也是编程地址</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

`