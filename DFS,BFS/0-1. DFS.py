def dfs(graph, v, visited):
  # 현재 노드를 방문처리
  visited[v] = True
  print(visited)
  print(v, end=' ')
  for i in graph[v]:
    if not visited[i]:
      dfs(graph, i, visited)

# 1
graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
]

visited = [False] * 9


dfs(graph, 1, visited)

# while treeHit < 10:
#   treeHit = treeHit + 1
#   print("나무를 %d번 찍었습니다." % treeHit)
#   if treeHit == 10:
#     print("나무 넘어갑니다.")

# a = 0

# while a <10:
#   a = a+1
#   if a%2 == 0: continue
#   print(a)

# for i in range(2,10):        # ①번 for문
#     for j in range(1, 10):   # ②번 for문
#         print(i*j, end=" ")
#     print() 


a = [1,2,3,4]
result = []

for num in a:
  result.append(num*3)
  result.pop()
  print(result)

print("1", a[1], "안녕", a[-1])
