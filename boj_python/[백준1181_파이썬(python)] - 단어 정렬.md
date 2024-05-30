## 🔴 문제
> [단어 정렬](https://www.acmicpc.net/problem/1181)


<br/>

## 🟡 Sol
```python
import sys
N = int(input())
word = []

for i in range(N):
  i = input()
  if [len(i), i] in word:
    continue
  word.append([len(i), i])

word.sort()
for i in range(len(word)):
  print(word[i][1])
```
<br/>

## 🟢 풀이
한번틀림 중복을 허용하지 않는다는것을 못봤다 ㅠㅠ
데이터를 입력해서 입력된 값을 리스트 형태로 word에 추가했다.
중복을 허용하지 않기 때문에 추가할 데이터가 이미 word리스트 안에 있다면 continue를사 용해 건너 띄어줬다.

다른분의 코드에서 sys.stdin.readline().strip()과 input()이 10배 이상의 속도차이를 보인다고 정리해주셨는데
수치를 직접 보니 꼭 sys.stdin.readline()을 사용해야겠다는 생각이 들었음
그리고 sort(key = len) 처럼 키값을 사용하면 여러가지 기준으로 정렬을 실행할 수 있다.
<br/>

## 🔵 Ref
> https://velog.io/@1204jh/1181