### 문제

![](https://images.velog.io/images/chestnut1044/post/1a8ccbdd-337f-4098-a0fa-f29a9ca9058c/image.png)

---

### sol

```
N = int(input())
n = 1
sum = 1

while True:
    if(N <= sum):
        print(n)
        break
    else:
        sum = sum + 6*n
    n = n + 1

```

---

### 풀이

고등학교때 수학 잘했는데... 암튼 수열 공식써서 풀어보았다
멱급수의 성질을 이용해서 풀었음

---

### 참고
