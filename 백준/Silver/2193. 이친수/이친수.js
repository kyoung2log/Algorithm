const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));
const dp = Array(n + 1).fill([0, 0]);

dp[1] = [0n, 1n];
dp[2] = [1n, 0n];

for (let i = 3; i <= n; i++) {
  const cnt0 = dp[i - 1][0] + dp[i - 1][1];
  const cnt1 = dp[i - 1][0];
  dp[i] = [cnt0, cnt1];
}

console.log((dp[n][0] + dp[n][1]).toString());
