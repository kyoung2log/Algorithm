## DFS 문제
n, m = map(int, input().split())
data = []
for i in range(n):
    data.append(list(map(int, input())))


def bfs(x, y):
    if x<0 or y<0 or x>=n or y>m:
        return False 
    if data[x][y] == 0:
      data[x][y] = 1
      bfs(x, y+1)
      bfs(x, y-1)
      bfs(x+1, y)
      bfs(x-1, y)
      return True
    return False



result = 0
for i in range(n):
  for j in range(m):
      if bfs(n, m) == True:
        result += 1

print(result)
      

