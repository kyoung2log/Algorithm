def solution(n):
    for i in range(6, 600, 6):
        print(i, i%n)
        if i%n == 0:
            return i//6
