## 🔴 문제
> [알파벳 개수](https://www.acmicpc.net/problem/10808)


<br/>

## 🟡 Sol
```python
alphabet = [0]*26

word = input()

for i in word:
    alphabet[ord(i)-97] += 1

print(*alphabet)

```
<br/>

## 🟢 풀이
알파벳을 입력받아 for문으로 반복하면서 ord() 함수를 사용해 아스키코드로 바꿔준다.
각 알파벳별 개수를 체크하고 후에 *를 사용해 리스트 안의 항목을 보여준다

<br/>

## 🔵 Ref
