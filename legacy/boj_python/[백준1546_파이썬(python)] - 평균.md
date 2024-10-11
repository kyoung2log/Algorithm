## 🔴 문제
> [평균](https://www.acmicpc.net/problem/1546)

<br/>

## 🟡 Sol
```python
import sys
N = int(input())
grade = list(map(int, input().split()))
sum = 0

for i in range(len(grade)):
    sum = sum + grade[i]/max(grade)

print(sum/len(grade)*100)
```
<br/>

## 🟢 풀이
점수를 입력 받아 int형으로 매핑해준뒤 list형으로 변환한다.
list내의 최댓값을 구하는 함수 max를 사용해 최댓값을 찾은 뒤 평균계산

<br/>

## 🔵 Ref
> https://velog.io/@inyong_pang/Data-Structure-list%EB%A6%AC%EC%8A%A4%ED%8A%B8-vs-tuple%ED%8A%9C%ED%94%8C-vs-set%EC%85%8B-vs-dict%EB%94%95%EC%85%94%EB%84%88%EB%A6%AC