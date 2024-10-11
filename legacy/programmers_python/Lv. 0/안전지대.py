def solution(board):
    n = len(board[0])
    for i in range(n):
        for j in range(n):
            if board[i][j] == 1:
                if i-1 != -1 :
                    if board[i-1][j] != 1:
                        board[i-1][j] = 2
                    if j-1 != -1:
                        if board[i-1][j-1] != 1:
                            board[i-1][j-1] = 2
                    if j+1 != n:
                        if board[i-1][j+1] != 1:
                            board[i-1][j+1] = 2
                if i+1 != n:
                    if board[i+1][j] != 1:
                        board[i+1][j] = 2
                    if j-1 != -1:
                        if board[i+1][j-1] != 1:
                            board[i+1][j-1] = 2
                    if j+1 != n:
                        if board[i+1][j+1] != 1:
                            board[i+1][j+1] = 2
                if j-1 != -1:
                    if board[i][j-1] != 1:
                        board[i][j-1] = 2
                if j+1 != n:
                    if board[i][j+1] != 1:
                        board[i][j+1] = 2
    board = sum(board, [])
    return board.count(0)


def solution(board):
    n = len(board)
    danger = set()
    for i, row in enumerate(board):
        for j, x in enumerate(row):
            if not x:
                continue
            danger.update((i+di, j+dj) for di in [-1,0,1] for dj in [-1, 0, 1])
    return n*n - sum(0 <= i < n and 0 <= j < n for i, j in danger)