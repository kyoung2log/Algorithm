### 문제

![](https://images.velog.io/images/chestnut1044/post/4fb94673-6d79-46a5-8064-f33923538289/image.png)

---

### sol

```
import sys
T = int(sys.stdin.readline())

for i in range(T):
    A, B = map(int, sys.stdin.readline().split())
    print("Case #%d: %d + %d = %d" %(i+1 ,A, B, A+B))
```

---

### 풀이

문제 11021에서 출력형식만 바꾸어주면된다.

---

### 참고
https://velog.io/@chestnut1044/%EB%B0%B1%EC%A4%8011021%ED%8C%8C%EC%9D%B4%EC%8D%ACpython-AB-7