const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[m, n], cookies] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

let left = 0;
let right = Math.max(...cookies);
let ans = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cnt = 0;

  for (const cookie of cookies) {
    cnt += Math.floor(cookie / mid);
  }

  if (cnt < m) right = mid - 1;
  else {
    left = mid + 1;
    ans = mid;
  }
}

console.log(ans);
