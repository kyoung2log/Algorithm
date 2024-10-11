def solution(wallpaper):
    answer = { 'up' : 51, 'left' : 51,  'down' : 51, 'right':-1}
    
    for i in wallpaper:
        if '#' in i and answer['left'] > i.index('#'):
            answer['left']  = i.index('#')
        if '#' in i and answer['right'] <  len(i)-i[::-1].index('#'):
            answer['right']  = len(i)-i[::-1].index('#')
    
    for i in wallpaper:
        if '#' in i:
            answer['up'] = wallpaper.index(i)
            break
    wallpaper.reverse()
    
    for i in wallpaper:
        if '#' in i:
            answer['down'] = len(wallpaper)-wallpaper.index(i)
            break

    return list(answer.values())


def solution(wall):
    a, b = [], []
    for i in range(len(wall)):
        for j in range(len(wall[i])):
            if wall[i][j] == "#":
                a.append(i)
                b.append(j)
    return [min(a), min(b), max(a) + 1, max(b) + 1]