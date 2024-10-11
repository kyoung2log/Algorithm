## 🔴 문제
> [직사각형에서 탈출](https://www.acmicpc.net/problem/1085)

<br/>

## 🟡 Sol
```python
x, y, w, h = map(int,input().split())

if(x>=w and y>=h):
    print(min(x-w, y-h))
elif(x>=w and y<h):
    print(min(x-w, h-y, y))
elif(x<w and y>=h):
    print(min(x, w-x, y-h))
else:
    print(min(x, y, w-x, h-y))

```
<br/>

## 🟢 풀이
경우를 나누어서 풀었는데 다른 풀이들은 경우를 안나눠서 풀었다
왜지? 하고 고민했는데 
![](https://images.velog.io/images/chestnut1044/post/443bf2d3-403c-4e70-8679-b7f6ee680536/image.png)
문제 제한에 써져있음
암튼 조건문 대신 print(min(x, y, w-x, h-y)) 쓰면 될것 같다.



<br/>

## 🔵 Ref
> https://ooyoung.tistory.com/102

