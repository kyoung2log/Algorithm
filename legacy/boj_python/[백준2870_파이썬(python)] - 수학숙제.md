![](https://velog.velcdn.com/images/chestnut1044/post/273a24fd-bb77-4c3d-8902-71690bd9c5a4/image.png)


## 🔴 문제
> [수학숙제](https://www.acmicpc.net/problem/2870)


<br/>

## 🟡 Sol
```python
n = int(input())
answer = []

for _ in range(n):
    result = ''
    num = input()
    for i in num:
        if i.isdigit():
            result += i
        else:
            if result != '':
                answer.append(int(result))
                result = ''
    if result != '':
        answer.append(int(result))

answer.sort()
for i in answer:
    print(i)

```
<br/>

## 🟢 풀이
isdigit() 함수를 사용해 해당 값이 문자인지 숫자인지 구별해준다.

<br/>

## 🔵 Ref
