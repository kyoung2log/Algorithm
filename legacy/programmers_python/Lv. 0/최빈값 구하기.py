def solution(array):
    cnt_list = [0]*1001
    for i in array:
        cnt_list[i] += 1
    if cnt_list.count(max(cnt_list))>1:
        return -1
    else:
        return cnt_list.index(max(cnt_list))