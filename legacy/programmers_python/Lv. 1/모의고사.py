from collections import deque
def solution(answers):
    score = [0, 0, 0]
    a = deque([1, 2, 3, 4, 5])
    b = deque([2, 1, 2, 3, 2, 4, 2, 5])
    c = deque([3, 3, 1, 1, 2, 2, 4, 4, 5, 5])
    for i in answers:
        if a[0] == i: score[0] += 1
        if b[0] == i: score[1] += 1
        if c[0] == i: score[2] += 1
        a.rotate(-1); b.rotate(-1); c.rotate(-1);
    return [i+1 for i in range(len(score)) if score[i] == max(score)]
