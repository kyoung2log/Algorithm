## 🔴 문제
> [통계학](https://www.acmicpc.net/problem/2108)


<br/>

## 🟡 Sol
```python
import sys
N = int(input())
N_List = []
mode_List = [0]*8001
mode = []

for _ in range(N):
    N_List.append(int(sys.stdin.readline()))

N_List.sort()

for i in N_List:
    mode_List[i+4000] += 1
for i in range(len(mode_List)):
    if(mode_List[i] == max(mode_List)):
        mode.append(i)

print(round(sum(N_List)/N))
print(N_List[len(N_List)//2])
if(len(mode) == 1):
    print(mode[0]-4000)
else:
    print(mode[1]-4000)
print(max(N_List)-min(N_List))

```
<br/>

## 🟢 풀이
한번에 맞았다 !!
산술평균, 중앙값, 범위는 쉽게 구할수 있었다.
문제는 최빈값이었는데 크기가 주어졌기 때문에 크기가 8001인 list를 만들고, 계수 정렬을 사용해 숫자를 카운트 해준다.
그 다음 반목문을 사용해 최빈값인 수를 mode라는 새로운 list에 추가한뒤 mode의 개수에 따라 출력을 달리해주면 된다.
사실 .count()의 사용법을 몰라서 안썼기 때문에 한번에 맞은 문제인데 .count()를 사용하면 시간 초과가 발생한다고 한다. 
시간 초과를 발생시키지 않고 깔끔하게 해결하려면 Counter이라는 라이브러리를 사용하면 된다. (이코테에 collections에 관한 내용이 있는데 정리해야겠다.)

<br/>

## 🔵 Ref
> https://velog.io/@jaenny/%EB%B0%B1%EC%A4%80-2108-%ED%86%B5%EA%B3%84%ED%95%99-Python%ED%8C%8C%EC%9D%B4%EC%8D%AC