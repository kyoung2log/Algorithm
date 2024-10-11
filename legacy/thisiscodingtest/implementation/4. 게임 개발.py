n, m = map(int, input().split())
a, b, d = map(int, input().split())
a += 1
b += 1
gameMap = []
dtype = [0, 1, 2, 3]
movetype = [(0,-1), (1,0), (0,1), (-1,0)]

for i in range(m):
  gameMap.append(list(map(int, input().split())))

cnt = 0
issea = 0

print(movetype[dtype[d-1]][0])

while issea != 4:
  # print(a, movetype[dtype[d-1]][0])
  # print(b, movetype[dtype[d-1]][1])
  na = a + movetype[dtype[d-1]][0]
  nb = b + movetype[dtype[d-1]][1]
  d = d-1
  if(d == -4):
    d = 0
  if(1<na<n and 1<nb<m):
    if(gameMap[na][nb] == 0):
      a = na
      b = nb
      cnt += 1
      issea = 0
    else:
      gameMap[na][nb] = 1
      issea += 1
      continue


print(a,b)
print(cnt)