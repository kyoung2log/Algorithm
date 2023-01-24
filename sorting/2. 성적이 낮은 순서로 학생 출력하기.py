N = int(input())
l = []

for i in range(N):
  data = input().split()
  l.append(data[0], int(data[1]))

l = sorted(l, key = lambda x : x[1])

for i in l:
  print(i[0], end=' ')