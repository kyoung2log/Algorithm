def solution(babbling):
    b = []
    for i in babbling:
        i = i.replace('aya', '0')
        i = i.replace('ye', '1')
        i = i.replace('woo', '2')
        i = i.replace('ma', '3')
        if i.isdigit():
            b.append(i)
    answer = len(b)
    for i in b:
        for j in range(len(i)-1):
            if i[j] == i[j+1]:
                answer -= 1
                break
    return answer