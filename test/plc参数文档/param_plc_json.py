import os
import json
import re


def parse_text_line(line):
    # 匹配K或DT开头的键
    match = re.match(r"^(K|DT|DC)(\d+)\s*,\s*(.*)$", line)
    if match:
        type_prefix, num, value = match.groups()  # 分别提取类型前缀、数字和值
        # 初始化参数信息
        if type_prefix == "K":
            param_info = {
                "num": num,  # 直接使用捕获到的数字部分
                "type": type_prefix,  # 提取类型（K或DT）
                "catalogue": value.strip(),  # 提取目录
                "tip": [],  # 初始化描述列表
            }
        elif type_prefix == "DT":
            param_info = {
                "num": num,  # 直接使用捕获到的数字部分
                "type": type_prefix,  # 提取类型（K或DT）
                "catalogue": "",  # 提取目录
                "tip": [value.strip()],  # 初始化描述列表
            }
        elif type_prefix == "DC":
            param_info = {
                "num": num,  # 直接使用捕获到的数字部分
                "type": type_prefix,  # 提取类型（K或DT）
                "catalogue": "",  # 提取目录
                "tip": [value.strip()],  # 初始化描述列表
            }

        return {type_prefix + num: param_info}  # 使用类型前缀和数字组合成键
    return {}


def parse_detail_line(line, current_param):
    # 匹配参数详细描述的格式
    match = re.match(r"^(\w+)\.(\d+),\s*(.*)$", line)
    if match:
        detail_key, detail_num, detail_value = match.groups()
        # 将详细描述添加到当前参数的tip列表中
        current_param["tip"].append(
            f"{detail_key}.{detail_num}: {detail_value.strip()}"
        )


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

            # 如果当前行是参数详细描述，则添加到当前参数的tip列表中
            elif current_param:
                parse_detail_line(line, current_param)

    return data


def main():
    current_dir = os.getcwd()
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
