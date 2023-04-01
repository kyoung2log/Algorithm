from collections import deque

def solution(dots):
    dot = dots.pop()
    q = deque(sorted(dots))
    for _ in range(3):
        if (dot[1]-q[0][1])/(dot[0]-q[0][0]) == (q[1][1]-q[2][1])/(q[1][0]-q[2][0]):
            return 1
        q.rotate()
    return 0