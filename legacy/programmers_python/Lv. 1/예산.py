def solution(d, budget):
    d.sort(reverse = True)
    apply = sum(d)
    if budget >= apply:
        answer = len(d)
        return answer
    answer = len(d)
    for i in d:
        if budget >= apply-i:
            answer -= 1
            return answer
        else:
            apply -= i
            answer -= 1
    return answer

    
def solution(d, budget):
    d.sort()
    while budget < sum(d):
        d.pop()
    return len(d)
