from json import dump, load
from os.path import exists

if not exists('whitelist.json'):
    print('缺少whitelist.json')
else:
    print('生成中')
    names = []
    with open('whitelist.json', 'r') as f:
        white_list = load(f)
    for i in white_list:
        names.append(i['name'])
    names.sort()
    with open('names.json', 'w') as f:
        dump(names, f, indent=2)
    print('完成')
