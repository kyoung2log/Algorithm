def solution(n):
    answer = 1
    while answer != n:
        if n%answer == 1:
            return answer
        answer += 1