## 🔴 문제
> [A+B - 7](https://www.acmicpc.net/problem/11021)

<br/>

## 🟡 Sol
```python
import sys
T = int(sys.stdin.readline())

for i in range(T):
    A, B = map(int, sys.stdin.readline().split())
    print("Case #%d: %d" %(i+1 ,A+B))
```
<br/>

## 🟢 풀이
포매팅으로 출력했다. 
일반적으로 출력하면 띄어쓰기가 포함되어 출력되어서 오류발생.



<br/>

## 🔵 Ref
> https://wikidocs.net/13#_16
