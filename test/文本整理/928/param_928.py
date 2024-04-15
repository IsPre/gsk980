
import re
import os   

data = {}#数据字典

type = {}#数据类型字典
value={}#数据值字典

dir = os.path.dirname(os.path.abspath(__file__))

#目录内的text文件
files = os.listdir(dir)
for file in files:
    if file.endswith('.txt'):
        with open(f'{dir}/{file}', 'r',encoding='utf-8') as f:
            lines = f.readlines()

            segment_number = 0

            for line in lines:
                line = line.strip()

                if line=='':
                    pass

                elif re.search(r'^\d+,(?![\\]).*', line):
                    segments = line.split(',')
                    segment_number = segments[0]
                    segment_content = ','.join(segments[1:])
                    segment_content = segment_content.replace(
                        '\\n', '\n').replace('\\t', '\t').replace('\\', '')
                    data[f'P{segment_number:}'] = f'"{segment_content}"'
        
                    type[f'P{segment_number}'] = 'word'

                elif re.search(r'^\d+,(?=[\\])', line):
                    segments = line.split(',')
                    segment_number = segments[0]
                    # segment_content = ','.join(segments[1:])

                    # segment_line =segment_content.split('\\t')
                    # segment_content = '\\t'.join(segment_line[1:])

                    # segment_content = segment_content.replace(
                    #     '\\n', '\n').replace('\\t', '\t').replace('\\', '').replace('"','\\"')
                    # segment_content = segment_content.strip()
                    # segment_content = f'"{segment_content}"\n\r'
                    # data[f'P{segment_number}'] = segment_content
                    data[f'P{segment_number}'] = ''
                    type[f'P{segment_number}'] = 'bit'
                    
                else:
                    segment_line =line.split('\\n')
                    segment_content = '\\n'.join(segment_line[1:])
                    
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
                [f'{key}:{{\nnum:{key.replace("P","")},\ntype:"{type[key]}",\n\rcatalogue:"",\n\rvalue:[],\ntip:[{value}]\n}}' for key, value in data.items()])
            text = f'export const param ={{{formatted_text}}}'

            file_without_extension=file.rsplit('.')[0]
            with open(f'{file_without_extension}.js', 'w', encoding='utf-8') as file:
                file.write(text)
