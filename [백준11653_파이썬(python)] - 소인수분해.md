### 문제
![](https://images.velog.io/images/chestnut1044/post/1bbf9fac-8ffa-4bb8-9245-b9ee102deee4/image.png)

---

### sol
```
N = int(input())
d = 2

while(d<=N):
    if(N%d == 0):
        print(d)
        N = N / d
    else:
        d = d + 1

```

---


### 풀이
도저히 감이 안잡혀서 코드 검색해봤는데 생각보다 무지 간단했다...
좀 더 생각해볼걸,, 현타옴

---

### 참고
https://needneo.tistory.com/112