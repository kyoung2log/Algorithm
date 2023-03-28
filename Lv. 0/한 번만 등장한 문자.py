def solution(s):
    answer = ''
    a = [0]*26
    for i in s:
        a[ord(i)-97] += 1
    for i in range(26):
        if a[i] == 1:
            answer += chr(i+97)         
    return answer

    