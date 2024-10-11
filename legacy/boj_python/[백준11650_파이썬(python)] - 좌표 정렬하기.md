## 🔴 문제
> [좌표 정렬하기](https://www.acmicpc.net/problem/11650)


<br/>

## 🟡 Sol
```python
N = int(input())

cordi = []

for i in range(N):
  x, y = input().split()
  cordi.append([int(x), int(y)])
cordi.sort()
for i in cordi:
  print(*i)

```
<br/>

## 🟢 풀이
리스트 언팩하는방법 리스트 앞에 *연산자를 붙여주면 리스트의 목록만 출력된다!

<br/>

## 🔵 Ref
> https://www.delftstack.com/ko/howto/python/list-without-brackets-python/