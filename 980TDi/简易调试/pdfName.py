import os
import re
import json
from urllib.parse import quote

# 指定目录路径
directory = "H:\\Desktop\\gitee\\lyyuoo\\980TDi\\简易调试"

# 获取目录下所有文件
files = os.listdir(directory)

# 提取所有PDF文件名
pdf_files = [file for file in files if file.endswith(".pdf")]

# 按照数字序号排序PDF文件名
pdf_files.sort(
    key=lambda x: [int(s) if s.isdigit() else s.lower() for s in re.split(r"(\d+)", x)]
)

parentDir = "简易调试"
# 构建输出格式
output_data = {"content_1": []}
for pdf_file in pdf_files:
    name = os.path.splitext(pdf_file)[0]  # 去掉.pdf后缀
    url = f"https://gitee.com/lyyuoo/lyyuoo/raw/master/980TDi/{quote(parentDir)}/{quote(pdf_file)}"

    output_data["content_1"].append({"name": name, "url": url})

# 保存为JSON格式
output_file = f"H:\\Desktop\\gitee\\lyyuoo\\980TDi\\{parentDir}/catalogue2.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=4)

print(f"PDF文件名已按数字序号排序并保存为JSON格式到 {output_file} 文件中。")
