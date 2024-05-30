def solution(my_string):
    answer = []
    for i in my_string:
        if ord(i) < 95 or ord(i) > 122:
            answer.append(int(i))
    return sorted(answer)