number = input()
b_str = ''.join([bin(int(s))[2:].rjust(3, '0') for s in number])

for i, s in enumerate(b_str):
	if s == '1':
		print(b_str[i:])
		break
	
if(number == '0'): print(0)