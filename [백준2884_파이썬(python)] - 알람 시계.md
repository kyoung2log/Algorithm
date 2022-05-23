### 문제
![](https://images.velog.io/images/chestnut1044/post/ef2f6679-4c97-4b24-b2da-2da56013966b/image.png)

---

### sol
```
H, M = input().split()
H = int(H)
M = int(M)

if(M>=45):
    print(H, M-45)
elif(M<45 and H == 0):
    print(H+23, M+60-45) 
else:
    print(H-1, M+60-45)
```

---
### 풀이

자정일때를 따로 생각해주어야한다.

---

### 참고

