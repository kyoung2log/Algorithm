## 🔴 문제
> [NBA 농구](https://www.acmicpc.net/problem/2852)


<br/>

## 🟡 Sol
```python
n = int(input())
# 이전 시간  / 몇 번팀이 이기고 있었는지
prev =[0, 0]
team1 = [0, 0]
team2 = [0, 0]

for _ in range(n):
    win, time = input().split()
    if win == '1': team1[0] += 1
    else: team2[0] += 1
    minute, second = map(int, time.split(":"))
    time = minute*60 + second
    if team1[0] == team2[0]: # 동점이라면
        if prev[1] == 1:
            team1[1] += time - prev[0]
        else:
            team2[1] += time - prev[0]
        prev[1] = 0
    elif team1[0] > team2[0]: # 팀 1이 이겼다면?
        if prev[1] == 0: # 이전까지는 비기고 있었다면?
            prev[0] = time; prev[1] = 1
    else: # 팀 2이 이겼다면?
        if prev[1] == 0: # 이전까지는 비기고 있었다면?
            prev[0] = time; prev[1] = 2

if prev[1] == 1:
    team1[1] += 48*60 - prev[0]
if prev[1] == 2:
    team2[1] += 48*60 - prev[0]

print("%02d:%02d" %(team1[1]//60, team1[1]%60))
print("%02d:%02d" %(team2[1]//60, team2[1]%60))


```
<br/>

## 🟢 풀이
이전의 정보를 저장하는 prev 리스트와 team1, team2의 정보를 저장하는 리스트를 각각 만들어줬다.

prev 0번째 인덱스에는 입력받았던 이전의 시간이 기록했고, 1번째 인덱스에는 몇 번팀이 이기고 있는지 기록해주었다.
team 리스트의 각각 0번째 인덱스에는 몇 번 골을 넣었는지 카운팅 해주었고, 1번째 인덱스에는 이기고 있던 시간을 저장했다.

반복문을 돌면서 이긴 팀의 점수를 먼저 올려주고 조건을 따져주었다.
점수가 올랐는데 동점이 되었다면 이기고 있던 시간을 체크해주어야 했다.(동점에서 동점으로 바뀌는 경우는 없기때문)

그리고, 1번팀이 이기고 있는 상황인데 이전까지 비기고 있었을 때는 prev 값을 변경해주어야 한다. 이 때 1번팀이 이겼는데 prev에서 2번팀이 이기고 있는 경우는 없다. prev에서는 무조건 동점 아니면 1번팀이 이겼을 것이다.

이러한 방식으로 구현을 하다보면 마지막 종료시가 카운팅 안되는데 포문 밖에서 체크해주면 된다.

출력할때는 서식문자열을 사용하여 두자리형태로 맞춰줘야 한다.

구현이 생각보다 까다로웠다.


<br/>

## 🔵 Ref
