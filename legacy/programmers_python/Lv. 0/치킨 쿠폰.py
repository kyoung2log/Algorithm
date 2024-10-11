def solution(chicken):
    if chicken <= 9:
        return 0
    return chicken//10 + solution(chicken%10 + chicken//10)