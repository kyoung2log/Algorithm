def solution(num, total):
    if num%2 == 0:
        return [i for i in range(total//num-num//2+1, total//num+num//2+1)]
    else:
        return [i for i in range(total//num-num//2, total//num+num//2+1)]
