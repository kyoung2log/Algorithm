def solution(my_string, letter):
    a = list(my_string.split(letter))
    answer = ''
    for i in a:
        answer += i
    return answer