def solution(dartResult):
    answer = []
    prev = ''
    for i in dartResult:
        if i.isdigit():
            prev += i
        if i in ['S', 'D', 'T']:
            answer.append(int(prev)**(['S', 'D', 'T'].index(i) + 1))
            prev = ''
        if i == '*':
            answer[-1] = answer[-1]*2
            if len(answer) > 1:
                answer[-2] =  answer[-2]*2
        if i == '#':
            answer[-1] = (-1)*answer[-1]
    return sum(answer)