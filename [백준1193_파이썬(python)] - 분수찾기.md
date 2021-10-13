## 🔴 문제
> [분수찾기](https://www.acmicpc.net/problem/1193)

<br/>

## 🟡 Sol
```python
X = int(input())

line = 1
while X > line:
    X -= line
    line += 1

if line % 2 == 0:
    a = X
    b = line-X+1
else:
    a = line-X+1
    b = X

print(a, '/', b, sep='')
```
<br/>

## 🟢 풀이
내코드가 아님 몰라서 참고함 똑똑하다

```
while X > line:
    X -= line
    line += 1
```

기억하기 !


<br/>

## 🔵 Ref
> https://deokkk9.tistory.com/11
