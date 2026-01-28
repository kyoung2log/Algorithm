const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, b, w] = inputs[0].split(' ').map(Number);
const rocks = inputs[1];

let left = 0;
let ans = 0;
let white = 0;
let black = 0;
for (let right = 0; right < n; right++) {
  if (rocks[right] === 'B') black++;
  else white++;

  while (black > b) {
    if (rocks[left] === 'B') black--;
    else white--;
    left++;
  }

  if (white >= w) {
    ans = Math.max(ans, right - left + 1);
  }
}
console.log(ans);      