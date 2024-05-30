nite = list(input())
x = ord(nite[0])-96
y = int(nite[1])
result = 0

types = [(-2,-1), (-2,1), (-1,-2), (-1,2), (1,-2), (1,2), (2,-1), (2,1)]


for type in types:
  nx = x + type[0]; ny = y + type[1]
  if(nx<1 or ny<1 or nx>8 or ny>8):
    continue
  result += 1
print(result)