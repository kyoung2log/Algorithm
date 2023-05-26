## 🔴 문제
> [안전 영역](https://www.acmicpc.net/problem/2468)


<br/>

## 🟡 Sol
```python
import sys
sys.setrecursionlimit(10 ** 6)


dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y, h):
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if (0 <= nx < n) and (0 <= ny < n):
            if data[nx][ny] > h and visited[nx][ny] == False:
                visited[nx][ny] = True
                dfs(nx, ny, h)

n = int(input())
data = [list(map(int, input().split())) for _ in range(n)]
max_result = 1


for h in range(1, max(map(max, data))):
    result = 0
    visited = [[False]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if data[i][j] > h and visited[i][j] == False:
                visited[i][j] = True
                result += 1
                dfs(i, j, h)
    max_result = max(result, max_result)

print(max_result)




```
<br/>

## 🟢 풀이
dfs로 풀어주었다. ** max(map(max, data))** 를 사용해서 가장 큰 높이값 정보까지만 반복할 수 있게 해주었다.

**아무 지역도 물에 잠기지 않을 수도 있다.** 이 조건이 있기 때문에 
**max_result = 1** 최소 결과값을 1로 설정해두었다.

1부터 가장 큰 높이값까지 반복하면서 안전한 영역의 개수를 확인해준다. 
이 때 확인 할 높이밧이 달라질때마다 방문했는지 체크하는 배열과 result값을 초기화해줘야 한다.

반복문에서는 2차원배열 (0, 0) 위치부터 확인하는데 이 때 해당 위치가 높이보다 큰 경우(잠기지 않는 경우)이면서 방문 하지 않은 곳만 골라 확인하며 재귀를 호출한다.

방문정보를 바꿔주고 result 값을 증가 시켜준 뒤 bfs안에서 상,하,좌,우 확인해주면 된다.


<br/>

## 🔵 Ref
> https://fullmoon1344.tistory.com/93
