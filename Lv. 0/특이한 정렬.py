def solution(numlist, n):
    a = sorted([(i-n,'+') for i in numlist if i >= n])
    b = sorted([(n-i, '-') for i in numlist if i < n])
    numlist = sorted(a+b)
    answer = []
    for i in numlist:
        if i[1] == '+':
            answer.append(i[0]+n)
        else:
            answer.append(n-i[0])
    return answer
    
