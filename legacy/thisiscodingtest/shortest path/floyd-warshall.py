INF = int(1e9)

n = int(input())
m = int(input())

# 정보를 담을 2차원 리스트 초기화
graph = [[INF] * (n+1) for _ in range(n+1)]

# 자기 자신 -> 자기자신 비용 0으로 초기화
for i in range(1, n+1):
  for j in range(1, n+1):
    if i == j:
      graph[i][j] = 0

# 간선 정보 입력
for _ in range(m):
  a, b, c = map(int, input().split())
  graph[a][b] = c

for k in range(1, n+1): # 현재 거쳐 가는 노드
  for i in range(1, n+1): # 출발 정점
    for j in range(1, n+1): # 도착 정점
      graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])


for i in range(1, n+1):
  for j in range(1, n+1):
    if graph[i][j] == INF:
      print("INF")
    else:
      print(graph[i][j], end=' ')
  print()