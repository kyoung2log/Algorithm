const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, s] = inputs[0];
const sequence = inputs[1];

let left = 0;
let right = 0;
let sum = sequence[left];

let ans = Infinity;

while (left <= right && right < n) {
  if (sum < s) sum += sequence[++right];
  else {
    ans = Math.min(ans, right - left + 1);
    sum -= sequence[left++];
  }
}

if (ans === Infinity) console.log(0);
else console.log(ans);
