## 🔴 문제
> [유기농 배추](https://www.acmicpc.net/problem/1012)


<br/>

## 🟡 Sol
```python
import sys
sys.setrecursionlimit(10 ** 6)

t = int(input())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(n, m, x, y, data):
    if x<0 or y<0 or x>=n or y>=m:
        return False
    if data[x][y] == 1:
        data[x][y] = 0
        dfs(n, m, x+1, y, data)
        dfs(n, m, x-1, y, data)
        dfs(n, m, x, y+1, data)
        dfs(n, m, x, y-1, data)
        return True
    return False

def check(n, m, data):
    result = 0
    for i in range(n):
        for j in range(m):
            if dfs(n, m, i, j, data):
                result += 1
    return result

total = 0
for i in range(t):
    m, n, k = map(int, input().split())
    data = [[0]*m for _ in range(n)]
    for i in range(k):
        y, x = map(int, input().split())
        data[x][y] = 1
    print(check(n,m, data))



```
<br/>

## 🟢 풀이
배추가 있는 곳에서 없 을때까지의 상하좌우를 확인하는 문제이기에 dfs를 사용해서 풀어주었다.

재귀를 돌리다 보면 런타임에러가 발생하는데 이는 파이썬에서 기본 재귀 횟수를 1000번 이내로 제한을 두고있기 때문이다.


```python 
import sys
sys.setrecursionlimit(10 ** 6)
```
따라서 위의 코드를 상단에 적어주어 재귀 제한을 풀어준다.



<br/>

## 🔵 Ref
> https://fuzzysound.github.io/sys-setrecursionlimit
https://www.acmicpc.net/board/view/106358
