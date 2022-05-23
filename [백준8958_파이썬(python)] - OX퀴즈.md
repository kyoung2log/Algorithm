### 문제
![](https://images.velog.io/images/chestnut1044/post/771e755c-b1ec-4b65-afe4-0b89b0d58ec1/image.png)

---
### sol
```
import sys
T = int(input())
arr = []
sum = 0
stack = 1
for i in range(T):
    arr.append(sys.stdin.readline().strip())
    for j in range(len(arr[i])):
        if(arr[i][j] == 'O'):
            sum = sum + stack
            stack += 1
        else:
            stack = 1
    print(sum)
    stack = 1
    sum = 0
```

---
### 풀이
테스트 케이스 만큼 값을 입력받아 배열에 추가
중첩 for문을 사용해서 X를 만나면 stack을 1로 초기화해준다. 
지저분한거같기도

---
### 참고