def solution(n):
    answer = []
    while n != 0:
        answer.append(str(n%3))
        n = n//3
    answer = int(''.join(answer), 3)
    return answer