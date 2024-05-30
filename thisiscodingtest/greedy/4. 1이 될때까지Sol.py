n, k = map(int, input().split())
cnt = 0

while(n != 1):
  if(n > k*(n//k)):
    cnt += 1
    n -= 1
  else:
    cnt += 1
    n = n // k

print(cnt)
