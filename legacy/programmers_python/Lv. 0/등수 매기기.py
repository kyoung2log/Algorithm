def solution(score):
    answer = []
    score = [sum(i) for i in score]
    sorted_score = sorted(score, reverse=True)
    for i in score:
        answer.append(sorted_score.index(i)+1)
    return answer
