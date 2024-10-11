def solution(array, height):
    cnt = 0
    array.sort(reverse = True)
    for i in array:
        if i > height:
            cnt += 1
        else:
            break
    answer = cnt
    return answer