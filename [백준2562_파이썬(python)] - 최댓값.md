### 문제
![](https://images.velog.io/images/chestnut1044/post/f89ee608-1b63-4035-a6aa-0c565bacc92f/image.png)


---
### sol
```
N = []
max = 0
key = 0
for i in range(9):
    N.append(int(input()))
    if(N[i]>max):
        max = N[i]
        key = i

print(max)
print(key+1)
```


---
### 풀이
배열을 생성한뒤 입력받은값을 배열에 append로 추가
list 내에서 최댓값, 최소값, index를 찾을수 있는 함수
max(), min(), index()가 존재한다.


---
### 참고
https://jangjy.tistory.com/332
https://yongku.tistory.com/entry/%EB%B0%B1%EC%A4%80-2562%EB%B2%88-%EC%B5%9C%EB%8C%93%EA%B0%92-%ED%8C%8C%EC%9D%B4%EC%8D%ACPython