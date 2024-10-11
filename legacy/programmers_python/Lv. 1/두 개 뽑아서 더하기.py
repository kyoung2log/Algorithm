from itertools import combinations

def solution(numbers):
    answer = []
    for i, j in list(combinations(numbers, 2)):
        answer.append(i+j)
    return sorted(list(set(answer)))