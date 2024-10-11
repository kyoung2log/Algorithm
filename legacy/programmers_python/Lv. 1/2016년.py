def solution(a, b):
    month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 0]
    day = (sum(month[0:int(a)]) + int(b))%7
    answer = ['THU','FRI','SAT','SUN','MON','TUE','WED']
    return answer[day]