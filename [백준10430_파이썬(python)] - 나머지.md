## 🔴 문제
> [나머지](https://www.acmicpc.net/problem/10430)

<br/>

## 🟡 Sol
```python
a, b, c= input().split()
A = int(a)
B = int(b)
C = int(c)

print((A+B)%C)
print(((A%C) + (B%C))%C)
print((A*B)%C)
print(((A%C) * (B%C))%C)
```
<br/>

## 🟢 풀이
문제 10869 를 참고해서 풀면된다.



<br/>

## 🔵 Ref
> https://velog.io/@chestnut1044/%EB%B0%B1%EC%A4%8010869python-%EC%82%AC%EC%B9%99%EC%97%B0%EC%82%B0