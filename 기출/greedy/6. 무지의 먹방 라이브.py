def solution(food_times, k):
    l = len(food_times)
    finish = [0 for _ in range(l)]
    cnt = 0
    i = 0
    while True:
        if cnt == k:
            return i%l +1
        if food_times == finish:
            return -1
        if food_times[i%l] != 0:
            food_times[i%l] -= 1
            cnt += 1
        i += 1

# 해설
# 안풀림 ㅜㅜ
import heapq

def solution(food_times, k):
    if sum(food_times) <= k:
        return -1
    q = []
    for i in range(len(food_times)):
        heapq.heappush(q, (food_times[i], i+1))
    
    sum_value = 0
    previous = 0
    length = len(food_times)
    while sum_value + ((q[0][0])-previous)*length <= k:
        now = heapq.heappop(q)[0]
        sum_value += (now-previous)*length
        length -= 1
        previous = now
    result = sorted(q, key=lambda x:x[1])
    return result[(k-sum_value)%length][1]
        