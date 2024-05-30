def solution(k, score):
    answer = []
    glory = []
    for i in score:
        glory.append(i)
        glory.sort(reverse=True)
        answer.append(glory[:k][-1])
    return answer