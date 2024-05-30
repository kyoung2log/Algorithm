## 🔴 문제
> [X보다 작은 수](https://www.acmicpc.net/problem/10871)

<br/>

## 🟡 Sol
```python
import sys
N, X = map(int, sys.stdin.readline().split())
A = sys.stdin.readline().split()

for i in A:
    if(int(i)<X):
        print(i, end=" ")
```
<br/>

## 🟢 풀이
문자열을 split() 함수로 자르면 list형태로 바뀐다. 
![](https://images.velog.io/images/chestnut1044/post/1118a752-7402-4e58-9140-95ec4e494c46/image.png)

하지만 list안의 값은 문자열이기때문에 int형으로 바꾸어 X와 비교해준다. 


<br/>

## 🔵 Ref
> https://wikidocs.net/2839