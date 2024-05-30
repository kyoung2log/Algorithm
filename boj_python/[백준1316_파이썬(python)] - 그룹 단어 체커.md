## 🔴 문제
> [그룹 단어 체커](https://www.acmicpc.net/problem/1316)

<br/>

## 🟡 Sol
```python
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
<br/>

## 🟢 풀이
check 의 부울값을 True로 설정한 뒤
중첩반복문을 사용해 나왔던문자가 또 나온다면 false 반환
True일때만 값을 세서 출력한다.


<br/>

## 🔵 Ref