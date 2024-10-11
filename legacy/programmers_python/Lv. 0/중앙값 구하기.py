def solution(array):
    array.sort()
    answer = array[int(len(array)/2)]
    print(answer)
    return answer