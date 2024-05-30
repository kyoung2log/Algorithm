def solution(quiz):
    answer = []
    for i in quiz:
        i = i.split()
        if i[1] == '+' and int(i[0])+int(i[2]) == int(i[4]):
            answer.append("O")
        elif i[1] == '-' and int(i[0])-int(i[2]) == int(i[4]):
            answer.append("O")
        else:
            answer.append("X")
            
    return answer
