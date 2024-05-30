H = int(input())
cnt = 0



## 시간제한이 2초이므로 4000만번
## ㅡㅡ 나 이거 못품 왤케 어렵게생각햇지
for h in range(H+1):
  for m in range(60):
    for s in range(60):
      if('3' in str(h)+str(m)+str(s)):
        cnt += 1

print(cnt)