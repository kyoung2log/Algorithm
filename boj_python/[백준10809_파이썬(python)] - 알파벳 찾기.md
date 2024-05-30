## 🔴 문제
> [알파벳 찾기](https://www.acmicpc.net/problem/10809)

<br/>

## 🟡 Sol
```python
S = str(input())

arr = [-1 for i in range(26)]

for i in range(len(S)):
    if(arr[ord(S[i])-97] == -1):
        arr[ord(S[i])-97] = i

for i in range(len(arr)):
    print(arr[i], end=" ")
```
<br/>

## 🟢 풀이
길이가 정해진 리스트를 하나 만든뒤에 값을 -1로 선언해준다.
조건문을 사용해 -1 이면 값을 바꿔준다.


<br/>

## 🔵 Ref
>https://jobc.tistory.com/141