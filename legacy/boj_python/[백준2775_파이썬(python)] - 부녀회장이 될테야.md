## 🔴 문제
> [부녀회장이 될테야](https://www.acmicpc.net/problem/2775)

<br/>

## 🟡 Sol
```python
T = int(input())
for t in range(0, T):
    k = int(input())
    n = int(input())
    floor_0 = [i+1 for i in range(n)]
    for i in range(0, k):
        for i in range(0, n):
            floor_0.append(sum(floor_0[:i+1]))
        for i in range(0, n):
            del floor_0[0]
    print(floor_0[-1])
```
<br/>

## 🟢 풀이
일단 0층을 배열로 만들어두고 K의 수만큼 반복해서 배열을 갱신한다
K가 3이라면 for 문을 3번 돌려서 1층, 2층, 3층의 배열값을 갱신해주고 배열의 마지막값을 출력

왜 배열을 쓰면 안된다고 생각했지?
배열을쓰면 복잡도인가 먼가가 너무 커질거같아서 메모리소모랑 어쩌구 이런 문제 생길거같아서 안쓰다가 답답해서 답 검색해봤다.
참고된 링크랑은 다르게 풀었지만 어케어메 풀었다.
처음에 피보나치 수열로 풀어야 하는 문제인줄 알았음


<br/>

## 🔵 Ref
> https://ooyoung.tistory.com/89

