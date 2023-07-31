## 🔴 문제
> [트럭 주차](https://www.acmicpc.net/problem/2979)


<br/>

## 🟡 Sol
```python
a, b, c = map(int, input().split())

timeList = [0]*101
answer = 0

for _ in range(3):
    s, e = map(int, input().split())
    for i in range(s, e):
        timeList[i] += 1

for i in timeList:
    if i == 1:
        answer += a
    elif i == 2:
        answer += 2*b
    elif i == 3:
        answer += 3*c

print(answer)
```
<br/>

## 🟢 풀이
시간의 범위가 주어져 있는 문제기에 배열을 만들어줬다.
배열을 돌면서 각 시간마다 차가 몇대인지 확인해 계산해줬다.

<br/>

## 🔵 Ref
