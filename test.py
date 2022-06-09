N, M = map(int, input().split())
board = []
newboard = []
newboard_str = ''
result = 64
for i in range(N):
  board.append(input())

for i in range(M-7):
  for j in range(N-7):
    for k in range(j, j+8):
      newboard_str = newboard_str + board[j][i:i+8]
    newboard.append(newboard_str)
    newboard_str = ''

for i in newboard:

3  min = 0
  for j in range(0, 64, 2):
    if i[j] != 'B':
      min += 1
    if i[j+1] != 'W':
      min += 1
  if(min > result):
    result = min
  print(min)
  min = 0
  for j in range(0, 64, 2):
    if i[j] != 'W':
      min += 1
    if i[j+1] != 'B':
      min += 1
  if(min > result):
    result = min

print(result)