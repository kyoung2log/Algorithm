## 🔴 문제
> [덩치](https://www.acmicpc.net/problem/7568)


<br/>

## 🟡 Sol
```python
N = int(input())
body = [] ## 사람들 정보

for i in range(N):
  body.append(list(map(int, input().split())))

for i in body:
  rank = 1
  for j in body:
    if(i[0]<j[0] and i[1]<j[1]):
      rank += 1
  print(rank, end=" ")
```
<br/>

## 🟢 풀이
덩치의 최소를 비교해서 정렬된 값을 list에 넣는 방식으로 문제에 접근하니 생각해줘야할 요소가 많아 문제가 풀리지 않았다.

그래서 다른분의 풀이(ref)를 참고했더니, 그냥 자신보다 크고 무거운사람의 숫자를 세면된다고 한다.

다양한 방법으로 문제에 접근해야하는데 자꾸 인간이 크기를 비교하는방법으로 접근하니 안풀렸던것 같다.

입출력 관계를 살펴보는것도 풀이에 도움이 될것같다.

<br/>

## 🔵 Ref
> https://claude-u.tistory.com/122