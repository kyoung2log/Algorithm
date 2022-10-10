n = int(input())
plans = input().split()
x,y = 1,1

dx = [0,0,-1,1]
dy = [-1,1,0,0]
types = ['L', 'R', 'U', 'D']

for plan in plans:
  i = types.index(plan)
  nx = x + dx[i]; ny = y + dy[i]
  if(nx<1 or ny<1 or nx>n or ny>n):
    continue
  x = nx; y = ny

print(x,y)
  # for i in range(len(types)):
  #   if plan == types[i]:
  #     x = dx[i]; y = dy[i]
  