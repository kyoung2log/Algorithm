### 문제
![](https://images.velog.io/images/chestnut1044/post/03ad592a-c910-4208-89cb-02a556fb3268/image.png)


---

### sol
```
s = input()
sum = 0

for i in range(len(s)):
    if(ord(s[i])<83):
        num = ord(s[i])-65
        sum = sum + int(num/3) + 3
    elif(ord(s[i]) == 83):
        num = 8
        sum = sum + int(num)
    elif(83<ord(s[i])<90):
        num = ord(s[i])-66
        sum = sum + int(num/3)+3
    else:
        num = 10
        sum = sum + int(num)
print(sum)
```


---
### 풀이
개쩌는 풀이를 발견함 개쩐다 이런생각어케하누
```
dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
a = input()
ret = 0
for j in range(len(a)):
    for i in dial:
        if a[j] in i:
            ret += dial.index(i)+3
print(ret)

```

---

### 참고
https://j-remind.tistory.com/76
