import os
import re

# 定义一个正则表达式模式，用于匹配<div></div>之间的内容（包括<div></div>标记）
pattern = re.compile(r"<div>(.*?)</div>")

# 获取当前目录下所有的文本文件
file_list = [file for file in os.listdir() if file.endswith(".json")]

for file_name in file_list:

    # 读取文本文件
    with open(file_name, "r", encoding="utf-8") as file:
        text = file.read()

    # 使用findall函数找到所有匹配的内容
    matches = re.findall(pattern, text)

    # 将匹配到的内容连接成一行字符串
    one_line_text = " ".join(matches)

    # 保存结果到新文件
    new_file_name = file_name.replace(".txt", "_cleaned.txt")
    with open(new_file_name, "w") as new_file:
        new_file.write(one_line_text)

    print(f"处理完成，结果已保存到 {new_file_name}")
