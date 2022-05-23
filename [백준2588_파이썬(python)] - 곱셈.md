### 문제
![](https://images.velog.io/images/chestnut1044/post/6ffa6a99-fb4e-49b2-a276-32afaa5f6c35/image.png)

---

### sol
```
A = int(input())
B = int(input())
b = []
num = B

while(num!=0):
    b.append(num%10)
    num= num//10

print(A*b[0])
print(A*b[1])
print(A*b[2])
print(A*B)
```

---

### 풀이
b라는 배열을 만들어서 배열안에 각 자릿수를 넣는다.
num 값을 B로 주면 마지막 A*B 값에서 0이 출력되니 주의한다.
print 문을 while안에 넣어도 될듯?

int형으로 바꾸지 않고 입력자체를 문자열로 받아서 문자열을 잘라서 int형으로 바꾸어줘도 된다.

또한 아래 참고 링크처럼 while문을 쓰지않고 코딩할수 있다. 


---

### 참고
https://gabii.tistory.com/entry/BaekJoonPython3-%EB%B0%B1%EC%A4%80-2588%EB%B2%88-%EA%B3%B1%EC%85%88