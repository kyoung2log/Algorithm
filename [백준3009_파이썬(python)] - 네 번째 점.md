![](https://images.velog.io/images/chestnut1044/post/cbe7c23f-4544-43ff-ab6d-a3ea25761451/image.png)

## 🔴 문제
> [네 번째 점](https://www.acmicpc.net/problem/3009)

<br/>

## 🟡 Sol
```python
list_a = list()
list_b = list()
for i in range(3):
    a, b = input().split()
    list_a.append(a)
    list_b.append(b)

a = list_a.pop()
b = list_b.pop()
if(a in list_a):
    list_a.remove(a)
    print(*list_a, end=" ")
else:
    print(a, end=" ")

if(b in list_b):
    list_b.remove(b)
    print(*list_b)
else:
    print(b)
```
<br/>


## 🟢 풀이
먼저 입력값이 총 세 개가 주어지는데 세 개중에 하나 있는 수가 출력값이라고 생각했다.
그래서 x 좌표값과 y 좌표값을 각각 list_a와 list_b에 저장 시킨뒤, list_a와 list_b 가장 마지막에 있는 값을 pop()을 사용해서 뽑아낸뒤, 그게 list_a의 안에 존재한다면 존재하는 값을 삭제시킨뒤, 하나 남은 리스트의 값을 출력한다.
list_a의 안에 존재하지 않는다면, 그 값을 출력한다. 


<br/>

## 🔵 Ref

