### 문제
![](https://images.velog.io/images/chestnut1044/post/c1412388-e971-458e-9e13-61f11a433eca/image.png)

---
### sol
```
N = int(input())
arr = list(map(int, input().split()))
sosu_num = 0
for i in arr:
    if(i > 2):
        for j in range(2, i):
            if(i%j == 0):
                break
            else:
                if(j == i-1):
                    sosu_num += 1
    elif(i == 2):
        sosu_num += 1
print(sosu_num)
```

---
### 풀이

처음 5번째 if문에 i>1로 제출을 했는데 에러가 떴다 한 줄씩 디버깅 해보니까 2일경우에 바로 break로 넘어가서 소수 판정이 안되는것이었음.

그래서 2일경우를 제외하고 3부터 수행했더니 제대로 수행되었다.
내 방식은 2부터 판정을 원하는 수(i)까지 range 범위설정을 두고 0으로 나누어 떨어지는 수가 하나라도 있으면 바로 break를 걸어주었다 break가 안걸리고 마지막 수 까지 도달해 j가 i-1과 같다면 소수의 값을 1증가시켜주고 마지막에 소수를 출력해주는것이 나의 풀이인데 뭔가 다른사람이 보기엔 알아보기 힘들수도 ...


---

### 참고
