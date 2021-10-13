## 🔴 문제
> [상수](https://www.acmicpc.net/problem/2908)

<br/>

## 🟡 Sol
```python
s1,s2 = input().split()
S1 = ''
S2 = ''

for i in range(len(s1)):
    S1 = S1 + (s1[2-i])
for i in range(len(s2)):
    S2 = S2 + (s2[2-i])

if(int(S1)>int(S2)):
    print(S1)
else:
    print(S2)
```
<br/>

## 🟢 풀이
[::-1] 가 역순이래 
이거쓰면 편함

<br/>

## 🔵 Ref
https://ooyoung.tistory.com/72
https://itholic.github.io/python-reverse-string/