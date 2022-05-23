### 문제
![](https://images.velog.io/images/chestnut1044/post/f7c41549-9d7c-44be-aace-7f4174f3378e/image.png)


---

### sol
```
N = int(input())
n = list(map(int, input().split()))
min = n[0]
max = n[0]

for i in n:
    if(min > i):
        min = i

for j in n:
    if(max < j):
        max = j
        
print(min,max)
```


---

### 풀이
map 함수를 쓰고 array 형태로 접근하고 싶을때는 int() 사용하는거처럼 list()를 사용하면 된다.

다른 코드를 찾아보니 그냥 단순하기 min, max함수를 사용하기도 하더라.

---

### 참고
https://god-gil.tistory.com/10
https://yongku.tistory.com/entry/%EB%B0%B1%EC%A4%80-10818%EB%B2%88-%EC%B5%9C%EC%86%8C-%EC%B5%9C%EB%8C%80-%ED%8C%8C%EC%9D%B4%EC%8D%ACPython