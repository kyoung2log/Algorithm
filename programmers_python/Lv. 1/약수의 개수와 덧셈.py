def countDiv(n):
    count = 0
    for i in range(1, n+1):
        if n%i == 0:
            count += 1
    return count

def solution(left, right):
    answer = 0
    for i in range(left, right+1):
        if countDiv(i)%2 == 0:
            answer += i
        else:
            answer -= i
    return answer