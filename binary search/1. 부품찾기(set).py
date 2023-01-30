N = int(input())
array = set(map(int, input().split()))
M = int(input())
M_list = list(map(int, input().split()))

for i in M_list:
  if i in array:
    print('yse', end=" ")
  else:
    print('no', end=" ")