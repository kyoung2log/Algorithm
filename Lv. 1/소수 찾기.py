def solution(n):
    isPrime = [True]*(n+1)
    for i in range(2, n+1):
        if isPrime[i] == False:
            continue
        else:
            for j in range(i+i, n+1, i):
                isPrime[j] = False
    return isPrime.count(True)-2
