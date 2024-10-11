n = int(input())
member = sorted(list(map(int, input().split())))
cnt = 0
while len(member) > 0:
    n = member.pop()
    member = member[0:len(member)+1-n]
    cnt += 1
print(cnt)


# 해설
n = int(input())
data = list(map(int, input().split()))
result = 0
cnt = 0
for i in data:
    cnt += 1
    if cnt >= i:
      result += 1
      cnt = 0
print(result)