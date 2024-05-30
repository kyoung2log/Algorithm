def solution(numbers, k):
    target = 0
    for i in range(1,k):
        target += 2
        if len(numbers) -1 < target+2: 
            target -= len(numbers)
    return numbers[target]
