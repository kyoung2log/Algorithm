def solution(num):
    answer = 0
    while True:
        if num == 1:
            break
        elif num%2 == 0:
            num //= 2
        else:
            num = num*3 + 1
        answer += 1
    return answer if answer < 500 else -1