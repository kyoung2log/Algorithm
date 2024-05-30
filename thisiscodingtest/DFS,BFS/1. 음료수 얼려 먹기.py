N, M = map(int, input().split())

tray = []
result = 0

for i in range(N):
  tray.append(list(map(int, input())))

def DFS(x, y):
  if(x<0 or y<0 or x>=N or y>=M):
    return False
  if tray[x][y] == 0:
    tray[x][y] = 1
    DFS(x-1, y)
    DFS(x+1, y)
    DFS(x, y-1)
    DFS(x, y+1)
    return True
  return False

for i in range(N):
  for j in range(M):
    if DFS(i, j) == True:
      result += 1

print(result)

