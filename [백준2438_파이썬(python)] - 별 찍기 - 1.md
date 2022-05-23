### 문제
![](https://images.velog.io/images/chestnut1044/post/8443732d-ae0d-455a-b4d2-92790bac77df/image.png)


---

### sol

```
N = int(input())
for i in range(N):
    for j in range(i+1):
        print("*", end='')
    print()

```

---

### 풀이
for i in range(n) = 0부터 n-1까지
for i in range(a, b) = a부터 b-1까지!!

문자열끝에 개행문자를 넣고 싶지 않으면 end=''를 사용하면 된다. 

++ 다른 풀이 찾다가 발견했는데 그냥 "*" *  i를 해도 된다.....


---

### 참고
https://snakify.org/ko/lessons/for_loop_range/
https://claude-u.tistory.com/19