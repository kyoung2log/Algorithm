def solution(n, lost, reserve):
    lost, reserve = set(lost) - set(reserve), set(reserve) - set(lost)
    for i in list(lost):
        if i-1 in reserve:
            reserve.remove(i-1)
            lost.remove(i)
        elif i+1 in reserve:
            reserve.remove(i+1)
            lost.remove(i)
    return n - len(lost)