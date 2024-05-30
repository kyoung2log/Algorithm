## 🔴 문제
> [OX퀴즈](https://www.acmicpc.net/problem/8958)

<br/>

## 🟡 Sol
```python
import sys
T = int(input())
arr = []
sum = 0
stack = 1
for i in range(T):
    arr.append(sys.stdin.readline().strip())
    for j in range(len(arr[i])):
        if(arr[i][j] == 'O'):
            sum = sum + stack
            stack += 1
        else:
            stack = 1
    print(sum)
    stack = 1
    sum = 0
```
<br/>

## 🟢 풀이
테스트 케이스 만큼 값을 입력받아 배열에 추가
중첩 for문을 사용해서 X를 만나면 stack을 1로 초기화해준다. 
지저분한거같기도

<br/>

## 🔵 Ref
