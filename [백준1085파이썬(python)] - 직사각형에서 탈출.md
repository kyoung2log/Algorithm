### 문제
![](https://images.velog.io/images/chestnut1044/post/a80cd8f1-f32f-4729-b466-2658a490a3cf/image.png)


---

### sol

```
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
---
### 풀이

경우를 나누어서 풀었는데 다른 풀이들은 경우를 안나눠서 풀었다
왜지? 하고 고민했는데 
![](https://images.velog.io/images/chestnut1044/post/443bf2d3-403c-4e70-8679-b7f6ee680536/image.png)
문제 제한에 써져있넹 ㅋㅋㅎ....
암튼 조건문 대신 print(min(x, y, w-x, h-y)) 쓰면 될것 같다.

---

### 참고
https://ooyoung.tistory.com/102