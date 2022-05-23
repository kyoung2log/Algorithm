### 문제

![](https://images.velog.io/images/chestnut1044/post/3ca6a778-1fea-421d-8c63-bc39177f0dd5/image.png)

---

### sol

```
X = int(input())

line = 1
while X > line:
    X -= line
    line += 1

if line % 2 == 0:
    a = X
    b = line-X+1
else:
    a = line-X+1
    b = X

print(a, '/', b, sep='')

```

---

### 풀이

내코드가 아님 몰라서 참고함 똑똑하다

```
while X > line:
    X -= line
    line += 1
```

기억하기 !

---

### 참고

https://deokkk9.tistory.com/11
