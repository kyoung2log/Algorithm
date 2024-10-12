const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const [n] = inputs[0];
const A = [0, ...inputs[1]];
const dp = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}
console.log(Math.max(...dp));
