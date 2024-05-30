## 🔴 문제
> [A+B - 4](https://www.acmicpc.net/problem/10951)

<br/>

## 🟡 Sol
```python
while 1:
    try:
        A, B = map(int, input().split())
        print(A+B)
    except:
        break
```
<br/>

## 🟢 풀이
예외처리문을 사용해 예외가 발생하면 break를 걸어줬다.

<br/>

## 🔵 Ref
> https://wikidocs.net/30