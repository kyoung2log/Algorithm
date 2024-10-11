## 🔴 문제
> [윤년](https://www.acmicpc.net/problem/2753)

<br/>

## 🟡 Sol
```python
year = int(input())
check = ((year % 4)==0 and (year%100)!=0) or (year%400) == 0 

if(check == True):
    print("1")
else:
    print("0")
```
<br/>

## 🟢 풀이
bool을 사용함
파이썬에서 True와 False 는 꼭! 대문자로 시작한다.



<br/>

## 🔵 Ref

