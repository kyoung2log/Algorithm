def solution(my_string):
    answer = 0
    check = '0'
    for i in my_string:
        if not i.isdigit():
            answer += int(check)
            check = '0'
        else:
            check += i
    if check != '0':
        answer += int(check)
    return answer


def solution(my_string):
    s = ''.join(i if i.isdigit() else ' ' for i in my_string)
    return sum(int(i) for i in s.split())