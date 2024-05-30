## 🔴 문제
> [비밀번호 발음하기](https://www.acmicpc.net/problem/4659)


<br/>

## 🟡 Sol
```python
def check(pw):
  C = "aeiou"
  V = "bcdfghjklmnpqrstvwxyz"
  if "a" not in pw and "e" not in pw and "i" not in pw and "o" not in pw and "u" not in pw:
        return False
  prev = pw[0]
  stack = 0
  for i in pw[1:]:
      if prev!="e" and prev!="o" and prev == i:
          return False
      if (prev in C and i in C) or (prev in V and i in V):
          stack += 1
      else:
          stack = 0
      if stack >= 2:
          return False
      prev = i
  return True

while True:
    pw = input()
    if pw == "end":        
        break
    if check(pw):
        print("<{}> is acceptable.".format(pw))
    else:
        print("<{}> is not acceptable.".format(pw))
```
<br/>

## 🟢 풀이
무한반복 안에서 함수 호출 결과에 따라 출력문을 다르게 해줬다.
check()함수에서는 문제에서 주어진 조건을 사용했다.
정규표현식을 사용하면 깔끔할듯

<br/>

## 🔵 Ref
