const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n] = inputs[0];
const liquids = inputs[1].sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let ans = Infinity;
while (left < right) {
  const val = liquids[left] + liquids[right];

  if (Math.abs(ans) > Math.abs(val)) {
    ans = liquids[left] + liquids[right];
  }
  if (val === 0) break;
  else if (val < 0) left += 1;
  else right -= 1;
}

console.log(ans);
