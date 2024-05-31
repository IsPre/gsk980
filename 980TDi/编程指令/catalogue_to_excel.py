import os
import sys
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

        # 定义一个标题列表，使其更加灵活
        headers = ["组别码", "参数号", "参数说明"]
        # 写入标题行
        worksheet.write_row("A1", headers)
        current_row = 1  # 使用更具描述性的变量名

        for item in content:
            # 检查是否需要插入空行，并添加注释解释逻辑
            if item["group"] == item["num"] and current_row != 1:
                current_row += 1  # 插入空行

            # 写入当前项数据
            worksheet.write_row(f"A{current_row+1}", [item["group"], item["num"], item["tip"]])
            current_row += 1

        workbook.close()
    except xlsxwriter.exceptions.FileCreateError as e:
        print(f"无法创建Excel文件：{e}")
        print("请确保目标目录可写且Excel文件没有被其他程序打开。")
    except Exception as e:
        print(f"写入Excel文件时发生错误：{e}")


def get_exe_path():
    """
    获取exe文件所在的路径（如果是被打包成exe的话）
    """
    if getattr(sys, 'frozen', False):
        # 如果是被打包成exe，那么sys.executable就是exe文件的路径
        exe_path = os.path.dirname(sys.executable)
    else:
        # 如果是直接运行py文件，那么__file__就是py文件的路径
        exe_path = os.path.dirname(os.path.abspath(__file__))
    return exe_path

def main():
    dir_path = get_exe_path()
    files = get_file_list(dir_path)
    print("参数文本转换程序启动，当前目录为:", dir_path)
    print("      ")

    for file in files:
        text_to_utf8(file)
        
        print(f"转换文件: {file} 的编码为utf-8")
        print("      ")

        content = read_file(file)
        content = format_content(content)
        # write_csv(file, content)
        write_excel(file, content)

        print(f"将文件: {file} 保存为Excel")
        print("      ")

    input("参数文本转换完成,输入回车结束程序！")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
            print(f"发生错误: {e}")
            input("按回车退出...")
    
