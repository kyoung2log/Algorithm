const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = Number(fs.readFileSync(path).toString().trim());

const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 10 }, () => Array(1 << 10).fill(0)));
const mod = 1000000000;

for (let i = 1; i < 10; i++) {
  dp[1][i][1 << i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 1 << 10; k++) {
      if (j > 0) {
        dp[i][j][k | (1 << j)] += dp[i - 1][j - 1][k];
        dp[i][j][k | (1 << j)] %= mod;
      }
      if (j < 9) {
        dp[i][j][k | (1 << j)] += dp[i - 1][j + 1][k];
        dp[i][j][k | (1 << j)] %= mod;
      }
    }
  }
}

let ans = 0;
for (let i = 0; i < 10; i++) {
  ans += dp[n][i][(1 << 10) - 1];
  ans %= mod;
}

console.log(ans);
