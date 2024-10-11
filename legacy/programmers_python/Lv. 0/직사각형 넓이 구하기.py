def solution(dots):
    result = 1
    dots.sort()
    result *= abs(dots[1][1]-dots[0][1])
    dots.sort(key = lambda x:x[1])
    return result*abs(dots[0][0]-dots[1][0])
