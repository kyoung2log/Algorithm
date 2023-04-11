def solution(array, commands):
    answer = []
    for i in commands:
        i, j, k = i[0], i[1], i[2]
        a = array[i-1:j]
        a.sort()
        answer.append(a[k-1])
    return answer