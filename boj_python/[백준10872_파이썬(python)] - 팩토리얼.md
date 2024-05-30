## 🔴 문제
> [팩토리얼](https://www.acmicpc.net/problem/10872)

<br/>

## 🟡 Sol
```python
N = int(input())
n_factorial = 1 
for i in range(1, N+1):
    n_factorial = n_factorial * i

print(n_factorial)
```
<br/>

## 🟢 풀이
N 팩토리얼 계산하는 하는 기본적인 문제였다.
for문을 사용해서 구해줬다.

<br/>

## 🔵 Ref
