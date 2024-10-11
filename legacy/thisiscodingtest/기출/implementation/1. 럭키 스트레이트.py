n = input()

n1 = n[:len(n)//2]
n2 = n[len(n)//2:]

if sum([int(i) for i in n1]) == sum([int(i) for i in n2]):
    print("LUCKY")
else:
    print("READY")