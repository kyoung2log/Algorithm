const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
const dp = Array.from({ length: n }, () => Array.from({ length: k + 1 }).fill(0));
const sum = Array(n).fill(0);
const mod = 1000000007;

// dp[n][k] = 배열의 N번째 자리를 K로 채웠을 때의 좋아하는 배열의 개수의 최대값
for (let i = 1; i <= k; i++) {
  dp[0][i] = 1;
}
sum[0] = k;

for (let i = 1; i < n; i++) {
  for (let j = 1; j <= k; j++) {
    dp[i][j] += sum[i - 1];
    // l <= j || l % j !== 0
    // l > j and l%j === 0
    for (let l = j + j; l <= k; l += j) {
      dp[i][j] -= dp[i - 1][l];
      dp[i][j] += mod;
      dp[i][j] %= mod;
    }
    sum[i] += dp[i][j];
    sum[i] %= mod;
  }
}

console.log(sum[n - 1] % mod);
