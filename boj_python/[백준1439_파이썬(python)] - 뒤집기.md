## 🔴 문제
> [뒤집기](https://www.acmicpc.net/problem/1439)


<br/>

## 🟡 Sol
```python
S = input()
reverse = S[0]
cnt = 0
for i in S[1:]:
    if i == reverse:
        continue
    else:
        cnt += 1
        reverse = i

if cnt % 2 == 0:
    print(cnt//2)
else:
    print(cnt//2+1)
```
<br/>

## 🟢 풀이
값이 0과 1 두 개이기 때문에 S[0]을 기준 값으로 두고 s[1]부터 끝까지 반복하며
뒤집어줘야 하는 값인지 아닌지 카운팅 해주면 된다.
내 풀이는 10001일 경우 1에서 0으로 바뀔 때와 0에서 1으로 바뀌는 경우 두 번 카운팅 되기 때문에 마지막에 2로 나누어서 출력 했다.

<br/>

## 🔵 Ref
> 