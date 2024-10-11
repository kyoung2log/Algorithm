N, M = map(int, input().split())

N_list = list(map(int, input().split(" ")))
N_list.sort(reverse=True)

arr = [19, 17, 15, 10]
H = N_list[0]

while True:
  sum_rice = 0
  for i in N_list:
    if (i-H)> 0:
      sum_rice += (i-H)
  if(sum_rice>=M):
    print(H)
    break
  print(sum_rice, H)
  H -= 1