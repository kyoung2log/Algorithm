N, M, K = map(int, input().split())
N_list = list(map(int, input().split()))
N_list.sort()
a = N_list[-1]
b = N_list[-2]

cnt = 0
maxNum = 0

while 1:
  if(cnt>=M):
    break
  for i in range(K):
    maxNum+=a
    if(cnt>=M):
      break
    cnt+=1
  maxNum+=b
  cnt+=1


print(maxNum)
