## 🔴 문제
> [문자열 반복](https://www.acmicpc.net/problem/2675)

<br/>

## 🟡 Sol
```python
import sys
T = int(input())
S = []
for i in range(T):
    S.append(sys.stdin.readline().split())
    for j in range(len(S[i][1])):
        k = int(S[i][0])
        print(str(S[i][1])[j]*k, end='')
    print()
```
<br/>

## 🟢 풀이
배열에 넣어서 풀었는데 다른 풀이를 보니 문자열에 관한 성질을 사용해서 푸는게 훨씬 깔끔하다
```python
t = int(input())
for i in range(t):
    num, s = input().split()
    text = ''
    for i in s:
        text += int(num) * i
    print(text)
```



<br/>

## 🔵 Ref
> https://pacific-ocean.tistory.com/41