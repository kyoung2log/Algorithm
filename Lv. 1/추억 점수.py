def solution(name, yearning, photo):
    answer = [0]*len(photo)
    dictionary = dict(zip(name, yearning))
    for index, p in enumerate(photo):
        for i in p:
            if i in dictionary.keys():
                answer[index] += dictionary[i]
    return answer