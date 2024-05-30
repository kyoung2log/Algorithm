## 🔴 문제
> [나머지](https://www.acmicpc.net/problem/3052)

<br/>

## 🟡 Sol
```python
num = []

for i in range(10):
    num.append(int(input())%42)

num = set(num)
print(len(num))
```
<br/>

## 🟢 풀이
set은 중복을 허용하지 않기 때문에 list를 set 형태로 바꾸어준다.


<br/>

## 🔵 Ref
> https://velog.io/@inyong_pang/Data-Structure-list%EB%A6%AC%EC%8A%A4%ED%8A%B8-vs-tuple%ED%8A%9C%ED%94%8C-vs-set%EC%85%8B-vs-dict%EB%94%95%EC%85%94%EB%84%88%EB%A6%AC