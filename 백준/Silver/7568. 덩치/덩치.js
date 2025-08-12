const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

let ans = '';
for (const [x, y] of inputs) {
  const rank = inputs.filter((it) => it[0] > x && it[1] > y).length + 1;
  ans += rank + ' ';
}

console.log(ans.trim());
