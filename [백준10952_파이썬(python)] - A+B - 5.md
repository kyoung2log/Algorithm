### 문제

![](https://images.velog.io/images/chestnut1044/post/3945290c-bd38-4c65-a2e4-ec7ee424e73c/image.png)

---

### sol
```
import sys
while 1:
    A, B = map(int, sys.stdin.readline().split())
    if (A == 0 and B ==0):
        break
    print(A+B)

```


---

### 풀이

while문을 쓴 뒤 조건에 맞게 break를 걸고 빠져나온다.
그것도 모르고 True로 설정해서 틀림 경이 바보

---

### 참고
https://wook-2124.tistory.com/234