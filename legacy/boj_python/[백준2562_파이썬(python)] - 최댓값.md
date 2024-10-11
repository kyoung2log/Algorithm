## 🔴 문제
> [최댓값](https://www.acmicpc.net/problem/2562)

<br/>

## 🟡 Sol
```python
N = []
max = 0
key = 0
for i in range(9):
    N.append(int(input()))
    if(N[i]>max):
        max = N[i]
        key = i

print(max)
print(key+1)
```
<br/>

## 🟢 풀이
배열을 생성한뒤 입력받은값을 배열에 append로 추가
list 내에서 최댓값, 최소값, index를 찾을수 있는 함수
max(), min(), index()가 존재한다.


<br/>

## 🔵 Ref
> https://jangjy.tistory.com/332
https://yongku.tistory.com/entry/%EB%B0%B1%EC%A4%80-2562%EB%B2%88-%EC%B5%9C%EB%8C%93%EA%B0%92-%ED%8C%8C%EC%9D%B4%EC%8D%ACPython