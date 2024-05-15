import os
import json
import re


def parse_text_line(line):
   
    match = re.match(r"^(\d+)\s*,\s*(.*)$", line)
    if match:
        num, value = match.groups()  # 分别提取 数字和值
        # 初始化参数信息字典
        param_info = {
            "num": num,  # 直接使用捕获到的数字部分
            "type": "word",  # 提取类型前缀
            "catalogue":"",  # 提取目录
            "tip": [value.strip()]  # 初始化描述列表
        }

        return {num: param_info}  # 使用类型前缀和数字组合成键
    return {}






def text_to_json(file_path):
    data = {}
    current_param = None

    with open(file_path, "r", encoding="utf-8") as file:
        for line in file:
            line = line.strip()
            if not line or line.startswith(","):
                continue

            # 解析参数信息
            parsed_data = parse_text_line(line)
            if parsed_data:
                data.update(parsed_data)
                current_param = data[list(parsed_data.keys())[0]]  # 获取当前参数信息



    return {"param":data}


def main():
    current_dir = os.path.dirname(__file__)
    json_files = []

    for filename in os.listdir(current_dir):
        if filename.endswith(".csv"):
            file_path = os.path.join(current_dir, filename)
            data = text_to_json(file_path)
      
            # 去除文件扩展名，添加.json后缀
            json_filename = os.path.splitext(filename)[0] + ".json"
            json_file_path = os.path.join(current_dir, json_filename)

            with open(json_file_path, "w", encoding="utf-8") as json_file:
                json.dump(data, json_file, indent=4, ensure_ascii=False)
            json_files.append(json_file_path)

    print("Converted files:")
    for file in json_files:
        print(file)


if __name__ == "__main__":
    main()
