n = int(input())
cnt = 0coin = [500, 100, 50, 10]

for i in coin:
  cnt += n//i
  n = n%i

print(cnt)