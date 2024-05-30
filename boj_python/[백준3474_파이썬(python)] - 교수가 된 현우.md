## 🔴 문제
> [교수가 된 현우](https://www.acmicpc.net/problem/3474)


<br/>

## 🟡 Sol
```python
import sys

n = int(sys.stdin.readline())

for _ in range(n):
    target = int(sys.stdin.readline())
    cnt = 0
    i = 5
    while i <= target:
        cnt += target//i
        i *= 5
    print(cnt)
```
<br/>

## 🟢 풀이
n의 범위가 십억이기에 직접 팩토리얼을 구하는것은 아니라고 생각했고, 5의 배수를 찾아야겠다라는 생각까지는 도달했지만 계속되는 메모리 초과/시간 초과 오류가 발생해 답을 찾아보았다.
5가 들어가는 수는 5 10 15 20 25 30 ... 인데 이때 25, 50은 5가 2개, 75는 5가 3개 들어간다. 따라서 5의 배수의 개수(5, 10, 15, 20, 25...) + 5^2의 배수의 개수(25, 50, 75, 100...) + 5^3의 배수의 개수(75, 150, 225...) 를 더해서 카운팅 해주면 된다. 

<br/>

## 🔵 Ref
> https://e-you.tistory.com/m/415