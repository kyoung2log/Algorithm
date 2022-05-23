### 문제
![](https://images.velog.io/images/chestnut1044/post/e06e3fdb-3810-4bc7-aed6-59162a53eb7e/image.png)


---

### sol
```
s = input()
for i in  range(len(s)):
    if('c=' in s):
        s = s.replace('c=','.')
    elif('c-' in s):
        s = s.replace('c-','.')
    elif('dz=' in s):
        s = s.replace('dz=','.')
    elif('d-' in s):
        s = s.replace('d-','.')
    elif('lj' in s):
        s = s.replace('lj','.')   
    elif('nj' in s):
        s = s.replace('nj','.')
    elif('s=' in s):
        s = s.replace('s=','.')
    elif('z=' in s):
        s = s.replace('z=','.')
print(len(s))
```

---
### 풀이
크로아티아 알파벳이 문자열 안에 있다면 다른문자로 바꿔준뒤, 마지막에 문자열의 길이를 출력하면된다.


---

### 참고