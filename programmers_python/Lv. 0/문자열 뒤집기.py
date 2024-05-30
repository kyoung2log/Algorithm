def solution(my_string):
    my_stringList = list(my_string)
    my_stringList.reverse()
    answer = ''
    for i in my_stringList:
        answer += i
    return answer