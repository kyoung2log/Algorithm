def solution(s):
    answer = 0
    memory = 0
    for i in s.split(' '):
        if i == 'Z':
            answer -= memory
        else:
            answer += int(i)
            memory = int(i)
    return answer