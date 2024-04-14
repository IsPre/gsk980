import os 

folder_path = "./"

# 遍历文件夹中的文件
for filename in os.listdir(folder_path):
    # 检查文件是否是文件而不是文件夹
    if os.path.isfile(os.path.join(folder_path, filename)):
        # 将文件后缀修改为.json
        new_filename = os.path.splitext(filename)[0] + ".json"
        os.rename(
            os.path.join(folder_path, filename), os.path.join(folder_path, new_filename)
        )
