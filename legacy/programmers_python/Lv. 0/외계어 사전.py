def solution(spell, dic):
    spell.sort()
    dic = list(map(list, dic))
    for i in dic:
        i.sort()
    if spell in dic:
        return 1
    else:
        return 2
    
def solution(spell, dic):
    spell = set(spell)
    for i in dic:
        if not spell - set(i):
            return 1
    return 2