def solution(babbling):
    answer = 0
    for i in babbling:   
        i = i.replace('aya',' ').replace('aya',' ').replace('ye',' ').replace('woo',' ').replace('ma',' ')
        i = sorted(list(i))
        if i[-1] == ' ':
            answer += 1
    return answer