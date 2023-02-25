import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)

# 노드 간선 개수, 시작 노드 입력 받기
n, m = map(int, input().split())
start = int(input())

graph = [[] for i in range(n+1)] # 각 노드의 연결정보가 담겨있는 리스트
distance = [INF]*(n+1) # 최단 거리 테이블 무한으로 초기화

for _ in range(m):
  a, b, c = map(int, input().split())
  graph[a].append((b,c))

def dijkstra(start):
  q = []
  heapq.heappush([], (0, start))
  distance[start] = 0
  print(type(q))
  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue
    for i in graph[now]:
      cost = dist + i[1]
      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heapq.heappush(q, (cost, i[0]))

dijkstra(start)

for i in range(1, n+1):
  if distance[i] == INF:
    print("INF")
  else:
    print(distance)