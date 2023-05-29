## 🔴 문제
> [빈도 정렬](https://www.acmicpc.net/problem/2910)


<br/>

## 🟡 Sol
```python
n, c = map(int, input().split())
sequence = list(map(int, input().split()))
d = dict()
for i in sequence:
    if i in d:
        d[i] += 1
    else:
        d[i] = 1

d = sorted(d.items(), key=lambda x:x[1], reverse=True)
for k, v in d:
    for _ in range(v):
        print(str(k) + " ", end="")

```
<br/>

## 🟢 풀이
딕셔너리를 사용해 키(숫자) - 벨류(빈도수) 형태로 저장해준다.
딕셔너리를 key=lambda x:x[1] 을 사용해 벨류(빈도수)로 정렬해준 뒤 출력하면된다.
사실 c의 범위가 10억이라 정렬은 생각도 못했기에 못풀어서 다른사람의 풀이를 봤다.
하지만 길이가 n이하인 리스트가 정렬되는것이기에 정렬로 풀 수 있는 문제
배운점 : 정렬되는 친구의 길이를 확인하자


<br/>

## 🔵 Ref
> https://velog.io/@deankang97/%EB%B0%B1%EC%A4%80-2910-%EB%B9%88%EB%8F%84%EC%A0%95%EB%A0%AC