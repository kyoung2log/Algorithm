S = input()
reverse = S[0]
cnt = 0
for i in S[1:]:
    if i == reverse:
        continue
    else:
        cnt += 1
        reverse = i

if cnt % 2 == 0:
    print(cnt//2)
else:
    print(cnt//2+1)

# 해설
data = input()
if data[0] == '1':
    count0 = 1
else:
    count1 = 1
for i in range(len(data)-1):
    if data[i] != data[i+1]:
        if data[i+1] == '1':
            count0 += 1
        else:
            count1 += 1

print(min(count0, count1))
