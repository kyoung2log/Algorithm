from email.quoprimime import body_check


N = int(input())
body = []
rank = [0 for _ in range(N)]
print(rank)

for i in range(N):
  body.append(list(map(int, input().split())))
  max(body)


print(max(body), body)