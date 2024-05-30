import sys
sys.setrecursionlimit(10**6)

k = int(input())
def dfs(start, visited, graph, group):
    visited[start] = group
    for v in graph[start]:
        if visited[v] == 0:
            result = dfs(v, visited, graph, -group)
            if not result:
                return False
        elif visited[v] == group:
            return False
    return True

for _ in range(k):
    v, e = map(int, sys.stdin.readline().split())
    graph = [[]*(v+1) for _ in range(v+1)]
    visited = [0]*(v+1)
    for _ in range(e):
        i, j = map(int, sys.stdin.readline().split())
        graph[i].append(j)
        graph[j].append(i)
    for i in range(1, v+1):
        if visited[i] == 0:
            result = dfs(i, visited, graph, 1)
            if not result:
                break
    print("YES") if result else print("NO")