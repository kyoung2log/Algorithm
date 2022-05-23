### 문제
![](https://images.velog.io/images/chestnut1044/post/a7a286af-e4cf-40bd-a829-9bfff5d7d3e4/image.png)


---
### sol
```
import sys
N = int(input())
grade = list(map(int, input().split()))
sum = 0

for i in range(len(grade)):
    sum = sum + grade[i]/max(grade)

print(sum/len(grade)*100)
```


---
### 풀이
점수를 입력 받아 int형으로 매핑해준뒤 list형으로 변환한다.
list내의 최댓값을 구하는 함수 max를 사용해 최댓값을 찾은뒤 평균계산


---

### 참고