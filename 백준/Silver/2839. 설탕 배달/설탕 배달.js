const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +fs.readFileSync(path).toString().trim();
const dp = Array(Math.max(6, n + 1)).fill(Infinity);

dp[3] = 1;
dp[5] = 1;

for (let i = 6; i <= n; i++) {
  dp[i] = Math.min(dp[i - 3] + 1, dp[i - 5] + 1);
}

if (dp[n] === Infinity) console.log(-1);
else console.log(dp[n]);
