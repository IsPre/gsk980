import re

import os

data = {}
type = {}
value={}

dir = os.path.dirname(os.path.abspath(__file__))
files = os.listdir(dir)
for file in files:
    if file.endswith(".txt"):
        with open(f"{dir}/{file}", "r", encoding="utf-8") as f:
            lines = f.readlines()

        segment_number = 0

        for line in lines:
            line = line.strip()

            if line=='':
                pass

            elif re.search(r'^\d+,\\t', line):
                segments = line.split(',')
                segment_number = segments[0]
                # segment_content = ','.join(segments[1:])
                # segment_content = segment_content.replace(
                #     '\\n', '\n').replace('\\t', '\t').replace('\\', '')
                # data[f'P{segment_number:}'] = segment_content
                data[f'P{segment_number}'] = ''
                type[f'P{segment_number}'] = 'bit'

            elif re.search(r'^\d+,(?=[^\\t])', line):
                segments = line.split(',')
                segment_number = segments[0]
                segment_content = ','.join(segments[1:])

                segment_line =segment_content.split('\\t')
                segment_content = '\\t'.join(segment_line[1:])

                segment_content = segment_content.replace(
                    '\\n', '\n').replace('\\t', '\t').replace('\\', '').replace('"','\\"')
                segment_content = segment_content.strip()
                segment_content = f'"{segment_content}"\n\r'
                data[f'P{segment_number}'] = segment_content

                type[f'P{segment_number}'] = 'word'

            else:
                segment_line =line.split('\\t')
                segment_content = '\\t'.join(segment_line[1:])
                
                if segment_content.find('\\') != -1:
                    eol =',\n\r'
                else:
                    eol ='\n\r'
                    
                segment_content = segment_content.replace('\\n', '\n').replace(
                    '\\t', '\t').replace('\\', '').replace('"','\\"')
                segment_content = segment_content.strip()
                segment_content = f'"{segment_content}"{eol}'

                data[f'P{segment_number}'] += segment_content

        formatted_text = ",\n\r".join(
            [
                f'"{key}":{{\n'
                f'"num":"{key.replace("P","")}",\n'
                f'"type":"{type[key]}",\n'
                f'"catalogue":"",\n'
                f'"value":[],\n'
                f'"tip":[{value}]\n'
                f"}}"
                for key, value in data.items()
            ]
        )
        text = f'{{"param":{{{formatted_text}}}}}'

        file_without_extension = file.rsplit(".")[0]
        with open(f"{file_without_extension}.json", "w", encoding="utf-8") as file:
            file.write(text)
