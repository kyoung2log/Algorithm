const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs[0];
const numbers = inputs[1].split(' ').map(Number);

const dp = Array.from({ length: n }, () => Array(21).fill(0n));

dp[0][numbers[0]] = 1n;

for (let i = 1; i < n - 1; i++) {
  const num = numbers[i];

  for (let j = 0; j <= 20; j++) {
    if (dp[i - 1][j] === 0n) continue;
    if (j + num <= 20) dp[i][j + num] += dp[i - 1][j];
    if (j - num >= 0) dp[i][j - num] += dp[i - 1][j];
  }
}

const target = numbers[n - 1];
console.log(dp[n - 2][target].toString());
