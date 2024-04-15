
import re


data = {}
type = {}
value={}

with open('980mdi.txt', 'r',encoding='utf-8') as file:#encodeing 根据输入文件的编码设置utf-8 gb2312等
    lines = file.readlines()

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


formatted_text = ',\n\r'.join(
    [f'{key}:{{\nnum:{key.replace("P","")},\n\rtype:"{type[key]}",\n\rcatalogue:"",\n\rvalue:[],\r\ntip:[{value}]\n}}' for key, value in data.items()])
text = f'export const param ={{{formatted_text}}}'

with open('parameter.js', 'w', encoding='utf-8') as file:
    file.write(text)
