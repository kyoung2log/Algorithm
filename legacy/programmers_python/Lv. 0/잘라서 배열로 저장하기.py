def solution(my_str, n):
    answer = []
    n_str = ''
    my_str = list(my_str)
    my_str.reverse()
    while my_str:
        for i in range(n):
            if my_str != []:
                n_str += my_str.pop()    
        answer.append(n_str)
        n_str = ''
    return answer