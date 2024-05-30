def solution(arr):
    arr.remove(sorted(arr)[0])
    return arr if arr!= [] else [-1]