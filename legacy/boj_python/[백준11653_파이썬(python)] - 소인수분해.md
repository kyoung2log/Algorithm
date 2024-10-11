## 🔴 문제
> [소인수분해](https://www.acmicpc.net/problem/11653)

<br/>

## 🟡 Sol
```python
N = int(input())
d = 2

while(d<=N):
    if(N%d == 0):
        print(d)
        N = N / d
    else:
        d = d + 1
```
<br/>

## 🟢 풀이
도저히 감이 안잡혀서 코드 검색해봤는데 생각보다 무지 간단한 코드였다.



<br/>

## 🔵 Ref
> https://needneo.tistory.com/112

