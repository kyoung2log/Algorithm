from collections import deque

def solution(A, B):
    A = deque(list(A)); B = deque(list(B));
    count = 0
    for i in range(len(A)):
        if A == B:
            return count
        A.rotate(1)
        count += 1
    return -1
