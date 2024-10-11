def solution(id_list, report, k):
    id_dict = {}
    
    for i in id_list:
        id_dict[i] = 0
    reported_list = []
    
    answer = id_dict.copy()
    
    for i in list(set(report)):
        user, reported = i.split()
        reported_list.append(reported)
    
    for i in id_list:
        if reported_list.count(i) >= k:
            id_dict[i] += 1 
    
    for i in list(set(report)):
        user, reported = i.split()
        if id_dict[reported] != 0:
            answer[user] += 1
    
    return list(answer.values())
