def solution(strings, n):
    strings.sort()
    strings.sort(key = lambda x : x[n])
    return strings

def solution(strings, n):
    return sorted(sorted(strings), key = lambda x : x[n])