def solution(s):
    min = 1000
    if len(s) == 1:
        return 1
    for i in range(1, len(s)//2+1):
        pre = s[0:i]
        cnt = 1
        result = ''
        for j in range(i, len(s)+1, i):
            target = s[j:j+i]
            if pre == target:
                cnt += 1
            else:
                if cnt == 1:
                    result += pre
                else:
                    result = result + str(cnt) + pre
                    cnt = 1
                if len(target) != len(pre):
                    result = result + target
            pre = target
        if min > len(result):
            min = len(result)
    return min

# 해설
def solution(s):
    answer = len(s)
    for step in range(1, len(s)//2+1):
        compressed = ''
        prev = s[0:step]
        count = 1
        for j in range(step, len(s), step):
            if prev == s[j : j+step]:
                count += 1
            else:
                compressed += str(count) + prev if count >= 2 else prev
                prev = s[j:j+step]
                count = 1
        compressed += str(count) + prev if count >=2 else prev
        answer = min(answer, len(compressed))
    return answer