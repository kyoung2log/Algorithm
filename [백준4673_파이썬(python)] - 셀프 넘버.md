## 🔴 문제
> [셀프 넘버](https://www.acmicpc.net/problem/4673)

<br/>

## 🟡 Sol
```python
def d(n):
    sol = n + sum(map(int,str(n)))
    return sol

arr = []
for i in range(1,10000):
    arr.append(d(i))

check = []
for j in range(1,10000):
    if j not in arr:
        check.append(j)

for k in range(len(check)):
    print(check[k])
```
<br/>

## 🟢 풀이
함수 d(n)을 정의해준다.
그 후 n의자리에 1부터 10000까지를 넣은 뒤 함수값을 배열 arr에 추가하고
다시 배열을 1부터 10000까지 돌려 arr에 값이 없다면 셀프넘버이므로 check라는 배열에 추가한다.
마지막으로 check배열의 길이만큼 반복해 출력하면 끝!

<br/>

## 🔵 Ref
> https://lelecoder.com/111
https://go-hard.tistory.com/96