import sys
n, m = map(int, sys.stdin.readline().split())

selectList = list(map(int, sys.stdin.readline().split()))

for i in range(n-1):
  comparison = list(map(int, sys.stdin.readline().split()))
  if(min(selectList)<min(comparison)):
    continue
  else:
    selectList = comparison


print(min(comparison))


