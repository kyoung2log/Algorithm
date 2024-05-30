def solution(sizes):
    sizes1 = [[max(i, j), min(i, j)] for i, j in sizes]
    sizes2 = [[min(i, j), max(i, j)] for i, j in sizes]
    sizes1.sort()
    sizes2.sort()
    return sizes1[-1][0] * sizes2[-1][0]

    
    
def solution(sizes):
    return max(max(x) for x in sizes) * max(min(x) for x in sizes)