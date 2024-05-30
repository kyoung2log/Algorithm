![](https://images.velog.io/images/chestnut1044/post/937398f9-b300-40b5-b271-6bb446c18e87/image.png)


## 🔴 문제
> [단어 공부](https://www.acmicpc.net/problem/1157)

<br/>

## 🟡 Sol
```python
S = input().lower()
S_list = list(set(S))
cnt = []


for i in S_list:
    count = S.count(i)
    cnt.append(count)

if cnt.count(max(cnt))>=2:
    print('?')
else:
    print(S_list[cnt.index(max(cnt))].upper())
```
<br/>

## 🟢 풀이
까다로운 문제라서 다른사람의 풀이를 참고했다.


<br/>

## 🔵 Ref
> https://wook-2124.tistory.com/257