import os
import re
import chardet
import csv
import xlsxwriter
from copy import deepcopy


def get_file_list(dir_path):
    """
    获取指定目录dir_path下的text文件列表
    """
    file_list = []
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if re.search(".txt$", file) is not None:
                file_list.append(os.path.join(root, file))
    return file_list


def text_to_utf8(file):
    """
    打开文件，识别文本的编码格式,如果不是utf-8,则转换成utf-8保存
    """
    with open(file, "rb") as f:
        data = f.read()
        encoding = chardet.detect(data)["encoding"]
        if encoding != "utf-8":
            f.close()
            with open(file, "r", encoding=encoding) as f1:
                content = f1.read()
            with open(file, "w", encoding="utf-8") as f2:
                f2.write(content)
        else:
            f.close()
    return file


def read_file(file):
    """
    读取文件内容,按行读取,按照bit参数类型、word参数类型将参数保存到字典中
    """
    content = []

    with open(file, "r", encoding="utf-8") as f:
        lines = f.readlines()
        bit_pattern = r"^(\d+),(.*?)\\t((?!.*\\r).*)"
        word_pattern = r"^(\d+),(.*?)\\t(.*)\\r(.*)"

        item = {}
        index = 0

        for line in lines:
            line = line.strip()

            if line == "":
                pass

            elif re.search(bit_pattern, line):
                index = 0

                item.clear()

                match = re.search(bit_pattern, line)

                if match:
                    num = match.group(1)
                    name = match.group(2)
                    catalog = match.group(3)
                    tip = catalog
                    group = num
                else:
                    num = ""
                    name = ""
                    catalog = ""
                    tip = catalog
                    group = num

                item = {"group": group, "num": num, "name": name, "tip": tip}
                temp = deepcopy(item)
                content.append(temp)
            elif re.search(word_pattern, line):

                item.clear()

                match = re.search(word_pattern, line)

                if match:
                    num = match.group(1)
                    name = match.group(2)
                    catalog = match.group(3)
                    tip = match.group(4)
                    group = num

                else:
                    num = ""
                    name = ""
                    tip = ""
                    catalog = ""
                    group = num

                item = {
                    "group": group,
                    "num": num,
                    "name": name,
                    "tip": f"{catalog}{tip}",
                }
                temp = deepcopy(item)
                content.append(temp)

            else:

                item.clear()
                item = {
                    "group": group,
                    "num": f"{num}.{index}",
                    "name": name,
                    "tip": f"{line.strip()}",
                }
                index += 1

                temp = deepcopy(item)
                content.append(temp)

    return content


def format_content(content):
    """
    将参数中的\t, \r, \n, \替换成空字符
    """
    for item in content:
        item["tip"] = re.sub(r"\\t|\\r|\\n|\\", "", item["tip"])
        item["tip"] = re.sub(r"\\r", "\t", item["tip"])

    return content


def write_csv(file, content):
    """
    将参数写入csv文件
    """
    # 生成新的CSV文件名，避免覆盖原始文件
    csv_file = os.path.splitext(file)[0] + ".csv"

    with open(csv_file, "w", encoding="utf-8") as f:
        writer = csv.writer(f)
        # 写入标题行
        writer.writerow(["组别码", "参数号", "参数说明"])
        for item in content:
            # 写入CSV行
            writer.writerow([item["group"], item["num"], item["tip"]])

def write_excel(file, content):
    """
    将参数写入Excel文件
    """
    try:
        xlsx_file = os.path.splitext(file)[0] + ".xlsx"
        workbook = xlsxwriter.Workbook(xlsx_file)
        worksheet = workbook.add_worksheet()

        # 写入标题行
        worksheet.write_row("A1", ["组别码", "参数号", "参数说明"])
        row_num = 1  # 初始化写入数据的起始行号

        for item in content:
            # 检查前一个item是否需要插入空行
            if item["group"] == item["num"] and row_num != 1:
                row_num += 1  # 插入空行

            # 写入当前项数据
            worksheet.write_row(f"A{row_num+1}", [item["group"], item["num"], item["tip"]])
            row_num += 1

        workbook.close()
          
    except Exception as e:
        print(f"无法写入Excel文件：{e}")
        print("请确保Excel文件没有被其他程序打开。")


if __name__ == "__main__":
    dir_path = os.path.dirname(os.path.abspath(__file__))
    get_file_list(dir_path)

    for file in get_file_list(dir_path):
        text_to_utf8(file)
        content = read_file(file)
        content = format_content(content)
        # write_csv(file, content)
        write_excel(file, content)
