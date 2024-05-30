import sys 
input = sys.stdin.readline
INF = int(1e9)

n, m = map(int, input().split()) # n, m 노드의 개수와 간선의 개수 입력
start = int(input()) # 시작노드 입력

graph = [[] for i in range(n+1)] # 노드개수 + 1개의 그래프 만들기(0은 비워주고 1부터 6까지 즉 7개 생성)
visited = [False]*(n+1) # 노드에 방문했는지 확인하기 위한 배열 마찬가지로 n+1개 생성
distance = [INF]*(n+1) # 거리 또한 n+1개 생성 inf로 초기화

# 간선의 개수만큼 반복해서 모든 간선 정보 입력받기
for _ in range(m):
  a, b, c = map(int, input().split())
  graph[a].append((b,c)) # 총 n개의 노드에 각각 정보 추가

# 방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드의 번호 반환
def get_smallest_node():
  min_value = INF
  index = 0 # 가장 거리 짧은 노드
  for i in range(1, n+1):
    # 만약 i번 노드가 min_value보다 작고, 방문되지 않앗다면
    if distance[i] < min_value and not visited[i]:
      min_value = distance[i] # min_value 값 업데이트
      index = i
  print(index)
  return index

# 다익스트라 알고리즘 구현 -> 시작노드를 매개변수로 입력받음
def dijkstra(start):
  distance[start] = 0 # 시작노드의 거리 0으로 초기화
  visited[start] = True # 들어온 시작노드 방문처리
  # 지금 노드로 가서 노드의 거리 정보를 distance 배열에 담음
  for j in graph[start]:
    distance[j[0]] = j[1] # 목적지 노드 j[0], 거리 j[1]
  # 방문 시작
  for i in range(n-1):
    now = get_smallest_node() # get_smallest_node()에서 가장 거리 짧은 노드 반환
    visited[now] = True # 거리 짧은거 반환해서 방문처리
    for j in graph[now]:
      cost = distance[now] + j[1]
      if cost < distance[j[0]]:
        distance[j[0]] = cost

dijkstra(start)

for i in range(1, n+1):
  if distance[i] == INF:
    print("infinity")
  else:
    print(distance[i])

