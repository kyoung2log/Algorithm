## 🔴 문제
> [별 찍기 - 1](https://www.acmicpc.net/problem/2438)

<br/>

## 🟡 Sol
```python
N = int(input())
for i in range(N):
    for j in range(i+1):
        print("*", end='')
    print()
```
<br/>

## 🟢 풀이
for i in range(n) = 0부터 n-1까지
for i in range(a, b) = a부터 b-1까지!!

문자열끝에 개행문자를 넣고 싶지 않으면 end=''를 사용하면 된다. 

++ 다른 풀이 찾다가 발견했는데 그냥 "*" *  i를 해도 된다.....



<br/>

## 🔵 Ref
> https://snakify.org/ko/lessons/for_loop_range/
https://claude-u.tistory.com/19