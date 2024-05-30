## 🔴 문제
> [달팽이는 올라가고 싶다](https://www.acmicpc.net/problem/2869)

<br/>

## 🟡 Sol
```python
import sys
A, B, V = map(int, sys.stdin.readline().split())

l = A
d = int(V/(A-B))-A

if(d < 0):
    d = 1

while True:
    if(V <= l):
        print(d)
        break
    else:
        d = d + 1
        l = A*d-B*(d-1)
```
<br/>

## 🟢 풀이
처음에 짠 코드가 계속 틀리길래 백준 질문페이지 반례를 많이 보고 반례에 맞게 수정함...

```python
import math

a, b, v = map(int, input().split())
# a= 올라가는 길이, b= 떨어지는길이, v= 나무높이

day = math.ceil((v-a)/(a-b)) + 1
print(day)
```

math 모듈의 ceil 함수를 사용한 위의 코드도 있더라


<br/>

## 🔵 Ref
> https://ooyoung.tistory.com/85
