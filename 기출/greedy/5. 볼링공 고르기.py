n, m = map(int, input().split())
weight = [0 for _ in range(m)]
data = list(map(int, input().split()))
result = 0

# 개수 체크
for i in data:
    weight[i-1]+=1

# 결과 계산
for i in range(len(weight)):
    for j in range(i+1,len(weight)):
        result += weight[i]*weight[j]

print(result)

# 해설
# 내 코드가 더 쉬운듯
n, m = map(int, input().split())
data = list(map(int, input().split()))
array = [0] * 11
result = 0

for i in data:
    weight[i]+=1
for i in range(1, m+1):
    n -= array[i]
    result += array[i]

print(result)