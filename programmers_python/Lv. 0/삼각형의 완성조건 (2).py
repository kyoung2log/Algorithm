def solution(sides):
    answer = sum(sides)-max(sides)
    answer += max(sides)-abs(sides[0]-sides[1])-1
    return answer