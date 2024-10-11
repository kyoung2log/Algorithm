from collections import deque

# 노드의 개수와 간선의 개수 입력받기
v, e = map(int, input().split())
# 모든 노드에 대한 진입차수는 0으로 초기화
indegree = [0] * (v+1)
# 각 노드에 연결된 간선 정보를 담기 위한 연결 리스트(그래프) 초기화
graph =[[] for i in range(v+1)]

for i in range(e):
  a, b = map(int, input().split())
  graph[a].append(b) # 정점 a에서 b로 이동 가능
  indegree[b] += 1 # b의 진입차수 1 증가

def topology_sort():
  result = []
  q = deque()

  for i in range(1, v+1):
    if indegree[i] == 0:
      q.append(i)
  # 큐가 빌때까지 반복
  while q:
    # 큐에서 원소 꺼내기
    now = q.popleft()
    result.append(now)
    for i in graph[now]:
      indegree[i] -= 1
      if indegree[i] == 0:
        q.append(i)

  for i in result:
    print(i, end=' ')

topology_sort()

