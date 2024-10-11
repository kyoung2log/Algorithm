import sys
N = int(sys.stdin.readline().rstrip())
N_list = list(map(int, sys.stdin.readline().split()))
M = int(input())
M_list = list(map(int, sys.stdin.readline().split()))

N_list.sort() # 2 3 7 8 9
M_list.sort() # 5 7 9


def BS(arr,tg,start,end):
  mid = (end+start) // 2
  # print(tg, arr[mid], arr[start], arr[end])
  if start > end:
    return None
  elif arr[mid] == tg:
    return True
  elif arr[mid] > tg:
    return BS(N_list, tg, start, mid-1)
  elif arr[mid] < tg:
    return BS(N_list, tg, mid+1, end)


for i in M_list:
  if BS(N_list, i, 0, len(N_list)-1) == True:
    print("yes", end=" ")
  else:
    print("no", end=" ")

