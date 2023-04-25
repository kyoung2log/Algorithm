n = int(input())
data = sorted(list(map(int, input().split())))
m = 1
# while True:
#   # 1 1 2 3 9
#   # 3 만들수 있는지 확인
#   result = 0
#   for i in a:
#     if result + i == m:
#       break
#     elif result + i < m:
#       result += i
#   m += 1


# 해설 참나...개어렵네...
# https://wooono.tistory.com/542
n = int(input())
data = sorted(list(map(int, input().split())))
target = 1
for i in data:
    if target < i:
        break
    target += i