## 🔴 문제
> [영화감독 숌](https://www.acmicpc.net/problem/1436)


<br/>

## 🟡 Sol
```python
N = int(input())
cnt = 1
result = 0

while True:
    if(result == N):
        break
    if("666" in str(cnt)):
        result += 1
    cnt += 1
print(cnt-1)
```
<br/>

## 🟢 풀이
1부터 체크해주기 위한 변수인 cnt, 종말의 숫자만 세는 result 변수를 설정해준뒤 while문으로 무한반복을 돌린다.

1부터 체크해주기 위한 변수인 cnt를 문자열로 바꿔서, 666이 그 문자열 안에 있다면 result값을 증가시킨다.

1부터 ~ 까지의 숫자를 검사하는것이니 cnt값도 증가해준다.

종말의 숫자를 센 값이 내가 입력한 값과 같다면 반복을 중단하고 출력!

실버 5 보다 쉬운 난이도였다.

<br/>

## 🔵 Ref
> 