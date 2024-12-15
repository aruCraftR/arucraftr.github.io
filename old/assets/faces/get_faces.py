from json import load
from os.path import exists
from requests import get

if not exists('whitelist.json'):
    print('缺少whitelist.json')
else:
    names = []
    uuids = []
    with open('whitelist.json', 'r') as f:
        white_list = load(f)
    for i in white_list:
        names.append(i['name'])
        uuids.append(i['uuid'])

players_length = len(names)

api_list = [
    'https://minecraftskinstealer.com/api/v1/skin/download/face/',
    'https://crafatar.com/avatars/', 'https://minotar.net/avatar/',
    'https://www.mc-heads.net/avatar/', 'https://minepic.org/avatar/'
]

print('已加载' + str(players_length) + '个玩家')

print(
    '可选择获取源(API)：1.minecraftskinstealer.com  2.crafatar.com(单层)  3.minotar.net  4.mc-heads.net  5.minepic.org'
)

api = input("请选择获取源(API)  [输入序号]：")

try:
    api = int(api) - 1
    if api < 0:
        print('参数错误，自动退出')
        exit()
    api_used = api_list[api]
    if api == 1:
        api_parameter = uuids  #crafatar.com使用uuid作为参数
    else:
        api_parameter = names  #其余使用玩家名作为参数
except Exception:
    print('参数错误，自动退出')
    exit()

for i in range(0, players_length):
    if not exists(names[i] + '.png'):
        print('正在获取：{}[{}/{}]'.format(names[i], i + 1, players_length))
        url = api_used + api_parameter[i]
        get_face = get(url)
        face_file = open(names[i] + '.png', 'wb')
        face_file.write(get_face.content)
    else:
        print('跳过获取：{}[{}/{}]'.format(names[i], i + 1, players_length))

print('完成')
