### 문제

![](https://images.velog.io/images/chestnut1044/post/ba9d1800-dfeb-4a33-bfc6-226c4c56e223/image.png)

---

### sol
```
a, b, c= input().split()
A = int(a)
B = int(b)
C = int(c)

print((A+B)%C)
print(((A%C) + (B%C))%C)
print((A*B)%C)
print(((A%C) * (B%C))%C)
```

---

### 풀이
문제 10869 를 참고해서 풀면된다.

----

### 참고
https://velog.io/@chestnut1044/%EB%B0%B1%EC%A4%8010869python-%EC%82%AC%EC%B9%99%EC%97%B0%EC%82%B0