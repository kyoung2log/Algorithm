### 문제
![](https://images.velog.io/images/chestnut1044/post/b9928047-8a1a-4651-91b0-30758e41122f/image.png)



---

### sol
```
S = str(input())

arr = [-1 for i in range(26)]

for i in range(len(S)):
    if(arr[ord(S[i])-97] == -1):
        arr[ord(S[i])-97] = i

for i in range(len(arr)):
    print(arr[i], end=" ")

```


---

### 풀이
길이가 정해진 리스트를 하나 만든뒤에 값을 -1로 선언해준다.
조건문을 사용해 -1 이면 값을 바꿔준다.



---

### 참고
https://jobc.tistory.com/141