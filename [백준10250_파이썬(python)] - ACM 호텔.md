### 문제

![](https://images.velog.io/images/chestnut1044/post/b9299f65-e23b-4531-a82a-15f670447c57/image.png)

---

### sol

```
import sys
T = int(input())
arr = []
for i in range(T):
    H, W, N = map(int, sys.stdin.readline().split())
    room = 101
    cnt = 1
    check_1 = 1
    check_2 = 1
    while cnt <= N:
        if(check_1 <= H):
            arr.append(room)
            room += 100
            check_1 += 1
            cnt += 1
        else:
            room = 101 + check_2
            check_2 += 1
            check_1 = 1
    print(arr[-1])

```

---

### 풀이

ㅋㅋ 결국 풀어냄
처음 코드짤때는 n//h와 n%h를 사용했지만 반례가 너무많았다ㅜㅜ
그래서 101,201,301,401,,,102,202,302,,,,, 이런식으로 배열에 차곡차곡 쌓은뒤
가장 마지막값을 출력하는 형식으로 풀었다. 하지만 좋은 코드는 아닌듯

![](https://images.velog.io/images/chestnut1044/post/e21104d5-0842-4978-a9b7-0b2295c4d4a7/image.png)
다른 풀이를 보니 위와 같이 수식화를 하면 더 깔끔 하게 풀린다

---

### 참고

https://leedakyeong.tistory.com/entry/%EB%B0%B1%EC%A4%80-10250%EB%B2%88-ACM-%ED%98%B8%ED%85%94-in-python
