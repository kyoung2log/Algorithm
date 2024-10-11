def solution(i, j, k):
    answer = 0
    for num in range(i, j+1):
        answer += str(num).count(str(k))
    return answer

def solution(i, j, k):
    return sum([ str(num).count(str(k)) for num in range(i, j+1)])
