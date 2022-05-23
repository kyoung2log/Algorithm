### 문제
![](https://images.velog.io/images/chestnut1044/post/226151ef-dd4a-4957-ae0a-abaa0e73dccd/image.png)

---

### sol
```
N = int(input())

def num(x):  
    a = []
    for i in str(x):
        a.append(i)
    a = list(map(int, a))
    if(len(a)<3):
        return True
    else:
        if(a[2]-a[1] ==a[1]-a[0]):
            return True
        else: return False

sum = 0
for i in range(N):
    if(num(i+1) == True):
        sum = sum + 1

print(sum)
```
---

### 풀이
한수이면 True를 리턴하는 함수 num을 만든 뒤 입력받은 N번의 길이만큼 for문을 돌려 해당 수가 한수인지 아닌지 판단한다 한수라면 sum의 값을 1층가시켜 최종 sum 값을 출력

---

### 참고