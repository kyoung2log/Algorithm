const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = Number(fs.readFileSync(path));

const dp = Array(n + 1).fill(0);

dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= n; i++) {
  if (i % 6 === 0) dp[i] = Math.min(dp[i / 3], dp[i / 2], dp[i - 1]) + 1;
  else if (i % 3 === 0) dp[i] = Math.min(dp[i / 3], dp[i - 1]) + 1;
  else if (i % 2 === 0) dp[i] = Math.min(dp[i / 2], dp[i - 1]) + 1;
  else dp[i] = dp[i - 1] + 1;
}

console.log(dp[n]);
