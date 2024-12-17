const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = Number(fs.readFileSync(path).toString().trim());
const dp = Array.from({ length: n + 1 }, () => [0, 0, 0]);
const mod = 9901;

dp[1] = [1, 1, 1];

for (let i = 2; i <= n; i++) {
  dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % mod;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % mod;
}

console.log(dp[n].reduce((pre, cur) => pre + cur, 0) % mod);
