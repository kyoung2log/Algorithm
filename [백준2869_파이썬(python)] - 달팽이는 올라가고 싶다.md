### 문제

![](https://images.velog.io/images/chestnut1044/post/433cdb6e-da2d-49e0-a63d-b6cd8c30cb62/image.png)

---

### sol

```
import sys
A, B, V = map(int, sys.stdin.readline().split())

l = A
d = int(V/(A-B))-A

if(d < 0):
    d = 1

while True:
    if(V <= l):
        print(d)
        break
    else:
        d = d + 1
        l = A*d-B*(d-1)

```

---

### 풀이

처음에 짠 코드가 계속 틀리길래 백준 질문페이지 반례를 많이보고 반례에 맞게 수정함...

```
import math

a, b, v = map(int, input().split())
# a= 올라가는 길이, b= 떨어지는길이, v= 나무높이

day = math.ceil((v-a)/(a-b)) + 1
print(day)
```

math 모듈의 ceil 함수를 사용한 위의 코드도 있더라

---

### 참고

https://ooyoung.tistory.com/85
