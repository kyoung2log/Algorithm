## 🔴 문제
> [균형잡힌 세상](https://www.acmicpc.net/problem/4949)


<br/>

## 🟡 Sol
```python
while True:
    s = input()
    stack = [0]
    err = 0
    if s == ".": break
    for i in s:
        if i in ["(", "["]:
            stack.append(i)
        elif i == ")":
            if stack.pop() != "(":
                err = 1
                break
        elif i == "]":
            if stack.pop() != "[":
                err = 1
                break
    if err == 0 and stack == [0]: print("yes")
    else: print('no')
```
<br/>

## 🟢 풀이
스택의 개념을 사용해 풀어주었다.
여는 괄호일때는 스택에 넣어주고, 닫는 괄호일때는 스택에서 pop해온 값이 조건에 맞는지 확인해주면 된다.

<br/>

## 🔵 Ref
