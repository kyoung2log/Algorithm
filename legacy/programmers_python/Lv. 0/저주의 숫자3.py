def solution(n):
    check_num = 1
    answer = 1
    while check_num <= n:
        if '3' in str(answer):
            answer += 1
            continue    
        elif answer%3 == 0:
            answer += 1
            continue
        answer += 1
        check_num += 1
    return answer -1



def solution(n):
    answer = 0
    for _ in range(n):
        answer += 1
        while answer % 3 == 0 or '3' in str(answer):
            answer += 1
    return answer