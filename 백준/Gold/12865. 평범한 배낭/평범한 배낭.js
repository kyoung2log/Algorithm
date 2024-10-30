const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, k] = inputs[0];
const W = Array(n + 1).fill(0); // 무게
const V = Array(n + 1).fill(0); // 가치
const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const [w, v] = inputs[i];
  W[i] = w;
  V[i] = v;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= k; j++) {
    const a = dp[i - 1][j];
    const b = j - W[i] >= 0 ? dp[i - 1][j - W[i]] + V[i] : 0;

    dp[i][j] = Math.max(a, b);
  }
}

console.log(dp[n][k]);
