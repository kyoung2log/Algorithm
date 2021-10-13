## 🔴 문제
> [소수](https://www.acmicpc.net/problem/2581)

<br/>

## 🟡 Sol
```python
M = int(input())
N = int(input())
sosu_num = []
for i in range(M, N+1):
        if(i > 2):
            for j in range(2, i):
                if(i%j == 0):
                    break
                else:
                    if(j == i-1):
                        sosu_num.append(i)
        elif(i == 2):
            sosu_num.append(i)
if(len(sosu_num)==0):
    print("-1")
else:
    print(sum(sosu_num))
    print(sosu_num[0])
```
<br/>

## 🟢 풀이
1978 소수찾기랑 비슷한 유형 범위설정이랑 입출력만 수정해주면 된다.


<br/>

## 🔵 Ref
> https://velog.io/@chestnut1044/%EB%B0%B1%EC%A4%801978%ED%8C%8C%EC%9D%B4%EC%8D%ACpython-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0
