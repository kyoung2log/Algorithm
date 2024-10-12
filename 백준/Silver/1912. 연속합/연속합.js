const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' '))
  .flat()
  .map(Number);
const n = inputs.shift();
const dp = Array(n);

dp[0] = inputs[0];
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + inputs[i], inputs[i]);
}

console.log(Math.max(...dp));
