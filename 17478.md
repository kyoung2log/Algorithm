## 🔴 문제
> [재귀함수가 뭔가요?](https://www.acmicpc.net/problem/17478)


<br/>

## 🟡 Sol
```python
text = [
    '"재귀함수가 뭔가요?"',
    '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
    '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
    '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
    '"재귀함수가 뭔가요?"',
    '"재귀함수는 자기 자신을 호출하는 함수라네"',
    '라고 답변하였지.'
]
N = int(input()) 
cnt = 0

def recursionFunc(N):
    global cnt
    print('____'*cnt+text[0])
    print('____'*cnt+text[1]) 
    print('____'*cnt+text[2])
    print('____'*cnt+text[3])
    if(N > 1):
        cnt = cnt + 1
        N = N - 1             
        recursionFunc(N)     
    elif(N == 1):
        print('____'*(cnt+1)+text[4])
        print('____'*(cnt+1)+text[5])
        print('____'*(cnt+1)+text[6])
    cnt = cnt - 1
    print('____'*(cnt+1)+text[6])

print('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.')
recursionFunc(N)
```
<br/>

## 🟢 풀이
일단 출력부분 텍스트가 마이너스가 아니라 언더바라서 틑렸다 ㅡㅡ 안그러면 원트였을텐데..
먼저 텍스트를 list로 바꾸어 주었다.
패턴을 살펴보니 4줄이 반복되는것 같아, 4줄 출력후 조건 + 재귀함수를 넣어주었다. 


<br/>

## 🔵 Ref
> 