### 문제
![](https://images.velog.io/images/chestnut1044/post/7831223d-d922-40fc-8d11-814985614a63/image.png)

---
### sol
```
m, n = map(int, input().split())
arr = [True] * (n + 1)
arr[1] = False
for i in range(2, int(n ** 0.5)+1):
    if arr[i] == True:
        for j in range(i+i, n+1, i):
            arr[j] = False

for i in range(m, n + 1):
    if arr[i]:
        print(i)
```
---
### 풀이
하나의 수가 소수인지, 아닌지를 판별하기 위해서는 약수의 특성을 활용하여 해결하면 되지만 특정 범위의 수들에 대해 소수를 판별할때에는 에라토스테네스의 체라는 알고리즘을 사용한다.
에라토스테네스의 체를 사용하지 안흥면 시간복잡도가 매우 복잡해진다고 한다.


---

### 참고
https://velog.io/@chestnut1044/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98-%EC%B2%B4