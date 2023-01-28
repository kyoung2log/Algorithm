n = int(input())
array = [0]*1000001


for i in input().split():
  array[int(i)] = 1

m = int(input())
m_list = list(map(int, input().split()))

for i in m_list:
  if array[i] == 1:
    print('yes', end=" ")
  else:
    print('no', end=' ')