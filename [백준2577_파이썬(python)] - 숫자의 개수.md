## 🔴 문제
> [숫자의 개수](https://www.acmicpc.net/problem/2577)

<br/>

## 🟡 Sol
```python
A = int(input())
B = int(input())
C = int(input())
SUM = str(A*B*C)
array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for i in range(len(SUM)):
    array[int(SUM[i])] = array[int(SUM[i])] + 1

for i in range(len(array)):
    print(array[i])
```
<br/>

## 🟢 풀이
곱한 값의 길이만큼 반복하면서 각 숫자가 나올때마다 array 인덱스 자리에 맞게 1씩 추가해준다.


<br/>

## 🔵 Ref
