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
let right = 1;
let len = 2;
let ans = Infinity;
let sum = sequence[left] + sequence[right];

while (left < right && right < n) {
  if (sum >= s && ans > len) ans = len;

  if (sum < s) {
    sum += sequence[++right];
    len += 1;
  } //
  else if (sum > s) {
    sum -= sequence[left++];
    len -= 1;
  } //
  else {
    sum -= sequence[left++];
    sum += sequence[++right];
  }
}
if (sequence.filter((num) => num >= s).length > 0) console.log(1);
else if (ans === Infinity) console.log(0);
else console.log(ans);
