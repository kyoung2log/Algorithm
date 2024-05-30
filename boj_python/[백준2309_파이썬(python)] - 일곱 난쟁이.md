## 🔴 문제
> [일곱 난쟁이](https://www.acmicpc.net/problem/2309)


<br/>

## 🟡 Sol
```python
from itertools import combinations

dwarf = []

for _ in range(9):
    dwarf.append(int(input()))

num = sum(dwarf)-100
for i, j in combinations(dwarf, 2):
    if i+j == num:
        break

dwarf.remove(i)
dwarf.remove(j)
dwarf.sort()

for d in dwarf:
    print(d)


```
<br/>

## 🟢 풀이
데이터를 리스트 내부에 저장한 뒤 리스트의 합을 구해서 100과의 차를 구해준다.
리스트에서 값을 두 개 뽑아 두 값의 합이 리스트의 합과 100의 차라면 리스트에서 두 개의 값을 제거해주면 된다.



<br/>

## 🔵 Ref
