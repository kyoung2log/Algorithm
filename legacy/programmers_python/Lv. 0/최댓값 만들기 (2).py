def solution(numbers):
    if 0 in numbers:
        numbers.remove(0)
    numbers.sort()
    return max(numbers[-1]*numbers[-2], numbers[0]*numbers[1])