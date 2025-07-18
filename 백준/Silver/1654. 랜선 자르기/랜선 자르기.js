const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [k, n] = inputs.shift().split(' ').map(Number);
const lines = inputs.map(Number).sort((a, b) => a - b);

let left = 1;
let right = lines.at(-1);
let ans = 0;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let cnt = 0;

  for (const line of lines) {
    cnt += Math.floor(line / mid);
  }

  if (cnt >= n) {
    left = mid + 1;
    ans = mid;
  } else right = mid - 1;
}

console.log(ans);
