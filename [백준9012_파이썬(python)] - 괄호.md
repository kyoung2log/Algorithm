## 🔴 문제
> [괄호](https://www.acmicpc.net/problem/9012)


<br/>

## 🟡 Sol
```python
n = int(input())

for _ in range(n):
    stack = [0]
    s = input()
    for i in s:
        if i == '(':
            stack.append(i)
        else:
            if stack.pop() == 0:
                break
    if stack == [] or stack[-1] == "(":
        print("NO")
    else:
        print("YES")
```
<br/>

## 🟢 풀이
스택의 성질을 이용해서 풀면 되는 문제
다른 사람의 풀이를 보니 sum = 0으로 설정한 뒤 **(** 일 경우 +1,  **)** 일경우 -1 해주는게 더 좋은 방법인것 같다.

<br/>

## 🔵 Ref
> https://pacific-ocean.tistory.com/70