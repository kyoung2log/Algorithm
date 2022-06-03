## 🔴 문제
> [분해합](https://www.acmicpc.net/problem/2231)


<br/>

## 🟡 Sol
```python
N = int(input())
constructor = []

for i in range(1, N+1):
  i_list = list(map(int, str(i)))
  if(N == i + sum(i_list)):
    constructor.append(i)
    break

if(len(constructor) == 0):
  print(0)
else:
  print(constructor[0])


```
<br/>

## 🟢 풀이
input 범위가 1부터 1000000 까지라서 반복문을 돌릴생각을 못했는데 상관이 없었다.(시간복잡도 공부해야될듯)
암튼.. 말그대로 1부터 모든 입력받은 N까지 모든 경우의수를 계산하여 생성자라면 빈 리스트에 넣어주는 식으로 코드를 짜보았다.
마지막에는 리스트의 길이에 따라 출력하는 내용이 달라질수 있게 했다.
코테 준비할때 히든 케이스를 찾아보지 않는것이 좋다고 생각해(실제 코테에서는 히든케이스를 주지 않는다.) 있는 힘껏 반례를 찾았으나 결국 질문탭에서 도움을 받음
심지어 반례는 굉장히 쉬운부분에서 나타났다.
열받넹

<br/>

## 🔵 Ref
> 