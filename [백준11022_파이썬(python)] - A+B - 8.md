## 🔴 문제
> [A+B - 8](https://www.acmicpc.net/problem/11022)

<br/>

## 🟡 Sol
```python
import sys
T = int(sys.stdin.readline())

for i in range(T):
    A, B = map(int, sys.stdin.readline().split())
    print("Case #%d: %d + %d = %d" %(i+1 ,A, B, A+B))
```
<br/>

## 🟢 풀이
문제 11021에서 출력형식만 바꾸어주면된다.



<br/>

## 🔵 Ref
>https://velog.io/@chestnut1044/%EB%B0%B1%EC%A4%8011021%ED%8C%8C%EC%9D%B4%EC%8D%ACpython-AB-7
