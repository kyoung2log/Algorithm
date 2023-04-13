from collections import deque

def solution(board, moves):
    q = deque([0])
    answer = 0
    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] != 0:
                prev = q.pop()
                if prev == board[j][i-1]:
                    answer += 2
                    board[j][i-1] = 0
                    break
                else:
                    q.append(prev)
                    q.append(board[j][i-1])
                    board[j][i-1] = 0
                    break
    return answer