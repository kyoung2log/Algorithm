def solution(S):
    answer = []
    for i, s in enumerate(S):
        if S[i] in S[0:i]:
            answer.append(S[0:i][::-1].index(S[i])+1)
        else:
            answer.append(-1)
    return answer