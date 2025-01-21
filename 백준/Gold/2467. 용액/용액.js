const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], liquids] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

let left = 0;
let right = n - 1;
let minVal = Infinity;
const ans = [0, 0];

while (left < right) {
  const sum = Math.abs(liquids[left] + liquids[right]);

  if (sum === 0) {
    ans[0] = liquids[left];
    ans[1] = liquids[right];
    break;
  }

  if (sum < minVal) {
    minVal = sum;
    ans[0] = liquids[left];
    ans[1] = liquids[right];
  }

  if (liquids[left] + liquids[right] > 0) right -= 1;
  else left += 1;
}

console.log(...ans);
