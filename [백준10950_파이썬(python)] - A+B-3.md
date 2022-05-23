### 문제
![](https://images.velog.io/images/chestnut1044/post/f527d39e-28e8-4ea8-9ef9-e30099ddc369/image.png)

---

### sol
```
T = int(input())
ans = []
for i in range(0, T):
    A, B = input().split()
    A = int(A)
    B = int(B)
    ans.append(A+B)

for j in range(0, T):
    print(ans[j])
```

---
### 풀이
![](https://images.velog.io/images/chestnut1044/post/7a5f9614-9c7f-4525-ba5c-83c0a970c415/image.png)
위 사진같이 입력이 되길래 고치고자 배열을 써서 for문을 다시돌려 코딩했는데 다른분 코드 보니까 신경 안써도 될 듯하다..

괜히 이상해진 내 코드
어디 내놓기 부끄럽군

---

### 참고 
https://claude-u.tistory.com/97