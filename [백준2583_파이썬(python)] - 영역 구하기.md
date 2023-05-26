## 🔴 문제
> [영역 구하기](https://www.acmicpc.net/problem/2583)


<br/>

## 🟡 Sol
```python
import sys
sys.setrecursionlimit(10**6)
m, n, k  = map(int, input().split())

data = [[False]*n for _ in range(m)]

for i in range(k):
    x1, y1, x2, y2 =  map(int, input().split())
    for i in range(m-y2, m-y1):
        for j in range(x1, x2):
            data[i][j] = True

result = 0
area = []

def dfs(x, y):
    if 0<=x<m and 0<=y<n:
        if data[x][y] == False:
            area.append((x, y))
            data[x][y] = True
            dfs(x+1, y)
            dfs(x-1, y)
            dfs(x, y+1)
            dfs(x, y-1)
            return True
    return False

area_list = []
for i in range(m):
    for j in range(n):
        if dfs(i, j):
            area_list.append(len(area))     
            area = []
            result += 1
            
area_list.sort()
print(result)
print(*area_list)
```
<br/>

## 🟢 풀이
먼저 입력받은 좌표값으로 2차원 리스트를 만들어 줬다.
이후 영역의 개수를 구해야 하므로, dfs를 사용해줬다.
dfs를 돌면서 위치값이 False에서 True에 바뀔때마다 area 리스트에 값을 추가했다.
분리된 영역의 개수(result)가 증가할 때, area의 길이를 area_list 리스트에 추가하고, area 리스트를 초기화시켜주면서 각 영역의 넓이를 카운팅해줬다.


<br/>

## 🔵 Ref
