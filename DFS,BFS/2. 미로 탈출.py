from collections import deque

N, M = map(int, input().split())

graph = []
for i in range(N):
  graph.append(list(map(int, input())))

# 상 하 좌 우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def BFS(x, y):
  q = deque()
  q.append((x, y))
  while q:
    x, y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      if(nx<0 or ny < 0 or nx >= N or ny>=M):
        continue
      if(graph[nx][ny] == 0):
        continue
      if(graph[nx][ny] == 1):
        graph[nx][ny] = graph[x][y] + 1
        q.append((nx, ny))
  return graph[N-1][M-1]

print(BFS(0,0))