const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const h = Number(fs.readFileSync(path).toString().trim());

const dp = Array(h + 3).fill(1n);

for (let i = 2; i <= h; i++) {
  if (i % 2) dp[i] = dp[i - 1] * 2n - 1n;
  else dp[i] = dp[i - 1] * 2n + 1n;
}

console.log(dp[h].toString());
