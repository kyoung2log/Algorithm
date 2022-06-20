## 🔴 문제
> [나이순 정렬](https://www.acmicpc.net/problem/10814)


<br/>

## 🟡 Sol
```python
import sys
N = int(input())
data = []

for i in range(N):
  age, name = sys.stdin.readline().split()
  data.append([int(age), i ,name])

data.sort()

for i in data:
  print(i[0], i[2])
```
<br/>

## 🟢 풀이
데이터를 추가해줄때 나이를 숫자로 타입변환해서 데이터 추가했어야했는데 문자열로 추가해서 틀림
암튼 나이, 입력한 순서를 체크하는 인덱스값, 이름순으로 데이터를 추가해주고 정렬시키면
원하는대로 정렬이 된다.
결과를 출력할때는 문제에서 요구하는 age와 name만 출력해주면 됨

다른분들의 코드를 참고해봤더니 파이썬은 **stable sort**를 한다고 한다.
stable sort란 안정 정렬로 중복된 키들을 순서대로 정렬하는 알고리즘을 뜻한다.
따라서 키값으로 나이만 비교해줘도 되는 문제였다고 한다.

<br/>

## 🔵 Ref
> https://velog.io/@1204jh/10814