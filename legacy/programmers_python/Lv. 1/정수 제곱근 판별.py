from math import sqrt
def solution(n):
    return (sqrt(n)+1)**2 if int(sqrt(n)) == sqrt(n) else -1