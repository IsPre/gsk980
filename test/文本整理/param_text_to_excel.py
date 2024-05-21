import os
import re
import chardet


dir_path = os.path.dirname(os.path.abspath(__file__))
comtent = []


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
    with open(file, "r", encoding="utf-8") as f:
        content = f.readlines()
        bit_pattern = r"^(\d+),(.*?)\\t((?!.*\\r).*)"
        word_pattern = r"^(\d+),(.*?)\\t(.*\\r.*)"
        array = []
        item = {}
        for line in content:
            line = line.strip()

            if line == "":
                pass

            elif re.search(bit_pattern, line):

                array.clear()
                item.clear()

                match = re.search(bit_pattern, line)

                if match:
                    num = match.group(1)
                    name = match.group(2)
                    catalog = match.group(3)
                else:
                    num = ""
                    name = ""
                    catalog = ""
                item = {"num": num, "catalog": catalog, "name": name, "value": array}

            elif re.search(word_pattern, line):

                array.clear()
                item.clear()

                match = re.search(word_pattern, line)

                if match:
                    num = match.group(1)
                    name = match.group(2)
                    value = match.group(3)
                else:
                    num = ""
                    name = ""
                    value = ""

                item = {"num": num, "catalog": catalog, "name": name, "value": array}

            else:
                array.append(line)
                item["value"] = array

            comtent.append(item)

    return comtent

def write_csv(file, comtent):
    """
    将参数写入csv文件
    """
    with open(file, "w", encoding="utf-8") as f:
        for item in comtent:
            f.write("%s,%s,%s\n" % (item["num"], item["name"], ",".join(item["value"])))


if __name__ == "__main__":
    get_file_list(dir_path)
    
    for file in get_file_list(dir_path):
        text_to_utf8(file)
        read_file(file)
        write_csv(file, comtent)
