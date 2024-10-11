def solution(numbers, direction):
    newNumbers = [0]
    if direction == 'right':
        newNumbers[0] = numbers[-1]
        numbers = numbers[:-1]
        return newNumbers + numbers
    
    else:
        n = numbers[0]
        numbers.append(n)
        return numbers[1:]
