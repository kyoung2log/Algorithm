def solution(s):
    answer = ''
    for i in sorted(list(s), reverse=True):
        answer += i
    return answer
    