def solution(emergency):
    check_emergency = emergency.copy()
    check_emergency.sort(reverse=True)
    answer = []
    for i in emergency:
        answer.append(check_emergency.index(i)+1)
    return answer