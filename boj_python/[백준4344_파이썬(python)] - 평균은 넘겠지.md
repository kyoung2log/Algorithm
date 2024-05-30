## 🔴 문제
> [평균은 넘겠지](https://www.acmicpc.net/problem/4344)

<br/>

## 🟡 Sol
```python
import sys
C = int(input())
arr = []
for i in range(C):
    arr.append(map(int,sys.stdin.readline().split()))
    nums = list(arr[i])
    sum_ = sum(nums)-nums[0]
    avg = sum_/nums[0]
    cnt = 0
    for k in range(1, nums[0]+1):
        if (avg < nums[k]):
            cnt += 1
    rate = (cnt/nums[0])*100
    print('{0:.3f}%'.format(rate))
```
<br/>

## 🟢 풀이
테스트 케이스를 입력받고 테스트케이스 만큼 반복문을 돌려 한 줄씩 배열에 추가한뒤 list로 변환
이 때 예약어 sum을 사용하기 때문에 변수명을 sum으로 해주면 오류가 발생한다.
결과는 포메팅을 이용해 출력한다.

<br/>

## 🔵 Ref
> https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=ohgnus56&logNo=221517688923
https://velog.io/@fregataa/Python-%EC%9E%90%EB%A6%BF%EC%88%98-%EB%A7%9E%EC%B6%94%EA%B8%B0