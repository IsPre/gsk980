import os
import json
import re
from bs4 import BeautifulSoup

# 目录路径
directory = os.path.dirname(os.path.abspath(__file__))

# 正则表达式模式，用于匹配反引号包围的多行字符串
pattern = r"`(.*?)`"

# 遍历目录中的文件
for filename in os.listdir(directory):
    if filename.endswith(".js"):  # 假设文件是js文件
        print(f"提取文件{filename}")
        with open(os.path.join(directory, filename), "r", encoding="utf-8") as file:
            content = file.read()

            # 查找所有反引号包围的多行字符串
            matches = re.findall(pattern, content, re.DOTALL)

            for match in matches:
                # 尝试解析HTML内容
                try:
                    soup = BeautifulSoup(match, "html.parser")
                    # 检查是否包含<div>标签
                    if soup.find("div"):
                        # 提取所有<div>标签及其嵌套内容
                        div_contents = [str(div) for div in soup.find_all("div")]

                        # 将HTML内容中的换行符替换为'\n'
                        single_line_content = div_contents[0]

                        # 创建一个字典来存储提取的内容
                        extracted_data = {"content": single_line_content}

                        # 将提取的内容保存为JSON文件
                        json_filename = os.path.splitext(filename)[0] + ".json"
                        with open(
                            os.path.join(directory, json_filename),
                            "w",
                            encoding="utf-8",
                        ) as json_file:
                            json.dump(
                                extracted_data, json_file, ensure_ascii=False, indent=2
                            )
                        print(f"从{filename}中提取的内容已保存为{json_filename}")
                except Exception as e:
                    print(f"解析HTML时出错: {e}")
