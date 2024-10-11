## 🔴 문제
> [A-B](https://www.acmicpc.net/problem/1001)

<br/>

## 🟡 Sol
```python
a, b = input().split()
a = int(a)
b = int(b)
print(a-b)
```
<br/>

## 🟢 풀이
split() 함수로 a, b를 입력받는다.

코드가 너무 길어져서 알아보니 map 함수를 이용해도 된다고 한다.
```python
a, b = map(int, input().split())
print(a-b)
```


<br/>

## 🔵 Ref
> https://ooyoung.tistory.com/16
https://velog.io/@pyh8618/Python-map-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%EB%B2%95