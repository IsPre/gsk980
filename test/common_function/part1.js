export const part1=
`


<div class=WordSection1 style='layout-grid:15.6pt'>

<h1><span lang=EN-US>1</span>、<span lang=EN-US>DXF</span>钻孔铣槽<span lang=EN-US>CAM</span>功能</h1>

<h2><a name="_Toc96522502"><span lang=EN-US>1.1&nbsp; DXF</span>文件传输和浏览</a></h2>

<p class=MsoNormal style='text-indent:35.45pt'><span lang=EN-US>DXF</span>文件编辑好以后，先要传输到<span
lang=EN-US>CNC</span>系统当中。传输的步骤和图片如下：</p>

<p class=MsoNormal style='margin-left:81.0pt;text-indent:-18.0pt'><span
lang=EN-US style='font-family:"Times New Roman",serif'>1）<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span>将<span lang=EN-US>DXF</span>文件拷贝到<span
lang=EN-US>U</span>盘当中；</p>

<p class=MsoNormal style='margin-left:81.0pt;text-indent:-18.0pt'><span
lang=EN-US style='font-family:"Times New Roman",serif'>2）<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span>将<span lang=EN-US>U</span>盘插入系统，这个时候系统将进行<span
lang=EN-US>U</span>盘的读取；</p>

<p class=MsoNormal style='margin-left:81.0pt;text-indent:-18.0pt'><span
lang=EN-US style='font-family:"Times New Roman",serif'>3）<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span>按<span lang=EN-US><img
width=36 height=34 id="图片 37" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image001.jpg"></span>按键，进入后，按<span
lang=EN-US style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;color:#004080'><img
width=72 height=34 id="图片 36" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image002.jpg"></span>按键进入到文件管理页面当中；</p>

<p class=MsoNormal style='margin-left:81.0pt;text-indent:-18.0pt'><span
lang=EN-US style='font-family:"Times New Roman",serif'>4）<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span>按<span lang=EN-US><img
width=37 height=34 id="图片 35" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image003.jpg"></span>选中<span
lang=EN-US>U</span>盘中<span lang=EN-US>DXF</span>文件后，在<span lang=EN-US><img
width=39 height=35 id="图片 34" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image004.jpg"></span>的工作方式下，按<span
lang=EN-US><img width=36 height=34 id="图片 33" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image005.jpg"></span>按键，即可将<span
lang=EN-US>DXF</span>文件传输到<span lang=EN-US>CNC</span>系统当中。</p>

<p class=MsoNormal align=center style='margin-left:63.0pt;text-align:center'><span
lang=EN-US><img width=428 height=322 id="图片 32" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image006.jpg"></span></p>

<p class=MsoNormal align=center style='margin-left:63.0pt;text-align:center'><span
lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='text-indent:21.0pt'><span lang=EN-US>DXF</span>文件传输完成以后，按<span
lang=EN-US style='font-size:10.0pt;font-family:宋体'><img width=37 height=34
id="图片 31" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image007.jpg"></span><span style='font-size:10.0pt'>按键，进入后，按</span><span
lang=EN-US><img width=73 height=34 id="图片 30" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image008.jpg"></span>软按键，即可对传输到<span
lang=EN-US>CNC</span>系统的文件进行浏览，如下所示：</p>

<p class=MsoNormal align=center style='margin-left:21.0pt;text-align:center;
text-indent:42.0pt'><span lang=EN-US><img width=434 height=325
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image009.jpg"></span></p>

<h2><a name="_Toc96522503"><span lang=EN-US>1.2&nbsp; DXF</span>文件后处理</a></h2>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:16.5pt'><span
lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DXF</span>后处理只能对文件中整圆以及直线、多段线、圆弧组成的闭合轮廓数据进行操作。用户在编辑<span
lang=EN-US>DXF</span>文件的时候，需注意：<span lang=EN-US>1</span>）打孔时，整圆作孔，圆心位置代表孔的中心位置；<span
lang=EN-US>2</span>）同一颜色轮廓除了坐标位置不同以外，其他加工信息都作一致性处理，编辑时，需做好孔和槽的分类工作。</p>

<h2><a name="_Toc96522504"><span lang=EN-US>1.2.1 </span>进入<span lang=EN-US>DXF</span>后处理</a></h2>

<p class=MsoNormal style='margin-left:63.0pt'>在<span lang=EN-US>DXF</span>文件界面，按<span
lang=EN-US><img width=47 height=37 id="图片 29" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image010.png"></span>菜单进入<span
lang=EN-US>DXF</span>后处理页面，系统按照颜色对轨迹进行分类，如下图所示：</p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US><img
width=434 height=325 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image011.jpg"></span></p>

<h3><a name="_Toc96522505"><span lang=EN-US>1.2.2 </span>孔设置</a></h3>

<p class=MsoNormal style='margin-left:63.0pt'>孔设置的孔类型主要有三种：钻孔设置、攻丝设置和镗孔设置。</p>

<p class=MsoNormal align=left style='margin-left:63.0pt;text-align:left'><span
lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-size:12.0pt;font-family:Wingdings'>n<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
style='font-size:12.0pt'>基本信息设置</span></b></p>

<p class=MsoNormal style='margin-left:84.0pt'>无论是钻孔、攻丝还是镗孔都包含一个基本信息设置项。孔的基本信息设置包括：刀号选择、安全高度、参考高度、工件表面、加工深度的信息。</p>

<p class=MsoNormal style='margin-left:84.0pt'>如下所示：</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US><img width=435
height=93 id="图片 28" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image012.jpg" alt=未标题-1></span></p>

<p class=MsoNormal style='margin-left:84.0pt'>刀号选择：决定当前钻孔需要选择的刀具类型，如果当前有刀库，需要换刀，则输入的范围为<span
lang=EN-US>1-32</span>，如果所有孔的刀号选择都为<span lang=EN-US>0</span>，则程序中将不执行换刀。</p>

<p class=MsoNormal style='margin-left:84.0pt'>安全高度：安全高度是指<span lang=EN-US>Z</span>轴加工的起始位置，也就是固定循环打孔中所说的<span
lang=EN-US>Z</span>轴初始点坐标位置。该数值是工件表面的相对值。</p>

<p class=MsoNormal style='margin-left:84.0pt'>参考高度：参考高度是指<span lang=EN-US>Z</span>轴下刀距离工件表面的相对高度，也就是固定循环中所说的<span
lang=EN-US>R</span>点高度，设置时不能大于安全点高度。</p>

<p class=MsoNormal style='margin-left:84.0pt'>工件表面：是指<span lang=EN-US>Z</span>轴在工件表面的一个对刀值，是一个绝对值。</p>

<p class=MsoNormal style='margin-left:84.0pt'>加工深度：是指从工件表面相下加工的深度，是一个相对值。</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-size:12.0pt;font-family:Wingdings'>n<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
style='font-size:12.0pt'>钻孔设置</span></b></p>

<p class=MsoNormal style='margin-left:84.0pt'>按<span lang=EN-US><img width=43
height=33 id="图片 27" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image013.png"></span>菜单进入钻孔设置处理，界面如下图所示：</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US><img width=434
height=325 id="图片 26" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image014.jpg" alt=钻孔设置></span></p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-size:12.0pt;font-family:Wingdings'>n<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
style='font-size:12.0pt'>攻丝设置</span></b></p>

<p class=MsoNormal style='margin-left:84.0pt'>按<span lang=EN-US><img width=39
height=35 id="图片 25" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image015.png"></span>菜单进入攻丝设置处理，界面如下图所示：</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US><img width=434
height=325 id="图片 24" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image016.jpg" alt=无标题4></span></p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-size:12.0pt;font-family:Wingdings'>n<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
style='font-size:12.0pt'>镗孔设置</span></b></p>

<p class=MsoNormal style='margin-left:84.0pt'>按<span lang=EN-US><img width=44
height=42 id="图片 23" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image017.png"></span>菜单进入镗孔设置处理，界面如下图所示：</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US><img width=434
height=325 id="图片 22" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image018.jpg" alt=无标题3></span></p>

<h3><a name="_Toc96522506"><span lang=EN-US>1.2.3 </span>槽设置</a></h3>

<p class=MsoNormal style='margin-left:63.0pt'>进入<span lang=EN-US>DXF</span>后处理页面后，选择<span
lang=EN-US><img width=61 height=26 id="图片 21" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image019.png"></span>软按键进入铣槽设置，系统按照颜色对轨迹进行分类，如下图所示：</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US><img width=434
height=325 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image020.jpg"></span></p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-size:12.0pt;font-family:Wingdings'>n<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
style='font-size:12.0pt'>槽参数设置</span></b></p>

<p class=MsoNormal style='margin-left:84.0pt'>按<span lang=EN-US><img width=46
height=40 id="图片 20" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image021.png"></span>菜单进入槽参数设置，界面如下图所示：</p>

<p class=MsoNormal style='margin-left:84.0pt'><b><span lang=EN-US
style='font-size:12.0pt'><img width=434 height=325
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image022.jpg"></span></b></p>

<p class=MsoNormal style='margin-left:84.0pt'><b><span lang=EN-US
style='font-size:12.0pt'>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-size:12.0pt;font-family:Wingdings'>n<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
style='font-size:12.0pt'>轨迹预览</span></b></p>

<p class=MsoNormal style='margin-left:84.0pt'>完成槽参数设置后，可以按<span lang=EN-US><img
width=50 height=42 id="图片 19" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image023.png"></span>菜单查看铣槽轨迹，如下图所示：</p>

<p class=MsoNormal align=center style='margin-left:84.0pt;text-align:center'><span
lang=EN-US><img width=434 height=325 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image024.jpg"></span></p>

<h3><a name="_Toc96522507"><span lang=EN-US>1.2.4 </span>工艺修改</a></h3>

<p class=MsoNormal style='margin-left:84.0pt'>在<span lang=EN-US>DXF</span>后处理页面按<span
lang=EN-US><img width=62 height=32 id="图片 18" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image025.png"></span>按键可进入工艺修改页面。工艺修改主要包括两部分：原点修改和类型排序修改。</p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-size:12.0pt;font-family:Wingdings'>n<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
style='font-size:12.0pt'>原点修改</span></b></p>

<p class=MsoListParagraph align=left style='margin-left:102.0pt;text-align:
left;text-indent:-18.0pt'><span lang=EN-US>1）<span style='font:7.0pt "Times New Roman"'>
</span></span>移动光标选择对应孔，按<span lang=EN-US><img width=47 height=39 id="图片 17"
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image026.jpg"></span>设置对应孔中心为原点，按<span lang=EN-US><img
width=49 height=41 id="图片 16" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image027.jpg"></span>则原点恢复为绘图坐标系原点。</p>

<p class=MsoListParagraph align=left style='margin-left:102.0pt;text-align:
left;text-indent:-18.0pt'><span lang=EN-US>2）<span style='font:7.0pt "Times New Roman"'>
</span></span>移动光标选择对应孔，按<span lang=EN-US><img width=34 height=35 id="图片 15"
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image028.png"></span>键可以选择对应孔加工有效还是无效。当该孔打√时，表示有效，空白表示无效。</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US><img width=434
height=325 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image029.jpg"></span></p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:84.0pt;text-indent:-21.0pt'><span
lang=EN-US style='font-size:12.0pt;font-family:Wingdings'>n<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
style='font-size:12.0pt'>类型排序修改</span></b></p>

<p class=MsoListParagraph style='margin-left:112.5pt;text-indent:-18.0pt'><span
lang=EN-US>1）<span style='font:7.0pt "Times New Roman"'> </span></span>按<span
lang=EN-US><img width=85 height=32 id="图片 14" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image030.jpg"
alt=2700610613></span>按键进入类型排序修改页面，按<span lang=EN-US><img width=79 height=32
id="图片 13" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image031.jpg"></span>、 </p>

<p class=MsoListParagraph style='margin-left:112.5pt;text-indent:0cm'><span
lang=EN-US><img width=85 height=32 id="图片 12" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image032.jpg"></span>或直接输入数字可以对工艺排序进行修改。</p>

<p class=MsoNormal style='margin-left:105.0pt'><span lang=EN-US><img width=434
height=325 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image033.jpg"></span></p>

<p class=MsoListParagraph style='margin-left:102.0pt;text-indent:-18.0pt'><span
lang=EN-US>2）<span style='font:7.0pt "Times New Roman"'> </span></span>按<span
lang=EN-US><img width=47 height=40 id="图片 11" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image034.png"></span>可以设置不同类型的加工路线：包括就近加工、<span
lang=EN-US>X</span>轴方向加工、<span lang=EN-US>Y</span>轴方向加工。</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US><img width=435
height=325 id="图片 10" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image035.jpg" alt=未标题-2></span></p>

<h3><a name="_Toc96522508"><span lang=EN-US>1.2.5 </span>坐标系设置</a></h3>

<p class=MsoListParagraph style='margin-left:63.0pt;text-indent:0cm'>在<span
lang=EN-US>DXF</span>后处理页面按<span lang=EN-US><img width=65 height=29 id="图片 9"
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image036.png"></span>进入坐标系设置，可以设置单工位或多工位坐标系方式进行加工，如下图所示：</p>

<p class=MsoNormal style='margin-left:84.0pt'><span lang=EN-US><img width=434
height=325 src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image037.jpg"></span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:16.5pt'><span
lang=EN-US>&nbsp;</span></p>

<h2><a name="_Toc96522509"><span lang=EN-US>1.3&nbsp; </span>程序生成注意事项和参数控制</a></h2>

<p class=MsoNormal style='text-indent:21.0pt'>在所有需要加工信息填充完成以后，返回到<span
lang=EN-US>DXF</span>后处理起始页面，按<span lang=EN-US><img width=40 height=34 id="图片 8"
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image038.jpg"></span>按键，在弹出对话框类输入相应文件名后按<span lang=EN-US><img
width=48 height=42 id="图片 7" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image039.jpg"></span>，系统根据<span
lang=EN-US>DXF</span>后处理信息生成相应的加工程序。</p>

<p class=MsoNormal align=center style='text-align:center;text-indent:81.0pt'><span
lang=EN-US><img width=428 height=322 id="图片 6" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image040.jpg"></span></p>

<p class=MsoNormal style='text-indent:21.0pt'>如果按<span lang=EN-US><img
width=39 height=34 id="图片 5" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image041.jpg"></span>按键，则所有的孔设置信息将无效，退出且不生成程序。</p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><b><span
style='font-size:14.0pt'>注意事项：</span></b></p>

<p class=MsoNormal style='margin-left:69.0pt;text-indent:-21.0pt'><span
lang=EN-US>1)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>只能在编辑、手脉、手动方式下才能进入到孔参数设置页面；</p>

<p class=MsoNormal style='margin-left:69.0pt;text-indent:-21.0pt'><span
lang=EN-US>2)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>如果是单工位的坐标系，则只在相应文件名下生成一个主程序文件。如果选择的是多工位，则除了生成主程序文件外，还将生成一个被调用的子程序文件<span
lang=EN-US>;</span></p>

<p class=MsoNormal style='margin-left:69.0pt;text-indent:-21.0pt'><span
lang=EN-US>3)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>填充数据时，如果数据不合规范，则按<span lang=EN-US style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;color:#004080'><img width=39 height=34 id="图片 4"
src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image042.jpg"></span>返回上一层时，将提示报警。如果选择<span lang=EN-US><img
width=39 height=34 id="图片 3" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image043.jpg"></span>按键，则当前设置数据恢复为进入设置前的状态并退出打孔设置<span
lang=EN-US>;</span></p>

<p class=MsoNormal style='margin-left:69.0pt;text-indent:-21.0pt'><span
lang=EN-US>4)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>生成程序时，如果填充的孔信息需要做换刀处理，这时如果换刀中出现<span lang=EN-US>0</span>号程序，则提示报警；</p>

<p class=MsoNormal style='margin-left:69.0pt;text-indent:-21.0pt'><span
lang=EN-US>5)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>如果对打孔的类型处理不满意，在孔参数设置页面，按<span lang=EN-US><img width=39 height=34
id="图片 2" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image044.jpg"></span>即可清除当前设置的打孔设置信息；</p>

<p class=MsoNormal style='margin-left:69.0pt;text-indent:-21.0pt'><span
lang=EN-US>6)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>填充好的钻孔设置信息将被保留到<span lang=EN-US>DXF</span>文件当中，下一次对该<span
lang=EN-US>DXF</span>文件进行钻孔程序生成时，只需再执行一次<span lang=EN-US><img width=40
height=34 id="图片 1" src="https://gitee.com/lyyuoo/gsk980/raw/master/picture/980MDi%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD/image038.jpg"></span>，即可立即生成打孔程序。</p>

<p class=MsoNormal style='margin-left:69.0pt;text-indent:-21.0pt'><span
lang=EN-US>7)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>生成程序时，如果同颜色的圆也是同圆心，这时候，钻孔只做一次处理，工艺中会规避掉这种类型的孔重复加工的情况。</p>

<p class=MsoNormal style='margin-left:69.0pt;text-indent:-21.0pt'><span
lang=EN-US>8)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>同一个孔设置，只能设置一次攻丝或者镗孔，且攻丝或者镗孔的默认加工顺序在钻孔之后。</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:5.9pt'><b><span
style='font-size:12.0pt'>参数控制：</span></b></p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=480
 style='width:360.0pt;margin-left:68.4pt;border-collapse:collapse;border:none'>
 <tr style='height:18.15pt'>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>300</span></p>
  </td>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>***</span></p>
  </td>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>***</span></p>
  </td>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>***</span></p>
  </td>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>***</span></p>
  </td>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>***</span></p>
  </td>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>***</span></p>
  </td>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>***</span></p>
  </td>
  <td width=53 valign=top style='width:40.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.15pt'>
  <p class=MsoNormal><span lang=EN-US>DXFTOOL</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:20.85pt'><b><span
lang=EN-US style='font-size:14.0pt'> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><span
lang=EN-US>DXFTOOL&nbsp; ==1</span>：<span lang=EN-US>DXF</span>文件打孔换刀方式，自动换刀</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'><span
lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
==0</span>：<span lang=EN-US>DXF</span>文件打孔换刀方式，手动换刀</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'>示例<span
lang=EN-US>1</span>：</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'>当自动换刀有效时，生成如下的程序：</p>

<p class=MsoNormal style='margin-left:15.6pt;text-indent:21.0pt'><span
lang=EN-US>G91
 G30 Z0.0 P2</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'>（刀具刀号：<span
lang=EN-US>02</span>；打孔个数：<span lang=EN-US>10</span>）</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><span
lang=EN-US>T02
 M6</span>（<span lang=EN-US>T</span>指令换刀）</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><span
lang=EN-US>G98
 G90 X10 Y10
 M03 S1000</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:20.9pt'>。。。。。。</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:21.0pt'><span
lang=EN-US>M30</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'><span
lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'>示例<span
lang=EN-US>2</span>：</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'>当手动换刀有效时，生成如下的程序：</p>

<p class=MsoNormal style='margin-left:15.6pt;text-indent:21.0pt'><span
lang=EN-US>G91
 G30 Z0.0 P2</span></p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'>（刀具刀号：<span
lang=EN-US>02</span>；打孔个数：<span lang=EN-US>10</span>）</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'><span
lang=EN-US>M05</span></p>

<p class=MsoNormal style='margin-left:15.65pt;text-indent:21.0pt'><span
lang=EN-US>M00 </span>（此处暂停，用户可以手动进行换刀处理）</p>

<p class=MsoNormal style='margin-left:21.0pt;text-indent:15.65pt'>。。。。。。</p>

<p class=MsoNormal style='margin-left:15.6pt;text-indent:21.0pt'><span
lang=EN-US>M30</span></p>

<p class=MsoNormal align=center style='margin-top:0cm;margin-right:-7.7pt;
margin-bottom:0cm;margin-left:52.5pt;margin-bottom:.0001pt;text-align:center;
text-indent:-10.5pt'><span lang=EN-US>&nbsp;</span></p>

</div>

<span lang=EN-US style='font-size:10.5pt;font-family:等线'><br clear=all
style='page-break-before:always'>
</span>

<div class=WordSection2 style='layout-grid:15.6pt'>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>
`