## 🔴 문제
> [기상캐스터](https://www.acmicpc.net/problem/10709)


<br/>

## 🟡 Sol
```python
h, w = map(int, input().split())
answer = []

for _ in range(h):
    data = input()
    if 'c' not in data:
        answer.append([-1 for _ in range(w)])
        continue
    prev = -1
    ans = []    
    for i in range(len(data)):
        if data[i] == '.':
            if prev == -1:
                ans.append(-1)
            else:
                ans.append(i-prev)    
        elif data[i] == 'c':
            ans.append(0)
            prev = i
    answer.append(ans)

for i in answer:
    for j in i:
        print(j, end=" ")
    print()
```
<br/>

## 🟢 풀이
문제에서 주어진 조건을 그대로 구현하면 되는 문제 입력받은 정보에서 구름이 나온다면 인덱스를 저장해줬다.

<br/>

## 🔵 Ref
