def solution(keyinput, board):
    direction = {'up' : [0,1], 'down' : [0,-1], 'right' : [1, 0], 'left' : [-1,0]}
    answer = [0,0]
    for i in keyinput:
        answer[0] += direction[i][0]
        answer[1] += direction[i][1]
        if abs(answer[0]) > board[0]//2 or abs(answer[1]) > board[1]//2:
            answer[0] -= direction[i][0]
            answer[1] -= direction[i][1]
    return answer