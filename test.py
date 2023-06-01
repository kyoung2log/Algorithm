n = int(input())
prev = 0
team1 = [0, 0]
team2 = [0, 0]
for _ in n:
    win, time = input().split()
    if win == '1': team1[0] += 1
    else: team2[0] += 1
    if team1[0] > team2[0]:
        minute, second = map(int, time.split(":"))
    
    s  yd*60 - minute
    prev = minute*60 + second