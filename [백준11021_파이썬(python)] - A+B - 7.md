### 문제
![](https://images.velog.io/images/chestnut1044/post/8740d07f-fe13-4a04-8a37-74e4483ef56b/image.png)

---

### sol
```
import sys
T = int(sys.stdin.readline())

for i in range(T):
    A, B = map(int, sys.stdin.readline().split())
    print("Case #%d: %d" %(i+1 ,A+B))
```

---

### 풀이
포매팅으로 출력했다. 
일반적으로 출력하면 띄어쓰기가 포함되어 출력되어서 오류발생



---

### 참고
https://wikidocs.net/13#_16