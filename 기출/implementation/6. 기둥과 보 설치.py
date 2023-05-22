기둥조건
바닥 위에 있거나
보의 한쪽 끝 부분 위에 있거나
또는 다른 기둥 위에 있어야 합니다.

보조건
한쪽 끝 부분이 기둥 위에 있거나
또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.

x, y, 기둥인지 보인지, 삭제할지 설치할지

x y, 기둥/보



def solution(n, build_frame):
    answer = []
    
    for x, y, a, b in build_frame:
        if a == 0: #기둥
            if b == 0: #삭제
                print("기둥삭제")
            else: #설치
                if y == 0 or [x, y-1, 0] in answer or ([x, y, 1] in answer or [x-1, y, 1]):
                    answer.append([x, y, 0])
                    print("설치됨", answer)
        elif a == 1:  #보
            if b == 0: #삭제
                print("기둥 삭제")
            else: #설치
                if [x, y-1, 0] in answer or [x+1, y-1, 0] in answer or ([x-1, y, 1] in answer and [x+1, y, 1] in answer):
                    answer.append([x, y, 1])
                    print("설치됨", answer)
    return answer

