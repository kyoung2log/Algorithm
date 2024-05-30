N = int(input())
l = []

for i in range(N):
  l.append(int(input()))

l.sort(reverse=True)
print(*l)