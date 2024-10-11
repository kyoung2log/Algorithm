from itertools import combinations

def solution(number):
    number = combinations(number, 3)
    answer = 0
    for i in number:
        if sum(i) == 0:
            answer += 1
    return answer