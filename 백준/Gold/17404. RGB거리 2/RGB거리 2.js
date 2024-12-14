const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const R = [0];
const G = [0];
const B = [0];
for (const [r, g, b] of inputs) {
  R.push(r);
  G.push(g);
  B.push(b);
}

let result = Infinity;
for (let startColor = 0; startColor < 3; startColor++) {
  const dp = Array.from({ length: n + 1 }, () => [Infinity, Infinity, Infinity]);

  dp[1][startColor] = startColor === 0 ? R[1] : startColor === 1 ? G[1] : B[1];

  for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + R[i];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + G[i];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + B[i];
  }

  for (let endColor = 0; endColor < 3; endColor++) {
    if (startColor === endColor) continue;
    result = Math.min(result, dp[n][endColor]);
  }
}
console.log(result);
