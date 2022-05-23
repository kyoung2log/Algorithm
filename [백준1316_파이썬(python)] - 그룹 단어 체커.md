### 문제
![](https://images.velog.io/images/chestnut1044/post/8690c85c-5328-4b1e-96f1-1ca5279b2b27/image.png)


---
### sol
```
import sys
n = int(input())
result = 0
for i in range(n):
    s = sys.stdin.readline()
    S = ''
    check = True
    for j in range(len(s)):
        if(s[j] not in S):
            S = S + s[j]
        else:
            if(s[j] != S[-1]):
                check = False
    if(check == True):
        result = result + 1
print(result)
```


---
### 풀이
check 의 부울값을 True로 설정한 뒤
중첩반복문을 사용해 나왔던문자가 또 나온다면 false 반환
True일때만 값을 세서 출력


---
### 참고