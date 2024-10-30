const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, k], ...items] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const dp = Array(k + 1).fill(0);

for (let i = 0; i < n; i++) {
  const [weight, value] = items[i];
  for (let j = k; j >= weight; j--) {
    dp[j] = Math.max(dp[j], dp[j - weight] + value);
  }
}

console.log(dp[k]);