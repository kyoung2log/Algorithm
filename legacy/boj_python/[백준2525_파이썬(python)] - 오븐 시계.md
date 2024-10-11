## 🔴 문제
> [오븐 시계](https://www.acmicpc.net/problem/2525)


<br/>

## 🟡 Sol
```python
A, B = map(int, input().split())
C = int(input())

hours = int((A*60+B+C)/60)
if(hours>23):
    hours = hours-24
minutes = int((A*60+B+C)%60)
print(hours, minutes)
```
<br/>

## 🟢 풀이
우리 학원 애기들이 푸는 문제..
오븐시계는 있는데 인공지능 시계는 없네...

<br/>

## 🔵 Ref
> 