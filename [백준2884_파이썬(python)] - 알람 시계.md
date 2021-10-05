## 🔴 문제
> [알람 시계](https://www.acmicpc.net/problem/2884)

<br/>

## 🟡 Sol
```python
H, M = input().split()
H = int(H)
M = int(M)

if(M>=45):
    print(H, M-45)
elif(M<45 and H == 0):
    print(H+23, M+60-45) 
else:
    print(H-1, M+60-45)
```
<br/>

## 🟢 풀이
자정일때를 고려해주어야 한다.



<br/>

## 🔵 Ref
