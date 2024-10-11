def solution(n, k):
    service = n//10 
    if service >= k:
        return 12000*n
    else:
        return 12000*n + (k-service)*2000
