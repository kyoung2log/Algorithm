def primeNum(n):
    for i in range(2, n):
        if n%i == 0:
            return False
    return True

def solution(n):
    answer = []
    i = 2
    while True:
        if n == 1:
            break
        if n%i == 0 and primeNum(i):
            answer.append(i)
            n /= i
            i = 2
        else:
            i += 1
    return sorted(list(set(answer)))

# 이 코드 되는 이유
# 작은수부터 나누기 때문에 무조건 소수로만 나눔 2, 3, 4(일경우 2에서 다 나뉘어짐) 
def solution(n):
    answer = []
    i = 2
    while i<=n:
        if n%i == 0:
            n /= i
            if i not in answer:
                answer.append(i)
        else:
            i += 1
    return answer