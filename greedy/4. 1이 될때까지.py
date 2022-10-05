n, k = map(int, input().split())
cnt = 0

if(n%k == 0):
  print(round(n**(1/k)))
else:
  cnt = n%k
  print(cnt + round(n**(1/k)))

# while n > 1:
#   if(n%k == 0):
#     n = n//k
#     cnt += 1
#   else:
#     n = n-1
#     cnt += 1

print(cnt)