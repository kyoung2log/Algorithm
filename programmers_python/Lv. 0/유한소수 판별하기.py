def check_fraction(a,b):
    for i in range(2, b+1):
        if a%i == 0 and b%i == 0 :
            return check_fraction(a//i, b//i)
    return b

def solution(a, b):
    answer = check_fraction(a, b)
    while True:
        if answer == 1:
            return 1
        if answer%2 == 0:
            answer = answer//2
        elif answer%5 == 0:
            answer = answer // 5
        else :
            return 2
