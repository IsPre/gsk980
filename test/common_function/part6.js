export const part6=
`
<div class=WordSection1 style='layout-grid:15.6pt'>

<h1><span lang=EN-US>6</span><span style='font-family:宋体'>、</span><span
lang=EN-US>G01</span><span style='font-family:宋体'>铣平面功能指令功能</span></h1>

<p class=MsoNormal><span style='font-family:宋体'>指令</span><span lang=EN-US>G01</span><span
style='font-family:宋体'>时，如果指定</span><span lang=EN-US>K</span><span
style='font-family:宋体'>值，可以在</span><span lang=EN-US>G17</span><span
style='font-family:宋体'>平面下实现铣平面操作</span></p>

<p class=MsoNormal><b><span lang=EN-US>&nbsp;</span></b></p>

<p class=MsoNormal><b><span style='font-family:宋体'>指令格式</span></b></p>

<p class=MsoNormal><span lang=EN-US>G01 X__&nbsp; Y__&nbsp; K__</span></p>

<p class=MsoNormal><span lang=EN-US>X/ Y:</span><span style='font-family:宋体'>铣平面的终点位置</span></p>

<p class=MsoNormal><span lang=EN-US>K</span><span style='font-family:宋体'>：每次来回铣的进刀距离，应小于刀具直径的</span><span
lang=EN-US>75%</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><b><span style='font-family:宋体'>注意事项：</span> </b></p>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt'><span
lang=EN-US>1、<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
style='font-family:宋体'>指定终点坐标</span><span lang=EN-US>X</span><span
style='font-family:宋体'>、</span><span lang=EN-US>Y</span><span style='font-family:
宋体'>是起点坐标的对角线位置，必须有差值，如果无差值，则不会执行铣平面功能</span></p>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt'><span
lang=EN-US>2、<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
style='font-family:宋体'>指定</span><span lang=EN-US>K</span><span
style='font-family:宋体'>值铣平面功能时，指定其他轴地址移动时，铣平面功能无效</span></p>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt'><span
lang=EN-US>3、<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-US>C</span><span style='font-family:宋体'>刀补和前瞻状态下，铣平面功能无效</span></p>

<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt'><span
lang=EN-US>4、<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
style='font-family:宋体'>执行铣平面功能时，是以</span><span lang=EN-US>X</span><span
style='font-family:宋体'>和</span><span lang=EN-US>Y</span><span style='font-family:
宋体'>的较短轴进行刀具平移，以较长轴作为来回往复进行加工</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><b><span style='font-family:宋体'>示例</span><span lang=EN-US>(</span></b><b><span
style='font-family:宋体'>如下图所示</span><span lang=EN-US>)</span></b><b><span
style='font-family:宋体'>：</span></b></p>

<p class=MsoNormal><span lang=EN-US>G0 X0 Y0</span></p>

<p class=MsoNormal><span lang=EN-US>G01 Z-15 F600</span><span style='font-family:
宋体'>（移动到</span><span lang=EN-US>Z</span><span style='font-family:宋体'>轴位置）</span></p>

<p class=MsoNormal><span lang=EN-US>G01 X20 Y16 K3</span><span
style='font-family:宋体'>（</span><span lang=EN-US>Y</span><span style='font-family:
宋体'>轴为短轴，每次进刀</span><span lang=EN-US>k=3mm</span><span style='font-family:宋体'>，</span><span
lang=EN-US>D=6mm</span><span style='font-family:宋体'>）</span></p>

<p class=MsoNormal><span lang=EN-US>M30</span><img width=317 height=322
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image053.png" align=left hspace=12></p>

</div>

`