# import sys
import os
import pandas as pd

# import matplotlib


# 创建新的Excel表格
new_df = pd.DataFrame()

dirPath = os.getcwd() + "/各成员"

for fileName in os.listdir(dirPath):
    
    #搜索Excel文件
    if not fileName.endswith(".xlsx"):
        continue

    # 读取原始Excel表格
    file_path = os.path.join(dirPath, fileName)
    df = pd.read_excel(file_path, sheet_name="GSK-PLC功能模块", engine="openpyxl")

    # 搜索并合并包含特定子字符串的数据到新表格中
    search_string = fileName.strip(".xlsx")

    selected_data = df[
        df.apply(lambda row: search_string in " ".join(map(str, row)), axis=1)
    ]

    new_df = new_df.append(selected_data)

# 将新表格保存到Excel文件
new_df.to_excel("new_file.xlsx", index=False)





