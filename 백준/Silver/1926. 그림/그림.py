import sys
sys.setrecursionlimit(10 ** 6)

n, m = map(int, input().split())
cnt = 0
graph = []
answer = [0]


for _ in range(n):
    # a = sys.stdin.readline().strip()
    # print(a)
    graph.append(list(map(int, sys.stdin.readline().strip().split())))
def dfs(x,y):
    global cnt

    if x < 0 or x >= n or y < 0 or y >= m:
        return
    if graph[x][y] == 0:
        return

    graph[x][y] = 0
    cnt += 1

    dfs(x+1, y)
    dfs(x-1, y)
    dfs(x, y+1)
    dfs(x, y-1)

for i in range(n):
    for j in range(m):
        if graph[i][j]:
            dfs(i, j)
        if cnt != 0:
            answer.append(cnt)
        cnt = 0

print(len(answer)-1)
print(max(answer))