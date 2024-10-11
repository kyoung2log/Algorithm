def solution(array, n):
    array.append(n)
    array.sort()
    index = array.index(n)

    if array[0] == n:
        return array[1]
    elif array[-1] == n:
        return array[-2]
    else:
        if n-array[index-1] <= array[index+1]-n:
            return array[index-1]
        else:
            return array[index+1]
        # return min(n-array[index-1], array[index+1]-n)