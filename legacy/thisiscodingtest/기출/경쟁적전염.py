n, k = map(int, input().split())
data = []

for i in range(n):
    data.append(list(map(int, input().split())))
s, x, y = map(int, input().split())


def check(i, data):
    cordi = []
    for x in range(n):
        for y in range(n):
            if data[x][y] == i:
                if x+1 < n:
                  if data[x+1][y] == 0:
                    data[x+1][y] = i
                if x-1 >= 0:
                  if data[x-1][y] == 0:
                    data[x-1][y] = i
                if y+1 < n:
                  if data[x][y+1] == 0:
                    data[x][y+1] = i
                if y-1 >= 0:
                  if data[x][y-1] == 0:
                    data[x][y-1] = i
    return data


# def check(i, data):
#     cordi = []
#     for x in range(n):
#         for y in range(n):
#             if data[x][y] == i:
#                 cordi.append((x, y))
#     for x, y in cordi:
#         if x+1 < n:
#           if data[x+1][y] == 0:
#             data[x+1][y] = i
#         if x-1 >= 0:
#           if data[x-1][y] == 0:
#             data[x-1][y] = i
#         if y+1 < n:
#           if data[x][y+1] == 0:
#             data[x][y+1] = i
#         if y-1 >= 0:
#           if data[x][y-1] == 0:
#             data[x][y-1] = i
#     return data

for _ in range(s):
  for i in range(1, k+1):
      data = check(i, data)

result = data[x-1][y-1]

if result != 0:
   print(result)
else:
   print("0")
