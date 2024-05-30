## 🔴 문제
> [베르트랑 공준](https://www.acmicpc.net/problem/4948)

<br/>

## 🟡 Sol
```python
import sys
def is_prime(n, m):
    arr = [True] * (n+1)
    for i in range(2, int(n ** 0.5)+1):
        if arr[i] == True:
            for j in range(i+i, n+1, i):
                arr[j] = False
    a = [i for i in range(m+1, n+1) if arr[i]]
    return a

arr = []
while True:
    a = int(sys.stdin.readline())
    arr.append(a)
    if(a == 0):
        arr.pop()
        break

for i in arr:
    print(len(is_prime(2*i, i)))
```
<br/>

## 🟢 풀이
한 줄씩 입력받아서, 범위를 지정해준뒤 소수 구하기에서 사용했던 에라토스테네스의 체를 사용하면된다.

<br/>

## 🔵 Ref
> https://velog.io/@chestnut1044/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98-%EC%B2%B4

