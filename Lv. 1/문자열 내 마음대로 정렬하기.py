
def solution(strings, n):
    answer = sorted(strings, key = lambda x : x[n-1])
    return sorted(answer, key = lambda x : x[n])