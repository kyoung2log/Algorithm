## 시간 초과 -> 조합 라이브러리
# from itertools import combinations

# def solution(balls, share):
#     balls_list = [] 
#     for i in range(balls):
#         balls_list.append(i)
#     return len(list(combinations(balls_list,share)))

# math 라이브러리
from math import factorial

def solution(balls, share):
    answer = factorial(balls)/(factorial(balls-share)*factorial(share))
    return answer