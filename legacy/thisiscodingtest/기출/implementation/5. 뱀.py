n = int(input())
k = int(input())
gamemap = [[1]*(n+2) for _ in range(n+2)]
for i in range(1, n+1):
    for j in range(1, n+1):
        gamemap[i][j] = 0

for _ in range(k):
    i, j = input().split()
    gamemap[int(i)][int(j)] = 2

l = int(input())
dummy = []
for _ in range(l):
    x, c = input().split()
    dummy.append((x, c))

time = 0
gamemap[1][1] = 1
direction = ['u', 'r', 'd', 'l']
# 내 몸뚱이
now = [(1, 1, 'r')]
# 게임 끝날때까지 돌기
while True:
    print(gamemap) 
    time += 1
        # 앞으로 한칸 갈거야
    print(now)
    if now[0][2] == "r":
        now.append((now[0][0], now[0][1] + 1, 'r'))
        gamemap[now[0][0]][now[0][1] + 1] = 1
        if gamemap[now[0][0]][now[0][1] + 1] != 2: # 사과라면
            tail = now.pop(0)
            gamemap[tail[0]][tail[1]] = 0
        elif gamemap[now[0][0]][now[0][1] + 1] == 1: # 내몸이나 벽이라면
            print("정답", time)
            break
    elif now[0][2] == "d":
        now.append((now[0][0]+1, now[0][1], "d"))
        if gamemap[now[0][0] + 1][now[0][1]] == 2: # 사과라면
            gamemap[now[0][0] + 1][now[0][1]] = 1
        elif gamemap[now[0][0] + 1][now[0][1]] == 1: # 내몸이나 벽이라면
            print("정답", time)
            break
        else: # 빈칸이라면
            tail = now.pop(0)
            gamemap[tail[0]][tail[1]] = 0
    elif now[0][2] == "u":
        now.append((now[0][0]-1, now[0][1], "d"))
        if gamemap[now[0][0] - 1][now[0][1]] == 2: # 사과라면
            gamemap[now[0][0] - 1][now[0][1]] = 1
        elif gamemap[now[0][0] - 1][now[0][1]] == 1: # 내몸이나 벽이라면
            print("정답", time)
            break
        else: # 빈칸이라면
            tail = now.pop(0)
            gamemap[tail[0]][tail[1]] = 0
    elif now[0][2] == 'l':
        now.append((now[0][0], now[0][1] - 1, 'r'))
        gamemap[now[0][0]][now[0][1] - 1] = 1
        if gamemap[now[0][0]][now[0][1] - 1] != 2: # 사과라면
            tail = now.pop(0)
            gamemap[tail[0]][tail[1]] = 0
        elif gamemap[now[0][0]][now[0][1] - 1] == 1: # 내몸이나 벽이라면
            print("정답", time)
            break
    #  방향 바꿀시간?
    if time == dummy[0][0]:
        # 방향이 오른쪽이면?
        if dummy[0][1] == "D":
            now[-1][2] = direction[(direction.index(now[-1][2])+1)%4]
        elif dummy[0][1] == "L":
            now[-1][2] = direction[(direction.index(now[-1][2])-1)%4]
        dummy.pop(0)