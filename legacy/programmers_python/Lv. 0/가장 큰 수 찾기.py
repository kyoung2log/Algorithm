def solution(array):
    answer = []
    for i, j in enumerate(array):
        answer.append((j, i))
    return sorted(answer)[-1]