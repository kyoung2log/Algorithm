def solution(s):
    answer = ''
    check = 0
    for i in s:
        if i == ' ':
            answer += ' '
            check = 0
        else:
            if check%2 == 0:
                answer += i.upper()
                check += 1
            else:
                answer += i.lower()
                check += 1
    return answer
