## 🔴 문제
> [직각삼각형](https://www.acmicpc.net/problem/4153)

<br/>

## 🟡 Sol
```python
T = []

while True:
    t = list(map(int, input().split()))
    if(t == [0, 0, 0]):
        break
    T.append(t)

for i in T:
    i.sort()
    if(i[0]*i[0] + i[1]*i[1] == i[2]*i[2]):
        print("right")
    else:
        print("wrong")
```
<br/>

## 🟢 풀이
0 0 0이 입력될 때까지 while문으로 값을 입력받는다.
배열로 값을 입력받아 T라는 배열안에 저장한뒤, T라는 배열 안에 각요소를 i로 접근한다.
이 때 i는 배열이 됨. 배열인 i를 sort로 정렬시키면 가장 마지막요소가 가장 긴 변이 되기때문에 직각삼각형인지 확인하는 공식을 사용하여, right나 wrong을 출력할 수 있다.


<br/>

## 🔵 Ref


