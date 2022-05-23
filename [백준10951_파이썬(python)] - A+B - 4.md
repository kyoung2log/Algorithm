### 문제

![](https://images.velog.io/images/chestnut1044/post/58c64c72-2244-4d1b-8e43-f537de4d7b5b/image.png)

---
### sol
```
while 1:
    try:
        A, B = map(int, input().split())
        print(A+B)
    except:
        break
```


---

### 풀이
예외처리문을 사용해 예외가 발생하면 break를 걸어줬다. 

---

### 참고
https://wikidocs.net/30