// 이분탐색
// mid : 모든 사람이 심사를 받는데 걸리는 시간
// 7분  : (0) (7) (14) (21) (28)
// 10분 : (0) (10) (20) (30)
// 50분 : (0) (50)

function solution(n, times) {
    let left = Math.min(...times);
    let right = left*n;
    let ans = 0;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        console.log(left, right, mid)
        let cnt = 0; // 사람의 수
        
        for(const time of times){
            cnt += Math.floor(mid/time);
        }
        console.log(cnt)
        if(cnt >= n){
            ans = mid;
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    
    console.log("정답", ans)
    return ans;
}