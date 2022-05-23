### 문제
![](https://images.velog.io/images/chestnut1044/post/937398f9-b300-40b5-b271-6bb446c18e87/image.png)


---
### sol
```
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


---

### 풀이
너무 까다로운 문제라서 다른사람의 풀이를 참고했다
아래는 내가 틀린 풀이인데 어디에서 틀린지 모르겠다 끄응..
```
import operator
S = input()
array = []
for i in S:
    if (ord(i)>96):
        array.append(ord(i)-32)
    else:
        array.append(ord(i))

check = {}
for i in array:
    if str(i) in check:
        k = int(check['{0}'.format(i)])
        check['{0}'.format(i)] = str(k+1)
    else:
        check['{0}'.format(i)] = '1'
        
all_value = list(check.values())
all_value = sorted(all_value,  reverse = True)
all_key = list(check.keys())

try:
    if(all_value[0] == all_value[1]):
        print("?")
    else:
        for i in all_key:
            if(check[i] == all_value[0]):
                print(chr(int(i)))
except:
    print(chr(array[0]))

```

---

### 참고
https://wook-2124.tistory.com/257