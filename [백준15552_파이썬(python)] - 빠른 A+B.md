### 문제
![](https://images.velog.io/images/chestnut1044/post/2c232191-31d0-444e-9bcd-f6f254ae7e54/image.png)

---

### sol
```
import sys

T = int(sys.stdin.readline())
ans = []
for i in range(0, T):
    A, B = map(int,sys.stdin.readline().split())
    ans.append(A+B)

for j in range(0, T):
    print(ans[j])
```
---
### 풀이
input() 대신 sys.stdin.readline() 으로 값을 입력받을 수 있다.
이제 int형으로 변활할때 map을 사용하는 습관을 들여야겠다..

---
### 참고
https://velog.io/@yeseolee/Python-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%9E%85%EB%A0%A5-%EC%A0%95%EB%A6%ACsys.stdin.readline