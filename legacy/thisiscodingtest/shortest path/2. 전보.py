INF = int(1e9)
N, M, C = map(int, input().split())
graph = [[INF]*(N+1) for _ in range(N+1)]

for i in range(M):
  a, b, c = map(int, input().split())
  graph[a][b] = c

for i in range(1, N+1):
  for j in range(1, N+1):
    if i == j:
      graph[i][j] = 0


for k in range(1, N+1):
  for i in range(1, N+1):
    for j in range(1, N+1):
      graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])

uncontectcity = 0
time = 0
for i in range(1, N+1):
  if graph[C][i] == INF:
    uncontectcity += 1
    continue
  else:
    time = max(graph[C][i], time)

print(N-uncontectcity-1, time)