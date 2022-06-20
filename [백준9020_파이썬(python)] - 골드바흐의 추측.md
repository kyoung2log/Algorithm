### 문제
![](https://images.velog.io/images/chestnut1044/post/5160b2b4-2b1b-4c90-9231-0e68db61ed2c/image.png)

---

### sol

```
N = 10000
arr = [True] * (N+1)
prime_num = []
arr[1] = False
for i in range(2, int(N ** 0.5)+1):
    if arr[i] == True:
        for j in range(i+i, N+1, i):
            arr[j] = False

for i in range(2, N+1):
    if arr[i]:
        prime_num.append(i)


T = int(input())

for i in range(T):
    n = int(input())
    a = n/2
    b = n/2
    while True:
        if(a in prime_num and b in prime_num):
            print(int(a), int(b))
            break
        else:
            a -= 1
            b += 1
```



---
### 풀이

코드를 두 세번정도 고쳤는데 시간초과가 떠서 솔루션을 찾아보았다.
![](https://images.velog.io/images/chestnut1044/post/324e577e-0e11-47da-9a12-2a0582ac92db/image.png)
위의 사진을 본 뒤 순서도대로 코드 짜보니까 바로 정답이라고 뜨더라!

신기..

소수 문제풀이때 가장 중요한것은 판별하는 수의 제곱근만큼만 확인하는것!
그래야 제일 효율적이다.

---
### 참고
https://velog.io/@sharea/%EB%B0%B1%EC%A4%80-%ED%8C%8C%EC%9D%B4%EC%8D%AC-9020%EB%B2%88-%EA%B3%A8%EB%93%9C%EB%B0%94%ED%9D%90%EC%9D%98-%EC%B6%94%EC%B8%A1-%EB%8B%A4%EB%A5%B8-%EC%82%AC%EB%9E%8C%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%91%BC%EA%B1%B0%EC%A7%80