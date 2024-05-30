## 🔴 문제
> [설탕 배달](https://www.acmicpc.net/problem/2839)

<br/>

## 🟡 Sol
```python
N = int(input())
cnt = N//5
while(True):
    if(cnt > 0):
        if((N-5*cnt) % 3 == 0):
            result = cnt + (N-5*cnt)//3
            print(result)
            break
        elif((N-5*cnt) % 3 != 0):
            cnt = cnt - 1
    elif(cnt == 0):
        if(N % 3 == 0):
            result = N//3
            print(result)
            break
        elif(N % 3 != 0):
            print("-1")
            break
```
<br/>

## 🟢 풀이
먼저 입력받은 N을 5로 나눈수를 cnt로 지정
(N-5\*cnt)가 3으로 나눠지면 result 출력, break
3으로 안나눠진다면 cnt 즉 5를 하나 줄여서 3으로 나눠지는지 확인


<br/>

## 🔵 Ref

