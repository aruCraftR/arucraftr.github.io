from json import load
from os import system

with open('names.json', 'r') as f:
    names = load(f)


def outhtml():
    for name in names:
        print(
            '<div class="card"><img src="https://jsd.onmicrosoft.cn/gh/aruCraftR/arucraftr.github.io/assets/faces/'
            + name +
            '.png" class="avatar"><div class="blur"></div><div class="content"><p>'
            + name + '</p></div></div>')


outhtml()
system('pause')