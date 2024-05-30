def sequential_search(n, target, array):
  for i in range(n):
    if array[i] == target:
      return i + 1

print(sequential_search(5, '나', ['가', '나', '다', '라', '마']))