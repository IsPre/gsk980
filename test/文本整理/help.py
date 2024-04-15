#
# 将help文本解析程html
#


import re


with open("help.txt", "r", encoding="gb2312") as file:
    lines = file.readlines()

output_lines = []
image = False

for line in lines:
    line = line.strip()
    line = line.replace("\t", "").replace("\n", "").replace("\r", "")
    if line == "":
        pass

    line = line.replace("\\t", "\t").replace("\\n", "\n").replace("\\r", "\r")
    print(line)



    line_str = line
    line_str = line_str.strip()

    match = re.search(r"\[pic\](\d+,)(\d+,)(.+)\[\\pic\]", line_str)
    if match:
        url = match.group(3)
        url_parts = url.split("/")
        url_part = url_parts[-1]

        tag = f'<img src = "{url_part}">'

        line = line.replace(url, "").replace("[pic]", tag).replace("[\\pic]", "</img>")

        line = line.replace(match.group(1), "")
        line = line.replace(match.group(2), "")
        output_lines.append(line)
        image = True

    else:
        match = re.search(r"\\p", line)
        if match:
            line = line.replace("\\p", "\n\r")
            output_lines.append(line)
            output_lines.append("</div>")
            output_lines.append("<div>\n")
        elif not image:
            output_lines.append("<p>")
            output_lines.append(line)
            output_lines.append("</p>\n")
        image = False

output_lines.insert(0, "<div>")


with open("help.html", "w", encoding="utf-8") as file:
    file.write("\n".join(output_lines))
