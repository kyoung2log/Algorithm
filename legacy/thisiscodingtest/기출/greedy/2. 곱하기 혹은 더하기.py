S = [int(i) for i in input()]
result = 1

for i, s in enumerate(S):
    if s == 0:
        continue
    else:
        S = S[i:]
        break

for i in S:
    result *= i
print(result)


# 해설
S = [int(i) for i in input()]
result = S[0]

for i in S[1:]:
    if i in [0, 1] or result in [0, 1]:
        result += i
    else:
        result *= i

print(result)