## 🔴 문제
> [블랙잭](https://www.acmicpc.net/problem/2798)


<br/>

## 🟡 Sol
```python
import itertools

N, M = map(int, input().split())
input_data = list(map(int, input().split()))
card_list = itertools.combinations(input_data, 3)
gap = [0,0,0]

for i in card_list:
  if(sum(i) > M):
    continue
  elif(M-sum(i) <= M-sum(gap)):
    gap = i

print(sum(gap))
```
<br/>

## 🟢 풀이
처음에는 조금 막막했다. 리스트 형태에서 어떻게 세개의 수를 뽑아낼까 고민하다가, 고등 수학에서 배웠던 조합의 개념으로 접근해야겠다는 생각을 했다.

생각이 들자마자 바로 조합 python 구글링(Ref)을 했더니 itertools이라는 아주 훌륭한 라이브러리가 있더라~

N과 M을 입력받은후, input_data에 카드를 list 형태로 저장한 뒤 card_list에 itertools.combinations를 이용해 조합형태로 카드 3장을 분류한다. 이때 자료형은 set으로 리턴한다.

gap은 임의의 배열 [0, 0, 0]로 설정한 뒤, card_list의 요소를 하나씩 돌면서 카드 3장 묶음의 합이 M을넘는다면 continue로 예외처리, 아니라면 M-sum(gap)와 M-sum(i)를 비교해 gap의 카드 3장 묶음을 바꿔준다.

1트로 성공하진 못했다.
이유는 M을 넘지않는 3장의 카드를 고르는걸 무시함

<br/>

## 🔵 Ref
> https://velog.io/@falling_star3/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%88%9C%EC%97%B4-%EC%A1%B0%ED%95%A9-%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EC%A4%91%EB%B3%B5%EC%A1%B0%ED%95%A9itertools%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B5%AC%ED%98%84