### 문제
![](https://images.velog.io/images/chestnut1044/post/71c43392-50d6-4eda-b2bb-063243b93b82/image.png)


---

### sol
```
A,B,C = map(int,input().split())

if(A+B*1-C*1 < A+B*2-C*2):
    print('-1')
else:
    print(A//(C-B)+1)
```


---
### 풀이
```
A,B,C = map(int,input().split())
N = 1

if(B>=C):
    print('-1')
else:
    while 1:
        if(A+B*N >= C*N):
            N = N + 1
        else:
            break
    print(N)
```
위와 같은 쓰레기 코드를 짰었는데 입력 예시 3
while문에서 오류가 나는거 같아 답을 찾아봤다...
구하고자하는건 결국 N이기 때문에 N만 식으로 표현해주면 되는것이었음 

---
### 참고
https://ooyoung.tistory.com/80