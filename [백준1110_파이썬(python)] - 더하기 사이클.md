### 문제

![](https://images.velog.io/images/chestnut1044/post/6a3cc9e5-7473-49c9-94a7-bc48e4acc9d7/image.png)

---

### sol
```
N = int(input())
n = N 
cnt = 0

while 1:
    n = (n%10)*10 + (((int(n/10))+(n%10))%10)
    cnt = cnt + 1
    if(N == n):
        print(cnt)
        break
```


---

### 풀이
while 문안에 n을 주어지는 조건에 맞게 설정해준다.
주어지는 조건에 맞게 설정하는것이 복잡함...

---

### 참고