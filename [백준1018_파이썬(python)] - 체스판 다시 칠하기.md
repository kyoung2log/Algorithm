## 🔴 문제
> [체스판 다시 칠하기](https://www.acmicpc.net/problem/1018)


<br/>

## 🟡 Sol
```python
N, M = map(int, input().split())
board = []
newboard = []
newboard_str = ''
check_chess1 = list("WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW")
check_chess2 = list("BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB")

## 1
for i in range(N):
  board.append(input())
## 2
for i in range(M-7):
  for j in range(N-7):
    for k in range(j, j+8):
      newboard_str = newboard_str + board[k][i:i+8]
    newboard.append(newboard_str)
    newboard_str = ''
## 3
result = []
for i in newboard:
  min = 0
  i = list(i)
  for j in range(64):
    if(check_chess1[j] != i[j]):
      min += 1
  result.append(min)
  min = 0
  for j in range(64):
    if(check_chess2[j] != i[j]):
      min += 1
  result.append(min)
## 4
result.sort()
print(result[0])
```
<br/>

## 🟢 풀이
1. 첫번째 for문에서 한줄씩 input 받기
2. input받은 값에서 8x8 크기의 상자를 뽑아내기
  그래서 범위는 각각 0부터 M-7, 0부터 N-7 도합 (M-7)*(N-7)개의 문자열을 newboard에 append한다.
  newboard에는 크기가 64(8x8이기 때문에)인 문자열이 총 (M-7)*(N-7)개 들어있다.
3. newboard의 요소를 하나씩 접근해 리스트로 변환한뒤, 미리 만들어둔 check_chess1과 check_chess2와 비교한다.
블랙으로 시작하는경우, 화이트로 시작하는 경우 두가지이므로 두번 비교해 min값을 result 리스트에 저장
4. 리스트 정렬한뒤 최소값 출력

이렇게 쓰레기 코드를 짜도되는걸까 싶다..
그래도 덩치는 끝까지 못풀었지만 이건 끝까지 풀었다.
체감상 덩치가 더어려웠는데 문제 접근을 잘못해서 그런듯 ..
<br/>

## 🔵 Ref
> 