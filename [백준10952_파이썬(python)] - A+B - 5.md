## 🔴 문제
> [A+B - 5](https://www.acmicpc.net/problem/10952)

<br/>

## 🟡 Sol
```python
import sys
while 1:
    A, B = map(int, sys.stdin.readline().split())
    if (A == 0 and B == 0):
        break
    print(A+B)
```
<br/>

## 🟢 풀이
while문을 쓴 뒤 조건에 맞게 break를 걸고 빠져나온다.
그것도 모르고 True로 설정해서 틀림

<br/>

## 🔵 Ref
> https://wook-2124.tistory.com/234