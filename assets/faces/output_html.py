from json import load

with open('names.json', 'r') as f:
    names = load(f)

names.sort()


def outhtml():
    for name in names:
        print(
            '<div class="card"><img src="https://cdn.jsdelivr.net/gh/aruCraftR/arucraftr.github.io/assets/faces/'
            + name +
            '.png" class="avatar"><div class="blur"></div><div class="content"><p>'
            + name + '</p></div></div>')


outhtml()