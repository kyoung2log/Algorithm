def solution(lines):
    lines = sorted(lines)
    a = set([i for i in range(lines[0][0]+1, lines[0][1]+1)])
    b = set([i for i in range(lines[1][0]+1, lines[1][1]+1)])
    c = set([i for i in range(lines[2][0]+1, lines[2][1]+1)])
    if a&b == set():
        return len(b&c)
    elif a&c == set() and lines[1][1] > lines[2][0]:
        return len((a&b)|(b&c))
    elif a&c == set():
        return len(a&b)
    elif lines[0][1] > lines[2][0] and lines[1][1] > lines[0][1]:
        return len((a&b)|(b&c))
    else:
        return len((a&b)|(a&c))

def solution(lines):
    sets = [set(range(min(l), max(l))) for l in lines]
    return len(sets[0] & sets[1] | sets[0] & sets[2] | sets[1] & sets[2])