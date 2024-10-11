## 🔴 문제
> [별 찍기 - 2](https://www.acmicpc.net/problem/2438)

<br/>

## 🟡 Sol
```python
import sys
N = int(sys.stdin.readline())

for i in range(N):
    print(" "*(N-i-1), end="")
    print("*"*(i+1))
```
<br/>

## 🟢 풀이
아래 참고의 풀이가 조금 더 깔끔한듯??
공백을 N-1-i만큼 반복해 출력, *를 i+1만큼 반복해 출력하면 역으로 별 찍기가 된다!


<br/>

## 🔵 Ref
> https://claude-u.tistory.com/20