s = input()
eng = []
num = []
for i in s:
    if i.isdigit():
        num.append(int(i))
    else:
        eng.append(i)
eng.sort()

print(''.join(eng) + str(sum(num)))