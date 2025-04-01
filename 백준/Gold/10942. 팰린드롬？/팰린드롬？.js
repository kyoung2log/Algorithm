const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const queries = input.slice(3).map((line) => line.split(' ').map(Number));

// DP 배열 초기화
const dp = Array.from({ length: N }, () => Array(N).fill(0));

// 팰린드롬 여부 계산
for (let i = 0; i < N; i++) {
  dp[i][i] = 1; // 자기 자신은 팰린드롬
}

for (let i = 0; i < N - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    dp[i][i + 1] = 1; // 인접한 두 수가 같은 경우
  }
}

for (let length = 3; length <= N; length++) {
  for (let i = 0; i <= N - length; i++) {
    const j = i + length - 1;
    if (arr[i] === arr[j] && dp[i + 1][j - 1] === 1) {
      dp[i][j] = 1;
    }
  }
}

// 쿼리 처리 및 출력
const results = [];
for (const [S, E] of queries) {
  results.push(dp[S - 1][E - 1]);
}

console.log(results.join('\n'));