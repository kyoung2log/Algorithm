N, M = map(int, input().split())

N_list = list(map(int, input().split(" ")))


start = 0
end = max(N_list)

result = 0

while(start <= end):
  total = 0
  mid = (start + end) // 2
  for i in N_list:
    if i>mid:
      total += i-mid
  if total < M:
    end = mid - 1
  else:
    result = mid
    start = mid + 1
print(result)