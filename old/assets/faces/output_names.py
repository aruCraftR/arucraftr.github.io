from json import dump, load
from os.path import exists

if not exists('whitelist.json'):
    print('缺少whitelist.json')
else:
    print('生成中')
    names = {}
    with open('whitelist.json', 'r') as f:
        white_list = load(f)
    for i in white_list:
        names[i['name'].lower()] = i['name']
    keys = list(names.keys())
    keys.sort()
    name_list = []
    not_alpha = []
    for n in keys:
        if n[0].isalpha():
            name_list.append(names[n])
        else:
            not_alpha.append(n)
    for n in not_alpha:
        name_list.append(names[n])
    with open('names.json', 'w') as f:
        dump(name_list, f, indent=2)
    print('完成')
