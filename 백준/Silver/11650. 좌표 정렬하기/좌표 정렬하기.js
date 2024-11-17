const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const ans = inputs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

for (let i = 0; i < n; i++) {
  console.log(...ans[i]);
}
