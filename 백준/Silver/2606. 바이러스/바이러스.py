n = int(input())
m = int(input())
graph = [[]for i in range(n+1)]
visited = [False for i in range(n+1)]
ans = []
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

def dfs(graph, k):
    if visited[k]:
        return

    visited[k] = True
    ans.append(k)
    for i in graph[k]:
        dfs(graph, i)



dfs(graph, 1)
print(len(ans)-1)
