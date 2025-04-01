const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const n = +inputs[0];
const number = inputs[1].split(' ');
const dp = Array.from({ length: n }, () => Array(n).fill(0));

for (let i = 0; i < n; i++) {
  dp[i][i] = 1;
}

for (let i = 0; i < n - 1; i++) {
  if (number[i] === number[i + 1]) dp[i][i + 1] = 1;
}

for (let i = 3; i <= n; i++) {
  for (let start = 0; start <= n - i; start++) {
    const end = start + i - 1;
    if (number[start] === number[end] && dp[start + 1][end - 1]) dp[start][end] = 1;
  }
}

const ans = [];
for (let i = 3; i < inputs.length; i++) {
  const [s, e] = inputs[i].split(' ').map(Number);

  ans.push(dp[s - 1][e - 1]);
}

console.log(ans.join('\n'));
