### 문제
![](https://images.velog.io/images/chestnut1044/post/83c95980-ac77-4781-bd29-45c05932b81e/image.png)

---
### sol
```
s1,s2 = input().split()
S1 = ''
S2 = ''

for i in range(len(s1)):
    S1 = S1 + (s1[2-i])
for i in range(len(s2)):
    S2 = S2 + (s2[2-i])

if(int(S1)>int(S2)):
    print(S1)
else:
    print(S2)

```


---
### 풀이
[::-1] 가 역순이래 
이거쓰면 편함


---
### 참고
https://ooyoung.tistory.com/72
https://itholic.github.io/python-reverse-string/