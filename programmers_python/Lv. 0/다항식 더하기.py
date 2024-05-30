def solution(polynomial):
    polynomial= polynomial.split(' ')
    coe, con = 0, 0
    print(polynomial)
    for i in polynomial:
        if i == 'x':
            coe += 1
        elif 'x' in i:
            i = i.replace('x','')
            coe += int(i)
        elif i == '+':
            continue
        else:
            con += int(i)
    if con == 0:
        if coe == 1:
            return "x"
        return "{0}x".format(coe) 
    elif coe == 0:
        return "{0}".format(con)
    elif coe == 1:
        return "x + {0}".format(con)
    else:
        return "{0}x + {1}".format(coe, con)
    