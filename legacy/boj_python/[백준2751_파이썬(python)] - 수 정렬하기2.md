## 🔴 문제
> [수 정렬하기2](https://www.acmicpc.net/problem/2751)


<br/>

## 🟡 Sol
```python
import sys
N = int(input())
N_List = []
for _ in range(N):
    N_List.append(int(sys.stdin.readline()))

N_List.sort()

for i in N_List:
    print(i)
```
<br/>

## 🟢 풀이
input() 보다 sys.stdin.readline()이 더 빠르다. 그 이유는 input()은 입력값을 파라미터로 받아 개행문자를 제거하고 리턴하지만 sys.stdin.readline()는 들어온 문자열들을 strip()처리해 내뱉기 때문이라고 한다.(ref)

보통 시간초과를 해결하기 위해서 python3보다 pypy를 사용하는데 Python은 일반적인 인터프리터이지만 PyPy 는 실행 추적 JIT(Just In Time) 컴파일을 제공하는 인터프리터기 때문이라고 한다.(ref)

그리고, 풀이를 찾아보던중 list.sort()함수대신 sorted(list)를 사용하는것을 보고 차이점을 찾아보았다. list.sort()는 본체의 리스트를 정렬해서 변환하는 것이고, sorted(리스트)는 본체 리스트는 내버려두고, 정렬한 새로운 리스트를 반환하는 것이라고 한다. (ref)

<br/>

## 🔵 Ref
> https://lute3r.tistory.com/m/240
>
> https://velog.io/@dongkan9/2751%EB%B2%88-%EC%88%98-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-2-python
>
> https://blockdmask.tistory.com/466 