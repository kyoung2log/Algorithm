### 문제
![](https://images.velog.io/images/chestnut1044/post/e0a543bb-932a-4ff2-912c-63128f269de2/image.png)


---
### sol
```
a, b = input().split()
a = int(a)
b = int(b)
print(a-b)
```
---

### 풀이
split() 함수로 a, b를 입력받는다.

코드가 너무 길어져서 알아보니 map 함수를 이용해도 된다고 한다.
```
a, b = map(int, input().split())
print(a-b)
```
---

### 참고
https://ooyoung.tistory.com/16
https://velog.io/@pyh8618/Python-map-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%EB%B2%95